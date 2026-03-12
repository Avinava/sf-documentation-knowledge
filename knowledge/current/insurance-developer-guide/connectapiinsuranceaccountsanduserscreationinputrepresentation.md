---
title: "ConnectApi.InsuranceAccountsAndUsersCreationInputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsuranceaccountsanduserscreationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.233Z
estimatedTokens: 314
keywords: [Input, representation, creating, person, accounts, portal, users, group, census, members]
---

# ConnectApi.InsuranceAccountsAndUsersCreationInputRepresentation

> Input representation for creating person accounts and portal users from group census members.

# ConnectApi.InsuranceAccountsAndUsersCreationInputRepresentation

Input representation for creating person accounts and portal users from group census members.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldMappings | Map<String, String> | Map of field API names from the Group Census Member object (key) to the Account object (value). | Optional | 65.0 |
| groupCensusId | String | ID of the group census that contains the members to process. | Required | 65.0 |
| groupCensusMemberIdList | List<String> | List of group census member IDs to be processed. If not provided, all members of the specified group census are processed. | Optional | 65.0 |
| matchingKeyList | List<String> | List of field API names on the Group Census Member object used to identify and prevent the creation of duplicate person accounts. | Optional | 65.0 |
| personAccountRecordType | String | Developer name of the person account record type to use for the new accounts. | Optional | 65.0 |
| userDetails | ConnectApi.PortalUserCreationInputRepresentation | Details to create portal users. This property is required if the createPortalUsers parameter in the method call is set to true. | Optional | 65.0 |

## Related Topics

- ConnectApi.PortalUserCreationInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_portal_user_creation.htm)
