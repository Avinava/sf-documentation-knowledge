---
title: "RE_Order Class"
domain: retail-api
topic: reorder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.477Z
estimatedTokens: 619
keywords: [RE_Order, Apex, programmatic, access, retail, order, sObject, sObjects, _Order, Implementation, getOrder, getOrderItems, List<RE, _Order.Record>, append]
---

# RE_Order Class

> This Apex class provides programmatic access to the retail order sObject, and its
    related sObjects.

# RE\_Order Class

This Apex class provides programmatic access to the retail order sObject, and its related sObjects.

## Namespace

```

```

## Example Implementation

```

```

## Supported Methods

## getOrder()

Returns the RE\_Order.Record instance with the order contents.

API Version

59.0

Signature

global RE\_Order.Record getOrder()

Example

```

```

## getOrderItems()

Returns the List<RE\_Order.Record> instances with order items.

API Version

59.0

Signature

global List<RE\_Order.Record> getOrderItems()

Example

```

```

## List<RE\_Order.Record> getOrderItems()

Returns filtered List<RE\_Order.Record> instances with order items.

API Version

59.0

Signature

global List<RE\_Order.Record> getOrderItems(Boolean includeNew, Boolean includeDirty, Boolean includeDeleted)

Example

```

```

## append(SObject record)

Appends a custom sObject record to the RE\_Order instance. When the order object gets saved, this record is inserted, updated, or deleted, depending on the RE\_Order.Record instance state.

API Version

59.0

Signature

global RE\_Order.Record append(SObject record)

Example

```

```

## addRelationship(RE\_Order.Record child, SObjectField relationField, RE\_Order.Record parent)

Notifies the RE\_Order instance about a relationship between two records.

Avoid using direct DML manipulations for records that are part of the transactional state of an order. During the order save process, the records provided by the RE\_Order instances use temporary IDs for records that aren’t still in the database. Using the methods provided by the RE\_Order object ensures that all relationships and IDs are properly resolved before committing.

API Version

59.0

Signature

global void addRelationship(RE\_Order.Record child, SObjectField relationField, RE\_Order.Record parent)

Example

```

```

## registerWork(DoWork work)

Adds work to be executed after the order is committed to the database. Use this method to perform additional operations after all the order-related records are correctly committed to the database. For information on the RE\_Order.DoWork interface methods, see [RE\_Order.DoWork Interface](atlas.en-us.retail_api.meta/retail_api/RE_order_do_work_interface.htm "The RE_Order.DoWork Apex interface provides the capability to perform additional work after an order and the related records are committed to the database.")

API Version

59.0

Signature

global void registerWork(DoWork work)

Example

```

```

## Code Examples

```
cgcloud.RE_Order Order;
```

```apex
global class RetailOrderSaveCustomization implements System.Callable {
  public Object call(String m, Map<String, Object> params) {
    cgcloud.RE_Order orderWrapper = (cgcloud.RE_Order) params.get('order');
    cgcloud__Order__c order = (cgcloud__Order__c) orderWrapper.getOrder().getRecord();
  
    System.debug(order.Customer_Order_Id__c);
    return null;
  }
}
```

```apex
public with sharing class RetailOrderSaveCustomization implements System.Callable {
  public Object call(String m, Map<String, Object> params) {
    cgcloud.RE_Order orderWrapper = (cgcloud.RE_Order) params.get('order');
    cgcloud__Order__c order = (cgcloud__Order__c) orderWrapper.getOrder().getRecord();
    List<cgcloud.RE_Order.Record> orderItemRecords = (List<cgcloud.RE_Order.Record>) orderWrapper.getOrderItems();

    if (orderItemRecords != null) {
      for (cgcloud.RE_Order.Record orderItemRecord : orderItemRecords) {
        cgcloud__Order_Item__c orderItem = (cgcloud__Order_Item__c) orderItemRecord.getRecord();

        System.debug(orderItem.Delivery_Date__c);
      }
    }
  }
}
```

```apex
global class RetailOrderSaveCustomization implements System.Callable {
  public Object call(String m, Map<String, Object> params) {
    cgcloud.RE_Order orderWrapper = (cgcloud.RE_Order) params.get('order');
    cgcloud__Order__c order = (cgcloud__Order__c) orderWrapper.getOrder().getRecord();
    List<cgcloud.RE_Order.Record> orderItemRecords = (List<cgcloud.RE_Order.Record>) orderWrapper.getOrderItems(
      true,
      true,
      false
    );

    if (orderItemRecords != null) {
      for (cgcloud.RE_Order.Record orderItemRecord : orderItemRecords) {
        cgcloud__Order_Item__c orderItem = (cgcloud__Order_Item__c) orderItemRecord.getRecord();

        System.debug(orderItem.Delivery_Date__c);
      }
    }
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
    MyCustomObject__c mySObject = new MyCustomObject__c();
    mySObject.Field1__c = 'test1';
    mySObject.Duration__c = 23;

    cgcloud.RE_Order.Record myRecordWrapper = orderWrapper.append(mySObject);

    // Add a relationship to the Order__c record
    orderWrapper.addRelationship(
      myRecordWrapper,
      MyCustomObject__c.Order__c,
      orderWrapper.getOrder()
    );
    return null;
  }
}
```

## Related Topics

- RE_Order.DoWork Interface (atlas.en-us.retail_api.meta/retail_api/RE_order_do_work_interface.htm)
