<script setup>
const props = defineProps({
    white: {
        type: Boolean,
        default: false,
    },
    width: {
        type: String,
        default: '30',
    },
});
</script>
<template>
    <address>
        <a href="https://www.linkedin.com/company/moby-it" target="_blank">
            <NuxtImg
                class="icon-link"
                :src="`/icons/linkedin${$props.white ? '-white' : ''}.svg`"
                alt="linkedin-icon"
                :width="$props.width"
                title="LinkedIn"
            />
        </a>
        <a href="https://github.com/moby-it" target="_blank">
            <NuxtImg
                class="icon-link"
                :src="`/icons/github-circle${$props.white ? '-white' : ''}.svg`"
                alt="github-icon"
                :width="$props.width"
                title="Github"
            />
        </a>
        <a href="mailto:contact@moby-it.com" target="_blank">
            <NuxtImg
                class="icon-link"
                :src="`/icons/mail${$props.white ? '-white' : ''}.svg`"
                alt="email"
                :width="$props.width"
                title="Email"
            />
        </a>
    </address>
</template>
