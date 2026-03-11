---
title: "getCurrentUvid()"
domain: apex-reference
topic: getcurrentuvid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.039Z
keywords: [getCurrentUvid, Returns, context, guest, user’s, unique, visitor, UVID, Signature, Return, Value]
---

# getCurrentUvid()

> Returns the context guest user’s unique visitor ID (UVID).

### getCurrentUvid()

Returns the context guest user’s unique visitor ID (UVID).

#### Signature

public static String getCurrentUvid()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If a UVID isn’t available, returns null.