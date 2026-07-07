<script>
	import Card from './Shared/Card.svelte';
	import updownLogo from '$lib/assets/updown.png';
	import { reveal } from '$lib/actions/reveal.js';

	const timeline = [
		{ year: 'Phase 1', title: 'Founded Updown', desc: 'Established Updown Interactive.' },
		{ year: 'Phase 2', title: 'Built uBilly', desc: 'Developed modern business management software.' },
		{ year: 'Phase 3', title: 'Launched', desc: 'Successfully onboarded real customers.' },
		{ year: 'Phase 4', title: 'Startup India 2026', desc: 'Enrolled in the Startup India initiative.' },
		{ year: 'Phase 5', title: 'Building MAASH', desc: 'Started building an AI-powered mentorship platform.' }
	];
</script>

<section id="updown" class="py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden bg-[#FAFAF8]">
	
	<div class="max-w-7xl mx-auto">
        
		<div class="mb-20 lg:mb-32 relative" use:reveal={{origin: 'bottom', delay: 200, blur: true}}>
			<span class="text-sm font-bold tracking-widest text-primary-accent uppercase mb-4 block">Chapter 02</span>
			<h2 class="text-5xl lg:text-7xl font-serif text-primary-text leading-tight mb-16">
				The Enterprise
			</h2>
			
			<div class="relative py-4 lg:py-8 pl-4 lg:pl-12">
				<div class="absolute -top-16 -left-4 lg:-left-8 text-[12rem] lg:text-[18rem] leading-none font-serif text-primary-accent/10 select-none z-0">"</div>
				<h3 class="text-6xl md:text-7xl lg:text-[7rem] font-serif text-transparent bg-clip-text bg-gradient-to-r from-primary-text to-secondary-text leading-[1.1] tracking-tight max-w-6xl relative z-10 font-light italic drop-shadow-sm pb-4">
					In Freedom, We Create
				</h3>
			</div>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
			<!-- Company Intro -->
			<div class="lg:col-span-6 space-y-12" use:reveal={{ origin: 'bottom', delay: 400, blur: true }}>
				<div class="flex items-center gap-6 mb-8">
					{#await import('$lib/assets/updown.png')}
						<div
							class="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-3xl flex items-center justify-center border border-border shadow-lg shrink-0 text-xs text-gray-400"
						>
							updown.png
						</div>
					{:then _}
						<div
							class="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-3xl flex items-center justify-center border border-border shadow-lg shrink-0 p-4 hover:scale-110 transition-transform group"
						>
							<img
								src={updownLogo}
								alt="Updown Interactive"
								class="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-all duration-700 ease-out"
							/>
						</div>
					{:catch}
						<div
							class="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-3xl flex items-center justify-center border border-border shadow-lg shrink-0 text-xs text-gray-400"
						>
							updown.png
						</div>
					{/await}
					<div>
						<h3 class="text-3xl lg:text-4xl font-serif tracking-tight text-primary-text">
							Updown Interactive
						</h3>
						<p class="text-sm text-primary-accent font-semibold mt-2 uppercase tracking-widest">
							Building the Next Generation
						</p>
					</div>
				</div>

				<div class="space-y-8 text-xl text-secondary-text leading-relaxed font-serif">
					<p>
						At Updown Interactive, our <strong class="text-primary-text font-bold">mission</strong> is
						to democratize powerful software solutions for businesses and individuals alike. We envision
						a world where technology acts as a seamless extension of human capability.
					</p>
					<p>
						Driven by our <strong class="text-primary-text font-bold">values</strong> of
						craftsmanship, innovation, and long-term thinking, we aren't just building standalone
						applications. We are cultivating a holistic
						<strong class="text-primary-text font-bold">product ecosystem</strong> designed to integrate
						gracefully into daily workflows.
					</p>
				</div>
			</div>

			<!-- Timeline & Ecosystem -->
			<div class="lg:col-span-6 relative" use:reveal={{ origin: 'left', delay: 600, blur: true }}>
				<div class="p-8 lg:p-12 border border-border/30 bg-white shadow-xl relative z-10">
					<h3 class="text-3xl font-serif text-primary-text mb-12">The Journey</h3>

					<div
						class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent"
					>
						{#each timeline as item, i}
							<div
								class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
							>
								<!-- Icon -->
								<div
									class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-background text-primary-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform z-10"
								>
									<div class="w-2 h-2 rounded-full bg-primary-accent"></div>
								</div>
								<!-- Content -->
								<div
									class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border/50 bg-white/50 group-hover:bg-white transition-colors"
								>
									<div class="flex items-center justify-between mb-1">
										<h4 class="font-bold text-primary-text text-sm">{item.title}</h4>
										<span
											class="text-xs font-medium text-primary-accent bg-light-accent px-2 py-0.5 rounded-full"
											>{item.year}</span
										>
									</div>
									<p class="text-xs text-secondary-text leading-relaxed">{item.desc}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
