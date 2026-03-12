---
title: "Knowledge Object Model"
domain: knowledge-dev
topic: knowledge-object-model
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:41.515Z
estimatedTokens: 2854
keywords: [Knowledge, Model, slightly, different, feature, areas, because, abstract, Salesforce, objects, aren’t, directly, articles, contain, concrete]
---

# Knowledge Object Model

> The Knowledge object model is slightly different from other feature areas because it
  exposes a set of abstract Salesforce objects that aren’t directly used when you create articles.
  These abstract objects then contain concrete derivations that you do use when creating
  articles.

# Knowledge Object Model

The Knowledge object model is slightly different from other feature areas because it exposes a set of abstract Salesforce objects that aren’t directly used when you create articles. These abstract objects then contain concrete derivations that you do use when creating articles.

![Abstract and concrete objects](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fknowledge%2Fimages%2Fknowledge_abstract_concrete.png&folder=knowledge_dev)

This architecture gives more flexibility to search behavior in support of Lightning Knowledge and Salesforce Classic.

## Core Knowledge Objects

The core abstract Knowledge objects are for a Knowledge article (KnowledgeArticle), and a set of versions of that article (KnowledgeArticleVersion). These versions can include different translations and historical versions of an article.

![Knowledge inheritance](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fknowledge%2Fimages%2Fknowledge_inheritance.png&folder=knowledge_dev)

-   [KnowledgeArticle](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticle.htm "HTML (New Window)")—The abstract Knowledge article object. This object contains metadata about a knowledge article irrespective of the article's version, translation, or status.
-   [KnowledgeArticleVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversion.htm "HTML (New Window)")—The abstract Knowledge article version object. Whenever you create a draft of an article, it gets a new version number and a unique ID. Each translation of an article also has a version and ID. Each version is a KnowledgeArticleVersion record with the KnowledgeArticle record as the parent.

When you create knowledge articles, you create records with concrete Salesforce objects. These objects inherit from their abstract counterparts. By default, these concrete objects are named “Knowledge\_\_ka” for knowledge articles and “Knowledge\_\_kav” for knowledge article versions in Lightning Knowledge.

![Knowledge derivations](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fknowledge%2Fimages%2Fknowledge_derivations.png&folder=knowledge_dev)

This diagram shows the default names in Lightning Knowledge for the concrete implementations, but you can change these names. The names always have the suffixes “\_\_ka” for knowledge articles and “\_\_kav” for knowledge article versions. You can change the “Knowledge” prefix by changing the Object Name for the Knowledge\_\_kav object in the Object Manager.

The concrete implementation contains any of your custom fields for a knowledge article. The Knowledge\_\_kav object also contains a “RecordTypeId” field, which is a record type used to describe the article structure, such as FAQ or Tutorial. Each record type can contain its own layouts. For example, an FAQ record type can use a special layout that displays custom fields such as “Question\_\_c” and “Answer\_\_c”.

In Salesforce Classic, the article structure is determined by the article type. Each knowledge article type has a different concrete implementation, for example FAQ\_\_kav, Tutorial\_\_kav. In Lightning Knowledge, one concrete object is used, for example, Knowledge\_\_kav, and instead the record type is used to associate an article with a unique article structure.

## Complete Knowledge Object Diagram

To see the relationship of Knowledge articles to other objects, let’s highlight some of the other important object relationships. In this diagram, the default value “Knowledge” is the article type name to illustrate the object mode. If you change this value in Setup, the prefix for each object with “\_\_” in the name is changed accordingly.

![Knowledge object model](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fknowledge%2Fimages%2Fknowledge_object_model.png&folder=knowledge_dev)

These objects appear in this Knowledge object model. Each object links to its reference documentation for more information.

-   [Case](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_case.htm "HTML (New Window)")—A case, which is a customer issue or problem. Every article can be associated with a case using the [CaseArticle](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_casearticle.htm "HTML (New Window)") object.
-   [CaseArticle](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_casearticle.htm "HTML (New Window)")—The association between a [Case](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_case.htm "HTML (New Window)") and a [KnowledgeArticle](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticle.htm "Provides read-only access to an article and the ability to delete the primary article. This object is available in API version 19.0 and later.").
-   [FeedComment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_feedcomment.htm "HTML (New Window)")—A comment added to a feed for a knowledge article.
-   [Knowledge\_\_DataCategorySelection](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__datacategoryselection.htm "Represents a data category that classifies an article. This object is available in API version 39.0 and later.")—A data category that classifies an article.
-   [Knowledge\_\_Feed](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__feed.htm "Represents the feed for a knowledge article. This object is available in API version 39.0 and later.")—The feed for a knowledge article.
-   [Knowledge\_\_ka](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__ka.htm "Provides access to the concrete object that represents a Knowledge article, the parent object for article versions. This object is available in API version 39.0 and later.")—The concrete object of a [KnowledgeArticle](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticle.htm "Provides read-only access to an article and the ability to delete the primary article. This object is available in API version 19.0 and later.").
-   [Knowledge\_\_kav](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm "Provides access to the concrete object that represents a Knowledge article version. This object is available in API version 39.0 and later.")—The concrete object of a [KnowledgeArticleVersion](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticleversion.htm "Provides a global view of standard article fields across all types of articles depending on their version. This object is available in API version 18.0 and later.").
-   Knowledge\_\_VersionHistory—The concrete object of a [KnowledgeArticleVersionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversionhistory.htm "HTML (New Window)").
-   Knowledge\_\_ViewStat—The concrete object of a [KnowledgeArticleViewStat](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleviewstat.htm "HTML (New Window)").
-   Knowledge\_\_VoteStat—The concrete object of a [KnowledgeArticleVoteStat](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticlevotestat.htm "HTML (New Window)").
-   [KnowledgeArticle](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticle.htm "Provides read-only access to an article and the ability to delete the primary article. This object is available in API version 19.0 and later.")—The abstract Knowledge article object. This object contains metadata about a knowledge article irrespective of the article's version, translation, or status.
-   [KnowledgeArticleVersion](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticleversion.htm "Provides a global view of standard article fields across all types of articles depending on their version. This object is available in API version 18.0 and later.")—The abstract Knowledge article version object. Whenever you create a draft of an article, it gets a new version number and a unique ID. Each translation of an article also has a version and ID. Each version is a [KnowledgeArticleVersion](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticleversion.htm "Provides a global view of standard article fields across all types of articles depending on their version. This object is available in API version 18.0 and later.") record with the [KnowledgeArticle](atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticle.htm "Provides read-only access to an article and the ability to delete the primary article. This object is available in API version 19.0 and later.") record as the parent.
-   [KnowledgeArticleVersionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversionhistory.htm "HTML (New Window)")—Enables read-only access to the full history of an article.
-   [KnowledgeArticleViewStat](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleviewstat.htm "HTML (New Window)")—Provides statistics on the number of views for the specified article.
-   [KnowledgeArticleVoteStat](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_knowledgearticlevotestat.htm "HTML (New Window)")—Provides the weighted rating for the specified article.
-   [LinkedArticle](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_linkedarticle.htm "HTML (New Window)")—A knowledge article that is attached to a work order, work order line item, or work type.
-   LinkedArticleFeed—The comment feed on a linked article.
-   LinkedArticleHistory—The history of changes made to tracked fields on a linked article.
-   [WorkOrder](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workorder.htm "HTML (New Window)")—Field service work to be performed for a customer.
-   [WorkOrderLineItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_workorderlineitem.htm "HTML (New Window)")—A subtask on a work order in field service.
-   [Vote](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_vote.htm "HTML (New Window)")—A vote that a user has made on a knowledge article.
    -   Using Vote is allowed for Knowledge Article objects but not for Knowledge Article Version objects.
    -   Only one vote record can exist per knowledge article per user.Voting isn’t allowed by Site Guest Users.
    -   Vote allows multiple types of values for the "Type" field, but only "Up" and "Down" are allowed for Knowledge Articles.

## Related Topics

- KnowledgeArticle (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticle.htm)
- Knowledge__DataCategorySelection (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__datacategoryselection.htm)
- Knowledge__Feed (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__feed.htm)
- Knowledge__ka (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__ka.htm)
- Knowledge__kav (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm)
- KnowledgeArticleVersion (atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledgearticleversion.htm)
