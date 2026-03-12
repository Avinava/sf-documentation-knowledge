---
title: "ConnectApi.InsuranceMemberAccountAndUserDetailsRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancememberaccountanduserdetailsrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.569Z
estimatedTokens: 156
keywords: [Output, representation, maps, source, group, census, member, IDs, newly, created, person, account, portal, user]
---

# ConnectApi.InsuranceMemberAccountAndUserDetailsRepresentation

> Output representation that maps a source group census member to the IDs of the newly created person account and portal user.

# ConnectApi.InsuranceMemberAccountAndUserDetailsRepresentation

Output representation that maps a source group census member to the IDs of the newly created person account and portal user.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| groupCensusId | String | ID of the group census. | 65.0 |
| groupCensusMemberId | String | ID of the source group census member. | 65.0 |
| personAccountId | String | ID of the person account that's created. | 65.0 |
| userId | String | ID of the portal user that's created. This property is null if portal user creation isn't requested. | 65.0 |
