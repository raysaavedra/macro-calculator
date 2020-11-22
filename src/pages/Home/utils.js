import config from "../../config/app";
import constants from "./constants";

const getPercentOf = (val, percent) => {
  return (percent / 100) * val;
};
const convertPoundsToKg = (lbs) => Math.round(lbs * config.PoundToKg);
const convertFtInToCm = (ft, inches) =>
  Math.round(ft * config.FeetToCm + inches * config.InchesToCm);

export const calculateNewValueFromPercent = (
  weight,
  weightGoalPercent,
  weightGoalType
) => {
  return Math.round(
    weightGoalType === constants.LOOSE
      ? weight - getPercentOf(weight, weightGoalPercent)
      : weight + getPercentOf(weight, weightGoalPercent)
  );
};

export const calculateResult = ({
  gender,
  age,
  height,
  useMetricInHeight,
  weight,
  useMetricInWeight,
  activityLevel,
  goal,
  goalValue,
}) => {
  let s = +5;
  console.log("initial weight:", weight);
  console.log("initial height:", height);

  if (gender === constants.FEMALE) s = -161;

  if (!useMetricInHeight) {
    height = convertFtInToCm(height[0], height[1]);
  }

  console.log("new height:", height);

  if (!useMetricInWeight) {
    weight = convertPoundsToKg(weight);
    console.log("converted weight:", weight);
  }

  let caloriesPerDay = Math.floor(10 * weight + 6.25 * height - 5 * age + s);
  console.log("calories per day1", caloriesPerDay);
  caloriesPerDay = calculateNewValueFromPercent(
    caloriesPerDay,
    goalValue,
    goal
  );
  console.log("calories per day2", caloriesPerDay);
  const activityLevelMultiplier =
    constants.ACITIVTY_LEVEL_VALUES[activityLevel];
  caloriesPerDay = Math.floor(caloriesPerDay * activityLevelMultiplier);

  console.log("calories per day3", caloriesPerDay);

  const proteinConversion = caloriesPerDay * config.ProteinDefaultConversion;
  const carbsConversion = caloriesPerDay * config.CarbsDefaultConversion;
  const fatConversion = caloriesPerDay * config.FatDefaultConversion;
  const fiberConversion = caloriesPerDay / 1000;

  return {
    calories: caloriesPerDay,
    protein: Math.floor(
      proteinConversion / config.ProteinDefaultGramConversion
    ),
    fat: Math.floor(fatConversion / config.FatDefaultGramConversion),
    carbs: Math.floor(carbsConversion / config.CarbsDefaultGramConversion),
    fiber: Math.floor(fiberConversion * config.FiberDefaultGramConversion),
  };
};
