type Props = {
	params: {
		id: string
	}
}
type TPost = {
	userId: number
	id: number
	title: string
	body: string
}
async function getData(id: string) {
	const response = await fetch(
		`https:/jsonplaceholder.typicode.com/posts/${id}`,
		{
			next: {
				revalidate: 60,
			},
		}
	)
	return response.json()
}
export async function generateMetadata({ params: { id } }: Props) {
	const post = await getData(id)
	return {
		title: post.title,
	}
}
const page = async ({ params: { id } }: Props) => {
	const post = await getData(id)

	return (
		<>
			<p></p>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</>
	)
}

export default page
