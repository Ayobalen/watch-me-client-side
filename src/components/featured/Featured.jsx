import './featured.scss'
import { PlayArrow, InfoOutlined } from '@material-ui/icons'

export default function Featured({type}) {
  return (
    <div className='featured'>
        { type && (
            <div className="category">
                <span>{ type === 'movie' ? "Movies" : "Series"}</span>
                <select name='genre' id='genre'>
                    <option>Genre</option>
                    <option value='comedy'>Comedy</option>
                    <option value='crime'>Crime</option>
                    <option value='fantasy'>Fantasy</option>
                    <option value='historical'>Historical</option>
                    <option value='horror'>Horror</option>
                    <option value='romance'>Romance</option>
                    <option value='sci-fi'>Sci-fi</option>
                    <option value='thriller'>Thriller</option>
                    <option value='western'>Western</option>
                    <option value='animation'>Animation</option>
                    <option value='drama'>Drama</option>
                    <option value='documentary'>Documentary</option>
                </select>
            </div>
        )}
     <img src='https://images.unsplash.com/photo-1594252120117-6cc18b1e9c54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80'
      alt=''
       />
       <div className="info">
        <img src='https://images.unsplash.com/photo-1532795986-dbef1643a596?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' 
        alt='' 
        />
        <span className='desc'>
            lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className='more'>
        <InfoOutlined/>
        <span>Info</span>
          </button>
        </div>
       </div>
    </div>
  )
}
