/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
// write a list of strings

interface Icon {
  name: string // name of the icon
  path: string // path to the SVG icon file
}

export const icons: Icon[] = [
  { name: 'django', path: '/svg_icons_tech_stack/django.svg' },
  { name: 'javascript', path: '/svg_icons_tech_stack/javascript.svg' },
  { name: 'python', path: '/svg_icons_tech_stack/python.svg' },
  { name: 'python', path: '/svg_icons_tech_stack/python.svg' },
  // add more icons here as needed
]

const RingedIconContainer: React.FC<{ iconNames: string[] }> = ({
  iconNames,
}) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
      {iconNames.map((_iconName, index) => {
        // add index as second argument to map function
        const icon = icons.find((i) => i.name === icons[index].name)
        if (!icon) return null // skip if icon not found
        return (
          <>
            <div
              key={index}
              className='rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-4'
            >
              <i>
                <img
                  src={icon.path}
                  alt={icon.name}
                  className='xs:h-1 xs:w-1 rounded-full sm:h-1 sm:w-1 md:h-5 md:w-5'
                />
              </i>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default RingedIconContainer
