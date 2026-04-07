---
title: "Wave Collection Pin Input"
domain: bi-dev-guide-rest
topic: wave-collection-pin-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:08.724Z
estimatedTokens: 182
keywords: [Wave, Collection, Pin, Input, pinning, rules, Analytics]
---

# Wave Collection Pin Input

> The pinning rules for an Analytics collection.

# Wave Collection Pin Input

The pinning rules for an Analytics collection.

Properties

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| pinned​For | ID | The id of a group, a role, or a user the pinning rule is defined for. | Required | 52.0 |
| pinned​For​Type | Connect​Wave​Share​Type​Enum | The share type for the pinning rule. Valid values are:All​Csp​UsersAll​Prm​UsersCustomer​Portal​UserGroupOrganizationPartner​UserPortalRolePortal​Role​And​SubordinatesRoleRole​And​SubordinatesRole​And​Subordinates​InternalUser | Required | 52.0 |
| type | Collection​Pin​Type​Enum | The type of pinning. Valid values are:AllDesktopMobileNone | Optional | 52.0 |
