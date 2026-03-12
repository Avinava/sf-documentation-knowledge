---
title: "Ownership Data Skew"
domain: draes
topic: ownership-data-skew
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.620Z
estimatedTokens: 570
keywords: [Ownership, Data, Skew, work, Salesforce, maintain, correct, access, customers, never, encounter, performance, issues, unless, they’re]
---

# Ownership Data Skew

> Even with all of the work that Salesforce does to maintain correct access, most
        customers never encounter performance issues unless they’re performing updates that affect
        many users or large amounts of data. However, there are certain common configurations that
        greatly increase the probability of performance problems, such as ownership data
        skew.

# Ownership Data Skew

Even with all of the work that Salesforce does to maintain correct access, most customers never encounter performance issues unless they’re performing updates that affect many users or large amounts of data. However, there are certain common configurations that greatly increase the probability of performance problems, such as ownership data skew.

Ownership data skew is when a single user owns more than 10,000 records of an object. This situation commonly occurs when concentrating ownership of data so that a single user or queue, or all the members of a single role or public group, owns most or all records for a particular object.

For example, a customer can assign all unassigned leads to a dummy user. This practice can seem like a convenient way to park unused data. However, it can cause performance issues if those users are moved around the hierarchy, or moved in to or out of a role or group that is the source group for a sharing rule. In both cases, Salesforce must adjust a very large number of entries in the sharing tables, which can lead to a long-running recalculation of access rights.

Distributing ownership of records across a greater number of users decreases the chance of long-running updates occurring.

If you do have a compelling reason for assigning ownership to a small number of users, you can minimize possible performance impacts by not assigning the users to a role.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=draes)

#### Tip

You can take the same approach when dealing with a large amount of data that is owned by or visible to the users under a single partner or customer account—changing the owner of that account or moving those users in the hierarchy requires the system to recalculate all the sharing and inheritance for all the data under the account.

If the users must have a role to share data, we recommend that you:

-   Place them in a separate role at the top of the hierarchy. (Note that this user inherits access to all data owned by or shared with users below them in the hierarchy).
-   Don't move them out of that top-level role to avoid triggering sharing recalculations.
-   Keep them out of public groups that can be used as the source for sharing rules.
