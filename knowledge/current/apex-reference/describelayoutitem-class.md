---
title: "DescribeLayoutItem Class"
domain: apex-reference
topic: describelayoutitem-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.784Z
estimatedTokens: 1130
namespace: QuickAction
keywords: [DescribeLayoutItem, Represents, individual, item, QuickAction.DescribeLayoutRow., Usage, getLabel, getLayoutComponents, isEditableForNew, isEditableForUpdate, isPlaceholder, isRequired]
---

# DescribeLayoutItem Class

> Represents an individual item in a QuickAction.DescribeLayoutRow.

**Namespace:** `QuickAction`

# DescribeLayoutItem Class

Represents an individual item in a QuickAction.DescribeLayoutRow.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

## Usage

For most fields on a layout, there is only one component per layout item. However, in a display-only view, the QuickAction.DescribeLayoutItem might be a composite of the individual fields (for example, an address can consist of street, city, state, country, and postal code data). On the corresponding edit view, each component of the address field would be split up into separate QuickAction.DescribeLayoutItems.

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

## Related Topics

- QuickAction (atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm)
- getLayoutComponents() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm)
- isEditableForNew() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm)
- isEditableForUpdate() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm)
- isPlaceholder() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm)
- isRequired() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- QuickAction.DescribeLayoutComponent (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm)
