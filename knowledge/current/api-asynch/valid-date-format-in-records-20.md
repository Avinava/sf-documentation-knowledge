---
title: "Valid Date Format in Records (2.0)"
domain: api-asynch
topic: valid-date-format-in-records-20
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.599Z
estimatedTokens: 348
keywords: [Date, Records, 2.0, Specify, right, dateTime]
---

# Valid Date Format in Records (2.0)

> Specify the right format for dateTime and date fields.

# Valid Date Format in Records (2.0)

Specify the right format for dateTime and date fields.

## dateTime

Use the yyyy-MM-ddTHH:mm:ss.SSS+/-HH:mm or yyyy-MM-ddTHH:mm:ss.SSSZ formats to specify dateTime fields.

-   yyyy is the four-digit year
-   MM is the two-digit month (01-12)
-   dd is the two-digit day (01-31)
-   'T' is a separator indicating that time-of-day follows
-   HH is the two-digit hour (00-23)
-   mm is the two-digit minute (00-59)
-   ss is the two-digit seconds (00-59)
-   SSS is the optional three-digit milliseconds (000-999)
-   +/-HH:mm is the Zulu (UTC) time zone offset
-   'Z' is the reference UTC timezone

When a timezone is added to a UTC dateTime, the result is the date and time in that timezone. For example, 2002-10-10T12:00:00+05:00 is 2002-10-10T07:00:00Z and 2002-10-10T00:00:00+05:00 is 2002-10-09T19:00:00Z. See [W3C XML Schema Part 2: DateTime Datatype](http://www.w3.org/TR/xmlschema-2/#dateTime "HTML (New Window)").

## date

Use the yyyy-MM-dd format to specify date fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

Specifying an offset for date is not supported.

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")
