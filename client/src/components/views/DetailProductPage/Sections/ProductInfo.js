import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }

    const findContinent = (con) => {
        switch (con) {
            case 1:
                return ("Afrika")
                break;
            case 2:
                return ("Europa")
                break;
            case 3:
                return ("Azija")
                break;
            case 4:
                return ("Sjeverna Amerika")
                break;
            case 5:
                return ("Južna Amerika")
                break;
            case 6:
                return ("Australija")
                break;
            case 7:
                return ("Antarktika")
                break;
            default:
                return ("Earth")

        }
    }


    return (
        <div>
            <Descriptions title="Informacije o proizvodu">
                <Descriptions.Item label="Cijena"> {Product.price}$</Descriptions.Item>
                <Descriptions.Item lavel="Kontinent">{findContinent(Product.continents)}</Descriptions.Item>
                <Descriptions.Item ></Descriptions.Item>
                <Descriptions.Item label="Opis"> {Product.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    Dodaj u košaricu
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo