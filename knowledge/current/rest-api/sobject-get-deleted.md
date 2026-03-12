---
title: "sObject Get Deleted"
domain: rest-api
topic: sobject-get-deleted
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.560Z
estimatedTokens: 993
keywords: [sObject, Get, Deleted, Retrieves, list, individual, records, deleted, within, given, timespan, specified, object., resource, REST, API, version, 29.0, later., Syntax]
---

# sObject Get Deleted

> Retrieves the list of individual records that have been deleted within the given
  timespan for the specified object. This resource is available in REST API version 29.0 and
  later.

# sObject Get Deleted

Retrieves the list of individual records that have been deleted within the given timespan for the specified object. This resource is available in REST API version 29.0 and later.

This resource is commonly used in data replication applications. Note the following considerations:

-   Deleted records are written to a delete log which this resource accesses. A background process that runs every two hours purges records that have been in an organization's delete log for more than two hours if the number of records is above a certain limit. Starting with the oldest records, the process purges delete log entries until the delete log is back below the limit. This is done to protect Salesforce from performance issues related to massive delete logs
-   Information on deleted records is returned only if the current session user has access to them.
-   Results are returned for no more than 15 days previous to the day the call is executed (or earlier if an administrator has purged the Recycle Bin).
-   There is a limit of 600,000 IDs returned from this resource. If more than 600,000 IDs are found, EXCEEDED\_ID\_LIMIT is returned. You can correct the error by choosing start and end dates that are closer together.

For information about the Rules and Guidelines, Limits, and Basic Steps for Replicating Deleted Records, see [getDeleted()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_getdeleted.htm "HTML (New Window)") in the SOAP API Developer’s Guide.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/deleted/?start=startDateAndTime&end=endDateAndTime

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| start | Starting date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data. The API ignores the seconds portion of the specified dateTime value (for example, 12:30:15 is interpreted as 12:30:00 UTC). The date and time must be formatted as described in Valid Date and DateTime Formats. The date/time value for start must chronologically precede end. This parameter should be URL-encoded. |
| end | Ending date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data. The API ignores the seconds portion of the specified dateTime value (for example, 12:35:15 is interpreted as 12:35:00 UTC). The date and time must be formatted as described in Valid Date and DateTime Formats. This parameter should be URL-encoded |

Response Body

| Property | Type | Description |
| --- | --- | --- |
| deletedRecords | array | Array of deleted records that satisfy the start and end dates specified in the request. Each entry contains the record ID and the date and time the record was deleted in ISO 8601 format, using Coordinated Universal Time (UTC) timezone. |
| earliestDateAvailable | String | ISO 8601 format timestamp (Coordinated Universal Time (UTC)—not local— timezone) of the last physically deleted object. |
| latestDateCovered | String | ISO 8601 format timestamp (Coordinated Universal Time (UTC)—not local— time zone) of the last date covered in the request. |

## Example

For an example of getting a list of deleted items, see [Get a List of Deleted Records Within a Given Timeframe](atlas.en-us.api_rest.meta/api_rest/dome_get_deleted.htm "Use the *** resource to get a list of deleted records for the specified object. Specify the date and time range within which the records for the given object were deleted. Deleted records are written to a delete log (that is periodically purged), and will be filtered out of most operations, such as sObject Rows or Query (although QueryAll will include deleted records in results).").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)

## Related Topics

- Valid Date and DateTime Formats (atlas.en-us.api_rest.meta/api_rest/intro_valid_date_formats.htm)
- Get a List of Deleted Records Within a Given Timeframe (atlas.en-us.api_rest.meta/api_rest/dome_get_deleted.htm)
