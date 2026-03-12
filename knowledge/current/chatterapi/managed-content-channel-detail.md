---
title: "Managed Content Channel Detail"
domain: chatterapi
topic: managed-content-channel-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.399Z
estimatedTokens: 321
keywords: [Managed, Content, Channel, Detail]
---

# Managed Content Channel Detail

> Managed content channel detail.

# Managed Content Channel Detail

Managed content channel detail.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| channelId | String | ID of the managed content channel. | Small, 54.0 | 54.0–61.0 |
| channelName | String | Name of the managed content channel. | Small, 54.0 | 54.0–61.0 |
| channelType | String | Type of managed content channel. Values are:CloudToCloud—Cloud-to-Cloud integrated channel.Community—Experience Cloud site channel.ConnectedApp—Channel served by a connected app.PublicUnauthenticated—Public channel. All published content is publicly available.UserPermission—Channel backed by a system permission. All published content is available only to users with the permission. | Small, 54.0 | 54.0–61.0 |
| domain | String | ID or name of the domain assigned to the channel. | Small, 54.0 | 54.0–61.0 |
| domainName | String | Name of the domain assigned to the channel. | Small, 54.0 | 54.0–61.0 |
| isChannel​Searchable | Boolean | Specifies whether the text contents of the channel are searchable (true) or not (false). | Small, 54.0 | 54.0–61.0 |
| isDomain​Locked | Boolean | Specifies whether the domain is locked and can’t be changed (true) or not (false). | Small, 54.0 | 54.0–61.0 |
