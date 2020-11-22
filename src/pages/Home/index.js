import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CachedIcon from "@material-ui/icons/Cached";
import { makeStyles } from "@material-ui/core/styles";

import constants from "./constants";
import config from "../../config/app";
import { calculateResult, calculateNewValueFromPercent } from "./utils";
import Results from "./components/Results";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    backgroundColor: "#eeeeee",
    borderRadius: theme.spacing(2),
  },
  container: {
    padding: theme.spacing(5, 0, 5, 0),
  },
  blackBoldText: {
    color: "black",
    fontWeight: "bold",
  },
}));

const Home = () => {
  const classes = useStyles();

  const [gender, setGender] = useState(constants.MALE);
  const [age, setAge] = useState(25);
  const [heightFt, setHeightFt] = useState(4);
  const [heightIn, setHeightIn] = useState(5);
  const [heightCm, setHeightCm] = useState(180);
  const [useMetricInHeight, setUseMetricInHeight] = useState(false);
  const [useMetricInWeight, setUseMetricInWeight] = useState(false);
  const [weightGoal, setWeightGoal] = useState(constants.LOOSE);
  const [weightGoalPercent, setWeightGoalPercent] = useState(0);
  const [weight, setWeight] = useState(150);
  const [activityLevel, setActivityLevel] = useState(0);
  const [caloriesPerDay, setCaloriesPerDay] = useState({
    calories: 0,
    protein: 0,
    fat: 0,
    carbs: 0,
    fiber: 0,
  });

  useEffect(() => {
    calculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    gender,
    age,
    heightFt,
    heightIn,
    heightCm,
    useMetricInHeight,
    weight,
    useMetricInWeight,
    weightGoal,
    weightGoalPercent,
    activityLevel,
  ]);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleHeightFtChange = (e) => {
    setHeightFt(e.target.value);
  };

  const handleHeightInChange = (e) => {
    setHeightIn(e.target.value);
  };

  const handleHeightCmChange = (e) => {
    setHeightCm(e.target.value);
  };

  const handleWeighChange = (e) => {
    setWeight(e.target.value);
  };

  const handleActivityLevelChange = (e) => {
    setActivityLevel(e.target.value);
  };

  const handleHeightSwitch = () => {
    setUseMetricInHeight(!useMetricInHeight);
  };

  const handleWeightSwitch = () => {
    setUseMetricInWeight(!useMetricInWeight);
  };

  const handleWeightGoalChange = (e) => {
    setWeightGoal(e.target.value);
  };

  const handleMinusWeightGoal = () => {
    let p = weightGoalPercent;
    if (p <= 0) return;
    p -= 1;

    setWeightGoalPercent(p);
  };

  const handleAddWeightGoal = () => {
    let p = weightGoalPercent;
    p += 1;

    setWeightGoalPercent(p);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const calculate = () => {
    const result = calculateResult({
      gender,
      age,
      height: useMetricInHeight ? heightCm : [heightFt, heightIn],
      heightType: useMetricInHeight,
      weight: weight,
      weightType: useMetricInWeight,
      activityLevel,
      goal: weightGoal,
      goalValue: weightGoalPercent,
    });

    setCaloriesPerDay(result);
  };

  return (
    <Container className={classes.root}>
      <Grid
        container
        alignItems="flex-start"
        justify="center"
        className={classes.container}
        spacing={2}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Typography variant="body1" className={classes.blackBoldText}>
                Input values to calculate your macros
              </Typography>
            </Grid>

            <Grid item>
              <TextField label="Age" value={age} onChange={handleAgeChange} />
            </Grid>

            <Grid item>
              <FormControl>
                <Box mb={1}>
                  <FormLabel component="legend">Gender</FormLabel>
                </Box>
                <RadioGroup
                  aria-label="gender"
                  value={gender}
                  onChange={handleGenderChange}
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <FormControlLabel
                    value={constants.MALE}
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value={constants.FEMALE}
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl>
                <Box mb={1}>
                  <FormLabel component="legend">Height</FormLabel>
                </Box>
                <Grid container spacing={1}>
                  {useMetricInHeight ? (
                    <Grid item>
                      <TextField
                        label="Centimeters"
                        value={heightCm}
                        onChange={handleHeightCmChange}
                      />
                    </Grid>
                  ) : (
                    <>
                      <Grid item>
                        <TextField
                          label="Feet"
                          value={heightFt}
                          onChange={handleHeightFtChange}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          label="Inches"
                          value={heightIn}
                          onChange={handleHeightInChange}
                        />
                      </Grid>
                    </>
                  )}

                  <Grid item>
                    <Tooltip
                      title={
                        useMetricInHeight
                          ? "Switch to feet and inches"
                          : "Switch to cm"
                      }
                    >
                      <IconButton onClick={handleHeightSwitch}>
                        <CachedIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl>
                <Box mb={1}>
                  <FormLabel component="legend">Weight</FormLabel>
                </Box>
                <Grid container spacing={1}>
                  <Grid item>
                    <TextField
                      label={
                        useMetricInWeight ? "Kilograms (kg)" : "Pounds (lbs)"
                      }
                      value={weight}
                      onChange={handleWeighChange}
                    />
                  </Grid>
                  <Grid item>
                    <Tooltip
                      title={
                        useMetricInWeight
                          ? "Switch to pounds (lbs)"
                          : "Switch to kilogram (kg)"
                      }
                    >
                      <IconButton onClick={handleWeightSwitch}>
                        <CachedIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl>
                <Box mb={1}>
                  <FormLabel component="legend">
                    Select Activity Level
                  </FormLabel>
                </Box>

                <Select
                  native
                  defaultValue={activityLevel}
                  onChange={handleActivityLevelChange}
                >
                  {constants.ACTIVITY_LIST.map((val, index) => {
                    return (
                      <option key={index} value={val.value}>
                        {`${val.label} - ${val.description}`}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl>
                <Box mb={1}>
                  <FormLabel component="legend">Weight Goal</FormLabel>
                </Box>

                <Grid container spacing={2}>
                  <Grid item>
                    <Select
                      native
                      defaultValue={weightGoal}
                      onChange={handleWeightGoalChange}
                    >
                      <option value={constants.LOOSE}>Loose</option>
                      <option value={constants.GAIN}>Gain</option>
                    </Select>
                  </Grid>

                  <Grid item>
                    <Box
                      ml={3}
                      height="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography variant="body1">{`${weightGoalPercent}%`}</Typography>
                    </Box>
                  </Grid>

                  <Grid item>
                    <ButtonGroup
                      color="primary"
                      aria-label="outlined primary button group"
                    >
                      <Button onClick={handleMinusWeightGoal}>-</Button>
                      <Button onClick={handleAddWeightGoal}>+</Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>

                <Box>
                  <FormHelperText>
                    {weightGoalPercent === 0
                      ? `Maintain Weight: ${weight}${
                          useMetricInWeight ? "kg" : "lbs"
                        }`
                      : `Target Weight: ${calculateNewValueFromPercent(
                          weight,
                          weightGoalPercent,
                          weightGoal
                        )}${useMetricInWeight ? "kg" : "lbs"}`}
                  </FormHelperText>
                </Box>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Results
            caloriesPerDay={caloriesPerDay.calories}
            fatInGrams={caloriesPerDay.fat}
            carbsInGrams={caloriesPerDay.carbs}
            proteinInGrams={caloriesPerDay.protein}
            fiberInGrams={caloriesPerDay.fiber}
            proteinSplit={`${config.ProteinDefaultConversion * 100}%`}
            fatSplit={`${config.FatDefaultConversion * 100}%`}
            carbsSplit={`${config.CarbsDefaultConversion * 100}%`}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
