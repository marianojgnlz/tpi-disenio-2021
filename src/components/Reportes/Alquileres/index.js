import { Button, Col, Row } from "react-bootstrap";
import { COLUMNS } from './columnas';
import Table from "../../Table";
import alquileres from './alquilereslindo.json';
import useAuth from "../../../hooks/useAuth";
import Layout from "../../../layout/Layout";


export default function Alquileres({ history }) {
    const user = useAuth(history);
  return (
    <Layout
      usuario={user}
    >
      <Row className="justify-content-center">
          <Col xs={4} className="d-flex justify-content-center">
            <h2 className="titulosSecciones">Alquileres</h2>
            
          </Col>
        </Row>
        <Table columnas={COLUMNS} datos={alquileres} rows={7}/>
        <div className='d-flex justify-content-center align-items-center align-content-center'>
        <Button
              style={{ }}
              type="button"
              variant="info"
            >
              Imprimir reporte
        </Button>
        </div>
    </Layout>
  )
}