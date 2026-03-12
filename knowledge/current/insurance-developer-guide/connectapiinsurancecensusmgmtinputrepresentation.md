---
title: "ConnectApi.InsuranceCensusMgmtInputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancecensusmgmtinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.247Z
estimatedTokens: 155
keywords: [Input, representation, adding, updating, census, members]
---

# ConnectApi.InsuranceCensusMgmtInputRepresentation

> Input representation for adding or updating census members.

# ConnectApi.InsuranceCensusMgmtInputRepresentation

Input representation for adding or updating census members.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| duplicateDetectionFields | List<String> | List of field API names that are used to generate a unique key for identifying duplicate members. | Optional | 65.0 |
| flowName | String | Name of the flow to use for processing group member data. | Optional | 65.0 |
| members | List<ConnectApi.GroupCensusMemberInputRepresentation> | List of group census members to add or update. | Required | 65.0 |

## Related Topics

- ConnectApi.GroupCensusMemberInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_group_census_member.htm)
