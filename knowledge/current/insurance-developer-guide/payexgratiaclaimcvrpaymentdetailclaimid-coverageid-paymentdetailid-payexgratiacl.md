---
title: "PayExGratiaClaimCvrPaymentDetail(claimId, coverageId, paymentDetailId, PayExGratiaClaimCvrPaymentDetailInput)"
domain: insurance-developer-guide
topic: payexgratiaclaimcvrpaymentdetailclaimid-coverageid-paymentdetailid-payexgratiacl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.889Z
estimatedTokens: 420
keywords: [PayExGratiaClaimCvrPaymentDetail, claimId, coverageId, paymentDetailId, PayExGratiaClaimCvrPaymentDetailInput, Process, gratia, payment, claim, coverage, detail, record, API, Version, Requires]
---

# PayExGratiaClaimCvrPaymentDetail(claimId, coverageId, paymentDetailId, PayExGratiaClaimCvrPaymentDetailInput)

> Process an ex gratia payment for a claim coverage payment detail record.

# PayExGratiaClaimCvrPaymentDetail(claimId, coverageId, paymentDetailId, PayExGratiaClaimCvrPaymentDetailInput)

Process an ex gratia payment for a claim coverage payment detail record.

## API Version

66.0

## Requires Chatter

No

## Signature

public static ConnectApi.PayExGratiaClaimCvrPaymentDetailRep PayExGratiaClaimCvrPaymentDetail(String claimId, String coverageId, String paymentDetailId, ConnectApi.PayExGratiaClaimCvrPaymentDetailInputRep PayExGratiaClaimCvrPaymentDetailInput)

## Parameters

claimId

Type: String

ID of the claim.

coverageId

Type: String

ID of the coverage.

paymentDetailId

Type: String

ID of the payment detail.

PayExGratiaClaimCvrPaymentDetailInput

Type: [ConnectApi.PayExGratiaClaimCvrPaymentDetailInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_pay_ex_gratia_claim_cvr_payment_detail.htm "Input representation for the ex gratia payment for the claim coverage payment detail.")

Details to process the ex gratia payment.

## Return Value

Type: [ConnectApi.PayExGratiaClaimCvrPaymentDetailRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_pay_ex_gratia_claim_cvr_payment_detail.htm "Output representation for the details of the ex gratia payment that’s made for the claim coverage payment detail.")

## Example

Class Definition

This is a sample Apex code to define the PayExGratiaClaimCvrPaymentDetail class before you can call it from Apex to process ex gratia payment.

```

```

Usage Example

This example shows how to call the EditClaimCoveragePaymentDetailCallable class from Apex and include the required input data.

```

```

## Code Examples

```apex
public with sharing class PayExGratiaClaimCvrPaymentDetailCallable implements System.Callable {

    public Object call(String action, Map<String, Object> args) {
        // Retrieve the input and output maps from the arguments
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');
        
        // Check the action type
        if (action == 'payExGratiaClaimCvrPaymentDetail') {
            // Retrieve the required parameters from the input map
            String claimId = (String) inputMap.get('claimId');
            String claimCoverageId = (String) inputMap.get('claimCoverageId');
            String paymentDetailId = (String) inputMap.get('paymentDetailId');
            
            ConnectApi.PayExGratiaClaimCvrPaymentDetailInputRep payExGratiaInputRep = 
                (ConnectApi.PayExGratiaClaimCvrPaymentDetailInputRep) inputMap.get('PayExGratiaClaimCvrPaymentDetailInput');
            
            System.debug('Start of connect API call to pay ex gratia claim coverage payment detail');
            System.debug('Claim ID: ' + claimId);
            System.debug('Claim Coverage ID: ' + claimCoverageId);
            System.debug('Payment Detail ID: ' + paymentDetailId);
            
            // Initialize the output representation
            ConnectApi.PayExGratiaClaimCvrPaymentDetailRep payExGratiaResponse;
            
            // Call the Connect API to pay ex gratia
            try {
                // Call the Connect API resource directly
                // The endpoint is: /connect/insurance/claims/${claimId}/coverages/${coverageId}/payment-details/${paymentDetailId}/pay-ex-gratia
                payExGratiaResponse = ConnectApi.InsuranceClaimFamily.PayExGratiaClaimCvrPaymentDetail(
                    payExGratiaInputRep,
                    claimId, 
                    claimCoverageId,
                    paymentDetailId
                );
                
                System.debug('Pay ex gratia completed successfully: ' + payExGratiaResponse);
                
                // Put the payExGratiaResponse in the output map
                outputMap.put('payExGratiaResponse', payExGratiaResponse);
                outputMap.put('isSuccess', payExGratiaResponse.isSuccess);
                
                // Check if there are any errors
                if (payExGratiaResponse.errors != null && !payExGratiaResponse.errors.isEmpty()) {
                    outputMap.put('errors', payExGratiaResponse.errors);
                    System.debug('Errors found: ' + payExGratiaResponse.errors);
                }
            }
            catch (Exception e) {
                System.debug('Error while paying ex gratia: ' + e.getMessage());
                outputMap.put('error', e.getMessage());
                outputMap.put('isSuccess', false);
            }
            
            return payExGratiaResponse;
        }
        
        // If the action is not recognized, return null
        return null;
    }
}
```

```apex
EditClaimCoveragePaymentDetailCallable callable = new EditClaimCoveragePaymentDetailCallable();

// Prepare the input arguments
Map<String, Object> input = new Map<String, Object>();

// Set the required parameters
input.put('claimId', '0ZkSB0000001AVH0A2');                    // Claim ID
input.put('claimCoverageId', '0kPSB000000GHdu2AG');            // Claim Coverage ID
input.put('paymentDetailId', '0l2SB000000CLsMYAW');           // Payment Detail ID

// Create the input representation object
// First create a Map with the properties you want to update
Map<String, Object> editInputMap = new Map<String, Object>();

// Set the fields you want to edit (all fields are optional)
editInputMap.put('claimedAmount', 5000.00);                     // Update claimed amount
editInputMap.put('adjustedAmount', 4500.00);                   // Update adjusted amount
editInputMap.put('name', 'Updated Payment Detail Name');       // Update name
editInputMap.put('description', 'Updated description for payment detail'); // Update description
editInputMap.put('limitUnitCount', 10);                        // Update limit unit count
editInputMap.put('status', 'Paid');                            // Update status
// editInputMap.put('recipientId', '003000000000000AAA');      // Update recipient ID if needed
// editInputMap.put('additionalFields', new Map<String, Object>()); // Additional fields if needed

// Convert the Map to ConnectApi.EditClaimCvrPaymentDetailInputRep using JSON.deserialize
String jsonString = JSON.serialize(editInputMap);
ConnectApi.EditClaimCvrPaymentDetailInputRep editInputRep = 
    (ConnectApi.EditClaimCvrPaymentDetailInputRep) JSON.deserialize(jsonString, ConnectApi.EditClaimCvrPaymentDetailInputRep.class);

input.put('EditClaimCoveragePaymentDetailInput', editInputRep);

// Prepare the output map
Map<String, Object> output = new Map<String, Object>();

// Prepare the args map
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);

// Call the 'editClaimCoveragePaymentDetail' action
Object result = callable.call('editClaimCoveragePaymentDetail', args);

// Check the result
if (result != null) {
    System.debug('editClaimCoveragePaymentDetail processed successfully: ' + result);
    
    // Access the processed edit data
    ConnectApi.EditClaimCoveragePaymentDetailRep editData = 
        (ConnectApi.EditClaimCoveragePaymentDetailRep) result;
    
    // Process the result as needed
    System.debug('Edit Claim Coverage Payment Detail Data: ' + editData);
    
    // Check if the edit was successful
    if (editData.isSuccess) {
        System.debug('Edit Claim Coverage Payment Detail was successful');
        System.debug('Adjusted Amount: ' + editData.adjustedAmount);
        System.debug('Adjusted Reason: ' + editData.adjustedReason);
        
        if (editData.insurancePolicyLimitTrackingIds != null && !editData.insurancePolicyLimitTrackingIds.isEmpty()) {
            System.debug('Insurance Policy Limit Tracking IDs: ' + editData.insurancePolicyLimitTrackingIds);
        }
    } else {
        System.debug('Edit Claim Coverage Payment Detail failed');
        if (editData.errors != null) {
            System.debug('Error details: ' + editData.errors);
        }
    }
} else {
    System.debug('Error occurred: ' + output.get('error'));
}
```

## Related Topics

- ConnectApi.PayExGratiaClaimCvrPaymentDetailInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_pay_ex_gratia_claim_cvr_payment_detail.htm)
- ConnectApi.PayExGratiaClaimCvrPaymentDetailRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_pay_ex_gratia_claim_cvr_payment_detail.htm)
