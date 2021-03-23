<template>
    <div>
        <Button class-name="bg-blue-500">This is a react button</Button>
        <ReactClass />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { Component } from 'vue';
import Button from '~/components/React/Button';
import ReactClass from '~/components/React/ReactClass';

export default defineComponent({
    components: {
        Button: Button as Component,
        ReactClass: ReactClass as Component
    }
});
</script>
