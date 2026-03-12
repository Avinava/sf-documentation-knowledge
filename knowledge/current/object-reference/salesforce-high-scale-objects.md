---
title: "Salesforce High-Scale Objects"
domain: object-reference
topic: salesforce-high-scale-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:03.307Z
estimatedTokens: 595
keywords: [Salesforce, High-Scale, Objects, large, number, transactions, store, data, over, long, period, sometimes, different, limitations, APIs]
---

# Salesforce High-Scale Objects

> Use high-scale objects when you have a large number of transactions, large objects,
        or you must store data over a long period. These objects sometimes have different
        limitations, APIs, or querying behavior than Salesforce common objects do.

# Salesforce High-Scale Objects

Use high-scale objects when you have a large number of transactions, large objects, or you must store data over a long period. These objects sometimes have different limitations, APIs, or querying behavior than Salesforce common objects do.

## Big Objects

Usage: Auditing, tracking, feeds, and historical archives.

Transaction Type: OLTP transactions

Database Storage: Horizontally scalable distributed databases that are non-transactional and scale to hundreds of millions or even billions of records. Big objects can contain data that’s larger than the data that Data Cloud or standard objects support.

Object Type: BO

Object Suffix: \_\_b

Customizable: Yes

Cloud: Any cloud that provides an org. However, Big Objects requires an additional license.

Packaging: Use the deploy() and retrieve() calls to deploy and retrieve a .zip file. Standard AppExchange packaging isn’t available.

Object Examples: [FieldHistoryArchive](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_fieldhistoryarchive.htm)

Documentation: [Big Objects Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object.htm)

Reference: [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm)

## High-Scale Order Objects

Optimized for: OLTP transactions

Objects: PendingOrderSummary

Documentation: [Order Management Implementation Guide](https://help.salesforce.com/s/articleView?id=commerce.om_impl_intro.htm&type=5&language=en_US)

Reference: [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_pendingordersummary.htm)

## Data Cloud Objects

Optimized for: OLAP transactions

Object types: DLO, DMO, CIO, DG

Documentation: [Data Object Concepts and Schema in Data Cloud](https://help.salesforce.com/s/articleView?id=data.c360_a_schema_setup_concepts.htm&type=5&language=en_US)

-   **[Salesforce Data Cloud Objects](atlas.en-us.object_reference.meta/object_reference/sforce_api_concepts_data_cloud_objects.htm)**
    Data Cloud objects are high-scale objects that are used to store large amounts of data over time.

## Related Topics

- Salesforce Data Cloud Objects (atlas.en-us.object_reference.meta/object_reference/sforce_api_concepts_data_cloud_objects.htm)
