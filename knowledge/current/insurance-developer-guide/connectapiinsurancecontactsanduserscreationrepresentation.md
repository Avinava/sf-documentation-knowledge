---
title: "ConnectApi.InsuranceContactsAndUsersCreationRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancecontactsanduserscreationrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.522Z
estimatedTokens: 161
keywords: [Output, representation, contact, user, creation, process]
---

# ConnectApi.InsuranceContactsAndUsersCreationRepresentation

> Output representation of the contact and user creation process.

# ConnectApi.InsuranceContactsAndUsersCreationRepresentation

Output representation of the contact and user creation process.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| contactsAndUsersDetails | List<ConnectApi.InsuranceMemberContactAndUserDetailsRepresentation> | Details of the contacts and users that are created. | 65.0 |
| errors | List<ConnectApi.InsuranceErrorRepresentation> | Errors that occurred during the operation. | 65.0 |
| groupCensusId | String | ID of the group census. | 65.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | 65.0 |

## Related Topics

- ConnectApi.InsuranceMemberContactAndUserDetailsRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_member_contact_and_user_details.htm)
- ConnectApi.InsuranceErrorRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_error.htm)
