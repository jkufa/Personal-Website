<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let loading = true;
	let h1: HTMLElement;
	let h2: HTMLElement;

	onMount(async () => {
		loading = false;

		let tl = gsap.timeline();
		tl.from('h1', {
			y: 200,
			duration: 1.25,
			ease: 'power4.out',
			opacity: 0,
      delay: .2,
		}).from('h2, h2 > div', {
			y: 200,
			duration: 1.25,
      delay: '-.25',
			ease: 'power4.out',
			opacity: 0,
      stagger: .2
		});
	});
</script>

<!-- {#if !loading} -->
<div class="flex h-[80vh] items-end">
	<div class="title text-10xl w-fit font-bold tracking-tighter">
		<h1 bind:this={h1}>Jack Kufa</h1>
		<h2 bind:this={h2}>
			Frontend <div class="text-end">Engineer</div>
		</h2>
	</div>
</div>
<!-- {/if} -->

<style>
</style>
