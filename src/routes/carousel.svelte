<script lang="ts">
  import { onMount } from 'svelte';

  interface Slide {
    img: string;
    alt: string;
  }

  const slides: Slide[] = [
    {
      img: 'https://source.unsplash.com/user/loacfr/H6KJ2D0LphU/3000x600',
      alt: 'valparaiso colorful buildings'
    },
    { 
      img: 'https://source.unsplash.com/9CPAjGVB378/3000x600', 
      alt: 'st paul minnesota skyline' 
    }
  ];

  let currentSlideIndex = 0;
  let intervalId: number;

  onMount(() => {
    intervalId = setInterval(() => {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    }, 5000);
  });
</script>

<style>
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 250ms;
  }

  .slide-enter,
  .slide-leave-to {
    opacity: 0;
  }
</style>

<section class="container-fluid mx-auto overflow-hidden">
  {#each slides as slide, index}
    <div
      class:slide-active={index === currentSlideIndex}
      class="fixed inset-0 h-full w-full flex items-center justify-center"
    >
      <img
        class="h-64 w-full object-cover"
        src={slide.img}
        alt={slide.alt}
      />
    </div>
  {/each}
</section>
