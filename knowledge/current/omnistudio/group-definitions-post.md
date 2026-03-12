---
title: "Group Definitions (POST)"
domain: omnistudio
topic: group-definitions-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:48.192Z
estimatedTokens: 370
keywords: [Group, Definitions, POST, Define, party, relationship, individuals, trusts, deliver, support, services, manage, shared, processes, cases]
---

# Group Definitions (POST)

> Define a party relationship group of individuals or trusts to
      deliver support services or to manage shared processes, such as cases and
    benefits.

# Group Definitions (POST)

Define a party relationship group of individuals or trusts to deliver support services or to manage shared processes, such as cases and benefits.

Resource

```

```

Resource example

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

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

Response body for POST

[Group Definition](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_group_output.htm "Output representation of a party relationship group definition.")

## Code Examples

```
/connect/group/group-definitions
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/group/group-definitions
```

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
- Group Definition (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_group_output.htm)
