---
title: "Support Knowledge with REST API"
domain: rest-api
topic: support-knowledge-with-rest-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.413Z
estimatedTokens: 545
keywords: [Support, Knowledge, REST, API, APIs, allow, authorized, guest, users, retrieve, user’s, visible, data, categories, their]
---

# Support Knowledge with REST API

> Knowledge Support REST APIs allow both authorized and guest users to retrieve the user’s
  visible data categories and their associated articles. This resource is available in REST API
  version 38.0 and later.

# Support Knowledge with REST API

Knowledge Support REST APIs allow both authorized and guest users to retrieve the user’s visible data categories and their associated articles. This resource is available in REST API version 38.0 and later.

Authenticated users need the UserProfile.apiEnabled permission, Knowledge enabled in the organization, read rights on the article type, and any other knowledge specific permission or preference that controls visibility to articles.

Guest users need the Guest Access to the Support API preference enabled on the relevant Site, Knowledge enabled in the organization, and read rights on the article type and article channel that controls the visibility for guest users.

## Syntax

URI

/services/data/vXX.X/support

Method

GET

Formats

JSON, XML

Authentication

Authorization: Bearer token

## Example

Example Response Body

```

```

-   **[Data Category Groups](atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_dcgroups.htm)**
    Get data category groups that are visible to the current user. This resource is available in REST API version 38.0 and later.
-   **[Data Category Detail](atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_dcdetail.htm)**
    Gets data category details and the child categories by a given category. This resource can be used in API version 38.0 and later.
-   **[Articles List](atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_artlist.htm)**
    Get a page of online articles for the given language and category through either search or query. This resource is available in REST API version 38.0 and later.
-   **[Articles Details](atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_artdetails.htm)**
    Gets all online article fields, accessible to the user. This resource is available with article IDs in REST API version 38.0 and later, and this resource is available with article URL names in version 44.0 and later.

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm "Invocable Actions Standard")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm "Process Approvals")

## Code Examples

```
{
"dataCategoryGroups" : "/services/data/vXX.X/support/dataCategoryGroups",
"knowledgeArticles" : "/services/data/vXX.X/support/knowledgeArticles"
:
}
```

## Related Topics

- Data Category Groups (atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_dcgroups.htm)
- Data Category Detail (atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_dcdetail.htm)
- Articles List (atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_artlist.htm)
- Articles Details (atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_artdetails.htm)
- ← Previous (atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm)
- Next → (atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm)
