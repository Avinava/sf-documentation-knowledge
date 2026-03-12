---
title: "ConnectApi.UpdateClaimInputRepresentation"
domain: insurance-developer-guide
topic: connectapiupdateclaiminputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.358Z
estimatedTokens: 435
keywords: [Invocable, action, input, representation, claim]
---

# ConnectApi.UpdateClaimInputRepresentation

> Invocable action input representation for the update claim action.

# ConnectApi.UpdateClaimInputRepresentation

Invocable action input representation for the update claim action.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account that's associated with the claim. | Optional | 65.0 |
| additionalFields | List<ConnectApi.ClaimAdditionalFieldInputRep> | Additional standard or custom fields that are used to create or update insurance claim. | Optional | 65.0 |
| attributes | List<ConnectApi.ClaimAttributeInputRep> | Attributes of the claim product. | Optional | 65.0 |
| claimId | String | ID of the claim. | Required | 65.0 |
| claimReason | String | Reason for the claim. | Optional | 65.0 |
| claimReasonType | String | Category that the claim reason belongs to. | Optional | 65.0 |
| claimType | String | Type of claim. | Optional | 65.0 |
| incidentTypeId | String | ID for the type of incident in the claim. | Optional | 65.0 |
| insurancePolicyId | String | ID of the insurance policy on which the claim is raised. | Optional | 65.0 |
| items | List<ConnectApi.ClaimItemInputRep> | Details of the items that are associated with the claim. | Optional | 65.0 |
| lossDate | String | Date on which the loss occurred. | Optional | 65.0 |
| lossType | String | Type of the loss for which the claim is initiated. | Optional | 65.0 |
| name | String | Name of the claim. | Optional | 65.0 |
| options | ClaimOptionsInputRep | Options for creating or updating a claim. | Optional | 65.0 |
| participants | List<ConnectApi.ClaimParticipantInputRep> | Claim participants that are associated with the claim. | Optional | 65.0 |
| productCode | String | Product code of the claim product. | Optional | 65.0 |

## Related Topics

- ConnectApi.ClaimAdditionalFieldInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_additional_field_input_re.htm)
- ConnectApi.ClaimAttributeInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_attribute_input_re.htm)
- ConnectApi.ClaimItemInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_item_input_re.htm)
- ClaimOptionsInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_options_input_re.htm)
- ConnectApi.ClaimParticipantInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_participant_input_re.htm)
