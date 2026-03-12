---
title: "GetUpdatedResult"
domain: api
topic: getupdatedresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.330Z
estimatedTokens: 321
keywords: [GetUpdatedResult, getUpdated, call, record, inserted, updated, timespan]
---

# GetUpdatedResult

> The getUpdated() call returns a
    GetUpdatedResult object that contains information about
   each record that was inserted or updated within the given timespan. An GetUpdatedResult object has the following properties:

# GetUpdatedResult

The [getUpdated()](atlas.en-us.api.meta/api/sforce_api_calls_getupdated.htm "Retrieves the list of individual records that have been updated (added or changed) within the given timespan for the specified object.") call returns a GetUpdatedResult object that contains information about each record that was inserted or updated within the given timespan. An GetUpdatedResult object has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| id[] | ID | Array of IDs of each object that has been updated. |
| latestDateCovered | dateTime | The timestamp (Coordinated Universal Time (UTC)—not local— time zone) of the last date covered in the getUpdated() call. If there is a value, it is less than or equal to endDate. A value here indicates that, for safety, you should use this value for the startDate of your next call to capture the changes that started after this date but did not complete before the endDate and were, therefore, not returned in the previous call.NoteIf Salesforce executes a long-running transaction on your instance, the value in this field is the start time of that long-running transaction until it completes. This is because a long-running transaction might affect your user data (for example, batch processing). |

## Related Topics

- getUpdated() (atlas.en-us.api.meta/api/sforce_api_calls_getupdated.htm)
- endDate (atlas.en-us.api.meta/api/sforce_api_calls_getupdated.htm)
- startDate (atlas.en-us.api.meta/api/sforce_api_calls_getupdated.htm)
