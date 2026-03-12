---
title: "bulkUpdateClauseVersions(bulkUpdateInputs)"
domain: omnistudio
topic: bulkupdateclauseversionsbulkupdateinputs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:47.418Z
estimatedTokens: 281
keywords: [bulkUpdateClauseVersions, bulkUpdateInputs, Asynchronously, bulk, update, status, clause, versions, specified, regulation, version, policy, version., API, Version, Requires, Chatter, Usage, Example]
---

# bulkUpdateClauseVersions(bulkUpdateInputs)

> Asynchronously bulk update the status of all clause versions for the specified
    regulation version or policy version.

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

## Code Examples

```apex
public class BulkUpdateClauseVersions {
    
    public void bulkUpdate() {
        
        ConnectApi.ComplianceBulkUpdateInput input = new ConnectApi.ComplianceBulkUpdateInput();
        input.targetStatus = ConnectApi.BulkUpdateTargetStatusEnum.Published;
        input.recordId = '1EiSG0000000PzJ0AU';
        
        // Call API
        ConnectApi.ComplianceBulkUpdateResponse response = ConnectApi.IndustriesCompliance.bulkUpdateClauseVersions(input);
        System.debug('Response**********' + response);
    }
}

// Execute the method
BulkUpdateClauseVersions bulkUpdates = new BulkUpdateClauseVersions();
bulkUpdates.bulkUpdate();
```

## Related Topics

- ConnectApi.ComplianceBulkUpdateInput (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_input_compliance_bulk_update.htm)
- ConnectApi.ComplianceBulkUpdateResponse (atlas.en-us.industries_reference.meta/industries_reference/apex_connectapi_output_compliance_bulk_update_response.htm)
