FROM node:20.10.0-alpine as base

RUN apk --no-cache add curl

USER root

ENV SUPERCRONIC_URL=https://github.com/aptible/supercronic/releases/download/v0.2.29/supercronic-linux-amd64 \
  SUPERCRONIC=supercronic-linux-amd64 \
  SUPERCRONIC_SHA1SUM=cd48d45c4b10f3f0bfdd3a57d054cd05ac96812b

RUN curl -fsSLO "$SUPERCRONIC_URL" \
  && echo "${SUPERCRONIC_SHA1SUM}  ${SUPERCRONIC}" | sha1sum -c - \
  && chmod +x "$SUPERCRONIC" \
  && mv "$SUPERCRONIC" "/usr/local/bin/${SUPERCRONIC}" \
  && ln -s "/usr/local/bin/${SUPERCRONIC}" /usr/local/bin/supercronic

WORKDIR /src

COPY crontab crontab
COPY run.sh .
RUN chmod +x run.sh

FROM base as install

WORKDIR /src
RUN npm i -g pnpm@9.0.4
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM install as build
COPY . .
RUN pnpm build

FROM build as run
EXPOSE 3000
CMD exec node .output/server/index.mjs