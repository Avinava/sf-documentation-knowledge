---
title: "Collection Pin"
domain: bi-dev-guide-rest
topic: collection-pin
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.043Z
estimatedTokens: 132
keywords: [Collection, Pin, pinning, rules, Analytics]
---

# Collection Pin

> The pinning rules for an Analytics collection.

# Collection Pin

The pinning rules for an Analytics collection.

Properties

| Parameter Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | Connect​Wave​Share​Type​Enum | The ID for the collection pin rule. | Small, v52.0 | 52.0 |
| pinned​For | ID | The id of a group, a role, or a user the pinning rule is defined for. | Small, v52.0 | 52.0 |
| type | Collection​Pin​Type​Enum | The type of pinning. Valid values are:AllDesktopMobileNone | Small, v52.0 | 52.0 |
