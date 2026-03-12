---
title: "Decision Table Output"
domain: omnistudio
topic: decision-table-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.750Z
estimatedTokens: 179
keywords: [Decision, Output, representation]
---

# Decision Table Output

> Output representation of the decision table details.

# Decision Table Output

Output representation of the decision table details.

JSON example for GET, POST, and PATCH

```

```

JSON example for DELETE

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Response code from the API request. | Small, 58.0 | 58.0 |
| decisionTable | Decision Table Definition Output | Details of the decision table definition associated with the decision table. | Small, 58.0 | 58.0 |
| isSuccess | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 58.0 | 58.0 |
| message | String | Error message when the API request fails. | Small, 58.0 | 58.0 |

## Code Examples

```
{
   "code":"200",
   "decisionTable":{
      "collectOperator":"Count",
      "conditionCriteria":"1 OR 2 OR 3",
      "conditionType":"Any",
      "decisionResultPolicy":"FirstMatch",
      "doesConsiderNullValue": true,
      "description":"Eligiblity of Products using Qualification Rules",
      "id":"0lDxx00000000BJ",
      "parameters":[
         {
            "fieldName":"IsDeleted",
            "isGroupByField":false,
            "isPriority":false,
            "operator":"Equals",
            "sequence":1,
            "usage":"Input"
         },
         {
            "fieldName":"CreatedById",
            "isGroupByField":false,
            "isPriority":false,
            "usage":"Output"
         },
         {
            "fieldName":"Title",
            "isGroupByField":false,
            "isPriority":false,
            "operator":"Equals",
            "sequence":3,
            "usage":"Input"
         },
         {
            "fieldName":"Id",
            "isGroupByField":false,
            "isPriority":false,
            "operator":"Equals",
            "sequence":2,
            "usage":"Input"
         }
      ],
      "setupName":"Product Qualification eligibility3",
      "sourceCriteria":[
         
      ],
      "sourceObject":"AccountFeed",
      "sourceType":"SingleSobject",
      "sourceconditionLogic":"1 AND 2 AND 3",
      "status":"Draft"
   },
   "isSuccess":true,
   "message":""
}
```

```
{
   "code":"200",
   "isSuccess":true,
   "message":""
}
```

## Related Topics

- Decision Table Definition Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_definition_output.htm)
