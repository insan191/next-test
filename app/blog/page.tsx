import { Metadata } from 'next'
import Link from 'next/link'
type Props = {}
type TPost = {
	userId: number
	id: number
	title: string
	body: string
}
async function getData() {
	const response = await fetch(
		'https:/jsonplaceholder.typicode.com/posts',
		{
			next: {
				revalidate: 60,
			},
		}
	)
	if (!response.ok) throw new Error('erronjksdnfkdnfkjdsnr')

	return response.json()
}
export const metadata: Metadata = {
	title: 'blog | Next App',
}

const blog = async (props: Props) => {
	const posts = await getData()
	return (
		<>
			<h1>blog page</h1>
			<ul>
				{posts.map((post: TPost) => (
					<li key={post.id}>
						<Link href={`/blog/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default blog
