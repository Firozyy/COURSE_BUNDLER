import { Button } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom'
import { RiErrorWarningFill } from 'react-icons/ri';
function Paymnetfailed() {
  return (
    <div className="notfound">
      <div className="errer">
        <div >
          <RiErrorWarningFill className='errersymbol'/>
        </div>
        <div className="errermessage">
        <h1> PAYMENT FAILD !</h1>
          <Link to={"/subscribe"} >
            <Button variant={'link'} w='full'>Try Again</Button>
          </Link>

        </div>


      </div>
    </div>
  )
}


export default Paymnetfailed