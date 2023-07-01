const attributes = require("../../../utils/form-attribute");

const createSelectCode = async (project, element) => {
  const attribute = attributes.setAttribute(element);
  
  // Skeleton
  return `
    <mat-form-field ${attribute.conditions}>
      <mat-label>${attribute.label}</mat-label>
      <mat-select formControlName="${attribute.name}" 
        ${attribute.tooltip} 
        ${attribute.isRequired} 
        ${attribute.multiple}>
        <mat-option *ngFor="let ${attribute.name}Item of ${attribute.name}SelectObject" [value]="${attribute.name}Item.value">
          {{${attribute.name}Item.label}}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `;
  
  return code;
}

module.exports = {
  createSelectCode
}