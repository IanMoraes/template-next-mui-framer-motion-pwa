import { Grid } from "@mui/material";
import React from "react";
import { HiCode } from "react-icons/hi";
export default function Header() {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 3 }}>
            <Grid container item md={3} xs={1}>
                <HiCode style={{ fontSize: "36px" }} />
            </Grid>
            <Grid container item md={9} xs={11} justifyContent="flex-end" alignItems="center" spacing={5}>
                <Grid item>item 1</Grid>
                <Grid item>item 1</Grid>
                <Grid item>item 1</Grid>
                <Grid item>item 1</Grid>
            </Grid>
        </Grid>
    );
}
