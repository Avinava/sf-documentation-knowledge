---
title: "RE_Order.Record Class"
domain: retail-api
topic: reorderrecord-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.483Z
estimatedTokens: 244
namespace: Each
keywords: [RE_Order.Record, Apex, wrapper, order, sObject, records, _Order.Record, Implementation, isDeleted, isNew, getId, getOriginalRecord]
---

# RE_Order.Record Class

> The RE_Order.Record Apex class provides a wrapper
    for the order sObject records.

**Namespace:** `Each`

# RE\_Order.Record Class

The RE\_Order.Record Apex class provides a wrapper for the order sObject records.

## Namespace

Each instance wraps an RE\_Order sObject record and provides methods to extract the child sObject records.

```

```

## Example Implementation

```

```

## Supported Methods

## isDeleted()

Indicates if the record is flagged for deletion or the record is updated during save.

API Version

59.0

Signature

global Boolean isDeleted()

## isNew()

Indicates if the record is new or already exists in the database.

API Version

59.0

Signature

global Boolean isNew()

## getId()

Returns the temporary ID for the wrapped record. The order save process uses temporary IDs for records that are still not committed to the database.

API Version

59.0

Signature

global Boolean getId()

## getOriginalRecord()

Returns the wrapped sObject record. You can update the returned record field values.

API Version

59.0

Signature

global Boolean getRecord()

## Code Examples

```
cgcloud.RE_Order orderWrapper = (cgcloud.RE_Order) params.get('order');

// Append the object to create a wrapper
cgcloud.RE_Order.Record myRecord = orderWrapper.append(
  new MyRecord__c()
);

// Extract the SObject
MyRecord__c rec = (MyRecord__c) myRecord.getRecord();

myRecord.isNew(); // true
myRecord.isDeleted(); // false
myRecord.getId(); // A temporary SFDC Id
rec.Field1__c; // 'Hello'
rec.Field2__c; // 'World!'
```
