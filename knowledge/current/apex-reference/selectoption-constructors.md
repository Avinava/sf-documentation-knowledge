---
title: "SelectOption Constructors"
domain: apex-reference
topic: selectoption-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.264Z
keywords: [SelectOption, Constructors, Creates, new, instance, class, specified, value, label., label, Signature, Parameters, isDisabled]
---

# SelectOption Constructors

> Creates a new instance of the SelectOption class using the specified value and label.

## SelectOption Constructors

The following are constructors for SelectOption.

-   **[SelectOption(value, label)](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_System_SelectOption_ctor_2)**  
    Creates a new instance of the SelectOption class using the specified value and label.
-   **[SelectOption(value, label, isDisabled)](atlas.en-us.apexref.meta/apexref/apex_pages_selectoption.htm#apex_System_SelectOption_ctor)**  
    Creates a new instance of the SelectOption class using the specified value, label, and disabled setting.

### SelectOption(value, label)

Creates a new instance of the SelectOption class using the specified value and label.

#### Signature

public SelectOption(String value, String label)

#### Parameters

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The string that is returned to the Visualforce controller if the option is selected by a user.

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The string that is displayed to the user as the option choice.

### SelectOption(value, label, isDisabled)

Creates a new instance of the SelectOption class using the specified value, label, and disabled setting.

#### Signature

public SelectOption(String value, String label, Boolean isDisabled)

#### Parameters

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The string that is returned to the Visualforce controller if the option is selected by a user.

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The string that is displayed to the user as the option choice.

isDisabled

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If set to true, the option can’t be selected by the user but can still be viewed.