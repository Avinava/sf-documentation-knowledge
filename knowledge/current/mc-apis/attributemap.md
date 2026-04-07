---
title: "AttributeMap"
domain: mc-apis
topic: attributemap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:20.358Z
estimatedTokens: 193
keywords: [AttributeMap]
---

# AttributeMap

# AttributeMap

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AdditionalData | APIProperty[] | Reserved for future use. |
| ColumnName | xsd:string | Reserved for future use. |
| ColumnNameMappedTo | xsd:string | Reserved for future use. |
| EntityName | xsd:string | Reserved for future use. |
| EntityNameMappedTo | xsd:string | Specifies the name of the external entity mapped to a Marketing Cloud column |
| Name | xsd:string | Name of the object or property. |
| Value | xsd:string | Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two Values. IN can handle multiple Values. All other operators require only one Value. isNull and isNotNull ignore any supplied values and don't return an error. |
