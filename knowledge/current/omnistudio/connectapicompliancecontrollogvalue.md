---
title: "ConnectApi.ComplianceControllogValue"
domain: omnistudio
topic: connectapicompliancecontrollogvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:46.667Z
estimatedTokens: 386
keywords: [ConnectApi.ComplianceControllogValue, Compliance, controllog]
---

# ConnectApi.ComplianceControllogValue

> Compliance controllog value.

# ConnectApi.ComplianceControllogValue

Compliance controllog value.

| Property | Type | Description | Available Version |
| --- | --- | --- | --- |
| businessContextAndEvidence | Map<String, ConnectApi.ComplianceLoggingBusinessContextEvidenceValue> | JSON object with name-value pairs that store information on the business context and evidence that's used in the evaluation.The maximum size for name is 100 characters and maximum size for value is 1024 characters. | 64.0 |
| businessOperationsProcessApiName | String | API name of the business operations process. | 64.0 |
| complianceMessage | String | Reason for a control failure or passed compliance. For example, the interest rate exceeds the maximum rate for veterans.Maximum length is 1024 characters. | 63.0 |
| controlVersionApiName | String | API name of the control version. | 64.0 |
| errorId | String | Error ID for an error related to an evaluation compliance check. | 64.0 |
| errorMessage | String | Message for an error that occurs during an evaluation compliance check. | 64.0 |
| evaluationTime | Date | Time when the compliance check is done. If no value is specified, the current time is used. | 64.0 |
| inContextOf | String | Reference ID (context) for which the control or procedure is used. | 64.0 |
| isCompliant | Boolean | Indicates whether the control has passed the compliance check (true) or not (false). | 64.0 |
| status | String | Status of the evaluation check. | 64.0 |
| transactionKey | String | Transaction key to identify the log message. | 64.0 |

## Related Topics

- ConnectApi.ComplianceLoggingBusinessContextEvidenceValue (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_compliance_logging_business_context_evidence_value.htm)
