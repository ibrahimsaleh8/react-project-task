import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <Card.Text>{props.price}$</Card.Text>
          <Link to={props.url} className="btn btn-primary">
            Details
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}
