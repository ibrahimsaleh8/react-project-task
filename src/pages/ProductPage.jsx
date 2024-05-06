import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function ProductPage() {
  const [product, setProduct] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  console.log(product);
  return (
    <>
      <Card className="mt-4">
        <Card.Img
          className="w-50 ms-auto me-auto "
          variant="top"
          src={product.image}
        />
        <Card.Body className="mt-4">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>
            price:
            {product.price}$
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
