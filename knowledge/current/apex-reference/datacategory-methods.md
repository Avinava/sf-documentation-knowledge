---
title: "DataCategory Methods"
domain: apex-reference
topic: datacategory-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.211Z
keywords: [DataCategory, Methods, Returns, recursive, object, contains, visible, sub, categories, data, category., getChildCategories, Signature, Return, Value, getLabel, getName]
---

# DataCategory Methods

> Returns a recursive object that contains the visible sub
categories in the data category.

## DataCategory Methods

The following are methods for DataCategory. All are instance methods.

-   **[getChildCategories()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategory.htm#apex_Schema_DataCategory_getChildCategories)**  
    Returns a recursive object that contains the visible sub categories in the data category.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategory.htm#apex_Schema_DataCategory_getLabel)**  
    Returns the label for the data category used in the Salesforce user interface.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategory.htm#apex_Schema_DataCategory_getName)**  
    Returns the unique name used by the API to access to the data category.

### getChildCategories()

Returns a recursive object that contains the visible sub categories in the data category.

#### Signature

public Schema.DataCategory getChildCategories()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.DataCategory](#apex_class_Schema_DataCategory "Represents the categories within a category group.")\>

### getLabel()

Returns the label for the data category used in the Salesforce user interface.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getName()

Returns the unique name used by the API to access to the data category.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")