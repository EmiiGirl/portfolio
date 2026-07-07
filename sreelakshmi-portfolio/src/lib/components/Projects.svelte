<script>
  import Card from './Shared/Card.svelte';
  import Button from './Shared/Button.svelte';
  import uBillyImage from '$lib/assets/uBilly.png';
  import maashImage from '$lib/assets/maash.png';
  import { ArrowUpRight } from '@lucide/svelte';
  import { reveal } from '$lib/actions/reveal.js';
  import { parallax } from '$lib/actions/parallax.js';

  const projects = [
    {
      title: 'uBilly',
      description: 'Modern business management software helping retailers digitize their daily operations with a seamless and intuitive interface.',
      image: uBillyImage,
      chips: ['Billing', 'Inventory', 'POS', 'Online Store', 'GST', 'Payments'],
      layout: 'image-left',
      ratio: 'aspect-[21/10]',
      link: 'https://www.ubilly.com'
    },
    {
      title: 'MAASH',
      description: 'AI-powered mentor helping students and professionals achieve goals through personalized learning and strategic planning.',
      image: maashImage,
      chips: ['AI', 'Planning', 'Goals', 'Learning', 'Mentorship'],
      layout: 'image-right',
      ratio: 'aspect-video',
      link: 'https://www.updown-interactive.in'
    }
  ];
</script>

<section id="projects" class="py-32 lg:py-48 px-6 lg:px-12 bg-white">
  <div class="max-w-7xl mx-auto space-y-32">
    
    <div use:reveal={{origin: 'bottom', delay: 200, blur: true}} class="text-center max-w-3xl mx-auto mb-24">
      <span class="text-sm font-bold tracking-widest text-primary-accent uppercase mb-4 block">Chapter 03</span>
      <h2 class="text-5xl lg:text-7xl font-serif text-primary-text mb-6">The Artifacts</h2>
      <p class="text-xl text-secondary-text font-serif italic">A showcase of premium software solutions designed and developed to solve real-world problems.</p>
    </div>

    {#each projects as project}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Image Container -->
        <div use:reveal={{origin: project.layout === 'image-left' ? 'left' : 'right', delay: 300}} class="{project.layout === 'image-left' ? 'lg:order-1' : 'lg:order-2'} group relative w-full {project.ratio}">
          <!-- Decorative Background behind image -->
          <div class="absolute inset-0 bg-background rounded-3xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700"></div>
          
          <div class="relative rounded-3xl overflow-hidden border border-border bg-white shadow-xl hover-lift h-full w-full">
            <div use:parallax class="w-full h-full">
              <img src={project.image} alt={project.title} class="w-full h-full object-cover scale-[1.1] group-hover:scale-[1.15] transition-all duration-700 ease-out" />
            </div>
          </div>
        </div>

        <!-- Content Container -->
        <div use:reveal={{origin: 'bottom', delay: 500, blur: true}} class="{project.layout === 'image-left' ? 'lg:order-2' : 'lg:order-1'} space-y-8 lg:px-8">
          <div class="space-y-6">
            <h3 class="text-5xl lg:text-6xl font-serif text-primary-text">{project.title}</h3>
            <p class="text-xl text-secondary-text leading-relaxed">{project.description}</p>
          </div>
          
          <div class="flex flex-wrap gap-2">
            {#each project.chips as chip}
              <span class="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-secondary-text">
                {chip}
              </span>
            {/each}
          </div>

          <div class="pt-4">
            <Button variant="outline" href={project.link} target="_blank" class="group">
              Explore Project 
              <ArrowUpRight size={16} class="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    {/each}

  </div>
</section>
