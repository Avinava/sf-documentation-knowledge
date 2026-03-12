---
title: "getDeleted()"
domain: api
topic: getdeleted
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:57.309Z
estimatedTokens: 2377
keywords: [getDeleted, Retrieves, individual, records, deleted, timespan, Usage, Rules, Guidelines, Basic, Steps, Replicating, Sample, Code—Java, Code—C#]
---

# getDeleted()

> Retrieves the list of individual records that have
         been deleted within the given timespan for the specified object.

# getDeleted()

Retrieves the list of individual records that have been deleted within the given timespan for the specified object.

## Syntax

```

```

## Usage

Use [getDeleted()](# "Retrieves the list of individual records that have been deleted within the given timespan for the specified object.") for data replication applications to retrieve a list of records that have been deleted from your organization's data within the specified timespan. The [getDeleted()](# "Retrieves the list of individual records that have been deleted within the given timespan for the specified object.") call retrieves a [GetDeletedResult](atlas.en-us.api.meta/api/sforce_api_calls_getdeleted_getdeletedresult.htm "The getDeleted() call returns a GetDeletedResult object that contains an array of deletedRecords records.") object that contains an array of DeletedRecord objects containing the ID of each deleted record and the date/time (Coordinated Universal Time (UTC) time zone) on which it was deleted. Be sure to read [Data Replication](atlas.en-us.api.meta/api/sforce_api_guidelines_datareplication.htm) before using [getDeleted()](# "Retrieves the list of individual records that have been deleted within the given timespan for the specified object.") in your client applications. (For information on IDs, see [ID Field Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm#i1435616).)

As of release 8.0, the [getDeleted()](# "Retrieves the list of individual records that have been deleted within the given timespan for the specified object.") call respects the user's sharing model.

## Rules and Guidelines

When replicating deleted records, consider the following rules and guidelines:

-   The specified startDate must chronologically precede the specified endDate value by more than one minute. The specified startDate can’t be the same value as, or later than, the specified endDate value. Otherwise, the API returns an INVALID\_REPLICATION\_DATE error.
-   Records are returned only if the user has access to them.
-   Results are returned for no more than 15 days previous to the day the call is executed (or earlier if an administrator has purged the Recycle Bin). If the purge has been performed before your [getDeleted()](# "Retrieves the list of individual records that have been deleted within the given timespan for the specified object.") call is executed, an INVALID\_REPLICATION\_DATE error is returned.
-   If [latestDateCovered](atlas.en-us.api.meta/api/sforce_api_calls_getdeleted_getdeletedresult.htm#i1428544) is more than [endDate](#getdeleted_enddate), the call fails, returning an INVALID\_REPLICATION\_DATE error with the value of [latestDateCovered](atlas.en-us.api.meta/api/sforce_api_calls_getdeleted_getdeletedresult.htm#i1428544).
-   Deleted records are written to a delete log, which [getDeleted()](# "Retrieves the list of individual records that have been deleted within the given timespan for the specified object.") accesses. A background process that runs every two hours purges records that have been in an organization's delete log for more than two hours if the number of records is above a certain limit. Starting with the oldest records, the process purges delete log entries until the delete log is back below the limit. This process protects Salesforce from performance issues related to massive delete logs. The limit is calculated using this formula:

    ```

    ```

    For example, an organization with 1,000 licenses could have up to 5,000,000 (five million) records in the delete log before any purging took place. If purging has been performed before your [getDeleted()](# "Retrieves the list of individual records that have been deleted within the given timespan for the specified object.") call is executed, an INVALID\_REPLICATION\_DATE error is returned. If you get this exception, do a full pull of the table.

-   If you delete a large number of records, your data replication runs more frequently than every two hours to ensure [getDeleted()](# "Retrieves the list of individual records that have been deleted within the given timespan for the specified object.") returns all records.
-   Client applications typically poll for changed data periodically. For important polling considerations, see [Polling for Changes](atlas.en-us.api.meta/api/polling_for_changes.htm).
-   Records for certain objects can’t be replicated via the API. To replicate a record via the [getDeleted()](# "Retrieves the list of individual records that have been deleted within the given timespan for the specified object.") call, its object must be configured as replicateable (replicateable is true). To determine whether a given object can be replicated, your client application can invoke the [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") call on the object and inspect its replicateable property.
-   Development tools differ in the way that they handle time data. Some development tools report the local time, while others report only the Coordinated Universal Time (UTC) time. To determine how your development tool handles time values, refer to its documentation.
-   If you call getDeleted() for a history object, the call returns the records deleted during the given date range for all history objects, not only the history object you specified. For example, if you call getDeleted() for AccountHistory, you'll get records deleted during the given date range for AccountHistory, ContactHistory, and so on. However, getDeleted() calls on OpportunityHistory return only deleted OpportunityHistory records, not other associated deleted history objects.

## Basic Steps for Replicating Deleted Records

You can replicate deleted records using these basic steps for each object.

1.  Optionally, determine whether the structure of the object has changed since the last replication request, as described in [Checking for Structural Changes in the Object](atlas.en-us.api.meta/api/checking_for_structural_changes_in_the_object.htm).
2.  Call [getDeleted()](# "Retrieves the list of individual records that have been deleted within the given timespan for the specified object."), passing in the object and the relevant time span for deleted records.
3.  In the [DeleteResult](atlas.en-us.api.meta/api/sforce_api_calls_delete_result.htm "The delete() call returns an array of DeleteResult objects.") object, iterate through the returned array of DeletedRecord objects containing the ID of each deleted record and the date on which it was deleted (Coordinated Universal Time (UTC) time zone).
4.  Take the appropriate action on the local data to remove the deleted records or flag it as deleted.
5.  Optionally, save the request time span for future reference, using the value of [latestDateCovered](atlas.en-us.api.meta/api/sforce_api_calls_getdeleted_getdeletedresult.htm#i1428544).

A client application likely performs other tasks associated with data replication operations. For example, if an opportunity is closed, a client application then runs a new revenue report. Similarly, if a task is completed, the process logs the task in another system.

## Sample Code—Java

This sample calls getDeleted() to get all accounts that were deleted in the last 60 minutes. It then writes the ID and the deleted date of each returned account to the console.

```

```

## Sample Code—C#

This sample calls getDeleted() to get all accounts that were deleted in the last 60 minutes. It then writes the ID and the deleted date of each returned account to the console.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| sObjectTypeEntityType | string | Object type. The specified value must be a valid object for your organization. See sObject. |
| startDate | dateTime | Starting date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data. The API ignores the seconds portion of the specified dateTime value (for example, 12:30:15 is interpreted as 12:30:00 UTC). |
| endDate | dateTime | Ending date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data. The API ignores the seconds portion of the specified dateTime value (for example, 12:35:15 is interpreted as 12:35:00 UTC). |

## Limits

When a getDeleted() call returns too many results, the exception EXCEEDED\_ID\_LIMIT is returned in the response. See [API Call Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_apicalls.htm) for the number of records that can be returned.

## Response

[GetDeletedResult](atlas.en-us.api.meta/api/sforce_api_calls_getdeleted_getdeletedresult.htm "The getDeleted() call returns a GetDeletedResult object that contains an array of deletedRecords records.")

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [Data Replication](atlas.en-us.api.meta/api/sforce_api_guidelines_datareplication.htm)

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

## Code Examples

```
GetDeletedResult = connection.getDeleted(string sObjectType, dateTime startDate, dateTime EndDate);
```

```
5000 * number of licenses in the organization
```

```apex
public void getDeletedRecords() {
   try {
      GregorianCalendar endTime = (GregorianCalendar)
         connection.getServerTimestamp().getTimestamp();
      GregorianCalendar startTime = (GregorianCalendar) endTime.clone();         
      // Subtract 60 minutes from the server time so that we have
      // a valid time frame.
      startTime.add(GregorianCalendar.MINUTE, -60);
      System.out.println("Checking deletes at or after: "
            + startTime.getTime().toString());
      
      // Get records deleted during the specified time frame.
      GetDeletedResult gdResult = connection.getDeleted("Account",
            startTime, endTime);
      
      // Check the number of records contained in the results,
      // to check if something was deleted in the 60 minute span.
      DeletedRecord[] deletedRecords = gdResult.getDeletedRecords();
      if (deletedRecords != null && deletedRecords.length > 0) {
         for (int i = 0; i < deletedRecords.length; i++) {
            DeletedRecord dr = deletedRecords[i];
            System.out.println(dr.getId() + " was deleted on "
                  + dr.getDeletedDate().getTime().toString());
         }
      } else {
         System.out.println("No deletions of Account records in "
               + "the last 60 minutes.");
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void getDeletedRecords()
{
   try
   {
      DateTime endTime = binding.getServerTimestamp().timestamp;
      // Subtract 60 minutes from the server time so that we have
      // a valid time frame.
      DateTime startTime = endTime.AddMinutes(-60);
      Console.WriteLine("Checking deletes at or after: "
            + startTime.ToLocalTime().ToString());

      // Get records deleted during the specified time frame.
      GetDeletedResult gdResult = binding.getDeleted("Account",
            startTime, endTime);

      // Check the number of records contained in the results,
      // to check if something was deleted in the 60 minute span.
      DeletedRecord[] deletedRecords = gdResult.deletedRecords;
      if (deletedRecords != null && deletedRecords.Length > 0)
      {
         for (int i = 0; i < deletedRecords.Length; i++)
         {
            DeletedRecord dr = deletedRecords[i];
            Console.WriteLine(dr.id + " was deleted on "
                  + dr.deletedDate.ToLocalTime().ToString());
         }
      }
      else
      {
         Console.WriteLine("No deletions of Account records in "
               + "the last 60 minutes.");
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

- GetDeletedResult (atlas.en-us.api.meta/api/sforce_api_calls_getdeleted_getdeletedresult.htm)
- Data Replication (atlas.en-us.api.meta/api/sforce_api_guidelines_datareplication.htm)
- latestDateCovered (atlas.en-us.api.meta/api/sforce_api_calls_getdeleted_getdeletedresult.htm)
- Polling for Changes (atlas.en-us.api.meta/api/polling_for_changes.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- Checking for Structural Changes in the Object (atlas.en-us.api.meta/api/checking_for_structural_changes_in_the_object.htm)
- DeleteResult (atlas.en-us.api.meta/api/sforce_api_calls_delete_result.htm)
- sObject (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
