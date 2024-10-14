<template>
  <header class="header">
    <h1>Barringer Photography</h1>
    <NuxtLink to="/" class="home-button">Home</NuxtLink>
  </header>
</template>

<style scoped>
.header {
  background-color: #7585b9;
  color: white;
  padding: 1rem;
  text-align: center;
}

.home-button {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
  color: #7585b9;
  border: none;
  border-radius: 4px;
  text-decoration: none; /* Remove underline from link */
}

.home-button:hover {
  background-color: #e0e0e0; /* Light grey on hover */
}
</style>
