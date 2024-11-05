<!-- src/lib/components/PostCard.svelte -->
<script lang="ts">

	import {
		Tile,
		Tag,
		Button
	} from "carbon-components-svelte";
	import type { Post } from '$lib/types.ts'

	export let post: Post;
</script>

<Tile>
	<h2 class="text-xl font-semibold mb-2">{post.title}</h2>

	<div class="mb-4 flex gap-2">
		{#each post.categories as category}
			<Tag type="blue">{category}</Tag>
		{/each}
	</div>

	<div class="flex justify-between items-center">
		<span class="text-sm text-gray-500">Posted on formatDate({post.date})</span>
		<Button href="/blog/{post.slug}" kind="ghost">Read More</Button>
	</div>
</Tile>