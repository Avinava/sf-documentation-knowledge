---
title: "Big Objects"
domain: bigobjects
topic: big-objects
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:07.822Z
estimatedTokens: 1023
keywords: [Big, Objects, stores, manages, massive, amounts, data, Salesforce, platform, archive, bring, datasets, outside, systems, full]
---

# Big Objects

> A big object stores and manages massive amounts of data on the Salesforce
  platform. You can archive data from other objects or bring massive datasets from outside systems
  into a big object to get a full view of your customers. Clients and external systems use a
  standard set of APIs to access big object data. A big object provides consistent performance,
  whether you have 1 million records, 100 million, or even 1 billion. This scale gives a big object
  its power and defines its features.

# Big Objects

A big object stores and manages massive amounts of data on the Salesforce platform. You can archive data from other objects or bring massive datasets from outside systems into a big object to get a full view of your customers. Clients and external systems use a standard set of APIs to access big object data. A big object provides consistent performance, whether you have 1 million records, 100 million, or even 1 billion. This scale gives a big object its power and defines its features.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions for up to 1 million records |


There are two types of big objects.

-   Standard big objects—Objects defined by Salesforce and included in Salesforce products. FieldHistoryArchive is a standard big object that stores data as part of the Field Audit Trail product. Standard big objects are always available and can’t be customized.
-   Custom big objects—New objects that you create to store information unique to your org. Custom big objects extend the functionality that Lightning Platform provides. For example, if you’re building an app to track product inventory, create a custom big object called HistoricalInventoryLevels to track historical inventory levels for analysis and future optimizations. This implementation guide is for configuring and deploying custom big objects.

## Custom Big Object Use Cases

-   360° view of the customer—Extend your Salesforce data model to include detailed information from loyalty programs, feeds, clicks, billing and provisioning information, and more.
-   Auditing and tracking—Track and maintain a long-term view of Salesforce or product usage for analysis or compliance purposes.
-   Historical archive—Maintain access to historical data for analysis or compliance purposes while optimizing the performance of your core CRM or Lightning Platform applications.

## Differences Between Big Objects and Other Objects

Because a big object can store data on an unlimited scale, it has different characteristics than other objects, like sObjects. Big objects are also stored in a different part of the Lightning Platform.

| Big Objects | sObjects |
| --- | --- |
| Horizontally scalable distributed database | Relational database |
| Non-transactional database | Transactional database |
| Hundreds of millions or even billions of records | Millions of records |

These big object behaviors ensure a consistent and scalable experience.

-   Big objects support only object and field permissions, not regular or standard sharing rules.
-   Features like triggers, flows, processes, and the Salesforce mobile app aren’t supported on big objects.
-   When you insert an identical big object record with the same representation multiple times, only a single record is created so that writes can be idempotent. This behavior is different from an sObject, which creates a record for each request to create an object.

## API Support for Big Objects

It’s easy to integrate custom big objects with your live Salesforce data. You can process big objects with SOQL, Bulk, Chatter and SOAP APIs.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bigobjects)

#### Note

These APIs are the only APIs supported for big objects. The REST API, for example, isn’t supported.

#### See Also

-   [*Release Notes:* Field History Tracking Data Deleted After 18 Months](https://releasenotes.docs.salesforce.com/en-us/winter18/release-notes/rn_pds_field_history_tracking_deletion.htm "Release Notes: Field History Tracking Data Deleted After 18
    Months - HTML (New Window)")

-   [CustomObject](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/customobject.htm "CustomObject - HTML (New Window)")

-   [*Salesforce Help:* Big Object Support in Analytics](https://help.salesforce.com/articleView?id=bi_integrate_salesforce_extract_transformation_big_objects.htm&language=en_US "Salesforce Help: Big Object Support in Analytics - HTML (New Window)")
