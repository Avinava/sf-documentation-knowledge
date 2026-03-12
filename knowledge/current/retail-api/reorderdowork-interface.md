---
title: "RE_Order.DoWork Interface"
domain: retail-api
topic: reorderdowork-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.480Z
estimatedTokens: 138
namespace: The
keywords: [RE_Order.DoWork, Apex, capability, perform, additional, work, order, records, committed, database, _Order.DoWork, Implementation, doWork]
---

# RE_Order.DoWork Interface

> The RE_Order.DoWork Apex interface provides the
    capability to perform additional work after an order and the related records are committed to
    the database.

**Namespace:** `The`

# RE\_Order.DoWork Interface

The RE\_Order.DoWork Apex interface provides the capability to perform additional work after an order and the related records are committed to the database.

## Namespace

The transaction gets rolled back if there are any errors reported during the doWork execution.

```

```

## Example Implementation

```

```

## Supported Methods

## doWork()

Append the work to be executed after the order and its related records are committed to the database.

API Version

59.0

Signature

global void doWork()

Example

```

```

## Code Examples

```
cgcloud.RE_Order.DoWork;
```

```apex
global class RetailOrderSaveCustomization implements System.Callable {
  public class MyAfterCommitWork implements cgcloud.RE_Order.DoWork {
    cgcloud__Order__c m_order = null;

    MyAfterCommitWork(cgcloud__Order__c order) {
      m_order = order;
    }

    // This method will be called after the order and related record
    // changes are committed to the database.
    // If any error is thrown during the execution of doWork, the transaction
    // will be rolled back
    global override void doWork() {
      system.debug('Im here!');
    }
  }

  public Object call(String m, Map<String, Object> params) {
    cgcloud.RE_Order orderWrapper = (cgcloud.RE_Order) params.get('order');
    cgcloud__Order__c order = (cgcloud__Order__c) orderWrapper.getOrder()
      .getRecord();

    orderWrapper.registerWork(new MyAfterCommitWork(order));
    return null;
  }
}
```
