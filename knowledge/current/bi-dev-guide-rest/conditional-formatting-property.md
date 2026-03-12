---
title: "Conditional Formatting Property"
domain: bi-dev-guide-rest
topic: conditional-formatting-property
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:04.071Z
estimatedTokens: 168
keywords: [Conditional, Formatting, extended, metadata, Xmd, Analytics, dataset, dimension, measure]
---

# Conditional Formatting Property

> The extended metadata (Xmd) for a property in the conditional formatting for an
  Analytics dataset dimension or measure.

# Conditional Formatting Property

The extended metadata (Xmd) for a property in the conditional formatting for an Analytics dataset dimension or measure.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| parameters | Object | The parameters for different formatting types. | Small, 42.0 | 42.0 |
| reference​Field | String | The reference field the conditional formatting is based on, if any. | Small, 42,0 | 42.0 |
| type | Connect​Wave​Conditional​Formatting​Type​Enum | The conditional formatting type. Valid values are:CategoriesGradientMultipleRawSingleStatic | Small 42.0 | 42.0 |
