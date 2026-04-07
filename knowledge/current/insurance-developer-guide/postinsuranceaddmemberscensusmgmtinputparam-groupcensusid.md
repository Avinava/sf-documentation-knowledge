---
title: "postInsuranceAddMembers(censusMgmtInputParam,
   groupCensusId)"
domain: insurance-developer-guide
topic: postinsuranceaddmemberscensusmgmtinputparam-groupcensusid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:49.380Z
estimatedTokens: 250
keywords: [postInsuranceAddMembers, censusMgmtInputParam, groupCensusId, Add, new, group, census, members, API, Requires, Chatter]
---

> Add new group census members.

# postInsuranceAddMembers(censusMgmtInputParam, groupCensusId)

Add new group census members.

## API Version

63.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceCensusMgmtOutputRepresentation postInsuranceAddMembers(ConnectApi.InsuranceCensusMgmtInputRepresentation censusMgmtInputParam, String groupCensusId)

## Parameters

censusMgmtInputParam

Type: [ConnectApi.InsuranceCensusMgmtInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_census_mgmt.htm "Input representation for adding or updating census members.")

The input representation containing the census members to add.

groupCensusId

Type: String

ID of the group census.

## Return Value

Type: [ConnectApi.InsuranceCensusMgmtOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_census_mgmt.htm "Output representation for the insurance census management process.")

## Related Topics

- ConnectApi.InsuranceCensusMgmtInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_census_mgmt.htm)
- ConnectApi.InsuranceCensusMgmtOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_census_mgmt.htm)
