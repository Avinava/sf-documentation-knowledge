---
title: "Salesforce Data Cloud Objects"
domain: object-reference
topic: salesforce-data-cloud-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:03.302Z
estimatedTokens: 2281
keywords: [Salesforce, Data, Cloud, Objects, high-scale, store, large, amounts, over, time, DMO, Creation, UDMO, Zero, Copy]
---

# Salesforce Data Cloud Objects

> Data Cloud objects are high-scale objects that are used to store large amounts of
        data over time.

# Salesforce Data Cloud Objects

Data Cloud objects are high-scale objects that are used to store large amounts of data over time.

Optimized for: OLAP transactions

Object Type(s): DLO, DMO, CIO, DG

Documentation: [Data Object Concepts and Schema in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_schema_setup_concepts.htm&type=5&language=en_US) in Salesforce Help

## DMO Object Creation

![Data Cloud Object Creation](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2FDataCloudObjects_DMO_ObjectCreation.png&folder=object_reference)

Data Cloud objects are created from ingested data and from various operations on that data. Here's how it works.

1.  Data ingested into Data Cloud is stored in data lake objects (DLOs) in the native schema of the system it was created in. Formula fields are also supported for DLOs.

2.  Data lake objects are mapped to the schema for data model objects (DMOs), which is the C360 Data Model. data model objects don’t store data, only the references to data stored in data lake objects.

3.  Data lake objects and data model objects can be transformed into new DLOs and DMOs by using the Data Cloud [data prep and transform feature](https://help.salesforce.com/s/articleView?id=data.c360_a_cleansing_data.htm&type=5&language=en_US).

4.  Data model objects undergo identity resolution to match and resolve data across different records in the same type of DMO and combine the best data from different DMOs in a unified DMO. The unified DMO is often used to create other types of objects, such as data graphs and calculated insights, so it’s usually created before other object types. However, it’s an optional step.

5.  Data in DMOs can be aggregated or calculated to create calculated insight objects (CIOS).

6.  A subset of DMO data can also be used as a data graph for faster processing in near real-time transactions with high-scale data.

7.  You configure search index objects for DMOs by using the Data Cloud app. These objects aren’t DMOs, but they're used to generate DMOs.

8.  Search index objects automatically generate chunk-content DMOs and vector-embedding DMOs.


## UDMO Object Creation

![UDMO object creation](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2FDataCloudObjects_UDMO_ObjectCreation.png&folder=object_reference)

1.  Unstructured data ingested into Data Cloud is stored in unstructured data lake objects (UDLOs).

2.  Unstructured data lake objects are automatically mapped to the C360 Data Model schema for unstructured data model objects (UDMOs).

3.  Configure a search index object on UDMOs and DMOs, so it can be used for Retrieval Augmented Generation (RAG) with Gen AI applications.

4.  You can generate chunk content DMOs and vector embedding DMOs from (search) index DMOs.


## Zero Copy Object Creation

![Zero copy data federation object creation](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2FDataCloudObjects_ZeroCopyObjectCreation.png&folder=object_reference)

Some external data sources are deeply integrated with Data Cloud, so that you can create a connection that doesn’t require data syncing or ingestion. When you share an external data source with Data Cloud, external objects are defined. You configure additional metadata about these objects so you can use the objects with Salesforce features and APIs. For example, you can configure label names that are used in apps and reports.

## Calculated Insight Objects (CIO)

Usage: These objects contain data aggregated or calculated from DMO objects.

Customizable: Yes. There are no standard CIOs.

Cloud: Data Cloud.

Packaging: Data kits

Documentation: [Calculated Insights](https://help.salesforce.com/s/articleView?id=data.c360_a_calculated_insights.htm&type=5&language=en_US) in Salesforce Help

Reference: N/A

## Data Lake Objects (DLO)

Usage: Data lake objects are used to store data ingested into Data Cloud.

Object suffix: \_\_dlo.

Customizable: Yes

Cloud: Data Cloud

Packaging: DLOs can be packaged via data kits. Data streams to ingest DLOs can also be packaged.

Documentation: [Data Object Concepts and Schema in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_schema_setup_concepts.htm&type=5&language=en_US)in Salesforce Help

Reference: DLO objects can be ingested from any external source and retain the schema from the data stream. Consult the reference documentation for the system you’re ingesting the DLO from.

In addition to standard data lake objects, there are also unstructured and external data lake objects.

## Data Model Objects (DMO)

Usage: data model objects use the C360 Data Model to provide a common representation of data. Data stored in data lake objects is mapped to data model objects. data model objects don’t store data, but they contain information on where data is stored in DLO objects. Data Cloud APIs and features use DMO objects to access data that's stored in data lake objects.

Object suffix: \_\_dlm.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

All API Names for DMO object fields have a \_\_c suffix for both standard and custom fields.

Customizable: Yes

Cloud: Data Cloud.

Packaging: Data kits (recommended). Unmanaged packages and managed packages support data kit packaging only from the default data space. However, you can deploy data kits in any data space. It’s also possible to import DMOs in unmanaged packages or through comma separated value (CSV) files.

Documentation: [Data Object Concepts and Schema in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_schema_setup_concepts.htm&type=5&language=en_US) in Salesforce Help

Reference: data model objects don’t have a single reference. Most Salesforce DMOs mirror existing Salesforce base platform objects and original platform objects . A few of these use slightly different data types. Some Salesforce DMOs are referenced in the [Standard Data Model Objects (DMOs)](https://developer.salesforce.com/docs/atlas.en-us.c360a_api.meta/c360a_api/c360dm_DataModelObjects.htm) section of the Data Cloud Reference Guide. However, additional DMO objects are available for specific features or clouds. DMOs are also documented as a part of data kit or bundle mappings.

In addition to data model objects, there are also unified data model objects and unstructured data model objects (UDMO)

## Data Graphs (DG)

Usage: You can create a precalculated, materialized view of your data to improve query speed with high-scale data. A data graph contains a JSON blob that combines data structures from multiple DMOs and is used for real-time operations in apps.

Customizable: Yes. All data graphs are customizable. There are no standard data graphs.

Cloud: Data Cloud.

Packaging: Data kits. Data graphs can be added to data kits, but they aren’t packageable directly.

Documentation: [Data Graphs](https://help.salesforce.com/s/articleView?id=data.c360_a_data_graphs.htm&type=5&language=en_US) in Salesforce Help

Reference: N/A

## Unified Objects

Usage: You can create a precalculated, materialized view of your data to improve query speed with high-scale data. A data graph contains a JSON blob that combines data structures from multiple DMOs and is used for real-time operations in apps.

Customizable: Yes. All data graphs are customized. There are no standard data graphs.

Cloud: Data Cloud.

Packaging: Data kits. Data graphs can be added to data kits, but they aren’t packageable directly.

Documentation: [Data Graphs](https://help.salesforce.com/s/articleView?id=data.c360_a_data_graphs.htm&type=5&language=en_US) in Salesforce Help

Reference: N/A

## Unstructured Data Lake Objects (UDLO)

Usage: Unstructured data lake objects (UDLOs) reference unstructured data in Data Cloud. A UDLO is created manually. Unstructured data is ingested from a blob store.

Object suffix: \_\_dlo.

Customizable: Yes

Cloud: Data Cloud

Packaging: Not packageable. UDLOs aren’t packaged. However, connections to ingest UDLOs can be packaged.

Documentation: [Unstructured Data Lake Objects](https://help.salesforce.com/s/articleView?id=sf.c360_a_unstructured_data_udlo_overview.htm&type=5&language=en_US) in Salesforce Help

Reference: In addition to standard data lake objects, there are also unstructured data lake objects (UDLO) and external data lake objects.

## Unstructured Data Model Objects (UDMO)

Usage: Unstructured data model objects represent data created from unstructured data sources.

Object suffix: \_\_dlm.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

All API names for DMO object fields have a \_\_c suffix for both standard and custom fields.

Customizable: Yes

Cloud: Data Cloud.

Packaging: Data kits (recommended). It’s also possible to import DMOs in unmanaged packages or through CSV files.

Documentation: [Data Object Concepts and Schema in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_schema_setup_concepts.htm&type=5&language=en_US) in Salesforce Help

Reference: N/A
