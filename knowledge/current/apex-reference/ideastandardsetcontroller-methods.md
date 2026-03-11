---
title: "IdeaStandardSetController Methods"
domain: apex-reference
topic: ideastandardsetcontroller-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.227Z
keywords: [IdeaStandardSetController, Methods, Returns, list, read-only, ideas, current, page, set., getIdeaList, Signature, Return, Value, Usage]
---

# IdeaStandardSetController Methods

> Returns the list of read-only ideas in the current page
set.

## IdeaStandardSetController Methods

The following are instance methods for IdeaStandardSetController.

-   **[getIdeaList()](atlas.en-us.apexref.meta/apexref/apex_pages_ideastandardsetcontroller.htm#apex_ApexPages_IdeaStandardSetController_getIdeaList)**  
    Returns the list of read-only ideas in the current page set.

### getIdeaList()

Returns the list of read-only ideas in the current page set.

#### Signature

public Idea\[\] getIdeaList()

#### Return Value

Type: Idea\[\]

#### Usage

You can use the <ideas:listOutputLink\>, <ideas:profileListOutputLink\>, and <ideas:detailOutputLink\> components to display profile pages as well as idea list and detail pages (see the examples below). The following is a list of properties returned by this method:

-   Body
-   Categories
-   Category
-   CreatedBy.CommunityNickname
-   CreatedBy.Id
-   CreatedDate
-   Id
-   LastCommentDate
-   LastComment.Id
-   LastComment.CommentBody
-   LastComment.CreatedBy.CommunityNickname
-   LastComment.CreatedBy.Id
-   NumComments
-   Status
-   Title
-   VoteTotal