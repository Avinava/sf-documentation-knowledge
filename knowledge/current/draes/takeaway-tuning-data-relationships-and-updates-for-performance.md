---
title: "Takeaway: Tuning Data Relationships and Updates for Performance"
domain: draes
topic: takeaway-tuning-data-relationships-and-updates-for-performance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.646Z
estimatedTokens: 286
keywords: [Takeaway, Tuning, Data, Relationships, Updates, Performance, Understand, characteristics, various, maintenance, operations, you’re, performing, always, test]
---

# Takeaway: Tuning Data Relationships and Updates for Performance

> Understand the performance characteristics of the various maintenance operations that
    you’re performing and always test substantial data uploads and changes to object relationships
    in a full copy sandbox that's been recently refreshed so you know what to expect.

# Takeaway: Tuning Data Relationships and Updates for Performance

Understand the performance characteristics of the various maintenance operations that you’re performing and always test substantial data uploads and changes to object relationships in a full copy sandbox that's been recently refreshed so you know what to expect.

Here are some specific suggestions.

-   Use a Public Read Only or Read/Write organization-wide default sharing model for all non-confidential data.
-   To avoid creating parent implicit shares, configure child objects to be Controlled by Parent wherever this configuration meets security requirements.
-   Configure parent-child relationships with no more than 10,000 children to one parent record.
-   If you encounter only occasional locking errors, see if the addition of retry logic is sufficient to solve the problem.
-   Sequence operations on parent and child objects by ParentID and ensure that different threads are operating on unique sets of records.
-   Tune your updates for maximum throughput by working with batch sizes, timeout values, Bulk API 2.0, and other performance-optimizing techniques.
