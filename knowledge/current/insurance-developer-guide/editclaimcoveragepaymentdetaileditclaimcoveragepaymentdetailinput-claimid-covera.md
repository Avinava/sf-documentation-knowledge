---
title: "EditClaimCoveragePaymentDetail(EditClaimCoveragePaymentDetailInput, claimId, coverageId, paymentDetailId)"
domain: insurance-developer-guide
topic: editclaimcoveragepaymentdetaileditclaimcoveragepaymentdetailinput-claimid-covera
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.872Z
estimatedTokens: 398
keywords: [EditClaimCoveragePaymentDetail, EditClaimCoveragePaymentDetailInput, claimId, coverageId, paymentDetailId, Modify, claim, coverage, payment, detail, record, API, Version, Requires, Chatter]
---

# EditClaimCoveragePaymentDetail(EditClaimCoveragePaymentDetailInput, claimId, coverageId, paymentDetailId)

> Modify a claim coverage payment detail record.

# EditClaimCoveragePaymentDetail(EditClaimCoveragePaymentDetailInput, claimId, coverageId, paymentDetailId)

Modify a claim coverage payment detail record.

## API Version

66.0

## Requires Chatter

No

## Signature

public static ConnectApi.EditClaimCoveragePaymentDetailRep EditClaimCoveragePaymentDetail(ConnectApi.EditClaimCvrPaymentDetailInputRep EditClaimCoveragePaymentDetailInput, String claimId, String coverageId, String paymentDetailId)

## Parameters

claimId

Type: String

ID of the claim.

coverageId

Type: String

ID of the coverage that applies to the claim.

EditClaimCoveragePaymentDetailInput

Type: [ConnectApi.EditClaimCvrPaymentDetailInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_edit_claim_cvr_payment_detail.htm "Input representation for editing claim coverage payment detail.")

Details to edit the claim coverage payment detail.

paymentDetailId

Type: String

ID of the claim coverage payment detail.

## Return Value

Type: [ConnectApi.EditClaimCoveragePaymentDetailRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_edit_claim_coverage_payment_detail.htm "Output representation for editing claim coverage payment detail.")

## Example

Class Definition

This is a sample Apex code to define the EditClaimCoveragePaymentDetail class before you can call it from Apex to edit a claim coverage payment detail.

```

```

Usage Example

This example shows how to call the EditClaimCoveragePaymentDetailCallable class and include the required input data.

```

```

## Code Examples

```apex
public with sharing class EditClaimCoveragePaymentDetailCallable implements System.Callable {

    public Object call(String action, Map<String, Object> args) {
        // Retrieve the input and output maps from the arguments
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');
        
        // Check the action type
        if (action == 'editClaimCoveragePaymentDetail') {
            // Retrieve the required parameters from the input map
            String claimId = (String) inputMap.get('claimId');
            String claimCoverageId = (String) inputMap.get('claimCoverageId');
            String paymentDetailId = (String) inputMap.get('paymentDetailId');
            
            ConnectApi.EditClaimCvrPaymentDetailInputRep editInputRep = 
                (ConnectApi.EditClaimCvrPaymentDetailInputRep) inputMap.get('EditClaimCoveragePaymentDetailInput');
            
            System.debug('Start of connect API call to edit claim coverage payment detail');
            System.debug('Claim ID: ' + claimId);
            System.debug('Claim Coverage ID: ' + claimCoverageId);
            System.debug('Payment Detail ID: ' + paymentDetailId);
            
            // Initialize the output representation
            ConnectApi.EditClaimCoveragePaymentDetailRep editResponse;
            
            // Call the Connect API to edit claim coverage payment detail
            try {
                // Call the Connect API resource directly
                // The endpoint is: /connect/insurance/claims/${claimId}/coverages/${coverageId}/payment-details/${paymentDetailId}
                editResponse = ConnectApi.InsuranceClaimFamily.EditClaimCoveragePaymentDetail(
                    editInputRep,
                    claimId, 
                    claimCoverageId,
                    paymentDetailId
                );
                
                System.debug('Edit claim coverage payment detail completed successfully: ' + editResponse);
                
                // Put the editResponse in the output map
                outputMap.put('editResponse', editResponse);
                outputMap.put('isSuccess', editResponse.isSuccess);
                
                // Check if there are any errors
                if (editResponse.errors != null && !editResponse.errors.isEmpty()) {
                    outputMap.put('errors', editResponse.errors);
                    System.debug('Errors found: ' + editResponse.errors);
                }
            }
            catch (Exception e) {
                System.debug('Error while editing claim coverage payment detail: ' + e.getMessage());
                outputMap.put('error', e.getMessage());
                outputMap.put('isSuccess', false);
            }
            
            return editResponse;
        }
        
        // If the action is not recognized, return null
        return null;
    }
}
```

```apex
PayExGratiaClaimCvrPaymentDetailCallable callable = new PayExGratiaClaimCvrPaymentDetailCallable();

// Prepare the input arguments
Map<String, Object> input = new Map<String, Object>();

// Set the required parameters
input.put('claimId', '0ZkSB0000001AVH0A2');                    // Claim ID
input.put('claimCoverageId', '0kPSB000000GHdu2AG');            // Claim Coverage ID
input.put('paymentDetailId', '0l2SB000000CLsMYAW');           // Payment Detail ID

// Create the input representation object
// First create a Map with the properties
Map<String, Object> payExGratiaInputMap = new Map<String, Object>();
payExGratiaInputMap.put('reason', 'Customer service goodwill payment');

// Convert the Map to ConnectApi.PayExGratiaClaimCvrPaymentDetailInputRep using JSON.deserialize
String jsonString = JSON.serialize(payExGratiaInputMap);
ConnectApi.PayExGratiaClaimCvrPaymentDetailInputRep payExGratiaInputRep = 
    (ConnectApi.PayExGratiaClaimCvrPaymentDetailInputRep) JSON.deserialize(jsonString, ConnectApi.PayExGratiaClaimCvrPaymentDetailInputRep.class);

input.put('PayExGratiaClaimCvrPaymentDetailInput', payExGratiaInputRep);

// Prepare the output map
Map<String, Object> output = new Map<String, Object>();

// Prepare the args map
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);

// Call the 'payExGratiaClaimCvrPaymentDetail' action
Object result = callable.call('payExGratiaClaimCvrPaymentDetail', args);

// Check the result
if (result != null) {
    System.debug('payExGratiaClaimCvrPaymentDetail processed successfully: ' + result);
    
    // Access the processed payment data
    ConnectApi.PayExGratiaClaimCvrPaymentDetailRep paymentData = 
        (ConnectApi.PayExGratiaClaimCvrPaymentDetailRep) result;
    
    // Process the result as needed
    System.debug('Pay Ex Gratia Payment Data: ' + paymentData);
    
    // Check if the payment was successful
    if (paymentData.isSuccess) {
        System.debug('Pay Ex Gratia was successful');
        System.debug('Paid Amount: ' + paymentData.paidAmount);
        System.debug('Claim Payment Summary ID: ' + paymentData.claimPaymentSummaryId);
        System.debug('Consumed Limit Count: ' + paymentData.consumedLimitCount);
        System.debug('Exceeded Amount: ' + paymentData.exceededAmount);
        System.debug('Exceeded Count: ' + paymentData.exceededCount);
        
        if (paymentData.insPolicyLimitTrackingIds != null && !paymentData.insPolicyLimitTrackingIds.isEmpty()) {
            System.debug('Insurance Policy Limit Tracking IDs: ' + paymentData.insPolicyLimitTrackingIds);
        }
    } else {
        System.debug('Pay Ex Gratia failed');
        if (paymentData.errors != null) {
            System.debug('Error details: ' + paymentData.errors);
        }
    }
} else {
    System.debug('Error occurred: ' + output.get('error'));
}
```

## Related Topics

- ConnectApi.EditClaimCvrPaymentDetailInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_edit_claim_cvr_payment_detail.htm)
- ConnectApi.EditClaimCoveragePaymentDetailRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_edit_claim_coverage_payment_detail.htm)
