---
title: "Field Sets Output"
domain: nonprofit-cloud
topic: field-sets-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.004Z
estimatedTokens: 118
keywords: [Output, representation, benefit, disbursement]
---

# Field Sets Output

> Output representation of field sets of a benefit disbursement object.

# Field Sets Output

Output representation of field sets of a benefit disbursement object.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fieldSets | Field Set Output[] | List of field sets of the benefit disbursement object. | Small, 59.0 | 59.0 |
| objectName | String | Name of the benefit disbursement object whose field sets you want to retrieve. | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "fieldSets": [
    {
      "description": "FS1",
      "fieldSetApiName": "FS1_API",
      "fieldSetName": "FS1"
    },
    {
      "description": "FS2",
      "fieldSetApiName": "FS2_API",
      "fieldSetName": "FS2"
    },
    {
      "description": "FS3",
      "fieldSetApiName": "FS3_API",
      "fieldSetName": "FS3"
    }
  ],
  "objectName": "BenefitDisbursement"
}
```

## Related Topics

- Field
                  Set Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_field_set_output.htm)
