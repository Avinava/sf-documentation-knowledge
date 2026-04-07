---
title: "Attribute"
domain: mc-apis
topic: attribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:20.318Z
estimatedTokens: 169
keywords: [Attribute, attributes, subscriber, any, applicable, compression, configuration]
---

# Attribute

> The Attribute object defines attributes for a subscriber. Each Attribute object contains an attribute name, the value of that attribute, and any applicable compression configuration.

# Attribute

The Attribute object defines attributes for a subscriber. Each Attribute object contains an attribute name, the value of that attribute, and any applicable compression configuration.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Compression | CompressionConfiguration | Reserved for future use. |
| Name | xsd:string | Name of the object or property. |
| Value | xsd:string | Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two Values. IN can handle multiple Values. All other operators require only one Value. isNull and isNotNull ignores any supplied values and don't return an error. |
