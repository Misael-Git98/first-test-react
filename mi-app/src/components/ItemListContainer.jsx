import { useEffect, useState } from "react";
import data from "./data/products.json";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  console.log(productos);

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };

  useEffect(() => {
    pedirProductos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div>
    {
        productos.length > 0 &&
        <div>
            <img src={productos[0].image} alt={productos[0].title} />
            <h2>{productos[0].title}</h2>
            <p>{productos[0].price}</p>
            <p>{productos[0].description}</p>
        </div>
    }
    </div>
    );
};

export default ItemListContainer;
