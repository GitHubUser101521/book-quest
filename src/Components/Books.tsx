import { useEffect, useState } from "react"
import { BookCard, Pagination } from '../Components'

type BookCardPropTypes = {
    searchTerm: string,
}

export type BookType = {
    numFound: number,
    numFoundExact: boolean,
    num_found: number,
    offset: null,
    q: string,
    start: number,
    docs: DocType[],
}

export type DocType = {
    publisher: string[],
    publish_date: string[],
    publish_year: string[],
    key: string,
    first_publish_year: number,
    language: string[],
    author_key: string[],
    author_name: string[],
    title: string,
    cover_edition_key: string,
    want_to_read_count: number,
    currently_reading_count: number,
    already_read_count: number,
    first_sentence: string[]
}
  
function Books({ searchTerm }: BookCardPropTypes) {
    const reformatedSearchTerm = searchTerm.split(' ').join('+')
    const [currentData, setCurrentData] = useState<BookType>({
        numFound: 0,
        numFoundExact: false,
        num_found: 0,
        offset: null,
        q: '',
        start: 0,
        docs: []
    });
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const numberOfPage = Math.ceil(currentData.numFound / 100);

    const fetchData = async () => {
        try {
            setLoading(true)
            const data = await fetch(`https://openlibrary.org/search.json?q=${reformatedSearchTerm}&page=${currentPage}`)
            const response = await data.json()
            setCurrentData(response)

            console.log(response)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
        setCurrentPage(1)
    }, [searchTerm])

    useEffect(() => {
        fetchData()
    }, [currentPage])

    return (
      <div className="mx-24 mt-4">
        {
            loading ? <p>Loading...</p> : 
                currentData.numFound !== 0 ?
                <>
                    <p className="text-xl font-bold mb-4">{currentData.numFound} Results for '{searchTerm}'</p>
                    <div className="grid grid-cols-4 gap-4">
                        {currentData.docs.map((book: DocType) => (
                            <BookCard book={book}/>
                        ))}
                    </div>
                    <Pagination 
                        numberOfPage={numberOfPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </> :
                <p>No result found!</p>
        }
      </div>
    )
}
  
export default Books  