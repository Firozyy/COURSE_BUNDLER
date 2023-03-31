import { Button } from '@chakra-ui/react';
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
function Paymnetsucces() {
  return (
    <div className="paymnetsucces">
      <div className="title mt">
        <h1>You have Pro Pack </h1>
      </div>
      <div className="status">
        <div className="success"> <p>payment status</p></div>
        <div className="statusMessage">
          congratulations you are pro member. you have access to <br /> premium content
        </div>
        <div className="staussymbol">
          <RiCheckboxCircleFill className='symbel' />
        </div>
        <div className="toprofile">
          <Link to={'/profile'}>
            
            <Button variant={'link'} w={'full'}>Go to profile</Button>

          </Link>

          <p>Refrence:dgdgfghfghfgh</p>
        </div>
      </div>



    </div>

  )
}

export default Paymnetsucces