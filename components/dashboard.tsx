import { PageProps } from "../common/common-types"
import Link from "next/link";

export const Dashboard = (props: PageProps) => {
    return (
        <div>
            <div>
                <p>
                    Aquesta aplicació de demostració mostra la verificació d'identitat facial construïda amb Amazon Rekognition.
                </p>
                <h2>Registrar nou usuari</h2>
                <Link href="/register-new-user">
                    <a className="btn btn-info">
                        Registrar
                    </a>
                </Link>
                <strong className="text-secondary" style={{ marginLeft: 10, marginTop: 10 }}>Registrar nou usuari</strong>
            </div>
            <hr />
            <div>
                <h2>Identificar usuari existent</h2>
                <Link href="/login-user">
                    <a className="btn btn-info">
                        Identificar
                    </a>
                </Link>
                <strong style={{ marginLeft: 10 }} className="text-secondary">Identificar usuari existent</strong>
            </div>
        </div>
    );
};

export default Dashboard;
