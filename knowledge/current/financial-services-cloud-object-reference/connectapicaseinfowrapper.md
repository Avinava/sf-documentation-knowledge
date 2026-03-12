---
title: "ConnectApi.CaseInfoWrapper"
domain: financial-services-cloud-object-reference
topic: connectapicaseinfowrapper
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.966Z
estimatedTokens: 245
keywords: [ConnectApi.CaseInfoWrapper, Input, representation, case, complaint]
---

# ConnectApi.CaseInfoWrapper

> Input representation of a case related to the
    complaint.

# ConnectApi.CaseInfoWrapper

Input representation of a case related to the complaint.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account associated with the complainant. | Optional | 58.0 |
| additionalInfo | Map<String, ConnectApi.GenericObjectWrapper> | Additional information about the case. | Optional | 58.0 |
| description | String | Description of the case. | Optional | 58.0 |
| origin | String | Origin of the case. Possible values are:EmailPhoneWeb | Optional | 58.0 |
| reason | String | Reason for creating the case. Possible values are:BreakdownEquipment ComplexityEquipment DesignFeedbackInstallationOtherPerformance | Optional | 58.0 |
| status | String | Status of the case. Possible values are:EscalatedIn ProgressNewOn HoldResponse ReceivedSubmittedWaiting for CustomerWorking | Optional | 58.0 |
| subject | String | Subject of the case. | Optional | 58.0 |

## Related Topics

- ConnectApi.GenericObjectWrapper (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_connectapi_input_generic_object_wrappe.htm)
