---
title: "Field Set Fields"
domain: insurance-developer-guide
topic: field-set-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.473Z
estimatedTokens: 156
keywords: [Output, representation, collection, associated, specific]
---

# Field Set Fields

> Output representation of the collection of fields that are associated with a specific
  field set.

# Field Set Fields

Output representation of the collection of fields that are associated with a specific field set.

JSON example

This is a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fields | Field Set Field Details[] | List of fields within the specified field set ID. | Small, 65.0 | 65.0 |
| fieldSetId | String | ID of the field set whose associated fields are retrieved. | Small, 65.0 | 65.0 |
| objectName | String | API name of the object whose associated fields are retrieved. | Small, 65.0 | 65.0 |

## Code Examples

```
{
    "fields": [
        {
            "apiName": "Field1",
            "label": "Field 1"
        }
    ],
    "fieldSetId": "0182819gvahBghvdh",
    "objectName": "ClaimCoveragePaymentDetail"
}
```

## Related Topics

- Field Set Field
         Details[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_field_set_field.htm)
