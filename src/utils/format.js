export const formatCurrency = value => {
  if (value == "" || value == null || !isFinite(value)) {
    value = 0;
  }

  return formatValidCurrency(value);
};

const formatValidCurrency = value => {
  if (value < 0) {
    value = Math.abs(value);

    return `-$${splitByThousand(Math.round(parseFloat(value)))}`;
  }

  return `$${splitByThousand(Math.round(parseFloat(value)))}`;
};

const splitByThousand = value => {
  if (!isFinite(value)) {
    return "";
  }

  if (value < 1000) {
    return "" + value;
  }

  let result = value % 1000;
  let formatted = ("000" + value).slice(-3);

  let remainderToSplit = (value - result) / 1000;

  return `${splitByThousand(remainderToSplit)},${formatted}`;
};
