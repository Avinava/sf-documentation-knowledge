---
title: "Prevent Fields from Dropping Off the Page"
domain: pages
topic: prevent-fields-from-dropping-off-the-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.903Z
estimatedTokens: 194
keywords: [Prevent, Dropping, Off, Visualforce, pages, especially, large, text, area, master-detail, relationships, entities, fail, display, every]
---

# Prevent Fields from Dropping Off the Page

> Visualforce pages with many fields, especially those with large text area fields
    or
    with master-detail relationships to other entities, can
    fail
    to display every field requested. Data can be dropped because of batch limits and limits on the
    size of data
    returned.
    To prevent fields from dropping off the page, reduce the number of fields displayed.
    Alternatively,
    create a
    controller extension that can query child records and display the results in related
    lists.

# Prevent Fields from Dropping Off the Page

Visualforce pages with many fields, especially those with large text area fields or with master-detail relationships to other entities, can fail to display every field requested. Data can be dropped because of batch limits and limits on the size of data returned. To prevent fields from dropping off the page, reduce the number of fields displayed. Alternatively, create a controller extension that can query child records and display the results in related lists.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.
