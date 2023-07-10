<script>
  export let data;
</script>

{#each data.data as item}
  <div>{item.Name}</div>
{/each}
