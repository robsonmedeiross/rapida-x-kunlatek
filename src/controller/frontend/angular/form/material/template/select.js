const attributes = require("../../../utils/form-attribute");

const createInputCode = async (project, element) => {
  const attribute = attributes.setAttribute(element);
  let code = "";

  // Skeleton
  code += `
    <mat-form-field ${attribute.conditions}>
      <mat-label>${attribute.label}</mat-label>
      <mat-select formControlName="${attribute.name}" 
        ${attribute.tooltip} 
        ${attribute.isRequired} 
        ${attribute.multiple} ${setCondition}>
        <mat-option *ngFor="let ${attributes.name}Item of ${attributes.name}SelectObject" [value]="${attributes.name}Item.value">
          {{${attributes.name}Item.label}}
        </mat-option>
      </mat-select>
    </mat-form-field>
    ${setFormFieldShimmer(attributes.label, conditions.replace('!isLoading', 'isLoading'))}
  `;
  
  return code;
}

module.exports = {
  createInputCode
}