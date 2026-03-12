---
title: "CreateClaimCoveragePaymentDetail(CreateClaimCoveragePaymentDetailInput, claimId,
   coverageId)"
domain: insurance-developer-guide
topic: createclaimcoveragepaymentdetailcreateclaimcoveragepaymentdetailinput-claimid-co
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.850Z
estimatedTokens: 325
keywords: [CreateClaimCoveragePaymentDetail, CreateClaimCoveragePaymentDetailInput, claimId, coverageId, claim, coverage, payment, detail, record, API, Version, Requires, Chatter]
---

# CreateClaimCoveragePaymentDetail(CreateClaimCoveragePaymentDetailInput, claimId,
   coverageId)

> Create a claim coverage payment detail record.

# CreateClaimCoveragePaymentDetail(CreateClaimCoveragePaymentDetailInput, claimId, coverageId)

Create a claim coverage payment detail record.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.CreateClaimCoveragePaymentDetailRep CreateClaimCoveragePaymentDetail(ConnectApi.CreateClaimCovPaymentDetailInputRep CreateClaimCoveragePaymentDetailInput, String claimId, String coverageId)

## Parameters

CreateClaimCoveragePaymentDetailInput

Type: [ConnectApi.CreateClaimCovPaymentDetailInputRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_create_claim_coverage_payment_detail.htm "Input representation for creating a claim coverage payment detail record.")

Representation details to create the claim coverage payment detail record.

claimId

Type: String

ID of the claim.

coverageId

Type: String

ID of the claim coverage.

## Return Value

Type: [ConnectApi.CreateClaimCoveragePaymentDetailRep](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_create_claim_coverage_payment_detail.htm "Output representation for the details of the create claim coverage payment detail record.")

## Example

Here's an example of how to invoke the Create CCPD API by using Apex.

```

```

## Code Examples

```apex
public with sharing class CreateCCPDIPTest3 implements System.Callable {
    public Object call(String action, Map<String, Object> args) {
        System.debug('>>> Action: ' + action);
        System.debug('>>> Args: ' + JSON.serializePretty(args));

        Map<String, Object> bodyMap = new Map<String, Object>();

        // Extract 'input' and 'output'
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');

        if (inputMap != null) {
            if (inputMap.containsKey('claimId') && inputMap.get('claimId') != null) {
                bodyMap.put('claimId', String.valueOf(inputMap.get('claimId')));
            }
            if (inputMap.containsKey('claimCoverageId') && inputMap.get('claimCoverageId') != null) {
                bodyMap.put('claimCoverageId', String.valueOf(inputMap.get('claimCoverageId')));
            }
            if (inputMap.containsKey('claimedAmount') && inputMap.get('claimedAmount') != null) {
                bodyMap.put('claimedAmount', String.valueOf(inputMap.get('claimedAmount')));
            }
            if (inputMap.containsKey('coveragePaymentType') && inputMap.get('coveragePaymentType') != null) {
                bodyMap.put('coveragePaymentType', String.valueOf(inputMap.get('coveragePaymentType')));
            }
            if (inputMap.containsKey('adjustedAmount') && inputMap.get('adjustedAmount') != null) {
                bodyMap.put('adjustedAmount', String.valueOf(inputMap.get('adjustedAmount')));
            }
        } else {
            System.debug('⚠️ No input map found in args');
        }

        String jsonBody = JSON.serialize(bodyMap);
        System.debug('>>> Final JSON Body: ' + jsonBody);

        String str = postDataToExternalApi(bodyMap, jsonBody);
        return outputMap.put('response', str);
    }

    public static String postDataToExternalApi(Map<String, Object> bodyMap, String jsonBody) {
        HttpRequest request = new HttpRequest();
        Http http = new Http();

        String claimId = (String) bodyMap.get('claimId');
        String claimCoverageId = (String) bodyMap.get('claimCoverageId');
        
        bodyMap.remove('claimId');
        bodyMap.remove('claimCoverageId');

        jsonBody = JSON.serialize(bodyMap);
        System.debug('>>> Final JSON Body: ' + jsonBody);

        if (String.isBlank(claimId) || String.isBlank(claimCoverageId)) {
            String errorMsg = 'Missing required fields - claimId: ' + claimId + ', claimCoverageId: ' + claimCoverageId;
            System.debug('⚠️ ' + errorMsg);
            return 'Error: ' + errorMsg;
        }

        // ✅ Build endpoint dynamically
        String endpoint = 'callout:invokeUW/services/data/v65.0/connect/insurance/claims/' 
                          + claimId + '/coverages/' + claimCoverageId + '/payment-details';
        System.debug('>>> Dynamic Endpoint: ' + endpoint);

        request.setEndpoint(endpoint);
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json');
        request.setTimeout(120000); // 2 mins
        request.setBody(jsonBody);

        try {
            HttpResponse response = http.send(request);

            System.debug('>>> Status Code: ' + response.getStatusCode());
            System.debug('>>> Response Body: ' + response.getBody());

            return response.getBody();
        } catch (Exception e) {
            System.debug('🔥 Exception: ' + e.getMessage());
            return 'Exception: ' + e.getMessage();
        }
    }

    // Sample test method
    public static void testCreateCCPD() {
        Map<String, Object> args = new Map<String, Object>();
        Map<String, Object> input = new Map<String, Object>();
        Map<String, Object> output = new Map<String, Object>();

        input.put('claimId', '0Zkxx000000009hCAA');
        input.put('claimCoverageId', '0kPxx000000006TEAQ');
        input.put('claimedAmount', '1200.0');
        input.put('coveragePaymentType', 'Loss');
        input.put('adjustedAmount', '1200.0');

        args.put('input', input);
        args.put('output', output);

        CreateCCPDIPTest1 test = new CreateCCPDIPTest1();
        test.call('createCCPD', args);
    }
}
```

## Related Topics

- ConnectApi.CreateClaimCovPaymentDetailInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_create_claim_coverage_payment_detail.htm)
- ConnectApi.CreateClaimCoveragePaymentDetailRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_create_claim_coverage_payment_detail.htm)
