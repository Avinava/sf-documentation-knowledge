---
title: "DescribeLayoutRow Methods"
domain: apex-reference
topic: describelayoutrow-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.657Z
keywords: [DescribeLayoutRow, Methods, Returns, either, specific, field, empty, QuickAction.DescribeLayoutItem, contains, QuickAction.DescribeLayoutComponent, objects, getLayoutItems, Signature, Return, Value, getNumItems]
---

# DescribeLayoutRow Methods

> Returns either a specific field or an empty QuickAction.DescribeLayoutItem (one
that contains no QuickAction.DescribeLayoutComponent objects).

## DescribeLayoutRow Methods

The following are methods for DescribeLayoutRow. All are instance methods.

-   **[getLayoutItems()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutrow.htm#apex_QuickAction_DescribeLayoutRow_getLayoutItems)**  
    Returns either a specific field or an empty QuickAction.DescribeLayoutItem (one that contains no QuickAction.DescribeLayoutComponent objects).
-   **[getNumItems()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutrow.htm#apex_QuickAction_DescribeLayoutRow_getNumItems)**  
    Returns the number of QuickAction.DescribeLayoutItem.

### getLayoutItems()

Returns either a specific field or an empty QuickAction.DescribeLayoutItem (one that contains no QuickAction.DescribeLayoutComponent objects).

#### Signature

public List<QuickAction.DescribeLayoutItem> getLayoutItems()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[QuickAction.DescribeLayoutItem](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm#apex_class_quickaction_describelayoutitem "Represents an individual item in a QuickAction.DescribeLayoutRow.")\>

### getNumItems()

Returns the number of QuickAction.DescribeLayoutItem.

#### Signature

public Integer getNumItems()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")