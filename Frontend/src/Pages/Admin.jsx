import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_API_URL);
        setApplications(res.data);
      } catch (err) {
        console.error("Error fetching applicants:", err);
        setError(true);
      } finally {
        setLoading(false)
      }
    };

    fetchApplications();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📋 All Applicants</h2>

      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>❌ Failed to load data. Check console.</p>}

      {!loading && !error && applications.length === 0 && (
        <p>No applications yet.</p>
      )}

      {!loading && !error && applications.map((app, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "1rem",
            marginBottom: "1rem",
            background: "#f8f8f8",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{app.name}</h3>
          <p><strong>Email:</strong> {app.email}</p>
          <p><strong>Role:</strong> {app.role}</p>
          <p><strong>Skills:</strong> {app.skills}</p>
          <p><strong>Status:</strong> Pending</p>
        </div>
      ))}
    </div>
  );
}