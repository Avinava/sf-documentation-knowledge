---
title: "How Should I Plan My App Analytics Query Strategy?"
domain: pkg2-dev
topic: how-should-i-plan-my-app-analytics-query-strategy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.944Z
estimatedTokens: 1236
keywords: [How, Plan, App, Analytics, Query, Strategy, detailed, depends, size, scope, business, data, you’re, querying, Compress]
---

# How Should I Plan My App Analytics Query Strategy?

> Your detailed query strategy depends on the size and scope of your business and the data
  types that you’re querying.

# How Should I Plan My App Analytics Query Strategy?

Your detailed query strategy depends on the size and scope of your business and the data types that you’re querying.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


All partners can take advantage of these query strategies.

-   Choose a data results FileType value, and select a corresponding FileCompression. With this query strategy, you can choose gzip compression for csv files or snappy column compression for parquet files.
-   Create regularly scheduled, automated queries.
-   To sweep in late-arriving data, create catch-up queries using the AvailableSince field.

## Compress Your Results Files

Your App Analytics query plan starts with your results file type and file compression. Data can eat up time and space, so do more with less by specifying the type of file you download. Reduce your data download time by specifying how your results file is compressed.

If you don’t specify file type or file compression, your results file defaults to csv with no compression for backwards compatibility reasons. If you choose the parquet file type, your results file includes data type information for each column.

We recommend that you always compress your results files. Choose from these SOAP API AppAnalyticsQueryRequest FileType and FileCompression value combinations.

| FileType | FileCompression |
| --- | --- |
| csv (default) | none (default when FileType is csv)gzip |
| parquet | snappy (default when FileType is parquet)gzipnone |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

When you download your App Analytics query result data, the HTTP response contains one or two important headers. The Content-Type header indicates the file type (txt/csv or application/parquet). For queries with csv FileType and gzip FileCompression, the Content-Encoding header indicates gzip encoding. Modern browsers often decode the gzip\-encoded file automatically, which results in a saved, uncompressed .csv file. Regardless if the file is automatically decoded or not, its filename extension is .csv.

## Schedule and Automate Your Queries

After you determine what queries to run and how often to run them, you want to schedule those queries. The easiest way is via automation.

What do we mean by automation? Write code that creates query request records on your schedule, monitors them, retrieves the data, and stores your AppExchange App Analytics data somewhere. For example, you can store the data in a custom object in your License Management Org.

Your automation options include, but aren’t limited to:

-   Custom API integrations using REST or SOAP API calls
-   Salesforce DX automation using the CLI
-   Salesforce flows
-   Apex triggers

For example, automate the retrieval of package usage summaries using Apex triggers.

If you want to also automate the retrieval of package usage log data, look to a different storage solution that scales with the data volume the logs contain.

## Create Catch-Up Queries

A catch-up query is like a broom, sweeping for data newly added to our data lake. Catch-up queries rely on you already having regular queries in place.

For example, on March 2, 2021 18:00 UTC you run this regular query that retrieves package usage log data for March 1, 2021:

```

```

Rerun that exact same query on March 3, 2021 18:00 UTC, but add the AvailableSince field set to the day and time you ran your original query: 2021-03-02T18:00:00Z. This query is your ad hoc catch-up query. It retrieves any data newly added to the data lake for March 2 since you ran your regular query:

```

```

You can use catch-up queries in many different ways, which we discuss in more detail in the Recommendations section.

When creating catch-up queries, keep these considerations in mind.

-   If StartTime is specified, the AvailableSince date must be later.
-   If EndTime is specified, the AvailableSince date must be later.
-   All queries must include StartTime or AvailableSince or both.
-   AvailableSince must be earlier than now.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

What happens when you want to create an ad hoc catch-up query, but you forgot when you ran the original query? Use Salesforce CLI and your original query’s sObjectID to look up the QuerySubmittedTime, like this: sf data get record --sobjecttype AppAnalyticsQueryRequest --sobjectid 0XIXXXXXXXXXXXXXXX Set your ad hoc catch-up query AvailableSince value to equal the QuerySubmittedTime.

#### See Also

-   [Apache Parquet](https://parquet.apache.org/ "Apache Parquet - HTML (New Window)")

-   [Automate AppAnalytics - AWS Stack](https://medium.com/@kamipatel/automate-appanalytics-aws-stack-74cbebc49d2a "Automate AppAnalytics - AWS Stack - HTML (New Window)")

## Code Examples

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "StartTime=2021-03-01T00:00:00Z
EndTime=2021-03-02T00:00:00Z
DataType=PackageUsageLog
FileType=csv
FileCompression=gzip"
```

```
sf data create record
--sobjecttype AppAnalyticsQueryRequest
--values "StartTime=2021-03-01T00:00:00Z
EndTime=2021-03-02T00:00:00Z
DataType=PackageUsageLog
FileType=csv 
FileCompression=gzip
AvailableSince=2021-03-02T18:00:00Z"
```
