<template>
  <main>
    <ContentList path="/movies" v-slot="{ list: movies }">
      <div class="flex flex-wrap">
        <Movie
          v-for="movie in movies.sort(function (a, b) {
            return dayjs().diff(a.watched_on) - dayjs().diff(b.watched_on);
          })"
          :key="movie.name"
          v-bind="movie"
        />
      </div>
    </ContentList>
  </main>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import Movie from './Movie.vue';

useHead({
  title: 'Movies',
});
definePageMeta({
  layout: 'basic',
});
</script>
