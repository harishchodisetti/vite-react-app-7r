import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomRectangleCard({title,text}) {
  return (
    <Card>
      
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {text}
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomRectangleCard;