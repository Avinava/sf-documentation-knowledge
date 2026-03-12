---
title: "Long Class"
domain: apex-reference
topic: long-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.869Z
estimatedTokens: 570
namespace: System
keywords: [Long, primitive, data, Usage, intValue, valueOf, stringToLong]
---

# Long Class

> Contains methods for the Long primitive data type.

**Namespace:** `System`

# Long Class

Contains methods for the Long primitive data type.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

For more information on Long, see [Long Data Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_primitives.htm).

## Long Methods

The following are methods for Long.

-   **[format()](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_System_Long_format)**
    Returns the String format for this Long using the locale of the context user.
-   **[intValue()](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_System_Long_intValue)**
    Returns the Integer value for this Long.
-   **[valueOf(stringToLong)](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_System_Long_valueOf)**
    Returns a Long that contains the value of the specified String. As in Java, the string is interpreted as representing a signed decimal Long.

### format()

Returns the String format for this Long using the locale of the context user.

#### Signature

public String format()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### intValue()

Returns the Integer value for this Long.

#### Signature

public Integer intValue()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### valueOf(stringToLong)

Returns a Long that contains the value of the specified String. As in Java, the string is interpreted as representing a signed decimal Long.

#### Signature

public static Long valueOf(String stringToLong)

#### Parameters

stringToLong

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Long](#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Example

```

```

## Code Examples

```
Long myLong = 4271990;
system.assertEquals('4,271,990', myLong.format());
```

```
Long myLong = 7191991;
Integer value = myLong.intValue();
system.assertEquals(7191991, myLong.intValue());
```

```
Long L1 = long.valueOf('123456789');
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- format() (atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm)
- intValue() (atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm)
- valueOf(stringToLong) (atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
