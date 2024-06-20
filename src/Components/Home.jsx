import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../Assets/assets'
import AlbumItem from './AlbumItem'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='my-5 font-bold'>
            <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
            <div className='flex overflow-auto'>
                {albumsData.map((item,index) => {
                    return <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
                })}
            </div>
        </div>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
            <div className='flex overflow-auto'>
                {songsData.map((item,index) => {
                    return <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Home