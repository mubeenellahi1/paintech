import React from 'react';
import Icon1 from '../../assets/images/Icon1'
import Icon2 from '../../assets/images/Icon2'
import Icon3 from '../../assets/images/Icon3'
import Icon4 from '../../assets/images/Icon4'
import Icon5 from '../../assets/images/Icon5'
import drop1 from '../../assets/images/drop-1@1x.png'
import drop2 from '../../assets/images/drop-2@1x.png'
import drop3 from '../../assets/images/drop-3@1x.png'
import drop22 from '../../assets/images/drop-22@1x.png'
import dropTermsMedia from '../../assets/images/drop-terms-media-1@1x.png'
import '../../assets/stylesheets/application.scss'


function HowItWorks(){

    return(
        <div id="how-it-works" className="row ml0 mr0 p0">
            <div className="drops">
                    <img src= {drop1} className='drop-1 no-media' alt="" />
                    <img src={drop2} className='drop-2 no-media' alt="" />
                    <img src={drop3} className='drop-3' alt=""/>
                    <img src={drop22} className='drop-4' alt=""/>
                    <img src={dropTermsMedia} className='drop-5-media media' alt="" />
            </div>
            <div className="col-9 offset-2 p0">
                <div className ="row">
                    <div className="col-12 title">How it works</div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-xs-12 pl0 step">
                        <Icon1 className='icon-1' />
                        <h2>Step 1</h2>
                        You send us any picture you wish to have hand painted in oil painting.
                    </div>
                    <div className="col-sm-4 col-xs-12 pl0 step">
                        <Icon2 className='icon-2' />
                        <h2>Step 2</h2>
                        As soon as we have received payment the artist starts painting.
                    </div>
                    <div className="col-sm-4 col-xs-12 pl0 step">
                        <Icon3 className='icon-3' />
                        <h2>Step 3</h2>
                        When finished the artist sends you a picture of the result to make sure you're fully satisfied and makes any changes you request.
                    </div>
                    <div className="col-sm-4 col-xs-12 pl0 step">
                        <Icon4 className='icon-4' />
                        <h2>Step 4</h2>
                        The painting is framed with a wooden structure and is packed for transport.
                    </div>
                    <div className="col-sm-4 col-xs-12 pl0 step">
                        <Icon5 className='icon-5' />
                        <h2>Step 5</h2>
                        The package is sent directly to your delivery address.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HowItWorks