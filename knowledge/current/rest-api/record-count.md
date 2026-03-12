---
title: "Record Count"
domain: rest-api
topic: record-count
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.711Z
estimatedTokens: 396
keywords: [Record, Count, counts, organization]
---

# Record Count

> Lists information about object record counts in your
   organization.

# Record Count

Lists information about object record counts in your organization.

This resource is available in REST API version 40.0 and later for API users with the “View Setup and Configuration” permission. The returned record count is a cached snapshot in time that may not accurately represent the number of records in the object at the time of the request.

The record count value is updated automatically at variable time intervals, and there are no fixed schedules for these updates. It doesn’t include the following types of records:

-   Deleted records in the recycle bin
-   Archived records
-   Associated objects such as ChangeEvent, Feed, History, OwnerSharingRule, and Share objects

To get an accurate count, use the SOQL query SELECT count() FROM sObject. Results are limited to records visible to the user executing the query.

## Syntax

URI

/services/data/vXX.X/limits/recordCount?sObjects=objectList

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| sObjects | A comma-delimited list of object names. If a listed object isn’t found in the org, it’s ignored and not returned in the response.This parameter is optional. If this parameter isn’t provided, the resource returns record counts for all objects in the org. |

Response body

[Record Count Response Body](atlas.en-us.api_rest.meta/api_rest/responses_record_count.htm#responses_record_count "Describes the result of a Record Count request.")

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/limits/recordCount?sObjects=Account,Contact -H "Authorization: Bearer token"
```

```
{
   "sObjects" : [ {
     "count" : 3,
     "name" : "Account"
   }, {
     "count" : 10,
     "name" : "Contact"
   } ]
}
```

## Related Topics

- Record Count Response Body (atlas.en-us.api_rest.meta/api_rest/responses_record_count.htm)
