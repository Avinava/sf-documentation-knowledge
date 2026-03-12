---
title: "Group Definition Input"
domain: omnistudio
topic: group-definition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.455Z
estimatedTokens: 263
keywords: [Group, Definition, Input, representation, party, relationship, group, definition.]
---

# Group Definition Input

> Input representation of a party relationship group
      definition.

# Group Definition Input

Input representation of a party relationship group definition.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| account​Detail | Map<String, Object> | Account details associated with the party relationship group. | Required | 58.0 |
| external​Member | Member Record Input[] | External member details of the party relationship group. | Optional | 58.0 |
| group​Detail | Map<String, Object> | Party relationship group details, such as group size, group income, address, and associated custom fields. | Required | 58.0 |
| member | Member Record Input[] | Member details of the party relationship group being created. | Required | 58.0 |
| related​Account | Account Relation Input[] | Data of the account that’s related to the party relationship group being created. | Optional | 58.0 |
| related​Group | Account Relation Input[] | Data of the group that’s related to the party relationship group being created. | Optional | 58.0 |

## Code Examples

```
{
    "accountDetail":{
       "name":"prg5",
       "ownerId":"005xx000001X7tNAAS",
       "billingAddress":{
          "street":"",
          "city":"Los Angeles",
          "state":"California",
          "country":"USA",
          "postalCode":"90042"
       },
       "shippingAddress":{
          "street":"",
          "city":"Los Angeles",
          "state":"California",
          "country":"USA",
          "postalCode":"90042"
       },
       "phone":"0123456789"
    },
    "groupDetail":{
       "name":"prg5",
       "category":"Staying under the same roof",
       "type":"Household",
       "groupSize":"2",
       "groupIncome":"20000",
       "primaryAddress":{
          "street":"",
          "city":"Los Angeles",
          "state":"California",
          "country":"USA",
          "postalCode":"90042"
       }
    },
    "member":{
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
    },
    "externalMember":{
       "records":[
          {
             "contactId":"003xx000004WhJ2AAK",
             "roles":"Decision Maker"
          }
       ]
    },
    "relatedGroup":{
       "relations":[
          {
             "type":"Direct",
             "roleRelationId":"0zlxx000000001dAAA",
             "relatedAccountId":"001xx000003GYodAAG"
          }
       ]
    },
    "relatedAccount":{
       "relations":[
          
       ]
    }
 }
```

## Related Topics

- Member Record
                                    Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_member_record_input.htm)
- Account Relation
                                    Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_account_relation_input.htm)
