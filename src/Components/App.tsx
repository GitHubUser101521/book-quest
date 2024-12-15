import { useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { Header, Books, Home } from '../Components'


function App() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setSearchTerm(searchRef.current?.value || '')
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      <Header />
      <div className='text-white mt-2 flex flex-col justify-center items-center library-bg py-20 gap-3'>
        <p className='text-4xl font-bold'>Ready to find your next read?</p>
        <p className='w-1/2 text-center'>
          BookQuest grants you access to a vast digital library of books. Discover and explore millions of titles, from classic literature to contemporary bestsellers. What are you waiting for, explore by searching specific key word or take a look at our recommendation!
        </p>
        <div className='w-1/3 relative'>
          <input 
            ref={searchRef}
            type="text" 
            placeholder='Start exploring...' 
            className='w-full rounded-full px-5 py-3 text-black outline-none' />
          <FaSearch 
            className="text-black absolute search-icon bg-white"
            onClick={() => setSearchTerm(searchRef.current?.value || '')}
          />
        </div>
      </div>
      <div>
        {searchTerm === '' ?
          <Home />
          :
          <Books 
            searchTerm={searchTerm}
          />
        }
      </div>
    </>
  )
}

export default App