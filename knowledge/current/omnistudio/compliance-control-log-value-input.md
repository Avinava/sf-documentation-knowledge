---
title: "Compliance Control Log Value Input"
domain: omnistudio
topic: compliance-control-log-value-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.128Z
estimatedTokens: 430
keywords: [Compliance, Control, Log, Input, representation, logs]
---

# Compliance Control Log Value Input

> Input representation of the compliance control logs.

# Compliance Control Log Value Input

Input representation of the compliance control logs.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| businessContext​AndEvidence | Map<String,​ ComplianceLogging​BusinessContext​EvidenceValueInput> | JSON object with name-value pairs that store information on the business context and evidence used in the evaluation.The maximum size for name is 100 characters and maximum size for value is 1024 characters. | Optional | 64.0 |
| businessOperations​ProcessApiName | String | API name of the business operations process. | Optional | 64.0 |
| compliance​Message | String | Reason for a control failure or passed compliance. For example, the interest rate exceeds the maximum rate for veterans.Maximum length is 1024 characters. | Optional | 64.0 |
| controlVersion​ApiName | String | API name of the control version. | Required | 64.0 |
| errorId | String | Error related to an evaluation compliance check. | Optional | 64.0 |
| errorMessage | String | Message for an error that occurs during an evaluation compliance check. | Optional | 64.0 |
| evaluationTime | String | Time when the compliance check is done. If no value is specified, the current time is used. | Optional | 64.0 |
| inContextOf | String | Reference ID (context) for which the control or procedure is used. | Required | 64.0 |
| isCompliant | Boolean | Indicates whether the control has passed the compliance check. | Required | 64.0 |
| status | String | Specifies the status of the evaluation check. | Required | 64.0 |
| transactionKey | String | Transaction key to identify the log message. | Optional | 64.0 |

## Code Examples

```
[
  {
  "controlVersionApiName": "LicenseCheckControl_V1",  // change to controlVersionAPIName
  "isCompliant": true, // required
  "inContextOf": "001xx0000ABCDE", // required, its a valid salesforce record
  "status": "SUCCESS", // required ( Static enum )
  "evaluationTime": "2022-10-31T09:00:00.594Z", // optional
  "businessContextAndEvidence": { // optional
  "clientId": "001Z9000002G3ygIAC",
  "advisorId": "005xx0000000000001",
  "productId": "00Pxx0000000000001",
  "acceptableRisk": "true",
  "productRisk": "85"
  },
  "complianceMessage": "Agent has an active license.", //optional
  "transactionKey": "txn1234567890abcde", // optional , Customer generated
  "errorId": "123", // optional
  "errorMessage": "", // optional
  "businessOperationsProcessApiName": "0022..." // optional
  }
]
```

## Related Topics

- ComplianceLogging​BusinessContext​EvidenceValueInput (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_compliance_logging_business_context_evidence_value_input.htm)
