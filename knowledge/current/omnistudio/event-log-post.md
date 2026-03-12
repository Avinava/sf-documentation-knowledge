---
title: "Event Log (POST)"
domain: omnistudio
topic: event-log-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.361Z
estimatedTokens: 190
keywords: [Event, Log, POST, compliance, check, events, control., API, supports, maximum, number, logs, per, request., 200, 000, audit, log, calls, year.]
---

# Event Log (POST)

> Log compliance check events for control. This API supports a maximum number of 25 logs
    per request. You can make up to 200,000 audit log API calls per year.

# Event Log (POST)

Log compliance check events for control. This API supports a maximum number of 25 logs per request. You can make up to 200,000 audit log API calls per year.

Resource

```

```

Resource Example

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| controllogs | Compliance​Control Log Value[] | Control evaluation logs. | Required | 64.0 |

Response body for POST

[Compliance Logging Response](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_compliance_logging_response_output.htm "Output representation of compliance bulk logging results.")

## Code Examples

```
/connect/compliance/log/logevent
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/compliance/log/logevent
```

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
- Compliance Logging Response (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_compliance_logging_response_output.htm)
