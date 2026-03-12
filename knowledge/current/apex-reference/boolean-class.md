---
title: "Boolean Class"
domain: apex-reference
topic: boolean-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.274Z
estimatedTokens: 537
namespace: System
keywords: [primitive, data, valueOf, stringToBoolean, Usage, fieldValue]
---

# Boolean Class

> Contains methods for the Boolean primitive data type.

**Namespace:** `System`

# Boolean Class

Contains methods for the Boolean primitive data type.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Boolean Methods

The following are methods for Boolean. All methods are static.

-   **[valueOf(stringToBoolean)](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_System_Boolean_valueOf)**
    Converts the specified string to a Boolean value and returns true if the specified string value is true. Otherwise, returns false.
-   **[valueOf(fieldValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_System_Boolean_valueOf_2)**
    Converts the specified object to a Boolean value. Use this method to convert a history tracking field value or an object that represents a Boolean value.

### valueOf(stringToBoolean)

Converts the specified string to a Boolean value and returns true if the specified string value is true. Otherwise, returns false.

#### Signature

public static Boolean valueOf(String stringToBoolean)

#### Parameters

stringToBoolean

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If the specified argument is null, this method throws an exception.

#### Example

```

```

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

## Code Examples

```apex
Boolean b = Boolean.valueOf('true');
System.assertEquals(true, b);
```

```apex
List<AccountHistory> ahlist = 
     [SELECT Field,OldValue,NewValue FROM AccountHistory];
for(AccountHistory ah : ahlist) {
   System.debug('Field: ' + ah.Field);
   if (ah.field == 'IsPlatinum__c') {
      Boolean oldValue = Boolean.valueOf(ah.OldValue);
      Boolean newValue = Boolean.valueOf(ah.NewValue);
   }
}
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- valueOf(stringToBoolean) (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- valueOf(fieldValue) (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
