---
title: "GetDeletedResult"
domain: api
topic: getdeletedresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.312Z
estimatedTokens: 397
keywords: [GetDeletedResult, getDeleted, call, array, deletedRecords, records]
---

# GetDeletedResult

> The getDeleted() call returns a GetDeletedResult
  object that contains an array of deletedRecords
  records.

# GetDeletedResult

The getDeleted() call returns a GetDeletedResult object that contains an array of deletedRecords records.

A GetDeletedResult object has these fields.

| Name | Type | Description |
| --- | --- | --- |
| earliestDateAvailable | dateTime | For the object type of the getDeleted() call, the timestamp (Coordinated Universal Time (UTC)—not local— timezone) of the last physically deleted object. If this value is less than endDate, the call fails, and you must resync your data before performing another replication. |
| deletedRecords[] | deletedRecords= | Array of the deleted records that satisfy the start and end dates specified in the getDeleted() call. |
| latestDateCovered | dateTime | The timestamp (Coordinated Universal Time (UTC)—not local— time zone) of the last date covered in the getDeleted() call. If there’s a value, it’s less than or equal to endDate. A value here indicates that, for safety, you must use this value for the startDate of your next call to capture the changes that started after this date but didn’t complete before endDate and were, therefore, not returned in the previous call. |

## deletedRecords

A GetDeletedResult object contains an array of deletedRecordsrecords.

deletedRecords records contain these properties.

| Name | Type | Description |
| --- | --- | --- |
| deletedDate | dateTime | Date and time (Coordinated Universal Time (UTC)—not local—timezone) when this record was deleted. This information is obtained using the SystemModstamp system field if available. |
| id | ID | ID of an sObject that has been deleted. |

## Related Topics

- getDeleted() (atlas.en-us.api.meta/api/sforce_api_calls_getdeleted.htm)
- endDate (atlas.en-us.api.meta/api/sforce_api_calls_getdeleted.htm)
- startDate (atlas.en-us.api.meta/api/sforce_api_calls_getdeleted.htm)
- sObject (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
