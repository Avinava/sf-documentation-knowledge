---
title: "Smart Data Discovery Predict Column Custom Text"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-predict-column-custom-text
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:59.754Z
estimatedTokens: 154
keywords: [Smart, Discovery, Predict, Column, Text, Einstein, prediction]
---

> The custom text for a predict column given by the Einstein Discovery prediction.

# Smart Data Discovery Predict Column Custom Text

The custom text for a predict column given by the Einstein Discovery prediction.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| mapping | Map<String, String> | A placeholder to the resolved value defined in the template text. The map is null if there are no placeholders. | Small, 50.0 | 50.0 |
| template​Text | String | The template text if a custom override is defined for the column. When the column value should be skipped, this is an empty string. | Small, 50.0 | 50.0 |
