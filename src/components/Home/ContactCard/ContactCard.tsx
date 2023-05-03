type ContactLinkProps = {
  title: string
  href: string
  icon: string
}
const ContactCard = (props: ContactLinkProps) => {
  const { title, href, icon } = props

  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      <li className='duration-250 mr-2 inline cursor-pointer text-4xl transition-colors ease-in hover:text-gray-400 sm:text-6xl md:text-5xl lg:text-6xl'>
        <span className='duration-250 hover:text-primary-500 dark:hover:text-primary-400 transition-colors ease-in'>
          {icon}
        </span>
        <span className='font-light opacity-50'>@</span>
        <a
          className='duration-250 font-mono transition-colors ease-in hover:text-gray-500'
          href={href}
        >
          {title}
        </a>
      </li>
    </a>
  )
}

export default ContactCard
