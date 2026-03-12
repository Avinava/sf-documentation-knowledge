---
title: "QueryResult"
domain: tooling-api
topic: queryresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:45.640Z
estimatedTokens: 530
keywords: [QueryResult, results, query, EntityDefinition, layouts, entity, array, objects, Tooling, API, version, 34.0, later, QueryLocator, Metadata]
---

# QueryResult

> Represents the results of a query. For example, if you query on the object
        EntityDefinition, all the layouts for that entity are returned as an array of QueryResult
        objects in the Layouts field. Available in Tooling API version 34.0 and
        later.

# QueryResult

Represents the results of a query. For example, if you query on the object EntityDefinition, all the layouts for that entity are returned as an array of QueryResult objects in the Layouts field. Available in Tooling API version 34.0 and later.

QueryResult is not an extension of sObject.

## Fields

| Field | Details |
| --- | --- |
| done | TypebooleanDescriptionIf true, no additional rows can be retrieved from the query result. If false, one or more rows remain to be retrieved. Use this value as a loop condition while iterating through query results. |
| entityTypeName | TypestringDescriptionThe object or entity type, such as ApexClass or CompactLayoutInfo. |
| nextRecordsUrl | TypestringDescriptionIf the results exceed the current batch size, this field contains the URL of the next record in the query result set. This field is populated for the REST resource queryAll, and is analogous to queryLocator for SOAP calls. |
| queryLocator | TypeQueryLocatorDescriptionIf the results exceed the current batch size, this field contains a unique identifier used to retrieve the next batch of records. This field is populated for SOAP queryMore() and is analogous to the REST resource queryAll.Each new batch returns a new queryLocator value. |
| records | TypesObjectDescriptionArray of sObjects matching the data specified in the query. |
| size | TypeintDescriptionTotal number of rows returned. If no rows were returned, the value is (0). This field is the same as the size field in QueryResult in the Enterprise and Partner WSDLs. |
| totalSize | TypeintDescriptionTotal number of rows returned. Indicates whether the query retrieved any rows (any value greater than 0) or not (0). This field is the same as the totalSize field in QueryResult using the REST resource query or queryAll. |

## QueryLocator Metadata

| Field | Details |
| --- | --- |
| queryLocator | TypestringDescriptionIf the results exceed the current batch size, this field contains an identifier. Use with the SOAP queryMore() call to retrieve the next batch of records. Each new batch returns a new queryLocator value. |
