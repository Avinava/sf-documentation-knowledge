---
title: "Get a List of Updated Records Within a Given Timeframe"
domain: rest-api
topic: get-a-list-of-updated-records-within-a-given-timeframe
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.885Z
estimatedTokens: 193
keywords: [Updated, Records, Timeframe, sObject, resource, modified, added, Specify, date, time, range, were]
---

# Get a List of Updated Records Within a Given Timeframe

> Use the sObject Get Updated resource to get a list of updated
            (modified or added) records for the specified object. Specify the date and time range
            within which the records for the given object were updated.

# Get a List of Updated Records Within a Given Timeframe

Use the [sObject Get Updated](atlas.en-us.api_rest.meta/api_rest/resources_getupdated.htm "Retrieves the list of individual records that have been updated (added or changed) within the given timespan for the specified object. This resource is available in REST API version 31.0 and later.") resource to get a list of updated (modified or added) records for the specified object. Specify the date and time range within which the records for the given object were updated.

Example usage for getting a list of Merchandise\_\_c records that were updated between May 6th, 2013 and May 10th, 2013

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
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Merchandise__c/updated/​​​?start=2013-05-06T00%3A00%3A00%2B00%3A00&end=2013-05-10T00%3A00%3A00%2B00%3A00 -H "Authorization: Bearer token"
```

```
{ 
    "ids" : 
    [ 
        "a00D0000008pQR5IAM", 
        "a00D0000008pQRGIA2", 
        "a00D0000008pQRFIA2"
    ],
    "latestDateCovered" : "2013-05-08T21:20:00.000+0000" 
}
```

```
<?xml version="1.0" encoding="UTF-8"?> 
<Merchandise__c> 
    <ids>a00D0000008pQR5IAM</ids>
    <ids>a00D0000008pQRGIA2</ids>
    <ids>a00D0000008pQRFIA2</ids>
    <latestDateCovered>2013-05-08T21:20:00.000Z</latestDateCovered>
</Merchandise__c>
```

## Related Topics

- sObject Get Updated (atlas.en-us.api_rest.meta/api_rest/resources_getupdated.htm)
