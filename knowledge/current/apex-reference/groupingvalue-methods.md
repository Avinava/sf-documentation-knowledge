---
title: "GroupingValue Methods"
domain: apex-reference
topic: groupingvalue-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.856Z
keywords: [GroupingValue, Methods, Returns, list, second-, third-level, row, column, groupings., there, none, value, empty, array., getGroupings, Syntax, Return, Value, getKey, getLabel]
---

# GroupingValue Methods

> Returns a list of second- or third-level row or column
groupings. If there are none, the value is an empty array.

## GroupingValue Methods

The following are methods for GroupingValue. All are instance methods.

-   **[getGroupings()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingvalue.htm#apex_Reports_GroupingValue_getGroupings)**  
    Returns a list of second- or third-level row or column groupings. If there are none, the value is an empty array.
-   **[getKey()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingvalue.htm#apex_Reports_GroupingValue_getKey)**  
    Returns the unique identifier for a row or column grouping. The identifier is used by the fact map to specify data values within each grouping.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingvalue.htm#apex_Reports_GroupingValue_getLabel)**  
    Returns the localized display name of a row or column grouping. For date and time fields, the label is the localized date or time.
-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingvalue.htm#apex_Reports_GroupingValue_getValue)**  
    Returns the value of the field that is used as a row or column grouping.

### getGroupings()

Returns a list of second- or third-level row or column groupings. If there are none, the value is an empty array.

#### Syntax

public LIST<Reports.GroupingValue> getGroupings()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.GroupingValue](#apex_class_reports_groupingvalue "Contains grouping values for a row or column, including the key, label, and value.")\>

### getKey()

Returns the unique identifier for a row or column grouping. The identifier is used by the fact map to specify data values within each grouping.

#### Syntax

public String getKey()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

Returns the localized display name of a row or column grouping. For date and time fields, the label is the localized date or time.

#### Syntax

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the value of the field that is used as a row or column grouping.

#### Syntax

public Object getValue()

#### Return Value

Type: Object

#### Usage

The value depends on the field’s data type.

-   Currency fields:
    -   amount: Of type currency. A data cell’s value.
    -   currency: Of type picklist. The ISO 4217 currency code, if available; for example, USD for US dollars or CNY for Chinese yuan. (If the grouping is on the converted currency, this value is the currency code for the report and not for the record.)
-   Picklist fields: API name. For example, a custom picklist field—Type of Business with values 1, 2, and 3 for Consulting, Services, and Add-On Business respectively—has 1, 2, or 3 as the grouping value.
-   ID fields: API name.
-   Record type fields: API name.
-   Date and time fields: Date or time in ISO-8601 format.
-   Lookup fields: Unique API name. For example, for the Opportunity Owner lookup field, the ID of each opportunity owner’s Chatter profile page can be a grouping value.