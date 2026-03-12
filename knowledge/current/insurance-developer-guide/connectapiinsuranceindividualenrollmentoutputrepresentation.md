---
title: "ConnectApi.InsuranceIndividualEnrollmentOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsuranceindividualenrollmentoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.566Z
estimatedTokens: 150
keywords: [Output, representation, individual, enrollment, process]
---

# ConnectApi.InsuranceIndividualEnrollmentOutputRepresentation

> Output representation for the individual enrollment process.

# ConnectApi.InsuranceIndividualEnrollmentOutputRepresentation

Output representation for the individual enrollment process.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.ErrorOutputRepresentation> | List of errors that are encountered during the enrollment process. | 65.0 |
| isSuccess | Boolean | Indicates whether the enrollment process is successful (true) or not (false). | 65.0 |
| policies | List<ConnectApi.FamilyPolicyInfoOutputRepresentation> | List of policies that are created as part of the enrollment process. | 65.0 |

## Related Topics

- ConnectApi.ErrorOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_error.htm)
- ConnectApi.FamilyPolicyInfoOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_family_policy_info.htm)
