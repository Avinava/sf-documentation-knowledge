---
title: "getAnchor()"
domain: pages
topic: getanchor
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.664Z
estimatedTokens: 117
keywords: [getAnchor, anchor, referenced, page’s, URL, part, hashtag]
---

# getAnchor()

> Returns the name of the anchor referenced in the page’s
URL. That is, the part of the URL after the hashtag (#).

# getAnchor()

Returns the name of the anchor referenced in the page’s URL. That is, the part of the URL after the hashtag (#).

## Signature

public String getAnchor()

## Return Value

Type: String

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Instances of PageReference returned by ApexPages.currentPage() have a null anchor attribute, because URL fragments are not sent to the Salesforce server during a request.
