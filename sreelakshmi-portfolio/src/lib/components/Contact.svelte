<script>
  import Card from './Shared/Card.svelte';
  import Button from './Shared/Button.svelte';
  import potraitSuite from '$lib/assets/potraitSuite.png';
  import { Mail, MapPin, Send } from '@lucide/svelte';
  import { reveal } from '$lib/actions/reveal.js';
  import { parallax } from '$lib/actions/parallax.js';
</script>

<section id="contact" class="py-32 lg:py-48 px-6 lg:px-12 bg-[#FAFAF8] relative">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      
      <!-- Contact Info & Image -->
      <div class="space-y-12" use:reveal={{origin: 'left', delay: 200, blur: true}}>
        <div class="space-y-6">
          <span class="text-sm font-bold tracking-widest text-primary-accent uppercase mb-2 block">Epilogue</span>
          <h2 class="text-5xl lg:text-7xl font-serif text-primary-text leading-tight">
            Let's Build Something Meaningful
          </h2>
          <p class="text-xl text-secondary-text leading-relaxed font-serif italic mt-8 block">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div class="flex items-center gap-6 lg:gap-8">
          {#await import('$lib/assets/potraitSuite.png')}
             <div class="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gray-100 border-2 border-border shadow-sm shrink-0"></div>
          {:then _}
             <div class="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-white shadow-xl shrink-0 group overflow-hidden bg-transparent">
                <!-- Watercolor Splash Background (Hidden by default, shows on hover) -->
                <div class="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out pointer-events-none">
                  <div class="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-cyan-400/80 rounded-full blur-[20px] mix-blend-multiply animate-blob"></div>
                  <div class="absolute top-[20%] right-[10%] w-[70%] h-[70%] bg-rose-400/80 rounded-full blur-[20px] mix-blend-multiply animate-blob animation-delay-2000"></div>
                  <div class="absolute bottom-[10%] left-[20%] w-[90%] h-[70%] bg-amber-400/80 rounded-full blur-[20px] mix-blend-multiply animate-blob animation-delay-4000"></div>
                </div>
                <div use:parallax class="w-full h-full">
                  <img src={potraitSuite} alt="Sreelakshmi MR" class="w-full h-full object-cover scale-[1.1] group-hover:scale-[1.15] grayscale group-hover:grayscale-0 contrast-125 transition-all duration-500 relative z-10" />
                </div>
             </div>
          {:catch}
             <div class="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gray-100 border-2 border-border shadow-sm shrink-0"></div>
          {/await}
          
          <div class="space-y-3">
            <a href="mailto:sreelakshmi@updown-interactive.in" class="flex items-center gap-2 text-secondary-text hover:text-primary-accent transition-colors font-medium">
              <Mail size={18} /> sreelakshmi@updown-interactive.in
            </a>
            <div class="flex items-center gap-4 text-secondary-text">
              <a href="https://www.linkedin.com/in/sreelakshmi-m-r-393300308/" target="_blank" aria-label="LinkedIn" class="hover:text-primary-accent transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="https://github.com/EmiiGirl" target="_blank" aria-label="GitHub" class="hover:text-primary-accent transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
              <span class="flex items-center gap-1 text-sm"><MapPin size={16}/> India</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div use:reveal={{origin: 'bottom', delay: 400}}>
        <Card class="p-8 lg:p-12 bg-background border-none shadow-2xl">
          <form class="space-y-6" onsubmit={(e) => e.preventDefault()}>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="name" class="text-sm font-medium text-primary-text">Name</label>
              <input type="text" id="name" placeholder="John Doe" class="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary-text focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-primary-accent transition-all" />
            </div>
            <div class="space-y-2">
              <label for="email" class="text-sm font-medium text-primary-text">Email</label>
              <input type="email" id="email" placeholder="sreelakshmi@updown-interactive.in" class="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary-text focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-primary-accent transition-all" />
            </div>
          </div>
          <div class="space-y-2">
            <label for="message" class="text-sm font-medium text-primary-text">Message</label>
            <textarea id="message" rows="4" placeholder="Tell me about your project..." class="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary-text focus:outline-none focus:ring-2 focus:ring-primary-accent/50 focus:border-primary-accent transition-all resize-none"></textarea>
          </div>
          <Button class="w-full group py-4 text-lg">
            Send Message 
            <Send size={20} class="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </form>
        </Card>
      </div>

    </div>
  </div>
</section>
