---
title: "Retail Order Save Customization Use Cases"
domain: retail-api
topic: retail-order-save-customization-use-cases
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.200Z
estimatedTokens: 263
keywords: [Retail, Order, Save, Customization, Cases, different, Apex, process, Change, managed, package, sObject, Add, custom, define]
---

# Retail Order Save Customization Use Cases

> Here are the different Apex customization use cases for the retail order save
    process.

# Retail Order Save Customization Use Cases

Here are the different Apex customization use cases for the retail order save process.

## Change a managed package sObject field value

Here’s a sample Apex class that modifies the custom field text of an order.

```

```

## Add a custom sObject

Here’s a sample Apex class that adds an additional sObject record to the order that is saved.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

The RE\_Order class ensures that all the order-related sObjects are committed in an all-or-none fashion while encapsulating all operations in a transaction.

## Add a custom sObject and define a parent-child relationship

Here’s a sample Apex class that adds a custom sObject and relates it to the parent sObject.

```

```

## Save custom data in the retail UI

Here’s a sample Apex class that saves the custom data along with the order data. In your callable class, you can access the custom state that was set as part of the order state.

```

```

## Code Examples

```apex
global class RetailOrderSampleSaveCustomization implements System.Callable {
  public Object call(String m, Map<String, Object> params) {
    // Get the RE_Order instance
    cgcloud.RE_Order orderWrapper = (cgcloud.RE_Order) params.get('order');

    // Update the Order__c SObject field
    cgcloud__Order__c order = (cgcloud__Order__c) orderWrapper.getOrder()
      .getRecord();
    // Customer_Order_Id__c field is part of the cgcloud managed package.
    order.cgcloud__Customer_Order_Id__c = 'customer-order-id';

    // Get the First Order_Item__c and update its Custom__c field value
    cgcloud__Order_Item__c orderItem = (cgcloud__Order_Item__c) orderWrapper.getOrderItems()[0]
      .getRecord();
    // Custom__c is a custom field created by the customer.
    orderItem.Custom__c = 'My New custom text';

    return null;
  }
}
```

```apex
global class RetailOrderSaveCustomization implements System.Callable {
  public Object call(String m, Map<String, Object> params) {
    // Get the RE_Order instance
    cgcloud.RE_Order orderWrapper = (cgcloud.RE_Order) params.get('order');

    // Get the Order__c SObject
    cgcloud__Order__c order = (cgcloud__Order__c) orderWrapper.getOrder()
      .getRecord();

    /**
     * MyCustomSObject__c is a custom object and it has a Custom__c field.
     * Use append method so that this new SObject will be created as part of the order save process.
     */
    MyCustomSObject__c mySObject = new MyCustomSObject__c();
    mySObject.Custom__c = order.cgcloud__Customer_Order_Id__c;
    cgcloud.RE_Order.Record myRecordWrapper = orderWrapper.append(mySObject);

    return null;
  }
}
```

```apex
global class RetailOrderSaveCustomization implements System.Callable {
  public Object call(String m, Map<String, Object> params) {
    cgcloud.RE_Order orderWrapper = (cgcloud.RE_Order) params.get('order');
    cgcloud__Order__c order = (cgcloud__Order__c) orderWrapper.getOrder().getRecord();

    // Append a new SObject to be saved
    MyCustomSObject__c mySObject = new MyCustomSObject__c();
    cgcloud.RE_Order.Record myRecordWrapper = orderWrapper.append(mySObject);

    // Add relationship to the Order__c record
    orderWrapper.addRelationship(
      myRecordWrapper,
      MyCustomSObject__c.Order__c,
      orderWrapper.getOrder()
    );

    // Append an additional Child SObject
    MyChildSObject__c myChildSObject = new MyChildSObject__c();
    cgcloud.RE_Order.Record myChildRecordWrapper = orderWrapper.append(
      myChildSObject
    );

    // Relate the child object to the custom object
    orderWrapper.addRelationship(
      myChildRecordWrapper,
      MyChildSObject__c.MyCustomSObject__c,
      myRecordWrapper
    );

    return null;
  }
}
```

```apex
global class RetailOrderSaveCustomization implements System.Callable {
  public Object call(String m, Map<String, Object> params) {
    // Get the RE_Order instance
    cgcloud.RE_Order orderWrapper = (cgcloud.RE_Order) params.get('order');

    // Get the custom data serialized data
    String payloadString = (String) params.get('customState');

    if (payloadString != null && payloadString != '') {
      Map<String, Object> customPayload = (Map<String, Object>) JSON.deserializeUntyped(
        payloadString
      );

      // Append a new SObject to be saved
      MyCustomSObject__c mySObject = new MyCustomSObject__c();
      mySObject.Custom__c = (String) customPayload.get('Custom__c');
      mySObject.Duration__c = (Integer) customPayload.get('Duration__c');

      if (mySObject.Custom__c != null && mySObject.Duration__c != null) {
        cgcloud.RE_Order.Record myRecordWrapper = orderWrapper.append(
          mySObject
        );

        // Add relationship to the Order__c record
        orderWrapper.addRelationship(
          myRecordWrapper,
          MyCustomSObject__c.Order__c,
          orderWrapper.getOrder()
        );
      }
    }

    return null;
  }
}
```
