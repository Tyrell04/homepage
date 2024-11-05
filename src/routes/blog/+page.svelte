<script lang="ts">
	import * as config from '$lib/config.js';
	import PostCard from '$lib/components/PostCard.svelte';

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section>
	<ul class="posts">
		{#each data.posts as post}
			<PostCard {post} />
		{/each}
	</ul>
</section>