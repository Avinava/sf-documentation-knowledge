---
title: "Checking for Structural Changes in the Object"
domain: api
topic: checking-for-structural-changes-in-the-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.707Z
estimatedTokens: 309
keywords: [Checking, Structural, Changes, API, data, replication, reflects, made, records, determine, whether, structure, objects, added, to—or]
---

# Checking for Structural Changes in the Object

> In the API, data replication only reflects changes made to object records. It does not
   determine whether changes have been made to the structure of objects (for example, fields added
   to—or removed from—a custom object). It is the responsibility of the client
   application to check whether the

# Checking for Structural Changes in the Object

In the API, data replication only reflects changes made to object records. It does not determine whether changes have been made to the structure of objects (for example, fields added to—or removed from—a custom object). It is the responsibility of the client application to check whether the structure of a given object has changed since the last update. Before replicating data, client applications can call [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") on the object, and then compare the data returned in the [DescribeSObjectResult](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm) with the data returned and saved from previous [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") invocations.

## Related Topics

- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- DescribeSObjectResult (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)
