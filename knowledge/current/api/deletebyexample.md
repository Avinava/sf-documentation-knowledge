---
title: "deleteByExample()"
domain: api
topic: deletebyexample
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:56.956Z
estimatedTokens: 737
keywords: [deleteByExample, big, data, org, sObject, template, matching, templates, deleted, Rules, Guidelines, Basic, Steps, Deleting, Sample]
---

# deleteByExample()

> Use deleteByExample() to delete big object data
      from your org using an sObject as a template for what to delete. All data in a big object
      matching the values in the sObject templates are deleted.

# deleteByExample()

Use deleteByExample() to delete big object data from your org using an sObject as a template for what to delete. All data in a big object matching the values in the sObject templates are deleted.

## Syntax

```

```

## Rules and Guidelines

When deleting data, consider the following rules and guidelines:

-   Your client application must be logged in with sufficient access rights to delete individual objects within the specified object. For more information, see [Factors that Affect Data Access](atlas.en-us.api.meta/api/calls.htm).
-   You can't delete records for multiple object types in one call if one of those types is related to a feature in the Setup area in Salesforce. The only exceptions are the following objects:
    -   Custom settings objects, which are similar to custom objects. For more information, see Create Custom Settings in Salesforce Help.
    -   GroupMember
    -   Group
    -   User

## Basic Steps for Deleting Data

Deleting data involves these basic steps.

1.  Define an sObject using all the fields that make up the index of the big object.
2.  Specify the values for each field.
3.  Call deleteByExample(), passing in the sObject you created.
4.  Process the results in the [DeleteByExampleResult](atlas.en-us.api.meta/api/sforce_api_calls_deletebyexample_result.htm "The deleteByExample() call returns an array of DeleteByExampleResult objects.")\[\] to verify whether the records have been successfully deleted.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Repeating a successful deleteByExample() operation results in success, even if the data has already been deleted.

## Sample Code—Custom Big Objects

This sample shows how to delete records in a custom big object. In this example, Account\_\_c, Game\_Platform\_\_c, and Play\_Date\_\_c are part of the custom big object’s index. All rows where Account\_\_c is “001d000000Ky3xIAB”, Game\_Platform\_\_c is “iOS”, and Play\_Date\_\_c is “2017-11-28T19:13:36.000z” are deleted.

```

```

## Sample Code—Field Audit Trail

This sample shows how to delete records in [FieldHistoryArchive](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_fieldhistoryarchive.htm "HTML (New Window)"). All rows with the specified criteria are deleted.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| sObject | sObject[] | Array of one or more sObjects to use as templates for deletion. |

## Response

[DeleteByExampleResult](atlas.en-us.api.meta/api/sforce_api_calls_deletebyexample_result.htm "The deleteByExample() call returns an array of DeleteByExampleResult objects.")\[\]

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

## Code Examples

```
DeleteByExampleResult[] = connection.deleteByExample(sObject[] sObjects);
```

```apex
public static void main(String[] args) {
    try{
        //Declare an sObject that has the values to delete
        sObject[] sObjectsToDelete = new sObject[1];
        sObject[] customerBO = new sObject();
        customerBO.setType("Customer_Interaction__b");
        customerBO.setField("Account__c","001d000000Ky3xIAB");
        customerBO.setField("Game_Platform__c","iOS");
        customerBO.setField("Play_Date__c","2017-11-28T19:13:36.000z");
        sObjectsToDelete[0] = customerBO;

        DeleteByExampleResult[] result = connection.deleteByExample(sObjectsToDelete);
    }
}
```

```apex
public static void main(String[] args) {
    try{
        //Declare an sObject that has the values to delete
        sObject[] sObjectsToDelete = new sObject[2];
        sObject[] fieldHistoryArchive_1 = new sObject();
        fieldHistoryArchive_1.setType("FieldHistoryArchive");
        fieldHistoryArchive_1.setField("FieldHistoryType","Account");
        fieldHistoryArchive_1.setField("ParentId","001d000000Ky3xIAB");
        fieldHistoryArchive_1.setField("CreatedDate","2017-11-28T19:13:36.000z");
        fieldHistoryArchive_1.setField("HistoryId","017D000000ESURXIA5");
        sObjectsToDelete[0] = fieldHistoryArchive_1;

        sObject[] fieldHistoryArchive_2 = new sObject();
        fieldHistoryArchive_2.setType("FieldHistoryArchive");
        fieldHistoryArchive_2.setField("FieldHistoryType","Account");
        fieldHistoryArchive_2.setField("ParentId","001d000000Ky3xIAB");
        fieldHistoryArchive_2.setField("CreatedDate","2017-11-29T19:13:36.000z");
        fieldHistoryArchive_2.setField("HistoryId","017D000000ESURMIA5");
        sObjectsToDelete[1] = fieldHistoryArchive_2;

        DeleteByExampleResult[] result = connection.deleteByExample(sObjectsToDelete);
    }
}
```

## Related Topics

- Factors that Affect Data Access (atlas.en-us.api.meta/api/calls.htm)
- DeleteByExampleResult (atlas.en-us.api.meta/api/sforce_api_calls_deletebyexample_result.htm)
- sObjects (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
