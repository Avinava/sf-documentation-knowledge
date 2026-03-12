---
title: "Object-Specific Requirements for Data Replication"
domain: api
topic: object-specific-requirements-for-data-replication
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:56.764Z
estimatedTokens: 476
keywords: [Object-Specific, Requirements, Data, Replication, API, objects]
---

# Object-Specific Requirements for Data Replication

> The API objects have the following requirements for data replication:

# Object-Specific Requirements for Data Replication

The API objects have the following requirements for data replication:

-   The [getUpdated()](atlas.en-us.api.meta/api/sforce_api_calls_getupdated.htm "Retrieves the list of individual records that have been updated (added or changed) within the given timespan for the specified object.") and [getDeleted()](atlas.en-us.api.meta/api/sforce_api_calls_getdeleted.htm "Retrieves the list of individual records that have been deleted within the given timespan for the specified object.") calls filter the results so that the client application receives IDs for only those created or updated objects to which the logged-in user has access. For information on IDs, see [ID Field Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm#i1435616).
-   Your client application can replicate any objects to which it has sufficient permissions. For example, to replicate all data for your organization, your client application must be logged in with the “View All Data” permission. For more information, see [Factors that Affect Data Access](atlas.en-us.api.meta/api/calls.htm).
-   The logged-in user must have read access to the object. For more information, see “Set Your Internal Organization-Wide Sharing Defaults” in Salesforce Help.
-   The object must be configured to be replicateable (replicateable is true). To determine whether a given object can be replicated, your application can invoke the [describeSObject()](atlas.en-us.api.meta/api/sforce_api_calls_describesobject.htm "Describes metadata (field list and object properties) for the specified object.") call on the object and inspect the replicateable property in the [describeSObjectResult](atlas.en-us.api.meta/api/sforce_api_calls_describesobject_result.htm "The describeSObject() call returns a DescribeSObjectResult object.").

## Related Topics

- getUpdated() (atlas.en-us.api.meta/api/sforce_api_calls_getupdated.htm)
- getDeleted() (atlas.en-us.api.meta/api/sforce_api_calls_getdeleted.htm)
- Factors that Affect Data Access (atlas.en-us.api.meta/api/calls.htm)
- describeSObject() (atlas.en-us.api.meta/api/sforce_api_calls_describesobject.htm)
- describeSObjectResult (atlas.en-us.api.meta/api/sforce_api_calls_describesobject_result.htm)
