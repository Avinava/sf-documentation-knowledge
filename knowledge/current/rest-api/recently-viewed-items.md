---
title: "Recently Viewed Items"
domain: rest-api
topic: recently-viewed-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.565Z
keywords: [Recently, Viewed, Items, Note, Example]
---

# Recently Viewed Items

# Recently Viewed Items

Gets the most recently accessed items that were viewed or referenced by the current user. Salesforce stores information about record views in the interface and uses it to generate a list of recently viewed and referenced records, such as in the sidebar and for the auto-complete options in search.

This resource only accesses most recently used item information. If you want to modify the list of recently viewed items, you must update recently viewed information directly by using a SOQL Query with a FOR VIEW or FOR REFERENCE clause.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

The API response filters and displays recent records based on the permissions of the token or session ID user.

URI

/services/data/vXX.X/recent

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| limit | An optional limit that specifies the maximum number of records to be returned. If this parameter is not specified, the default maximum number of records returned is the maximum number of entries in RecentlyViewed, which is 200 records in total. |

## Example

-   For an example of retrieving a list of recently viewed items, see [View Recently Viewed Records](atlas.en-us.api_rest.meta/api_rest/dome_see_recently_viewed.htm "Use the *** resource to get a list of recently viewed records.").
-   For an example of setting records as recently viewed, see [Mark Records as Recently Viewed](atlas.en-us.api_rest.meta/api_rest/dome_mark_records_as_recently_viewed.htm "To mark a record as recently viewed using REST API, use the Query resource with a FOR VIEW or FOR REFERENCE clause. Use SOQL to mark records as recently viewed to ensure that information such as the date and time the record was viewed is correctly set.").