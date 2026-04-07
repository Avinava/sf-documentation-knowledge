---
title: "Wave Folder Share Input"
domain: bi-dev-guide-rest
topic: wave-folder-share-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:55.141Z
estimatedTokens: 169
keywords: [Wave, Folder, Share, Analytics, sharing, rule]
---

> An Analytics folder sharing rule.

# Wave Folder Share Input

An Analytics folder sharing rule.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| access​Type | Connect​Wave​Access​Type​Enum | The access type. Valid values are:EditManageView | Required | 36.0 |
| share​Type | Connect​Wave​Share​Type​Enum | The share type. Valid values are:All​Csp​UsersAll​Prm​UsersCustomer​Portal​UserGroupOrganizationPartner​UserPortalRolePortal​Role​And​SubordinatesRoleRole​And​SubordinatesRole​And​Subordinates​InternalUser | Required | 36.0 |
| shared​With​Id | ID | The ID of the entity that the folder is shared with. | Required | 36.0 |
