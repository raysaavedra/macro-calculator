const GENDER = {
  MALE: "male",
  FEMALE: "female",
};

const GOAL = {
  LOOSE: 0,
  GAIN: 1,
};

const ACITIVTY_LEVEL_VALUES = {
  0: 1,
  1: 1.2,
  2: 1.375,
  3: 1.55,
  4: 1.725,
  5: 1.9,
};

const ACTIVITY_LIST = [
  {
    value: 0,
    label: "Basal Metabolic Rate",
    description:
      "BMR is the number of calories required to keep your body functioning at rest. Also known as your body's metabolism",
  },
  {
    value: 1,
    label: "Sedentary",
    description: "Little to no exercise",
  },
  {
    value: 2,
    label: "Lightly Active",
    description: "Light exercise (1-3 days per week)",
  },
  {
    value: 3,
    label: "Moderately Active",
    description: "Moderate exercise (3-5 days per week)",
  },
  {
    value: 4,
    label: "Very Active",
    description: "Hard exercise (5-7 days per week)",
  },
  {
    value: 5,
    label: "Extremely Active",
    description: "Very intense exercise daily or physical job",
  },
];

const CONSTANTS = {
  ...GENDER,
  ...GOAL,
  ACTIVITY_LIST,
  ACITIVTY_LEVEL_VALUES,
};

export default CONSTANTS;
