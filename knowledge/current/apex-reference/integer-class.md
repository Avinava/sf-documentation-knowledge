---
title: "Integer Class"
domain: apex-reference
topic: integer-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.376Z
keywords: [Integer, Class, Converts, specified, object, Integer., method, convert, history, tracking, field, value, represents, value., valueOf, fieldValue, Signature, Parameters, Return, Value]
---

# Integer Class

> Converts the specified object to an Integer. Use this method to convert a history
    tracking field value or an object that represents an Integer value.

### valueOf(fieldValue)

Converts the specified object to an Integer. Use this method to convert a history tracking field value or an object that represents an Integer value.

#### Signature

public static Integer valueOf(Object fieldValue)

#### Parameters

fieldValue

Type: Object

#### Return Value

Type: [Integer](#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

Use this method with the OldValue or NewValue fields of history sObjects, such as AccountHistory, when the field type corresponds to an Integer type, like a number field.

Example:

#### Example

```

```