---
title: "Double Class"
domain: apex-reference
topic: double-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.307Z
keywords: [Double, Class, Converts, specified, object, value., method, convert, history, tracking, field, value, represents, valueOf, fieldValue, Signature, Parameters, Return, Value, Usage]
---

# Double Class

> Converts the specified object to a Double value. Use this method to convert a history
    tracking field value or an object that represents a Double value.

### valueOf(fieldValue)

Converts the specified object to a Double value. Use this method to convert a history tracking field value or an object that represents a Double value.

#### Signature

public static Double valueOf(Object fieldValue)

#### Parameters

fieldValue

Type: Object

#### Return Value

Type: [Double](#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Usage

Use this method with the OldValue or NewValue fields of history sObjects, such as AccountHistory, when the field type corresponds to a Double type, like a number field.

#### Example

```

```