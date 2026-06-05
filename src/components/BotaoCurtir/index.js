"user client"

import {useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function BotaoCurtir() {
    const [curtido, setCurtido] = useState(false);

    return (
        <button onClick={() => setCurtido(!curtido)}
            style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "24px",
                color: curtido ? "red" : "gray",
            }}
            >
             {curtido ? <FaHeart /> : <FaRegHeart />}
        </button>
    );
}

export default BotaoCurtir;