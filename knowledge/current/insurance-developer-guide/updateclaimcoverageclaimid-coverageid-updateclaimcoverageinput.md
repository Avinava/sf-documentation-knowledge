---
title: "UpdateClaimCoverage(claimId, coverageId, UpdateClaimCoverageInput)"
domain: insurance-developer-guide
topic: updateclaimcoverageclaimid-coverageid-updateclaimcoverageinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.803Z
estimatedTokens: 329
keywords: [UpdateClaimCoverage, claimId, coverageId, UpdateClaimCoverageInput, specific, coverage, claim, API, Version, Requires, Chatter]
---

# UpdateClaimCoverage(claimId, coverageId, UpdateClaimCoverageInput)

> Update the details of a specific coverage in a claim.

# UpdateClaimCoverage(claimId, coverageId, UpdateClaimCoverageInput)

Update the details of a specific coverage in a claim.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.ClaimCoverageRepresentation UpdateClaimCoverage(String claimId, String coverageId, ConnectApi.UpdateClaimCoverageInputRepresentation UpdateClaimCoverageInput)

## Parameters

claimId

Type: String

ID of the claim.

coverageId

Type: String

ID of the claim coverage to update.

UpdateClaimCoverageInput

Type: [ConnectApi.UpdateClaimCoverageInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_update_claim_coverage.htm "Input representation for updating a claim coverage.")

Details of the claim coverage.

## Return Value

Type: [ConnectApi.ClaimCoverageRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_coverage.htm "Output representation for a claim coverage operation.")

## Example

The Apex example shows how to use the ConnectApi.InsuranceClaimFamily.UpdateClaimCoverage() method to update a claim coverage for an existing claim.

Class Definition

```

```

Usage Example

This example shows how to call the

```

```

class and include the required input data.

```

```

## Code Examples

```apex
public with sharing class UpdateClaimCoverageCallable implements System.Callable {


   public Object call(String action, Map<String, Object> args) {
       // Retrieve the input and output maps from the arguments
       Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
       Map<String, Object> outputMap = (Map<String, Object>) args.get('output');


       // Check the action type
       if (action == 'updateClaimCoverage') {
           // Retrieve the coverage input data from the input map
           ConnectApi.UpdateClaimCoverageInputRepresentation coverageInput = (ConnectApi.UpdateClaimCoverageInputRepresentation) inputMap.get('coverageInput');
           System.debug('Start of connect API call to update claim coverage');


           // Initialize the coverage output representation
           ConnectApi.ClaimCoverageRepresentation coverageData;


           // Call the Connect API to update the claim coverage
           try {
               coverageData = ConnectApi.ClaimFamily.updateClaimCoverage('0Zkxx00000000JNCAY', '0kPxx00000000RREAY', coverageInput);
               System.debug('Claim coverage updated successfully: ' + coverageData);


               // Put the coverage data in the output map
               outputMap.put('coverageData', coverageData);
           }
           catch (Exception e) {
               System.debug('Error while updating claim coverage: ' + e.getMessage());
               outputMap.put('error', e.getMessage());
           }


           // Return the coverage data
           return coverageData;
       }


       // If the action is not recognized, return null
       return null;
   }
}
```

```
UpdateClaimCoverageCallable
```

```apex
UpdateClaimCoverageCallable callable = new UpdateClaimCoverageCallable();


// Prepare the input arguments
Map<String, Object> input = new Map<String, Object>();


// Create and populate the UpdateClaimCoverageInputRepresentation object
ConnectApi.UpdateClaimCoverageInputRepresentation coverageInput = new ConnectApi.UpdateClaimCoverageInputRepresentation();


// Set optional fields for update
coverageInput.lossReserveAmount = 30000.00;
coverageInput.expenseReserveAmount = 3000.00;


// Set additional fields
Map<String, Object> additionalFields = new Map<String, Object>();
additionalFields.put('Description', 'Updated coverage for vehicle damage claim');
coverageInput.additionalFields = additionalFields;


// Add the coverageInput to the input map
input.put('coverageInput', coverageInput);


// Prepare the output map
Map<String, Object> output = new Map<String, Object>();


// Prepare the args map
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);


// Call the 'updateClaimCoverage' action
Object result = callable.call('updateClaimCoverage', args);


// Retrieve the coverage data from the result
ConnectApi.ClaimCoverageRepresentation coverageData = (ConnectApi.ClaimCoverageRepresentation) result;


// Output the coverage data to the debug log
System.debug('Updated Coverage Data: ' + JSON.serializePretty(coverageData));


// Check for errors in the output map
       if (output.containsKey('error')) {
       System.debug('Error: ' + output.get('error'));
       }
```

## Related Topics

- ConnectApi.UpdateClaimCoverageInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_update_claim_coverage.htm)
- ConnectApi.ClaimCoverageRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_coverage.htm)
