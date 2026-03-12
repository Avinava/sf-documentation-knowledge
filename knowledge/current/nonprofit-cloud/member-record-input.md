---
title: "Member Record Input"
domain: nonprofit-cloud
topic: member-record-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.738Z
estimatedTokens: 308
keywords: [Member, Record, Input, representation, records, party, relationship, group]
---

# Member Record Input

> Input representation of the member records of a party relationship
      group.

# Member Record Input

Input representation of the member records of a party relationship group.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| acrId | String | ID of the Account Contact relationship. | The acrId property is required if an account ID is specified when defining a party relationship group. | 58.0 |
| contactId | String | ID of the Contact. | Required | 58.0 |
| customFields | Map<String, Object> | Custom fields associated with a party relationship group member. | Optional | 58.0 |
| dataRollupCategory | String | Category of the data roll-up summary field. | Optional | 58.0 |
| direct | Boolean | Indicates whether the member relationship is a direct relationship (true) or not (false). | Optional | 58.0 |
| endDate | Date | Date when the member relationship ends. | Optional | 58.0 |
| relations | Relationships Input | Details of the member record relationship. | Optional | 58.0 |
| roles | String | Role of the member in the party relationship group. For example, a decision maker role or a caregiver role. | Required | 58.0 |
| startDate | Date | Date when the member relationship starts. | Optional | 58.0 |

## Code Examples

```
{
       "records":[
          {
             "contactId":"003xx000004WhHQAA0",
             "roles":"Decision Maker",
             "relations":[
                {
                   "roleRelationId":"0zlxx0000000001AAA",
                   "relatedContactId":"003xx000004WhJ2AAK",
                   "startDate":"2023-06-14T00:00:00.000Z"
                }
             ]
          }
       ]
    }
```

## Related Topics

- Relationships Input (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_relationships_input.htm)
