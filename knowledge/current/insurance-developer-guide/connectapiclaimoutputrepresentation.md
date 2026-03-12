---
title: "ConnectApi.ClaimOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiclaimoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.413Z
estimatedTokens: 379
keywords: [ConnectApi.ClaimOutputRepresentation, Output, representation, retrieved, claim]
---

# ConnectApi.ClaimOutputRepresentation

> Output representation for a retrieved claim.

# ConnectApi.ClaimOutputRepresentation

Output representation for a retrieved claim.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| accountId | String | ID of the associated account. | 65.0 |
| attributes | List<ConnectApi.ClaimAttributeOutputRepresentation> | Attributes of the claim product. | 65.0 |
| claimId | String | ID of the claim. | 65.0 |
| claimLossDate | String | Date when the loss occurred. This parameter doesn't show the time of incident. | 66.0 |
| claimReason | String | Reason for which the claim is raised. | 65.0 |
| claimReasonType | String | Type of reason for the claim. | 65.0 |
| claimType | String | Type of claim. | 65.0 |
| contextId | String | ID of the context. | 65.0 |
| errors | List<ConnectApi.ErrorDetail> | Errors that are encountered during the processing of the API request. | 65.0 |
| incidentTypeId | String | ID for the type of incident in the claim. | 65.0 |
| insurancePolicyId | String | ID of the insurance policy on which the claim is raised. | 65.0 |
| items | List<ConnectApi.ClaimItemOutputRepresentation> | Details of the claim items. | 65.0 |
| lossDate | Date | Date on which the incident took place. | 65.0 |
| lossType | String | Type of loss for which the claim is initiated. | 65.0 |
| name | String | Name of the claim. | 65.0 |
| participants | List<ConnectApi.ClaimParticipantOutputRepresentation> | Details of the claim participants. | 65.0 |
| productCode | String | Product code of the claim product. | 65.0 |

## Related Topics

- ConnectApi.ClaimAttributeOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_attribute_output.htm)
- ConnectApi.ErrorDetail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_detail.htm)
- ConnectApi.ClaimItemOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_item_output.htm)
- ConnectApi.ClaimParticipantOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_participant_output.htm)
