---
title: "ConnectApi.InsuranceContactsAndUsersCreationInputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancecontactsanduserscreationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.253Z
estimatedTokens: 223
keywords: [Input, representation, contacts, portal, users]
---

# ConnectApi.InsuranceContactsAndUsersCreationInputRepresentation

> Input representation to create contacts and portal users.

# ConnectApi.InsuranceContactsAndUsersCreationInputRepresentation

Input representation to create contacts and portal users.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldMappings | Map<String, String> | Map of field API names from the Group Census Member object (key) to the Contact object (value). | Optional | 65.0 |
| groupCensusId | String | ID of the group census. | Required | 65.0 |
| groupCensusMemberIdList | List<String> | List of group census member IDs. | Optional | 65.0 |
| matchingKeyList | List<String> | List of matching keys from Group Census Member to find existing contacts. | Optional | 65.0 |
| userDetails | PortalUserCreation​InputRepresentation | Details to create portal users.This property is required if the createPortalUsers parameter in the method call is set to true | Optional | 65.0 |

## Related Topics

- PortalUserCreation​InputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_portal_user_creation.htm)
