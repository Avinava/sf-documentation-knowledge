---
title: "Ingest Data into Data Cloud"
domain: data-cloud
topic: ingest-data-into-data-cloud
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:12.508Z
estimatedTokens: 838
keywords: [Ingest, Data, Cloud, Ingestion, API, provides, RESTful, supports, both, streaming, bulk, interaction, patterns, loading, data, Cloud., single, connector, performing, uploads.]
---

# Ingest Data into Data Cloud

> The Ingestion API provides a RESTful interface that supports both streaming and bulk
    interaction patterns for loading data into Data Cloud. You can use a single
    Ingestion API connector for performing both bulk and streaming uploads.

# Ingest Data into Data Cloud

The Ingestion API provides a RESTful interface that supports both streaming and bulk interaction patterns for loading data into Data Cloud. You can use a single Ingestion API connector for performing both bulk and streaming uploads.

## When do you use Bulk and Streaming Ingestion?

Consider the data source and the problem you’re trying to solve when choosing the ingestion mode.

Use bulk ingestion when moving large amounts of data on a daily, weekly, or monthly schedule. A few example scenarios are:

-   Moving large amounts of data on a daily, weekly, or monthly schedule.
-   Legacy systems where you can only export data in off-peak hours.
-   A new Data Cloud org that you want to backfill with 30, 60, 90, or X days of data.

Use streaming ingestion for small micro-batches of records being updated in near-real time, such as:

-   Source system built on modern streaming architectures.
-   Change data capture events.
-   Consuming data from webhooks.

Here's an example use case to understand it better.

## Example

Imagine you’re an integrator working for Northern Trail Outfitters (NTO). You need to extract the runner profiles and activity logs from NTO’s Track My Run mobile app and load them into Data Cloud. The marketer you’re working with has indicated that he needs the last 90 days of historical data and wants all new and updated data on a go-forward basis.

You query the last 90 days from your data warehouse as requested and you chunk up the data into 150 MB CSV files. You then load the data into Data Cloud via the bulk ingestion, understanding that the bulk ingestion is an appropriate solution for one-time operations. Now that the initial dataset is loaded, you decide it’s best to synchronize future changes with an upsert operation via streaming ingestion. These updates can be forwarded to Data Cloud in micro-batches as soon as the data becomes available.

-   **[Get Started with Ingestion API](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_started.htm)**
    Before using Ingestion API in Data Cloud, complete the prerequisites, set up authentication, and know the limits that apply to bulk ingestion and streaming ingestion.
-   **[Streaming Ingestion](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_streaming_ingestion.htm)**
    The Data Cloud Ingestion API uses a fire-and-forget pattern to synchronize micro-batches of updates between the source system and Data Cloud in near-real time. Data is processed asynchronously approximately every 3 minutes.
-   **[Bulk Ingestion](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_bulk_ingestion.htm)**
    With the Data Cloud Ingestion API, you can upsert or delete large data sets. Prepare a CSV file for the data you want to upload, create a job, upload job data, and let Salesforce take care of the rest.

#### See Also

-   [Connect Data](https://help.salesforce.com/apex/HTViewHelpDoc?id=c360_a_data_ingestion.htm&language=en_US "To get started with Data Cloud, you connect a data source, through either data federation or data ingestion. Data federation sets up direct connectivity with data sources. It uses a zero-ETL integration that eliminates the need to copy data into Data Cloud. During data ingestion, data is brought into Data Cloud in its original form and stored in a data lake object (DLO).")

## Related Topics

- Get Started with Ingestion API (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_started.htm)
- Streaming Ingestion (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_streaming_ingestion.htm)
- Bulk Ingestion (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_bulk_ingestion.htm)
