const attributes = require("../../../utils/form-attribute");

const createInputCode = async (project, element) => {
  const attribute = attributes.setAttribute(element);

  let code = "";

  // Skeleton
  switch (dataType) {
    case "file":
      
      break;

    case "date":
    
      break;
  
    default:
      if (attribute.isMultipleLines) {

      }

      if (!attribute.isMultipleLines) {
        code += `
        <mat-form-field 
          ${attribute.conditions}
        >
          <mat-label>${label}</mat-label>
          <input matInput type="${attribute.dataType}" 
          formControlName="${attribute.name}" 
          ${attribute.placeholder} 
          ${attribute.tooltip} 
          ${attribute.isRequired} 
          ${attribute.isDisabled} 
          ${attribute.mask}
          ${attribute.callMethod}
          autocomplete="new-password">
        </mat-form-field>
        `;
      }
      break;
  }
  
  return code;
};

module.exports = {
  createInputCode
}