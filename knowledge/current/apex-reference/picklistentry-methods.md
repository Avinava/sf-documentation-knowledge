---
title: "PicklistEntry Methods"
domain: apex-reference
topic: picklistentry-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.235Z
keywords: [PicklistEntry, Methods, Returns, display, name, item, picklist., getLabel, Signature, Return, Value, getValue, isActive, isDefaultValue]
---

# PicklistEntry Methods

> Returns the display name of this item in the picklist.

## PicklistEntry Methods

The following are methods for PicklistEntry. All are instance methods.

-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_PicklistEntry.htm#apex_Schema_PicklistEntry_getLabel)**  
    Returns the display name of this item in the picklist.
-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_PicklistEntry.htm#apex_Schema_PicklistEntry_getValue)**  
    Returns the value of this item in the picklist.
-   **[isActive()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_PicklistEntry.htm#apex_Schema_PicklistEntry_isActive)**  
    Returns true if this item must be displayed in the drop-down list for the picklist field in the user interface, false otherwise.
-   **[isDefaultValue()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_PicklistEntry.htm#apex_Schema_PicklistEntry_isDefaultValue)**  
    Returns true if this item is the default value for the picklist, false otherwise. Only one item in a picklist can be designated as the default.

### getLabel()

Returns the display name of this item in the picklist.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the value of this item in the picklist.

#### Signature

public String getValue()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### isActive()

Returns true if this item must be displayed in the drop-down list for the picklist field in the user interface, false otherwise.

#### Signature

public Boolean isActive()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isDefaultValue()

Returns true if this item is the default value for the picklist, false otherwise. Only one item in a picklist can be designated as the default.

#### Signature

public Boolean isDefaultValue()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")