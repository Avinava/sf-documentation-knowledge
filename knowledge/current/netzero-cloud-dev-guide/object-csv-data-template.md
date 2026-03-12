---
title: "Object CSV Data Template"
domain: netzero-cloud-dev-guide
topic: object-csv-data-template
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.351Z
estimatedTokens: 118
keywords: [CSV, Data, Template, Output, representation]
---

# Object CSV Data Template

> Output representation of the CSV data template for an
    object.

# Object CSV Data Template

Output representation of the CSV data template for an object.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | Integer | The request response code. | Small, 58.0 | 58.0 |
| message | String | The request response message. | Small, 58.0 | 58.0 |
| template | CSV Data Template[] | The details of the CSV data template. | Small, 58.0 | 58.0 |

## Code Examples

```
{
template: {
‘objectName’: ”“, 
‘editableFields’: [
{
   “apiName” : “”,
   “fieldName” : “”,
   “fieldType” : “”,
   “required” : “”
}
],
‘readOnlyFields’: [
{
   “apiName” : “”,
   “fieldName” : “”,
   “fieldType” : “”
   “required” : “”
}
]
    },
code (Integer): 0
message (String) : “”
}
```

## Related Topics

- CSV Data
                  Template (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_csv_data_template.htm)
