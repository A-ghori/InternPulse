import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div>
            <h1 className="typewriter">Welcome to InternPulse</h1>
            <p>Your first step into the professional world.</p>
            <Link to = "/register">
            <button>Apply Now</button>
            </Link>
            <div style={{ marginTop: "3rem", padding: "1rem", borderTop: "1px solid #ccc" }}>
              <h3>🔐 Admin Access</h3>
              <p>If you're an admin, click below to view all applications:</p>
              <Link to="/admin">
                <button>Go to Admin Panel</button>
              </Link>
            </div>
        </div>
    );
}