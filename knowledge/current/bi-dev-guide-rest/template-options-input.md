---
title: "Template Options Input"
domain: bi-dev-guide-rest
topic: template-options-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.890Z
estimatedTokens: 208
keywords: [Template, Options, Input, upgrade, templated, Analytics, app]
---

# Template Options Input

> The template options used to upgrade a templated Analytics app.

# Template Options Input

The template options used to upgrade a templated Analytics app.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| app​Action | Connect​Wave​Template​App​Action​Enum | The upgrade action to perform on the templated application. Valid values are:Auto​UpgradeCreateDecouple​AppOverlayRefresh​DataUpgrade | Required | 37.0 |
| disable​Apex | Boolean | Indicates whether any Apex integration hooks should be disabled (true) or not (false). | Optional | 37.0 |
| dynamic​Options | Map<String, Object> | A map of dynamic and beta options for app creation or upgrade. Valid values are:production​Type: valid values includeATF_3_0Classicruntime​Log​Entry​Level: valid values includeFineFinerFinestInfoSevereWarning | Optional | 54.0 |
