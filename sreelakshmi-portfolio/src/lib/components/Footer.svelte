<script>
  import { Mail, ArrowUpRight } from '@lucide/svelte';
</script>

<footer class="bg-white border-t border-border py-16 px-6 lg:px-12">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
    
    <div class="max-w-xs">
      <div class="flex items-center gap-2 font-bold text-xl tracking-tight mb-4">
        <span class="text-primary-text">Sreelakshmi</span><span class="text-primary-accent">.</span>
      </div>
      <p class="text-secondary-text text-sm leading-relaxed mb-6">
        Co-Founder & Chief Product Officer at Updown Interactive. Building meaningful products with craftsmanship and intent.
      </p>
      <div class="flex items-center gap-4 text-secondary-text">
        <a href="https://www.linkedin.com/in/sreelakshmi-m-r-393300308/" target="_blank" aria-label="LinkedIn" class="hover:text-primary-accent transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
        <a href="https://github.com/EmiiGirl" target="_blank" aria-label="GitHub" class="hover:text-primary-accent transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
        <a href="mailto:sreelakshmi@updown-interactive.in" class="hover:text-primary-accent transition-colors"><Mail size={20} /></a>
      </div>
    </div>

    <div class="flex gap-16">
      <div>
        <h4 class="font-semibold text-primary-text mb-4">Navigation</h4>
        <ul class="space-y-3">
          <li><a href="#about" class="text-secondary-text text-sm hover:text-primary-accent transition-colors inline-flex items-center gap-1">About</a></li>
          <li><a href="#updown" class="text-secondary-text text-sm hover:text-primary-accent transition-colors inline-flex items-center gap-1">Updown</a></li>
          <li><a href="#projects" class="text-secondary-text text-sm hover:text-primary-accent transition-colors inline-flex items-center gap-1">Projects</a></li>
          <li><a href="#journey" class="text-secondary-text text-sm hover:text-primary-accent transition-colors inline-flex items-center gap-1">Journey</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-primary-text mb-4">Connect</h4>
        <ul class="space-y-3">
          <li><a href="#contact" class="text-secondary-text text-sm hover:text-primary-accent transition-colors inline-flex items-center gap-1">Contact Me <ArrowUpRight size={14}/></a></li>
        </ul>
      </div>
    </div>

  </div>
  
  <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-secondary-text">
    <p>&copy; {new Date().getFullYear()} Sreelakshmi MR. All rights reserved.</p>
    <p>Handcrafted in SvelteKit</p>
  </div>
</footer>
