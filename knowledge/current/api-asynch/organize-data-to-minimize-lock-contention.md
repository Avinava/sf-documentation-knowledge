---
title: "Organize Data to Minimize Lock Contention"
domain: api-asynch
topic: organize-data-to-minimize-lock-contention
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.443Z
estimatedTokens: 850
keywords: [Organize, Data, Minimize, Lock, Contention, potential, consider, pre-organizing, planning, Bulk, API, 2.0, loads]
---

# Organize Data to Minimize Lock Contention

> To minimize the potential for lock contention, consider pre-organizing your data when
    planning your Bulk API 2.0 data loads.

# Organize Data to Minimize Lock Contention

To minimize the potential for lock contention, consider pre-organizing your data when planning your Bulk API 2.0 data loads.

The Salesforce Platform uses locks to ensure referential integrity of its data — similar to any application built on a relational database. Most transactional database operations only hold these locks for a short time, and the volume isn’t significant enough to cause contention. However, when dealing with large data volume objects or processing large jobs, record locks and contention can become an issue.

Although Bulk API 2.0 conceals the notion of a “batch”, Bulk API 2.0 jobs are still technically composed of batches. Batches are managed tacitly by Bulk API 2.0’s automated batch management functionality.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_asynch)

#### Tip

Always test your data loads in a sandbox organization first. Processing times can be different in a production organization.

**Be Aware of Operations that Increase Lock Contention with Bulk API 2.0**

These operations are likely to cause lock contention:

-   Creating users
-   Updating ownership for records with private sharing
-   Updating user roles
-   Updating territory hierarchies

**Organize Bulk API 2.0 Data to Minimize Lock Contention**

For large data loads, sort main records based on their parent record to avoid having different child records (with the same parent) in different jobs.

-   **Example**: When an AccountTeamMember record is created or updated, the corresponding Account for this record is locked during the transaction. If you upload different jobs that include AccountTeamMember records, and they all contain references to the same account, *they all try to lock the same account*, and it's likely that you experience a lock timeout. When working with AccountTeamMember records, organize your CSV data files by AccountId.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

Because your data model is unique to your organization, Salesforce can't predict exactly when you experience lock contention problems.

**Bulk API 2.0 Automatic Record Lock Handling (PILOT)**

Based on a popular [suggestion in the Salesforce Idea Exchange](https://ideas.salesforce.com/s/idea/a0B8W00000GdYOBUA3/bulk-api-v2-support-for-serial-concurrencymode), we're now offering a pilot feature that automatically checks for Bulk API 2.0 locking errors and handles them to increase the likelihood of successful job completion.

If you’re interested in a pilot to help you automatically minimize lock contention, *contact your account team and ask to be nominated* for the "Bulk API 2.0 Automatic Record Lock Handling Pilot".

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

This feature is not generally available and is being piloted with certain Customers subject to additional terms and conditions. It is not part of your purchased Services. This feature is subject to change, may be discontinued with no notice at any time in SFDC’s sole discretion, and SFDC may never make this feature generally available. Make your purchase decisions only on the basis of generally available products and features. This feature is made available on an AS IS basis and use of this feature is at your sole risk.
