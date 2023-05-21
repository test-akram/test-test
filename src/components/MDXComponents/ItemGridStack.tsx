import Image from './Image'

export type Items = {
  image: string
  name: string
}[]

type ItemGridProps = {
  items: Items
}

const ItemGrid = (props: ItemGridProps) => {
  const { items } = props

  return (
    <div className='mb-9 grid grid-cols-1 gap-4 sm:grid-cols-4'>
      {items.map((item) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          key={item.name}
          href='#'
          rel='noopener noreferrer'
          className='flex gap-6 rounded-lg border border-accent-2 bg-white p-4 transition-colors duration-300 hover:bg-accent-6 sm:flex-col sm:gap-3'
        >
          <Image
            src={item.image}
            width={10}
            height={10}
            alt={item.name}
            className='sm:hw-full m-0 h-10 w-10 sm:w-full'
          />
          <div className='flex flex-col justify-center gap-2'>
            <div className='font-extrabold text-black'>{item.name}</div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default ItemGrid
