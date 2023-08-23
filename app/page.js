import * as React from "react";
import ConfirmForm from "../components/ConfirmForm";
import bg1 from "../public/img2.jpg";
import bg2 from "../public/img1.jpg";
import WeedingTimeline from "../components/WeedingTimeline";

export default function Page() {
  return (
    <main className={"some"}>
      <div style={{ backgroundImage: `url(${bg1.src})` }} className="header">
        <h1>
          Michelle y Salvador
          <span>16.12.2023</span>
        </h1>
      </div>
      <div className="phrase" style={{ backgroundImage: `url(${bg2.src})` }} >
        <p>Este es el sueño que compartimos...</p>
        <p>El que queremos cuidar a través de los años...</p>
        <p>El que hablará por nosotros, mas que toda palabra...</p>
        <p>El que nos reencontrará a través de cualquier distancia...</p>
        <p>Este es el sueño que compartimos, y se llama amor.</p>
      </div>
      <div className="phrase2">
        <p>
          Con la presencia de dios entre nosotros y la bendicion de nuestros
          padres
        </p>
        <table>
          <tr>
            <td>Miguel Angel Cuevas Maciel</td>
            <td>† Salvador Ceja Ramos</td>
          </tr>
          <tr>
            <td>Ana Laura Hernandez Castellanos</td>
            <td>Ma. Guadalupe Garcia Fuentes</td>
          </tr>
        </table>
        <span>
          <p>
            Te invitamos a formar parte de nuestra boda y acompañarnos a
            celebrar el inicio de nuestra vida juntos
          </p>
          <h3>16/12/2023</h3>
        </span>
        <WeedingTimeline />
      </div>
      <div className="confirmForm">
        <ConfirmForm />
      </div>
    </main>
  );
}
