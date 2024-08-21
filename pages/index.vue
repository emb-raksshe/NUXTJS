<template>
  <div class="container mx-auto justify-center">
    <ContentList
      path="/posts"
      :query="{
        draft: false,
        sort: [
          {
            date: -1,
          },
        ],
      }"
      v-slot="{ list }"
    >
      <div
        v-for="post in list"
        :key="post.path"
        class="blog-card bg-white rounded-2xl overflow-hidden mb-4"
      >
        <div class="h-[620px] relative">
          <img
            :src="post.thumbnail"
            class="w-full h-full object-cover absolute"
          />
        </div>

        <div class="blog-card--meta p-6">
          <h3 class="text-2xl font-semibold">
            <NuxtLink :to="`/${post.slug}`"> {{ post.title }} </NuxtLink>
          </h3>
          <div class="text-sm text-gray-500">
            {{ post.date }}
          </div>
          <div class="text-sm text-gray-500">
            {{ post.author }}
          </div>
        </div>
      </div>
    </ContentList>
  </div>
</template>

<style>
</style>
