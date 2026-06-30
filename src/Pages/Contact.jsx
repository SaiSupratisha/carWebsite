import { useRef, useState } from "react";
 
function Contact() {
 
    const nameRef = useRef();
 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
 
    const [errors, setErrors] = useState({});
 
    const [success, setSuccess] = useState("");
 
    function handleChange(e) {
 
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
 
    }
 
    function validate() {
 
        let newErrors = {};
 
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
 
        if (!formData.email.includes("@")) {
            newErrors.email = "Enter a valid email";
        }
 
        if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone must contain 10 digits";
        }
 
        if (formData.message.trim().length < 10) {
            newErrors.message = "Message should contain at least 10 characters";
        }
 
        return newErrors;
    }
 
    function handleSubmit(e) {
 
        e.preventDefault();
 
        const validationErrors = validate();
 
        if (Object.keys(validationErrors).length > 0) {
 
            setErrors(validationErrors);
 
            setSuccess("");
 
            return;
        }
 
        setErrors({});
 
        setSuccess("Message sent successfully!");
 
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
 
        nameRef.current.focus();
 
    }
 
    return (
 
        <div
            style={{
                maxWidth: "600px",
                margin: "50px auto",
                padding: "30px",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                borderRadius: "10px"
            }}
>
 
            <h1 style={{ textAlign: "center" }}>
                Contact AutoVerse
</h1>
 
            <form onSubmit={handleSubmit}>
 
                <input
                    ref={nameRef}
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                />
 
                <p style={errorStyle}>{errors.name}</p>
 
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                />
 
                <p style={errorStyle}>{errors.email}</p>
 
                <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                />
 
                <p style={errorStyle}>{errors.phone}</p>
 
                <textarea
                    name="message"
                    rows="5"
                    placeholder="Enter Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={inputStyle}
                />
 
                <p style={errorStyle}>{errors.message}</p>
 
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "12px",
                        background: "#111827",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
>
                    Send Message
</button>
 
            </form>
 
            {
                success &&
<h3
                    style={{
                        color: "green",
                        marginTop: "20px",
                        textAlign: "center"
                    }}
>
                    {success}
</h3>
            }
 
        </div>
 
    );
 
}
 
const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "5px",
    border: "1px solid gray"
};
 
const errorStyle = {
    color: "red",
    marginTop: "5px",
    fontSize: "14px"
};
 
export default Contact;