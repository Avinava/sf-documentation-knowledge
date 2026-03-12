---
title: "Large-Sized Partners"
domain: pkg2-dev
topic: large-sized-partners
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.025Z
estimatedTokens: 985
keywords: [Large-Sized, Partners, Large, subscriber, bases, managed, packages, partner’s, total, daily, data, usage, Sometimes, package, larger]
---

# Large-Sized Partners

> Large partners have large subscriber bases and many managed packages. A large partner’s
  total daily data usage is more than 20 GB. Sometimes a large partner’s data from just one managed
  package is larger than the 20-GB daily limit. Also, large partners often must create a smaller
  time range for each query to complete in under the 15-minute processing time limit.

# Large-Sized Partners

Large partners have large subscriber bases and many managed packages. A large partner’s total daily data usage is more than 20 GB. Sometimes a large partner’s data from just one managed package is larger than the 20-GB daily limit. Also, large partners often must create a smaller time range for each query to complete in under the 15-minute processing time limit.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


Large partners frequently create one query per managed package per 12, 6, or 1-hour increments throughout a 24-hour period. How frequently you schedule your queries really depends on your data volume.

We recommend that you use a combination of queries and multiple catch-up queries for all data types

| Data Type | How to Get Started | How to Schedule Catch-Up Queries |
| --- | --- | --- |
| Subscriber Snapshots | One daily query per package. | One daily query per package.Set AvailableSince to the day and time your last regular query ran.Set StartTime to 30 days ago.Omit EndTime.Each day advance StartTime and AvailableSince by 1 day. |
| Package Usage Summaries | One daily query per package. | One daily catch-up query per package.Set AvailableSince to the day and time your last regular query ran.Set StartTime to the first of the previous month.Omit EndTime.Each day advance AvailableSince by 1 day.Each month advance StartTime to the first of the previous month. |
| Package Usage Logs | To retrieve all your data, create multiple segmented daily, automated App Analytics queries spread throughout the day.Break up your requests by managed package and by time increments throughout the day. | Create two levels of catch-up queries per day.Create one catch-up query per package that sweeps data from 2 days ago.Create a second catch-up query that sweeps data from 3 to 30 days ago.Each day advance StartTime, EndTime, and AvailableSince by 1 day. |

## Example

Your customers use your package on all Salesforce instances around the world, and your managed packages produce significant amounts of data. You schedule queries to run at the same time, each covering a 12-hour period, and you create a layered catch-up query plan to capture data from all instances.

In this example, we show two of your dozens of managed packages.

-   On March 31 at 18:00 UTC, run your regular package usage log queries.

    Package 1

    ```

    ```

    ```

    ```

    Package 2

    ```

    ```

    ```

    ```

-   On April 1 at 18:00 UTC, run your regular and catch-up package usage log queries.

    ![Package log file regular and catch-up queries timeline on April 1.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fapp_analytics_catchup_large_today.png&folder=pkg2_dev)

    A. Package Usage Log Regular Queries

    Package 1

    ```

    ```

    ```

    ```

    Package 2

    ```

    ```

    ```

    ```

    B. Package Usage Log 2 Days Ago Catch-Up Queries

    Package 1

    ```

    ```

    Package 2

    ```

    ```

    C. Package Usage Log From 3 to 30 Days Ago Catch-Up Queries

    Package 1

    ```

    ```

    Package 2

    ```

    ```

-   On April 2 onwards, run your regular and your catch-up package usage log queries, advancing the dates by 1 day.

    ![Package log file regular and catch-up queries timeline on April 2.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fapp_analytics_catchup_large_tomorrow.png&folder=pkg2_dev)

    A. Package Usage Log Regular Queries

    Package 1

    ```

    ```

    ```

    ```

    Package 2

    ```

    ```

    ```

    ```

    B. Package Usage Log 2 Days Ago Catch-Up Queries

    Package 1

    ```

    ```

    Package 2

    ```

    ```

    C. Package Usage Log From 3 to 30 Days Ago Catch-Up Queries

    Package 1

    ```

    ```

    Package 2

    ```

    ```

## Code Examples

```
sf data create record data create record
--sobjecttype AppAnalyticsQueryRequest
--values "StartTime=2021-03-30T00:00:00
EndTime=2021-03-30T12:00:00
DataType=PackageUsageLog
PackageIds=0336XXXXXXXXXX 
FileType=parquet
FileCompression=snappy"
```

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "StartTime=2021-03-30T12:00:00
EndTime=2021-03-31T00:00:00
DataType=PackageUsageLog
PackageIds=0336XXXXXXXXXX
FileType=parquet
FileCompression=snappy"
```

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "StartTime=2021-03-30T00:00:00
EndTime=2021-03-30T12:00:00
DataType=PackageUsageLog
PackageIds=0337XXXXXXXXXX
FileType=parquet
FileCompression=snappy"
```

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "StartTime=2021-03-30T12:00:00
EndTime=2021-03-31T00:00:00
DataType=PackageUsageLog
PackageIds=0337XXXXXXXXXX
FileType=parquet
FileCompression=snappy"
```

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "StartTime=2021-03-31T00:00:00Z
EndTime=2021-03-31T12:00:00Z
DataType=PackageUsageLog
PackageIds=0336XXXXXXXXXX 
FileType=parquet
FileCompression=snappy"
```
