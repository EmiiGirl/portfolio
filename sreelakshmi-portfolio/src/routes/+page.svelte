<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Company from '$lib/components/Company.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Journey from '$lib/components/Journey.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Sreelakshmi MR | Updown Interactive</title>
	<meta
		name="description"
		content="Portfolio of Sreelakshmi MR, Co-Founder & Chief Product Officer at Updown Interactive."
	/>
</svelte:head>

<Navbar />

<main>
	<Hero />
	<About />
	<Company />
	<Projects />
	<Journey />
	<Contact />
</main>

<Footer />
