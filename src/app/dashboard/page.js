import React from 'react'
import Header from '../Components/Header/Header'
import UserInfo from '../Components/UserInfo/UserInfo'
import Section2 from '../Components/Section2/Section2'
import Section4 from '../Components/Section4/Section4'
import Section5 from '../Components/Section5/Section5'
import Section6 from '../Components/Section6/Section6'
import ImageSection from '../Components/ImageCarouselSection/ImageSection'

const page = () => {
  return (
    <div>
          <Header/>
    {/* <LoginPage/> */}
    {/* <UserInfo/> */}

    <Section2/>
    {/* <Section3/> */}
    <Section4/>
    <Section5/>
    <Section6/>
    <ImageSection/>
    <button className='bg-textLinkColor px-3 py-1 text-[12px] font-medium right-5 bottom-5 fixed'>CONTACT FIRFLY</button>
    </div>
  )
}

export default page