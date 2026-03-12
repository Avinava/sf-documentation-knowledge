---
title: "Data Replication Steps"
domain: api
topic: data-replication-steps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.713Z
estimatedTokens: 890
keywords: [Data, Replication, Steps, typical, procedure]
---

# Data Replication Steps

> The following is a typical data replication procedure for an object:

# Data Replication Steps

The following is a typical data replication procedure for an object:

1.  Optionally, determine whether the structure of the object has changed since the last replication request, as described in [Checking for Structural Changes in the Object](atlas.en-us.api.meta/api/checking_for_structural_changes_in_the_object.htm).
2.  Call [getUpdated()](atlas.en-us.api.meta/api/sforce_api_calls_getupdated.htm "Retrieves the list of individual records that have been updated (added or changed) within the given timespan for the specified object."), passing in the object and timespan for which to retrieve data.

    Note that [getUpdated()](atlas.en-us.api.meta/api/sforce_api_calls_getupdated.htm "Retrieves the list of individual records that have been updated (added or changed) within the given timespan for the specified object.") retrieves the IDs for data to which the logged in user has access. Data that is outside of the user’s sharing model is not returned. The API returns the ID of every changed object that is visible to you, regardless of what change occurred in the object. For information on IDs, see [ID Field Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm#i1435616).

3.  Pass in all IDs in an array. For each ID element in the array, call [retrieve()](atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm "Retrieves one or more records based on the specified IDs.") to obtain the latest information you want from the associated object. You must then take the appropriate action on the local data, such as inserting new rows or updating existing ones with the latest information.
4.  Call [getDeleted()](atlas.en-us.api.meta/api/sforce_api_calls_getdeleted.htm "Retrieves the list of individual records that have been deleted within the given timespan for the specified object."), passing in the object and timespan for which to retrieve data. Like getUpdated(), getDeleted() retrieves the IDs for data to which the logged-in user has access. Data that is outside of the user’s sharing model is not returned. The API returns the ID of every changed object that is visible to you, regardless of what change occurred in the object, based on SystemModstamp field information if available. For information on IDs, see [ID Field Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm#i1435616).
5.  Iterate through the returned array of IDs. Your client application must then take the appropriate action on the local data to remove (or flag as deleted) the deleted objects. If your client application cannot match rows in the local data using the retrieved object ID, then the local data rows either were deleted or were never created, in which case there is nothing to do.
6.  Optionally, save the request time spans for future reference. You can do this with the [getDeleted()](atlas.en-us.api.meta/api/sforce_api_calls_getdeleted.htm "Retrieves the list of individual records that have been deleted within the given timespan for the specified object.") [latestDateCovered](atlas.en-us.api.meta/api/sforce_api_calls_getdeleted_getdeletedresult.htm#i1428544) value or the [getUpdated()](atlas.en-us.api.meta/api/sforce_api_calls_getupdated.htm "Retrieves the list of individual records that have been updated (added or changed) within the given timespan for the specified object.") [latestDateCovered](atlas.en-us.api.meta/api/sforce_api_calls_getupdated_getupdatedresult.htm#i1428892) value.

## Related Topics

- Checking for Structural Changes in the Object (atlas.en-us.api.meta/api/checking_for_structural_changes_in_the_object.htm)
- getUpdated() (atlas.en-us.api.meta/api/sforce_api_calls_getupdated.htm)
- retrieve() (atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm)
- getDeleted() (atlas.en-us.api.meta/api/sforce_api_calls_getdeleted.htm)
- latestDateCovered (atlas.en-us.api.meta/api/sforce_api_calls_getdeleted_getdeletedresult.htm)
- latestDateCovered (atlas.en-us.api.meta/api/sforce_api_calls_getupdated_getupdatedresult.htm)
