---
title: "emptyRecycleBin()"
domain: api
topic: emptyrecyclebin
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:57.259Z
estimatedTokens: 1014
keywords: [emptyRecycleBin, records, recycle, bin, immediately, Usage, Rules, Guidelines, Sample, Code—Java, Code—C#, Arguments, Faults]
---

# emptyRecycleBin()

> Delete records from the recycle bin 
      immediately.

# emptyRecycleBin()

Delete records from the recycle bin immediately.

## Syntax

```

```

## Usage

The Recycle Bin lets you view and restore recently deleted records for 15 days before they’re permanently deleted. Your org can have up to 5,000 records per license in the Recycle Bin at any one time. For example, if your org has five user licenses, 25,000 records can be stored in the Recycle Bin. If your org reaches its Recycle Bin limit, Salesforce automatically removes the oldest records, as long as they’ve been in the recycle bin for at least two hours.

If you know you’re adding a great number of records to the Recycle Bin, and you don’t want to [undelete()](atlas.en-us.api.meta/api/sforce_api_calls_undelete.htm "Undeletes records from the Recycle Bin.") them, you can remove them before the Salesforce process deletes records. For example, you can use this call if you’re loading a large number of records for testing, or if you’re doing a large number of [create()calls](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data.") followed by [delete() calls](atlas.en-us.api.meta/api/sforce_api_calls_delete.htm "Deletes one or more records from your organization's data.").

## Rules and Guidelines

When emptying recycle bins, consider the following rules and guidelines:

-   The logged in user can delete any record that they can query in their Recycle Bin, or the recycle bins of any subordinates. If the logged in user has Modify All Data permission, they can query and delete records from any Recycle Bin in the organization.
-   Available in version 10.0 and later.
-   The maximum number of records is 200.
-   Don’t include the IDs of any records to be cascade deleted, or an error occurs.
-   After records are deleted using this call, they can’t be undelete().
-   After records are deleted from the Recycle Bin using this call, they can be queried using [queryAll()](atlas.en-us.api.meta/api/sforce_api_calls_queryall.htm "Retrieves data from specified objects, including records that have been deleted or archived.") for some time. Typically this time is 24 hours, but can be shorter or longer.

## Sample Code—Java

This sample shows how to empty the Recycle Bin. It accepts an array containing the IDs of the records to remove from the Recycle Bin. It calls emptyRecycleBin() and passes it the array of IDs. Next, it iterates over the results and writes the IDs of the removed records or the first error of the failed records to the console.

```

```

## Sample Code—C#

This sample shows how to empty the Recycle Bin. It accepts an array containing the IDs of the records to remove from the Recycle Bin. It calls emptyRecycleBin() and passes it the array of IDs. Next, it iterates over the results and writes the IDs of the removed records or the first error of the failed records to the console.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| ids | ID[] | Array of one or more IDs associated with the records to delete from the Recycle Bin. The maximum number of records is 200. |

## Response

[EmptyRecycleBinResult](atlas.en-us.api.meta/api/sforce_api_calls_emptyrecyclebin_result.htm "The emptyRecycleBin() call returns an array of EmptyRecycleBinResult objects. Each element in the array corresponds to an element in the ID[] array passed as the parameter in the emptyRecycleBin() call. For example, the object returned in the first index in the EmptyRecycleBinResult array matches the object specified in the first index of the ID[] array.")

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [delete()](atlas.en-us.api.meta/api/sforce_api_calls_delete.htm "Deletes one or more records from your organization's data.")

-   [undelete()](atlas.en-us.api.meta/api/sforce_api_calls_undelete.htm "Undeletes records from the Recycle Bin.")

## Code Examples

```
EmptyRecycleBinResult[] = connection.emptyRecycleBin(ID[] ids);
```

```apex
public void emptyRecycleBin(String[] ids) {
   try {
      EmptyRecycleBinResult[] emptyRecycleBinResults = connection
            .emptyRecycleBin(ids);
      for (int i = 0; i < emptyRecycleBinResults.length; i++) {
         EmptyRecycleBinResult emptyRecycleBinResult = emptyRecycleBinResults[i];
         if (emptyRecycleBinResult.isSuccess()) {
            System.out.println("Recycled ID: "
                  + emptyRecycleBinResult.getId());
         } else {
            Error[] errors = emptyRecycleBinResult.getErrors();
            if (errors.length > 0) {
               System.out
                     .println("Error code: " + errors[0].getStatusCode());
               System.out
                     .println("Error message: " + errors[0].getMessage());
            }
         }
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void emptyRecycleBin(String[] ids)
{
   try
   {
      EmptyRecycleBinResult[] emptyRecycleBinResults =
         binding.emptyRecycleBin(ids);
      for (int i = 0; i < emptyRecycleBinResults.Length; i++)
      {
         EmptyRecycleBinResult emptyRecycleBinResult = emptyRecycleBinResults[i];
         if (emptyRecycleBinResult.success)
         {
            Console.WriteLine("Recycled ID: "
                  + emptyRecycleBinResult.id);
         }
         else
         {
            Error[] errors = emptyRecycleBinResult.errors;
            if (errors.Length > 0)
            {
               Console.WriteLine("Error code: " + errors[0].statusCode);
               Console.WriteLine("Error message: " + errors[0].message);
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

- EmptyRecycleBinResult (atlas.en-us.api.meta/api/sforce_api_calls_emptyrecyclebin_result.htm)
- undelete() (atlas.en-us.api.meta/api/sforce_api_calls_undelete.htm)
- create()calls (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- delete() calls (atlas.en-us.api.meta/api/sforce_api_calls_delete.htm)
- queryAll() (atlas.en-us.api.meta/api/sforce_api_calls_queryall.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- delete() (atlas.en-us.api.meta/api/sforce_api_calls_delete.htm)
