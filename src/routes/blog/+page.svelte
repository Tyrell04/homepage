<script lang="ts">
	import * as config from '$lib/config.js';
	import PostCard from '$lib/components/PostCard.svelte';
	import { Column, Content, Grid, Row, Tile } from 'carbon-components-svelte';

	export let data
	//make posts a array of fake posts
	let posts = []
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>


<Content>
	<Grid padding>
		<Row padding condensed={true}>
			{#each posts as post}

				<Column sm={4} md={4} lg={4}>
					<PostCard post={post} />
				</Column>
				{/each}

		</Row>
	</Grid>
</Content>

<style>
</style>