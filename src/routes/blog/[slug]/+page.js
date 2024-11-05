import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../../../posts/${params.slug}.svx`)

		if (!post || !post.default || !post.metadata) {
			throw error(404, `Could not find ${params.slug}`)
		}

		const { metadata } = post
		if (!metadata.title || !metadata.date) {
			throw error(500, `Invalid post metadata for ${params.slug}`)
		}

		return {
			content: post.default,
			meta: metadata
		}
	} catch (e) {
		if (e?.status) throw e

		throw error(500, `SvelteKit error: ${e.message}`)
	}
}