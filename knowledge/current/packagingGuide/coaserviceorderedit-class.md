---
title: "COA_ServiceOrderEdit Class"
domain: packagingGuide
topic: coaserviceorderedit-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.251Z
estimatedTokens: 485
keywords: [COA_ServiceOrderEdit, Edit, orders, you’ve, submitted, Salesforce, Partner, Operations, COA, _ServiceOrderEdit, Usage]
---

# COA_ServiceOrderEdit Class

> Edit orders that you’ve submitted to Salesforce Partner Operations.

# COA\_ServiceOrderEdit Class

Edit orders that you’ve submitted to Salesforce Partner Operations.

## Namespace

[CHANNEL\_ORDERS](atlas.en-us.packagingGuide.meta/packagingGuide/apex_namespace_COA.htm "The CHANNEL_ORDERS namespace provides classes for submitting orders to Salesforce Partner Operations. After you send an order, you can use other classes in the namespace to edit, recall, or clone the order.")

## Usage

The COA\_ServiceOrderEdit class contains a single @InvocableMethod for editing orders that have been submitted to Salesforce Partner Operations but haven’t been processed. When invoking a method defined in this class, include the CHANNEL\_ORDERS namespace prefix:

```

```

For details about namespace prefixes or the @InvocableMethod annotation, see the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/ "HTML (New Window)").

## Example

This example receives a list of service orders that have been edited, submits them, and returns a list of outputs from the edit operation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

For brevity, the methods invoked in this example omit the CHANNEL\_ORDERS namespace prefix. If you use this code in your implementation, you must include the namespace prefix.

```

```

-   **[COA\_ServiceOrderEdit Methods](atlas.en-us.packagingGuide.meta/packagingGuide/apex_COA_ServiceOrderEdit_methods.htm)**
    The following are methods for COA\_ServiceOrderEdit.
-   **[COA\_ServiceOrderEditInput Class](atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderEditInput.htm)**
    Wrapper class for input parameters passed to the edit operation.
-   **[COA\_ServiceOrderEditOutput Class](atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderEditOutput.htm)**
    Wrapper class for output parameters returned from the edit operation.

## Code Examples

```
CHANNEL_ORDERS.class.method(args)
```

```apex
public static void editOrders(List<Service_Order__c> serviceOrders){
    List<COA_ServiceOrderEdit.COA_ServiceOrderEditInput> serviceOrderEditInput = new List<COA_ServiceOrderEdit.COA_ServiceOrderEditInput>();
    
    for(Service_Order__c serviceOrder: serviceOrders){
        COA_ServiceOrderEdit.COA_ServiceOrderEditInput input = new COA_ServiceOrderEdit.COA_ServiceOrderEditInput();
        input.serviceOrderId = serviceOrder.Id;
        serviceOrderEditInput.add(input);
    }
    
    List<COA_ServiceOrderEdit.COA_ServiceOrderEditOutput> serviceOrderEditOutputs = COA_ServiceOrderEdit.edit(serviceOrderEditInput);
        
    for(COA_ServiceOrderEdit.COA_ServiceOrderEditOutput serviceOrderEditOutput: serviceOrderEditOutputs){
        System.debug('Service Order Id: '+serviceOrderEditOutput.serviceOrderId);
        System.debug('Success?: '+serviceOrderEditOutput.isSuccess);             
        System.debug('Response Messages: '+serviceOrderEditOutput.responseMessages);
    }
}
```

## Related Topics

- CHANNEL_ORDERS (atlas.en-us.packagingGuide.meta/packagingGuide/apex_namespace_COA.htm)
- COA_ServiceOrderEdit Methods (atlas.en-us.packagingGuide.meta/packagingGuide/apex_COA_ServiceOrderEdit_methods.htm)
- COA_ServiceOrderEditInput Class (atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderEditInput.htm)
- COA_ServiceOrderEditOutput Class (atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderEditOutput.htm)
