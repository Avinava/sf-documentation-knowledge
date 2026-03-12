---
title: "PersistPreferenceEnum Enum"
domain: revenue-cloud
topic: persistpreferenceenum-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:07.226Z
estimatedTokens: 134
keywords: [PersistPreferenceEnum, whether, persist, pricing, changes, sales, transaction, record, API, version, 65.0, later]
---

# PersistPreferenceEnum Enum

> Specifies whether to persist pricing changes for each sales transaction record.
    Available in API version 65.0 and later.

# PersistPreferenceEnum Enum

Specifies whether to persist pricing changes for each sales transaction record. Available in API version 65.0 and later.

## Enum Values

The RevSalesTrxn.PersistPreferenceEnum enum includes this value.

| Value | Description |
| --- | --- |
| Skip | Skips the persistence of pricing changes for each sales transaction record. To persist pricing changes, specify null as the value in the method signature. If this value isn't specified, then request to persist pricing changes is performed by default. |
