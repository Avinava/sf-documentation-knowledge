---
title: "Feed Entity Is Editable"
domain: chatterapi
topic: feed-entity-is-editable
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.692Z
estimatedTokens: 151
keywords: [Feed, Entity, Editable, whether, context, user, edit, element, comment]
---

# Feed Entity Is Editable

> Indicates whether the context user can edit a feed element or
      comment.

# Feed Entity Is Editable

Indicates whether the context user can edit a feed element or comment.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| areAttachments​EditableByMe | Boolean | true if the context user can add and remove attachments on the feed element or comment, false otherwise. | Small, 36.0 | 36.0 |
| feedEntityUrl | String | URL of the feed element or comment. | Small, 34.0 | 34.0 |
| isEditableByMe | Boolean | true if the context user can edit the feed element or comment, false otherwise. | Small, 34.0 | 34.0 |
