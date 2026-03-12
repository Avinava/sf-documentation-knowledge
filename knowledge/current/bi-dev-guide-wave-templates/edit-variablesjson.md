---
title: "Edit variables.json"
domain: bi-dev-guide-wave-templates
topic: edit-variablesjson
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.522Z
estimatedTokens: 1141
keywords: [Edit, variables.json, file, variables, template-info.json, ui.json, different, rules.json, files, Examples]
---

# Edit variables.json

> The variables.json file describes all the variables
  used in the template-info.json, ui.json, and the different rules.json
  files.

# Edit variables.json

The variables.json file describes all the variables used in the template-info.json, ui.json, and the different rules.json files.

variables.json includes text for wizard questions, descriptions, and specifications for the answers. Variables also define conditional questions. For example, if you want some questions to appear in the wizard only if an org contains certain data. Or you want to add more specific questions based on the answers to more general wizard questions.

Variables enable the customization of apps; without them, everything is hard-coded. Variables allow the framework to replace tokenized data with customer-specific data.

## Variables Syntax

Variables are declared in the following format:

```

```

Each variable has a unique name. Here are the parts of a variable definition:

-   label—(Required) Text for label in the wizard, formatted as a question the user selection answers.
-   description—(Optional) Text for description in the wizard, formatted to help the user select the correct response.
-   defaultValue—(Optional) Default value for the answer to wizard question.
-   required—(Optional) Indicates whether an answer to wizard question is required (true) or not (false). The default is false.
-   variableType—(Optional) The type of the variable. The list of valid variable types is [here](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_variables_json_attributes.htm#variableTypeValues). Defaults to StringType if not specified.
-   excludes—(Optional) Defines values to exclude from selections in response to wizard question. The values are a list of comma-separated field names or regex tokens to not show in a picker.
-   excludeSelected—(Optional) Excludes previously selected values from selections in response to subsequent wizard questions. The default is false. If there are two or more pickers with same source and variable type and this field is true for both, the selected option is excluded from the list of options in the other picker.

## Examples

-   Generic variable

    ```

    ```

-   NumberType variable with enumerated values

    ```

    ```

-   BooleanType variable

    ```

    ```

-   array SobjectFieldType variable

    ```

    ```

    To use this variable call it with the following.

    ```

    ```


See additional detail and examples in the sections that follow.

-   **[Simple Variable Types for variables.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_simple_var_types_variables_json.htm)**
    We call the following variable types “simple” because they’re standard, predefined datatypes.
-   **[Complex variables.json Variable Types](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_complex_var_types_variables_json.htm)**
    Complex variable types are unique to Salesforce, for example, sobject, sobjectField. Use them to query the org for access to data from Salesforce objects. Scroll to the right to view example values. Examples for each type appear below the chart.
-   **[Array Variable Type for variables.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_array_type_variables_json.htm)**
    Use an ArrayType variable to create a wizard question that accepts multiple selections. The user can make multiple choices from a list of values. Define a minimum and maximum for the number of items that can be selected.
-   **[excludes and excludeSelected Attributes in Variables](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_excludes_attributes.htm)**
    In variables, use the excludes attribute in variables to define values to exclude from selections in response to wizard questions. Use the excludeSelected attribute to exclude values that have already been selected in previous wizard questions.
-   **[Use Case and Syntax for Variables with Related Values](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_var_value_ref_use_case_variables_json.htm)**
    Construct variables that reference related values, for example an object and fields from the object, and a dataset and dates, dimensions, and measures from the dataset.

#### See Also

-   [variables.json Attributes](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_variables_json_attributes.htm "Named nodes, each representing a single variable. Each node contains the following attributes:")

## Code Examples

```
{
    "<variableName>" : <variableDefinition>
}
```

```
"<Name of a variable>" : {  
    "label" : "<Question to display>",
    "description" : "<Text to help user select/provide the right value>",  
    "variableType" : { "type" : "SobjectType" },
    "defaultValue" : { "sobjectName": "User" },  
    "required" : true,
    "excludes" : [ "AboutMe", "Division"],
    "excludeSelected" : true 		
}
```

```
"numberExampleByTens" : {
   "label" : "What's the maximum number to use for the offset?",
   "description" : "Choose a value between 10 and 100",
   "defaultValue" : 80,
   "required" : true,
   "variableType" : {
       "type" : "NumberType",
       "min" : 0,
       "max" : 100,
       "enums" : [10,20,30,40,50,60,70,80,90,100]
   }
}
```

```
"booleanExample" : {
    "label" : "Please define the boolean parameter?",
    "description" : "Some boolean value.",
    "defaultValue": false,
    "required" : true,
    "variableType" : {
        "type" : "BooleanType",
    }
}
```

```
"sobjectFieldArrayExample" : {
    "label" : "Select the user name fields?",
    "description" : "The user fields to use.",
    "defaultValue" : [
       {"sobjectName" : "User", "fieldName" : "FirstName"},
       {"sobjectName" : "User", "fieldName" : "LastName"},
    ],
    "required" : true,
    "variableType" : {
       "type":"array"
    }
    "itemsType" : {
        "type" : "SobjectFieldType",
        "dataType" : "xsd:string"
     }
    }
}
```

## Related Topics

- here (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_variables_json_attributes.htm)
- Simple Variable Types for variables.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_simple_var_types_variables_json.htm)
- Complex variables.json Variable Types (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_complex_var_types_variables_json.htm)
- Array Variable Type for variables.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_array_type_variables_json.htm)
- excludes and excludeSelected Attributes in Variables (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_excludes_attributes.htm)
- Use Case and Syntax for Variables with Related Values (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_var_value_ref_use_case_variables_json.htm)
- variables.json Attributes (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_variables_json_attributes.htm)
