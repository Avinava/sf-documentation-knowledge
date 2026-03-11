---
title: "Long Methods"
domain: apex-reference
topic: long-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.440Z
keywords: [Long, Methods, Returns, String, format, locale, context, user., Signature, Return, Value, Example, intValue, valueOf, stringToLong, Parameters]
---

# Long Methods

> Returns the String format for this Long using the locale
of the context user.

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