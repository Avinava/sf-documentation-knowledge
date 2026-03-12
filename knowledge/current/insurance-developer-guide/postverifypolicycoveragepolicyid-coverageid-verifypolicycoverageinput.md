---
title: "postVerifyPolicyCoverage(policyId, coverageId, verifyPolicyCoverageInput)"
domain: insurance-developer-guide
topic: postverifypolicycoveragepolicyid-coverageid-verifypolicycoverageinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.914Z
estimatedTokens: 434
keywords: [postVerifyPolicyCoverage, policyId, coverageId, verifyPolicyCoverageInput, Verify, applicability, policy, coverage, loss, date, under, insurance, eligible, coverages, processed]
---

# postVerifyPolicyCoverage(policyId, coverageId, verifyPolicyCoverageInput)

> Verify the applicability of a policy coverage for a specified loss date under an
    insurance policy, so that only eligible coverages are processed for claims.

# postVerifyPolicyCoverage(policyId, coverageId, verifyPolicyCoverageInput)

Verify the applicability of a policy coverage for a specified loss date under an insurance policy, so that only eligible coverages are processed for claims.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.VerifyPolicyCoverageRepresentation postVerifyPolicyCoverage(String policyId, String coverageId, ConnectApi.VerifyPolicyCoverageInputRepresentation verifyPolicyCoverageInput)

## Parameters

policyId

Type: String

ID of the insurance policy.

coverageId

Type: String

ID of the policy coverage to verify.

verifyPolicyCoverageInput

Type: [ConnectApi.VerifyPolicyCoverageInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_verify_policy_coverage.htm "Input representation for verifying a policy coverage's applicability for a specified loss date.")

JSON object that contains the loss date and other details for verification.

## Return Value

Type: [ConnectApi.VerifyPolicyCoverageRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_verify_policy_coverage.htm "Output representation of a policy coverage's applicability for a specified loss date.")

## Example

Use the VerifyPolicyCoverageCallable Apex class to validate whether a given insurance policy provides coverage for a specific insured asset or participant on a given loss date. This class wraps the Connect API endpoint /connect/insurance/policies/{policyId}/coverages/{coverageId}/verify. You can call this method from Apex to automate coverage verification during claim workflows.

Class Definition

```

```

Usage Example

```

```

## Code Examples

```apex
public with sharing class VerifyPolicyCoverageCallable implements System.Callable {

    public Object call(String action, Map<String, Object> args) {
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');

        if (action == 'verifyPolicyCoverage') {
            ConnectApi.VerifyPolicyCoverageInputRepresentation verificationInput =
                (ConnectApi.VerifyPolicyCoverageInputRepresentation) inputMap.get('verificationInput');

            System.debug('Start of connect API call to verify policy coverage');

            ConnectApi.VerifyPolicyCoverageRepresentation verificationData;

            try {
                verificationData = ConnectApi.InsuranceClaimFamily.postVerifyPolicyCoverage(
                    '0YTxx000000000DGAQ',   // policyId
                    '0cYxx000000012IEAQ',   // coverageId
                    verificationInput
                );

                System.debug('Policy coverage verification completed: ' + verificationData);
                outputMap.put('verificationData', verificationData);
            } catch (Exception e) {
                System.debug('Error while verifying policy coverage: ' + e.getMessage());
                outputMap.put('error', e.getMessage());
            }

            return verificationData;
        }

        return null;
    }
}
```

```apex
VerifyPolicyCoverageCallable callable = new VerifyPolicyCoverageCallable();

// Prepare input
Map<String, Object> input = new Map<String, Object>();

ConnectApi.VerifyPolicyCoverageInputRepresentation verificationInput = 
    new ConnectApi.VerifyPolicyCoverageInputRepresentation();

verificationInput.lossDate = '2025-08-15'; 
verificationInput.insuredAssetOrParticipantId = '0YWxx00000000P5GAI';

input.put('verificationInput', verificationInput);

// Prepare output and args
Map<String, Object> output = new Map<String, Object>();
Map<String, Object> args = new Map<String, Object>{
    'input' => input,
    'output' => output
};

// Call the 'verifyPolicyCoverage' action
Object result = callable.call('verifyPolicyCoverage', args);

ConnectApi.VerifyPolicyCoverageRepresentation verificationData =
    (ConnectApi.VerifyPolicyCoverageRepresentation) result;

// Log verification result
System.debug('Policy Coverage Verification Result: ' + JSON.serializePretty(verificationData));

// Check for success
if (verificationData.isSuccess) {
    System.debug('Policy coverage is valid for the specified loss date');
} else {
    System.debug('Policy coverage verification failed. Errors:');
    for (ConnectApi.ErrorDetail error : verificationData.errors) {
        System.debug('Error Code: ' + error.errorCode + ', Message: ' + error.message);
    }
}

// Check for errors in the output map
if (output.containsKey('error')) {
    System.debug('Error: ' + output.get('error'));
}
```

## Related Topics

- ConnectApi.VerifyPolicyCoverageInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_verify_policy_coverage.htm)
- ConnectApi.VerifyPolicyCoverageRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_verify_policy_coverage.htm)
