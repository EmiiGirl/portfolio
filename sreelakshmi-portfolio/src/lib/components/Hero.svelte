<script>
  import Button from './Shared/Button.svelte';
  import Card from './Shared/Card.svelte';
  import potraitSuite from '$lib/assets/potraitSuite.png';
  import { ArrowRight, Mail } from '@lucide/svelte';
  import { reveal } from '$lib/actions/reveal.js';
  import { parallax } from '$lib/actions/parallax.js';

  const stats = [
    { label: 'Products Built', value: '12+' },
    { label: 'Startups', value: '2' },
    { label: 'Years Building', value: '8+' },
    { label: 'Projects Delivered', value: '30+' }
  ];

  let isHovered = $state(false);
</script>

<section id="home" class="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden blueprint-grid">
  
  <!-- Massive Editorial Typography Background -->
  <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
    <div use:parallax={{speed: 0.15}}>
      <h1 use:reveal={{delay: 300, origin: 'scale', blur: true}} class="text-[12vw] lg:text-[14vw] font-serif font-black tracking-tighter leading-none whitespace-nowrap select-none transition-all duration-1000 ease-out {isHovered ? 'text-primary-accent/20 blur-[4px]' : 'text-primary-text/5 blur-0'}">
        SREELAKSHMI
      </h1>
    </div>
  </div>

  <div class="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">
    
    <!-- Central Portrait with Background Effect -->
    <div use:reveal={{delay: 600, origin: 'bottom'}} class="relative w-full max-w-lg lg:max-w-2xl group flex justify-center items-end mt-12 lg:mt-24" onmouseenter={() => isHovered = true} onmouseleave={() => isHovered = false} role="region" aria-label="Portrait">
      
      <!-- New Cool Cinematic Glow Effect -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] z-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out pointer-events-none scale-90 group-hover:scale-100">
        <!-- Main broad glow -->
        <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/40 via-purple-500/40 to-amber-500/40 blur-[100px] animate-blob mix-blend-multiply"></div>
        <!-- Inner intense highlight -->
        <div class="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-rose-400/50 blur-[80px] animate-pulse mix-blend-screen"></div>
      </div>

      <!-- The Image with Mask -->
      <img src={potraitSuite} alt="Sreelakshmi MR" class="w-full h-auto object-contain drop-shadow-2xl grayscale group-hover:grayscale-0 contrast-125 transition-all duration-700 ease-out relative z-10 scale-[1.1] group-hover:scale-[1.15]" style="-webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%); mask-image: linear-gradient(to bottom, black 70%, transparent 100%);" />
      
    </div>

    <!-- Clean Typography Foreground -->
    <div class="relative z-20 text-center -mt-32 lg:-mt-48 px-4 w-full">
      <!-- Soft halo behind text to ensure perfect readability over the portrait -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-[#FAFAF8]/90 blur-[40px] rounded-full -z-10 pointer-events-none"></div>

      
      <h2 use:reveal={{delay: 1000, origin: 'bottom', blur: true}} class="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-text via-primary-text to-secondary-text leading-[1.1] mb-8 max-w-4xl mx-auto pb-2 drop-shadow-sm">
        Co-Founder <span class="italic font-light text-primary-accent drop-shadow-none">&</span> Chief Product Officer
      </h2>
      
      <p use:reveal={{delay: 1200, origin: 'bottom', blur: true}} class="text-xl lg:text-2xl text-secondary-text leading-relaxed max-w-2xl mx-auto mb-12 font-serif">
        Bridging the gap between engineering and design to build meaningful products at <strong class="text-primary-text font-bold">Updown Interactive</strong>.
      </p>

      <div use:reveal={{delay: 1400, origin: 'bottom', blur: true}} class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button href="#projects" class="group px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
          View Projects 
          <ArrowRight size={18} class="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button variant="secondary" href="#contact" class="px-8 rounded-full bg-transparent border-border hover:bg-white transition-all shadow-sm">
          Let's Talk
        </Button>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div use:reveal={{delay: 1800, origin: 'bottom', blur: true}} class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <div class="w-[1px] h-12 bg-gradient-to-b from-primary-text to-transparent animate-pulse"></div>
    </div>

  </div>
</section>
