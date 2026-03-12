---
title: "General"
domain: salesforce-large-data-volumes-bp
topic: general
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.958Z
estimatedTokens: 208
keywords: [General]
---

# General

# General

| Goal | Best Practice |
| --- | --- |
| Avoiding sharing computations | Avoid having any user own more than 10,000 records. |
| Improving performance | Use a data-tiering strategy that spreads data across multiple objects, and brings in data on demand from another object or external store. |
| Reducing the time it takes to create full copies of production sandboxes with large data volumes | When creating copies of production sandboxes, exclude field history if it isn’t required, and don’t change a lot of data until the sandbox copy is created. |
| Making deployments more efficient | Distribute child records so that no parent has more than 10,000 child records. For example, in a deployment that has many contacts but does not use accounts, set up several dummy accounts and distribute the contacts among them. |
