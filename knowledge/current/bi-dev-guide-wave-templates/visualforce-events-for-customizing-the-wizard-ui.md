---
title: "VisualForce Events for Customizing the Wizard UI"
domain: bi-dev-guide-wave-templates
topic: visualforce-events-for-customizing-the-wizard-ui
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.732Z
estimatedTokens: 1400
keywords: [VisualForce, Events, Customizing, Wizard, explains, user, Event, wizard.ready, wizard.update, wizard.visibility, wizard.values, wizard.next, wizard.resize, wizard.options, wizard.buttons]
---

# VisualForce Events for Customizing the Wizard UI

> This reference section explains the details of using VisualForce for customizing the
    Wizard user interface.

# VisualForce Events for Customizing the Wizard UI

This reference section explains the details of using VisualForce for customizing the Wizard user interface.

| Event Name | Subscribe/Publish | Description | Response |
| --- | --- | --- | --- |
| ready | publish | Fired from client indicating they are ready to receive events. | Response contains all the metadata: page, variableDefinitions, initialValues needed to render the questions and possible answers for the page. |
| update | publish | Fired from client when ready to update one or more variables. | Variables with errors messages. |
| visibility | publish | Fired from client to check ‘visibility’ of one or more questions. | Variables and their visibility enum. |
| values | publish | Fired from client to request the most up-to-date values of each question. | The values of all variables in the entire wizard. |
| next | subscribe | Fired from parent when user clicks “continue” button. May or may not advance the page. If there are errors in the variable values, the page will not advance. | A list of variables that are required with no values. |
| resize | publish | Fired from client to change the size of the VisualForce page. | None. |
| options | publish | Fired from client to get a list of ‘options’ for filling in drop-down list boxes. | List will be filtered for “queryable,” “excludes,” “exclude selected.” “Tags” will be applied to indicate which option values are “default,” “recommended,” or “previous” values.You can use this for sObjects, sObjectFields, string enums, and number enums. |
| computed | publish | Fired from client to set the computed (suggested) values for a variable. | Variables with success or error messages. |
| close | publish | Fired from client to close the wizard. No actions are taken as part of the close. | None. |
| buttons | publish | Change the text of the Back and Next button. Can also enable or disable the Back or Next button. |  |
| create | publish | Fired from the client to create an app before the final screen. Calls POST /wave/folder and returns results. | The status of the POST call. Success if app creation is kicked off successfully (not final app status), otherwise Fail. |
| dataset | COMING SOON | Dataset | Coming soon; not currently supported in this release. We intend to implement this as an ‘options’ event. |
| dataset fields | COMING SOON | Dimensions, Measures tied to parent datasets | Coming soon; not currently supported in this release. We intend to implement this as an ‘options’ event. |

## Event: wizard.ready

-   **Subscribe/Publish:** publish
-   **Input/Multiple:** optional
    -   **Size:** small, medium, large
    -   **Banner:** visible, title, progress

        **Note:** for VisualForce pages, the banner is hidden by default.

-   **Response:** Yes
-   **Normalized Input:** N/A
-   **Input Examples:**
    -   {}
    -   {size : “large” }
    -   {banner : visible : true, title : “My Custom title”, progress : “Almost done”}}
    -   {size : “small”, banner : {visible : false}}
-   **Output Example:**

    ```

    ```


## Event: wizard.update

-   **Subscribe/Publish:** publish
-   **Input/Multiple:** yes
-   **Response:** yes
-   **Normalized Input:** yes
-   **Input Examples:**
    -   {name : “myVariable”, value : “some value” }
    -   \[{name : “myVariable”, value : “some value” }\]
    -   \[{name : “myVariable”, value : “some value” }, {name : “myNumber”, value : 123}\]
    -   {myVariable : “some value”, myNumber: 123, myBoolean : true}
    -   {name : “mySObject”, value : {sobjectName : “Account”}}
-   **Output Example:** always an array

    ```

    ```


## Event: wizard.visibility

-   **Subscribe/Publish:** publish
-   **Input/Multiple:** yes
-   **Response:** yes
-   **Normalized Input:** yes
-   **Input Examples:**
    -   \[“myVariable”, “myNumber”\]
    -   \[{name : “myVariable”}\]
    -   {name : “myVariable”}
    -   “myVariable”
-   **Output Example:** always an array

    ```

    ```


## Event: wizard.values

-   **Subscribe/Publish:** publish
-   **Input/Multiple:** n/a
-   **Response:** yes
-   **Normalized Input:** n/a
-   **Input Examples:**
    -   {}
-   **Output Example:**

    ```

    ```


## Event: wizard.next

-   **Subscribe/Publish:** subscribe
-   **Input/Multiple:** n/a
-   **Response:** yes
-   **Normalized Input:** n/a
-   **Output Example:** Page will not advance if required fields are not met.
    -   ```

        ```

    -   ```

        ```


## Event: wizard.resize

-   **Subscribe/Publish:** publish
-   **Input/Multiple:** n/a
-   **Response:** no
-   **Normalized Input:** n/a
-   **Input Examples:**
    -   {size : “small”}
    -   {size : “medium”}
    -   {size : “large”}

## Event: wizard.options

-   **Subscribe/Publish:** publish
-   **Input/Multiple:** no
-   **Response:** yes
-   **Normalized Input:** n/a
-   **Input Examples:**
    -   {name : “mySObjectVariableName”}
    -   {name : “mySObjectFieldVariableName”}
    -   {name : “myStringVariableName”}
    -   {name : “myNumbertVariableName”}
-   **Output Example:**

    ```

    ```


## Event: wizard.buttons

-   **Subscribe/Publish:** publish
-   **Input/Multiple:** n/a
-   **Response:** no
-   **Normalized Input:** n/a
-   **Input Examples:**
    -   ```

        ```

    -   ```

        ```

    -   ```

        ```

-   **Output Example:**

    None. Buttons should update accordingly.


## Event: wizard.create

-   **Subscribe/Publish:** publish
-   **Input/Multiple:** no
-   **Response:** yes
-   **Normalized Input:** yes
-   **Input Examples:**
    -   ```

        ```

## Code Examples

```
{
  "page": {
    "condition": null,
    "helpUrl": null,
    "title": "Page 1",
    "variables": [
      {
        "name": "stringExample",
        "visibility": "Visible"
      },
      {
        "name": "visibilityControl"
        "visibility": "Visible"
      },
      {
        "name": "visibilityTest",
        "visibility": "Hidden"
      }
    ]
  },
  "variableDefinitions": {
    "stringExample": {
      "label": "What is the value of the string?",
      "description": "The String.",
      "defaultValue": null,
      "variableType": {
        "type": "StringType",
        "enums": [
          "foo",
          "bar",
          "baz",
          "testStr"
        ]
      }
    },
    "stringExample2": {
      "label": "What is the value of this string?",
      "description": "The String2.",
      "defaultValue": null,
      "variableType": {
        "type": "StringType"
      }
    },
    "visibilityControl": {
      "label": "Do you want to answer more questions?",
      "description": "Check to test visibility",
      "variableType": {
        "type": "BooleanType"
      },
      "defaultValue": false,
      "required": true
    },
    "visibilityTest": {
      "label": "I should only be visible when visibilityControl is checked",
      "variableType": {
        "type": "StringType",
        "enums": [
          "aaa",
          "bbb",
          "ccc"
        ]
      }
    },
    "visibilityTest2": {
      "label": "I should only be enabled when visibilityControl is checked",
      "variableType": {
        "type": "StringType"
      }
    },
    "datasetExample": {
      "label": "Pick a dataset",
      "description": "Interesting dataset",
      "variableType": {
        "type": "DatasetType"
      }
    },
    "dimensionExample": {
      "label": "Pick a dimension",
      "description": "Dim testing",
      "defaultValue": {
        "datasetId": "{{Variables.datasetExample.datasetId}}",
        "fieldName": "test"
      },
      "variableType": {
        "type": "DatasetDimensionType"
      },
      "required": false
    }
  },
  "initialValues": {
    "stringExample": null,
    "stringExample2": null,
    "visibilityControl": false,
    "dimensionExample": {
      "datasetId": "{{Variables.datasetExample.datasetId}}",
      "fieldName": "test"
    }
  }
}
```

```
[
    {name : “myVariable”: value : “some value”, valid : true },
    {name : “myNumber”: value : null, valid : false, errorMessage : “Not a valid value”}
    {name : “mySObject”: value : {sobjectName : “Account”}, valid : true}
]
```

```
[     
  {name : “myVariable”: visibility : “Hidden”},     
  {name : “myNumber”: visibility : “Visible”},     
  {name : “myOtherVariable”: visibility : “Disabled”} 
]
```

```
{  
    values : {
        myVariable: “foo”,
        myNumber: 123,
        myBoolean: true,
        myDimension: {fieldName : “days”}
   }
}
```

```
{
        “myVariable”: { 
              errorMessage: “Not a valid value”,
              isRequired : true,
              variableName : “myVariable”
        }
}
```
