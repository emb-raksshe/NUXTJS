export default defineNuxtRouteMiddleware((to, from) => {
  console.log("hello from middleware");
  });

// export default defineNuxtRouteMiddleware((to, from) => {
//   // console.log(to);
//    // console.log(from);
//    const isLoggedIn = false;
//   if(isLoggedIn) {
//     //redirect to page we want togo in
//     return navigateTo(to.fullPath);
//     }
//     return navigateTo("/login");
//   });