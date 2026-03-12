---
title: "Case Info Wrapper"
domain: financial-services-cloud-object-reference
topic: case-info-wrapper
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.282Z
estimatedTokens: 242
keywords: [Case, Info, Wrapper, Input, representation, complaint]
---

# Case Info Wrapper

> Input representation of a case related to the
    complaint.

# Case Info Wrapper

Input representation of a case related to the complaint.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account associated with the complainant. | Optional | 58.0 |
| additionalInfo | Map<String, Generic Object Wrapper> | Additional information about the case. | Optional | 58.0 |
| description | String | Description of the case. | Optional | 58.0 |
| origin | String | Origin of the case. Possible values are:EmailPhoneWeb | Optional | 58.0 |
| reason | String | Reason for creating the case. Possible values are:BreakdownEquipment ComplexityEquipment DesignFeedbackInstallationOtherPerformance | Optional | 58.0 |
| status | String | Status of the case. Possible values are:EscalatedIn ProgressNewOn HoldResponse ReceivedSubmittedWaiting for CustomerWorking | Optional | 58.0 |
| subject | String | Subject of the case. | Optional | 58.0 |

## Related Topics

- Generic Object Wrapper (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_generic_object_wrappe.htm)
