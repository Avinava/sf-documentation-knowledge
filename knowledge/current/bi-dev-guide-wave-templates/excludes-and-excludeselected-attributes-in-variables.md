---
title: "excludes and excludeSelected Attributes in Variables"
domain: bi-dev-guide-wave-templates
topic: excludes-and-excludeselected-attributes-in-variables
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.526Z
estimatedTokens: 375
keywords: [excludes, excludeSelected, Attributes, Variables, attribute, define, exclude, selections, wizard, questions, already, selected, previous]
---

# excludes and excludeSelected Attributes in Variables

> In variables, use the excludes attribute in
  variables to define values to exclude from selections in response to wizard questions. Use the
   excludeSelected attribute to exclude values that have
  already been selected in previous wizard questions.

# excludes and excludeSelected Attributes in Variables

In variables, use the excludes attribute in variables to define values to exclude from selections in response to wizard questions. Use the excludeSelected attribute to exclude values that have already been selected in previous wizard questions.

## "excludes" Attribute

Regex Token Definition: "/<regex pattern>/flags"

Flags are characters that Javascript RegEx global object takes, for example: g, i, m, u, and so on. Refer to the [RegEx Object API documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) for details.

Example excludes statements:

-   "excludes" : \["Name", "/^(Billing).+/"\]—Excludes Name field and all the fields that start with Billing.
-   "excludes" : \["/^(?!Billing)^(?!Shipping).+/"\]—Excludes all fields except fields that start with Billing or Shipping.
-   "excludes" : \["/.+(\_kav)$/"\]—Excludes all fields that end with \_kav.
-   "excludes" : \["/^(?:(?!\_kav).)\*$/"\]—Excludes all fields except fields that end with \_kav.
-   "excludes" : \["/(?!^Case$|^Account$)(^.\*$)/"\]—Excludes all objects except Case and Account.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

#### Note

Including a value in defaultValue that is excluded results in an error.

## excludeSelected Attribute

In this example, the option selected in SObjectField1 picker isn’t available in SObjectField2 picker.

```

```

## Code Examples

```
"SObjectField1" : {
  "label" : "Select a field from account",
  "description" : "First account field.",
  "defaultValue" : {
    "sobjectName" : "Account",
    "fieldName" : ""
  },
  "required" : true,
  "excludeSelected" : true,
  "variableType" : {
    "type" : "SobjectFieldType"
   }
},
"SObjectField2" : {
  "label" : "Select another field from account",
  "description" : "Second account field.",
  "defaultValue" : {
    "sobjectName" : "Account",
    "fieldName" : ""
  },
  "required" : true,
  "excludeSelected" : true,
  "variableType" : {
    "type" : "SObjectFieldtype"
  }
}
```
