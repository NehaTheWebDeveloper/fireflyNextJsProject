import React from 'react'
import ImageCaroussel from '../ImageCarousel/ImageCaroussel'
import {slides} from "../../Data/carouselData.json"

const ImageSection = () => {
  return (
    <div className='flex items-end justify-items-center px-28 py-7'>
        <ImageCaroussel slides={slides} />
    </div>
  )
}

export default ImageSection