<script>
  import Card from './Shared/Card.svelte';
  import potraitPodcast from '$lib/assets/potraitPodcast.png';
  import { Lightbulb, Code2, Rocket } from '@lucide/svelte';
  import { reveal } from '$lib/actions/reveal.js';
  import { parallax } from '$lib/actions/parallax.js';

  const mindsetCards = [
    {
      icon: Lightbulb,
      title: 'Product Thinking',
      description: 'Focusing on user needs, long-term vision, and solving real problems with intuitive design.'
    },
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Crafting robust, scalable, and maintainable architectures that stand the test of time.'
    },
    {
      icon: Rocket,
      title: 'Entrepreneurship',
      description: 'Taking ownership, navigating ambiguity, and driving initiatives from zero to one.'
    }
  ];
</script>

<section id="about" class="py-32 lg:py-48 px-6 lg:px-12 bg-white relative">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
      
      <!-- Left: Image -->
      <div class="lg:col-span-6 relative" use:reveal={{origin: 'left', delay: 200}}>
        <div class="absolute -left-12 top-1/2 -translate-y-1/2 w-full h-[110%] bg-background rounded-[3rem] -z-10 hidden lg:block"></div>
        
        <div class="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50 group bg-background">
          <div use:parallax class="w-full h-full">
            <img src={potraitPodcast} alt="Sreelakshmi MR on a podcast" class="w-full h-full object-cover scale-[1.1] group-hover:scale-[1.15] grayscale group-hover:grayscale-0 group-hover:contrast-100 contrast-125 transition-all duration-700 ease-out" />
          </div>
        </div>

        <!-- Floating Info Card -->
        <div use:reveal={{origin: 'bottom', delay: 600}}>
          <Card class="absolute -right-4 lg:-right-16 bottom-16 p-8 max-w-[280px] z-20 border-l-4 border-l-primary-accent bg-white/95 backdrop-blur-xl hidden sm:block shadow-xl">
            <p class="text-base font-semibold text-primary-text leading-relaxed">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
          </Card>
        </div>
      </div>

      <!-- Right: Content -->
      <div class="lg:col-span-6 space-y-16 z-10">
        <div class="space-y-8">
          <div use:reveal={{origin: 'bottom', delay: 200, blur: true}}>
            <span class="text-sm font-bold tracking-widest text-primary-accent uppercase mb-4 block">Chapter 01</span>
            <h2 class="text-5xl lg:text-7xl font-serif text-primary-text leading-tight">
              The Philosophy
            </h2>
          </div>
          
          <div class="space-y-8 text-xl text-secondary-text leading-relaxed font-serif">
            <p use:reveal={{origin: 'bottom', delay: 400, blur: true}}>
              I believe that great software is built at the intersection of empathy and engineering. My journey isn't just about writing code; it's about <strong class="text-primary-text font-bold">building products</strong> that people love to use and <strong class="text-primary-text font-bold">leading teams</strong> to realize their full potential.
            </p>
            <p use:reveal={{origin: 'bottom', delay: 500}}>
              As a founder and product leader, I focus on <strong class="text-primary-text font-bold">designing experiences</strong> that are intuitive and empowering. I approach every challenge by <strong class="text-primary-text font-bold">solving problems</strong> from first principles and <strong class="text-primary-text font-bold">thinking long-term</strong> about architecture and user impact.
            </p>
          </div>
        </div>

        <!-- Handcrafted Cards -> Editorial Blocks -->
        <div class="grid grid-cols-1 gap-12 pt-8 border-t border-border/50">
          {#each mindsetCards as card, i}
            {@const Icon = card.icon}
            <div use:reveal={{origin: 'left', delay: 600 + (i * 200), blur: true}} class="flex gap-6 group">
              <div class="mt-1 text-primary-accent opacity-50 group-hover:opacity-100 transition-opacity">
                <Icon size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 class="font-serif text-2xl text-primary-text mb-3">{card.title}</h3>
                <p class="text-lg text-secondary-text leading-relaxed">{card.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>

    </div>
  </div>
</section>
