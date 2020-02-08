import React from 'react'

function UserCardBlock(props) {

    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }
    
    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>
                    <img style={{ width: '70px' }} alt="product" 
                    src={renderCartImage(product.images)} />
                </td> 
                <td>{product.quantity}</td>
                <td>$ {product.price} </td>
                <td><button 
                onClick={()=> props.removeItem(product._id)}
                >Izbriši </button> </td>
            </tr>
        ))
    )
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Slika proizvoda</th>
                        <th>Količina proizvoda</th>
                        <th>Cijena proizvoda</th>
                        <th>Ukloni iz košarice</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock