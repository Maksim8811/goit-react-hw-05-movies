import { Suspense } from "react"
import { useParams} from 'react-router-dom';
import {useEffect, useState } from "react"
import {getReviews} from "../../servise"

 const Reviews = () => {

    const [reviews, setReviews] = useState([])
    const {movieId} = useParams()

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const reviews = await getReviews(movieId)
                setReviews(reviews)
            }
            catch (err) {
                console.log('err', err)
            }
        }

        fetchReviews()
    }, [movieId])

    return ( 
        
        reviews.length === 0 ? (
       <p>No reviews!</p> ) : (<> 
       <Suspense fallback={<div>Loading...</div>}>       
        {reviews.map(({author, id, content}) => {
            console.log('reviews', reviews)
            return (
                <ul key={id}>
                    <li>
                        <p><b>Author: </b>{author}</p>
                        <p>{content}</p>
                    </li>
                </ul>
            )
        })}
        </Suspense>    
        </>
       ) 
    
    )

}

export default Reviews