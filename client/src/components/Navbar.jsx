import {Link, useNavigate} from 'react-router-dom'
import {MdAdd} from 'react-icons/md'

const Navbar = () => {
  const navigate = useNavigate()

  const handleEvent = () => {
    navigate('/add-event')
  }

  return (
    <header className='w-full px-6 sm:px-10 py-4 md:py-6 border-b border-gray-300/70'>
      <div className='max-w-7xl flex flex-row items-center justify-between mx-auto'>
        <Link to='/'>
          <p className='tracking-wide text-lg font-black md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-400'>Queer PGM Events</p>
        </Link>
        <div className='bg-white text-rose-500 rounded-full p-3 cursor-pointer hover:bg-rose-500 hover:text-white transition duration-200'>
          <MdAdd className='text-xl' onClick={handleEvent} />
        </div>
      </div>
    </header>
  )
}
export default Navbar