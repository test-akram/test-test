import Callout from './Callout'
import Colors from './Colors'
import Image from './Image'
import ItemGrid from './ItemGrid'
import ItemGridStack from './ItemGridStack'
import Kbd from './Kbd'
import AppLink from './Link'
import Pre from './Pre'
import Tree from './Tree'

const MDXComponents = {
  a: AppLink,
  pre: Pre,

  // Custom components
  ItemGrid,
  Callout,
  ItemGridStack,
  Kbd,
  Tree,
  Colors,
  Image,
}

export default MDXComponents
