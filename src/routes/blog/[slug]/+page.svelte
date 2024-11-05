<script lang="ts">
	import {
		Column,
		Content,
		Grid,
		Row,
		Tag,
		Theme
	} from 'carbon-components-svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<Theme theme="g100">
	<Content>
		<div class="post-wrapper">
			<Grid>
				<!-- Title Section -->
				<Row>
					<Column>
						<h1 class="post-title">{data.meta.title}</h1>
					</Column>
				</Row>

				<!-- Tags Section -->
				<Row class="tag-row">
					<Column>
						<div class="tag-container">
							{#each data.meta.categories as category}
								<Tag type="green" size="sm" class="tag">{category}</Tag>
							{/each}
						</div>
					</Column>
				</Row>

				<!-- Content Section -->
				<Row>
					<Column>
						<div class="post-content">
							<svelte:component this={data.content} />
						</div>
					</Column>
				</Row>
			</Grid>
		</div>
	</Content>
</Theme>

<style>
    :global(.post-wrapper) {
        max-width: 60rem;
        margin: 0 auto;
        padding: 2rem 1rem;
    }

    :global(.post-title) {
        font-size: 2.5rem;
        font-weight: 400;
        margin-bottom: 1.5rem;
        color: var(--cds-text-01);
        line-height: 1.2;
    }

    :global(.tag-container) {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 2rem;
    }

    :global(.tag-row) {
        margin-bottom: 2rem;
    }

    :global(.post-content) {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--cds-text-02);
    }

    /* Responsive adjustments */
    @media (max-width: 42rem) {
        :global(.post-title) {
            font-size: 2rem;
        }

        :global(.post-wrapper) {
            padding: 1rem 0.5rem;
        }
    }
</style>