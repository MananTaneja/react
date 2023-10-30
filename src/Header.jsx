function Header({ count }) {
    console.log(count)
    return (
        <nav className='bg-slate-600 text-white flex justify-between p-4'>
            <h2 className='text-xl'>Restaurant App</h2>
            <p>Cart:{count}</p>
        </nav>
    )
}

export default Header