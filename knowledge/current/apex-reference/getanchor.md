---
title: "getAnchor()"
domain: apex-reference
topic: getanchor
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.035Z
keywords: [getAnchor, Signature, Return, Value, Note]
---

# getAnchor()

# getAnchor()

Returns the name of the anchor referenced in the page’s URL. That is, the part of the URL after the hashtag (#).

## Signature

public String getAnchor()

## Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Instances of PageReference returned by ApexPages.currentPage() have a null anchor attribute, because URL fragments are not sent to the Salesforce server during a request.