---
title: "PrivateLabel"
domain: mc-apis
topic: privatelabel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:18.338Z
estimatedTokens: 205
keywords: [PrivateLabel, regarding, Brand, Builder, settings]
---

> The PrivateLabel object contains information regarding Brand Builder settings.

# PrivateLabel

The PrivateLabel object contains information regarding Brand Builder settings.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ColorPaletteXML | xsd:string | XML string used to define colors in private label. |
| Delete | xsd:int | Indicates whether an object is deleted. |
| ID | Nullable`1 | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| LogoFile | xsd:string | Name of file for logo used in the upper-left corner of Marketing Cloud. The image file must be located in the Portfolio of the appropriate account. |
| Name | xsd:string | Name of the object or property. |
| SetActive | xsd:boolean | Defines whether an object is active. For Brand Builder, only one PrivateLabel object can be active at one time. |
