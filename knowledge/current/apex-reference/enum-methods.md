---
title: "Enum Methods"
domain: apex-reference
topic: enum-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.675Z
estimatedTokens: 257
keywords: [abstract, data, values, take, exactly, finite, set, identifiers, specify., Apex, provides, built-in, enums, such, LoggingLevel, define, own, enum., Example]
---

# Enum Methods

> An enum is an abstract data type with values that each take on exactly one of a finite
  set of identifiers that you specify. Apex provides built-in enums, such as LoggingLevel, and you can define your own enum.

# Enum Methods

An enum is an abstract data type with values that each take on exactly one of a finite set of identifiers that you specify. Apex provides built-in enums, such as LoggingLevel, and you can define your own enum.

All Apex enums, whether user-defined enums or built-in enums, have these common methods:

values

This method returns the values of the Enum as a list of the same Enum type.

valueOf(string enumStr)

This method converts a specified string to an enum constant value. An exception is thrown if the input string doesn’t match an enum value.

Each Enum value has the following methods that take no arguments.

name

Returns the name of the Enum item as a String.

ordinal

Returns the position of the item, as an Integer, in the list of Enum values starting with zero.

Enum values cannot have user-defined methods added to them.

For more information about Enum, see [Enums](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_enums.htm).

## Example

```

```

## Code Examples

```apex
Integer i = StatusCode.DELETE_FAILED.ordinal();

String s = StatusCode.DELETE_FAILED.name();

List<StatusCode> values = StatusCode.values();

StatusCode statusCodeValue = StatusCode.valueOf('delete_failed');
```
