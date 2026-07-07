<script>
  let { children, class: className = '', href = null, ...rest } = $props();
</script>

{#if href}
  <a {href} class="block bg-card rounded-[16px] border border-border shadow-sm hover-lift {className}" {...rest}>
    {@render children()}
  </a>
{:else}
  <div class="bg-card rounded-[16px] border border-border shadow-sm hover-lift {className}" {...rest}>
    {@render children()}
  </div>
{/if}
