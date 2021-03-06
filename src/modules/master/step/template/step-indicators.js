export class StepIndicatorItem {
  activate(context) {
    console.log("step-indicator-Items")
    this.context = context;
    this.stepIndicators = context.data;
    this.error = context.error;
    this.options = context.options;
    this.readOnly = this.options.readOnly || false;
  } 

  controlOptions = {
    control: {
      length: 12
    }
  };
}