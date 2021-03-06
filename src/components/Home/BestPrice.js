import React from 'react';
import '../../assets/stylesheets/application.scss'
import drop20 from '../../assets/images/drop-20@2x.png'
import drop8 from '../../assets/images/drop-8@1x.png'
import drop9 from '../../assets/images/drop-9@1x.png'
import drop12 from '../../assets/images/drop-12@1x.png'
import drop13 from '../../assets/images/drop-13@1x.png'
import brush2 from '../../assets/images/brush-2@1x.png'
import bitmapBP2 from '../../assets/images/bitmap_b_p_2@1x.png'
import bitmapMedia2 from '../../assets/images/bitmap-media-2@1x.png'
import bitmapBP1 from '../../assets/images/bitmap_b_p_1@1x.png'
import SvgMaskCopy2 from '../../assets/images/MaskCopy2'
import SvgMask from '../../assets/images/Mask'
import SvgLeft from '../../assets/images/Left'

function BestPrice(){

    return (
        <div id="best-price" className="row ml0 mr0 p0">
            <div className="drops">
                <img src={drop20} className='drop-7-2' alt=""/>
                <img src={drop8} className='drop-8' alt="" />
                <img src={drop9} className='drop-9' alt="" />
                <img src={drop12} className='drop-12' alt=""/>
                <img src={drop13} className='drop-13' alt=""/>
            </div>
            <div className="col-sm-6 col-md-6 col-xs-12">
                <div className="descriptions">
                    <div className="title">
                        Best Price
                    </div>
                    If you find cheaper on the net, we give you the same price plus a 5 % discount.
                    <p>
                        <a href="/">
                        Start Painting
                        <SvgLeft className="arrow m0" />
                    </a>
                    </p>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xs-12">
                <div className="img">
                    <img src={brush2} className='brush' alt="" />
                    <img src={bitmapBP2} className='b-p-img2' alt="" />
                    <img src={bitmapMedia2} className='b-p-img2-media media' alt=""/>
                    <SvgMaskCopy2  className='shadow-2'/>
                    <div className="img-2">
                        <img src={bitmapBP1} className='b-p-img1' alt="" />
                        <SvgMask className='shadow-1' />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default BestPrice

