---
title: "DescribeLayoutRow Class"
domain: apex-reference
topic: describelayoutrow-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.788Z
estimatedTokens: 585
namespace: QuickAction
keywords: [DescribeLayoutRow, Represents, row, QuickAction.DescribeLayoutSection., Usage, getLayoutItems, getNumItems]
---

# DescribeLayoutRow Class

> Represents a row in a QuickAction.DescribeLayoutSection.

**Namespace:** `QuickAction`

# DescribeLayoutRow Class

Represents a row in a QuickAction.DescribeLayoutSection.

## Namespace

[QuickAction](atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm "The QuickAction namespace provides classes and methods for quick actions.")

## Usage

A QuickAction.DescribeLayoutRow consists of one or more QuickAction.DescribeLayoutItem objects. For each QuickAction.DescribeLayoutRow, a QuickAction.DescribeLayoutItem refers either to a specific field or to an “empty” QuickAction.DescribeLayoutItem (one that contains no QuickAction.DescribeLayoutComponent objects). An empty QuickAction.DescribeLayoutItem can be returned when a given QuickAction.DescribeLayoutRow is sparse (for example, containing more fields on the right column than on the left column).

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

## Related Topics

- QuickAction (atlas.en-us.apexref.meta/apexref/apex_namespace_QuickAction.htm)
- getLayoutItems() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutrow.htm)
- getNumItems() (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutrow.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- QuickAction.DescribeLayoutItem (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
