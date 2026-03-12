---
title: "Compliance Logging Info Input"
domain: omnistudio
topic: compliance-logging-info-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.133Z
estimatedTokens: 81
keywords: [Compliance, Logging, Info, Input, representation]
---

# Compliance Logging Info Input

> Input representation of a compliance logging request.

# Compliance Logging Info Input

Input representation of a compliance logging request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| controllogs | Compliance​Control Log Value[] | Control evaluation logs. | Required | 64.0 |

## Code Examples

```
{
  "controllogs": [
    {
      "controlVersionApiName": "LicenseCheckControl_V1",
      "isCompliant": true,
      "inContextOf": "001xx0000ABCDE",
      "status": "SUCCESS",
      "evaluationTime": "2022-10-31T09:00:00.594Z",
      "businessContextAndEvidence": {
        "clientId": "001Z9000002G3ygIAC",
        "advisorId": "005xx0000000000001",
        "productId": "00Pxx0000000000001",
        "acceptableRisk": "true",
        "productRisk": "85"
      },
      "complianceMessage": "Agent has an active license.",
      "transactionKey": "txn1234567890abcde",
      "errorId": "123",
      "errorMessage": "",
      "businessOperationsProcessApiName": "0022..."
    }
  ]
}
```

## Related Topics

- Compliance​Control
                        Log Value[] (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_compliance_controllog_value_input.htm)
