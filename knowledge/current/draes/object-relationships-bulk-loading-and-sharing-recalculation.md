---
title: "Object Relationships, Bulk Loading, and Sharing Recalculation"
domain: draes
topic: object-relationships-bulk-loading-and-sharing-recalculation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.635Z
estimatedTokens: 589
keywords: [Relationships, Bulk, Loading, Sharing, Recalculation, Choices, designing, data, models, major, impact, performance, loaded, updated, transferred]
---

# Object Relationships, Bulk Loading, and Sharing Recalculation

> Choices that you make when designing your data models can have a major impact on
        sharing performance when data is loaded, updated, or transferred between users.
        Understanding how Salesforce handles the relationships between objects and protects data
        integrity during updates can help you optimize the performance of data
        operations.

# Object Relationships, Bulk Loading, and Sharing Recalculation

Choices that you make when designing your data models can have a major impact on sharing performance when data is loaded, updated, or transferred between users. Understanding how Salesforce handles the relationships between objects and protects data integrity during updates can help you optimize the performance of data operations.

-   **[Implicit Sharing](atlas.en-us.draes.meta/draes/draes_object_relationships_implicit_sharing.htm)**
    The sharing capabilities of the Salesforce Platform include a wide variety of features that you can use to explicitly grant access to data for individuals and groups. In addition to these more familiar features, there are a number of sharing behaviors that are built into Salesforce. This kind of sharing is called implicit because it’s defined and maintained by the system to support collaboration among members of sales teams, customer service representatives, and clients or customers.
-   **[Parent-Child Data Skew](atlas.en-us.draes.meta/draes/draes_object_relationships_parent_child_data_skew.htm)**
    Implicit sharing behaviors simplify the task of managing security for users. They handle the most common data access use cases without requiring additional roles, groups, and sharing rules to be configured. However, like data ownership skew, some parent-child configurations can slow the performance of large data loads and updates, and sometimes even of single-record operations.
-   **[Record-Level Locking](atlas.en-us.draes.meta/draes/draes_object_relationships_record_level_locking.htm)**
    Many customers regularly upload large amounts of data to the service, and maintain integrations with other systems that update their data in scheduled batches or continuously in real time. Like other transactional systems, Salesforce employs record-level database locking to preserve the integrity of data during these updates.
-   **[Takeaway: Tuning Data Relationships and Updates for Performance](atlas.en-us.draes.meta/draes/draes_object_relationships_takeaway.htm)**
    Understand the performance characteristics of the various maintenance operations that you’re performing and always test substantial data uploads and changes to object relationships in a full copy sandbox that's been recently refreshed so you know what to expect.

## Related Topics

- Implicit Sharing (atlas.en-us.draes.meta/draes/draes_object_relationships_implicit_sharing.htm)
- Parent-Child Data Skew (atlas.en-us.draes.meta/draes/draes_object_relationships_parent_child_data_skew.htm)
- Record-Level Locking (atlas.en-us.draes.meta/draes/draes_object_relationships_record_level_locking.htm)
- Takeaway: Tuning Data Relationships and Updates for Performance (atlas.en-us.draes.meta/draes/draes_object_relationships_takeaway.htm)
