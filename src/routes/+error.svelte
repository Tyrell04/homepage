<script>
	import { Content, Grid, Row, Column } from "carbon-components-svelte";
	import { page } from '$app/stores'
</script>
<svelte:head>
	<title>404</title>
</svelte:head>
<Content class="container">
	<Grid>
		<Row>
			<Column class="error">
				<h1>{$page.status}: {$page.error?.message}</h1>
			</Column>
		</Row>
	</Grid>
</Content>