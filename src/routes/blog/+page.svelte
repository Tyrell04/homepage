<script lang="ts">
	import * as config from '$lib/config.js';
	import PostCard from '$lib/components/PostCard.svelte';
	import { Column, Content, Grid, Row } from 'carbon-components-svelte';

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>


<Content>
	<Grid padding>
		<Row padding>
			{#each data.posts as post}
				<Column padding>
					<PostCard {post} />
				</Column>
			{/each}
		</Row>
	</Grid>
</Content>

<style>
</style>