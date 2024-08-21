<template>
    <div class="ProfileHeader">
      <div class="profile-info">
        <h1 class="name">Rakshitha</h1>
        <p class="title">Software Developer</p>
        <p class="bio">
          Passionate about creating beautiful and functional web experiences. With over 1 year of experience in software development, I strive to bring creativity and innovation to every project.
        </p>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .ProfileHeader {
    display: flex;
    align-items: center;
    padding: 20px;
    margin: 0em;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  
    .profile-info {
      .name {
        font-size: 1.5em;
        margin: 0;
        color: #333;
      }
  
      .title {
        font-size: 1.2em;
        color: #666;
        margin: 5px 0;
      }
  
      .bio {
        font-size: 1em;
        color: #555;
        margin-top: 10px;
      }
    }
  }
  </style>
  