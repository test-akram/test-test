import Image from 'next/image'
import Link from 'next/link'

const HeaderLogo = () => {
  return (
    <Link
      href='/'
      className='flex items-center justify-center gap-1'
      aria-label='Homepage'
    >
      <Image
        width={28}
        height={28}
        src='/static/images/avatar.png'
        alt='this is akrem logo'
      />
    </Link>
  )
}

export default HeaderLogo
