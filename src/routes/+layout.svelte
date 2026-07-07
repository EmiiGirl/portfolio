<script lang="ts" context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-background text-primary-text font-sans">
	{@render children()}
</div>
