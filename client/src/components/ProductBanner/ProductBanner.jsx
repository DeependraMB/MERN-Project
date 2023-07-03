import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProductBanner() {
  return (
    <div className="container mx-auto">
      <Row className="mt-5 mb-3">
        <Col md={3}>
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/71T5NVOgbpL._AC_UF1000,1000_QL80_.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/71T5NVOgbpL._AC_UF1000,1000_QL80_.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/71T5NVOgbpL._AC_UF1000,1000_QL80_.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn1.smartprix.com/rx-ifgMKUMYY-w1200-h1200/fgMKUMYY.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5 mb-3">
        <Col md={3}>
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn1.smartprix.com/rx-ifgMKUMYY-w1200-h1200/fgMKUMYY.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn1.smartprix.com/rx-ifgMKUMYY-w1200-h1200/fgMKUMYY.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn1.smartprix.com/rx-ifgMKUMYY-w1200-h1200/fgMKUMYY.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src="https://cdn1.smartprix.com/rx-ifgMKUMYY-w1200-h1200/fgMKUMYY.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductBanner;
