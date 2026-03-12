---
title: "Explainability Message Templates (GET)"
domain: omnistudio
topic: explainability-message-templates-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:48.295Z
estimatedTokens: 360
keywords: [Explainability, Message, Templates, Retrieves, matches, search]
---

# Explainability Message Templates (GET)

> Retrieves a list of explainability message templates that matches
      the given search parameters.

# Explainability Message Templates (GET)

Retrieves a list of explainability message templates that matches the given search parameters.

Resource

```

```

Resource Example

```

```

Available version

56.0

Requires Chatter

No

HTTP methods

GET

Request parameters for GET

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

You must specify at least one parameter as part of the GET request.

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isDefault | Boolean | Specifies whether the message in the explainability message template for an expression set step type is default (true) or not (false). | Optional | 56.0 |
| messageType | String | The message defined for a step when the step result is either passed or failed. | Optional | 56.0 |
| searchKey | String | The keyword used to retrieve the list of templates. | Optional | 56.0 |
| stepType | String | The type of expression set step element.Pass one of these values for this field:CalculationBranchConditionDecision Matrix LookupDecision Table LookupAggregationSub ExpressionBusiness Element | Optional | 56.0 |

Response body for GET

[Message Templates List](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_message_templates_list_output.htm "Output representation of the list of explainability message templates.")

## Code Examples

```
/connect/business-rules/explainability/message-templates
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect
/business-rules/explainability/message-templates?messageType=Passed
```

## Related Topics

- Message Templates List (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_message_templates_list_output.htm)
