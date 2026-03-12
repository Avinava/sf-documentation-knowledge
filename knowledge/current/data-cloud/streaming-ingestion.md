---
title: "Streaming Ingestion"
domain: data-cloud
topic: streaming-ingestion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.461Z
estimatedTokens: 450
keywords: [Streaming, Ingestion, Data, Cloud, API, uses, fire-and-forget, pattern, synchronize, micro-batches, updates, source, system, near-real, time]
---

# Streaming Ingestion

> The Data Cloud Ingestion API uses a fire-and-forget pattern to
    synchronize micro-batches of updates between the source system and Data Cloud in
    near-real time. Data is processed asynchronously approximately every 3 minutes.

# Streaming Ingestion

The Data Cloud Ingestion API uses a fire-and-forget pattern to synchronize micro-batches of updates between the source system and Data Cloud in near-real time. Data is processed asynchronously approximately every 3 minutes.

-   **[Insert Records](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_insert_records.htm)**
    Load new objects and update existing objects into your Data Cloud data lake table.
-   **[Delete Records](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_delete_records.htm)**
    Delete records from the data lake table.
-   **[Synchronous Record Validation](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_synchronous_record_validation.htm)**
    Quickly validate your payloads synchronously in development mode before you commit records to the lake.

#### See Also

-   [Query Data using Query API V1](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_query_call_overview.htm "The Query API V1 supports SQL query in ANSI standard. The SQL can be a free form SQL with objects that include data streams, profile or engagement data model objects, and unified data model objects. The Query API V1 supports only synchronous calls. You can use the API to support a variety of use cases that include data extraction, external application integration or interactive querying on the data lake. If you don't want to fetch the entire data like in case of browser-based clients then you can make a call to the API with limit and offset.")

-   [*Data Cloud Reference Guide*: Get Started with Ingestion API](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_started.htm "Before using Ingestion API in Data Cloud, complete the prerequisites, set up authentication, and know the limits that apply to bulk ingestion and streaming ingestion.")

## Related Topics

- Insert Records (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_insert_records.htm)
- Delete Records (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_delete_records.htm)
- Synchronous Record Validation (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_synchronous_record_validation.htm)
- Query Data using Query API V1 (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_query_call_overview.htm)
- Data Cloud Reference Guide: Get Started with Ingestion API (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_started.htm)
