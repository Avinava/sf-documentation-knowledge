---
title: "patchInsuranceUpdateMembers(censusMgmtInputParam, groupCensusId)"
domain: insurance-developer-guide
topic: patchinsuranceupdatememberscensusmgmtinputparam-groupcensusid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.936Z
estimatedTokens: 245
keywords: [patchInsuranceUpdateMembers, censusMgmtInputParam, groupCensusId, group, census, members, API, Version, Requires, Chatter]
---

# patchInsuranceUpdateMembers(censusMgmtInputParam, groupCensusId)

> Update group census members.

# patchInsuranceUpdateMembers(censusMgmtInputParam, groupCensusId)

Update group census members.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceCensusMgmtOutputRepresentation patchInsuranceUpdateMembers(ConnectApi.InsuranceCensusMgmtInputRepresentation censusMgmtInputParam, String groupCensusId)

## Parameters

censusMgmtInputParam

Type: [ConnectApi.InsuranceCensusMgmtInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_census_mgmt.htm "Input representation for adding or updating census members.")

Details to update the census members.

groupCensusId

Type: String

ID of the group census.

## Return Value

Type: [ConnectApi.InsuranceCensusMgmtOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_census_mgmt.htm "Output representation for the insurance census management process.")

## Related Topics

- ConnectApi.InsuranceCensusMgmtInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_census_mgmt.htm)
- ConnectApi.InsuranceCensusMgmtOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_census_mgmt.htm)
