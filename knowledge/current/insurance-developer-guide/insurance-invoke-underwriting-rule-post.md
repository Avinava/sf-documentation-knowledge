---
title: "Insurance Invoke Underwriting Rule (POST)"
domain: insurance-developer-guide
topic: insurance-invoke-underwriting-rule-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.340Z
estimatedTokens: 205
keywords: [Insurance, Invoke, Underwriting, Rule, POST, rules, different, records, run, time]
---

# Insurance Invoke Underwriting Rule (POST)

> Invoke underwriting rules for different object records during run time.

# Insurance Invoke Underwriting Rule (POST)

Invoke underwriting rules for different object records during run time.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| objectId | String | ID of the insurance object(Quote or Insurance Policy ID). | Required | 63.0 |
| toStage | String | Name of the stage the record is moving to. | Required | 63.0 |

Response body for POST

[Insurance Invoke Underwriting Rule](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_invoke_underwriting_rule_output.htm "Output representation for invoke underwriting rule response.")

## Code Examples

```
/connect/insurance/underwriting-rules/invoke
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/underwriting-rules/invoke
```

```
{
	"objectId": "11Oxx0000007MnhEAE",
	"toStage": "Approved"
}
```

## Related Topics

- Insurance Invoke Underwriting Rule (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_invoke_underwriting_rule_output.htm)
