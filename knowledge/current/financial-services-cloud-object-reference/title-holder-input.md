---
title: "Title Holder Input"
domain: financial-services-cloud-object-reference
topic: title-holder-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.416Z
estimatedTokens: 240
keywords: [Title, Holder, Input, borrowers, applying, hold, loan, application, finances]
---

# Title Holder Input

> Represents details of borrowers who are applying to hold title to
      the property the loan application finances.

# Title Holder Input

Represents details of borrowers who are applying to hold title to the property the loan application finances.

Root XML tag

<titleHolders>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| extendedFields | Extended Fields Input[] | Custom fields related to the title holder. | Optional | 48.0 |
| externalId | String | Identifier assigned to imported title holder data by external data source (if applicable). | Optional | 48.0 |
| id | String | ID of the title holder. | Optional | 48.0 |
| isCurrentTitleHolder | Boolean | Indicates whether person is a current title holder on property to be refinanced. | Optional | 48.0 |
| name | String | Name of the loan application title holder. | Optional | 48.0 |
| titleHolderName | String | Name of the person on the title for the property associated with the loan application. | Optional | 48.0 |

## Code Examples

```
{
  "titleHolders": [
    {
      "extendedFields": [],
      "externalId": "e8d51e2a-7d97-4da0-8356-ca86995d3d39",
      "isCurrentTitleHolder": true,
      "name": "T1",
      "titleHolderName": "Times"
    }
  ]
}
```

## Related Topics

- Extended Fields Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_extended_fields_input.htm)
