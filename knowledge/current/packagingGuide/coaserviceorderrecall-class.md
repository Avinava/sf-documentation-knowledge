---
title: "COA_ServiceOrderRecall Class"
domain: packagingGuide
topic: coaserviceorderrecall-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.258Z
estimatedTokens: 509
keywords: [COA_ServiceOrderRecall, Recall, orders, you’ve, submitted, Salesforce, Partner, Operations, COA, _ServiceOrderRecall, Usage]
---

# COA_ServiceOrderRecall Class

> Recall orders that you’ve submitted to Salesforce Partner Operations.

# COA\_ServiceOrderRecall Class

Recall orders that you’ve submitted to Salesforce Partner Operations.

## Namespace

[CHANNEL\_ORDERS](atlas.en-us.packagingGuide.meta/packagingGuide/apex_namespace_COA.htm "The CHANNEL_ORDERS namespace provides classes for submitting orders to Salesforce Partner Operations. After you send an order, you can use other classes in the namespace to edit, recall, or clone the order.")

## Usage

The COA\_ServiceOrderRecall class contains a single @InvocableMethod for recalling orders that have been submitted to Salesforce Partner Operations but haven’t yet been processed. When you recall an order, it’s removed from the processing queue and isn’t activated. When invoking a method defined in this class, include the CHANNEL\_ORDERS namespace prefix:

```

```

For details about namespace prefixes or the @InvocableMethod annotation, see the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/ "HTML (New Window)").

## Example

This example receives a list of service orders, recalls them, and returns a list of outputs from the recall operation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

For brevity, the methods invoked in this example omit the CHANNEL\_ORDERS namespace prefix. If you use this code in your implementation, you must include the namespace prefix.

```

```

-   **[COA\_ServiceOrderRecall Methods](atlas.en-us.packagingGuide.meta/packagingGuide/apex_COA_ServiceOrderRecall_methods.htm)**
    The following are methods for COA\_ServiceOrderRecall.
-   **[COA\_ServiceOrderRecallInput Class](atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderRecallInput.htm)**
    Wrapper class for input parameters passed to the recall operation.
-   **[COA\_ServiceOrderRecallOutput Class](atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderRecallOutput.htm)**
    Wrapper class for output parameters returned from the recall operation.

## Code Examples

```
CHANNEL_ORDERS.class.method(args)
```

```apex
public static void recallOrders(List<Service_Order__c> serviceOrders){
        List<COA_ServiceOrderRecall.COA_ServiceOrderRecallInput> serviceOrderRecallInput = new List<COA_ServiceOrderRecall.COA_ServiceOrderRecallInput>();

        for(Service_Order__c serviceOrder: serviceOrders){
            COA_ServiceOrderRecall.COA_ServiceOrderRecallInput input = new COA_ServiceOrderRecall.COA_ServiceOrderRecallInput();
            input.serviceOrderId = serviceOrder.Id;
            serviceOrderRecallInput.add(input);
        }

        List<COA_ServiceOrderRecall.COA_ServiceOrderRecallOutput> serviceOrderRecallOutputs = COA_ServiceOrderRecall.recall(serviceOrderRecallInput);
        
    for(COA_ServiceOrderRecall.COA_ServiceOrderRecallOutput serviceOrderRecallOutput: serviceOrderRecallOutputs){
        System.debug('Service Order Id: '+serviceOrderRecallOutput.serviceOrderId);
        System.debug('Success?: '+serviceOrderRecallOutput.isSuccess);             
        System.debug('Response Messages: '+serviceOrderRecallOutput.responseMessages);
    }
}
```

## Related Topics

- CHANNEL_ORDERS (atlas.en-us.packagingGuide.meta/packagingGuide/apex_namespace_COA.htm)
- COA_ServiceOrderRecall Methods (atlas.en-us.packagingGuide.meta/packagingGuide/apex_COA_ServiceOrderRecall_methods.htm)
- COA_ServiceOrderRecallInput Class (atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderRecallInput.htm)
- COA_ServiceOrderRecallOutput Class (atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderRecallOutput.htm)
