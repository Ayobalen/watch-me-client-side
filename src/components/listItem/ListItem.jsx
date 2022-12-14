import './listItem.scss'
import { PlayArrow,
     Add, 
     ThumbUpOutlined,
     ThumbDownOutlined
} from '@material-ui/icons';
import { useState } from 'react';

 export default function ListItem({index}) {
    const [ isHovered, setIsHovered ] = useState(false);
    const trailer = 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';
  return (
    <div
     className='listItem' 
      style={{ left: isHovered && index * 225 -50 + index *2.5}}
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}>
        <img 
        src='https://images.unsplash.com/photo-1618945524163-32451704cbb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
         alt=''
         />
         {isHovered && (
         <>
         <video src={trailer} autoPlay={true} loop/>
         <div className="itemInfo">
             <div className="icons">
                <PlayArrow className='icon'/>
                <Add className='icon'/>
                <ThumbUpOutlined className='icon'/>
                <ThumbDownOutlined className='icon'/>
             </div>
             <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className='limit'>+16</span>
                <span>2000</span>
             </div>
             <div className="desc">
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. 
             </div>
             <div className="genre">Action</div>
         </div> </>
         )}
    </div>
  )
}

