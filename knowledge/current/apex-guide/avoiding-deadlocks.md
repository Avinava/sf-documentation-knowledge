---
title: "Avoiding Deadlocks"
domain: apex-guide
topic: avoiding-deadlocks
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:48.043Z
keywords: [Avoiding, Deadlocks]
---

# Avoiding Deadlocks

# Avoiding Deadlocks

Apex has the possibility of deadlocks, as does any other procedural logic language involving updates to multiple database tables or rows. To avoid such deadlocks, the Apex runtime engine:

1.  First locks sObject parent records, then children.
2.  Locks sObject records in order of ID when multiple records of the same type are being edited.

As a developer, use care when locking rows to ensure that you are not introducing deadlocks. Verify that you are using standard deadlock avoidance techniques by accessing tables and rows in the same order from all locations in an application.