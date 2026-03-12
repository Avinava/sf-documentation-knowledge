---
title: "undelete()"
domain: api
topic: undelete
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.596Z
estimatedTokens: 1212
keywords: [undelete, Undeletes, records, Recycle, Bin, Usage, Rollback, Error, Sample, Code—Java, Code—C#, Arguments, Faults]
---

# undelete()

> Undeletes records from the Recycle Bin.

# undelete()

Undeletes records from the Recycle Bin.

## Syntax

```

```

## Usage

Use this call to restore any deleted record that is undeletable, including those records in the Recycle Bin. Records can be put in the Recycle Bin as the result of a [merge()](atlas.en-us.api.meta/api/sforce_api_calls_merge.htm "Combines up to three records of the same type into one record. The input is an array of MergeRequest elements, each of which specifies the records to combine. The output is a MergeResult object that contains information about the result of the merge.") or [delete()](atlas.en-us.api.meta/api/sforce_api_calls_delete.htm "Deletes one or more records from your organization's data.") call. You can identify deleted records, including records deleted as the result of a merge, using the [queryAll()](atlas.en-us.api.meta/api/sforce_api_calls_queryall.htm "Retrieves data from specified objects, including records that have been deleted or archived.") call.

You must verify that a record can be undeleted before attempting to delete it. Some records cannot be undeleted, for example, [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)") records can be undeleted, but not [AccountTeamMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountteammember.htm "HTML (New Window)") records. To verify that a record can be undeleted, check that the value of the [undeletable](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm#i1427256) flag in the [DescribeSObjectResult](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm) for that object is set to true.

Since a delete call cascade-deletes child records, an undelete call undeletes the cascade-deleted records. For example, deleting an account deletes all the contacts associated with that account.

You can undelete records that were deleted as the result of a merge, but the child objects are reparented, which can’t be undone.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Starting with API version 15.0, if you specify a value for a field that contains a string, and the value is too large for the field, the call fails, and an error is returned. In previous versions of the API the value was truncated and the call succeeded. If you wish to keep the old behavior with versions 15.0 and later, use the [AllowFieldTruncationHeader](atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm "Specifies that for some fields, when a string is too large, the operation fails. Without the header, strings for these fields are truncated.") SOAP header.

This call supports the [AllOrNoneHeader](atlas.en-us.api.meta/api/sforce_api_header_allornoneheader.htm "Allows a call to roll back all changes unless all records are processed successfully."), [AllowFieldTruncationHeader](atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm "Specifies that for some fields, when a string is too large, the operation fails. Without the header, strings for these fields are truncated."), and [CallOptions](atlas.en-us.api.meta/api/sforce_api_header_calloptions.htm) headers.

## Rollback on Error

The [AllOrNoneHeader](atlas.en-us.api.meta/api/sforce_api_header_allornoneheader.htm "Allows a call to roll back all changes unless all records are processed successfully.") header allows you to roll back all changes unless all records are processed successfully. This header is available in API version 20.0 and later. Lets a call roll back all changes unless all records are processed successfully.

## Sample Code—Java

This sample calls queryAll() to get the last five deleted accounts. It then passes the IDs of these accounts to undelete(), which restores these accounts. Finally, it checks the results of the call and writes the IDs of the restored accounts or any errors to the console.

```

```

## Sample Code—C#

This sample calls queryAll() to get the last five deleted accounts. It then passes the IDs of these accounts to undelete(), which restores these accounts. Finally, it checks the results of the call and writes the IDs of the restored accounts or any errors to the console.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| ids | ID[] | IDs of the records to be restored. |

## Response

[UndeleteResult](atlas.en-us.api.meta/api/sforce_api_calls_undelete_undeleteresult.htm)

## Faults

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [delete()](atlas.en-us.api.meta/api/sforce_api_calls_delete.htm "Deletes one or more records from your organization's data.")

## Code Examples

```
UndeleteResult[] = connection.undelete(ID[] ids );
```

```apex
public void undeleteRecords() {
   try {
      // Get the accounts that were last deleted
      // (up to 5 accounts)
      QueryResult qResult = connection
            .queryAll("SELECT Id, SystemModstamp FROM "
                  + "Account WHERE IsDeleted=true "
                  + "ORDER BY SystemModstamp DESC LIMIT 5");

      String[] Ids = new String[qResult.getSize()];
      // Get the IDs of the deleted records
      for (int i = 0; i < qResult.getSize(); i++) {
         Ids[i] = qResult.getRecords()[i].getId();
      }

      // Restore the records
      UndeleteResult[] undelResults = connection.undelete(Ids);

      // Check the results
      for (UndeleteResult result : undelResults) {
         if (result.isSuccess()) {
            System.out.println("Undeleted Account ID: " + result.getId());
         } else {
            if (result.getErrors().length > 0) {
               System.out.println("Error message: "
                     + result.getErrors()[0].getMessage());
            }
         }
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void undeleteRecords()
{
   try
   {
      // Get the accounts that were last deleted
      //   (up to 5 accounts)
      QueryResult qResult = binding.queryAll(
            "SELECT Id, SystemModstamp FROM " +
            "Account WHERE IsDeleted=true " +
            "ORDER BY SystemModstamp DESC LIMIT 5");

      String[] Ids = new String[qResult.size];
      // Get the IDs of the deleted records
      for (int i = 0; i < qResult.size; i++)
      {
         Ids[i] = qResult.records[i].Id;
      }

      // Restore the records
      UndeleteResult[] undelResults = binding.undelete(Ids);

      // Check the results
      foreach (UndeleteResult result in undelResults)
      {
         if (result.success)
         {
            Console.WriteLine("Undeleted Account ID: " +
                  result.id);
         }
         else
         {
            if (result.errors.Length > 0)
            {
               Console.WriteLine("Error message: " +
                     result.errors[0].message);
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

- merge() (atlas.en-us.api.meta/api/sforce_api_calls_merge.htm)
- delete() (atlas.en-us.api.meta/api/sforce_api_calls_delete.htm)
- queryAll() (atlas.en-us.api.meta/api/sforce_api_calls_queryall.htm)
- undeletable (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)
- DescribeSObjectResult (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)
- AllowFieldTruncationHeader (atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm)
- AllOrNoneHeader (atlas.en-us.api.meta/api/sforce_api_header_allornoneheader.htm)
- CallOptions (atlas.en-us.api.meta/api/sforce_api_header_calloptions.htm)
- UndeleteResult (atlas.en-us.api.meta/api/sforce_api_calls_undelete_undeleteresult.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
