---
title: "getCommentList()"
domain: pages
topic: getcommentlist
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:38:47.910Z
estimatedTokens: 80
keywords: [getCommentList, read-only, comments, current]
---

> Returns the list of read-only comments from the current
page.

# getCommentList()

Returns the list of read-only comments from the current page.

## Signature

public IdeaComment\[\] getCommentList()

## Return Value

Type: IdeaComment\[\]

This method returns the following comment properties:

-   id
-   commentBody
-   createdDate
-   createdBy.Id
-   createdBy.communityNickname
