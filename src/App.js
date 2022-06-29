import { useEffect } from 'react'
import { Card, Form, FormControl, InputGroup, Button } from 'react-bootstrap'

function App() {
  useEffect(() => {
    console.log(window.Telegram.WebApp)
  })

  return (
    <>
    <Card>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>From</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">UAH</InputGroup.Text>
              <FormControl
                placeholder="50 - 150 000"
                aria-label="amount"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>To</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">TON</InputGroup.Text>
              <FormControl
                placeholder="0.000"
                aria-label="amount"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form.Group>
          <Button variant="dark" type="submit">
            Exchange
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </>
  )
}

export default App