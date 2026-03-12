---
title: "SubmitFormData Class"
domain: apex-reference
topic: submitformdata-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.750Z
estimatedTokens: 1942
keywords: [SubmitFormData, Contains, retrieve, information, buttons, options, selected, preference, form., Example, getButtonClicked, getOldSelectedValue, fieldId, getOldSelectedValues, getOldStringValue, getSelectedValue, getSelectedValues, getStringValue]
---

# SubmitFormData Class

> Contains methods to retrieve information on buttons and options
      selected in a preference form.

# SubmitFormData Class

Contains methods to retrieve information on buttons and options selected in a preference form.

## Namespace

[Pref\_center](atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm "The Pref_center namespace provides an interface, classes, and methods to create and retrieve data in forms in Preference Manager. Preference Manager, previously called Preference Center, is a feature within the Privacy Center app.")

## Example

Use methods in the SubmitFormData class to retrieve the selected values in different form components:

```

```

-   **[SubmitFormData Methods](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm#apex_pref_center_SubmitFormData_methods)**


## SubmitFormData Methods

The following are methods for SubmitFormData.

-   **[getButtonClicked()](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm#apex_pref_center_SubmitFormData_getButtonClicked)**
    Returns the field ID of the button that was clicked in the preference form. For example, use this method to determine if the clicked button was **Submit** or **Cancel**.
-   **[getOldSelectedValue(fieldId)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm#apex_pref_center_SubmitFormData_getOldSelectedValue)**
    Returns the value that was set for the specified field when the preference form was previously edited by the user. This method is used for field types such as picklist or radio buttons.
-   **[getOldSelectedValues(fieldId)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm#apex_pref_center_SubmitFormData_getOldSelectedValues)**
    Returns a list of the string values that were set on a checkbox field when the preference form was previously edited by the user.
-   **[getOldStringValue(fieldId)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm#apex_pref_center_SubmitFormData_getOldStringValue)**
    Returns the string value that was set on a field when the preference form was loaded. This method is used for field types such as text, and throws a TypeException if used with a field that can return more than one value, like a checkbox field.
-   **[getSelectedValue(fieldId)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm#apex_pref_center_SubmitFormData_getSelectedValue)**
    Returns the string value that is currently selected for a picklist or radio button field in the preference form.
-   **[getSelectedValues(fieldId)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm#apex_pref_center_SubmitFormData_getSelectedValues)**
    Returns a list of string values that are currently selected on a checkbox field in the preference form.
-   **[getStringValue(fieldId)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm#apex_pref_center_SubmitFormData_getStringValue)**
    Returns the string value that was set on a field when the preference form was loaded. This method is used for field types such as text.

### getButtonClicked()

Returns the field ID of the button that was clicked in the preference form. For example, use this method to determine if the clicked button was **Submit** or **Cancel**.

#### Signature

public String getButtonClicked()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getOldSelectedValue(fieldId)

Returns the value that was set for the specified field when the preference form was previously edited by the user. This method is used for field types such as picklist or radio buttons.

#### Signature

public String getOldSelectedValue(String fieldId)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getOldSelectedValues(fieldId)

Returns a list of the string values that were set on a checkbox field when the preference form was previously edited by the user.

#### Signature

public List<String\> getOldSelectedValues(String fieldId)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### getOldStringValue(fieldId)

Returns the string value that was set on a field when the preference form was loaded. This method is used for field types such as text, and throws a TypeException if used with a field that can return more than one value, like a checkbox field.

#### Signature

public String getOldStringValue(String fieldId)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSelectedValue(fieldId)

Returns the string value that is currently selected for a picklist or radio button field in the preference form.

#### Signature

public String getSelectedValue(String fieldId)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSelectedValues(fieldId)

Returns a list of string values that are currently selected on a checkbox field in the preference form.

#### Signature

public List<String\> getSelectedValues(String fieldId)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### getStringValue(fieldId)

Returns the string value that was set on a field when the preference form was loaded. This method is used for field types such as text.

#### Signature

public String getStringValue(String fieldId)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```apex
String buttonClickedId = formData.getButtonClicked();
if (buttonClickedId == 'submitButton') {
// Handle form submit
} else if (buttonClickedId == 'cancelButton') {
// Handle form cancel
}

String picklistValueOld = formData.getOldSelectedValue('myPicklist');
String picklistValueNew = formData.getSelectedValue('myPicklist');
if (picklistValueOld != picklistValueNew) {
// Do something
}

List<String> checkboxValuesOld = formData.getOldSelectedValues('myCheckbox');
List<String> checkboxValuesNew = formData.getSelectedValues('myCheckbox');
if (checkboxValuesOld != null && checkboxValuesNew != null && (checkboxValuesOld.size() != checkboxValuesNew.size())) {
// Do something
}

String textinputValueOld = formData.getOldStringValue('myTextinput');
String textinputValueNew = formData.getStringValue('myTextinput');
if (textinputValueOld != textinputValueNew) {
// Do something
}
```

## Related Topics

- Pref_center (atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm)
- SubmitFormData Methods (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm)
- getButtonClicked() (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm)
- getOldSelectedValue(fieldId) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm)
- getOldSelectedValues(fieldId) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm)
- getOldStringValue(fieldId) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm)
- getSelectedValue(fieldId) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm)
- getSelectedValues(fieldId) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm)
- getStringValue(fieldId) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_SubmitFormData.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
