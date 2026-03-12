---
title: "CalculateAdjustments(CalculateAdjustmentsInput, claimId, coverageId)"
domain: insurance-developer-guide
topic: calculateadjustmentscalculateadjustmentsinput-claimid-coverageid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.835Z
estimatedTokens: 324
keywords: [CalculateAdjustments, CalculateAdjustmentsInput, claimId, coverageId, Calculate, adjustments, loss, item, determine, final, payable, amount, specific, claim, API]
---

# CalculateAdjustments(CalculateAdjustmentsInput, claimId, coverageId)

> Calculate adjustments for a loss item and determine the final payable amount for a
  specific claim loss item.

# CalculateAdjustments(CalculateAdjustmentsInput, claimId, coverageId)

Calculate adjustments for a loss item and determine the final payable amount for a specific claim loss item.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.CalculateAdjustmentsRepresentation CalculateAdjustments(ConnectApi.CalculateAdjustmentsInputRepresentation CalculateAdjustmentsInput, String claimId, String coverageId)

## Parameters

CalculateAdjustmentsInput

Type: [ConnectApi.CalculateAdjustmentsInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_calculate_adjustments.htm "Input representation for calculating adjustments for claim loss items.")

Details for calculating adjustments.

claimId

Type: String

ID of the claim for which the adjustments must be calculated.

coverageId

Type: String

ID of the claim coverage.

## Return Value

Type: [ConnectApi.CalculateAdjustmentsRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_calculate_adjustments.htm "Output representation of the details for calculating the adjustments for the claim loss item.")

## Example

Here's an example of how to invoke the Calculate Adjustments API by using Apex.

```

```

## Code Examples

```apex
public with sharing class CalculateAdjustments implements System.Callable {
    public Object call(String action, Map<String, Object> args) {

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
        } else {
            System.debug('No input map found in args');
        }

        String jsonBody = JSON.serialize(bodyMap);
        System.debug('Final JSON Body: ' + jsonBody);

        String str = postDataToExternalApi(bodyMap, jsonBody);
        return outputMap.put('API Response: ', str);
    }

    public static String postDataToExternalApi(Map<String, Object> bodyMap, String jsonBody) {
        HttpRequest request = new HttpRequest();
        Http http = new Http();

        String claimId = (String) bodyMap.get('claimId');
        String claimCoverageId = (String) bodyMap.get('claimCoverageId');
        String claimedAmount = (String) bodyMap.get('claimedAmount');
        
        bodyMap.remove('claimId');
        bodyMap.remove('claimCoverageId');

        jsonBody = JSON.serialize(bodyMap);

        if (String.isBlank(claimId) || String.isBlank(claimCoverageId) || String.isBlank(claimedAmount)) {
            String errorMsg = 'Missing required fields - claimId: ' + claimId + ', claimCoverageId: ' + claimCoverageId + ', claimedAmount: ' + claimedAmount;
            System.debug('Validation failed: ' + errorMsg);
            return 'Error: ' + errorMsg;
        }

        // Build endpoint dynamically
        String endpoint = 'callout:invokeUW/services/data/v65.0/connect/insurance/claims/' 
                          + claimId + '/coverages/' + claimCoverageId + '/calculate-adjustments';
        System.debug('>>> Dynamic Endpoint: ' + endpoint);

        request.setEndpoint(endpoint);
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json');
        request.setTimeout(120000); // 2 mins
        request.setBody(jsonBody);

        try {
            HttpResponse response = http.send(request);

            System.debug('Status Code: ' + response.getStatusCode());
            System.debug('Response Body: ' + response.getBody());

            return response.getBody();
        } catch (Exception e) {
            System.debug('Exception: ' + e.getMessage());
            return 'Exception: ' + e.getMessage();
        }
    }

    // Sample test method
    public static void testCalculateAdjustments() {
        Map<String, Object> args = new Map<String, Object>();
        Map<String, Object> input = new Map<String, Object>();
        Map<String, Object> output = new Map<String, Object>();

        input.put('claimId', '0Zkxx000000009hCAA');
        input.put('claimCoverageId', '0kPxx000000006TEAQ');
        input.put('claimedAmount', '1200.0');

        args.put('input', input);
        args.put('output', output);

        CalculateAdjustments test = new CalculateAdjustments();
        test.call('calculateAdjustments', args);
    }
}
```

## Related Topics

- ConnectApi.CalculateAdjustmentsInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_calculate_adjustments.htm)
- ConnectApi.CalculateAdjustmentsRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_calculate_adjustments.htm)
