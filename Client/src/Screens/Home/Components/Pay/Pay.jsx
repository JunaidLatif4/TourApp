import React from 'react'
import './Pay.scss'
import pal from '../../../../Assets/pal.jpg'
import visa from '../../../../Assets/visa.png'
import abt from '../../../../Assets/abt.png'
import top from '../../../../Assets/top.jpg'


const Pay = () => {
    return (
        <div className='main_pay'>


            <div className="pay_space">
                <div className="pay1">
                    <div className="pal">
                        <img src={pal} />
                    </div>

                    <div className="visa">
                        <img src={visa} />
                    </div>
                </div>
                <div className="pay2">
                    <div className="abt">
                        <img src={abt} />
                    </div>

                    <div className="top">
                        <img src={top} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pay