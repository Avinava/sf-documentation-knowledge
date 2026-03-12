---
title: "Describe​DataCategoryGroupResult
Class"
domain: apex-reference
topic: describedatacategorygroupresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.820Z
estimatedTokens: 953
namespace: Schema
keywords: [Describe​DataCategoryGroupResult, Contains, list, category, groups, associated, KnowledgeArticleVersion, Question., Usage, Example, DescribeDataCategoryGroupResult, getCategoryCount, getDescription, getLabel, getName, getSobject]
---

# Describe​DataCategoryGroupResult
Class

> Contains the list of the category groups associated with
KnowledgeArticleVersion and Question.

**Namespace:** `Schema`

# Describe​DataCategoryGroupResult Class

Contains the list of the category groups associated with KnowledgeArticleVersion and Question.

## Namespace

[Schema](atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm "The Schema namespace provides classes and methods for schema metadata information.")

## Usage

The describeDataCategoryGroups method returns a Schema.DescribeDataCategoryGroupResult object containing the list of the category groups associated with the specified object.

For additional information and code examples using describeDataCategoryGroups, see [Accessing All Data Categories Associated with an sObject](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_data_categories.htm).

## Example

The following is an example of how to instantiate a data category group describe result object:

```

```

## DescribeDataCategoryGroupResult Methods

The following are methods for DescribeDataCategoryGroupResult. All are instance methods.

-   **[getCategoryCount()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm#apex_Schema_DescribeDataCategoryGroupResult_getCategoryCount)**
    Returns the number of visible data categories in the data category group.
-   **[getDescription()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm#apex_Schema_DescribeDataCategoryGroupResult_getDescription)**
    Returns the description of the data category group.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm#apex_Schema_DescribeDataCategoryGroupResult_getLabel)**
    Returns the label for the data category group used in the Salesforce user interface.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm#apex_Schema_DescribeDataCategoryGroupResult_getName)**
    Returns the unique name used by the API to access to the data category group.
-   **[getSobject()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm#apex_Schema_DescribeDataCategoryGroupResult_getSobject)**
    Returns the object name associated with the data category group.

### getCategoryCount()

Returns the number of visible data categories in the data category group.

#### Signature

public Integer getCategoryCount()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

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

Returns the object name associated with the data category group.

#### Signature

public String getSobject()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```apex
List <String> objType = new List<String>();
objType.add('KnowledgeArticleVersion');
objType.add('Question');

List<Schema.DescribeDataCategoryGroupResult> describeCategoryResult = 
   Schema.describeDataCategoryGroups(objType);
```

## Related Topics

- Schema (atlas.en-us.apexref.meta/apexref/apex_namespace_Schema.htm)
- getCategoryCount() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm)
- getDescription() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm)
- getName() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm)
- getSobject() (atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
