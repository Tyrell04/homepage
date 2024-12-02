<script lang="ts">
	import {
		Tile,
		Tag,
		Link,
	} from 'carbon-components-svelte';
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let post: Post;
</script>


<Tile>
	<h2>
	<Link href="/blog/{post.slug}">{post.title}</Link>
	</h2>
	{#each post.categories as category}
		<Tag type="green" size="sm">{category}</Tag>
	{/each}
	<span >Posted on {formatDate(post.date)}</span>
	<Link href="/blog/{post.slug}">Read More</Link>
</Tile>
