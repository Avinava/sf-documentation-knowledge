---
title: "Describe​DataCategoryGroupStructureResult Class"
domain: apex-reference
topic: describedatacategorygroupstructureresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.225Z
keywords: [Describe​DataCategoryGroupStructureResult, Class, Returns, Schema.DataCategory, object, contains, top, categories, visible, depending, user's, data, category, group, visibility, settings., getTopCategories, Signature, Return, Value]
---

# Describe​DataCategoryGroupStructureResult Class

> Returns a Schema.DataCategory object, that
  contains the top categories visible depending on the user's data category group visibility
  settings.

### getTopCategories()

Returns a Schema.DataCategory object, that contains the top categories visible depending on the user's data category group visibility settings.

#### Signature

public List<Schema.DataCategory> getTopCategories()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.DataCategory](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategory.htm#apex_class_Schema_DataCategory "Represents the categories within a category group.")\>

#### Usage

For more information on data category group visibility, see “Data Category Visibility” in the Salesforce online help.