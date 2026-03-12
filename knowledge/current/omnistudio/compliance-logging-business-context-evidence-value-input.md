---
title: "Compliance Logging Business Context Evidence Value Input"
domain: omnistudio
topic: compliance-logging-business-context-evidence-value-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.130Z
estimatedTokens: 96
keywords: [Compliance, Logging, Business, Context, Evidence, Input, representation, generic]
---

# Compliance Logging Business Context Evidence Value Input

> Input representation of the generic context and evidence value.

# Compliance Logging Business Context Evidence Value Input

Input representation of the generic context and evidence value.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| value | Object | Information on the business context and evidence that's used in the evaluation. | Required | 64.0 |

## Code Examples

```
"businessContextAndEvidence": { // optional
"clientId": "001Z9000002G3ygIAC",
"advisorId": "005xx0000000000001",
"productId": "00Pxx0000000000001",
"acceptableRisk": "true",
"productRisk": "85"
}
```
