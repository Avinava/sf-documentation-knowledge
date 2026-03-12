---
title: "EARightsAccess Class"
domain: retail-api
topic: earightsaccess-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.045Z
estimatedTokens: 263
keywords: [EARightsAccess, access, EARights, application, uses, Implementation, forRecordType]
---

# EARightsAccess Class

> Use the EARightsAccess class to access EARights the
  application uses.

# EARightsAccess Class

Use the EARightsAccess class to access EARights the application uses.

You can’t add new instances of this class. However, you can modify the existing instances to change EARights of the existing elements.

Each EARightsAccess instance provides these properties:

-   Name: String (name of the right)
-   Type: String (category of the right)
-   Visible: Boolean (indicates whether the referenced item is visible)
-   Editable: Boolean (indicates whether the referenced item is editable)

## Namespace

```

```

## Example Implementation

```

```

## Supported Methods

## forRecordType

Set EARights for different record types of the Promotion and Tactic sObject by calling the forRecordType method on an EARightsAccess instance. This method returns a new EARightsAccess instance where you can set specific visibility and editability permissions for the record type ID of a record.

## Example

Here’s an example that shows how to disable the compensation model and SPC card for a specific tactic record type ID:

```

```

## Code Examples

```
cgcloud.EARightsAccess eaRights;
```

```apex
global class TacticEARights implements System.Callable {

    global Object call(String action, Map<String, Object> args) {
        // Read Transaction Id
        String txId = (String) args.get('txId');
        // Get the Promotion Id
        Id promotionId = args.get('promotionId'); 
        // Get the EARights
        List<cgcloud.EARightsAccess> tacticRights = (List<cgcloud.EARightsAccess>) args.get('EARights');
        
        // Get the relevant record type id
        Id LUMP_SUM_TACTIC_RECTYPE_ID = '01x000000000000000';
        
        // Custom logic goes here
        for (cgcloud.EARightsAccess ear: tacticRights) {
            // EXAMPLE: Compensation Model is disabled for
            // specific Tactic RecordType id
            if (ear.Name == cgcloud__Tactic__c.cgcloud__Compensation_Model__c.getDescribe().getName()) {
                ear.forRecordType(recordTypeId).Editable = false;
            }
            
            // EXAMPLE: SPC card is disabled for
            // specific Tactic RecordType id
            if (ear.Name == 'SPEND_PLANNING_CARD') {
               ear.forRecordType(recrodTypeId).Editable = false;
            }
        }
        
    }
}
```
