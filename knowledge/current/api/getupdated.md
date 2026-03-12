---
title: "getUpdated()"
domain: api
topic: getupdated
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:57.327Z
estimatedTokens: 1840
keywords: [getUpdated, Retrieves, individual, records, updated, added, changed, timespan, Usage, Rules, Guidelines, Basic, Steps, Replicating, Objects]
---

# getUpdated()

> Retrieves the list of individual records that have been updated (added or changed)
      within the given timespan for the specified object.

# getUpdated()

Retrieves the list of individual records that have been updated (added or changed) within the given timespan for the specified object.

## Syntax

```

```

## Usage

Use getUpdated() for data replication applications to retrieve a set of IDs for objects of the specified object that have been created or updated within the specified timespan. The getUpdated() call retrieves an array of [GetUpdatedResult](atlas.en-us.api.meta/api/sforce_api_calls_getupdated_getupdatedresult.htm) objects containing the ID of each created or updated object and the date/time (Coordinated Universal Time (UTC) time zone) on which it was created or updated, respectively. Be sure to read [Data Replication](atlas.en-us.api.meta/api/sforce_api_guidelines_datareplication.htm) before using getUpdated() in your client application.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

The getUpdated() call retrieves the IDs only for objects to which the logged-in user has access.

## Rules and Guidelines

When replicating created and updated objects, consider the following rules and guidelines:

-   The specified startDate must chronologically precede the specified endDate value. The specified startDate cannot be the same value as, or later than, the specified endDate value. Otherwise, the API returns an INVALID\_REPLICATION\_DATE error.
-   Results are returned for no more than 30 days previous to the day the call is executed.
-   Client applications typically poll for changed data periodically. For important polling considerations, see [Polling for Changes](atlas.en-us.api.meta/api/polling_for_changes.htm).
-   Your client application can replicate any objects to which it has sufficient permissions. For example, to replicate all data for your organization, your client application must be logged in with “View All Data” access rights to the specified object. Similarly, the objects must be within your sharing rules. For more information, see [Factors that Affect Data Access](atlas.en-us.api.meta/api/calls.htm).
-   Certain objects cannot be replicated via the API. To replicate an object via the getUpdated() call, its object must be configured as replicateable (replicateable is true). To determine whether a given object can be replicated, your client application can invoke the [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") call on the object and inspect its replicateable property.
-   Certain objects cannot be deleted, such as [Group](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_group.htm "HTML (New Window)"), [User](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_user.htm "HTML (New Window)"), [Contract](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contract.htm "HTML (New Window)"), or [Product2](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_product2.htm "HTML (New Window)") objects. However, if instances of these objects are no longer visible in the Salesforce user interface, they could have been rendered inactive so that only users with administrative access can see them. To determine whether a missing object instance has been made inactive, your client application can call [getUpdated()](# "Retrieves the list of individual records that have been updated (added or changed) within the given timespan for the specified object.") and check the object’s active flag.
-   Development tools differ in the way that they handle time data. Some development tools report the local time, while others report only the Coordinated Universal Time (UTC) time. To determine how your development tool handles time values, refer to its documentation.

## Basic Steps for Replicating Updated Objects

Replicating objects involves these basic steps for each object that you want to replicate.

1.  Optionally, the client application determines whether the structure of the object has changed since the last replication request, as described in [Checking for Structural Changes in the Object](atlas.en-us.api.meta/api/checking_for_structural_changes_in_the_object.htm).
2.  Call getUpdated(), passing in the object and timespan for which to retrieve data.
3.  Iterate through the returned array of IDs. For each ID element in the array, call retrieve() to obtain the latest information you want from the associated object. Your client application must then take the appropriate action on the local data, such as inserting new rows or updating existing ones with the latest information.
4.  Optionally, the client application saves the request timestamp for future reference.

A client application likely performs other tasks associated with data replication operations. For example, if an opportunity were to become closed, a client application can run a new revenue report. Similarly, if a task is completed, the process can log this action somehow in another system.

## Sample Code—Java

This sample gets the accounts that were updated in the last 60 minutes and writes their IDs to the console.

```

```

## Sample Code—C#

This sample gets the accounts that were updated in the last 60 minutes and writes their IDs to the console.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| sObjectTypeEntityType | string | Object type. The specified value must be a valid object for your organization. For a list of standard objects, see Standard Objects. |
| startDate | dateTime | Starting date/time (Coordinated Universal Time (UTC) time zone—not local— timezone) of the timespan for which to retrieve the data. The API ignores the seconds portion of the specified dateTime value (for example, 12:30:15 is interpreted as 12:30:00 UTC). |
| endDate | dateTime | Ending date/time (Coordinated Universal Time (UTC) time zone—not local— timezone) of the timespan for which to retrieve the data. The API ignores the seconds portion of the specified dateTime value (for example, 12:35:15 is interpreted as 12:35:00 UTC). |

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api)

#### Important

There is a limit of 600,000 IDs in the result [GetUpdatedResult](atlas.en-us.api.meta/api/sforce_api_calls_getupdated_getupdatedresult.htm)\[\]. If your getUpdated() call returns more than 600,000 IDs, an exception EXCEEDED\_ID\_LIMIT is returned. You can correct the error by choosing start and end dates that are closer together.

## Response

[GetUpdatedResult](atlas.en-us.api.meta/api/sforce_api_calls_getupdated_getupdatedresult.htm)\[\]

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [Data Replication](atlas.en-us.api.meta/api/sforce_api_guidelines_datareplication.htm)

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

## Code Examples

```
GetUpdatedResult[] = connection.getUpdated(string sObjectType, dateTime startDate, dateTime EndDate);
```

```apex
public void getUpdatedRecords() {
   try {
      GregorianCalendar endTime = (GregorianCalendar) connection
            .getServerTimestamp().getTimestamp();
      GregorianCalendar startTime = (GregorianCalendar) endTime.clone();
      // Subtract 60 minutes from the server time so that we have
      // a valid time frame.
      startTime.add(GregorianCalendar.MINUTE, -60);
      System.out.println("Checking updates as of: "
            + startTime.getTime().toString());
      
      // Get the updated accounts within the specified time frame
      GetUpdatedResult ur = connection.getUpdated("Account", startTime,
            endTime);
      System.out.println("GetUpdateResult: " + ur.getIds().length);
      
      // Write the results
      if (ur.getIds() != null && ur.getIds().length > 0) {
         for (int i = 0; i < ur.getIds().length; i++) {
            System.out.println(ur.getIds()[i] + " was updated between "
                  + startTime.getTime().toString() + " and "
                  + endTime.getTime().toString());
         }
      } else {
         System.out.println("No updates to accounts in "
               + "the last 60 minutes.");
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void getUpdatedRecords()
{
   try
   {
      DateTime endTime = binding.getServerTimestamp().timestamp;
      // Subtract 60 minutes from the server time so that we have
      // a valid time frame.
      DateTime startTime = endTime.AddMinutes(-60);
      Console.WriteLine("Checking updates as of: "
            + startTime.ToLocalTime().ToString());

      // Get the updated accounts within the specified time frame
      GetUpdatedResult ur = binding.getUpdated("Account", startTime,
            endTime);
      Console.WriteLine("GetUpdateResult: " + ur.ids.Length);

      // Write the results
      if (ur.ids != null && ur.ids.Length > 0)
      {
         for (int i = 0; i < ur.ids.Length; i++)
         {
            Console.WriteLine(ur.ids[i] + " was updated between "
                  + startTime.ToLocalTime().ToString() + " and "
                  + endTime.ToLocalTime().ToString());
         }
      }
      else
      {
         Console.WriteLine("No updates to accounts in "
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

- GetUpdatedResult (atlas.en-us.api.meta/api/sforce_api_calls_getupdated_getupdatedresult.htm)
- Data Replication (atlas.en-us.api.meta/api/sforce_api_guidelines_datareplication.htm)
- Polling for Changes (atlas.en-us.api.meta/api/polling_for_changes.htm)
- Factors that Affect Data Access (atlas.en-us.api.meta/api/calls.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- Checking for Structural Changes in the Object (atlas.en-us.api.meta/api/checking_for_structural_changes_in_the_object.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
