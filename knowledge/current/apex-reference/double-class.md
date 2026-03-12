---
title: "Double Class"
domain: apex-reference
topic: double-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.714Z
estimatedTokens: 1043
namespace: System
keywords: [Double, primitive, data, Usage, intValue, longValue, round, valueOf, stringToDouble, fieldValue]
---

# Double Class

> Contains methods for the Double primitive data type.

**Namespace:** `System`

# Double Class

Contains methods for the Double primitive data type.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

For more information on Double, see [Double Data Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_primitives.htm).

## Double Methods

The following are methods for Double.

-   **[format()](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_System_Double_format)**
    Returns the String value for this Double using the locale of the context user
-   **[intValue()](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_System_Double_intValue)**
    Returns the Integer value of this Double by casting it to an Integer.
-   **[longValue()](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_System_Double_longValue)**
    Returns the Long value of this Double.
-   **[round()](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_System_Double_round)**
    Returns the closest Long to this Double value.
-   **[valueOf(stringToDouble)](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_System_Double_valueOf)**
    Returns a Double that contains the value of the specified String. As in Java, the String is interpreted as representing a signed decimal.
-   **[valueOf(fieldValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_System_Double_valueOf_2)**
    Converts the specified object to a Double value. Use this method to convert a history tracking field value or an object that represents a Double value.

### format()

Returns the String value for this Double using the locale of the context user

#### Signature

public String format()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### intValue()

Returns the Integer value of this Double by casting it to an Integer.

#### Signature

public Integer intValue()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### longValue()

Returns the Long value of this Double.

#### Signature

public Long longValue()

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Example

```

```

### round()

Returns the closest Long to this Double value.

#### Signature

public Long round()

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Example

```

```

### valueOf(stringToDouble)

Returns a Double that contains the value of the specified String. As in Java, the String is interpreted as representing a signed decimal.

#### Signature

public static Double valueOf(String stringToDouble)

#### Parameters

stringToDouble

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Double](#apex_methods_system_double "Contains methods for the Double primitive data type.")

#### Example

```

```

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

## Code Examples

```
Double myDouble = 1261992;
system.assertEquals('1,261,992', myDouble.format());
```

```
Double DD1 = double.valueOf('3.14159');
Integer value = DD1.intValue();
system.assertEquals(value, 3);
```

```apex
Double myDouble = 421994;
Long value = myDouble.longValue();
System.assertEquals(421994, value);
```

```apex
Double D1 = 4.5;
Long L1 = D1.round();
System.assertEquals(5, L1);

Double D2= 4.2;
Long L2= D2.round();
System.assertEquals(4, L2);

Double D3= -4.7;
Long L3= D3.round();
System.assertEquals(-5, L3);
```

```
Double DD1 = double.valueOf('3.14159');
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- format() (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- intValue() (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- longValue() (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- round() (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- valueOf(stringToDouble) (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- valueOf(fieldValue) (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- Long (atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm)
