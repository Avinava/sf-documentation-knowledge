---
title: "Create Out-of-sequence  Policy Endorsement Action"
domain: insurance-developer-guide
topic: create-out-of-sequence-policy-endorsement-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.542Z
estimatedTokens: 253
keywords: [Out-of-sequence, Policy, Endorsement, Action, insurance, REST, HTTP, Inputs, Outputs]
---

# Create Out-of-sequence  Policy Endorsement Action

> Create an out-of-sequence endorsement for an insurance policy.

# Create Out-of-sequence Policy Endorsement Action

Create an out-of-sequence endorsement for an insurance policy.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createOutOfSeqPlcyEndorsement

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| outOfSequencePolicyEndorsementInputRep | TypeApex classDescriptionRequired.An Apex ConnectApi.OutOfSequenceEndorsePolicyInputRep record that contains the details to create the out-of-sequence policy endorsement. |

## Outputs

| Output | Details |
| --- | --- |
| jobIdentifier | TypestringDescriptionID of the job that's created for the out-of-sequence endorsement process. |

## Example

POST

This is a sample request to call this invocable action.

```

```

This is a sample request to call this invocable action from Apex code.

```

```

This is a sample response when you call this action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "contextId": "0000000i18tq18g00291750179239892137c4250a82940e49987f6d97559b4de",
      "effectiveDate": "2025-03-05",
      "policyId": ""
      "insurancePolicy": {
        "policyName": "Life Insurance",
        "policyNumber": "LI000aax8967245gj"
      },
      "fieldSetIds": {
        "policyFieldSetId": "0IXxx0000004CYqGAM",
        "assetFieldSetId": "0IXxx0000004CaSGAU",
        "participantFieldSetId": "0IXxx0000004CdgGAE",
        "coverageFieldSetId": "0IXxx0000004Cc4GAE"
      },
      "transactionRecord": {
        "name": "Custom OOSE transaction"
      }
    }
  ]
}
```

```apex
public with sharing class OutOfSequenceEndorsementInvocable {
    
    /**
     * Execute OOSE with custom parameters
     * Usage: OutOfSequenceEndorsement.executeOOSEWithParams('policyId', 'effectiveDate', 'contextId');
     */
   public static void executeOOSEWithParams(String policyId, String effectiveDate, String contextId) {
        // Validate input parameters
        if (String.isBlank(policyId) || String.isBlank(effectiveDate) || String.isBlank(contextId)) {
            System.debug('ERROR: All parameters (policyId, effectiveDate, contextId) are required');
            return;
        }
        
        // OOSE IA - Create the standard Invocable Action for out of sequence endorsement
        Invocable.Action action = Invocable.Action.createStandardAction('createOutOfSeqPlcyEndorsement');
        
        // Instantiate the IA input object for OOSE
        ConnectApi.outOfSequencePolicyEndorsementInputRep policyInput = 
            new ConnectApi.outOfSequencePolicyEndorsementInputRep();
        
        // Set parameters
        policyInput.effectiveDate = effectiveDate;
        policyInput.contextId = contextId;
        policyInput.policyId = policyId;
        
        // Populate Insurance Policy details (using IA classes)
        ConnectApi.InsPolicyIAInputRep insurancePolicy = 
            new ConnectApi.InsPolicyIAInputRep();
        insurancePolicy.policyName = 'Lisa Auto Policy';
        insurancePolicy.policyNumber = 'Lisa Auto Policy';
        policyInput.insurancePolicy = insurancePolicy;
        
        // Set field sets (using IA field set representation)
        ConnectApi.FieldSetIdsInputRep fieldSetIds = 
            new ConnectApi.FieldSetIdsInputRep();
        fieldSetIds.policyFieldSetId = '0IXZM0000008P684AE'; // Replace with your policy field set ID
        fieldSetIds.assetFieldSetId = '0IXZM0000004DDC4A2'; // Replace with your asset field set ID
        fieldSetIds.participantFieldSetId = '0IXZM0000004DDH4A2'; // Replace with your participant field set ID
        fieldSetIds.coverageFieldSetId = '0IXZM0000008P6D4AU'; // Replace with your coverage field set ID
        policyInput.fieldSetIds = fieldSetIds;
        
        // Populate Transaction record (using IA transaction representation)
        ConnectApi.InsPolicyTrxnIAInputRep transactionRecord = 
            new ConnectApi.InsPolicyTrxnIAInputRep();
        transactionRecord.name = 'Custom OOSE Transaction';
        policyInput.transactionRecord = transactionRecord;
        
        // Set invocation parameters
        action.setInvocationParameter('outOfSequencePolicyEndorsementInputRep', policyInput);
        
        System.debug('Starting OOSE Invocable Action (createOutOfSeqPlcyEndorsement)...');
        System.debug('Policy ID: ' + policyId);
        System.debug('Effective Date: ' + effectiveDate);
        System.debug('Context ID: ' + contextId);
        
        try {
            // Invoke the action
            List<Invocable.Action.Result> results = action.invoke();
            
            System.debug('OOSE Invocable Action result = ' + results);
            
            // Process results
            for (Invocable.Action.Result result : results) {
                if (result.isSuccess()) {
                    System.debug('SUCCESS: Custom OOSE completed successfully!');
                    Object outputValue = result.getOutputParameters().get('jobIdentifier');
                    if (outputValue != null) {
                        System.debug('Job Identifier: ' + outputValue);
                    } else {
                        System.debug('OOSE job started - result: ' + result.getOutputParameters());
                    }
                } else {
                    System.debug('ERROR: Custom OOSE failed');
                    System.debug('Error Details: ' + result.getErrors());
                }
            }
            
        } catch (Exception e) {
            System.debug('EXCEPTION in Custom OOSE Invocable Action: ' + e.getMessage());
        }
    }
}

/*
 * USAGE EXAMPLE:
 * Copy and paste this code into Developer Console Execute Anonymous Window
 */

OutOfSequenceEndorsementInvocable.executeOOSEWithParams(
    '0YTZM00000000xG4AQ',  // policyId
    '2025-10-01',          // effectiveDate
    '0000000i18tq18g002917575994042598cecb38226a341dd96349ee513c7c1e5'  // contextId
);
```

```
[
  {
    "actionName": "createOutOfSeqPlcyEndorsement",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "jobIdentifier": "15Uxx0000004CUWEA2"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```

## Related Topics

- ConnectApi.OutOfSequenceEndorsePolicyInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_out_of_sequence_endorse_policy_i_a_input_re.htm)
