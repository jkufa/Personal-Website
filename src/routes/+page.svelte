<script lang="ts">
	import Landing from '$lib/components/landing.svelte';
	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';

	let lenis: Lenis;

	onMount(() => {
		lenis = new Lenis();

		lenis.on('scroll', (e: number) => {
			console.log(e);
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	});
</script>

<Landing></Landing>
<div class="h-screen"></div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
