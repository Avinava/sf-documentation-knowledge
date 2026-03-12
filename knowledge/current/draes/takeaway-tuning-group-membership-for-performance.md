---
title: "Takeaway: Tuning Group Membership for Performance"
domain: draes
topic: takeaway-tuning-group-membership-for-performance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.630Z
estimatedTokens: 290
keywords: [Takeaway, Tuning, Group, Membership, Performance, Understand, characteristics, various, maintenance, operations, you’re, performing, Always, test, substantial]
---

# Takeaway: Tuning Group Membership for Performance

> Understand the performance characteristics of the various group maintenance operations
  that you’re performing. Always test substantial configuration changes in a full copy sandbox
  that's been recently refreshed so you know what to expect in production.

# Takeaway: Tuning Group Membership for Performance

Understand the performance characteristics of the various group maintenance operations that you’re performing. Always test substantial configuration changes in a full copy sandbox that's been recently refreshed so you know what to expect in production.

Here are some specific suggestions.

-   Identify user and group updates that are complex, such as user role and customer or partner account ownership changes, or updates that involve a large amount of associated data. Allow for additional time to process these changes.
-   When making changes to the hierarchy, process changes to the bottom (leaf) nodes first, then move upward to avoid duplicate processing.
-   Limit the number of records of an object owned by a single user to 10,000.
-   Tune your updates for maximum throughput by experimenting with batch sizes and using the bulk API, where possible.
-   Remove redundant paths of access, such as sharing rules that provide access to people who already have it through the hierarchy.
-   Schedule large group membership operations during off-peak hours.
-   Run batch operations in serial mode.
