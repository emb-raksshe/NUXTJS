<template>
  <div class="max-w-10xl px-9 mx-auto">
    <NuxtLayout>
   <header class = "mt-8 mb-4 flex justify-between items-end">
      <div>
        <h1 class ="text-3xl font-semibold mx-3 px-5">
          <NuxtLink to="/">Personal Website</NuxtLink>
        </h1>
        <p class="text-gray-500 mx-3 px-1 pl-5">Learn Nuxt JS</p>
        </div>
          <nav class="nav-menu">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/about">About Us</NuxtLink>
                <NuxtLink to="/contact">Contact Us</NuxtLink>
                <NuxtLink to="/hello-world">Hello-World</NuxtLink>
                <Btn>HireMe</Btn>
          </nav>
    </header>
     <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<style>
body {
  @apply bg-gray-100;
}

header {
  width: 100%;
  background-color: #333;
  padding: 10px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-menu {
  margin-left: 52em;
  padding: 5px;
  display: flex;
  gap: 20px;
}

.nav-item {
  margin-left: 20px;
  text-decoration: none;
  color: white;
}

.nav-item:hover {
  text-decoration: underline;
}
</style>
