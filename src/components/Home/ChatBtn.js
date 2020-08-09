import React from 'react'
import SvgChat from '../../assets/images/Chat'
import '../../assets/stylesheets/application.scss'


function ChatBtn(){

    return(
        <div className="chat-btn" id="show-modal">
            <SvgChat className='chat' />    
        </div>
    )
}

export default ChatBtn