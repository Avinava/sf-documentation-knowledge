---
title: "CancelClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId)"
domain: insurance-developer-guide
topic: cancelclaimcoveragepaymentdetailclaimid-coverageid-paymentdetailid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.842Z
estimatedTokens: 362
keywords: [CancelClaimCoveragePaymentDetail, claimId, coverageId, paymentDetailId, Cancel, payment, claim, coverage, detail, record, API, Version, Requires, Chatter]
---

# CancelClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId)

> Cancel payment for a claim coverage payment detail record.

# CancelClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId)

Cancel payment for a claim coverage payment detail record.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.CancelClaimCoveragePaymentDetailRep CancelClaimCoveragePaymentDetail(String claimId, String coverageId, String paymentDetailId)

## Parameters

claimId

Type: String

ID of the claim.

coverageId

Type: String

ID of the claim coverage record.

paymentDetailId

Type: String

ID of the claim coverage payment detail record.

## Return Value

Type: [ConnectApi.CancelClaimCoveragePaymentDetailRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_cancel_claim_coverage_payment_detail.htm "Output representation for the details of the cancel claim coverage payment detail record.")

## Example

Use this Apex sample to cancel a claim coverage payment detail record using the Cancel Claim Coverage Payment Detail API. This example shows how to invoke the Connect API method ConnectApi.InsuranceClaimFamily.CancelClaimCoveragePaymentDetail() and handle success and error responses in Apex.

Class Definition

This Apex example shows how to cancel a specific claim coverage payment detail for a given claim and coverage.

```

```

Usage Example

Use the CancelClaimCoveragePaymentDetailCallable class to execute the cancelClaimCoveragePaymentDetail action and process the result.

```

```

## Code Examples

```apex
public with sharing class CancelClaimCoveragePaymentDetailCallable implements System.Callable {
    
    public Object call(String action, Map<String, Object> args) {
        // Retrieve the input and output maps from the arguments
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');
        
        // Check the action type
        if (action == 'cancelClaimCoveragePaymentDetail') {
            // Retrieve the required parameters from the input map
            String claimId = (String) inputMap.get('claimId');
            String claimCoverageId = (String) inputMap.get('claimCoverageId');
            String claimCoveragePaymentDetailId = (String) inputMap.get('claimCoveragePaymentDetailId');
            
            System.debug('Start of connect API call to cancel claim coverage payment detail');
            System.debug('Claim ID: ' + claimId);
            System.debug('Claim Coverage ID: ' + claimCoverageId);
            System.debug('Claim Coverage Payment Detail ID: ' + claimCoveragePaymentDetailId);
            
            // Initialize the output representation
            ConnectApi.CancelClaimCoveragePaymentDetailRep paymentDetailData;
            
            try {
                // Call the Connect API resource using the correct method signature
                // Endpoint: /connect/insurance/claims/{claimId}/coverages/{coverageId}/payment-details/{paymentDetailId}/cancelPayment
                paymentDetailData = ConnectApi.InsuranceClaimFamily.cancelClaimCoveragePaymentDetail(
                    claimId, 
                    claimCoverageId, 
                    claimCoveragePaymentDetailId
                );
                
                System.debug('Claim coverage payment detail cancelled successfully: ' + paymentDetailData);
                
                // Add results to output map
                outputMap.put('paymentDetailData', paymentDetailData);
                outputMap.put('isCancelled', paymentDetailData.isSuccess);
                
                // Handle errors if present
                if (paymentDetailData.errors != null && !paymentDetailData.errors.isEmpty()) {
                    outputMap.put('errors', paymentDetailData.errors);
                    System.debug('Errors found: ' + paymentDetailData.errors);
                }
            } catch (Exception e) {
                System.debug('Error while canceling claim coverage payment detail: ' + e.getMessage());
                outputMap.put('error', e.getMessage());
                outputMap.put('isCancelled', false);
            }
            
            return paymentDetailData;
        }
        
        // Return null if the action is unrecognized
        return null;
    }
}
```

```apex
CancelClaimCoveragePaymentDetailCallable callable = new CancelClaimCoveragePaymentDetailCallable();

// Prepare the input arguments
Map<String, Object> input = new Map<String, Object>();
input.put('claimId', '0ZkXK00000000010AA');                    // Claim ID
input.put('claimCoverageId', '0kPXK00000000012AA');             // Claim Coverage ID  
input.put('claimCoveragePaymentDetailId', '0l2XK000000006TYAQ'); // Claim Coverage Payment Detail ID

// Prepare output and argument maps
Map<String, Object> output = new Map<String, Object>();
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);

// Call the 'cancelClaimCoveragePaymentDetail' action
Object result = callable.call('cancelClaimCoveragePaymentDetail', args);

// Check the result
if (result != null) {
    System.debug('Claim coverage payment detail processed successfully: ' + result);
    
    // Access the processed payment detail data
    ConnectApi.CancelClaimCoveragePaymentDetailRep paymentDetailData = 
        (ConnectApi.CancelClaimCoveragePaymentDetailRep) result;
    
    // Process the result
    System.debug('Payment Detail Data: ' + paymentDetailData);
    
    if (paymentDetailData.isSuccess) {
        System.debug('Cancellation was successful');
    } else {
        System.debug('Cancellation failed');
        if (paymentDetailData.errors != null) {
            System.debug('Error details: ' + paymentDetailData.errors);
        }
    }
} else {
    System.debug('Error occurred: ' + output.get('error'));
}
```

## Related Topics

- ConnectApi.CancelClaimCoveragePaymentDetailRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_cancel_claim_coverage_payment_detail.htm)
