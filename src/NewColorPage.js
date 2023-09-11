import { useState } from "react";

const NewColorPage = ({ addColor }) => {
    const INITIAL_STATE = {
        name: "",
        code: "",
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ ...formData });
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Color Name:</label>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Item Name"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="code">RGB Code:</label>
            <input
                id="code"
                type="text"
                name="code"
                placeholder="rgb(xxx,xxx,xxx)"
                value={formData.code}
                onChange={handleChange}
            />
            <button>Add Color!</button>
        </form>
    );
};
export default NewColorPage;
