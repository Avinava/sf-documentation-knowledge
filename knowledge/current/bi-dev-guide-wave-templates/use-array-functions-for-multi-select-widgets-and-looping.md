---
title: "Use Array Functions for Multi-Select Widgets and Looping"
domain: bi-dev-guide-wave-templates
topic: use-array-functions-for-multi-select-widgets-and-looping
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.432Z
estimatedTokens: 1169
keywords: [Array, Functions, Multi-Select, Widgets, Looping, Here’s, how, function, configuration, wizard, widget, lets, user, select, multiple]
---

# Use Array Functions for Multi-Select Widgets and Looping

> Here’s how to use an array function to create a configuration wizard widget that lets
    the user select multiple values.

# Use Array Functions for Multi-Select Widgets and Looping

Here’s how to use an array function to create a configuration wizard widget that lets the user select multiple values.

The following code

```

```

Results in the following wizard widget:

![This diagram depicts the resulting wizard question.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_multiselect_sobjectfield.png&folder=bi_dev_guide_wave_templates)

The ArrayType variable contains an itemsType attribute, which accepts the following:

-   SObjectType
-   SObjectFieldType
-   DatasetType
-   DatasetDateType
-   DatasetDimensionType
-   DatasetMeasureType
-   StringType, or
-   NumberType

The widget places values in an array. The following show how the widget displays values for the user to select:

![These two images depict how selections in the widget are placed into an array.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_widget_array1.png&folder=bi_dev_guide_wave_templates)

![These two images depict how selections in the widget are placed into an array.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_widget_array2.png&folder=bi_dev_guide_wave_templates)

Items in the array can be referenced by index. Arrays of StringType and NumberType are easy to work with, but arrays of SObjectType and SObjectFieldType contain multiple attributes for each item in the array:

Array of SobjectFieldType:

-   ${Variables.Account\_Fields\[0\]} returns (sobjectName\=Account, fieldName\=Name, sobjectLabel\=Account, fieldLabel\=Account Name)
-   ${Variables.Account\_Fields\[0\].fieldName} returns Name
-   ${Variables.Account\_Fields\[0\].fieldLabel} returns Account Name
-   fieldName is required for dataflow

The selection values from the widget are stored in the variable and there are two ways to access them in the template files (rules, dashboards, workflow):

-   Use array values from SobjectFieldType without looping, accessing by index

    ```

    ```

    This example, without looping, would be tricky to use, because there would always need to be at least five items in the array. Any fewer would fail, and anything over five would not be used.

-   Use array values from SobjectFieldType with looping via the array:forEach function. In this example, a “set” action is going to loop through the SObjectFieldTypes in the array and add them to the “fields” attribute in the Extract\_Account step of the workflow. Each entry in “fields” will need “name” and “var.fieldName”.
-   -   rules.json

        ```

        ```

    -   dataflow.json

        ```

        ```

    -   Results after processing if Account Name, Account Source, and Industry are selected

        ```

        ```


Here are more ways to work with arrays that extend the power of the array:forEach function:

-   array:union (only uses unique values, so no duplicated values)

    ```

    ```

-   array:concat (2 new arrays)

    ```

    ```

-   array:concat (1 new array with existing array)

    ```

    ```

-   You can use array functions in the “set” and “put” actions, but not in the “add” or “delete”.
    -   In “add”, the value is being added to an existing array, so the result is an array inside an array, which is not well-formed json. To add more array values to an existing array, use “set” with the array:concat function
    -   For “delete”, value is not used
-   Use array values from StringType (same for NumberType)
    -   variables.json

        ```

        ```

    -   rules.json

        ```

        ```

-   You can also use the multiselect widget to replace the current use of multiple StringType widgets with “Yes” and “No” selections. The following is an example using three StringType widgets on one wizard page:![This image depicts an example of three stringtypes in one wizard page.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_3stringtypes_1wiz.png&folder=bi_dev_guide_wave_templates)

    You can replace this with a single ArrayType widget:

    ![This image depicts an example of replacing three stringtypes with a single arrayType widget.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_arraytype_widget.png&folder=bi_dev_guide_wave_templates)

    The JSON for this variable is:

    ```

    ```

    You can use the selected values to set constants in rules.json, which you can then reference in conditionals for actions or in template-info.json.

    ```

    ```

## Code Examples

```
"Account_Fields": {
        "label": "Pick the fields for your dataset",
        "description": "Multiselect sobjectfield test",
        "defaultValue": [
          {
            "sobjectName": "Account",
            "fieldName": "Name"
          }
        ],
        "required": false,
        "variableType": {
            "type": "ArrayType",
            "itemsType": {
                "type": "SobjectFieldType"
            }
        },
        "excludeSelected": true
    }
```

```
"fields":[
        {"name":"${Variables.Account_Fields[0].fieldName}"},
        {"name":"${Variables.Account_Fields[1].fieldName}"},
        {"name":"${Variables.Account_Fields[2].fieldName}"},
        {"name":"${Variables.Account_Fields[3].fieldName}"},
        {"name":"${Variables.Account_Fields[4].fieldName}"}
    ]
```

```
"name": "AddAccountFilesToDataflow",
  "appliesTo": [
    {
      "type": "workflow",
      "name": "*"
    }
  ],
  "actions": [
    {
      "action": "set",
      "description": "use selected values for sfdcDigest in dataflow",
      "path": "$.workflowDefinition.Extract_Account.parameters.fields",
      "value": "${array:forEach(Variables.Account_Fields, '{"name": "${var.fieldName}"}')}"
    }
  ]
```

```
"Extract_Account":{
   "action":"sfdcDigest",
   "parameters":{
       "fields":[],
       "object":"Account"
   }
}
```

```
"Extract_Account":{
    "action":"sfdcDigest",
    "parameters":{
        "fields":[
            {"name":"Name"},
            {"name":"AccountSource"},
            {"name":"Industry"}
        ]
    }
]
```
