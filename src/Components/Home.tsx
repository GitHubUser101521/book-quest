import { CategorySection } from '../Components'

function Home() {
  return (
    <>  
        <h1 className='text-4xl mx-24 mt-4 font-bold'>Our Recommendation</h1>

        <CategorySection 
            title="Journey through another world"
            category="Fiction"
            query="fiction"
        />

        <CategorySection 
            title="Who's the culprit?"
            category="Murder"
            query="murder"
        />

        <CategorySection 
            title="Classic Literature"
            category="Fiction"
            query="classic literature"
        />
    </>
  )
}

export default Home
