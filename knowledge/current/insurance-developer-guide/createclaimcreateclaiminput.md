---
title: "CreateClaim(CreateClaimInput)"
domain: insurance-developer-guide
topic: createclaimcreateclaiminput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.775Z
estimatedTokens: 362
keywords: [CreateClaim, CreateClaimInput, claim, record, API, Version, Requires, Chatter]
---

# CreateClaim(CreateClaimInput)

> Create a claim record.

# CreateClaim(CreateClaimInput)

Create a claim record.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.CreateClaimOutputRepresentation CreateClaim(ConnectApi.ClaimInputRepresentation CreateClaimInput)

## Parameters

CreateClaimInput

Type: [ConnectApi.ClaimInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim.htm "Input representation for creating or updating a claim.")

Details to create a claim.

## Return Value

Type: [ConnectApi.CreateClaimOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_create_claim_output.htm "Output representation for a create or update claim operation.")

## Example

Use this Apex example to create a new insurance claim by using the Create Claim API. This example shows how to create a ClaimInputRepresentation with claim details, participants, and items, and then invoke the Connect API method ConnectApi.ClaimFamily.CreateClaim() to submit the claim.

Class Definition

This Apex sample shows how to use the Create Claim API from the Connect API namespace to create an insurance claim record. The example includes building nested input structures for claim details, participants, claim items, and related objects.

```

```

Usage Example

Use the CreateClaimCallable class to invoke the createClaim action and submit a new claim.

```

```

## Code Examples

```apex
public with sharing class CreateClaimCallable implements System.Callable {
    
    public Object call(String action, Map<String, Object> args) {
        // Retrieve the input and output maps from the arguments
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');
        
        // Check the action type
        if (action == 'createClaim') {
            // Retrieve the claim input data from the input map
            ConnectApi.ClaimInputRepresentation claimInput = (ConnectApi.ClaimInputRepresentation) inputMap.get('claimInput');
            System.debug('Start of connect API call to create claim');
            
            // Initialize the claim output representation
            ConnectApi.CreateClaimOutputRepresentation claimData;
            
            // Call the Connect API to create the claim
            try {
                claimData = ConnectApi.ClaimFamily.createClaim(claimInput);
                System.debug('Claim created successfully: ' + claimData);
                
                // Put the claim data in the output map
                outputMap.put('claimData', claimData);
            }
            catch (Exception e) {
                System.debug('Error while creating claim: ' + e.getMessage());
                outputMap.put('error', e.getMessage());
            }
            
            // Return the claim data
            return claimData;
        }
        
        // If the action is not recognized, return null
        return null;
    }
}
```

```apex
CreateClaimCallable callable = new CreateClaimCallable();

// Prepare the input arguments
Map<String, Object> input = new Map<String, Object>();

// Create and populate the ClaimInputRepresentation object
ConnectApi.ClaimInputRepresentation claimInput = new ConnectApi.ClaimInputRepresentation();

// Set basic claim fields
claimInput.name = 'Claim-Demo-Test-apex-1';
claimInput.claimType = 'Auto';
claimInput.lossDate = DateTime.now();
claimInput.productCode = 'AutoClaimRoot';
claimInput.claimReasonType = 'Accident';
claimInput.claimReason= 'Damage';
claimInput.lossType = 'Partial Loss';
claimInput.insurancePolicyId = '0YTxx000000000iGAA';
claimInput.accountId = '001xx000003GYiEAAW';

// Set additional fields
Map<String, Object> additionalFields = new Map<String, Object>();
additionalFields.put('Severity', 'High');
claimInput.additionalFields = additionalFields;

// Set claim items
List<ConnectApi.ClaimItemInputRepresentation> itemList = new List<ConnectApi.ClaimItemInputRepresentation>();

// Create first item
ConnectApi.ClaimItemInputRepresentation item1 = new ConnectApi.ClaimItemInputRepresentation();
item1.name = 'item1';
item1.category = 'Involved Injury';
item1.productCode = 'InvolvedInjury';
item1.instanceKey = 'item1';
item1.insuredItemId = '0YWxx00000000NbGAI';
item1.insurancePolicyCoverageId = '0cYxx0000000125EAA';
item1.participantInstanceKey = 'par1';

// Set item attributes
List<ConnectApi.ClaimAttributeInputRepresentation> item1AttrList = new List<ConnectApi.ClaimAttributeInputRepresentation>();

ConnectApi.ClaimAttributeInputRepresentation genderAttr = new ConnectApi.ClaimAttributeInputRepresentation();
genderAttr.apiName = 'Gender';
genderAttr.value = 'Female';
item1AttrList.add(genderAttr);

item1.attributes = item1AttrList;

// Set item additional fields
Map<String, Object> item1AdditionalFields = new Map<String, Object>();
    item1AdditionalFields.put('Description', 'test');
item1.additionalFields = item1AdditionalFields;

// Set item related objects
List<ConnectApi.ClaimRelatedObjectInputRepresentation> relatedObjList = new List<ConnectApi.ClaimRelatedObjectInputRepresentation>();

ConnectApi.ClaimRelatedObjectInputRepresentation accountRel = new ConnectApi.ClaimRelatedObjectInputRepresentation();
accountRel.recordId = '001xx000003GYiBAAW';
accountRel.recordObjName = 'Account';
relatedObjList.add(accountRel);

item1.relatedObjects = relatedObjList;

itemList.add(item1);
claimInput.items = itemList;

// Set claim participants
List<ConnectApi.ClaimParticipantInputRepresentation> participantList = new List<ConnectApi.ClaimParticipantInputRepresentation>();

// Create first participant
ConnectApi.ClaimParticipantInputRepresentation participant1 = new ConnectApi.ClaimParticipantInputRepresentation();
participant1.instanceKey = 'par1';
participant1.accountId = '001xx000003GYiEAAW';
participant1.contactId = '003xx000004WhFwAAK';
participant1.insurancePolicyParticipantId = '0aoxx00000000SQAAY';
participant1.isInjured = 'true';
participant1.roles = new List<String>{'Claimant', 'Involved Driver'};

participantList.add(participant1);

// Create second participant
ConnectApi.ClaimParticipantInputRepresentation participant2 = new ConnectApi.ClaimParticipantInputRepresentation();
participant2.instanceKey = 'par2';
participant2.contactId = '003xx000004WhFwAAK';
participant2.isInjured = 'true';
participant2.roles = new List<String>{'Claimant', 'Involved Driver'};

participantList.add(participant2);
claimInput.participants = participantList;


// Add the claimInput to the input map
input.put('claimInput', claimInput);

// Prepare the output map
Map<String, Object> output = new Map<String, Object>();

// Prepare the args map
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);

// Call the 'createClaim' action
Object result = callable.call('createClaim', args);

// Retrieve the claim data from the result
ConnectApi.CreateClaimOutputRepresentation claimData = (ConnectApi.CreateClaimOutputRepresentation) result;

// Output the claim data to the debug log
System.debug('Claim Data: ' + JSON.serializePretty(claimData));

// Check for errors in the output map
if (output.containsKey('error')) {
    System.debug('Error: ' + output.get('error'));
}
```

## Related Topics

- ConnectApi.ClaimInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim.htm)
- ConnectApi.CreateClaimOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_create_claim_output.htm)
