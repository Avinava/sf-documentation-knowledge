---
title: "Using the SOQL Sync Down Target"
domain: mobile-sdk
topic: using-the-soql-sync-down-target
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.356Z
estimatedTokens: 454
keywords: [SOQL, Sync, Down, Target, define, query, selects, everything, business, simplest, option, supporting, arguments, Configuration, File]
---

# Using the SOQL Sync Down Target

> If you can define a SOQL query that selects everything required for a
   business need, the SOQL target is your simplest sync down option. This target takes a SOQL query
   and optional supporting arguments.

# Using the SOQL Sync Down Target

If you can define a SOQL query that selects everything required for a business need, the SOQL target is your simplest sync down option. This target takes a SOQL query and optional supporting arguments.

Mobile Sync wraps the SOQL query you provide as a REST request and sends it to Salesforce.

## Configuration File Usage

For the "target" property, specify the following values.

Target Properties

"type":"soql"

"query": <string>

The SOQL query.

"idFieldName": <string>

(Optional) Name of a custom ID field. If you provide "idFieldName", Mobile Sync uses the field with the given name to get the ID of the record. For example, if you specify "idFieldName":"AcmeId", Mobile Sync obtains the record’s ID from the AcmeId field instead of the default Id field.

"modificationDateFieldName": <string>

(Optional) Name of the field containing the last modification date for the record. If you provide modificationDateFieldName, Mobile Sync uses the field with this name to compute the maxTimestamp value that startFetch uses to resync the records. Default field name is lastModifiedDate.

"maxBatchSize": <integer>

(Optional) Proposed number of records to obtain in each fetch operation. If you provide a maxBatchSize value, Mobile Sync uses it to suggest the maximum number of records to be returned by each fetch operation. The actual number of records fetched can be more or less than the given value. Actual runtime batch sizes can depend on performance concerns, number of matching records, or a LIMIT specified in the query.

## iOS APIs

Swift

Class: SoqlSyncDownTarget

```

```

```

```

Objective-C

Class: SFSoqlSyncDownTarget

```

```

## Android APIs

Kotlin

Class: SoqlSyncDownTarget

```

```

Java

Class: SoqlSyncDownTarget

```

```

## Example

```

```

## Code Examples

```
SoqlSyncDownTarget.newSyncTarget(_ query:String) → Self
```

```
SoqlSyncDownTarget.newSyncTarget(_ query:String, maxBatchSize size:Int) → Self
```

```
+ (SFSoqlSyncDownTarget*) newSyncTarget:(NSString*)query;
+ (SFSoqlSyncDownTarget*) newSyncTarget:(NSString*)query 
    maxBatchSize:(NSInteger) maxBatchSize;
```

```apex
public fun SoqlSyncDownTarget(query: String)
public fun SoqlSyncDownTarget(idFieldName: String, modificationDateFieldName: String, 
    query: String)
public fun SoqlSyncDownTarget(idFieldName: String, modificationDateFieldName: String, 
    query: String, maxBatchSize: int)
```

```apex
public SoqlSyncDownTarget(String idFieldName, String modificationDateFieldName, 
    String query)
public SoqlSyncDownTarget(String idFieldName, String modificationDateFieldName, 
    String query, int maxBatchSize)
```
