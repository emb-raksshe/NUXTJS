<template>
  <header class="header">
    <div class="header-content">
      <nav class="nav-menu">
        <NuxtLink to="/" class="nav-item">Home</NuxtLink>
        <NuxtLink to="/about" class="nav-item">About Us</NuxtLink>
        <NuxtLink to="/contact" class="nav-item">Contact Us</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #333;
  padding: 10px 20px;
  color: white;
}

.header-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-menu {
  display: flex;
  gap: 20px; /* Adds space between navigation items */
}

.nav-item {
  text-decoration: none;
  color: white;
}

.nav-item:hover {
  text-decoration: underline;
}
</style>
