---
title: "Integer Class"
domain: apex-reference
topic: integer-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.751Z
estimatedTokens: 717
namespace: System
keywords: [Contains, primitive, data, type., Usage, format, Example, valueOf, stringToInteger, Examples, fieldValue]
---

# Integer Class

> Contains methods for the Integer primitive data type.

**Namespace:** `System`

# Integer Class

Contains methods for the Integer primitive data type.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

For more information on integers, see [Integer Data Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_primitives.htm).

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

## Code Examples

```
integer myInt = 22;
system.assertEquals('22', myInt.format());
```

```
Integer myInt = Integer.valueOf('123');
```

```apex
String n = 'NotAnInteger';
try {
    Integer myInt = Integer.valueOf(n);
} catch (TypeException ex) {
    System.debug(LoggingLevel.Error, ex.getMessage());
}
```

```apex
List<AccountHistory> ahlist = 
  [SELECT Field,OldValue,NewValue
   FROM AccountHistory];
for(AccountHistory ah : ahlist) {
  System.debug('Field: ' + ah.Field);
  if (ah.field == 'NumberOfEmployees') {
    Integer oldValue = 
      Integer.valueOf(ah.OldValue);
    Integer newValue = 
      Integer.valueOf(ah.NewValue);
}
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- format() (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- valueOf(stringToInteger) (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- valueOf(fieldValue) (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
