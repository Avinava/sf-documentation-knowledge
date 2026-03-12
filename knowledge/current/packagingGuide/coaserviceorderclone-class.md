---
title: "COA_ServiceOrderClone Class"
domain: packagingGuide
topic: coaserviceorderclone-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.242Z
estimatedTokens: 531
keywords: [COA_ServiceOrderClone, Clone, order, org, Channel, App, COA, installed, _ServiceOrderClone, Usage]
---

# COA_ServiceOrderClone Class

> Clone an existing order in the org where the Channel Order App (COA) is
    installed.

# COA\_ServiceOrderClone Class

Clone an existing order in the org where the Channel Order App (COA) is installed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Only fields that you have permission to create are cloned. DML errors can occur if you don’t have sufficient privileges.

## Namespace

[CHANNEL\_ORDERS](atlas.en-us.packagingGuide.meta/packagingGuide/apex_namespace_COA.htm "The CHANNEL_ORDERS namespace provides classes for submitting orders to Salesforce Partner Operations. After you send an order, you can use other classes in the namespace to edit, recall, or clone the order.")

## Usage

The COA\_ServiceOrderClone class contains a single @InvocableMethod to clone orders and, optionally, associated line items. When invoking a method defined in this class, include the CHANNEL\_ORDERS namespace prefix:

```

```

For details about namespace prefixes or the @InvocableMethod annotation, see the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/ "HTML (New Window)").

## Example

This example receives a list of service orders, clones them, and returns a list of outputs from the clone operation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

For brevity, the methods invoked in this example omit the CHANNEL\_ORDERS namespace prefix. If you use this code in your implementation, you must include the namespace prefix.

```

```

-   **[COA\_ServiceOrderClone Methods](atlas.en-us.packagingGuide.meta/packagingGuide/apex_COA_ServiceOrderClone_methods.htm)**
    The following are methods for COA\_ServiceOrderClone.
-   **[COA\_ServiceOrderCloneInput Class](atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderCloneInput.htm)**
    Wrapper class for input parameters passed to the clone operation.
-   **[COA\_ServiceOrderCloneOutput Class](atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderCloneOutput.htm)**
    Wrapper class for output parameters returned from the clone operation.

## Code Examples

```
CHANNEL_ORDERS.class.method(args)
```

```apex
public static void cloneOrders(List<Service_Order__c> serviceOrders){
        List<COA_ServiceOrderClone.COA_ServiceOrderCloneInput> serviceOrderCloneInput = new List<COA_ServiceOrderClone.COA_ServiceOrderCloneInput>();

        for(Service_Order__c serviceOrder: serviceOrders){
            COA_ServiceOrderClone.COA_ServiceOrderCloneInput input = new COA_ServiceOrderClone.COA_ServiceOrderCloneInput();
            input.serviceOrderId = serviceOrder.Id;
            input.cloneProducts = true;
            serviceOrderCloneInput.add(input);
        }

        List<COA_ServiceOrderClone.COA_ServiceOrderCloneOutput> serviceOrderCloneOutputs = COA_ServiceOrderClone.clone(serviceOrderCloneInput);
        //Further processing of serviceOrderCloneOutputs
    }
```

## Related Topics

- CHANNEL_ORDERS (atlas.en-us.packagingGuide.meta/packagingGuide/apex_namespace_COA.htm)
- COA_ServiceOrderClone Methods (atlas.en-us.packagingGuide.meta/packagingGuide/apex_COA_ServiceOrderClone_methods.htm)
- COA_ServiceOrderCloneInput Class (atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderCloneInput.htm)
- COA_ServiceOrderCloneOutput Class (atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderCloneOutput.htm)
