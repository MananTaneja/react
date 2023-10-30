import { useParams, Link } from 'react-router-dom'

function Restaurant({ data, setItems, items }) {

    const { restaurantId } = useParams()

    const addToCart = (menuId) => {
        const updateItemList = [...items]
        updateItemList.push(menuId)
        console.log(updateItemList)
        setItems(updateItemList)
    }


    const renderMenuItems = (menu) => {
        return menu.map((menuItem) => (
            <div className='flex' key={menuItem.menuId}>
                <img height={200} width={200} src={menuItem.image} />
                <p>{menuItem.item}</p>
                <p>{menuItem.price}</p>
                <button className='bg-slate-800 h-20 w-20 text-white' onClick={() => addToCart(menuItem.menuId)}>Add to Cart</button>
            </div>
        ))
    }


    return (
        <div>
            <p>Restaurant Page: {data[restaurantId].name}</p>
            {renderMenuItems(data[restaurantId].menu)}
            <Link to={'/checkout'}>Proceed to Checkout</Link>
        </div>
    )
}

export default Restaurant