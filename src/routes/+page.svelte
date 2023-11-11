<script lang="ts">
  import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';

  let lenis: Lenis;

  onMount(() => {
    lenis = new Lenis();
  
    lenis.on('scroll', (e: number) => {
      console.log(e);
    })
  
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  });
</script>
