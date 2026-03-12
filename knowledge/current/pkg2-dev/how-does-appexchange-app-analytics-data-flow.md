---
title: "How Does AppExchange App Analytics Data Flow?"
domain: pkg2-dev
topic: how-does-appexchange-app-analytics-data-flow
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.915Z
estimatedTokens: 778
keywords: [How, AppExchange, App, Analytics, Data, Flow, customers, managed, packages, they, produce, Their, usage, collected, daily]
---

# How Does AppExchange App Analytics Data Flow?

> As your customers use your managed packages, they produce data. Their usage data is
    collected daily in our data lake from each Salesforce instance. Usage data arrives to our data
    lake throughout the day. From time to time, there can be data arrival delays. Also, data builds
    and timestamps vary by data type. For these reasons, to optimize your data retrieval, plan out
    your AppExchange App Analytics query strategy.

# How Does AppExchange App Analytics Data Flow?

As your customers use your managed packages, they produce data. Their usage data is collected daily in our data lake from each Salesforce instance. Usage data arrives to our data lake throughout the day. From time to time, there can be data arrival delays. Also, data builds and timestamps vary by data type. For these reasons, to optimize your data retrieval, plan out your AppExchange App Analytics query strategy.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


Because Salesforce instances and your subscribers are located around the world, the time of data collection varies by region. EU (EMEA) data arrives first, then North America (NA) data. Data from Asia Pacific (AP) instances arrives last.

Our AppExchange App Analytics jobs run on local instance times on a non-peak schedule. Depending on when you query for your data and where your customers are located, sometimes you retrieve 100% of your data at one time. Other times you must issue more queries to retrieve it all.

![Your managed package and customer data flows into the Salesforce Data Lake and into an App Analytics query request.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fapp_analytics_data_flow.png&folder=pkg2_dev)

Data delivery to and arrival in our data lake also depends on factors that can affect a given instance, such as the health of the instance or technical dependencies. Ordinarily you can expect all your org data to arrive in the data lake by 23:00 Coordinated Universal Time (UTC) the day after it was recorded. However, occasionally, there can be delays.

Each AppExchange App Analytics data type is also compiled at different times.

| Data Type | Build Information | Example |
| --- | --- | --- |
| Subscriber Snapshots | Snapshots use data collected at approximately 01:00 instance local time.Snapshots are generated nightly at approximately 03:00 instance local time.All timestamps are normalized to 00:00 UTC of that day. | For the March 1, 2021 snapshot:All records have this timestamp: 2021-03-01T00:00:00Z.All data normally arrives by March 2, 2021 23:00 UTC. |
| Package Usage Summaries | Summaries use data collected for an entire month.Summaries are built monthly.All timestamps are normalized to 00:00 UTC on the last day of the month. | For the March 2021 summary available on April 1, 2021:All records have this timestamp: 2021-03-31T00:00:00Z.All data normally arrives by April 1, 2021 23:00 UTC.In this example, we recommend that you query for your summary data on April 3, 2021 or later. We recommend a 2-day query delay to ensure that all of your subscriber data from all worldwide instances finished processing. |
| Package Usage Logs | Usage logs use data from the previous day.Usage logs are generated nightly at approximately 05:00 instance local time. | For the March 1, 2021 log file:All records have precise timestamps associated with when that log event occurred.All data normally arrives by March 2, 2021 23:00 UTC. |
