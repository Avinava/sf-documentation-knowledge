---
title: "Extract Data"
domain: data-cloud
topic: extract-data
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:17:42.314Z
keywords: [Extract, Data]
---

# Extract Data

# Extract Data

Programmatically extract your data from Data Cloud.

Watch the video to see how to call Data Cloud APIs with Postman.

<!-- -->

-   **[Retrieve Metadata](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_metadata_api.htm)**  
    Data Cloud Metadata API response includes metadata about all entities, including Calculated Insights, Engagement, Profile, and other entities, and their relationships to other objects. For Data Lake Objects (DLOs) and Data Model Objects (DMOs), the API response also includes information about key qualifier fields. For each DLO field and DMO field, the API response includes the name of the associated key qualifier field.
-   **[Query Data Graph Data](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_data_graphs_overview.htm)**  
    To query metadata and data from data graphs, use the Data Graphs APIs.
-   **[Query Customer Profile Information with Profile API](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_profile_call_overview.htm)**  
    Data Cloud Profile API calls are used to look up and search customer profile information. These API calls can be included in your external web or mobile apps to look up customer profile information.
-   **[Query Data using Query API V2](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_query_v2_call_overview.htm)**  
    Query API V2 supports SQL query in ANSI standard. The results return as an array of records. The expected input when calling this API is free form SQL. The input objects include data stream, profile and engagement data model objects, and unified data model objects. You can use Query API V2 to support a variety of use cases, which includes large volume data reads, external application integration, or interactive on demand querying on the data lake.
-   **[Query Data using Query API V1](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_query_call_overview.htm)**  
    The Query API V1 supports SQL query in ANSI standard. The SQL can be a free form SQL with objects that include data streams, profile or engagement data model objects, and unified data model objects. The Query API V1 supports only synchronous calls. You can use the API to support a variety of use cases that include data extraction, external application integration or interactive querying on the data lake. If you don't want to fetch the entire data like in case of browser-based clients then you can make a call to the API with limit and offset.
-   **[Query Services Status Codes](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_queryservices_statuscodes.htm)**  
    Status codes for Query API V1 and Query API V2.
-   **[Query Unified Record ID](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_universal_id_lookup.htm)**  
    Use the Universal ID Lookup API to retrieve all individual records associated with a unified record. You can query on an Individual ID from one source and get all the Individual IDs for that individual from other data sources.
-   **[Query Calculated Insights](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_ci_call_overview.htm)**  
    The Calculated Insights API calls only support data collection from the Data Cloud Calculated Insights object. You can use this API to query Calculated Insights with selected SQL dimensions and measures with optional filters.
-   **[CDP Python Connector](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_python_connector.htm)**  
    Unlock and extend the value of Data Cloud data with the CDP Python Connector. The connector uses the Query API and extracts data from Data Cloud into Python so that you can fetch data in Pandas DataFrames. With the data in your environment, you can create visual data models, perform powerful analytical operations, or build powerful machine learning and AI models as well.
-   **[API Limits for Profile, Query, and Calculated Insights](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_limits.htm)**  
    There are three distinct classes of APIs used to extract data from Data Cloud (formerly Customer Data Platform): Profile, Query, and Calculated Insights.
-   **[Webhook Data Action Targets in Data Cloud](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_webhook_data_action_targets_in_customer_data_platform.htm)**  
    Send a Data Cloud data action event to a webhook target and protect the message integrity with a Salesforce-generated secret key. A webhook is a type of HTTP request that’s triggered by an event in a source system and sent to a destination system with a payload. A webhook is event-driven rather than request-driven. Webhooks are sent automatically when an event is triggered in the source system. The secret key based signature validates the payload requests sent from Salesforce.