---
title: "DataCategoryGroupSobjectTypePair Class"
domain: apex-reference
topic: datacategorygroupsobjecttypepair-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.215Z
keywords: [DataCategoryGroupSobjectTypePair, Class, Sets, sObject, associated, data, category, group., setSobject, sObjectName, Signature, Parameters, Return, Value]
---

# DataCategoryGroupSobjectTypePair Class

> Sets the sObject associated with the data category group.

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