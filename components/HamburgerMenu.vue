<script setup>

const navLinks = inject('navLinks')

const emits = defineEmits(['closeIconClick'])

</script>

<template>

    <TheOverlay @click="$emit('closeIconClick')"></TheOverlay>

    <!-- transition doesn't work -->
    <Transition name="slide">
        <aside class="fixed navigation">

            <div @click="$emit('closeIconClick')" class="close-icon absolute">
                <Icon name="material-symbols:close" size="2rem"></Icon>
            </div>

            <ul>
                <li @click="$emit('closeIconClick')" v-for="link in navLinks">
                    <a :href="'/#' + link"> {{ link }} </a>
                </li>
            </ul>

        </aside>
    </Transition>

</template>

<style scoped>
aside {
    width: 80%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: #F9F9F9;
    overflow-x: hidden;
    overflow-y: scroll;
    z-index: 4;
    padding: 4rem 2rem;
}

.close-icon {
    top: 36px;
    right: 36px;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    list-style: none;
}

li>a {
    color: var(--black);
    text-decoration: none;
    border-radius: var(--rounded);
    padding: 0.4rem;

    &:active {
        transition: 0.2s ease-in-out;
        background-color: var(--red);
        color: white;
        font-weight: 700;
    }
}
</style>
