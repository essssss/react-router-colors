import { useParams } from "react-router-dom";

const ColorPage = () => {
    let { color } = useParams();
    return (
        <div>
            <h1>Here is your color:</h1>
            <div
                style={{
                    width: "500px",
                    height: "500px",
                    backgroundColor: color,
                }}
            ></div>
        </div>
    );
};

export default ColorPage;
