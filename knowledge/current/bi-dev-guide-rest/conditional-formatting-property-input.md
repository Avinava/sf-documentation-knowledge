---
title: "Conditional Formatting Property Input"
domain: bi-dev-guide-rest
topic: conditional-formatting-property-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.675Z
estimatedTokens: 150
keywords: [Conditional, Formatting, Input, Xmd, dimensions, measures]
---

# Conditional Formatting Property Input

> A property for conditional formatting of Xmd dimensions and measures.

# Conditional Formatting Property Input

A property for conditional formatting of Xmd dimensions and measures.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| parameters | Object | The parameters for different types of formatting. | Required | 42.0 |
| reference​Field | String | The reference field to base the formatting on. | Optional | 42.0 |
| type | Connect​Wave​Conditional​Formatting​Type​Enum | The conditional formatting type. Valid values are:CategoriesGradientMultipleRawSingleStatic | Required | 42.0 |
