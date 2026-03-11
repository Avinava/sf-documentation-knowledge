---
title: "DescribeLayoutItem Methods"
domain: apex-reference
topic: describelayoutitem-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.654Z
keywords: [DescribeLayoutItem, Methods, Returns, label, text, item., getLabel, Signature, Return, Value, getLayoutComponents, isEditableForNew, isEditableForUpdate, isPlaceholder, isRequired, Usage]
---

# DescribeLayoutItem Methods

> Returns the label text for this item.

## DescribeLayoutItem Methods

The following are methods for DescribeLayoutItem. All are instance methods.

-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm#apex_QuickAction_DescribeLayoutItem_getLabel)**  
    Returns the label text for this item.
-   **[getLayoutComponents()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm#apex_QuickAction_DescribeLayoutItem_getLayoutComponents)**  
    Returns a list of QuickAction.DescribeLayoutComponents for this item.
-   **[isEditableForNew()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm#apex_QuickAction_DescribeLayoutItem_isEditableForNew)**  
    Indicates whether this item can be edited for new (true) or not (false).
-   **[isEditableForUpdate()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm#apex_QuickAction_DescribeLayoutItem_isEditableForUpdate)**  
    Indicates whether this item can be edited for update(true) or not (false).
-   **[isPlaceholder()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm#apex_QuickAction_DescribeLayoutItem_isPlaceholder)**  
    Indicates whether this item is a placeholder (true) or not (false). If true, then this item is blank.
-   **[isRequired()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm#apex_QuickAction_DescribeLayoutItem_isRequired)**  
    Indicates whether this item is required (true) or not (false).

### getLabel()

Returns the label text for this item.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLayoutComponents()

Returns a list of QuickAction.DescribeLayoutComponents for this item.

#### Signature

public List<QuickAction.DescribeLayoutComponent> getLayoutComponents()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[QuickAction.DescribeLayoutComponent](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm#apex_class_quickaction_describelayoutcomponent "Represents the smallest unit in a layout—a field or a separator.")\>

### isEditableForNew()

Indicates whether this item can be edited for new (true) or not (false).

#### Signature

public Boolean isEditableForNew()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isEditableForUpdate()

Indicates whether this item can be edited for update(true) or not (false).

#### Signature

public Boolean isEditableForUpdate()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isPlaceholder()

Indicates whether this item is a placeholder (true) or not (false). If true, then this item is blank.

#### Signature

public Boolean isPlaceholder()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isRequired()

Indicates whether this item is required (true) or not (false).

#### Signature

public Boolean isRequired()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

This is useful if, for example, you want to render required fields in a contrasting color.