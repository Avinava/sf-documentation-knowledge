---
title: "DataCategoryGroupSobjectTypePair Methods"
domain: apex-reference
topic: datacategorygroupsobjecttypepair-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.215Z
keywords: [DataCategoryGroupSobjectTypePair, Methods, Returns, unique, name, used, API, access, data, category, group., getDataCategoryGroupName, Signature, Return, Value, getSobject, setDataCategoryGroupName, Parameters, setSobject, sObjectName]
---

# DataCategoryGroupSobjectTypePair Methods

> Returns the unique name used by the API to access the data category group.

## DataCategoryGroupSobjectTypePair Methods

The following are methods for DataCategoryGroupSobjectTypePair. All are instance methods.

-   **[getDataCategoryGroupName()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm#apex_Schema_DataCategoryGroupSobjectTypePair_getDataCategoryGroupName)**  
    Returns the unique name used by the API to access the data category group.
-   **[getSobject()](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm#apex_System_DataCategoryGroupSobjectTypePair_getSobject)**  
    Returns the object name associated with the data category group.
-   **[setDataCategoryGroupName(name)](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm#apex_Schema_DataCategoryGroupSobjectTypePair_setDataCategoryGroupName)**  
    Specifies the unique name used by the API to access the data category group.
-   **[setSobject(sObjectName)](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm#apex_Schema_DataCategoryGroupSobjectTypePair_setSobject)**  
    Sets the sObject associated with the data category group.

### getDataCategoryGroupName()

Returns the unique name used by the API to access the data category group.

#### Signature

public String getDataCategoryGroupName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSobject()

Returns the object name associated with the data category group.

#### Signature

public String getSobject()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setDataCategoryGroupName(name)

Specifies the unique name used by the API to access the data category group.

#### Signature

public String setDataCategoryGroupName(String name)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setSobject(sObjectName)

Sets the sObject associated with the data category group.

#### Signature

public Void setSobject(String sObjectName)

#### Parameters

sObjectName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The sObjectName is the object name associated with the data category group. Valid values are:

-   KnowledgeArticleVersion—for article types.
-   Question—for questions from Answers.

#### Return Value

Type: Void