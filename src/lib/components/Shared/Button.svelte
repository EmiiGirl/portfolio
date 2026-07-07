<script>
  let { children, variant = 'primary', class: className = '', href = null, ...rest } = $props();

  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out px-6 py-3';
  const variants = {
    primary: 'bg-primary-accent text-white hover:bg-blue-600 shadow-sm hover:shadow-md hover:-translate-y-0.5',
    secondary: 'border border-border text-primary-text hover:bg-light-accent hover:border-primary-accent',
    outline: 'border-2 border-primary-text text-primary-text hover:bg-primary-text hover:text-white'
  };
</script>

{#if href}
  <a {href} class="{baseStyles} {variants[variant]} {className}" {...rest}>
    {@render children()}
  </a>
{:else}
  <button class="{baseStyles} {variants[variant]} {className}" {...rest}>
    {@render children()}
  </button>
{/if}
