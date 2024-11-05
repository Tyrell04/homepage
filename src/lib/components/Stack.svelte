<script lang="ts">
	export let gap = '1rem';
</script>

<div class="stack" style="--gap: {gap}">
	<slot />
</div>

<style>
    .stack {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
    }
</style>