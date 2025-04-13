import React, { Component } from "react";
import { observer } from "mobx-react";
import mbtiStore from "../stores/mbtiStore";
import { Card, CardContent, Typography, Grid } from "@mui/material";

class MBTICards extends Component {
  render() {
    return (
      <Grid container spacing={2}>
        {mbtiStore.mbtiList.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.type}>
            <Card>
              <CardContent>
                <Typography variant="h5">{item.type}</Typography>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default observer(MBTICards);
