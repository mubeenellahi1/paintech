import React from 'react';
import SvgLeft from '../../assets/images/Left'
import SvgMaskCopy from '../../assets/images/MaskCopy'
import drop5 from '../../assets/images/drop-5@1x.png'
import drop6 from '../../assets/images/drop-6@1x.png'
import drop7 from '../../assets/images/drop-7@1x.png'
import drop10 from '../../assets/images/drop-10@1x.png'
import drop11 from '../../assets/images/drop-11@1x.png'
import brush1 from '../../assets/images/brush-1@1x.png'
import bitmap from '../../assets/images/bitmap_s_e@1x.png'
import bitmapMedia from '../../assets/images/bitmap-media-1@1x.png'
import '../../assets/stylesheets/application.scss'


function SuperEasy(){

    return(
        <div id="super-easy" className="row ml0 mr0 p0">
            <div className="drops">
                <img src={drop5} className= 'drop-5' alt=""/>
                <img src={drop6} className= 'drop-6' alt=""/>
                <img src={drop7} className= 'drop-7' alt=""/>
                <img src={drop10} className= 'drop-10' alt=""/>
                <img src={drop11} className= 'drop-11' alt=""/>
            </div>
            <div className="col-sm-8 col-xs-12 offset-2 p0">
                <div className="row">
                    <div className="col-sm-9 col-xs-12 col-md-7">
                        <img src={brush1} className= 'brush' alt=""/>
                        <img src={bitmap} className= 's-e-img' alt=""/>
                        <img src={bitmapMedia} className= 's-e-img-media media' alt=""/>
                        <SvgMaskCopy className= 'shadow' />
                    </div>
                    <div className="col-sm-5 col-xs-12 descriptions">
                    <div className="title">
                        Super Easy
                    </div>
                    You send us any picture you wish to have painted or choose from our Gallery.
                    <p>
                <a href="#">
                    Start Painting
                    <SvgLeft className= "arrow m0"/>
                </a>
            </p>
            </div>
                </div>
            </div>
        </div>
        
    )
}
export default SuperEasy

