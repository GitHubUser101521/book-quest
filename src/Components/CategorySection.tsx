import { useEffect, useState } from "react"
import { BookType, DocType } from "./Books"
import BookCard from './BookCard'

type CategorySectionProps = {
    title: string,
    category: string,
    query: string
}

function CategorySection({ title, category, query }: CategorySectionProps) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<BookType>({
    numFound: 0,
    numFoundExact: false,
    num_found: 0,
    offset: null,
    q: '',
    start: 0,
    docs: []
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://openlibrary.org/search.json?subject=${query.split(' ').join('+')}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <div className="px-24 py-4 mt-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-stone-800 text-xl mb-4">{category}</p>
        {loading ? 
          <p>Loading...</p> 
          :
          <div className="overflow-auto scrollbar-hide p-2">
            <div className="flex gap-8">
              {data.docs.slice(0, 20).map((doc: DocType) => (
                <BookCard book={doc}/>
              ))}
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default CategorySection
