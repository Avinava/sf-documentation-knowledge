---
title: "Account Relation Input"
domain: psc-api
topic: account-relation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.796Z
estimatedTokens: 421
keywords: [Account, Relation, Input, representation, relationship]
---

# Account Relation Input

> Input representation of an account relationship.

# Account Relation Input

Input representation of an account relationship.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| aarId | String | Record ID of the AccountRelationship object. | Optional | 58.0 |
| accountId | String | Primary account involved in the relationship. If the account relationship type is direct, then Account ID is required. | Optional | 58.0 |
| custom​Fields | Map<String, Object> | Custom fields associated with the AccountRelationship object. | Optional | 58.0 |
| endDate | String | Date when the account relationship ends. | Optional | 58.0 |
| hierarchy​Type | String | Hierarchy among the accounts that are related. For example, an account is related to another account as a parent, a peer, or a child. | Optional | 58.0 |
| isActive | Boolean | Indicates whether the account is actively involved with the related account (true) or not (false). | Optional | 58.0 |
| related​AccountId | String | Record ID of the related account. If the account relationship type is direct, then the related account ID is required. | Optional | 58.0 |
| related​Inverse​RecordId | String | Record ID of the related inverse relationship record. | Optional | 58.0 |
| role​Relation​Id | String | Record ID of the party role relationship. | Required | 58.0 |
| startDate | String | Date when the account relationship starts. | Optional | 58.0 |
| type | String | Type of account relationship, such as a direct or indirect relationship. The default value is false. If the related​Inverse​RecordId property is specified, then the relationship type is indirect. | Optional | 58.0 |

## Code Examples

```
{
      "relations":[
         {
            "type":"Direct",
            "roleRelationId":"0zlxx000000001dAAA",
            "relatedAccountId":"001xx000003GYodAAG",
            "startDate":"2023-06-15T00:00:00.000Z",
            "endDate":"2023-12-15T00:00:00.000Z",
            "relatedInverseRecordId":"",
            "isActive":true,
            "customFields":{
               "field1":"field1Value",
               "field2":"field1Value"
            }
         },
         {
            "type":"Indirect",
            "roleRelationId":"0zlxx000000001dGAC",
            "accountId":"001xx000003GYodACD",
            "startDate":"2023-02-15T00:00:00.000Z",
            "endDate":"2023-09-15T00:00:00.000Z",
            "isActive":true,
            "customFields":{
               "field1":"field1Value",
               "field2":"field1Value"
            }
         }
      ]
   }
```
