import React from 'react'
import './Field.css'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

function Field() {
  return (
    
    <div className='myfields__field'>
      {/** this should include a name, image and be clickable (css) */}
      <div className="myfields__fieldDetails">
        <div className='myfields__fieldDetailsName'>
          Field Instance Name
        </div>
        <div className='myfields__fieldDetailsStatusIcon'>
          <HealthAndSafetyIcon />
        </div>
      </div>
      <div className="myfields__fieldImage">
        <img
            src="https://uek.krakow.pl/static/images/authorities-bg.png"
            alt="img"
        ></img>
      </div>
    </div>
  )
}

export default Field