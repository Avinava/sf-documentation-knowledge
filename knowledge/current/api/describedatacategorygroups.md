---
title: "describeDataCategoryGroups()"
domain: api
topic: describedatacategorygroups
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.010Z
estimatedTokens: 437
keywords: [describeDataCategoryGroups, Retrieves, category, groups, objects, Usage, Sample, Code—Java, Code—C#, Arguments, Faults]
---

# describeDataCategoryGroups()

> Retrieves available category groups for objects specified in the request.

# describeDataCategoryGroups()

Retrieves available category groups for objects specified in the request.

## Syntax

```

```

## Usage

Use this call to describe the available category groups for the objects specified in the request. This call can be used with the describeDataCategoryGroupStructures() call to describe all the categories available for a specific object. For additional information about data categories, see “Work with Data Categories” in the Salesforce online help.

## Sample Code—Java

This sample shows how to retrieve the data category groups associated with:

-   Salesforce Knowledge articles
-   Questions from the Answers feature

It returns the name, label and description of a category group and the name of the associated sobject (article or question). It also returns the number of data categories in the data category group.

```

```

## Sample Code—C#

This sample shows how to retrieve the data category groups associated with:

-   Salesforce Knowledge articles
-   Questions from the Answers feature

It returns the name, label and description of a category group and the name of the associated sobject (article or question). It also returns the number of data categories in the data category group.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| sObjectTypes | string[] | The specified value can be:KnowledgeArticleVersion—to retrieve category groups associated with article types.Question—to retrieve category groups associated with questions.For additional information about articles and questions, see "Work with Articles and Translations" in the Salesforce online help. |

## Response

DescribeDataCategoryGroupResult

## Faults

InvalidSObjectFault

UnexpectedErrorFault

## Code Examples

```
DescribeDataCategoryGroupResult[] = connection.describeDataCategoryGroups()(string[] sObjectTypes);
```

```apex
public void describeDataCategoryGroupsSample() {
                try {
                // Make the describe call for data category groups
                DescribeDataCategoryGroupResult[] results =
                connection.describeDataCategoryGroups(new String[] {
                "KnowledgeArticleVersion", "Question"});
                
                // Get the properties of each data category group 
                for (int i = 0; i < results.length; i++) {
                System.out.println("sObject: " + 
                results[i].getSobject());
                System.out.println("Group name: " + 
                results[i].getName());
                System.out.println("Group label: " + 
                results[i].getLabel());
                System.out.println("Group description: " +
                (results[i].getDescription()==null? "" : 
                results[i].getDescription()));
                System.out.println("Number of categories: " + 
                results[i].getCategoryCount());              
                }
                } catch (ConnectionException ce) {
                ce.printStackTrace();
                }
                }
```

```apex
public void describeDataCategoryGroups() {
                try {
                // Make the describe call for data category groups
                DescribeDataCategoryGroupResult[] results =
                binding.describeDataCategoryGroups(new String[] {
                "KnowledgeArticleVersion", "Question"});
                
                // Get the properties of each data category group 
                for (int i = 0; i < results.Length; i++) {
                Console.WriteLine("sObject: " + 
                results[i].sobject);
                Console.WriteLine("Group name: " + 
                results[i].name);
                Console.WriteLine("Group label: " + 
                results[i].label);
                Console.WriteLine("Group description: " +
                (results[i].description==null? "" : 
                results[i].description));
                Console.WriteLine("Number of categories: " + 
                results[i].categoryCount);              
                }
                } catch (SoapException e) {
                Console.WriteLine("An unexpected error has occurred: " +
                e.Message + "
" + e.StackTrace);
                }
                }
```
