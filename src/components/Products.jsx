import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((e) => e.json())
      .then((e) => setProducts(e));
  }, []);
  console.log(products);
  return (
    <Container className="mt-3">
      <Row className="d-flex gap-2 justify-content-center align-items-center">
        {products.length > 0 ? (
          <>
            {products.map((e) => (
              <ProductCard
                key={e.id}
                img={e.image}
                title={e.title}
                desc={e.description}
                price={e.price}
                url={`/products/${e.id}`}
              />
            ))}
          </>
        ) : (
          <>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </>
        )}
      </Row>
    </Container>
  );
}
