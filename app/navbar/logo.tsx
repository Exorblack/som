import Image from 'next/image'
import Link from 'next/link'


const logo = () => {
  return (
    <div><a href="/">
    <Image 
        src="images/logo/logoipsum-330.svg"
        width={150}
        height={150} alt='logo'/></a>
    </div> 
  )
}

export default logo
