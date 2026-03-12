---
title: "COA_ServiceOrderSubmit Class"
domain: packagingGuide
topic: coaserviceordersubmit-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.266Z
estimatedTokens: 625
keywords: [COA_ServiceOrderSubmit, Submit, orders, Salesforce, Partner, Operations, processing, activation, COA, _ServiceOrderSubmit, Usage, Order, Status]
---

# COA_ServiceOrderSubmit Class

> Submit orders to Salesforce Partner Operations for processing and activation.

# COA\_ServiceOrderSubmit Class

Submit orders to Salesforce Partner Operations for processing and activation.

## Namespace

[CHANNEL\_ORDERS](atlas.en-us.packagingGuide.meta/packagingGuide/apex_namespace_COA.htm "The CHANNEL_ORDERS namespace provides classes for submitting orders to Salesforce Partner Operations. After you send an order, you can use other classes in the namespace to edit, recall, or clone the order.")

## Usage

The COA\_ServiceOrderSubmit class contains a single @InvocableMethod for submitting orders to Salesforce Partner Operations. When invoking a method defined in this class, include the CHANNEL\_ORDERS namespace prefix:

```

```

For details about namespace prefixes or the @InvocableMethod annotation, see the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/ "HTML (New Window)").

## Example

This example receives a list of service orders, submits them, and returns a list of outputs from the submit operation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

For brevity, the methods invoked in this example omit the CHANNEL\_ORDERS namespace prefix. If you use this code in your implementation, you must include the namespace prefix.

```

```

## Order Status

When you submit a draft order using the COA\_ServiceOrderSubmit class, the response tells you if the operation succeeded. The response doesn’t set the status of the related service order record, so the Service\_Order\_Status\_\_c field remains Draft. If you build an implementation to set the status of submitted orders, we suggest the following logic: if the response includes a success code, set the order status to Received. Otherwise, set the status to Error. For orders with errors, you can store notes from Salesforce Partner Operations in the Error\_Comment\_\_c field.

-   **[COA\_ServiceOrderSubmit Methods](atlas.en-us.packagingGuide.meta/packagingGuide/apex_COA_ServiceOrderSubmit_methods.htm)**
    The following are methods for COA\_ServiceOrderSubmit.
-   **[COA\_ServiceOrderSubmitInput Class](atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderSubmitInput.htm)**
    Wrapper class for input parameters passed to the submit operation.
-   **[COA\_ServiceOrderSubmitOutput Class](atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderSubmitOutput.htm)**
    Wrapper class for output parameters returned from the submit operation.

## Code Examples

```
CHANNEL_ORDERS.class.method(args)
```

```apex
public static void submitOrders(List<Service_Order__c> serviceOrders){
    List<COA_ServiceOrderSubmit.COA_ServiceOrderSubmitInput> serviceOrderSubmitInput = new List<COA_ServiceOrderSubmit.COA_ServiceOrderSubmitInput>();
    
    for(Service_Order__c serviceOrder: serviceOrders){
        COA_ServiceOrderSubmit.COA_ServiceOrderSubmitInput input = new COA_ServiceOrderSubmit.COA_ServiceOrderSubmitInput();
        input.serviceOrderId = serviceOrder.Id;
        serviceOrderSubmitInput.add(input);
    }
    
    List<COA_ServiceOrderSubmit.COA_ServiceOrderSubmitOutput> serviceOrderSubmitOutputs = COA_ServiceOrderSubmit.submit(serviceOrderSubmitInput);
        
    for(COA_ServiceOrderSubmit.COA_ServiceOrderSubmitOutput serviceOrderSubmitOutput: serviceOrderSubmitOutputs){
        System.debug('Service Order Id: '+serviceOrderSubmitOutput.serviceOrderId);
        System.debug('Success?: '+serviceOrderSubmitOutput.isSuccess);             
        System.debug('Response Messages: '+serviceOrderSubmitOutput.responseMessages);
    }
}
```

## Related Topics

- CHANNEL_ORDERS (atlas.en-us.packagingGuide.meta/packagingGuide/apex_namespace_COA.htm)
- COA_ServiceOrderSubmit Methods (atlas.en-us.packagingGuide.meta/packagingGuide/apex_COA_ServiceOrderSubmit_methods.htm)
- COA_ServiceOrderSubmitInput Class (atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderSubmitInput.htm)
- COA_ServiceOrderSubmitOutput Class (atlas.en-us.packagingGuide.meta/packagingGuide/apex_class_COA_ServiceOrderSubmitOutput.htm)
