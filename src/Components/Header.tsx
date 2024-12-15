import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between mx-24'>
            <div className='flex items-center gap-4'>
              <img src="/bookquest-icon.png" className='w-14 h-14'/>
              <p className='playwrite-mod text-2xl'>BookQuest.</p>
            </div>
    
            <div className="flex items-center text-xl gap-8">
              <NavLink to={'/'}><p>Home</p></NavLink>
              <NavLink to={'/about'}><p>About</p></NavLink>
            </div>
    </div> 
  )
}

export default Header
