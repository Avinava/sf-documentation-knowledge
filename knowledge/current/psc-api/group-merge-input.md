---
title: "Group Merge Input"
domain: psc-api
topic: group-merge-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.143Z
estimatedTokens: 319
keywords: [Group, Merge, Input, representation, party, relationship]
---

# Group Merge Input

> Input representation of a merge party relationship group
      request.

# Group Merge Input

Input representation of a merge party relationship group request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| account​Detail | Account Input | Details of the merged account. | Required | 58.0 |
| external​Member | Member Record Input | Details of the external members of a party relationship group. | Optional | 58.0 |
| group​Detail | Group Input | Details of the party relationship group, such as category, address, group size, group income, and custom fields. | Required | 58.0 |
| member | Member Record Input | Details of the party relationship group members. | Required | 58.0 |
| primary​Account​Id | String | ID of the primary account. | Required | 58.0 |
| related​Account | Account Relation Input | Details of the related account. | Optional | 58.0 |
| related​Group | Account Relation Input | Details of the party relationship group. | Optional | 58.0 |
| secondary​Account​Id | String | ID of the secondary account. | Required | 58.0 |
| tasks | String[] | List of the records to create tasks for. For example, a task to assign benefits from the source party relationship group to the destination party relationship group. | Optional | 58.0 |

## Code Examples

```
{
   "primaryAccountId":"001RM000005aGUcYAM",
   "secondaryAccountId":"001RM000005YYfiYAG",
   "accountDetail":{
      "customFields":{
         "Account_CF1__c":"123",
         "Account_CF2__c":"342"
      },
      "name":"Jones-Marshal HH",
      "fax":"213762",
      "billingAddress":{
         "street":"",
         "city":"",
         "state":"",
         "country":"",
         "postalCode":""
      },
      "shippingAddress":{
         "street":"",
         "city":"",
         "state":"",
         "country":"",
         "postalCode":""
      },
      "annualRevenue":"1500",
      "numberOfEmployees":"35",
      "type":"Agriculture"
   },
   "groupDetail":{
      "customFields":{
         "CF2__c":"123"
      },
      "name":"Jones-Marshal HH",
      "category":"Staying under the same roof",
      "status":"Active",
      "description":"Merged household from Jones and Marshal HH",
      "type":"Household",
      "groupSize":"52",
      "groupIncome":"4132",
      "primaryAddress":{
         "street":"",
         "city":"",
         "state":"",
         "country":"",
         "postalCode":""
      },
      "partyRelationGroupId":"0wKRM000000001n2AA"
   },
   "member":{
      "records":[
         {
            "acrId":"07kRM000000Op0fYAC",
            "contactId":"003RM00000895N9YAI",
            "isPrimaryMember":false,
            "isActive":true,
            "isPrimaryGroup":false,
            "roles":"Economic Decision Maker;Decision Maker",
            "direct":false,
            "customFields":{
               "CF1__c":"2023-02-20",
               "CF2__c":"CF2: Geoff"
            },
            "relations":[
               
            ]
         },
         {
            "acrId":"07kRM000000KXvrYAG",
            "contactId":"003RM00000895NDYAY",
            "isPrimaryMember":true,
            "isActive":true,
            "isPrimaryGroup":false,
            "roles":"Decision Maker",
            "direct":false,
            "customFields":{
               "CF1__c":"2023-02-19",
               "CF2__c":"CF2: Howard"
            },
            "relations":[
               
            ]
         },
         {
            "acrId":"07kRM000000KYHkYAO",
            "contactId":"003RM000008D6q0YAC",
            "isPrimaryMember":false,
            "isActive":true,
            "isPrimaryGroup":false,
            "roles":"Other;Influencer",
            "direct":false,
            "customFields":{
               "CF1__c":"2023-03-08"
            },
            "relations":[
               {
                  "ccrId":"0zmRM000000002EYAQ",
                  "roleRelationId":"0zlRM0000000014YAA",
                  "relatedContactId":"003RM00000895N9YAI",
                  "isActive":false
               },
               {
                  "ccrId":"0zmRM000000002NYAQ",
                  "roleRelationId":"0zlRM0000004CAaYAM",
                  "relatedContactId":"003RM00000895NFYAY",
                  "isActive":true
               }
            ]
         }
      ]
   },
   "externalMember":{
      "records":[
         {
            "acrId":"07kRM000000KYHpYAO",
            "contactId":"003RM00000895NFYAY",
            "isPrimaryMember":false,
            "isActive":true,
            "isPrimaryGroup":false,
            "roles":"Technical Buyer",
            "direct":false,
            "relations":[
               
            ]
         },
         {
            "acrId":"07kRM000000OpPdYAK",
            "contactId":"003RM0000089pihYAA",
            "isPrimaryMember":false,
            "isActive":true,
            "isPrimaryGroup":false,
            "roles":"Influencer",
            "direct":false,
            "relations":[
               
            ]
         }
      ]
   },
   "relatedGroup":{
      "relations":[
         {
            "aarId":"0zoRM0000004CBKYA2",
            "roleRelationId":"0zlRM000000001JYAQ",
            "accountId":"001RM000005aVTBYA2",
            "relatedAccountId":"001RM000005aGUcYAM",
            "isActive":true,
            "hierarchyType":"Peer",
            "customFields":{
               "CF3__c":false
            }
         },
         {
            "aarId":"0zoRM000000003KYAQ",
            "roleRelationId":"0zlRM0000004C9mYAE",
            "accountId":"001RM000005YNUAYA4",
            "relatedAccountId":"001RM000005aGUcYAM",
            "startDate":"2023-03-05T00:00:00.000Z",
            "endDate":"2023-03-31T00:00:00.000Z",
            "isActive":true,
            "hierarchyType":"Parent",
            "customFields":{
               "CF3__c":false
            }
         },
         {
            "aarId":"0zoRM000000003PYAQ",
            "roleRelationId":"0zlRM0000004C9mYAE",
            "accountId":"001RM000005YNUTYA4",
            "relatedAccountId":"001RM000005aGUcYAM",
            "startDate":"2023-03-05T00:00:00.000Z",
            "endDate":"2023-03-31T00:00:00.000Z",
            "isActive":true,
            "hierarchyType":"Parent",
            "customFields":{
               "CF3__c":false
            }
         },
         {
            "aarId":"0zoRM0000004CBAYA2",
            "roleRelationId":"0zlRM000000001JYAQ",
            "accountId":"001RM000005iEBkYAM",
            "relatedAccountId":"001RM000005aGUcYAM",
            "isActive":true,
            "hierarchyType":"Peer",
            "customFields":{
               "CF3__c":false
            }
         },
         {
            "aarId":"0zoRM000000003GYAQ",
            "roleRelationId":"0zlRM0000004C9mYAE",
            "accountId":"001RM000005YNUOYA4",
            "relatedAccountId":"001RM000005aGUcYAM",
            "startDate":"2023-03-05T00:00:00.000Z",
            "endDate":"2023-03-31T00:00:00.000Z",
            "isActive":true,
            "hierarchyType":"Parent",
            "customFields":{
               "CF3__c":false
            }
         },
         {
            "aarId":"0zoRM0000004CDPYA2",
            "roleRelationId":"0zlRM0000004C9mYAE",
            "accountId":"001RM000005aVWKYA2",
            "relatedAccountId":"001RM000005aGUcYAM",
            "startDate":"2023-03-05T00:00:00.000Z",
            "endDate":"2023-03-31T00:00:00.000Z",
            "isActive":true,
            "hierarchyType":"Parent",
            "customFields":{
               "CF3__c":false
            }
         },
         {
            "aarId":"0zoRM0000004CBFYA2",
            "roleRelationId":"0zlRM000000001JYAQ",
            "accountId":"001RM000005aVSIYA2",
            "relatedAccountId":"001RM000005aGUcYAM",
            "startDate":"2023-03-07T00:00:00.000Z",
            "endDate":"2023-04-08T00:00:00.000Z",
            "isActive":true,
            "hierarchyType":"Peer",
            "customFields":{
               "CF3__c":false
            }
         }
      ]
   },
   "relatedAccount":{
      "relations":[
         {
            "aarId":"0zoRM0000004CAuYAM",
            "roleRelationId":"0zlRM0000004C9mYAE",
            "accountId":"001RM000005aGUcYAM",
            "relatedAccountId":"001RM000005ZLa5YAG",
            "isActive":true,
            "hierarchyType":"Peer",
            "customFields":{
               "CF3__c":false,
               "CF4__c":"A;C"
            }
         },
         {
            "aarId":"0zoRM0000004CB4YAM",
            "roleRelationId":"0zlRM000000001JYAQ",
            "accountId":"001RM000005aGUcYAM",
            "relatedAccountId":"001RM000005aGUNYA2",
            "isActive":false,
            "hierarchyType":"Peer",
            "customFields":{
               "CF3__c":false,
               "CF4__c":"A;D"
            }
         },
         {
            "aarId":"0zoRM000000004mYAA",
            "roleRelationId":"0zlRM000000001TYAQ",
            "accountId":"001RM000005aGUcYAM",
            "relatedAccountId":"001RM000005YXsUYAW",
            "isActive":true,
            "hierarchyType":"Peer",
            "customFields":{
               "CF3__c":true,
               "CF4__c":"A;C"
            }
         }
      ]
   },
   "tasks":[
      "a03RM0000001Npi",
      "a03RM0000001Npn"
   ]
}
```

## Related Topics

- Account Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_account_input.htm)
- Member Record Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_member_record_input.htm)
- Group
                        Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_group_input.htm)
- Account Relation Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_account_relation_input.htm)
