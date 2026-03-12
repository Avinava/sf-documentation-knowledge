---
title: "ProcessPolicyLimits(ProcessPolicyLimitsInput, claimId, coverageId)"
domain: insurance-developer-guide
topic: processpolicylimitsprocesspolicylimitsinput-claimid-coverageid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.897Z
estimatedTokens: 317
keywords: [ProcessPolicyLimits, ProcessPolicyLimitsInput, claimId, coverageId, Process, policy, limits, loss, item, claim, current, standings, insurance, API, Version]
---

# ProcessPolicyLimits(ProcessPolicyLimitsInput, claimId, coverageId)

> Process the policy limits for a loss item in a claim by using the current standings of
    the insurance policy limits.

# ProcessPolicyLimits(ProcessPolicyLimitsInput, claimId, coverageId)

Process the policy limits for a loss item in a claim by using the current standings of the insurance policy limits.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.ProcessPolicyLimitsRepresentation ProcessPolicyLimits(ConnectApi.ProcessPolicyLimitsInputRepresentation ProcessPolicyLimitsInput, String claimId, String coverageId)

## Parameters

ProcessPolicyLimitsInput

Type: [ConnectApi.ProcessPolicyLimitsInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_process_policy_limits.htm "Input representation for processing policy limits for a claim loss item.")

JSON object that contains details for processing the policy limits.

claimId

Type: String

ID of the claim.

coverageId

Type: String

ID of the claim coverage.

## Return Value

Type: [ConnectApi.ProcessPolicyLimitsRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_process_policy_limits.htm "Output representation for processing the policy limits for a claim loss item.")

## Example

Here's an example of how to invoke the Process Policy Limits API by using Apex.

```

```

## Code Examples

```apex
public with sharing class PostApiCalloutProcessLimitTest implements System.Callable {
public Object call(String action, Map<String, Object> args) {
System.debug('>>> Action: ' + action);
System.debug('>>> Args: ' + JSON.serializePretty(args));
Map<String, Object> bodyMap = new Map<String, Object>();
// Extract 'input' from args
Map<String, Object> inputMap = (Map<String, Object>)args.get('input');
Map<String, Object> outputMap = (Map<String, Object>)args.get('output');
String claimId;
String claimCoverageId;
String CLAIM_ID = 'claimId';
String CLAIM_COVERAGE_ID = 'claimCoverageId';
String ADJUSTED_AMOUNT = 'adjustedAmount';
String LIMIT_UNIT_COUNT = 'limitUnitCount';
String BENEFIT_NAME = 'benefitName';
if (inputMap != null) {
if (inputMap.containsKey(ADJUSTED_AMOUNT) &&
inputMap.get(ADJUSTED_AMOUNT) != null) {
bodyMap.put(ADJUSTED_AMOUNT,
String.valueOf(inputMap.get(ADJUSTED_AMOUNT)));
} if (inputMap.containsKey(LIMIT_UNIT_COUNT) &&
inputMap.get(LIMIT_UNIT_COUNT) != null) {
bodyMap.put(LIMIT_UNIT_COUNT,
String.valueOf(inputMap.get(LIMIT_UNIT_COUNT)));
} if (inputMap.containsKey(BENEFIT_NAME) && inputMap.get(BENEFIT_NAME) != null)
{

bodyMap.put(BENEFIT_NAME, String.valueOf(inputMap.get(BENEFIT_NAME)));
} if (inputMap.containsKey(CLAIM_ID) && inputMap.get(CLAIM_ID) != null) {
claimId = String.valueOf(inputMap.get(CLAIM_ID));
} if (inputMap.containsKey(CLAIM_COVERAGE_ID) &&
inputMap.get(CLAIM_COVERAGE_ID) != null) {

claimCoverageId = String.valueOf(inputMap.get(CLAIM_COVERAGE_ID));
}
}

String jsonBody = JSON.serialize(bodyMap);
System.debug('>>> Final JSON Body: ' + jsonBody);
System.debug('>>> Claim Id : ' + claimId);
System.debug('>>> Claim Coverage Id : ' + claimCoverageId);
String str = postDataToExternalApi(jsonBody, claimId, claimCoverageId);
return outputMap.put('response', str);
}
public static String postDataToExternalApi(String jsonBody, String claimId, String
claimCoverageId) {
HttpRequest request = new HttpRequest();
Http http = new Http();

// Endpoint for Process Limits
String url = 'callout:invokeUW/services/data/v65.0/connect/insurance/'

+ 'claims/' + claimId + '/coverages/' + claimCoverageId + '/process-limits';

request.setEndpoint(url);
request.setMethod('POST');
request.setHeader('Content-Type', 'application/json');
request.setTimeout(120000); // 2 mins timeout
request.setBody(jsonBody);
System.debug('>>> Calling Process Limits API');
System.debug('>>> Calling Endpoint : ' + url );
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
}
```

## Related Topics

- ConnectApi.ProcessPolicyLimitsInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_process_policy_limits.htm)
- ConnectApi.ProcessPolicyLimitsRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_process_policy_limits.htm)
