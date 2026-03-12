---
title: "ConnectApi.ClaimInputRepresentation"
domain: insurance-developer-guide
topic: connectapiclaiminputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.098Z
estimatedTokens: 449
keywords: [ConnectApi.ClaimInputRepresentation, Input, representation, creating, updating, claim]
---

# ConnectApi.ClaimInputRepresentation

> Input representation for creating or updating a claim.

# ConnectApi.ClaimInputRepresentation

Input representation for creating or updating a claim.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account that's associated with the claim. | Optional | 65.0 |
| additionalFields | Object | Additional fields for the claim. | Optional | 65.0 |
| attributes | List<ConnectApi.ClaimAttributeInputRepresentation> | List of attributes for the claim product. | Optional | 65.0 |
| claimLossDate | String | Date when the loss occurred. This parameter doesn't accept time of incident. To specify both the date and time of loss, use the lossDate parameter. | Optional | 66.0 |
| claimReason | String | Reason for the claim. | Optional | 65.0 |
| claimReasonType | String | Type of reason for the claim. | Optional | 65.0 |
| claimType | String | Type of claim. | Optional | 65.0 |
| incidentTypeId | String | ID of the incident type. | Optional | 65.0 |
| insurancePolicyId | String | ID of the insurance policy on which the claim is raised. | Optional | 65.0 |
| items | List<ConnectApi.ClaimItemInputRepresentation> | Claim items that are associated with the claim. | Optional | 65.0 |
| lossDate | Date | Date on which the loss occurred. | Optional | 65.0 |
| lossType | String | Type of loss for which the claim is raised. | Optional | 65.0 |
| name | String | Name of the claim. | Optional | 65.0 |
| options | ConnectApi.ClaimOptionsInputRepresentation | Options to include during the claim creation or update process. | Optional | 65.0 |
| participants | List<ConnectApi.ClaimParticipantInputRepresentation> | Participants who are associated with the claim. | Optional | 65.0 |
| productCode | String | Product code of the claim product. | Optional | 65.0 |

## Related Topics

- ConnectApi.ClaimAttributeInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_attribute.htm)
- ConnectApi.ClaimItemInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_item.htm)
- ConnectApi.ClaimOptionsInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_options.htm)
- ConnectApi.ClaimParticipantInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_participant.htm)
