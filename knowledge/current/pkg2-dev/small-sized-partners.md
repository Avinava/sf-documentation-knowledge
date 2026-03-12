---
title: "Small-Sized Partners"
domain: pkg2-dev
topic: small-sized-partners
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.041Z
estimatedTokens: 713
keywords: [Small-Sized, Partners, manageable, subscriber, bases, two, managed, packages, small, partner’s, total, daily, usage, data, across]
---

# Small-Sized Partners

> Small-sized partners have manageable subscriber bases and one or two managed packages. A
  small partner’s total daily usage data across all managed packages is 5 GB or less. Also, small
  partner’s queries complete well under the 15-minute processing time limit.

# Small-Sized Partners

Small-sized partners have manageable subscriber bases and one or two managed packages. A small partner’s total daily usage data across all managed packages is 5 GB or less. Also, small partner’s queries complete well under the 15-minute processing time limit.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


Given how manageable smaller partners’ data is, after you run your regular queries one time, we recommend that you run a daily catch-up query as your main query. Sweep in all data for all your managed packages for the last 30 days.

| Data Type | How to Get Started | How to Schedule Catch-Up Queries |
| --- | --- | --- |
| Subscriber Snapshots | An initial query to retrieve data from when App Analytics was enabled for your managed package. | One daily catch-up query.Set AvailableSince to the day and time your last regular query ran.Set StartTime to 30 days ago.Omit EndTime.Each day advance StartTime and AvailableSince by 1 day. |
| Package Usage Summaries | An initial query to retrieve data from when App Analytics was enabled for your managed package. | One daily catch-up query.Set AvailableSince to the day and time your last regular query ran.Set StartTime to the first of the previous month.Omit EndTime.Each day advance AvailableSince by 1 day.Each month advance StartTime to the first of the previous month. |
| Package Usage Logs | An initial query to retrieve data from when App Analytics was enabled for your managed package. | One daily catch-up query.Set AvailableSince to the day and time your last regular query ran.Set StartTime to 30 days ago.Omit EndTime.Each day advance StartTime and AvailableSince by 1 day. |

## Example

Most of your customers use your package on an NA or EU instance, so you run your queries at 18:00 UTC. You have a couple customers on an AP instance, so you create catch-up queries to ensure that you capture data from around the world.

-   On March 31 at 18:00 UTC, run your regular queries.

    Subscriber Snapshot

    ```

    ```

    Package Usage Summary

    ```

    ```

    Package Usage Log

    ```

    ```

-   On April 1 at 18:00 UTC run these three catch-up queries.

    Subscriber Snapshot Catch-Up Query

    ```

    ```

    Package Usage Summary Catch-Up Query

    ```

    ```

    Package Usage Log Catch-Up Query

    ```

    ```

-   On April 2 at 18:00 UTC, run the same catch-up queries, but advance the subscriber snapshot and package usage log AvailableSince and StartTime date by 1 day each. Advance the package usage summary AvailableSince by 1 day.

    Subscriber Snapshot Catch-Up Query

    ```

    ```

    Package Usage Summary Catch-Up Query

    ```

    ```

    Package Usage Log Catch-Up Query

    ```

    ```

## Code Examples

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "DataType=SubscriberSnapshot
FileType=csv
FileCompression=gzip
StartTime=2020-03-30T00:00:00Z
EndTime=2020-03-31T00:00:00Z"
```

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "DataType=PackageUsageSummary
FileType=csv
FileCompression=gzip
StartTime=2020-02-01T00:00:00Z
EndTime=2020-03-01T00:00:00Z"
```

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "DataType=PackageUsageLog
FileType=csv
FileCompression=gzip
StartTime=2020-03-30T00:00:00Z
EndTime=2020-03-31T00:00:00Z"
```

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "DataType=SubscriberSnapshot
FileType=csv
FileCompression=gzip
StartTime=2020-03-02T00:00:00Z
AvailableSince=2020-03-31T18:00:00Z"
```

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "DataType=PackageUsageSummary
FileType=csv
FileCompression=gzip
StartTime=2020-03-01T00:00:00Z
AvailableSince=2020-03-31T18:00:00Z"
```
