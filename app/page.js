import * as React from "react";
import ConfirmForm from "../components/ConfirmForm";
import bg1 from "../public/img2.jpg";
import liverpool from "../public/liverpool.png";
import WeedingTimeline from "../components/WeedingTimeline";
import { Typography, Link } from "@mui/material";

export default function Page() {
  return (
    <main className={"some"}>
      <div style={{ backgroundImage: `url(${bg1.src})` }} className="header">
        <h1>
          Michelle y Salvador
          <span>16.12.2023</span>
        </h1>
      </div>
      <div className="phrase">
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
          <tbody>
            <tr>
              <td>Miguel Angel Cuevas Maciel</td>
              <td>† Salvador Ceja Ramos</td>
            </tr>
            <tr>
              <td>Ana Laura Hernandez Castellanos</td>
              <td>Ma. Guadalupe Garcia Fuentes</td>
            </tr>
          </tbody>
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
      <div className="mesaDeRegalos">
        <Typography variant="h4">Mesa de Regalos</Typography>
        <Typography variant="body2">
          El mejor regalo que nos puedes dar es tu presencia, pero si quieres
          obsequiarnos algo puedes hacerlo a través de la siguiente mesa de
          regalos:
        </Typography>
        <br />
        <a
          href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51132181"
          target="_blank"
        >
          <img src={liverpool.src} alt="Link a mesa de regalos" width="200px" />
        </a>
      </div>
      <div className="confirmForm">
        <Typography variant="h4">Confirma tu asistencia</Typography>
        <Typography variant="body2">
          Te invitamos cordialmete a ser parte de nuestro amor en este día tan
          especial.
        </Typography>
        <ConfirmForm />
      </div>
    </main>
  );
}
