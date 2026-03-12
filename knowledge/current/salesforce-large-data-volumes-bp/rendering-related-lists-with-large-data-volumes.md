---
title: "Rendering Related Lists with Large Data Volumes"
domain: salesforce-large-data-volumes-bp
topic: rendering-related-lists-with-large-data-volumes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.984Z
estimatedTokens: 291
keywords: [Rendering, Large, Data, Volumes, possible, changed, noninclusive, terms, align, company, Equality, maintained, certain, avoid, any]
---

# Rendering Related Lists with Large Data Volumes

> Where possible, we changed noninclusive terms to align with our company
    value of Equality. We maintained certain terms to avoid any effect on customer
    implementations.

# Rendering Related Lists with Large Data Volumes

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=salesforce_large_data_volumes_bp)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Situation

The customer had hundreds of thousands of account records and 15 million invoices, which were within a custom object in a master-detail relationship with the account. Each account record took a long time to display because of the Invoices related list’s lengthy rendering time.

## Solution

The delay in displaying the Invoices related list was related to data skew. While most account records had few invoice records, there were some records that had thousands of them.

To reduce the delay, the customer tried to reduce the number of invoice records for those parents and keep data skew to a minimum in child objects. Using the Enable Separate Loading of Related Lists setting allowed the account detail to render while the customer was waiting for the related list query to complete.
