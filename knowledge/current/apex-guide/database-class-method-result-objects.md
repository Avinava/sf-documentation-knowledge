---
title: "Database Class Method Result Objects"
domain: apex-guide
topic: database-class-method-result-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.595Z
estimatedTokens: 165
keywords: [Database, Result, Objects, results, data, operation, contain, useful, record, whether, successful, any, error, specific]
---

# Database Class Method Result Objects

> Database class methods return the results of the data operation.
These result objects contain useful information about the data operation
for each record, such as whether the operation was successful or not,
and any error information. Each type of operation returns a specific
result object type, as 

# Database Class Method Result Objects

Database class methods return the results of the data operation. These result objects contain useful information about the data operation for each record, such as whether the operation was successful or not, and any error information. Each type of operation returns a specific result object type, as outlined below.

| Operation | Result Class |
| --- | --- |
| insert, update | SaveResult Class |
| upsert | UpsertResult Class |
| merge | MergeResult Class |
| delete | DeleteResult Class |
| undelete | UndeleteResult Class |
| convertLead | LeadConvertResult Class |
| emptyRecycleBin | EmptyRecycleBinResult Class |
