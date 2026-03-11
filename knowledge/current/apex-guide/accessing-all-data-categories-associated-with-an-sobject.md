---
title: "Accessing All Data Categories Associated
with an sObject"
domain: apex-guide
topic: accessing-all-data-categories-associated-with-an-sobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.049Z
keywords: [Accessing, Data, Categories, Associated, sObject, Testing, Access]
---

# Accessing All Data Categories Associated
with an sObject

# Accessing All Data Categories Associated with an sObject

Use the describeDataCategoryGroups and describeDataCategoryGroupStructures methods to return the categories associated with a specific object:

1.  Return all the category groups associated with the objects of your choice (see describeDataCategoryGroups(sObjectNames)).
2.  From the returned map, get the category group name and sObject name you want to further interrogate (see [DescribeDataCategoryGroupResult Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Schema_DescribeDataCategoryGroupResult.htm)).
3.  Specify the category group and associated object, then retrieve the categories available to this object (see describeDataCategoryGroupStructures).

The describeDataCategoryGroupStructures method returns the categories available for the object in the category group you specified. For additional information about data categories, see “Work with Data Categories” in the Salesforce online help.

In the following example, the describeDataCategoryGroupSample method returns all the category groups associated with the Article and Question objects. The describeDataCategoryGroupStructures method returns all the categories available for articles and questions in the Regions category group. For additional information about articles and questions, see “Work with Articles and Translations” in the Salesforce online help.

To use the following example, you must:

-   Enable Salesforce Knowledge.
-   Enable the answers feature.
-   Create a data category group called Regions.
-   Assign Regions as the data category group to be used by Answers.
-   Make sure the Regions data category group is assigned to Salesforce Knowledge.

For more information on creating data category groups, see “Create and Modify Category Groups” in the Salesforce online help. For more information on answers, see “Answers Overview” in the Salesforce online help.

```

```

```

```

## Testing Access to All Data Categories Associated with an sObject

The following example tests the describeDataCategoryGroupSample method shown earlier. It ensures that the returned category group and associated objects are correct.

```

```

This example tests the describeDataCategoryGroupStructures method. It ensures that the returned category group, categories and associated objects are correct.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_global_describe.htm "Accessing All sObjects")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_soql.htm "Dynamic SOQL")