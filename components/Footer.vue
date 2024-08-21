<template>
  <footer>
    <div class="footer-content">
      <p>&copy; {{ currentYear }} NUXT JS</p>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
footer {
  background: #333;
  color: #fff;
  padding: 1em 0;
  text-align: center;
}

.footer-content ul {
  list-style: none;
  padding: 0;
}

.footer-content ul li {
  display: inline;
  margin: 0 10px;
}

.footer-content ul li a {
  color: #fff;
  text-decoration: none;
}
</style>
