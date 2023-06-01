import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
	return (
		<header className='container'>
			<Link href='/'>home</Link>
			<Link href='/about'>about</Link>
			<Link href='/blog'>blog</Link>
		</header>
	)
}

export default Header
