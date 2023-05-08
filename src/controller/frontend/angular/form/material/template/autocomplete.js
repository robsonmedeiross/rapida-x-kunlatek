const uuidv4 = require("uuid");

const defaultAttributes = {
  id: uuidv4(), // Defaulting to uuid for now
  options: [],
  conditions: "",
  label: "",
  isAsync: false,
};

const componentBaseCode = (attributes = defaultAttributes) => `
  <mat-autocomplete #${attributes.id}="matAutocomplete" ${
  attributes.conditions
}>
    <mat-label>${attributes.label}</mat-label>

    <input type="text"
        placeholder="${attributes.placeholder}"
        matInput
        [formControl]="${attributes.name}"
        [matAutocomplete]="${attributes.id}">

    <mat-option *ngFor="let option of ${attributes.id}Options${
  attributes.isAsync ? " | async" : ""
}" [value]="option.value">
      {{option.name}}
    </mat-option>
  </mat-autocomplete>
`;

const createAutocompleteCode = async (project, element) => {
  let code = componentBaseCode(element);

  return code;
};

module.exports = {
  createAutocompleteCode,
};
