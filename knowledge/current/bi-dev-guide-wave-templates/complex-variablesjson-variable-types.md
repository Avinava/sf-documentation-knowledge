---
title: "Complex variables.json Variable
      Types"
domain: bi-dev-guide-wave-templates
topic: complex-variablesjson-variable-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.459Z
estimatedTokens: 1434
keywords: [Complex, variables.json, Variable, unique, Salesforce, sobject, sobjectField, query, org, access, data, objects, Scroll, right, view]
---

# Complex variables.json Variable
      Types

> Complex variable types are unique to Salesforce, for example, sobject, sobjectField. Use them
  to query the org for access to data from Salesforce objects. Scroll to the right to view example
  values. Examples for each type appear below the chart.

# Complex variables.json Variable Types

Complex variable types are unique to Salesforce, for example, sobject, sobjectField. Use them to query the org for access to data from Salesforce objects. Scroll to the right to view example values. Examples for each type appear below the chart.

## SobjectType

References an sObject within your org.

```

```

## SobjectType Example

```

```

## SobjectFieldType

References a field within an sObject.

"variableType" : {  "type": "SobjectFieldType", "dataType":"xsd:double" }

The dataType limits values for sObjectField. For example, specify xsd:double to limit the list of fields to numeric sObject fields only. See [Primitive Data Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/primitive_data_types.htm) in the Salesforce Object Reference for more values for dataType.

## SobjectFieldType Example

```

```

## ConnectorType

References a connector within your org to use for recipes or dataflows. For more information, see [Add a Remote Connector to a CRM Analytics Template](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_add_connector.htm "Add remote connectors to the digest node of a template dataflow by referencing connectors in variables.json and editing ui.json and rules.json.").

"variableType" : {  "type": "ConnectorType" , "connectorType" : "SalesforceExternal" }

## ConnectorType Example

```

```

## DatasetType

References a dataset within your org.

"variableType" : {  "type": "DatasetType"  }

## DatasetType Example

```

```

## DatasetDimensionType

References a dimension within a dataset. Use to let app creators select dataset dimension fields to populate app dashboards. Requires that a DatasetType variable is set so datasetId is referenced at runtime.

"variableType" : {  "type": "DatasetDimensionType"  }

## DatasetDimensionType Example

```

```

## DatasetMeasureType

References a measure within a dataset. Use to let app creators select dataset measure fields to populate app dashboards. Requires that a DatasetType variable is set so datasetId is referenced at runtime.

"variableType" : {  "type": "DatasetMeasureType"  }

## DatasetMeasureType Example

```

```

## DatasetDateType

References a date within a dataset. Use to let app creators select dataset date fields to populate app dashboards. Requires that a DatasetType variable is set so datasetId is referenced at runtime.

"variableType" : {   "type": "DatasetDateType"  }

## DatasetDateType Example

```

```

## DatasetAnyField

References any type of field within a dataset. Use to let app creators select dataset dimensions, measures, and dates to populate app dashboards from a single list. Requires that a DatasetType variable is set so datasetId is referenced at runtime.

"variableType" : {  "type": "DatasetAnyField"  }

## DatasetAnyType Example

```

```

## DateTimeType

References a time and date. Can’t be used in non-VisualForce page in ui.json. Value must be an ISO 8601 formatted date time string, as per [RFC 3339, section 5](https://tools.ietf.org/html/rfc3339#section-5). For example, 2020-02-19T14:31:42-0700.

"variableType" : { "type": "DateTimeType" }

## DateTimeType Example

```

```

## ObjectType

References a user-defined object in your org. ObjectType isn’t supported in the UI and referencing it in ui.json results in app creation errors. Use ObjectType for runtime functionality, such as Overrides.

"variableType" : { "type": "ObjectType" }

## ObjectType Example

```

```

## DataLakeObjectType

References a data lake object within your org.

"variableType" : {  "type": "DataLakeObjectType"  }

## DataLakeObjectType Example

```

```

## DataLakeObjectFieldType

References a field within a data lake object.

"variableType" : {  "type": "DataLakeObjectFieldType", "dataType":"number" }

The dataType limits values for dataLakeObjectField. For example, specify number to limit the list of to numeric fields only. Valid values are number string, date, date\_time, or null for all values.

## DataLakeObjectFieldType Example

```

```

## DataModelObjectType

References a data model object within your org.

"variableType" : {  "type": "DataModelObjectType"  }

## DataModelObjectType Example

```

```

## DataModelObjectFieldType

References a field within a data model object.

"variableType" : {  "type": "DataModelObjectFieldType", "dataType":"string" }

The dataType limits values for dataModelObjectField. For example, specify string to limit the list to string fields only. Valid values are number string, date, date\_time, or null for all values.

## DataModelObjectFieldType Example

```

```

## CalculatedInsightType

References a calculated insight within your org.

"variableType" : {  "type": "CalculatedInsightType"  }

## CalculatedInsightType Example

```

```

## CalculatedInsightFieldType

References a field within a calculated insight.

"variableType" : {  "type": "CalculatedInsightFieldType", "dataType":"dimension"  }

The dataType limits values for calculatedInsightField. For example, specify dimension to limit the list of dimension fields only. Valid values are dimension measure, date, date\_time, or null for all values.

## CalculatedInsightFieldType Example

```

```

## Generated Overrides in variables.json

The variables.json file generated upon template creation contains an Overrides variable for app assets. Overrides are referenced in template-info.json as a conditional for whether assets are created at runtime or not. It’s best practice to edit Overrides. Overrides can be removed as long as all references to Overrides are also removed from template-info.json.

## Overrides Variable Example

```

```

## Code Examples

```
"variableType" : {   "type": "SobjectType"  }
```

```
"AccountObjVariable": {
  "label": "What object do you use to represent accounts?",
  "description": "The default is the Account object. If you use a different object, select it from the list below.",
  "variableType": {
    "type": "SobjectType"
  },
  "defaultValue": {
    "sobjectName": "Account"
  }
}
```

```
AccountObjFieldsVariable" : {
  "label" : "Which field in the Account object do you use to track annual revenue?",
  "description" : "The default is the AnnualRevenue. If you use a different field, select it from the list below.",
  "variableType" : {
    "type" : "SobjectFieldType",
    "dataType" : "xsd:string"
  },
  "defaultValue": {
    "fieldName" : "AnnualRevenue",
    "sobjectName" : "{{Variables.AccountObjVariable.sobjectName}}"
  }
}
```

```
"ConnectorVariable" : {
  "label" : "Select a connector",
  "description" : "A connector that exists in this org.",
  "variableType" : {
    "type" : "ConnectorType",
    "connectorType" : "SalesforceExternal"
  }
}
```

```
"DatasetVariable" : {
  "label" : "Select a dataset",
  "description" : "A dataset that exists in this org.",
  "variableType" : {
    "type" : "DatasetType"
  }
}
```

## Related Topics

- Add a Remote Connector to a CRM Analytics
          Template (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_add_connector.htm)
