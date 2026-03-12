---
title: "ConnectApi.InsuranceAccountsAndUsersCreationRepresentation"
domain: insurance-developer-guide
topic: connectapiinsuranceaccountsanduserscreationrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.503Z
estimatedTokens: 230
keywords: [Output, representation, person, account, user, creation, process]
---

# ConnectApi.InsuranceAccountsAndUsersCreationRepresentation

> Output representation for the person account and user creation process.

# ConnectApi.InsuranceAccountsAndUsersCreationRepresentation

Output representation for the person account and user creation process.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| accountsAndUsersDetails | List<ConnectApi.InsuranceMemberAccountAndUserDetailsRepresentation> | Details of the objects that contain the IDs of the person accounts and users that are created and mapped to their source group census members. | 65.0 |
| errors | List<ConnectApi.InsuranceErrorRepresentation> | Details of errors that occurred during the operation. Each error includes details about why a specific group census member failed to process. | 65.0 |
| groupCensusId | String | ID of the group census that's processed. | 65.0 |
| isSuccess | Boolean | Indicates whether the overall operation was successful (true) or not (false). If any member fails to process, this value is false. | 65.0 |

## Related Topics

- ConnectApi.InsuranceMemberAccountAndUserDetailsRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_member_account_and_user_details.htm)
- ConnectApi.InsuranceErrorRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_error.htm)
