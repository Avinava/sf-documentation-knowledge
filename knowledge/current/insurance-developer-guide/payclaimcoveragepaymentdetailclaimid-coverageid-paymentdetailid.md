---
title: "PayClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId)"
domain: insurance-developer-guide
topic: payclaimcoveragepaymentdetailclaimid-coverageid-paymentdetailid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.880Z
estimatedTokens: 316
keywords: [PayClaimCoveragePaymentDetail, claimId, coverageId, paymentDetailId, Process, payment, specific, claim, coverage, detail, record, API, Version, Requires, Chatter]
---

# PayClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId)

> Process payment for a specific claim coverage payment detail record.

# PayClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId)

Process payment for a specific claim coverage payment detail record.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.PayClaimCoveragePaymentDetailRep PayClaimCoveragePaymentDetail(String claimId, String coverageId, String paymentDetailId)

## Parameters

claimId

Type: String

ID of the claim.

coverageId

Type: String

ID of the claim coverage.

paymentDetailId

Type: String

ID of the claim coverage payment detail to process.

## Return Value

Type: [ConnectApi.PayClaimCoveragePaymentDetailRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_pay_claim_coverage_payment_detail.htm "Output representation for a claim coverage payment detail operation.")

## Example

Use the PayClaimCoveragePaymentDetailCallable Apex class to trigger payment for a claim coverage payment detail record in an insurance claim. This class serves as an Apex wrapper for the Connect API endpoint: /connect/insurance/claims/{claimId}/coverages/{coverageId}/payment-details/{paymentDetailId}/pay. You can use this method to automate payment operations directly from Apex.

Class Definition

```

```

Usage Example

```

```

## Code Examples

```apex
public with sharing class PayClaimCoveragePaymentDetailCallable implements System.Callable {
    
    public Object call(String action, Map<String, Object> args) {
        // Retrieve the input and output maps from the arguments
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');
        
        // Check the action type
        if (action == 'payClaimCoveragePaymentDetail') {
            // Retrieve the required parameters from the input map
            String claimId = (String) inputMap.get('claimId');
            String claimCoverageId = (String) inputMap.get('claimCoverageId');
            String claimCoveragePaymentDetailId = (String) inputMap.get('claimCoveragePaymentDetailId');
            
            System.debug('Start of connect API call to pay claim coverage payment detail');
            System.debug('Claim ID: ' + claimId);
            System.debug('Claim Coverage ID: ' + claimCoverageId);
            System.debug('Claim Coverage Payment Detail ID: ' + claimCoveragePaymentDetailId);
            
            // Initialize the output representation
            ConnectApi.PayClaimCoveragePaymentDetailRep paymentDetailData;
            
            // Call the Connect API to pay claim coverage payment detail
            try {
                // Call the Connect API resource directly using the correct method signature
                // The endpoint is: /connect/insurance/claims/${claimId}/coverages/${coverageId}/payment-details/${paymentDetailId}/pay
                paymentDetailData = ConnectApi.InsuranceClaimFamily.payClaimCoveragePaymentDetail(
                    claimId, 
                    claimCoverageId, 
                    claimCoveragePaymentDetailId
                );
                
                System.debug('Claim coverage payment detail paid successfully: ' + paymentDetailData);
                
                // Put the payment detail data in the output map
                outputMap.put('paymentDetailData', paymentDetailData);
                outputMap.put('isPaid', paymentDetailData.isSuccess);
                
                // Check if there are any errors
                if (paymentDetailData.errors != null && !paymentDetailData.errors.isEmpty()) {
                    outputMap.put('errors', paymentDetailData.errors);
                    System.debug('Errors found: ' + paymentDetailData.errors);
                }
            }
            catch (Exception e) {
                System.debug('Error while paying claim coverage payment detail: ' + e.getMessage());
                outputMap.put('error', e.getMessage());
                outputMap.put('isPaid', false);
            }
            
            // Return the payment detail data
            return paymentDetailData;
        }
        
        // If the action is not recognized, return null
        return null;
    }
}
// Usage Example:
PayClaimCoveragePaymentDetailCallable callable = new PayClaimCoveragePaymentDetailCallable();
// Prepare the input arguments
Map<String, Object> input = new Map<String, Object>();
// Set the required parameters
input.put('claimId', '0Zkxx000000002ZCAQ');                    // Claim ID
input.put('claimCoverageId', '0kPxx000000000cEAA');           // Claim Coverage ID  
input.put('claimCoveragePaymentDetailId', '0l2xx000000002cAAA'); // Claim Coverage Payment Detail ID
// Prepare the output map
Map<String, Object> output = new Map<String, Object>();
// Prepare the args map
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);
// Call the 'payClaimCoveragePaymentDetail' action
Object result = callable.call('payClaimCoveragePaymentDetail', args);
// Check the result
if (result != null) {
    System.debug('Claim coverage payment detail processed successfully: ' + result);
    
    // Access the processed payment detail data
    ConnectApi.PayClaimCoveragePaymentDetailRep paymentDetailData = 
        (ConnectApi.PayClaimCoveragePaymentDetailRep) result;
    
    // Process the result as needed
    System.debug('Payment Detail Data: ' + paymentDetailData);
    
    // Check if the payment was successful
    if (paymentDetailData.isSuccess) {
        System.debug('Payment was successful');
    } else {
        System.debug('Payment failed');
        if (paymentDetailData.errors != null) {
            System.debug('Error details: ' + paymentDetailData.errors);
        }
    }
} else {
    System.debug('Error occurred: ' + output.get('error'));
}
```

```apex
PayClaimCoveragePaymentDetailCallable callable = new PayClaimCoveragePaymentDetailCallable();
// Prepare the input arguments
Map<String, Object> input = new Map<String, Object>();
// Set the required parameters
input.put('claimId', '0Zkxx000000002ZCAQ');                    // Claim ID
input.put('claimCoverageId', '0kPxx000000000cEAA');           // Claim Coverage ID  
input.put('claimCoveragePaymentDetailId', '0l2xx000000002cAAA'); // Claim Coverage Payment Detail ID
// Prepare the output map
Map<String, Object> output = new Map<String, Object>();
// Prepare the args map
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);
// Call the 'payClaimCoveragePaymentDetail' action
Object result = callable.call('payClaimCoveragePaymentDetail', args);
// Check the result
if (result != null) {
    System.debug('Claim coverage payment detail processed successfully: ' + result);
    
    // Access the processed payment detail data
    ConnectApi.PayClaimCoveragePaymentDetailRep paymentDetailData = 
        (ConnectApi.PayClaimCoveragePaymentDetailRep) result;
    
    // Process the result as needed
    System.debug('Payment Detail Data: ' + paymentDetailData);
    
    // Check if the payment was successful
    if (paymentDetailData.isSuccess) {
        System.debug('Payment was successful');
    } else {
        System.debug('Payment failed');
        if (paymentDetailData.errors != null) {
            System.debug('Error details: ' + paymentDetailData.errors);
        }
    }
} else {
    System.debug('Error occurred: ' + output.get('error'));
}
```

## Related Topics

- ConnectApi.PayClaimCoveragePaymentDetailRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_pay_claim_coverage_payment_detail.htm)
