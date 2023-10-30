import { useState } from 'react'

function Checkout({ data, cartItems, setCartItems }) {

    const [amount, setAmount] = useState(0)

    const renderItems = () => {
        let t = 0
        let allItems = []

        data.map((rest) => {
            const menu = rest.menu
            const requiredItems = menu.filter(item => cartItems.includes(item.menuId))
            allItems.push(...requiredItems)
        })

        const items = allItems.map(item => {
            let count = 0
            cartItems.map(ct => {
                if (ct === item.menuId) count++
            })

            t += count * parseInt(item.price)

            return (<div className='flex' key={item.menuId}>
                <img height={200} width={200} src={item.image} />
                <p>{item.item}</p>
                <p>{item.price}</p>
                <p>Qty: {count}</p>
            </div>)
        })

        console.log(t)
        return items
    }

    return (
        <div>
            <h2>Checkout Page</h2>
            {renderItems()}
            <p>Total Amount: {amount}</p>
            <button className='border-2 bg-red-400' onClick={() => setCartItems([])}>Payment</button>
        </div>
    )
}

export default Checkout