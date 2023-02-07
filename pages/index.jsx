import { useState } from "react";
import styles from "/styles/Home.module.css";
import { Button, Typography } from "@mui/material";

const Index = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div className={styles.background}>
            <Typography>Template MuiUi + FramerMotion + Nextjs!</Typography>

            <Button variant="contained" onClick={handleClick}>
                {count}
            </Button>
        </div>
    );
};

export default Index;
