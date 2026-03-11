---
title: "FilterValue Methods"
domain: apex-reference
topic: filtervalue-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.844Z
keywords: [FilterValue, Methods, Returns, localized, display, name, filter, value., Possible, values, restricted, based, data, type, column, being, filtered., getLabel, Syntax, Return]
---

# FilterValue Methods

> Returns the localized display name of the filter value.
Possible values for this name are restricted based on the data type
of the column being filtered.

## FilterValue Methods

The following are methods for FilterValue. All are instance methods.

-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_filtervalue.htm#apex_Reports_FilterValue_getLabel)**  
    Returns the localized display name of the filter value. Possible values for this name are restricted based on the data type of the column being filtered. 
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_filtervalue.htm#apex_Reports_FilterValue_getName)**  
    Returns the unique API name of the filter value. Possible values for this name are restricted based on the data type of the column being filtered. 

### getLabel()

Returns the localized display name of the filter value. Possible values for this name are restricted based on the data type of the column being filtered. 

#### Syntax

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getName()

Returns the unique API name of the filter value. Possible values for this name are restricted based on the data type of the column being filtered. 

#### Syntax

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")