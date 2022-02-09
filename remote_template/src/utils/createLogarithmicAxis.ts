import Highcharts from 'highcharts';

type LogarithmicAxis = {
  logarithmic: {
    axis: Highcharts.Axis;
    lin2log: (num: number) => number;
    log2lin: (num: number) => number;
  },
  options: {
    custom: {
      allowNegativeLog: boolean;
    }
  },
  positiveValuesOnly: boolean;
} & Highcharts.Axis;

export default function createLogarithmicAxis(this: LogarithmicAxis) {

  const logarithmic = this.logarithmic;

  if (logarithmic && this.options.custom.allowNegativeLog) {

    // Avoid errors on negative numbers on a log axis
    this.positiveValuesOnly = false;

    // Override the converter functions
    logarithmic.log2lin = (num: number) => {
      const isNegative = num < 0;

      let adjustedNum = Math.abs(num);

      if (adjustedNum < 10) {
        adjustedNum += (10 - adjustedNum) / 10;
      }

      const result = Math.log(adjustedNum) / Math.LN10;
      return isNegative ? -result : result;
    };

    logarithmic.lin2log = (num: number) => {
      const isNegative = num < 0;

      let result = Math.pow(10, Math.abs(num));
      if (result < 10) {
        result = (10 * (result - 1)) / (10 - 1);
      }
      return isNegative ? -result : result;
    };
  }
}
