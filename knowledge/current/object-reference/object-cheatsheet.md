---
title: "Object Cheatsheet"
domain: object-reference
topic: object-cheatsheet
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:03.325Z
estimatedTokens: 846
keywords: [Cheatsheet, glance, how, objects, compare, Groups]
---

# Object Cheatsheet

> At a glance, see how objects compare to each other.

# Object Cheatsheet

At a glance, see how objects compare to each other.

## Object Groups

-   Common Objects: Used to store data available in any standard org for any cloud. Optimized for ACID transactions. Relational and transactional database that scales to millions of records.
-   High-scale objects: Used for large numbers of transactions and data storage over time
-   External Objects: Used to represent data stored outside Salesforce

## Object Types

| Object Type | Group | Description | Customizable | Cloud | Packaging | Documentation | Reference |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Base Platform Objects | common objects | Used for data common to most orgs | Yes | Common | Every form of packaging except data kits | DX and Developer Tools | Object Reference for the Platform |
| Big Objects | high-scale objects | Used for large transactions and data storage over time | Yes | Any cloud that provides an org | Deploy/retrieve with .zip files; no standard AppExchange packaging | Big Objects Implementation Guide | Object Reference for the Platform |
| Calculated Insight Objects (CIO) | high-scale objects | Contains data aggregated or calculated from DMOs | Yes | Data Cloud | Data kits | Calculated Insights in Help | N/A |
| Custom Objects | common objects | User-defined objects | N/A | Common | Depends on the object | Create a Custom Object in Help | N/A |
| Data Graphs (DG) | high-scale objects | Create a materialized view of data to improve query speed | Yes | Data Cloud | Data kits | Create a Data Graph in Help | N/A |
| Data Lake Objects (DLO) | high-scale objects | Store data ingested into Data Cloud | Yes | Data Cloud | DLOs and data streams can be packaged via data kits | Data Objects in Data Cloud in Help | Consult the reference documentation for the system storing the data |
| Data Model Objects (DMO) | high-scale objects | Provide a common representation of data by using C360 data model | Yes | Data Cloud | Data kits (recommended) | Data Objects in Data Cloud in Help | Data Cloud Reference Guide |
| External Objects | External Objects | Represent data stored outside Salesforce | N/A | N/A | N/A | N/A | N/A |
| High Scale Order Objects | high-scale objects | Optimized for OLTP transactions | N/A | N/A | N/A | Order Management Implementation Guides in Help | Object Reference for the Platform |
| Setup Platform Objects | common objects | Common objects containing setup configuration information created using Setup | Yes | Common | Depends on the cloud, product, and feature | DX and Developer Tools | Object Reference for the Platform |
| Unified Objects | high-scale objects | Created as a golden record of data through identity resolution | Yes | Data Cloud | Packageable through data kits | Unify Source Profiles in Help | N/A |
| Unstructured Data Lake Objects (UDLO) | high-scale objects | References unstructured data in Data Cloud and is created manually | Yes | Data Cloud | No, but connections can be packaged | Unstructured Data Lake Objects in Help | N/A |
| Unstructured Data Model Objects (UDMO) | high-scale objects | Represents data from unstructured data sources | Yes | Data Cloud | Data kits (recommended) | Data Objects in Data Cloud in Help | N/A |
| Zero Copy Objects | External objects | Deep integration with external data sources, so no data syncing required | N/A | N/A | N/A | N/A | N/A |
