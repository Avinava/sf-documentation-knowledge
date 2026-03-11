---
title: "JSONParser Class"
domain: apex-reference
topic: jsonparser-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:34.475Z
keywords: [JSONParser, Class, Skips, child, tokens, type, JSONToken.START_ARRAY, JSONToken.START_OBJECT, parser, currently, points, to., skipChildren, Signature, Return, Value]
---

# JSONParser Class

> Skips all child tokens of type JSONToken.START_ARRAY and JSONToken.START_OBJECT that the parser currently points
to.

### skipChildren()

Skips all child tokens of type JSONToken.START\_ARRAY and JSONToken.START\_OBJECT that the parser currently points to.

#### Signature

public Void skipChildren()

#### Return Value

Type: Void