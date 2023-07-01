const attributes = require("../../../utils/form-attribute");

const createWysiwygCode = async (project, element) => {
  const attribute = attributes.setAttribute(element);

  return `
  <mat-form-field 
    ${attribute.conditions}
  >
    <mat-label>${attribute.label}</mat-label>
    <quill-editor>
      <div quill-editor-toolbar>
        <span class="ql-formats">
          <button class="ql-bold" [title]="'Bold'"></button>
        </span>
        <span class="ql-formats">
          <select class="ql-align" [title]="'Aligment'">
            <option selected></option>
            <option value="center"></option>
            <option value="right"></option>
            <option value="justify"></option>
          </select>
          <select class="ql-align" [title]="'Aligment2'">
            <option selected></option>
            <option value="center"></option>
            <option value="right"></option>
            <option value="justify"></option>
          </select>
        </span>
      </div>
    </quill-editor>
  </mat-form-field>
  `;
}

module.exports = {
  createWysiwygCode
}