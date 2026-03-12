---
title: "Claim Input"
domain: insurance-developer-guide
topic: claim-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.675Z
estimatedTokens: 484
keywords: [Claim, Input, representation, creating, updating]
---

# Claim Input

> Input representation for creating or updating a claim.

# Claim Input

Input representation for creating or updating a claim.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account that's associated with the claim. | Optional | 65.0 |
| additionalFields | Object | Additional standard or custom fields that are used to create or update insurance claim. | Optional | 65.0 |
| attributes | Claim Attribute Input[] | Attributes of the claim product. | Optional | 65.0 |
| claimLossDate | String | Date when the loss occurred.This parameter doesn't accept time of incident. To specify both the date and time of loss, use the lossDate parameter. | Optional | 66.0 |
| claimReason | String | Reason for the claim. | Optional | 65.0 |
| claimReasonType | String | Category that the claim reason belongs to. | Optional | 65.0 |
| claimType | String | Type of claim. | Optional | 65.0 |
| incidentTypeId | String | ID for the type of incident in the claim. | Optional | 65.0 |
| insurance​PolicyId | String | ID of the insurance policy on which the claim is raised. | Optional | 65.0 |
| items | Claim Item Input[] | Details of the items that are associated with the claim. | Optional | 65.0 |
| lossDate | Date | Date and time when the loss occurred.You must specify both the date and time of the incident; otherwise, the API returns an error. To specify only the date of loss, use the claimLossDate parameter. | Optional | 65.0 |
| lossType | String | Type of the loss for which the claim is initiated. | Optional | 65.0 |
| name | String | Name of the claim. | Optional | 65.0 |
| options | Claim Options Input | Options for creating or updating a claim. | Optional | 65.0 |
| participants | Claim Participant Input[] | Claim participants that are associated with the claim. | Optional | 65.0 |
| productCode | String | Product code of the claim product. | Required to create a claim | 65.0 |

## Related Topics

- Claim Attribute Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_claim_attribute_input.htm)
- Claim Item Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_claim_item_input.htm)
- Claim Options Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_claim_options_input.htm)
- Claim Participant Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_claim_participant_input.htm)
