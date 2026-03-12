---
title: "CSV Files in AppExchange Marketplace Analytics"
domain: packagingGuide
topic: csv-files-in-appexchange-marketplace-analytics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.986Z
estimatedTokens: 1020
keywords: [CSV, Files, AppExchange, Marketplace, Analytics, export, data, comma-separated, creates, separate, file, dashboard, visualization, Activity, Source]
---

# CSV Files in AppExchange Marketplace Analytics

> You can export data from AppExchange Marketplace Analytics in comma-separated value
    (.csv) format. When you export data, Marketplace Analytics creates a separate .csv file for each
    dashboard
    visualization.

# CSV Files in AppExchange Marketplace Analytics

You can export data from AppExchange Marketplace Analytics in comma-separated value (.csv) format. When you export data, Marketplace Analytics creates a separate .csv file for each dashboard visualization.

We format .csv files as follows.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Activity Summary by Region and Co-Marketing Performance Timeline data isn’t available in .csv format.

-   The first row is the header and provides column names. Subsequent rows represent records.
-   Within rows, values are separated by commas.
-   Negative values are prefixed with a minus sign.

## Activity Source Timeline File

Provides data from the Activity Source Timeline visualization with your global and local filter selections applied.

## Example

This example shows the header row and four rows of sample data. These filters were applied.

-   The global filter is set to show data for the last 30 days.
-   The local filters are set to show visits by day for these traffic sources: AppExchange Explore and AppExchange Search.

```

```

## Customer Engagement File

Provides data from the Customer Engagement visualization with your global and local filter selections applied.

## Example

This example shows the header row and four rows of sample data. These filters were applied.

-   The global filter is set to show data for the last 30 days.
-   The local filters are set to show resource views by day.

```

```

## Activity Sources File

Provides data from the Activity Sources visualization with your global and local filter selections applied.

## Example

This example shows the header row and four rows of sample data. These filters were applied.

-   The global filter is set to show data for the last 30 days.
-   The local filter is set to show visits.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

For brevity, this sample shows only four traffic sources: AppExchange Browse, AppExchange Categories, AppExchange Search, and AppExchange Recommended. The file that you export from your dashboard provides all traffic sources.

## Top AppExchange Searches File

Provides data from the Top AppExchange Searches visualization with your global and local filter selections applied.

## Example

This example shows the header row and four rows of sample data. These filters were applied.

-   The global filter is set to show data for the last 30 days.
-   The local filter is set to show the top search terms associated with visits and demos.

```

```

## Lead Events Timeline File

Provides data from the Lead Events Timeline visualization with your global and local filter selections applied.

## Example

This example shows the header row and four rows of sample data. These filters were applied.

-   The global filter is set to show data for the last 30 days.
-   The local filter is set to show Get It Now clicks and demos.

```

```

## Lead Events File

Provides data from the Lead Events visualization with your global and local filter selections applied.

## Example

This example shows the header row and two rows of sample data. These filters were applied.

-   The global filter is set to show data for the last 30 days.
-   The local filter is set to show Get It Now clicks and demos.

```

```

## Chat Engagement File

Provides data from the Chat Engagement visualization with your global and local filter selections applied.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

AppExchange Chat is required to view chat data in Marketplace Analytics. Learn about AppExchange Chat in the [Salesforce Partner Community](https://partners.salesforce.com/s/education/general/AppExchange_Chat).

## Example

This example shows the header row and four rows of sample data. These filters were applied.

-   The global filter is set to show data for the last 30 days.
-   The local filter is set to show conversations.

```

```

## Code Examples

```
Date,Source,Activity,Count of Activity
2019-01-01,AppExchange Explore,Visits,25
2019-01-01,AppExchange Search,Visits,50
2019-01-02,AppExchange Explore,Visits,30
2019-01-02,AppExchange Search,Visits,60
```

```
Date,Activity,Count of Activity
2019-01-01,Customization Guide,10
2019-01-01,Datasheet,20
2019-01-02,Customization Guide,20
2019-01-02,Datasheet,40
```

```
Source,Activity,Count of Activity,Percentage of Total Activity,Rank
AppExchange Browse,Visits,500,20.41,1
AppExchange Categories,Visits,450,18.37,2
AppExchange Search,Visits,400,16.33,3
AppExchange Recommended,350,14.29,4
```

```
Search Term,Activity,Count of Activity
Geolocation,Visits,50
Geolocation,Demos,40
Maps,Visits,30
Maps,Demos,20
```

```
Date,Lead Type,Count of Leads
2021-05-03,Get It Now,31
2021-05-03,Watch Demo,3
2021-05-04,Get It Now,40
2021-05-04,Watch Demo,8
```
