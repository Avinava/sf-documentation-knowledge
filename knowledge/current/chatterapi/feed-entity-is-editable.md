---
title: "Feed Entity Is Editable"
domain: chatterapi
topic: feed-entity-is-editable
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:19.047Z
estimatedTokens: 151
keywords: [Entity, Editable, whether, context, user, edit, comment]
---

> Indicates whether the context user can edit a feed element or
      comment.

# Feed Entity Is Editable

Indicates whether the context user can edit a feed element or comment.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| areAttachments​EditableByMe | Boolean | true if the context user can add and remove attachments on the feed element or comment, false otherwise. | Small, 36.0 | 36.0 |
| feedEntityUrl | String | URL of the feed element or comment. | Small, 34.0 | 34.0 |
| isEditableByMe | Boolean | true if the context user can edit the feed element or comment, false otherwise. | Small, 34.0 | 34.0 |
