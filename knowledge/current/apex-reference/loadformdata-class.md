---
title: "LoadFormData Class"
domain: apex-reference
topic: loadformdata-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.734Z
estimatedTokens: 2910
keywords: [LoadFormData, Retrieve, records, related, tokenized, record, populate, values, preference, form., Example, data, Usage, addOption, fieldId, label, option, addSelectedOption, setButtonLabel, setOptions]
---

# LoadFormData Class

> Retrieve records related to the tokenized record id, and populate the
            values of a preference form.

# LoadFormData Class

Retrieve records related to the tokenized record id, and populate the values of a preference form.

## Namespace

[Pref\_center](atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm "The Pref_center namespace provides an interface, classes, and methods to create and retrieve data in forms in Preference Manager. Preference Manager, previously called Preference Center, is a feature within the Privacy Center app.")

## Example

Use methods in the LoadFormData class to set available and selected values in different form components:

```

```

-   **[LoadFormData Constructors](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm#apex_pref_center_LoadFormData_constructors)**

-   **[LoadFormData Methods](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm#apex_pref_center_LoadFormData_methods)**


## LoadFormData Constructors

The following are constructors for LoadFormData.

-   **[LoadFormData(data)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm#apex_pref_center_LoadFormData_ctor)**
    Creates an instance of the LoadFormData class for running tests on any custom Apex classes you create for Preference Manager.

### LoadFormData(data)

Creates an instance of the LoadFormData class for running tests on any custom Apex classes you create for Preference Manager.

#### Signature

public LoadFormData(Map<String,pref\_center.FieldProperties> data)

#### Parameters

data

Type: Map<String,pref\_center.FieldProperties>[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")

Maps preference form data from the field ID to the field properties.

#### Usage

This constructor is available in API version 56.0 and later.

## LoadFormData Methods

The following are methods for LoadFormData.

-   **[addOption(fieldId, value, label)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm#apex_pref_center_LoadFormData_addOption)**
    Add an option for a checkbox, picklist, or radio button field in a preference form using the label and value.
-   **[addOption(fieldId, option)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm#apex_pref_center_LoadFormData_addOption_2)**
    Add a defined, selectable option for a checkbox, picklist, or radio button field in a preference form.
-   **[addSelectedOption(fieldId, option)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm#apex_pref_center_LoadFormData_addSelectedOption)**
    Add a selected option for a checkbox field in a preference form. This requires the field on the form to have a defined option with a set value.
-   **[setButtonLabel(fieldId, label)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm#apex_pref_center_LoadFormData_setButtonLabel)**
    Set the label of a button added to the preference form.
-   **[setOptions(fieldId, options)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm#apex_pref_center_LoadFormData_setOptions)**
    Add a list of selectable options for a field on a preference form.
-   **[setSelectedOption(fieldId, optionValue)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm#apex_pref_center_LoadFormData_setSelectedOption)**
    For a picklist or radio button field on a preference form that has defined values, set the value entered in the optionValue field as the selected option.
-   **[setSelectedOptions(fieldId, options)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm#apex_pref_center_LoadFormData_setSelectedOptions)**
    For an existing checkbox field on a preference form that has defined values, set the values entered in the options field as the selected options. This requires the field on the form to have defined options with a set value.
-   **[setTextHint(fieldId, hintText)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm#apex_pref_center_LoadFormData_setTextHint)**
    Set the hint text inside a text input field. The hint text tells the user what type of information to enter, like an email address.
-   **[setTextValue(fieldId, value)](atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm#apex_pref_center_LoadFormData_setTextValue)**
    Set the value of a text field in a preference form.

### addOption(fieldId, value, label)

Add an option for a checkbox, picklist, or radio button field in a preference form using the label and value.

#### Signature

public void addOption(String fieldId, String value, String label)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Represents the selection or text entered in a preference form field.

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The label for the value of a field in a preference form.

#### Return Value

Type: void

### addOption(fieldId, option)

Add a defined, selectable option for a checkbox, picklist, or radio button field in a preference form.

#### Signature

public void addOption(String fieldId, System.SelectOption option)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

option

Type: [System.SelectOption](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_pages_selectoption "A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.")

The option selected on a field in the preference form.

#### Return Value

Type: void

### addSelectedOption(fieldId, option)

Add a selected option for a checkbox field in a preference form. This requires the field on the form to have a defined option with a set value.

#### Signature

public void addSelectedOption(String fieldId, String option)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

option

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The selectable option being added.

#### Return Value

Type: void

### setButtonLabel(fieldId, label)

Set the label of a button added to the preference form.

#### Signature

public void setButtonLabel(String fieldId, String label)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The label for a button added to the preference form.

#### Return Value

Type: void

### setOptions(fieldId, options)

Add a list of selectable options for a field on a preference form.

#### Signature

public void setOptions(String fieldId, List<System.SelectOption> options)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

options

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[System.SelectOption](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_pages_selectoption "A SelectOption object specifies one of the possible values for a Visualforce selectCheckboxes, selectList, or selectRadio component.")\>

The selectable options for a field in the preference form.

#### Return Value

Type: void

### setSelectedOption(fieldId, optionValue)

For a picklist or radio button field on a preference form that has defined values, set the value entered in the optionValue field as the selected option.

#### Signature

public void setSelectedOption(String fieldId, String optionValue)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

optionValue

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The value for the selected option.

#### Return Value

Type: void

### setSelectedOptions(fieldId, options)

For an existing checkbox field on a preference form that has defined values, set the values entered in the options field as the selected options. This requires the field on the form to have defined options with a set value.

#### Signature

public void setSelectedOptions(String fieldId, List<String\> options)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies the checkbox field in the preference form.

options

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The selected options for a field in the preference form.

#### Return Value

Type: void

### setTextHint(fieldId, hintText)

Set the hint text inside a text input field. The hint text tells the user what type of information to enter, like an email address.

#### Signature

public void setTextHint(String fieldId, String hintText)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the text input field in the preference form.

hintText

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The hint text in the text input field.

#### Return Value

Type: void

### setTextValue(fieldId, value)

Set the value of a text field in a preference form.

#### Signature

public void setTextValue(String fieldId, String value)

#### Parameters

fieldId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Identifies a field in the preference form.

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Represents the value entered for the text field in a preference form.

#### Return Value

Type: void

## Code Examples

```apex
List<System.SelectOption> picklistOptions = new List<System.SelectOption>();
picklistOptions.add(new System.SelectOption('optIn', 'Opt In'));
picklistOptions.add(new System.SelectOption('optOut', 'Opt Out'));

// Set the available options for the picklist
loadFormData.setOptions('myPicklist', picklistOptions);
// Add an option to the existing options for the picklist
loadFormData.addOption('myPicklist', 'optOutAll', 'Opt Out All');
// Select the 'optIn' option in the picklist
loadFormData.setSelectedOption('myPicklist', 'optIn');


List<System.SelectOption> checkboxOptions = new List<System.SelectOption>();
checkboxOptions.add(new System.SelectOption('yes', 'Yes'));
checkboxOptions.add(new System.SelectOption('no', 'No'));


// Set available options for the checkbox group
loadFormData.setOptions('myCheckbox', checkboxOptions);
// Select the 'yes' option in the checkbox group
loadFormData.addSelectedOption('myCheckbox', 'yes');
// Also select the 'no' option in the checkbox group
loadFormData.addSelectedOption('myCheckbox', 'no');
// Another way to select both the 'yes' and 'no' options in the checkbox group
loadFormData.setSelectedOptions('myCheckbox', new List<String>{'yes', 'no'});


// Fill the value in the text input
loadFormData.setTextValue('myTextInput', 'admin@salesforce.com');
// Set the hint text for the text input
loadFormData.setTextHint('myTextInput', 'Email Address');


// Set the label for the button
loadFormData.setButtonLabel('myButton', 'Save Preferences');
```

## Related Topics

- Pref_center (atlas.en-us.apexref.meta/apexref/apex_namespace_pref_center.htm)
- LoadFormData Constructors (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm)
- LoadFormData Methods (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm)
- LoadFormData(data) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- addOption(fieldId, value, label) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm)
- addOption(fieldId, option) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm)
- addSelectedOption(fieldId, option) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm)
- setButtonLabel(fieldId, label) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm)
- setOptions(fieldId, options) (atlas.en-us.apexref.meta/apexref/apex_class_pref_center_LoadFormData.htm)
