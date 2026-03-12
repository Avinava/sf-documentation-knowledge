---
title: "Configuring Salesforce Billing to Read Your Mapping Metadata"
domain: blng-dev
topic: configuring-salesforce-billing-to-read-your-mapping-metadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.893Z
estimatedTokens: 113
keywords: [Configuring, Salesforce, Billing, Mapping, Metadata, you’ve, configure, payment, gateway, adapter, Apex, status, assign, TransactionResult]
---

# Configuring Salesforce Billing to Read Your Mapping Metadata

> After you’ve set up your mapping metadata, configure your payment gateway adapter
        Apex class to read the gateway status and assign it to TransactionResult.

# Configuring Salesforce Billing to Read Your Mapping Metadata

After you’ve set up your mapping metadata, configure your payment gateway adapter Apex class to read the gateway status and assign it to TransactionResult.

First, define a GatewayStatusType enum.

```

```

Next, add code that reads your GatewayStatusMapping metadata and sets the correct gateway status in your TransactionResult object. Here’s one way you can configure it.

```

```

## Code Examples

```apex
global Enum GatewayStatusType { Success, 
                                Decline, 
                                ValidationError, 
                                PermanentFail, 
                                RequiresReview, 
                                Indeterminate, 
                                SystemError }
                                
// Set gatewayStatus
global void setGatewayStatus(GatewayStatusType gatewayStatus)
{
    this.gatewayStatus = gatewayStatus;
}

// Get gatewayStatus
global GatewayStatusType getGatewayStatus()
{
    return gatewayStatus;
}
```

```apex
private static Map<string, blng.TransactionResult.GatewayStatusType> mapGatewayStatusEnumTypesByStrings =
                new Map<string, blng.TransactionResult.GatewayStatusType>();
static {
    List<blng.TransactionResult.GatewayStatusType> enumValues = blng.TransactionResult.GatewayStatusType.values();
    for (Integer i = 0; i < enumValues.size(); i++) {
        mapGatewayStatusEnumTypesByStrings.put(enumValues.get(i).name(), enumValues.get(i));
    }
}

// default Gateway Status - It should be always Indeterminate to avoid duplicate payments
private static final blng.TransactionResult.GatewayStatusType defaultGatewayStatus = blng.TransactionResult.GatewayStatusType.Indeterminate;
        
/**
* Does a SOQL lookup on the mapper table and gets the gateway status mapped to the return code
* Returns the default enum if no match is found
* @param transactionResult
*/
public void populateGatewayStatus(blng.TransactionResult transactionResult) {
    blng.TransactionResult.GatewayStatusType gatewayStatus = defaultGatewayStatus;
    String returnCode = transactionResult.getResponseCode();
    if (returnCode != null) {
        List<GatewayStatusMapping__mdt> gatewayStatusMaps = [
                SELECT GatewayStatus__c
                FROM GatewayStatusMapping__mdt
                WHERE ResponseCode__c = :returnCode
                LIMIT 1
        ];
        if (!gatewayStatusMaps.isEmpty()) {
            gatewayStatus = mapGatewayStatusEnumTypesByStrings.get(gatewayStatusMaps.get(0).GatewayStatus__c);
            if (gatewayStatus == null) {
                gatewayStatus = defaultGatewayStatus;
            }
        }
    }
    transactionResult.setGatewayStatus(gatewayStatus);
}
```
