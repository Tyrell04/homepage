import { json } from '@sveltejs/kit'

async function getPosts() {
	let posts = []

	// Updated to match .svx files specifically
	const paths = import.meta.glob('/src/posts/*.svx', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		// Updated to handle .svx extension
		const slug = path.split('/').at(-1)?.replace('.svx', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata
			const post = { ...metadata, slug }
			// Only include published posts
			if (post.published) posts.push(post)
		}
	}

	// Sort posts by date in descending order
	posts = posts.sort((first, second) =>
		new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}