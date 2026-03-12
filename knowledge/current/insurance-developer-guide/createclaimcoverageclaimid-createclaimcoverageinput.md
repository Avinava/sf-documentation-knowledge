---
title: "CreateClaimCoverage(claimId, CreateClaimCoverageInput)"
domain: insurance-developer-guide
topic: createclaimcoverageclaimid-createclaimcoverageinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.781Z
estimatedTokens: 317
keywords: [CreateClaimCoverage, claimId, CreateClaimCoverageInput, claim, coverage, record, API, Version, Requires, Chatter]
---

# CreateClaimCoverage(claimId, CreateClaimCoverageInput)

> Create a claim coverage record.

# CreateClaimCoverage(claimId, CreateClaimCoverageInput)

Create a claim coverage record.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.ClaimCoverageRepresentation CreateClaimCoverage(String claimId, ConnectApi.CreateClaimCoverageInputRepresentation CreateClaimCoverageInput)

## Parameters

claimId

Type: String

ID of the claim to add coverage to.

CreateClaimCoverageInput

Type: [ConnectApi.CreateClaimCoverageInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_create_claim_coverage.htm "Input representation for creating a claim coverage.")

Object that contains the details to create the claim coverage.

## Return Value

Type: [ConnectApi.ClaimCoverageRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_coverage.htm "Output representation for a claim coverage operation.")

## Example

The Apex example shows how to use the ConnectApi.InsuranceClaimFamily.CreateClaimCoverage() method to create a claim coverage for an existing claim.

Class Definition

```

```

Usage Example

This example shows how to call the CreateClaimCoverageCallable class and include the required input data.

```

```

## Code Examples

```apex
public with sharing class CreateClaimCoverageCallable implements System.Callable {

    public Object call(String action, Map<String, Object> args) {
        // Retrieve the input and output maps from the arguments
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');

        // Check the action type
        if (action == 'createClaimCoverage') {

            // Retrieve the coverage input data from the input map
            ConnectApi.CreateClaimCoverageInputRepresentation coverageInput =
                (ConnectApi.CreateClaimCoverageInputRepresentation) inputMap.get('coverageInput');

            System.debug('Start of Connect API call to create claim coverage');

            // Initialize the coverage output representation
            ConnectApi.ClaimCoverageRepresentation coverageData;

            try {
                // Call the Connect API to create the claim coverage
                // Replace the claim ID with the appropriate value for your org
                coverageData = ConnectApi.ClaimFamily.createClaimCoverage(
                    '0Zkxx00000000JNCAY', // Claim ID
                    coverageInput
                );

                System.debug('Claim coverage created successfully: ' + coverageData);

                // Put the coverage data in the output map
                outputMap.put('coverageData', coverageData);
            } catch (Exception e) {
                System.debug('Error while creating claim coverage: ' + e.getMessage());
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

```apex
CreateClaimCoverageCallable callable = new CreateClaimCoverageCallable();

// Prepare the input arguments
Map<String, Object> input = new Map<String, Object>();

// Create and populate the CreateClaimCoverageInputRepresentation object
ConnectApi.CreateClaimCoverageInputRepresentation coverageInput =
    new ConnectApi.CreateClaimCoverageInputRepresentation();

// Set required fields
coverageInput.claimParticipantId = '0aSxx00000000CvEAI';
coverageInput.claimItemId = '0dqxx00000000McAAI';
coverageInput.insurancePolicyAssetId = '0YWxx00000000P5GAI';
coverageInput.insurancePolicyCoverageId = '0cYxx000000012GEAQ';
coverageInput.name = 'Apex Cov Test';

// Set optional fields
coverageInput.lossReserveAmount = 25000.00;
coverageInput.expenseReserveAmount = 2500.00;
coverageInput.reserveProcessingMode = 'CoverageReserve';
coverageInput.currencyIsoCode = 'USD';

// Set additional fields
Map<String, Object> additionalFields = new Map<String, Object>();
additionalFields.put('Description', 'Coverage for vehicle damage claim');
coverageInput.additionalFields = additionalFields;

// Add the coverageInput to the input map
input.put('coverageInput', coverageInput);

// Prepare the output map
Map<String, Object> output = new Map<String, Object>();

// Prepare the args map
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);

// Call the 'createClaimCoverage' action
Object result = callable.call('createClaimCoverage', args);

// Retrieve the coverage data from the result
ConnectApi.ClaimCoverageRepresentation coverageData =
    (ConnectApi.ClaimCoverageRepresentation) result;

// Log the created coverage data
System.debug('Coverage Data: ' + JSON.serializePretty(coverageData));

// Check for errors in the output map
if (output.containsKey('error')) {
    System.debug('Error: ' + output.get('error'));
}
```

## Related Topics

- ConnectApi.CreateClaimCoverageInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_create_claim_coverage.htm)
- ConnectApi.ClaimCoverageRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_coverage.htm)
