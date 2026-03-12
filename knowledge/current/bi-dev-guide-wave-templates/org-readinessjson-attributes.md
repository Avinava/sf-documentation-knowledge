---
title: "org-readiness.json Attributes"
domain: bi-dev-guide-wave-templates
topic: org-readinessjson-attributes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.591Z
estimatedTokens: 1297
keywords: [org-readiness.json, Attributes, file, Org, Readiness, templateRequirements, definition]
---

# org-readiness.json Attributes

> The org-readiness.json file attributes are:

# org-readiness.json Attributes

The org-readiness.json file attributes are:

## Org Readiness Attributes

| Attribute | Required | Description |
| --- | --- | --- |
| values | No | The variable values to use for readiness checks. Values provided by the API call override these values. |
| templateRequirements | Yes | An array that defines the requirements for the template to validate successfully. |
| definition | Yes | The requirement definitions used by the template requirements. |

## values Attributes

Each entry must match a variable from the variables.json file, with a defined value to use for the readiness validation. values can contain 0 or more variables.

This example illustrates how to define values for different variable types.

```

```

## templateRequirements Attributes

An array of requirements to use for validating the template. A requirement uses a definition to evaluate at runtime. The optional type, image, tags, and message attributes define how the requirement results are displayed to end users.

| Attribute | Required | Description |
| --- | --- | --- |
| expression | Yes | The expression to evaluate for validation. |
| type | No | The readiness type of the requirement, which must match the definition type. In this context, it’s used by the UI for badging purposes. |
| image | No | An image that best represents the template requirement. The image can be a static resource or a standard CRM Analytics image. |
| successMessage | No | The message to display when the expression evaluates to true. EL expressions can be used to create dynamic messages. |
| failMessage | No | The message to display when the expression evaluates to false. EL expressions can be used to create dynamic messages. |
| tags | No | A collection of strings to use as categories to describe the template requirement. The tags are user-defined and are used to group multiple template requirements together into common themes. |

This example illustrates how to define requirements of different complexity.

```

```

## definition Attributes

Each entry defines a readiness check. There must be at least 1 definition that is used in the templateRequirements. The evaluated result of each definition is stored in the template context as Readiness\['<definition\_name>'\].

These examples illustrate definitions for different requirement types.

The OrgPreferenceCheck validates one or more org preferences.

```

```

```

```

The SobjectRowCount performs a SOQL query to retrieve a row count for the specified sObject and optional filters. Both the sobject and filter attributes can contain EL expressions that are resolved at runtime. This example validates that there are a specific number of accounts with an annual revenue greater than the minimum value specified at runtime. This check is performed before app creation and the results are available for templateReadiness.

```

```

```

```

The OrgDatasetRowCount performs a SQL query on an existing dataset to determine row count based on the dataset id or name and optional filters. This check can query datasets outside of the scope of the current or future app, which is useful for templates that have template dependencies on other apps. This check is performed before app creation and the results are available for templateReadiness.

```

```

```

```

The AppDatasetRowCount performs a SQL query on an existing dataset to determine row count based on the dataset id or name and optional filters. This check queries datasets that are created by the template. It validates if a dataset dependent asset, such as a dashboard or Einstein Discovery story can or should be created. This check is performed during app construction, after the datasets are created and recipes are run to populate the datasets. The results of this check can’t be referenced by templateRequirements, but they can be referenced by template asset conditions in template-info.json.

```

```

```

```

The ApexCallout performs a check using a custom Apex method in the template’s implementation of WaveTemplateConfigurationModifier. The method must be a non-static, global method with an arbitrary number of arguments. The method return value is also arbitrary or void and is place into the template context for reference in the templateRequirements or in rules processing.

```

```

```

```

Example Apex method for the readiness check

```

```

The DataCloudRowCount performs a SQL query on an existing Data 360 object, DLO, DMO, or Calculated Insight, to determine row count based on the object name or id and optional filters. This check can query Data 360 objects outside of the scope of the current or future app. This check is for templates that have dependencies on the existence and status of specific Data 360 objects. This check is performed before app creation and the results are available for templateReadiness.

```

```

```

```

#### See Also

-   [Edit org-readiness.json](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_org_readiness_json.htm "The org-readiness.json file configures the validations to run on a user org to ensure it can create an app successfully.")

## Code Examples

```
"values": {
  "booleanVar" : true,
  "stringVar" : "My string", 
  "numericVar" : 10, 
  "sobjectFieldVar" : {
    "sobjectName": "Opportunity",
    "fieldName": "StageName"
  }
}
```

```
”templateRequirements” : [
  {
    "expression" : "${Readiness.numberOfAccounts > Variables.numericValue}",
    "type" : "SobjectRowCount",
    "image" : {
      "namespace" : "my_namespace",
      "name" : "accounts_required.jpg"
    }, 
    "successMessage" : "Your org contains enough accounts to proceed.",
    "failMessage" : "You only have ${Readiness.numberOfAccounts} accounts. You must have ${Variables.numericValue} or more accounts to proceed."
    "tags" : ["Accounts", "Cases"]
  },
  {
    "expression" : "${Readiness.numberOfCases > 5}",
    "failMessage" : "You must have 5 or more cases to proceed."
  }
]
```

```
"Example Org Readiness Check": {
  "type" : "OrgPreferenceCheck",
  "names" : [ "DashboardSavedViewEnabled" ]
}
```

```
EL Expression: ${Readiness['Example Org Readiness Check'].DashboardSavedViewEnabled}
```

```
"Count of Accounts Revenue" : {
  "type" : "SobjectRowCount",
  "sobject" : "Account", 
  "filters" : [
    {
      "field" : "AnnualRevenue",
      "operator" : "GreaterThan", 
      "value" : "${Variables.MinimumAnnualRevenue}"
    }
  ]
}
```

## Related Topics

- Edit org-readiness.json (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_edit_org_readiness_json.htm)
