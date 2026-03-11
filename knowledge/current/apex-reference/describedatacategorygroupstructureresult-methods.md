---
title: "DescribeDataCategoryGroupStructureResult
Methods"
domain: apex-reference
topic: describedatacategorygroupstructureresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.225Z
keywords: [DescribeDataCategoryGroupStructureResult, Methods, Returns, description, data, category, group., getDescription, Signature, Return, Value, getLabel, getName, getSobject, getTopCategories, Usage]
---

# DescribeDataCategoryGroupStructureResult
Methods

> Returns the description of the data category group.

## DescribeDataCategoryGroupStructureResult Methods

The following are methods for DescribeDataCategoryGroupStructureResult. All are instance methods.

-   **[getDescription()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupStructureResult.htm#apex_Schema_DescribeDataCategoryGroupStructureResult_getDescription)**  
    Returns the description of the data category group.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupStructureResult.htm#apex_Schema_DescribeDataCategoryGroupStructureResult_getLabel)**  
    Returns the label for the data category group used in the Salesforce user interface.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupStructureResult.htm#apex_Schema_DescribeDataCategoryGroupStructureResult_getName)**  
    Returns the unique name used by the API to access to the data category group.
-   **[getSobject()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupStructureResult.htm#apex_Schema_DescribeDataCategoryGroupStructureResult_getSobject)**  
    Returns the name of object associated with the data category group.
-   **[getTopCategories()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupStructureResult.htm#apex_Schema_DescribeDataCategoryGroupStructureResult_getTopCategories)**  
    Returns a Schema.DataCategory object, that contains the top categories visible depending on the user's data category group visibility settings.

### getDescription()

Returns the description of the data category group.

#### Signature

public String getDescription()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

Returns the label for the data category group used in the Salesforce user interface.

#### Signature

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getName()

Returns the unique name used by the API to access to the data category group.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSobject()

Returns the name of object associated with the data category group.

#### Signature

public String getSobject()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getTopCategories()

Returns a Schema.DataCategory object, that contains the top categories visible depending on the user's data category group visibility settings.

#### Signature

public List<Schema.DataCategory> getTopCategories()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.DataCategory](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategory.htm#apex_class_Schema_DataCategory "Represents the categories within a category group.")\>

#### Usage

For more information on data category group visibility, see “Data Category Visibility” in the Salesforce online help.