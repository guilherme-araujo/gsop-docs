import Link from "next/link"
import { useState } from "react"
import { Button, Modal, Tab, Tabs } from "react-bootstrap"

export default function Historia() {
  //linha b penalidade procurar
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

  //linha v penalidade procurar
  const [showbvProd01, setShowbvProd01] = useState(false)
  const [showbvProd02, setShowbvProd02] = useState(false)
  const [showbvProd03, setShowbvProd03] = useState(false)
  const [showbvProd04, setShowbvProd04] = useState(false)
  const [showbvProd05, setShowbvProd05] = useState(false)
  const [showbvProd06, setShowbvProd06] = useState(false)

  //linha b penalidade produzir
  const [showbProd01, setShowbProd01] = useState(false)
  const [showbProd02, setShowbProd02] = useState(false)
  const [showbProd03, setShowbProd03] = useState(false)
  const [showbProd04, setShowbProd04] = useState(false)
  const [showbProd05, setShowbProd05] = useState(false)
  const [showbProd06, setShowbProd06] = useState(false)
  const [showbProd07, setShowbProd07] = useState(false)
  const [showbProd08, setShowbProd08] = useState(false)
  const [showbProd09, setShowbProd09] = useState(false)
  const [showbProd10, setShowbProd10] = useState(false)

  //linha v penalidade produzir
  const [showvProd01, setShowvProd01] = useState(false)
  const [showvProd02, setShowvProd02] = useState(false)
  const [showvProd03, setShowvProd03] = useState(false)
  const [showvProd04, setShowvProd04] = useState(false)
  const [showvProd05, setShowvProd05] = useState(false)
  const [showvProd06, setShowvProd06] = useState(false)

  //trigger linha b penalidade procurar
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

  //trigger col v penalidade procurar
  const triggerbvProd01 = () =>
    showbvProd01 ? setShowbvProd01(false) : setShowbvProd01(true)
  const triggerbvProd02 = () =>
    showbvProd02 ? setShowbvProd02(false) : setShowbvProd02(true)
  const triggerbvProd03 = () =>
    showbvProd03 ? setShowbvProd03(false) : setShowbvProd03(true)
  const triggerbvProd04 = () =>
    showbvProd04 ? setShowbvProd04(false) : setShowbvProd04(true)
  const triggerbvProd05 = () =>
    showbvProd05 ? setShowbvProd05(false) : setShowbvProd05(true)
  const triggerbvProd06 = () =>
    showbvProd06 ? setShowbvProd06(false) : setShowbvProd06(true)

  //trigger linha b penalidade produzir
  const triggerbProd01 = () =>
    showbProd01 ? setShowbProd01(false) : setShowbProd01(true)
  const triggerbProd02 = () =>
    showbProd02 ? setShowbProd02(false) : setShowbProd02(true)
  const triggerbProd03 = () =>
    showbProd03 ? setShowbProd03(false) : setShowbProd03(true)
  const triggerbProd04 = () =>
    showbProd04 ? setShowbProd04(false) : setShowbProd04(true)
  const triggerbProd05 = () =>
    showbProd05 ? setShowbProd05(false) : setShowbProd05(true)
  const triggerbProd06 = () =>
    showbProd06 ? setShowbProd06(false) : setShowbProd06(true)
  const triggerbProd07 = () =>
    showbProd07 ? setShowbProd07(false) : setShowbProd07(true)
  const triggerbProd08 = () =>
    showbProd08 ? setShowbProd08(false) : setShowbProd08(true)
  const triggerbProd09 = () =>
    showbProd09 ? setShowbProd09(false) : setShowbProd09(true)
  const triggerbProd10 = () =>
    showbProd10 ? setShowbProd10(false) : setShowbProd10(true)

  //trigger col v penalidade produzir
  const triggervProd01 = () =>
    showvProd01 ? setShowvProd01(false) : setShowvProd01(true)
  const triggervProd02 = () =>
    showvProd02 ? setShowvProd02(false) : setShowvProd02(true)
  const triggervProd03 = () =>
    showvProd03 ? setShowvProd03(false) : setShowvProd03(true)
  const triggervProd04 = () =>
    showvProd04 ? setShowvProd04(false) : setShowvProd04(true)
  const triggervProd05 = () =>
    showvProd05 ? setShowvProd05(false) : setShowvProd05(true)
  const triggervProd06 = () =>
    showvProd06 ? setShowvProd06(false) : setShowvProd06(true)

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
            <div id="blinev-20210528">
              <div className="bitemv-20210528" onClick={triggerbvProd01}></div>
              <div className="bitemv-20210528" onClick={triggerbvProd02}></div>
              <div className="bitemv-20210528" onClick={triggerbvProd03}></div>
              <div className="bitemv-20210528" onClick={triggerbvProd04}></div>
              <div className="bitemv-20210528" onClick={triggerbvProd05}></div>
              <div className="bitemv-20210528" onClick={triggerbvProd06}></div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="2" title="Penalidade de produzir">
          <div className="div0528">
            <img src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/lineplot.png" />
            <div id="bline-20210528">
              <div className="bitem-20210528" onClick={triggerbProd01}></div>
              <div className="bitem-20210528" onClick={triggerbProd02}></div>
              <div className="bitem-20210528" onClick={triggerbProd03}></div>
              <div className="bitem-20210528" onClick={triggerbProd04}></div>
              <div className="bitem-20210528" onClick={triggerbProd05}></div>
              <div className="bitem-20210528" onClick={triggerbProd06}></div>
              <div className="bitem-20210528" onClick={triggerbProd07}></div>
              <div className="bitem-20210528" onClick={triggerbProd08}></div>
              <div className="bitem-20210528" onClick={triggerbProd09}></div>
              <div className="bitem-20210528" onClick={triggerbProd10}></div>
            </div>
            <div id="blinev-20210528">
              <div className="bitemv-20210528" onClick={triggervProd01}></div>
              <div className="bitemv-20210528" onClick={triggervProd02}></div>
              <div className="bitemv-20210528" onClick={triggervProd03}></div>
              <div className="bitemv-20210528" onClick={triggervProd04}></div>
              <div className="bitemv-20210528" onClick={triggervProd05}></div>
              <div className="bitemv-20210528" onClick={triggervProd06}></div>
            </div>
          </div>
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

      <Modal
        show={showbvProd01}
        onHide={triggerbvProd01}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/sA100.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbvProd01}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbvProd02}
        onHide={triggerbvProd02}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/sA099.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbvProd02}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbvProd03}
        onHide={triggerbvProd03}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/sA098.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbvProd03}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbvProd04}
        onHide={triggerbvProd04}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/sA097.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbvProd04}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbvProd05}
        onHide={triggerbvProd05}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/sA096.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbvProd05}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbvProd06}
        onHide={triggerbvProd06}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vsearching/sA095.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbvProd06}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbProd01}
        onHide={triggerbProd01}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/b01.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbProd01}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbProd02}
        onHide={triggerbProd02}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/b02.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbProd02}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbProd03}
        onHide={triggerbProd03}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/b03.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbProd03}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbProd04}
        onHide={triggerbProd04}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/b04.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbProd04}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbProd05}
        onHide={triggerbProd05}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/b05.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbProd05}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbProd06}
        onHide={triggerbProd06}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/b06.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbProd06}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbProd07}
        onHide={triggerbProd07}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/b07.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbProd07}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbProd08}
        onHide={triggerbProd08}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/b08.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbProd08}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbProd09}
        onHide={triggerbProd09}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/b09.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbProd09}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showbProd10}
        onHide={triggerbProd10}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/b10.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggerbProd10}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showvProd01}
        onHide={triggervProd01}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/bA100.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggervProd01}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showvProd02}
        onHide={triggervProd02}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/bA099.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggervProd02}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showvProd03}
        onHide={triggervProd03}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/bA098.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggervProd03}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showvProd04}
        onHide={triggervProd04}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/bA097.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggervProd04}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showvProd05}
        onHide={triggervProd05}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/bA096.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggervProd05}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showvProd06}
        onHide={triggervProd06}
        dialogClassName="my-modal"
      >
        <Modal.Body>
          <img
            className="img-responsive "
            src="https://hungria.imd.ufrn.br/~gfaraujo/alemanha/20210528/vproducing/bA095.png"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={triggervProd06}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
