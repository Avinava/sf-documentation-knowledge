---
title: "ConnectApi.TextClassificationsOutputRepresentation"
domain: apex-reference
topic: connectapitextclassificationsoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.102Z
keywords: [ConnectApi.TextClassificationsOutputRepresentation]
---

# ConnectApi.TextClassificationsOutputRepresentation

# ConnectApi.TextClassificationsOutputRepresentation

HTTP headers containing URLs associating text strings and classifications.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| httpHeaders | List<ConnectApi.HttpHeaderOutputRepresentation> | HTTP headers for text classifications output. Each header provides a URL you can use to get the result of the classification. The URL takes a list of text strings and classifiers that each text string can be classified in. | 59.0 |