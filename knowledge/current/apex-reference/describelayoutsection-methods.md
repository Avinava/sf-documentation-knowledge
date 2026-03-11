---
title: "DescribeLayoutSection Methods"
domain: apex-reference
topic: describelayoutsection-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.665Z
keywords: [DescribeLayoutSection, Methods, Returns, number, columns, QuickAction.DescribeLayoutSection., getColumns, Signature, Return, Value, getHeading, getLayoutRows, getLayoutSectionId, getParentLayoutId, getRows, isCollapsed, isUseCollapsibleSection, isUseHeading]
---

# DescribeLayoutSection Methods

> Returns the number of columns in the QuickAction.DescribeLayoutSection.

## DescribeLayoutSection Methods

The following are methods for DescribeLayoutSection.

-   **[getColumns()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutsection.htm#apex_QuickAction_DescribeLayoutSection_getColumns)**  
    Returns the number of columns in the QuickAction.DescribeLayoutSection.
-   **[getHeading()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutsection.htm#apex_QuickAction_DescribeLayoutSection_getHeading)**  
    The heading text (label) for the QuickAction.DescribeLayoutSection.
-   **[getLayoutRows()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutsection.htm#apex_QuickAction_DescribeLayoutSection_getLayoutRows)**  
    Returns an array of one or more QuickAction.DescribeLayoutRow objects.
-   **[getLayoutSectionId()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutsection.htm#apex_QuickAction_DescribeLayoutSection_getLayoutSectionId)**  
    Returns the ID of the record details section in the layout.
-   **[getParentLayoutId()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutsection.htm#apex_QuickAction_DescribeLayoutSection_getParentLayoutId)**  
    Returns the ID of the layout upon which this DescribeLayoutSection resides.
-   **[getRows()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutsection.htm#apex_QuickAction_DescribeLayoutSection_getRows)**  
    Returns the number of rows in the QuickAction.DescribeLayoutSection.
-   **[isCollapsed()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutsection.htm#apex_QuickAction_DescribeLayoutSection_isCollapsed)**  
    Indicates whether the record details section is collapsed (true) or expanded (false). If you build your own app, you can use this method to see whether the current user collapsed a section, and respect that preference in your own UI.
-   **[isUseCollapsibleSection()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutsection.htm#apex_QuickAction_DescribeLayoutSection_isUseCollapsibleSection)**  
    Indicates whether the QuickAction.DescribeLayoutSection is a collapsible section (true) or not (false).
-   **[isUseHeading()](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutsection.htm#apex_QuickAction_DescribeLayoutSection_isUseHeading)**  
    Indicates whether to use the heading (true) or not (false).

### getColumns()

Returns the number of columns in the QuickAction.DescribeLayoutSection.

#### Signature

public Integer getColumns()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getHeading()

The heading text (label) for the QuickAction.DescribeLayoutSection.

#### Signature

public String getHeading()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLayoutRows()

Returns an array of one or more QuickAction.DescribeLayoutRow objects.

#### Signature

public List<QuickAction.DescribeLayoutRow> getLayoutRows()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[QuickAction.DescribeLayoutRow](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutrow.htm#apex_class_quickaction_describelayoutrow "Represents a row in a QuickAction.DescribeLayoutSection.")\>

### getLayoutSectionId()

Returns the ID of the record details section in the layout.

#### Signature

public Id getLayoutSectionId()

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getParentLayoutId()

Returns the ID of the layout upon which this DescribeLayoutSection resides.

#### Signature

public Id getParentLayoutId()

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getRows()

Returns the number of rows in the QuickAction.DescribeLayoutSection.

#### Signature

public Integer getRows()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### isCollapsed()

Indicates whether the record details section is collapsed (true) or expanded (false). If you build your own app, you can use this method to see whether the current user collapsed a section, and respect that preference in your own UI.

#### Signature

public Boolean isCollapsed()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isUseCollapsibleSection()

Indicates whether the QuickAction.DescribeLayoutSection is a collapsible section (true) or not (false).

#### Signature

public Boolean isUseCollapsibleSection()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isUseHeading()

Indicates whether to use the heading (true) or not (false).

#### Signature

public Boolean isUseHeading()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")