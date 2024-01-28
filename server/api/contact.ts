export default defineEventHandler(event => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('hello');
    }, 2000);
  });
});