---
title: "UpdateClaim(claimId, UpdateClaimInput)"
domain: insurance-developer-guide
topic: updateclaimclaimid-updateclaiminput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.796Z
estimatedTokens: 255
keywords: [UpdateClaim, claimId, UpdateClaimInput, specific, claim, API, Version, Requires, Chatter]
---

# UpdateClaim(claimId, UpdateClaimInput)

> Update the details of a specific claim.

# UpdateClaim(claimId, UpdateClaimInput)

Update the details of a specific claim.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.CreateClaimOutputRepresentation UpdateClaim(String claimId, ConnectApi.ClaimInputRepresentation UpdateClaimInput)

## Parameters

claimId

Type: String

ID of the claim to update.

UpdateClaimInput

Type: [ConnectApi.ClaimInputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim.htm "Input representation for creating or updating a claim.")

Details to update the claim.

## Return Value

Type: [ConnectApi.CreateClaimOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_create_claim_output.htm "Output representation for a create or update claim operation.")

## Example

The UpdateClaimCallable Apex class provides a way to update insurance claims by using the Connect API.

Class Definition

```

```

Usage Example

```

```

## Code Examples

```apex
public with sharing class UpdateClaimCallable implements System.Callable {

    public Object call(String action, Map<String, Object> args) {
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');
        
        if (action == 'updateClaim') {
            ConnectApi.ClaimInputRepresentation claimInput = 
                (ConnectApi.ClaimInputRepresentation) inputMap.get('claimInput');
            System.debug('Starting Connect API call to update claim');

            ConnectApi.CreateClaimOutputRepresentation claimData;
            try {
                claimData = ConnectApi.ClaimFamily.updateClaim('0Zkxx00000000BJCAY', claimInput);
                System.debug('Claim updated successfully: ' + claimData);
                outputMap.put('claimData', claimData);
            } catch (Exception e) {
                System.debug('Error updating claim: ' + e.getMessage());
                outputMap.put('error', e.getMessage());
            }

            return claimData;
        }

        return null;
    }
}
```

```apex
UpdateClaimCallable callable = new UpdateClaimCallable();

// Prepare input map
Map<String, Object> input = new Map<String, Object>();

// Create ClaimInputRepresentation object
ConnectApi.ClaimInputRepresentation claimInput = new ConnectApi.ClaimInputRepresentation();
claimInput.name = 'Claim-Demo-Test-apex-update';
claimInput.claimType = 'Auto';
claimInput.lossDate = DateTime.now();
claimInput.productCode = 'AutoClaimRoot';
claimInput.claimReasonType = 'Accident';
claimInput.claimReason = 'Damage';
claimInput.lossType = 'Repairs';
claimInput.insurancePolicyId = '0YTxx000000000iGAA';
claimInput.accountId = '001xx000003GYnoAAG';

// Additional claim fields
claimInput.additionalFields = new Map<String, Object>{ 'Severity' => 'Medium' };

// Set claim participants
ConnectApi.ClaimParticipantInputRepresentation participant1 = new ConnectApi.ClaimParticipantInputRepresentation();
participant1.action = 'update';
participant1.instanceKey = 'par1';
participant1.accountId = '001xx000003GYnoAAG';
participant1.contactId = '003xx000004WhFwAAK';
participant1.insurancePolicyParticipantId = '0aoxx00000000SQAAY';
participant1.isInjured = 'false';
participant1.roles = new List<String>{'Claimant'};

ConnectApi.ClaimParticipantInputRepresentation participant2 = new ConnectApi.ClaimParticipantInputRepresentation();
participant2.action = 'create';
participant2.instanceKey = 'par3';
participant2.contactId = '003xx000004WhFwAAK';
participant2.isInjured = 'true';
participant2.roles = new List<String>{'Claimant', 'Involved Driver'};

claimInput.participants = new List<ConnectApi.ClaimParticipantInputRepresentation>{participant1, participant2};

// Set claim items (update or create)
ConnectApi.ClaimItemInputRepresentation item1 = new ConnectApi.ClaimItemInputRepresentation();
item1.action = 'update';
item1.name = 'item1-updated';
item1.category = 'Involved Injury';
item1.productCode = 'InvolvedInjury';
item1.instanceKey = 'item1';
item1.insuredItemId = '0YWxx00000000NbGAI';
item1.insurancePolicyCoverageId = '0cYxx0000000125EAA';
item1.participantInstanceKey = 'par1';
item1.attributes = new List<ConnectApi.ClaimAttributeInputRepresentation>{
    new ConnectApi.ClaimAttributeInputRepresentation('Gender', 'Male')
};
item1.additionalFields = new Map<String, Object>{ 'Description' => null };
item1.relatedObjects = new List<ConnectApi.ClaimRelatedObjectInputRepresentation>{
    new ConnectApi.ClaimRelatedObjectInputRepresentation('001xx000003GYnoAAG', 'Account')
};

ConnectApi.ClaimItemInputRepresentation item2 = new ConnectApi.ClaimItemInputRepresentation();
item2.action = 'create';
item2.name = 'item2-created';
item2.category = 'Involved Injury';
item2.productCode = 'InvolvedInjury';
item2.instanceKey = 'item2';
item2.insuredItemId = '0YWxx00000000NbGAI';
item2.insurancePolicyCoverageId = '0cYxx0000000125EAA';
item2.participantInstanceKey = 'par2';
item2.attributes = new List<ConnectApi.ClaimAttributeInputRepresentation>{
    new ConnectApi.ClaimAttributeInputRepresentation('Gender', 'Male')
};
item2.additionalFields = new Map<String, Object>{ 'Description' => 'test added' };
item2.relatedObjects = new List<ConnectApi.ClaimRelatedObjectInputRepresentation>{
    new ConnectApi.ClaimRelatedObjectInputRepresentation('001xx000003GYnoAAG', 'Account')
};

claimInput.items = new List<ConnectApi.ClaimItemInputRepresentation>{item1, item2};

// Add claimInput to input map
input.put('claimInput', claimInput);

// Prepare output map
Map<String, Object> output = new Map<String, Object>();

// Execute updateClaim action
Map<String, Object> args = new Map<String, Object>{ 'input' => input, 'output' => output };
ConnectApi.CreateClaimOutputRepresentation claimData = 
    (ConnectApi.CreateClaimOutputRepresentation) callable.call('updateClaim', args);

// Log results
System.debug('Claim Data: ' + JSON.serializePretty(claimData));
if (output.containsKey('error')) {
    System.debug('Error: ' + output.get('error'));
}
```

## Related Topics

- ConnectApi.ClaimInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim.htm)
- ConnectApi.CreateClaimOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_create_claim_output.htm)
