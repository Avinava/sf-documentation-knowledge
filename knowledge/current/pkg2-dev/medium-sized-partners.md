---
title: "Medium-Sized Partners"
domain: pkg2-dev
topic: medium-sized-partners
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.035Z
estimatedTokens: 791
keywords: [Medium-Sized, Partners, bigger, subscriber, bases, six, managed, packages, partner’s, total, daily, usage, data, across, over]
---

# Medium-Sized Partners

> Medium-sized partners have bigger subscriber bases and about six managed packages. A
  medium-sized partner’s total daily usage data across all managed packages is at or just over 20
  GB. Also, this partner’s queries approach or hit the 15-minute processing time limit.

# Medium-Sized Partners

Medium-sized partners have bigger subscriber bases and about six managed packages. A medium-sized partner’s total daily usage data across all managed packages is at or just over 20 GB. Also, this partner’s queries approach or hit the 15-minute processing time limit.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


We recommend that after you run your regular queries one time, use catch-up queries as your main queries for subscriber snapshots and package usage summaries. Use a combination of daily queries and catch-up queries for package usage logs.

| Data Type | How to Get Started | How to Schedule Catch-Up Queries |
| --- | --- | --- |
| Subscriber Snapshots | An initial query to retrieve data from when App Analytics was enabled for your managed packages. | One daily query.Set AvailableSince to the day and time your last regular query ran.Set StartTime to 30 days ago.Omit EndTime.Each day advance StartTime and AvailableSince by 1 day. |
| Package Usage Summaries | An initial query to retrieve data from when App Analytics was enabled for your managed packages. | One daily catch-up query.Set AvailableSince to the day and time your last regular query ran.Set StartTime to the first of the previous month.Omit EndTime.Each day advance AvailableSince by 1 day.Each month advance StartTime to the first of the previous month. |
| Package Usage Logs | One regular daily query per package. | One daily catch-up query per package.Set AvailableSince to the day and time your last regular query ran.Set StartTime to 30 days ago.Set EndTime equal to the StartTime of your regular query.Each day advance StartTime, EndTime, and AvailableSince by 1 day. |

## Example

Half of your customers use your package on an NA or EU instance, so you run your regular queries at 18:00 UTC. The other half of your customers are on an AP instance, so you create catch-up queries to ensure that you capture data from around the world.

-   On March 31 at 18:00 UTC, run your regular package usage log queries for each of your packages.

    Package 1

    ```

    ```

    Package 2

    ```

    ```

-   On April 1 at 18:00 UTC onwards, run regular and catch-up package usage log queries.

    ![Package log file regular and catch-up queries timelline on April 1.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fapp_analytics_catchup_medium_today.png&folder=pkg2_dev)

    A. Regular Queries

    Package 1

    ```

    ```

    Package 2

    ```

    ```

    B. Catch-Up Queries

    Package 1

    ```

    ```

    Package 2

    ```

    ```

-   On April 2, repeat the same queries that you ran on April 1, but advance the queries by a day. ![Package log file regular and catch-up queries timeline on April 2.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fapp_analytics_catchup_medium_tomorrow.png&folder=pkg2_dev)

    A. Regular Queries

    Package 1

    ```

    ```

    Package 2

    ```

    ```

    B. Catch-Up Queries

    Package 1

    ```

    ```

    Package 2

    ```

    ```

## Code Examples

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "StartTime=2021-03-30T00:00:00Z
EndTime=2021-03-31T00:00:00Z
DataType=PackageUsageLog
PackageIds=0336XXXXXXXXXX
FileType=csv
FileCompression=gzip"
```

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "StartTime=2021-03-30T00:00:00Z
EndTime=2021-03-31T00:00:00Z
DataType=PackageUsageLog
PackageIds=0337XXXXXXXXXX
FileType=csv
FileCompression=gzip"
```

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "StartTime=2021-03-31T00:00:00Z
EndTime=2021-04-01T00:00:00Z
DataType=PackageUsageLog
PackageIds=0336XXXXXXXXXX
FileType=csv
FileCompression=gzip"
```

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "StartTime=2021-03-31T00:00:00Z
EndTime=2021-04-01T00:00:00Z
DataType=PackageUsageLog
PackageIds=0337XXXXXXXXXX
FileType=csv
FileCompression=gzip"
```

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "StartTime=2021-03-01T00:00:00Z
EndTime=2021-03-31T00:00:00Z
AvailableSince=2021-03-31T18:00:00Z
DataType=PackageUsageLog
PackageIds=0336XXXXXXXXXX
FileType=csv
FileCompression=gzip"
```
