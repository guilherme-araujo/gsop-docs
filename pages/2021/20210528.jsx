import Link from "next/link"
import { useState } from "react"
import { Button, Modal, Tab, Tabs } from "react-bootstrap"

export default function Historia() {
  const [showb01, setShowb01] = useState(false)
  const [showb02, setShowb02] = useState(false)
  const [showb03, setShowb03] = useState(false)
  const [showb04, setShowb04] = useState(false)
  const [showb05, setShowb05] = useState(false)
  const [showb06, setShowb06] = useState(false)
  const [showb07, setShowb07] = useState(false)
  const [showb08, setShowb08] = useState(false)
  const [showb09, setShowb09] = useState(false)
  const [showb10, setShowb10] = useState(false)

  const triggerb01 = () => (showb01 ? setShowb01(false) : setShowb01(true))
  const triggerb02 = () => (showb02 ? setShowb02(false) : setShowb02(true))
  const triggerb03 = () => (showb03 ? setShowb03(false) : setShowb03(true))
  const triggerb04 = () => (showb04 ? setShowb04(false) : setShowb04(true))
  const triggerb05 = () => (showb05 ? setShowb05(false) : setShowb05(true))
  const triggerb06 = () => (showb06 ? setShowb06(false) : setShowb06(true))
  const triggerb07 = () => (showb07 ? setShowb07(false) : setShowb07(true))
  const triggerb08 = () => (showb08 ? setShowb08(false) : setShowb08(true))
  const triggerb09 = () => (showb09 ? setShowb09(false) : setShowb09(true))
  const triggerb10 = () => (showb10 ? setShowb10(false) : setShowb10(true))

  return (
    <div>
      <h1> 20210528</h1>

      <Link href="/">voltar</Link>

      <p></p>

      <Tabs>
        <Tab eventKey="1" title="Penalidade de procurar">
          <div className="div0528">
            <img src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/lineplot.png" />
            <div id="bline-20210528">
              <div className="bitem-20210528" onClick={triggerb01}></div>
              <div className="bitem-20210528" onClick={triggerb02}></div>
              <div className="bitem-20210528" onClick={triggerb03}></div>
              <div className="bitem-20210528" onClick={triggerb04}></div>
              <div className="bitem-20210528" onClick={triggerb05}></div>
              <div className="bitem-20210528" onClick={triggerb06}></div>
              <div className="bitem-20210528" onClick={triggerb07}></div>
              <div className="bitem-20210528" onClick={triggerb08}></div>
              <div className="bitem-20210528" onClick={triggerb09}></div>
              <div className="bitem-20210528" onClick={triggerb10}></div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="2" title="Penalidade de produzir">
          <p>Tempo: 1h16</p>
          <img src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/lineplot.png" />
        </Tab>
      </Tabs>

      <Modal show={showb01} onHide={triggerb01} dialogClassName="my-modal">
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/b01.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerb01}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showb02} onHide={triggerb02} dialogClassName="my-modal">
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/b02.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerb02}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showb03} onHide={triggerb03} dialogClassName="my-modal">
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/b03.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerb03}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showb04} onHide={triggerb04} dialogClassName="my-modal">
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/b04.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerb04}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showb05} onHide={triggerb05} dialogClassName="my-modal">
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/b05.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerb05}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showb06} onHide={triggerb06} dialogClassName="my-modal">
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/b06.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerb06}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showb07} onHide={triggerb07} dialogClassName="my-modal">
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/b07.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerb07}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showb08} onHide={triggerb08} dialogClassName="my-modal">
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/b08.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerb08}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showb09} onHide={triggerb09} dialogClassName="my-modal">
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/b09.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerb09}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showb10} onHide={triggerb10} dialogClassName="my-modal">
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/b10.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerb10}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
