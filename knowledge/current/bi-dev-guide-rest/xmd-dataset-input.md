---
title: "Xmd Dataset Input"
domain: bi-dev-guide-rest
topic: xmd-dataset-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:08.794Z
estimatedTokens: 142
keywords: [Xmd, Dataset, Input, extended, metadata, Analytics]
---

# Xmd Dataset Input

> The extended metadata (Xmd) for an Analytics dataset.

# Xmd Dataset Input

The extended metadata (Xmd) for an Analytics dataset.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| connector | String | The connector source for the dataset. | Required | 36.0 |
| description | String | The description of the dataset. | Optional | 36.0 |
| fully​Qualified​Name | String | The fully qualified name of the dataset version. | Required | 36.0 |
| origin | String | The origin representing where this dataset version comes from. | Optional | 36.0 |
