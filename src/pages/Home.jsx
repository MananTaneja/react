import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home({ data }) {

    const [filteredList, setFilteredList] = useState()

    const renderRestaurantList = (restaurantList) => {
        return restaurantList.map((restaurant, index) => (
            <div key={index} className='w-fit'>
                <Link to={`abc/${index}`}>
                    <div className="">
                        <div className="image-wrapper flex justify-center h-40">
                            <img src={restaurant.image} alt="" />
                        </div>
                        <div className="card-details text-center">
                            <p className='text-blue-700'>{restaurant.name}</p>
                            <p>{restaurant.description}</p>
                            <div className="tag-list flex gap-2">
                                <p className='text-xs'>Tags:</p>
                                <ul className='flex gap-2 text-center justify-center'>
                                    {restaurant.tags.map((tag, index) => (
                                        <li key={index} className='text-xs'>{tag}</li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        ))
    }

    const handleSearch = (sq) => {
        const temp = data
        const filtered = temp.filter(res => {
            const lowerCase = res.name.toLowerCase()
            return lowerCase.includes(sq.toLowerCase())
        })
        setFilteredList(filtered)
    }

    return (
        <div>
            <div className="my-4 flex gap-x-4 justify-center">
                <label htmlFor="search">Search Restaurant</label>
                <input type="text" name="search" id="" onChange={e => handleSearch(e.target.value)} className='border-2 border-slate-200' defaultValue={''} />
            </div>
            <div className="flex justify-center gap-3">
                {data && !filteredList && renderRestaurantList(data)}
                {filteredList && renderRestaurantList(filteredList)}
            </div>
        </div>
    )
}

export default Home
