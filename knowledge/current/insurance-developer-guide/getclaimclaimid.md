---
title: "GetClaim(claimId)"
domain: insurance-developer-guide
topic: getclaimclaimid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.788Z
estimatedTokens: 251
keywords: [GetClaim, claimId, specific, claim, API, Version, Requires, Chatter]
---

# GetClaim(claimId)

> Get the details of a specific claim.

# GetClaim(claimId)

Get the details of a specific claim.

## API Version

65.0

## Requires Chatter

No

## Signature

public static ConnectApi.ClaimOutputRepresentation GetClaim(String claimId)

## Parameters

claimId

Type: String

ID of the claim to retrieve the details for.

## Return Value

Type: [ConnectApi.ClaimOutputRepresentation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_output.htm "Output representation for a retrieved claim.")

## Example

Use this Apex example to retrieve claim details from the Claim Management system by using the Get Claim API. The example shows how to invoke the Connect API method ConnectApi.ClaimFamily.GetClaim() and handle responses and errors in Apex.

Class Definition

Here's an example that shows how to invoke the Get Claim API by using Apex.

```

```

Usage Example

You can use the GetClaimCallable class in Apex to call the getClaim action and retrieve claim details by the claim ID.

```

```

## Code Examples

```apex
// Output the claim data to the debug log
System.debug('Claim Data: ' + JSON.serializePretty(claimData));g action, Map<String, Object> args) {
        // Retrieve the input and output maps from the arguments
        Map<String, Object> inputMap = (Map<String, Object>) args.get('input');
        Map<String, Object> outputMap = (Map<String, Object>) args.get('output');
        
        // Check the action type
        if (action == 'getClaim') {
            // Retrieve the claim ID from the input map
            String claimId = (String) inputMap.get('claimId');
            System.debug('Start of connect API call to get claim with ID: ' + claimId);
            
            // Initialize the claim output representation
            ConnectApi.ClaimOutputRepresentation claimData;
            
            // Call the Connect API to get the claim
            try {
                claimData = ConnectApi.ClaimFamily.getClaim(claimId);
                System.debug('Claim retrieved successfully: ' + claimData);
                
                // Put the claim data in the output map
                outputMap.put('claimData', claimData);
            }
            catch (Exception e) {
                System.debug('Error while retrieving claim: ' + e.getMessage());
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
GetClaimCallable callable = new GetClaimCallable();

// Prepare the input arguments
Map<String, Object> input = new Map<String, Object>();

// Get claimId from user input (you can modify this to get from different sources)
// Option 1: From URL parameters (if called from a Visualforce page or Lightning component)
String claimId = ApexPages.currentPage().getParameters().get('claimId');

if (String.isBlank(claimId)) {
    System.debug('Please provide a claimId. You can set it in the input map.');
}

// Add the claimId to the input map
input.put('claimId', claimId);

// Prepare the output map
Map<String, Object> output = new Map<String, Object>();

// Prepare the args map
Map<String, Object> args = new Map<String, Object>();
args.put('input', input);
args.put('output', output);

// Call the 'getClaim' action
Object result = callable.call('getClaim', args);

// Retrieve the claim data from the result
ConnectApi.ClaimOutputRepresentation claimData = (ConnectApi.ClaimOutputRepresentation) result;

// Output the claim data to the debug log
System.debug('Claim Data: ' + JSON.serializePretty(claimData));

// Check for errors in the output map
if (output.containsKey('error')) {
    System.debug('Error: ' + output.get('error'));
}
```

## Related Topics

- ConnectApi.ClaimOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_output.htm)
