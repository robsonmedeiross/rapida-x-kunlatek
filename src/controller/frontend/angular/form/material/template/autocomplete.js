const attributes = require("../../../utils/form-attribute");

const createAutocompleteCode = async (project, element) => {
  const attribute = attributes.setAttribute(element);
  // let code = `
  //   <mat-autocomplete 
  //     #${attribute.id}="matAutocomplete" 
  //     ${attribute.conditions}>
  //     <mat-label>${attribute.label}</mat-label>

  //     <input type="text"
  //         placeholder="${attribute.placeholder}"
  //         matInput
  //         [formControl]="${attribute.name}"
  //         [matAutocomplete]="${attribute.id}">

  //     <mat-option 
  //       *ngFor="let option of ${attribute.id}Options${attributeisAsync ? " | async" : ""}" 
  //       [value]="option.value">
  //         {{option.name}}
  //     </mat-option>
  //   </mat-autocomplete>
  // `;
  return ``;
}

module.exports = {
  createAutocompleteCode,
};
