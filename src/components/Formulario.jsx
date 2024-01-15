import { useState } from "react"
import { Button, Form, Row, Col, Alert } from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"
import useBebidas from "../hooks/useBebidas";
const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    const [alerta, setAlerta] = useState('')
    const { categorias } = useCategorias()
    const {obtenerBebidas} = useBebidas()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }

        setAlerta('')
        obtenerBebidas(busqueda)
        
    }

  return (
    <Form 
    onSubmit={handleSubmit}>
      {alerta && <Alert
       variant="danger"
       className="text-center">
        {alerta}</Alert>}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre bebida: </Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              placeholder="Ej. Tequila, Vodka, etc"
              name="nombre"
              onChange={e => setBusqueda({ 
                ...busqueda, 
                [e.target.name]: e.target.value })}
              value={busqueda.nombre}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Categoria bebida: </Form.Label>
           <Form.Select 
           name="categoria" 
           id="categoria"
           value={busqueda.categoria}
           onChange={e => setBusqueda({ 
            ...busqueda, 
            [e.target.name]: e.target.value })}>
            <option>-- Selecciona Categoria --</option>
            {categorias?.map(categoria => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
           </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
           <Button
           type="submit"
           className="text-uppercase fw-bold w-100 btn-secondary"
           >
                Buscar Bebidas
           </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
