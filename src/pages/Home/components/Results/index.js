import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  blackBoldText: {
    color: "black",
    fontWeight: "bold",
  },
  greenBoldText: {
    color: "green",
    fontWeight: "bold",
  },
  blueBoldText: {
    color: "blue",
    fontWeight: "bold",
  },
  orangeBoldText: {
    color: "orange",
    fontWeight: "bold",
  },
  redBoldText: {
    color: "red",
    fontWeight: "bold",
  },
  violetBoldText: {
    color: "violet",
    fontWeight: "bold",
  },
}));

const Results = ({
  caloriesPerDay,
  proteinInGrams,
  fatInGrams,
  carbsInGrams,
  fiberInGrams,
  proteinSplit,
  fatSplit,
  carbsSplit,
}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Divider style={{ width: "90%" }} />
      </Grid>
      <Grid item>
        <Typography variant="h4" className={classes.blackBoldText}>
          Results
        </Typography>
      </Grid>

      <Grid item>
        <Grid container spacing={4}>
          <Grid item>
            <Typography variant="h6" className={classes.blackBoldText}>
              Calories per Day
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.greenBoldText}>
              {caloriesPerDay}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Typography variant="h6" className={classes.blackBoldText}>
              Daily Macros
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {`(${carbsSplit} Carbs, ${proteinSplit} Protein, ${fatSplit} fat)`}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={5}>
              <Grid item>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Typography variant="body1" className={classes.blackBoldText}>
                    Protein
                  </Typography>
                  <Box ml={2}>
                    <Typography
                      variant="body1"
                      className={classes.blueBoldText}
                    >
                      {`${proteinInGrams}g`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Typography variant="body1" className={classes.blackBoldText}>
                    Fat
                  </Typography>
                  <Box ml={2}>
                    <Typography
                      variant="body1"
                      className={classes.orangeBoldText}
                    >
                      {`${fatInGrams}g`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Grid container spacing={5}>
              <Grid item>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Typography variant="body1" className={classes.blackBoldText}>
                    Carbs
                  </Typography>
                  <Box ml={2}>
                    <Typography variant="body1" className={classes.redBoldText}>
                      {`${carbsInGrams}g`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                >
                  <Typography variant="body1" className={classes.blackBoldText}>
                    Fiber
                  </Typography>
                  <Box ml={2}>
                    <Typography
                      variant="body1"
                      className={classes.violetBoldText}
                    >
                      {`${fiberInGrams}g`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Divider style={{ width: "90%" }} />
      </Grid>
    </Grid>
  );
};

export default Results;
