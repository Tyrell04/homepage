<script>
	import { Grid, Row, Column, Tile, Button } from "carbon-components-svelte";
	import { ArrowRight } from "carbon-icons-svelte";
</script>

<Grid>
	<!-- Hero Section -->
	<Row>
		<Column lg={12} md={8} sm={4}>
			<header class="hero">
				<h1>Hello and welcome</h1>
				<p class="hero-text">
					Hey! I’m Marc—a software engineer and part-time designer, and I’m all about building cool projects with a lot of heart. I’m super passionate about open source. If you’re into coding, design, or just making awesome stuff, check out my projects! Feel free to dive in, give feedback, or even contribute.
				</p>
				<div class="hero-actions">
					<Button href="/blog">Blog</Button>
					<Button href="https://github.com/Tyrell04" kind="tertiary">Github</Button>
				</div>
			</header>
		</Column>
	</Row>

	<!-- Main Sections -->
	<h2>Some of my Projects</h2>
	<Row class="section-grid">
		<Column lg={4} md={4} sm={4}>
			<Tile>
				<h3>carSearch</h3>
				<p>It’s an app that provides a searchable database with car type key numbers and manufacturer key numbers!
				</p>
				<Button kind="ghost" icon={ArrowRight} iconDescription="Learn more carSearch">
					Learn more
				</Button>
			</Tile>
		</Column>

		<Column lg={4} md={4} sm={4}>
			<Tile>
				<h3>Homepage</h3>
				<p>Yes this homepage want to see the code do it on github!</p>
				<Button kind="ghost" icon={ArrowRight} iconDescription="Learn more the homepage">
					Learn more
				</Button>
			</Tile>
		</Column>
	</Row>
</Grid>

<style>
    .hero {
        padding: 4rem 0;
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 4rem;
        font-weight: 400;
        line-height: 1.2;
        margin-bottom: 1.5rem;
        color: var(--cds-text-01);
        max-width: 960px;
    }

    h2 {
        font-size: 2rem;
        font-weight: 400;
        line-height: 1.2;
        margin-bottom: 1.5rem;
        color: var(--cds-text-01);
        max-width: 960px;
    }

    .hero-text {
        font-size: 1.25rem;
        line-height: 1.5;
        color: var(--cds-text-02);
        margin-bottom: 2rem;
        max-width: 720px;
    }

    .hero-actions {
        display: flex;
        gap: 1rem;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--cds-text-01);
    }

    p {
        color: var(--cds-text-02);
        line-height: 1.5;
        margin-bottom: 1.5rem;
    }

    :global(.bx--tile) {
        height: 100%;
        padding: 2rem;
        background: var(--cds-ui-02);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media (max-width: 672px) {
        h1 {
            font-size: 2.5rem;
        }

        .hero {
            padding: 2rem 0;
        }

        .hero-actions {
            flex-direction: column;
        }
    }
</style>