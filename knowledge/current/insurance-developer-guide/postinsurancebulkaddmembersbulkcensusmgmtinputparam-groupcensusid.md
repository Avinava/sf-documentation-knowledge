---
title: "postInsuranceBulkAddMembers(bulkCensusMgmtInputParam,
   groupCensusId)"
domain: insurance-developer-guide
topic: postinsurancebulkaddmembersbulkcensusmgmtinputparam-groupcensusid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.946Z
estimatedTokens: 313
keywords: [postInsuranceBulkAddMembers, bulkCensusMgmtInputParam, groupCensusId, Add, group, census, member, data, bulk, API, Version, Requires, Chatter, Usage]
---

# postInsuranceBulkAddMembers(bulkCensusMgmtInputParam,
   groupCensusId)

> Add or update group census member data in bulk.

# postInsuranceBulkAddMembers(bulkCensusMgmtInputParam, groupCensusId)

Add or update group census member data in bulk.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.InsuranceBulkCensusMgmtOutputRepresentation postInsuranceBulkAddMembers(ConnectApi.InsuranceBulkCensusMgmtInputRepresentation bulkCensusMgmtInputParam, String groupCensusId)

## Parameters

bulkCensusMgmtInputParam

Type: [ConnectApi.InsuranceBulkCensusMgmtInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_bulk_census_mgmt.htm "Input representation for managing employee census data in bulk.")

Input representation for the bulk census management process.

groupCensusId

Type: String

ID of the group census to process members for.

## Return Value

Type: [ConnectApi.InsuranceBulkCensusMgmtOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_bulk_census_mgmt.htm "Output representation for the bulk employee census management process.")

## Usage

This method corresponds to the /connect/insurance/census-management/group-censuses/groupCensusId/group-census-members/bulk-process REST API endpoint.

## Related Topics

- ConnectApi.InsuranceBulkCensusMgmtInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_bulk_census_mgmt.htm)
- ConnectApi.InsuranceBulkCensusMgmtOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_bulk_census_mgmt.htm)
