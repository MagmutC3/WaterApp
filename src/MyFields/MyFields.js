import React from 'react'
import './MyFields.css'
import Field from './Field/Field'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function MyFields() {
  return (
    <div className='myfields'>
      <div className='myfields__top'>
        {/** Profile clickable profile icon here */}
        <div className='myfields__topUserName'>
            This is supposed to be the user name
        </div>
        <div className='myfields__topUserIcon'>
            <AccountCircleIcon />
        </div>
      </div>
      <div className='myfields__fieldList'>
        <Field />
        <Field />
        <Field />
        <Field />
      </div>
      <div className='myfields__bottom'>
        {/** Tools button, ? button */}
        <div className='myfields__bottomToolsButton'>
            This is supposed to be a button
        </div>
      </div>
    </div>
  )
}

export default MyFields