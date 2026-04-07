---
title: "SaveOption"
domain: mc-apis
topic: saveoption
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:24.819Z
estimatedTokens: 94
keywords: [SaveOption, how, overwritten, supports, upsert, control, subobject, Creates, Updates, support, sub-object]
---

# SaveOption

> Specifies how information is overwritten. The SaveOption object provides support for upsert control on sub-object Creates and Updates.

# SaveOption

Specifies how information is overwritten. The SaveOption object provides support for upsert control on sub-object Creates and Updates.

### Properties

| Name | Data Type | Description |
| --- | --- | --- |
| PropertyName | xsd:string | String object to which the SaveOption object applies. |
| SaveAction | SaveAction | Defines type of action to take upon saving. |
