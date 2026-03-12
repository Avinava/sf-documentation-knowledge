---
title: "Xmd Organization Input"
domain: bi-dev-guide-rest
topic: xmd-organization-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:03.036Z
estimatedTokens: 129
keywords: [Xmd, Organization, Input, extended, metadata, Analytics, dataset]
---

# Xmd Organization Input

> The extended metadata (Xmd) for an organization in an Analytics dataset.

# Xmd Organization Input

The extended metadata (Xmd) for an organization in an Analytics dataset.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | ID | The ID of the org. | Required | 36.0 |
| instance​Url | String | The org’s My Domain login URL in the format https://MyDomainName.my.salesforce.com. | Required | 36.0 |
| label | String | The display name for the Salesforce org. Can be up to 40 characters. | Optional | 36.0 |
