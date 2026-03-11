---
title: "bulkUpdateClauseVersions(bulkUpdateInputs)"
domain: omnistudio
topic: bulkupdateclauseversionsbulkupdateinputs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.562Z
keywords: [bulkUpdateClauseVersions, bulkUpdateInputs, API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Example]
---

# bulkUpdateClauseVersions(bulkUpdateInputs)

# bulkUpdateClauseVersions(bulkUpdateInputs)

Asynchronously bulk update the status of all clause versions for the specified regulation version or policy version.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.ComplianceBulkUpdateResponse bulkUpdateClauseVersions(ConnectApi.ComplianceBulkUpdateInput bulkUpdateInputs)

## Parameters

bulkUpdateInputs

Type: [ConnectApi.ComplianceBulkUpdateInput](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_compliance_bulk_update.htm "Input representation to asynchronously bulk update the status of the clause version records.")

Details to bulk update the clause version records.

## Return Value

Type: [ConnectApi.ComplianceBulkUpdateResponse](atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_compliance_bulk_update_response.htm "Output representation of the details to asynchronously bulk update the status of the clause version records.")

## Usage

To use this method, you must have either Compliance Admin or Compliance User permission set license.

## Example

```

```