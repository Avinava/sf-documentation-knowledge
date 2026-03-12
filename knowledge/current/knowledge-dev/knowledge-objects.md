---
title: "Knowledge Objects"
domain: knowledge-dev
topic: knowledge-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.531Z
estimatedTokens: 1028
keywords: [Knowledge, Objects, Salesforce, platform, working]
---

# Knowledge Objects

> Salesforce platform objects  for working with Salesforce Knowledge.

# Knowledge Objects

Salesforce platform objects for working with Salesforce Knowledge.

-   **[KnowledgeArticle](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticle.htm)**
    Provides read-only access to an article and the ability to delete the primary article. This object is available in API version 19.0 and later.
-   **[KnowledgeArticleVersion](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticleversion.htm)**
    Provides a global view of standard article fields across all types of articles depending on their version. This object is available in API version 18.0 and later.
-   **[Knowledge\_\_DataCategorySelection](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__datacategoryselection.htm)**
    Represents a data category that classifies an article. This object is available in API version 39.0 and later.
-   **[Knowledge\_\_Feed](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__feed.htm)**
    Represents the feed for a knowledge article. This object is available in API version 39.0 and later.
-   **[Knowledge\_\_kav](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm)**
    Provides access to the concrete object that represents a Knowledge article version. This object is available in API version 39.0 and later.
-   **[Knowledge\_\_ka](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__ka.htm)**
    Provides access to the concrete object that represents a Knowledge article, the parent object for article versions. This object is available in API version 39.0 and later.
-   **[KnowledgeArticleVersionHistory](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticleversionhistory.htm)**
    Enables read-only access to the full history of an article. This object is available in API version 25.0 and later.
-   **[KnowledgeArticleViewStat](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticleviewstat.htm)**
    Provides certain statistics related to the number of views for the specified article across all article types. The view count statistics are for published and archived articles only. View counts for draft articles aren’t tracked. This object is read-only and available in API version 20.0 and later.
-   **[KnowledgeArticleVoteStat](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticlevotestat.htm)**
    Provides the weighted rating for the specified article on a scale of 1 to 5 across all article types. This object is read-only and available in API version 20.0 and later.
-   **[CaseArticle](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_casearticle.htm)**
    Represents the association between a Case and a KnowledgeArticle. This object is available in API version 20.0 and later.
-   **[LinkedArticle](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_linkedarticle.htm)**
    Represents a knowledge article that is attached to a work order, work order line item, or work type. This object is available in API version 37.0 and later.
-   **[RecentlyViewed](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_recentlyviewed.htm)**
    Represents records or list views that the current user has recently viewed or referenced (by viewing a related record). List views are available in API version 29.0 and later.
-   **[SearchPromotionRule](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_searchpromotionrule.htm)**
    Represents a promoted search term, which is one or more keywords that you associate with a Salesforce Knowledge article. When a user’s search query includes these keywords, the associated article is returned first in search results. This object is available in API version 31.0 and later.
-   **[TopicAssignment](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_topicassignment.htm)**
    Represents the assignment of a topic to a specific feed item, record, or file. This object is available in API version 28.0 and later.

## Related Topics

- KnowledgeArticle (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticle.htm)
- KnowledgeArticleVersion (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticleversion.htm)
- Knowledge__DataCategorySelection (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__datacategoryselection.htm)
- Knowledge__Feed (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__feed.htm)
- Knowledge__kav (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm)
- Knowledge__ka (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__ka.htm)
- KnowledgeArticleVersionHistory (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticleversionhistory.htm)
- KnowledgeArticleViewStat (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticleviewstat.htm)
- KnowledgeArticleVoteStat (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticlevotestat.htm)
- CaseArticle (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_casearticle.htm)
