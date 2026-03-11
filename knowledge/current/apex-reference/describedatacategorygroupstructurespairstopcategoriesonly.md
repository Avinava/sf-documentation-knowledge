---
title: "describeDataCategoryGroupStructures(pairs,topCategoriesOnly)"
domain: apex-reference
topic: describedatacategorygroupstructurespairstopcategoriesonly
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.574Z
keywords: [describeDataCategoryGroupStructures, pairs, topCategoriesOnly, Returns, available, category, groups, along, their, data, structure, objects, specified, request., Signature, Parameters, Return, Value]
---

# describeDataCategoryGroupStructures(pairs,topCategoriesOnly)

> Returns available category groups along with their data category structure for
        objects specified in the request.

### describeDataCategoryGroupStructures(pairs,topCategoriesOnly)

Returns available category groups along with their data category structure for objects specified in the request.

#### Signature

public static List<Schema.DescribeDataCategoryGroupStructureResult> describeDataCategory GroupStructures(List<Schema.DataCategoryGroupSobjectTypePair> pairs,Boolean topCategoriesOnly)

#### Parameters

pairs

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.DataCategoryGroupSobjectTypePair](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DataCategoryGroupSobjectTypePair.htm#apex_class_Schema_DataCategoryGroupSobjectTypePair "Specifies a category group and an associated object.")\>

The pairs argument is one or more category groups and objects to query Schema.DataCategoryGroupSobjectTypePairs. Visible data categories are retrieved for the specified object. For more information on data category group visibility, see “Data Category Visibility” in Salesforce Help.

topCategoriesOnly

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Use true to return only the top visible category and false to return all the visible categories, depending on the user's data category group visibility settings. For more information on data category group visibility, see Data Category Visibility in Salesforce Help.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Schema.Describe​DataCategoryGroupStructureResult](atlas.en-us.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupStructureResult.htm#apex_class_Schema_DescribeDataCategoryGroupStructureResult "Contains the category groups and categories associated with KnowledgeArticleVersion and Question.")\>