---
title: "Get a List of Deleted Records Within a Given Timeframe"
domain: rest-api
topic: get-a-list-of-deleted-records-within-a-given-timeframe
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.871Z
estimatedTokens: 236
keywords: [Deleted, Records, Timeframe, sObject, resource, Specify, date, time, range, were, written, log, periodically, purged, filtered]
---

# Get a List of Deleted Records Within a Given Timeframe

> Use the sObject Get Deleted resource to get a list of deleted
            records for the specified object. Specify the date and time range within which the
            records for the given object were deleted. Deleted records are written to a delete log
            (that is periodically purged), and will be filtered out of most operations, such as
            sObject Rows or Query (although QueryAll will include deleted records in
        results).

# Get a List of Deleted Records Within a Given Timeframe

Use the [sObject Get Deleted](atlas.en-us.api_rest.meta/api_rest/resources_getdeleted.htm "Retrieves the list of individual records that have been deleted within the given timespan for the specified object. This resource is available in REST API version 29.0 and later.") resource to get a list of deleted records for the specified object. Specify the date and time range within which the records for the given object were deleted. Deleted records are written to a delete log (that is periodically purged), and will be filtered out of most operations, such as sObject Rows or Query (although QueryAll will include deleted records in results).

Example usage for getting a list of Merchandise\_\_c records that were deleted between May 5th, 2013 and May 10th, 2013

```

```

Example request body

None required

JSON example response body

```

```

XML example response body

```

```

## Code Examples

```
curl https://MyDomainName.my/services/data/v66.0/sobjects/Merchandise__c/deleted/​​​?start=2013-05-05T00%3A00%3A00%2B00%3A00&end=2013-05-10T00%3A00%3A00%2B00%3A00 -H "Authorization: Bearer token"
```

```
{ 
    "deletedRecords" : 
    [ 
        { 
            "id" : "a00D0000008pQRAIA2", 
            "deletedDate" : "2013-05-07T22:07:19.000+0000"
        }
    ],
    "earliestDateAvailable" : "2013-05-03T15:57:00.000+0000",
    "latestDateCovered" : "2013-05-08T21:20:00.000+0000"
}
```

```
<?xml version="1.0" encoding="UTF-8"?> 
<Merchandise__c> 
    <deletedRecords> 
        <deletedDate>2013-05-07T22:07:19.000Z</deletedDate> 
        <id>a00D0000008pQRAIA2</id> 
    </deletedRecords>
    <earliestDateAvailable>2013-05-03T15:57:00.000Z</earliestDateAvailable>
    <latestDateCovered>2013-05-08T21:20:00.000Z</latestDateCovered>
</Merchandise__c>
```

## Related Topics

- sObject Get Deleted (atlas.en-us.api_rest.meta/api_rest/resources_getdeleted.htm)
