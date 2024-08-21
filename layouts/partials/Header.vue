<template>
    <header>
    <h3 class="logo"> Personal Website</h3>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About Us</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact">Contact Us</NuxtLink>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
header {
    background: #77B6EA;
    color: #E8EEF2;
    width: 100%;
    padding : 0 7em;
    height: 8em; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
}

h3.logo {
    font-size: 3em;
    font-weight: 300;
}

ul{
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
}

li {
    font-size: 1.5em;
    padding: 1em;
}
</style>