<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let loading = true;
	let h1: HTMLElement;
	let h2: HTMLElement;

	onMount(async () => {
    loading = false;
		gsap.from('h1, h2, h2 > div', {
			y: 600,
			duration: 1.3,
			ease: 'power4.out',
			stagger: 0.2,
			opacity: 0
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
