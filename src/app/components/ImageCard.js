import Image from 'next/image'
import React from 'react'


const ImageCard = ({url,fileName,width,height}) => {
  return (
    <Image className='image' src={url} alt={fileName} height={height} width={width} priority/>
  )
}

export default ImageCard