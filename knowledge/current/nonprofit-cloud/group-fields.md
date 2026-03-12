---
title: "Group Fields"
domain: nonprofit-cloud
topic: group-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.058Z
estimatedTokens: 162
keywords: [Group, Output, representation, party, relationship, groups, merged]
---

# Group Fields

> Output representation of the fields of the party relationship groups
         to be merged.

# Group Fields

Output representation of the fields of the party relationship groups to be merged.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accId1 | Map<String, Object> | ID of the primary party relationship group. | Small, 58.0 | 58.0 |
| accId2 | Map<String, Object> | ID of the secondary party relationship group. | Small, 58.0 | 58.0 |
| accountFields | Object[] | List of fields associated with the account. | Small, 58.0 | 58.0 |
| prgFields | Object[] | List of fields associated with the party relationship group. | Small, 58.0 | 58.0 |

## Code Examples

```
{
   "accountFields":[
      "field1",
      "field2",
      "field3",
      "customFields":[
         "customField1",
         "customField2"
      ]
   ],
   "prgFields":[
      "field1",
      "field2",
      "field3",
      "customFields":[
         "customField1",
         "customField2"
      ]
   ],
   "accId1":{
      "Account":{
         "name":"Account A",
         "shippingAddress":"",
         "customFields":{
            "customField1":"sample_customfield1",
            "customField2":"sample_customfield2"
         }
      },
      "PRG":{
         "name":"Smith Household",
         "category":"Staying under the same roof",
         "customFields":{
            "customField1":"sample_customfield3",
            "customField2":"sample_customfield4"
         }
      }
   },
   "accId2":{
      "Account":{
         "name":"Account B",
         "shippingAddress":"",
         "customFields":{
            "customField1":"sample_customfield5",
            "customField2":"sample_customfield6"
         }
      },
      "PRG":{
         "name":"Marshall Household",
         "category":"Staying under the same roof",
         "customFields":{
            "customField1":"sample_customfield7",
            "customField2":"sample_customfield8"
         }
      }
   }
}
```
