type ContactLinks = {
  title: string
  href: string
  icon: string
}

const ContactLink = (props: ContactLinks) => {
  const { title, href, icon } = props
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      <li className='duration-250 text-md mr-2 inline cursor-pointer transition-colors ease-in hover:text-gray-400 sm:text-lg md:text-lg lg:text-6xl'>
        <span className='duration-250 hover:text-primary-500 dark:hover:text-primary-400 transition-colors ease-in'>
          {icon}
        </span>
        <span className='font-light opacity-50'>@</span>
        <span className='duration-250 font-mono  transition-colors ease-in hover:text-gray-500'>
          {title}
        </span>
      </li>
    </a>
  )
}

export default ContactLink
