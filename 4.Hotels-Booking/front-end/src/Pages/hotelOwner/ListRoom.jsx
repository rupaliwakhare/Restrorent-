import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'
import Title from '../../Components/Title'

const ListRoom = () => {


const [rooms,setRooms] = useState(roomsDummyData)

  return (
    <div>
      <Title align='left' font='outfit' title="Room Listings" subTitle='View , edit or monage all listed rooms. keep the information up-to-date to provide the best experience for users.'/>
    </div>
  )
}

export default ListRoom
