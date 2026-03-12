---
title: "OrgLimit Class"
domain: apex-reference
topic: orglimit-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.276Z
estimatedTokens: 761
namespace: System
keywords: [OrgLimit, Contains, provide, name, maximum, current, org, limit., Usage, Note, getLimit, Example, getName, getValue, toString]
---

# OrgLimit Class

> Contains methods that provide the name, maximum value, and current
      value of an org limit.

**Namespace:** `System`

# OrgLimit Class

Contains methods that provide the name, maximum value, and current value of an org limit.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the System.OrgLimits getAll and getMap methods to obtain either a list or a map of all your org limits. To get details on each limit, use instance methods from System.OrgLimit.

For comparison, the [Limits Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_limits.htm#apex_methods_system_limits "Contains methods that return limit information for specific resources.") returns Apex governor limits and not Salesforce API limits.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Limit values are updated asynchronously, in near-real-time.

-   **[OrgLimit Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_System_OrgLimit_methods)**


## OrgLimit Methods

The following are methods for OrgLimit.

-   **[getLimit()](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_System_OrgLimit_getLimit)**
    Returns the maximum allowed limit value.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_System_OrgLimit_getName)**
    Returns the limit’s name.
-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_System_OrgLimit_getValue)**
    Returns the limit usage value.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm#apex_System_OrgLimit_toString)**
    Returns the string representation of the org limit.

### getLimit()

Returns the maximum allowed limit value.

#### Signature

public Integer getLimit()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### getName()

Returns the limit’s name.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### getValue()

Returns the limit usage value.

#### Signature

public Integer getValue()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### toString()

Returns the string representation of the org limit.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

String denoting the name, current consumption, and maximum value of the org limit. For example:

OrgLimit\[DailyBulkApiBatches: consumed 25 of 15000\]

## Code Examples

```apex
List<System.OrgLimit> limits = OrgLimits.getAll();
for (System.OrgLimit aLimit: limits) {
    System.debug('Limit: ' + aLimit.getName());
    System.debug('Max Limit is: ' + aLimit.getLimit());
}
```

```apex
List<System.OrgLimit> limits = OrgLimits.getAll();
for (System.OrgLimit aLimit: limits) {
    System.debug('Limit: ' + aLimit.getName());
    System.debug('Max Limit is: ' + aLimit.getLimit());
}
```

```apex
List<System.OrgLimit> limits = OrgLimits.getAll();
for (System.OrgLimit aLimit: limits) {
    System.debug('Limit: ' + aLimit.getName());
    System.debug('Usage Value is: ' + aLimit.getValue());
}
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Limits Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_limits.htm)
- OrgLimit Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm)
- getLimit() (atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm)
- getName() (atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm)
- getValue() (atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm)
- toString() (atlas.en-us.apexref.meta/apexref/apex_class_System_OrgLimit.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
