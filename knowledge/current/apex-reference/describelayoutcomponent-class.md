---
title: "DescribeLayoutComponent Class"
domain: apex-reference
topic: describelayoutcomponent-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.776Z
estimatedTokens: 675
namespace: QuickAction
keywords: [DescribeLayoutComponent, Represents, smallest, unit, layout—a, field, separator., getDisplayLines, getTabOrder, getType, getValue]
---

# DescribeLayoutComponent Class

> Represents the smallest unit in a layout—a field
or a separator.

**Namespace:** `QuickAction`

# DescribeLayoutComponent Class

Represents the smallest unit in a layout—a field or a separator.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

## DescribeLayoutComponent Methods

The following are methods for DescribeLayoutComponent. All are instance methods.

-   **[getDisplayLines()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm#apex_QuickAction_DescribeLayoutComponent_getDisplayLines)**
    Returns the vertical lines displayed for a field. Applies to textarea and multi-select picklist fields.
-   **[getTabOrder()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm#apex_QuickAction_DescribeLayoutComponent_getTabOrder)**
    Returns the tab order for the item in the row.
-   **[getType()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm#apex_QuickAction_DescribeLayoutComponent_getType)**
    Returns the name of the QuickAction.DescribeLayoutComponent type for this component.
-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm#apex_QuickAction_DescribeLayoutComponent_getValue)**
    Returns the name of the field if the type for QuickAction.DescribeLayoutComponent is textarea.

### getDisplayLines()

Returns the vertical lines displayed for a field. Applies to textarea and multi-select picklist fields.

#### Signature

public Integer getDisplayLines()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getTabOrder()

Returns the tab order for the item in the row.

#### Signature

public Integer getTabOrder()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getType()

Returns the name of the QuickAction.DescribeLayoutComponent type for this component.

#### Signature

public String getType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the name of the field if the type for QuickAction.DescribeLayoutComponent is textarea.

#### Signature

public String getValue()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- QuickAction (atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm)
- getDisplayLines() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm)
- getTabOrder() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm)
- getType() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm)
- getValue() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
