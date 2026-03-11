---
title: "DescribeLayoutComponent Methods"
domain: apex-reference
topic: describelayoutcomponent-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.648Z
keywords: [DescribeLayoutComponent, Methods, Returns, vertical, lines, displayed, field., Applies, textarea, multi-select, picklist, fields., getDisplayLines, Signature, Return, Value, getTabOrder, getType, getValue]
---

# DescribeLayoutComponent Methods

> Returns the vertical lines displayed for a field. Applies
to textarea and multi-select picklist fields.

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