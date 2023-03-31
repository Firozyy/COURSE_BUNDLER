import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import './payment.css'
function Subscribe() {
    return (
        <div className='subscribe'>
            <div className="title"><h1>Welcome</h1></div>
            <div className="plans">
                <div className="plan_name">
                    <span>Pro pack ₹299</span>
                </div>
                <div className="planeDetails">
                    <h4>join pro pack and get Access to all content</h4>
                    <p >₹299 only</p>
                    <button>Buynow</button>
                </div>
                <div className="policy">
                    <p>100% REFUND AT CANCELATION</p>
                    <span>Terms & conditions apply</span>
                </div>

                
            </div>

        </div>


    )
}

export default Subscribe