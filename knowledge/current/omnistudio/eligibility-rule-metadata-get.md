---
title: "Eligibility Rule Metadata (GET)"
domain: omnistudio
topic: eligibility-rule-metadata-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:48.065Z
estimatedTokens: 274
keywords: [Eligibility, Rule, Metadata, decision, provided, expression, qualification]
---

# Eligibility Rule Metadata (GET)

> Get metadata details of a decision table based on the provided expression set ID, type,
    and qualification type.

# Eligibility Rule Metadata (GET)

Get metadata details of a decision table based on the provided expression set ID, type, and qualification type.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| decisionTableId | String | Unique ID of the decision table for which metadata details are required. | Optional | 66.0 |
| eligibilityRuleType | String | The type of eligibility rule, which can be qualification or disqualification. | Optional | 66.0 |
| expressionSetId | String | Unique ID of the expression set for which metadata details are required. | Optional | 66.0 |
| targetType | String | Type of the metadata. Valid values are: product, category. | Optional | 66.0 |

Response body for GET

[Eligibility Rule Metadata](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_eligibility_rule_metadata.htm "Output representation details of get eligibility rule metadata request.")

## Code Examples

```
/connect/service-automation/eligibility-rule-metadata
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/service-automation/eligibility-rule-metadata
```

## Related Topics

- Eligibility Rule Metadata (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_eligibility_rule_metadata.htm)
