---
title: "describeDataCategoryGroupStructures()"
domain: knowledge-dev
topic: describedatacategorygroupstructures
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:41.747Z
estimatedTokens: 941
keywords: [describeDataCategoryGroupStructures, Retrieves, category, groups, along, their, data, structure, objects, Usage, Sample, Code—Java, Code—C#, Arguments, Faults, call, array, containing, categories, associated]
---

# describeDataCategoryGroupStructures()

> Retrieves available category groups along with their data category structure for
        objects specified in the request.

# describeDataCategoryGroupStructures()

Retrieves available category groups along with their data category structure for objects specified in the request.

## Syntax

```

```

## Usage

Use this call to return the visible data category structure for the given object category group pairs. First use [describeDataCategoryGroups()](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_describedatacategorygroups.htm#sforce_api_calls_describedatacategorygroups "Retrieves available category groups for objects specified in the request.") to find the available category groups for the objects specified. From the returned list, choose the object category group pairs to pass as the input in describeDataCategoryGroupStructures(). This call returns all the visible categories and data category structure as output. For additional information about data categories and data category visibility, see “Work with Data Categories” and “Data Category Visibility” in Salesforce Help .

## Sample Code—Java

This sample shows how to use sObject and data category group pairs to retrieve data categories for each pair. It calls describeDataCategoryGroupStructures() with two pairs, KnowledgeArticleVersion/Regions and Question/Regions, and iterates through the results of this call. It gets the top categories for each result, which is “All”, and then gets the first-level child categories. The sample requires that you set up a data category group called Regions with some child categories and associate it with a knowledge article and questions. Alternatively, you can replace the data category group name in the sample if you want to use an existing data category group in your org that has a different name.

```

```

## Sample Code—C#

This sample shows how to use sObject and data category group pairs to retrieve data categories for each pair. It calls describeDataCategoryGroupStructures() with two pairs, KnowledgeArticleVersion/Regions and Question/Regions, and iterates through the results of this call. It gets the top categories for each result, which is “All”, and then gets the first-level child categories. The sample requires that you set up a data category group called Regions with some child categories and associate it with a knowledge article and questions. Alternatively, you can replace the data category group name in the sample if you want to use an existing data category group in your org that has a different name.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| pairs | DataCategoryGroupSObjectTypePair[] | Specifies a category group and an object to query. Visible data categories are retrieved for that object. |
| topCategoriesOnly | boolean | Indicates whether the call returns only the top (true) or all the categories (false) visible depending on the user's data category group visibility settings. For more information on data category group visibility, see Data Category Visibility in Salesforce Help. |

DataCategoryGroupSObjectTypePair contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| dataCategoryGroupName | string | The unique name used for API access to the data category group. |
| sobject | string | The object associated with the data category group |

## Response

describeDataCategoryGroupStructures()

## Faults

InvalidSObjectFault

UnexpectedErrorFault

-   **[describeDataCategoryGroupStructures()](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_describedatacategorygroupstructures_describedatacategorygroupstructureresults.htm)**
    The describeDataCategoryGroupStructures() call returns an array of DescribeDataCategoryGroupStructureResult objects containing the category groups and categories associated with the specified objects.

## Code Examples

```
describeDataCategoryGroupStructures()[] = connection.
                describeDataCategoryGroupStructures()(DataCategoryGroupSObjectTypePair[] pairs, boolean topCategoriesOnly)
```

```apex
public void describeDataCateogryGroupStructuresSample() {
                try {
                // Create the data category pairs
                DataCategoryGroupSobjectTypePair pair1 = 
                new DataCategoryGroupSobjectTypePair();
                DataCategoryGroupSobjectTypePair pair2 = 
                new DataCategoryGroupSobjectTypePair();
                pair1.setSobject("KnowledgeArticleVersion");
                pair1.setDataCategoryGroupName("Regions");
                pair2.setSobject("Question");
                pair2.setDataCategoryGroupName("Regions");
                
                DataCategoryGroupSobjectTypePair[] pairs = 
                new DataCategoryGroupSobjectTypePair[] {
                pair1, 
                pair2
                };
                
                // Get the list of top level categories using the describe call
                DescribeDataCategoryGroupStructureResult[] results =
                connection.describeDataCategoryGroupStructures(
                pairs,
                false
                );
                
                // Iterate through each result and get some properties
                // including top categories and child categories
                for (int i = 0; i < results.length; i++) {
                DescribeDataCategoryGroupStructureResult result = 
                results[i];
                String sObject = result.getSobject();
                System.out.println("sObject: " + sObject);
                System.out.println("Group name: " + result.getName());
                System.out.println("Group label: " + result.getLabel());
                System.out.println("Group description: " + 
                result.getDescription());
                
                // Get the top-level categories
                DataCategory[] topCategories = result.getTopCategories();
                
                // Iterate through the top level categories and retrieve 
                // some information
                for (int j = 0; j < topCategories.length; j++) {
                DataCategory topCategory = topCategories[j];
                System.out.println("Category name: " + 
                topCategory.getName());
                System.out.println("Category label: " + 
                topCategory.getLabel());
                DataCategory [] childCategories =
                topCategory.getChildCategories();
                System.out.println("Child categories: ");
                for (int k = 0; k < childCategories.length; k++) {
                System.out.println("\t" + k + ". Category name: " +
                childCategories[k].getName());
                System.out.println("\t" + k + ". Category label: " +
                childCategories[k].getLabel());
                }
                }
                }
                } catch (ConnectionException ce) {
                ce.printStackTrace();
                }
                }
```

```apex
public void describeDataCateogryGroupStructuresSample() {
                try {
                // Create the data category pairs
                DataCategoryGroupSobjectTypePair pair1 = 
                new DataCategoryGroupSobjectTypePair();
                DataCategoryGroupSobjectTypePair pair2 = 
                new DataCategoryGroupSobjectTypePair();
                pair1.sobject = "KnowledgeArticleVersion";
                //pair1.setDataCategoryGroupName("Regions");
                pair1.dataCategoryGroupName = "KBArticleCategories";
                pair2.sobject = "Question";
                //pair2.setDataCategoryGroupName("Regions");
                pair2.dataCategoryGroupName = "KBArticleCategories";
                
                DataCategoryGroupSobjectTypePair[] pairs = 
                new DataCategoryGroupSobjectTypePair[] {
                pair1, 
                pair2
                };
                
                // Get the list of top level categories using the describe call
                DescribeDataCategoryGroupStructureResult[] results =
                binding.describeDataCategoryGroupStructures(
                pairs,
                false
                );
                
                // Iterate through each result and get some properties
                // including top categories and child categories
                for (int i = 0; i < results.Length; i++) {
                DescribeDataCategoryGroupStructureResult result = 
                results[i];
                String sObject = result.sobject;
                Console.WriteLine("sObject: " + sObject);
                Console.WriteLine("Group name: " + result.name);
                Console.WriteLine("Group label: " + result.label);
                Console.WriteLine("Group description: " + 
                result.description);
                
                // Get the top-level categories
                DataCategory[] topCategories = result.topCategories;
                
                // Iterate through the top level categories and retrieve 
                // some information
                for (int j = 0; j < topCategories.Length; j++) {
                DataCategory topCategory = topCategories[j];
                Console.WriteLine("Category name: " + 
                topCategory.name);
                Console.WriteLine("Category label: " + 
                topCategory.label);
                DataCategory [] childCategories =
                topCategory.childCategories;
                Console.WriteLine("Child categories: ");
                for (int k = 0; k < childCategories.Length; k++) {
                Console.WriteLine("\t" + k + ". Category name: " +
                childCategories[k].name);
                Console.WriteLine("\t" + k + ". Category label: " +
                childCategories[k].label);
                }
                }
                }
                } 
                catch (SoapException e) 
                {
                Console.WriteLine("An unexpected error has occurred: " +
                e.Message + "
" + e.StackTrace);
                }
                }
```

## Related Topics

- describeDataCategoryGroups() (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_describedatacategorygroups.htm)
- describeDataCategoryGroupStructures() (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_calls_describedatacategorygroupstructures_describedatacategorygroupstructureresults.htm)
