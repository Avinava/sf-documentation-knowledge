---
title: "deleteInsuranceDeleteAllMembers(groupCensusId)"
domain: insurance-developer-guide
topic: deleteinsurancedeleteallmembersgroupcensusid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.919Z
estimatedTokens: 153
keywords: [deleteInsuranceDeleteAllMembers, groupCensusId, census, members, group, API, Version, Requires, Chatter]
---

# deleteInsuranceDeleteAllMembers(groupCensusId)

> Delete all census members for the specified group census ID.

# deleteInsuranceDeleteAllMembers(groupCensusId)

Delete all census members for the specified group census ID.

## API Version

65.0

## Requires Chatter

No

## Signature

public static void deleteInsuranceDeleteAllMembers(String groupCensusId)

## Parameters

groupCensusId

Type: String

ID of the group census whose members must be deleted.

## Return Value

Type: [ConnectApi.InsuranceCensusMgmtOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_census_mgmt.htm "Output representation for the insurance census management process.")

## Related Topics

- ConnectApi.InsuranceCensusMgmtOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_census_mgmt.htm)
