---
title: "IdeaStandardController Class"
domain: apex-reference
topic: ideastandardcontroller-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.221Z
keywords: [IdeaStandardController, Class, Returns, list, read-only, comments, current, page., getCommentList, Signature, Return, Value]
---

# IdeaStandardController Class

> Returns the list of read-only comments from the current
page.

### getCommentList()

Returns the list of read-only comments from the current page.

#### Signature

public IdeaComment\[\] getCommentList()

#### Return Value

Type: IdeaComment\[\]

This method returns the following comment properties:

-   id
-   commentBody
-   createdDate
-   createdBy.Id
-   createdBy.communityNickname