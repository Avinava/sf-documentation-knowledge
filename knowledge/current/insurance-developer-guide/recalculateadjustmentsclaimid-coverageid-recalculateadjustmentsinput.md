---
title: "RecalculateAdjustments(claimId, coverageId, RecalculateAdjustmentsInput)"
domain: insurance-developer-guide
topic: recalculateadjustmentsclaimid-coverageid-recalculateadjustmentsinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.904Z
estimatedTokens: 369
keywords: [RecalculateAdjustments, claimId, coverageId, RecalculateAdjustmentsInput, Recalculate, adjustments, payment, API, Version, Requires, Chatter]
---

# RecalculateAdjustments(claimId, coverageId, RecalculateAdjustmentsInput)

> Recalculate adjustments for existing payment details.

# RecalculateAdjustments(claimId, coverageId, RecalculateAdjustmentsInput)

Recalculate adjustments for existing payment details.

## API Version

66.0

## Requires Chatter

No

## Signature

public static ConnectApi.CalculateAdjustmentsRepresentation RecalculateAdjustments(String claimId, String coverageId, ConnectApi.RecalculateAdjustmentsInputRep RecalculateAdjustmentsInput)

## Parameters

claimId

Type: String

ID of the claim for which the adjustments must be recalculated.

coverageId

Type: String

ID of the claim coverage.

RecalculateAdjustmentsInput

Type: [ConnectApi.RecalculateAdjustmentsInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_recalculate_adjustments.htm "Input representation for recalculating the adjustments for existing payment details.")

Details to recalculate the adjustments.

## Return Value

Type: [ConnectApi.CalculateAdjustmentsRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_calculate_adjustments.htm "Output representation of the details for calculating the adjustments for the claim loss item.")

## Example

Class Definition

This is a sample Apex code to define the RecalculateAdjustments class before you can call it from Apex to recalculate payment adjustments.

```

```

Usage Example

This example shows how to call the RecalculateAdjustmentsCallable class from Apex and include the required input data.

```

```

## Code Examples

```apex
public with sharing class RecalculateAdjustmentsCallable implements System.Callable {

    public Object call(String action, Map<String, Object> args) {
        // Retrieve the input and output maps from the arguments
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');
        
        // Check the action type
        if (action == 'recalculateAdjustments') {
            // Retrieve the required parameters from the input map
            String claimId = (String) inputMap.get('claimId');
            String claimCoverageId = (String) inputMap.get('claimCoverageId');
            
            ConnectApi.RecalculateAdjustmentsInputRep recalculateAdjustmentInputRep = 
                (ConnectApi.RecalculateAdjustmentsInputRep) inputMap.get('RecalculateAdjustmentsInput');
            
            System.debug('Start of connect API call to recalculate adjustments');
            System.debug('Claim ID: ' + claimId);
            System.debug('Claim Coverage ID: ' + claimCoverageId);
            
            // Initialize the output representation
            ConnectApi.CalculateAdjustmentsRepresentation reCalcAdjResponse;
            
            // Call the Connect API to recalculate adjustments
            try {
                // Call the Connect API resource directly
                // The endpoint is: /connect/insurance/claims/${claimId}/coverages/${coverageId}/recalculate-adjustments
                reCalcAdjResponse = ConnectApi.InsuranceClaimFamily.RecalculateAdjustments(
                    recalculateAdjustmentInputRep,
                    claimId, 
                    claimCoverageId
                );
                
                System.debug('Recalculate adjustments completed successfully: ' + reCalcAdjResponse);
                
                // Put the reCalcAdjResponse in the output map
                outputMap.put('reCalcAdjResponse', reCalcAdjResponse);
                outputMap.put('isSuccess', reCalcAdjResponse.isSuccess);
                
                // Check if there are any errors
                if (reCalcAdjResponse.errors != null && !reCalcAdjResponse.errors.isEmpty()) {
                    outputMap.put('errors', reCalcAdjResponse.errors);
                    System.debug('Errors found: ' + reCalcAdjResponse.errors);
                }
            }
            catch (Exception e) {
                System.debug('Error while recalculating adjustments: ' + e.getMessage());
                outputMap.put('error', e.getMessage());
                outputMap.put('isSuccess', false);
            }
            
            return reCalcAdjResponse;
        }
        
        // If the action is not recognized, return null
        return null;
    }
}
```

```apex
RecalculateAdjustmentsCallable callable = new RecalculateAdjustmentsCallable();

// Prepare the input arguments
Map<String, Object> input = new Map<String, Object>();

// Set the required parameters
input.put('claimId', '0ZkSB0000001AVH0A2');                    // Claim ID
input.put('claimCoverageId', '0kPSB000000GHdu2AG');  

// Create the input representation object
// First create a Map with the properties
Map<String, Object> recalculateAdjustmentInputMap = new Map<String, Object>();
recalculateAdjustmentInputMap.put('paymentDetailId', '0l2SB000000CLsMYAW');
recalculateAdjustmentInputMap.put('claimedAmount', 4252.35);

// Convert the Map to ConnectApi.RecalculateAdjustmentsInputRep using JSON.deserialize
String jsonString = JSON.serialize(recalculateAdjustmentInputMap);
ConnectApi.RecalculateAdjustmentsInputRep recalculateAdjustmentInputRep = 
    (ConnectApi.RecalculateAdjustmentsInputRep) JSON.deserialize(jsonString, ConnectApi.RecalculateAdjustmentsInputRep.class);

input.put('RecalculateAdjustmentsInput', recalculateAdjustmentInputRep);

// Prepare the output map
Map<String, Object> output = new Map<String, Object>();

// Prepare the args map
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);

// Call the 'recalculateAdjustments' action
Object result = callable.call('recalculateAdjustments', args);

// Check the result
if (result != null) {
    System.debug('recalculateAdjustments processed successfully: ' + result);
    
    // Access the processed adjustment data
    ConnectApi.CalculateAdjustmentsRepresentation reCalcAdjResponse = 
        (ConnectApi.CalculateAdjustmentsRepresentation) result;
    
    // Process the result as needed
    System.debug('recalc Adjustment response: ' + reCalcAdjResponse);
    
    // Check if the response was successful
    if (reCalcAdjResponse.isSuccess) {
        System.debug('recalculateAdjustment was successful');
    } else {
        System.debug('recalculateAdjustment failed');
        if (reCalcAdjResponse.errors != null) {
            System.debug('Error details: ' + reCalcAdjResponse.errors);
        }
    }
} else {
    System.debug('Error occurred: ' + output.get('error'));
}
```

## Related Topics

- ConnectApi.RecalculateAdjustmentsInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_recalculate_adjustments.htm)
- ConnectApi.CalculateAdjustmentsRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_calculate_adjustments.htm)
