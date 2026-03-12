---
title: "DeleteClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId)"
domain: insurance-developer-guide
topic: deleteclaimcoveragepaymentdetailclaimid-coverageid-paymentdetailid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.864Z
estimatedTokens: 260
keywords: [DeleteClaimCoveragePaymentDetail, claimId, coverageId, paymentDetailId, claim, coverage, payment, detail, record, API, Version, Requires, Chatter]
---

# DeleteClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId)

> Delete a claim coverage payment detail record.

# DeleteClaimCoveragePaymentDetail(claimId, coverageId, paymentDetailId)

Delete a claim coverage payment detail record.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.DeleteClaimCoveragePaymentDetailRep DeleteClaimCoveragePaymentDetail(String claimId, String coverageId, String paymentDetailId)

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

Type: [ConnectApi.DeleteClaimCoveragePaymentDetailRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_delete_claim_coverage_payment_detail.htm "Output representation for the Delete Claim Coverage Payment Detail resource.")

## Example

Use the DeleteClaimCoveragePaymentDetailCallable Apex class to delete an existing claim coverage payment detail record for a specified claim and coverage.

Class Definition

```

```

Usage Example

```

```

## Code Examples

```apex
public with sharing class DeleteClaimCoveragePaymentDetailCallable implements System.Callable {
    
    public Object call(String action, Map<String, Object> args) {
        // Retrieve the input and output maps from the arguments
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');
        
        // Check the action type
        if (action == 'deleteClaimCoveragePaymentDetail') {
            // Retrieve the required parameters from the input map
            String claimId = (String) inputMap.get('claimId');
            String claimCoverageId = (String) inputMap.get('claimCoverageId');
            String claimCoveragePaymentDetailId = (String) inputMap.get('claimCoveragePaymentDetailId');
            
            System.debug('Start of connect API call to delete claim coverage payment detail');
            System.debug('Claim ID: ' + claimId);
            System.debug('Claim Coverage ID: ' + claimCoverageId);
            System.debug('Claim Coverage Payment Detail ID: ' + claimCoveragePaymentDetailId);
            
            // Initialize the output representation
            ConnectApi.DeleteClaimCoveragePaymentDetailRep paymentDetailData;
            
            // Call the Connect API to delete claim coverage payment detail
            try {
                // Call the Connect API resource directly using the correct method signature
                // The endpoint is: /connect/insurance/claims/${claimId}/coverages/${coverageId}/payment-details/${paymentDetailId}/delete
                paymentDetailData = ConnectApi.InsuranceClaimFamily.deleteClaimCoveragePaymentDetail(
                    claimId, 
                    claimCoverageId, 
                    claimCoveragePaymentDetailId
                );
                
                System.debug('Claim coverage payment detail deleted successfully: ' + paymentDetailData);
                
                // Put the payment detail data in the output map
                outputMap.put('paymentDetailData', paymentDetailData);
                outputMap.put('isDeleted', paymentDetailData.isSuccess);
                
                // Check if there are any errors
                if (paymentDetailData.errors != null && !paymentDetailData.errors.isEmpty()) {
                    outputMap.put('errors', paymentDetailData.errors);
                    System.debug('Errors found: ' + paymentDetailData.errors);
                }
            }
            catch (Exception e) {
                System.debug('Error while deleting claim coverage payment detail: ' + e.getMessage());
                outputMap.put('error', e.getMessage());
                outputMap.put('isDeleted', false);
            }
            
            // Return the payment detail data
            return paymentDetailData;
        }
        
        // If the action is not recognized, return null
        return null;
    }
}
```

```apex
DeleteClaimCoveragePaymentDetailCallable callable = new DeleteClaimCoveragePaymentDetailCallable();
// Prepare the input arguments
Map<String, Object> input = new Map<String, Object>();
// Set the required parameters
input.put('claimId', '0ZkXK00000000010AA');                    // Claim ID
input.put('claimCoverageId', '0kPXK00000000012AA');           // Claim Coverage ID  
input.put('claimCoveragePaymentDetailId', '0l2XK000000006TYAQ'); // Claim Coverage Payment Detail ID
// Prepare the output map
Map<String, Object> output = new Map<String, Object>();
// Prepare the args map
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);
// Call the 'deleteClaimCoveragePaymentDetail' action
Object result = callable.call('deleteClaimCoveragePaymentDetail', args);
// Check the result
if (result != null) {
    System.debug('Claim coverage payment detail processed successfully: ' + result);
    
    // Access the processed payment detail data
    ConnectApi.DeleteClaimCoveragePaymentDetailRep paymentDetailData = 
        (ConnectApi.DeleteClaimCoveragePaymentDetailRep) result;
    
    // Process the result as needed
    System.debug('Payment Detail Data: ' + paymentDetailData);
    
    // Check if the payment was successful
    if (paymentDetailData.isSuccess) {
        System.debug('Deletion was successful');
    } else {
        System.debug('Deletion failed');
        if (paymentDetailData.errors != null) {
            System.debug('Error details: ' + paymentDetailData.errors);
        }
    }
} else {
    System.debug('Error occurred: ' + output.get('error'));
}
```

## Related Topics

- ConnectApi.DeleteClaimCoveragePaymentDetailRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_delete_claim_coverage_payment_detail.htm)
