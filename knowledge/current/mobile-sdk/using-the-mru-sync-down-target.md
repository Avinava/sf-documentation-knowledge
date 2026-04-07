---
title: "Using the MRU Sync Down Target"
domain: mobile-sdk
topic: using-the-mru-sync-down-target
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:25.720Z
estimatedTokens: 187
keywords: [MRU, Sync, Down, Target, retrieve, recently, viewed, records, specific, Salesforce, org, Configuration, File, iOS, APIs, Android]
---

> To retrieve the most recently viewed records for a specific
   Salesforce object in your org, use the MRU sync down target.

# Using the MRU Sync Down Target

To retrieve the most recently viewed records for a specific Salesforce object in your org, use the MRU sync down target.

The MRU sync down target returns only the most recently viewed records for the given object, as determined by the Salesforce API.

## Configuration File Usage

For the "target" property, specify the following values.

Target Properties

"type":"mru"

"fieldList": Array of <string>

List of fields to sync.

"objectType": <string>

Name of a Salesforce object.

## iOS APIs

Swift

Class: MruSyncDownTarget

```

```

Objective-C

Class: SFMruSyncDownTarget

```

```

## Android APIs

Kotlin

Class: MruSyncDownTarget

```

```

Java

Class: MruSyncDownTarget

```

```

## Example

```

```

## Code Examples

```
MruSyncDownTarget.newSyncTarget(objectType: String, fieldlist: [Any])
```

```
+ (SFMruSyncDownTarget*) newSyncTarget:(NSString*)objectType fieldlist:(NSArray*)fieldlist;
```

```apex
public MruSyncDownTarget(fieldlist: List<String>, objectType: String)
```

```apex
public MruSyncDownTarget(List<String> fieldlist, String objectType)
```

```
{
  "syncs": [
    {
      "syncName": "syncDownMruContacts",
      "syncType": "syncDown",
      "soupName": "contacts",
      "target": {"type":"mru",
                 "fieldlist":["FirstName", "LastName", "Title", 
                              "MobilePhone", "Email", 
                              "Department", "HomePhone"], 
                              "object":"Contact"},
      "options": {"mergeMode":"OVERWRITE"}
    },
    {
      "syncName": "syncUpContacts",
      "syncType": "syncUp",
      "soupName": "contacts",
      "target": {"createFieldlist":["FirstName", "LastName", 
                                    "Title", "MobilePhone", 
                                    "Email", "Department", 
                                    "HomePhone"]},
      "options": {"fieldlist":["Id", "FirstName", "LastName", 
                                     "Title", "MobilePhone", 
                                     "Email", "Department", 
                                     "HomePhone"], 
                  "mergeMode":"LEAVE_IF_CHANGED"}
    }
  ]
}
```
