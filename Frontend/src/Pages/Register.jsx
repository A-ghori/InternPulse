import {  useState } from "react";
import axios from 'axios';

export default function Register (){
    const [form, setform] = useState({
        name : "",
        email: "",
        role: "Intern",
        skills: "",
    });
    const [message] = useState("");
    
    const handleChange = (e) => {
setform({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.role || !form.skills) {
    alert("Please fill all fields!");
    return;
  }

  try {
    await axios.post('http://localhost:5050/api/applicants/register', form);
    alert("🎉 Application Submitted Successfully!");
  } catch (err) {
    console.error("❌ Submission Error:", err);
    alert("❌ Submission failed. Check console.");
  }
};
return (
    <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input name='name' onChange={handleChange} placeholder="Full Name" />
<input name='email' onChange={handleChange} placeholder="Valid EmailId" />
<select name="role" onChange={handleChange} >
<option value='Intern'>Intern</option>
<option value='Volunteer'>Volunteer</option>
</select>
<input name="skills" onChange={handleChange} placeholder="Skills (comma seperated)" />
<button type="submit">Submit</button>
{message && <p>{message}</p> }
    </form>
);
}