---
title: "OutOfSequenceEndorsePolicy(OutOfSequenceEndorsePolicyInput,
      policyId)"
domain: insurance-developer-guide
topic: outofsequenceendorsepolicyoutofsequenceendorsepolicyinput-policyid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:39.023Z
estimatedTokens: 324
keywords: [OutOfSequenceEndorsePolicy, OutOfSequenceEndorsePolicyInput, policyId, out-of-sequence, endorsement, insurance, policy, API, Version, Requires, Chatter]
---

# OutOfSequenceEndorsePolicy(OutOfSequenceEndorsePolicyInput,
      policyId)

> Create an out-of-sequence endorsement for an insurance policy.

# OutOfSequenceEndorsePolicy(OutOfSequenceEndorsePolicyInput, policyId)

Create an out-of-sequence endorsement for an insurance policy.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.OutOfSequenceEndorsePolicyOutputRepresentation OutOfSequenceEndorsePolicy(ConnectApi.OutOfSequenceEndorsePolicyInputRepresentation OutOfSequenceEndorsePolicyInput, String policyId)

## Parameters

OutOfSequenceEndorsePolicyInput

Type: [ConnectApi.OutOfSequenceEndorsePolicyInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_out_of_sequence_endorse_policy.htm "Input representation of the details to perform an out-of-sequence endorsement on an insurance policy.")

Details to create the out-of-sequence endorsement.

policyId

Type: String

ID of the insurance policy to create the out-of-sequence endorsement for.

## Return Value

Type: [ConnectApi.OutOfSequenceEndorsePolicyOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_out_of_sequence_endorse_policy.htm "Output representation for out of sequence endorsement output representation.")

## Example

Here's an example of how to invoke the Out-of-Sequence Policy API by using Apex.

```

```

## Code Examples

```apex
/*
 * Out of Sequence Policy Endorsement Service using Connect API
 *
 * IMPORTANT: Out-of-sequence endorsement is an asynchronous process and returns a job identifier
 * for tracking the request.
 */
public with sharing class OutOfSequenceEndorsement implements System.Callable {
 
 public Object call(String action, Map<String, Object> args) {
 // Retrieve the input and output maps from the arguments
 Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
 Map<String, Object> outputMap = (Map<String, Object>) args.get('output');
 
 // Check the action type
 if (action == 'outOfSequenceEndorsePolicy') {
 System.debug('Start of connect API call to out of sequence endorse policy');
 
 // Get input parameters from the input map
 String policyId = (String) inputMap.get('policyId');
 String effectiveDate = (String) inputMap.get('effectiveDate');
 String contextId = (String) inputMap.get('contextId');
 
 System.debug('Policy ID: ' + policyId);
 System.debug('Effective Date: ' + effectiveDate);
 System.debug('Context ID: ' + contextId);
 
 // Initialize the job identifier
 String jobIdentifier = null;
 
 // Validate required parameters
 if (String.isBlank(policyId)) {
 System.debug('ERROR: Policy ID is required');
 outputMap.put('error', 'Policy ID is required');
 return null;
 }
 if (String.isBlank(effectiveDate)) {
 System.debug('ERROR: Effective Date is required');
 outputMap.put('error', 'Effective Date is required');
 return null;
 }
 if (String.isBlank(contextId)) {
 System.debug('ERROR: Context ID is required');
 outputMap.put('error', 'Context ID is required');
 return null;
 }
 
 try {
 
 // Step 1: Create OOSE input using the provided context ID
 ConnectApi.OutOfSequenceEndorsePolicyInputRepresentation policyInput = 
 new ConnectApi.OutOfSequenceEndorsePolicyInputRepresentation();

 // Populate fields for InsurancePolicyInputRepresentation 
 ConnectApi.InsurancePolicyInputRepresentation insurancePolicy = 
 new ConnectApi.InsurancePolicyInputRepresentation();
 insurancePolicy.policyName = 'Lisa Auto Policy';
 insurancePolicy.policyNumber = 'Lisa Auto Policy';
 policyInput.insurancePolicy = insurancePolicy;

 // Populate transaction record
 ConnectApi.InsurancePolicyTransactionInputRepresentation transactionRecord = 
 new ConnectApi.InsurancePolicyTransactionInputRepresentation();
 transactionRecord.name = 'Custom OOSE Transaction';
 policyInput.transactionRecord = transactionRecord;

 // Set the effective date for the out of sequence endorsement
 policyInput.effectiveDate = effectiveDate;
 
 // Use the provided context ID
 policyInput.contextId = contextId;

 // Set field sets
 ConnectApi.AdditionalFieldsFieldSetInputRepresentation fieldSetIds = 
 new ConnectApi.AdditionalFieldsFieldSetInputRepresentation();
 fieldSetIds.policyFieldSetId = '0IXZM0000008P684AE'; // Replace with your policy field set ID
 fieldSetIds.assetFieldSetId = '0IXZM0000004DDC4A2'; // Replace with your asset field set ID
 fieldSetIds.participantFieldSetId = '0IXZM0000004DDH4A2'; // Replace with your participant field set ID
 fieldSetIds.coverageFieldSetId = '0IXZM0000008P6D4AU'; // Replace with your coverage field set ID
 policyInput.fieldSetIds = fieldSetIds;
 
 // Step 2: Execute OOSE with the provided context ID
 System.debug('Executing OOSE with context ID: ' + contextId);
 
 // Call the Connect API directly - OOSE is ASYNCHRONOUS and returns a job identifier
 ConnectApi.OutOfSequenceEndorsePolicyOutputRepresentation ooseResult =
 ConnectApi.InsurancePolicyAdminFamily.outOfSequenceEndorsePolicy(policyInput, policyId);

 // Get the job identifier
 jobIdentifier = ooseResult.jobIdentifier;
 
 // Log success
 System.debug('Out-of-sequence endorsement job started successfully. Job ID: ' + jobIdentifier);
 System.debug('Policy: ' + policyId + ' | Context: ' + contextId + ' | Effective Date: ' + effectiveDate);
 
 // Put the job identifier in the output map
 outputMap.put('jobIdentifier', jobIdentifier);
 outputMap.put('ooseResult', ooseResult);
 
 } catch (Exception e) {
 System.debug('Error while executing out-of-sequence endorsement: ' + e.getMessage());
 outputMap.put('error', e.getMessage());
 }
 
 // Return the job identifier
 return jobIdentifier;
 }
 
 // If the action is not recognized, return null
 return null;
 }
}

/*
 * USAGE EXAMPLE:
 * Copy and paste this code into Developer Console Execute Anonymous Window
 */

// Create instance of the callable class
OutOfSequenceEndorsement callable = new OutOfSequenceEndorsement();

// Prepare the input arguments
Map<String, Object> input = new Map<String, Object>();
input.put('policyId', '0YTxx00000000MbGAI'); // Replace with your policy ID  
input.put('effectiveDate', '2025-06-01'); // Replace with your desired effective date
input.put('contextId', 'your-context-id-here'); // Replace with your context ID

// Prepare the output map
Map<String, Object> output = new Map<String, Object>();

// Prepare the args map
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);

// Call the 'outOfSequenceEndorsePolicy' action
Object result = callable.call('outOfSequenceEndorsePolicy', args);

// Retrieve the job identifier from the result
String jobIdentifier = (String) result;

// Output the job identifier to the debug log
System.debug('Job Identifier: ' + jobIdentifier);

// Check for errors in the output map
if (output.containsKey('error')) {
    System.debug('Error: ' + output.get('error'));
} else if (output.containsKey('jobIdentifier')) {
    System.debug('SUCCESS: OOSE job started with ID: ' + output.get('jobIdentifier'));
    System.debug('Monitor this job ID for completion status.');
}
```

## Related Topics

- ConnectApi.OutOfSequenceEndorsePolicyInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_out_of_sequence_endorse_policy.htm)
- ConnectApi.OutOfSequenceEndorsePolicyOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_out_of_sequence_endorse_policy.htm)
