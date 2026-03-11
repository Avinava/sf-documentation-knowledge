---
title: "Boolean Class"
domain: apex-reference
topic: boolean-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.930Z
keywords: [Boolean, Class, Converts, specified, object, value., method, convert, history, tracking, field, value, represents, valueOf, fieldValue, Signature, Parameters, Return, Value, Usage]
---

# Boolean Class

> Converts the specified object to a Boolean value. Use this method to convert a history
    tracking field value or an object that represents a Boolean value.

### valueOf(fieldValue)

Converts the specified object to a Boolean value. Use this method to convert a history tracking field value or an object that represents a Boolean value.

#### Signature

public static Boolean valueOf(Object fieldValue)

#### Parameters

fieldValue

Type: Object

#### Return Value

Type: [Boolean](#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Use this method with the OldValue or NewValue fields of history sObjects, such as AccountHistory, when the field type corresponds to a Boolean type, like a checkbox field.

#### Example

```

```