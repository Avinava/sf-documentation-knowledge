---
title: "ConnectApi.TextClassificationsInputRepresentation"
domain: apex-reference
topic: connectapitextclassificationsinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.633Z
keywords: [ConnectApi.TextClassificationsInputRepresentation]
---

# ConnectApi.TextClassificationsInputRepresentation

# ConnectApi.TextClassificationsInputRepresentation

Text classification information associating classifiers and text to be classified.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| classifiers | List<String> | List of classifiers according to which text has to be classified. | Required | 59.0 |
| textList | List<String> | List of text to be classified. | Required | 59.0 |