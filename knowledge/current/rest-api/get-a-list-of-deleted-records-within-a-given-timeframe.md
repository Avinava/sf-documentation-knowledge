---
title: "Get a List of Deleted Records Within a Given Timeframe"
domain: rest-api
topic: get-a-list-of-deleted-records-within-a-given-timeframe
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:24.900Z
keywords: [Get, List, Deleted, Records, Within, Given, Timeframe]
---

# Get a List of Deleted Records Within a Given Timeframe

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