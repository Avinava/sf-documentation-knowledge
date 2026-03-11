---
title: "Integer Methods"
domain: apex-reference
topic: integer-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.376Z
keywords: [Integer, Methods, Returns, integer, string, locale, context, user., format, Signature, Return, Value, Example, valueOf, stringToInteger, Parameters, Examples, fieldValue, Usage]
---

# Integer Methods

> Returns the integer as a string using the locale of the
context user.

## Integer Methods

The following are methods for Integer.

-   **[format()](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_System_Integer_format)**  
    Returns the integer as a string using the locale of the context user.
-   **[valueOf(stringToInteger)](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_System_Integer_valueOf)**  
    Returns an Integer that contains the value of the specified String. As in Java, the String is interpreted as representing a signed decimal integer.
-   **[valueOf(fieldValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_System_Integer_valueOf_2)**  
    Converts the specified object to an Integer. Use this method to convert a history tracking field value or an object that represents an Integer value.

### format()

Returns the integer as a string using the locale of the context user.

#### Signature

public String format()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### valueOf(stringToInteger)

Returns an Integer that contains the value of the specified String. As in Java, the String is interpreted as representing a signed decimal integer.

#### Signature

public static Integer valueOf(String stringToInteger)

#### Parameters

stringToInteger

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Integer](#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Examples

```

```

A TypeException is returned if you attempt to convert a string to an invalid integer.

```

```

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