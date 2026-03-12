---
title: "delete()"
domain: api
topic: delete
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:56.947Z
estimatedTokens: 1688
keywords: [Deletes, records, organization's, data, Usage, Rules, Guidelines, Rollback, Error, Basic, Steps, Deleting, Sample, Code—Java, Code—C#]
---

# delete()

> Deletes one or more records from your organization's data.

# delete()

Deletes one or more records from your organization's data.

## Syntax

```

```

## Usage

Use [delete()](# "Deletes one or more records from your organization's data.") to delete one or more existing records, such as individual accounts or contacts, in your organization's data. The [delete()](# "Deletes one or more records from your organization's data.") call is analogous to the DELETE statement in SQL.

## Rules and Guidelines

When deleting objects, consider these rules and guidelines.

-   Your client application must be logged in with sufficient access rights to delete individual objects within the specified object. For more information, see [Factors that Affect Data Access](atlas.en-us.api.meta/api/calls.htm).
-   In addition, you could also need permission to access this object's parent object. For special access requirements, see the object's description in [Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm "HTML (New Window)").
-   To ensure referential integrity, the [delete()](# "Deletes one or more records from your organization's data.") call supports cascading deletions. If you delete a parent object, you delete its children automatically, as long as each child object can be deleted. For example, if you delete a [Case](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_case.htm "HTML (New Window)"), the API automatically deletes any [CaseComment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_casecomment.htm "HTML (New Window)"), CaseHistory, and [CaseSolution](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_casesolution.htm "HTML (New Window)") objects associated with that case. However, if a [CaseComment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_casecomment.htm "HTML (New Window)") is not deletable or is being used, then the [delete()](# "Deletes one or more records from your organization's data.") call on the parent [Case](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_case.htm "HTML (New Window)") fails.
-   Certain objects cannot be deleted via the API. To delete an object via the [delete()](# "Deletes one or more records from your organization's data.") call, its object must be configured as deletable (deletable is true) . To determine whether a given object can be deleted, your client application can invoke the [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") call on the object and inspect its deletable property.
-   You can't delete records for multiple object types in one call if one of those types is related to a feature in the Setup area in Salesforce. The only exceptions are these objects.
    -   Custom settings objects, which are similar to custom objects. For more information, see Create Custom Settings in Salesforce Help .
    -   GroupMember
    -   Group
    -   User

## Rollback on Error

The [AllOrNoneHeader](atlas.en-us.api.meta/api/sforce_api_header_allornoneheader.htm "Allows a call to roll back all changes unless all records are processed successfully.") header allows you to roll back all changes unless all records are processed successfully. This header is available in API version 20.0 and later. Lets a call roll back all changes unless all records are processed successfully.

## Basic Steps for Deleting Records

Deleting records involves these basic steps.

1.  Determine the ID of each record that you want to delete. For example, you call [query()](atlas.en-us.api.meta/api/sforce_api_calls_query.htm "Executes a query against the specified object and returns data that matches the stated conditions.") to retrieve a set of records that you want to delete based on specific criteria.
2.  Construct an ID\[\] array and populate it with the IDs of each record that you want to delete. You can specify the IDs of different types of objects in the same call. For example, you could specify the ID for an individual [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)") and an individual [Contact](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contact.htm "HTML (New Window)") in the same array. For information on IDs, see [ID Field Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm#i1435616).
3.  Call [delete()](# "Deletes one or more records from your organization's data."), passing in the ID\[\] array.
4.  Process the results in the [DeleteResult](atlas.en-us.api.meta/api/sforce_api_calls_delete_result.htm "The delete() call returns an array of DeleteResult objects.")\[\] to verify whether the records have been successfully deleted.

## Sample Code—Java

This sample shows how to delete records based on record IDs. The method in this sample accepts an array of IDs, which it passes to the delete() call and makes the call. It then parses the results and writes the IDs of the deleted records to the console or the first returned error if the deletion failed.

```

```

## Sample Code—C#

This sample shows how to delete records based on record IDs. The method in this sample accepts an array of IDs, which it passes to the delete() call and makes the call. It then parses the results and writes the IDs of the deleted records to the console or the first returned error if the deletion failed.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| ids | ID[] | Array of one or more IDs associated with the objects to delete. In version 7.0 and later, you can pass a maximum of 200 object IDs to the delete() call. In version 6.0 and earlier, the limit is 2,000. |

## Response

[DeleteResult](atlas.en-us.api.meta/api/sforce_api_calls_delete_result.htm "The delete() call returns an array of DeleteResult objects.")\[\]

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

## Code Examples

```
DeleteResult[] = connection.delete(ID[] ids);
```

```apex
public void deleteRecords(String[] ids) {
   try {
      DeleteResult[] deleteResults = connection.delete(ids);
      for (int i = 0; i < deleteResults.length; i++) {
         DeleteResult deleteResult = deleteResults[i];
         if (deleteResult.isSuccess()) {
            System.out
                  .println("Deleted Record ID: " + deleteResult.getId());
         } else {
            // Handle the errors.
            // We just print the first error out for sample purposes.
            Error[] errors = deleteResult.getErrors();
            if (errors.length > 0) {
               System.out.println("Error: could not delete " + "Record ID "
                     + deleteResult.getId() + ".");
               System.out.println("   The error reported was: ("
                     + errors[0].getStatusCode() + ") "
                     + errors[0].getMessage() + "
");
            }
         }
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void deleteRecords(String[] ids)
{
   try
   {
      DeleteResult[] deleteResults = binding.delete(ids);
      for (int i = 0; i < deleteResults.Length; i++)
      {
         DeleteResult deleteResult = deleteResults[i];
         if (deleteResult.success)
         {
            Console.WriteLine("Deleted Record ID: " + deleteResult.id);
         }
         else
         {
            // Handle the errors.
            // We just print the first error out for sample purposes.
            Error[] errors = deleteResult.errors;
            if (errors.Length > 0)
            {
               Console.WriteLine("Error: could not delete " + "Record ID "
                     + deleteResult.id + ".");
               Console.WriteLine("   The error reported was: ("
                     + errors[0].statusCode + ") "
                     + errors[0].message + "
");
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

- DeleteResult (atlas.en-us.api.meta/api/sforce_api_calls_delete_result.htm)
- Factors that Affect Data
                  Access (atlas.en-us.api.meta/api/calls.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- AllOrNoneHeader (atlas.en-us.api.meta/api/sforce_api_header_allornoneheader.htm)
- query() (atlas.en-us.api.meta/api/sforce_api_calls_query.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
