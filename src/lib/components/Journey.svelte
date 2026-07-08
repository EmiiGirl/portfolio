<script>
  import potraitCasual from '$lib/assets/potraitCasual.png';
  import { reveal } from '$lib/actions/reveal.js';

  const milestones = [
    { year: '2016', title: 'Learning Programming', desc: 'Wrote the first lines of code and fell in love with logic and problem-solving.' },
    { year: '2018', title: 'Software Development', desc: 'Built robust applications and mastered frontend and backend architectures.' },
    { year: '2024', title: 'Graduated BCA', desc: 'Completed Bachelor of Computer Applications, solidifying computer science fundamentals.' },
    { year: '2025', title: 'Founded Updown Interactive', desc: 'Started the company to build meaningful products for modern businesses.' },
    { year: '2025', title: 'Started MCA', desc: 'Pursuing Master of Computer Applications in parallel to leading Updown.' },
    { year: 'Present', title: 'Building Products', desc: 'Successfully deployed uBilly, and currently developing MAASH.' }
  ];
</script>

<section id="journey" class="py-32 lg:py-48 px-6 lg:px-12 bg-background relative overflow-hidden">
  <div class="absolute inset-0 dotted-pattern opacity-30 pointer-events-none -z-10"></div>
  
  <div class="max-w-7xl mx-auto">
    <div use:reveal={{origin: 'bottom', delay: 200, blur: true}} class="text-center max-w-3xl mx-auto mb-24">
      <span class="text-sm font-bold tracking-widest text-primary-accent uppercase mb-4 block">Chapter 04</span>
      <h2 class="text-5xl lg:text-7xl font-serif text-primary-text mb-6">The Genesis</h2>
      <p class="text-xl text-secondary-text font-serif italic">From writing the first lines of code to leading product strategy and founding a company.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      <!-- Vertical Timeline -->
      <div class="relative before:absolute before:inset-0 before:ml-4 lg:before:ml-8 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:via-border/50 before:to-transparent">
        <div class="space-y-16 lg:space-y-24">
          {#each milestones as milestone, index}
            <div use:reveal={{origin: 'bottom', delay: 200 + (index * 100)}} class="relative flex items-start group">
              <!-- Marker -->
              <div class="absolute left-4 lg:left-8 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-[6px] border-background bg-white shadow-md shrink-0 group-hover:border-primary-accent transition-colors z-10 mt-1">
                <div class="w-2 h-2 rounded-full bg-border group-hover:bg-primary-accent transition-colors"></div>
              </div>
              
              <!-- Content -->
              <div class="pl-16 lg:pl-24 w-full group-hover:translate-x-2 transition-transform duration-500">
                <span class="text-sm font-bold text-primary-accent tracking-widest uppercase mb-2 block">{milestone.year}</span>
                <h3 class="text-2xl font-serif text-primary-text mb-3">{milestone.title}</h3>
                <p class="text-lg text-secondary-text leading-relaxed">{milestone.desc}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Image integrated into layout -->
      <div class="relative lg:sticky lg:top-32 hidden lg:block" use:reveal={{origin: 'right', delay: 500}}>
        <div class="relative rounded-[2.5rem] overflow-hidden border border-border shadow-2xl group w-full h-[700px] bg-transparent">
          <div class="absolute inset-0 bg-primary-accent/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-20 pointer-events-none"></div>
          
          <!-- Watercolor Splash Background (Hidden by default, shows on hover) -->
          <div class="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out pointer-events-none">
            <div class="absolute top-[10%] left-[10%] w-[70%] h-[70%] bg-cyan-400/80 rounded-full blur-[60px] mix-blend-multiply animate-blob"></div>
            <div class="absolute top-[20%] right-[10%] w-[60%] h-[60%] bg-rose-400/80 rounded-full blur-[60px] mix-blend-multiply animate-blob animation-delay-2000"></div>
            <div class="absolute bottom-[10%] left-[20%] w-[80%] h-[60%] bg-amber-400/80 rounded-full blur-[60px] mix-blend-multiply animate-blob animation-delay-4000"></div>
          </div>

          <img src={potraitCasual} alt="Sreelakshmi MR Casual" class="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 ease-out relative z-10" />
        </div>
        
        <!-- Decorative frame -->
        <div class="absolute -inset-6 border-2 border-border/50 rounded-[3rem] -z-10 pointer-events-none"></div>
      </div>

    </div>
  </div>
</section>
