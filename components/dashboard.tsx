import { PageProps } from "../common/common-types"
import Link from "next/link";

export const Dashboard = (props: PageProps) => {
    return (
        <div>
            <div>
                <p>
                    This demo application showcases 4 key suggested flows for Id Verification applications built using Amazon Recognition.
                </p>
                <h2>Register new user</h2>
                <Link href="/register-new-user">
                    <a className="btn btn-info">
                        Register
                    </a>
                </Link>
                <strong className="text-secondary" style={{ marginLeft: 10, marginTop: 10 }}>Register new user</strong>
            </div>
            <hr />
            <div>
                <h2>Existing user login</h2>
                <Link href="/login-user">
                    <a className="btn btn-info">
                        Login
                    </a>
                </Link>
                <strong style={{ marginLeft: 10 }} className="text-secondary">Existing user login</strong>
            </div>
            <hr />
            <div>
                <h2>Register new user with ID card</h2>
                <div className="alert alert-info">
                    {"What's"} different about this flow from the one above is that it requires the user to provide an Id card during the registration process. 
                    The faces on the Id card and the selfie are compared against each other to ensure that they match. 
                    The rest of the steps in the flow are identical to the above flow.
                </div>
                <Link href="/register-new-user-with-idcard">
                    <a className="btn btn-info">
                        Register
                    </a>
                </Link>
                <strong style={{ marginLeft: 10 }} className="text-secondary">Register new user with id card</strong>
            </div>
        </div>
    );
};

export default Dashboard;
