---
title: "Message Templates List"
domain: omnistudio
topic: message-templates-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.062Z
estimatedTokens: 192
keywords: [Message, Templates, Output, representation, explainability]
---

# Message Templates List

> Output representation of the list of explainability message
      templates.

# Message Templates List

Output representation of the list of explainability message templates.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | The API response code when there’s a failure in retrieving the list of explainability message templates. | Small, 56.0 | 56.0 |
| isSuccess | Boolean | Identifies whether the request is successful (true) or not (false). | Small, 56.0 | 56.0 |
| message | String | The error message when there’s a failure in retrieving the list of explainability message templates. | Small, 56.0 | 56.0 |
| message​Templates | Message Template Detail [] | The list of explainability message templates. | Small, 56.0 | 56.0 |

## Code Examples

```
{
  "messageTemplates" : [ {
    "expressionSetStepType" : "Branch",
    "id" : "8U8x00000000027CAA",
    "isDefault" : true,
    "message" : "This is Branch Passing Message",
    "name" : "BranchMessageTemplate",
    "resultType" : "Passed"
  }, {
    "expressionSetStepType" : "Calculation",
    "id" : "8U8x00000000022CAA",
    "isDefault" : true,
    "message" : "CalcMessageTemplate PASS",
    "name" : "CalcMessageTemplate",
    "resultType" : "Passed"
  }, {
    "expressionSetStepType" : "Condition",
    "id" : "8U8x0000000002CCAQ",
    "isDefault" : false,
    "message" : "This is Condition Passing Message",
    "name" : "ConditionMessageTemplate",
    "resultType" : "Passed"
  }, {
    "expressionSetStepType" : "MatrixLookup",
    "id" : "8U8x0000000002HCAQ",
    "isDefault" : true,
    "message" : "This is DM passing message",
    "name" : "DMMessageTemplate",
    "resultType" : "Passed"
  }, {
    "expressionSetStepType" : "ReferenceProcedure",
    "id" : "8U8x0000000002MCAQ",
    "isDefault" : true,
    "message" : "This is SubExpression Passing Message",
    "name" : "SubExpressionMessageTemplate",
    "resultType" : "Passed"
  } ]
}
```

## Related Topics

- Message
                  Template Detail (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_message_template_detail_output.htm)
