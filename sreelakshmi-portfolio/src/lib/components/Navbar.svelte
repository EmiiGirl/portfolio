<script>
  import { onMount } from 'svelte';
  import Button from './Shared/Button.svelte';

  let scrolled = $state(false);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Updown', href: '#updown' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 lg:px-12 {scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'}">
  <div class="max-w-7xl mx-auto flex items-center justify-between">
    <div class="flex items-center gap-2 font-bold text-xl tracking-tight">
      <span class="text-primary-text">Sreelakshmi</span><span class="text-primary-accent">.</span>
    </div>

    <div class="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-sm px-2 py-1 rounded-full border border-border/50 shadow-sm">
      {#each links as link}
        <a href={link.href} class="px-4 py-2 text-sm font-medium text-secondary-text hover:text-primary-text rounded-full transition-colors hover:bg-black/5 relative group">
          {link.name}
        </a>
      {/each}
    </div>

    <div class="flex items-center w-24">
      <!-- Spacer for flex-between balance -->
    </div>
  </div>
</nav>
