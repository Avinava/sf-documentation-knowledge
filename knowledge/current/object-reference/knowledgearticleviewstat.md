---
title: "KnowledgeArticleViewStat"
domain: object-reference
topic: knowledgearticleviewstat
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.511Z
estimatedTokens: 870
keywords: [KnowledgeArticleViewStat, certain, statistics, number, views, article, across, view, count, published, archived, articles, counts, draft, aren’t]
---

# KnowledgeArticleViewStat

> Provides certain statistics related to the number of views for the
      specified article across all article types. The view count statistics are for published
    and archived articles only. View counts for draft articles aren’t tracked. This object is
    read-only and available in API version 20.0 and later.

# KnowledgeArticleViewStat

Provides certain statistics related to the number of views for the specified article across all article types. The view count statistics are for published and archived articles only. View counts for draft articles aren’t tracked. This object is read-only and available in API version 20.0 and later.

Knowledge\_\_ViewStat is derived from this object.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Knowledge must be enabled in your org. Users must have access to the published and archived versions of an article to retrieve its views. For more information on published and archived article versions, see the PublishStatus field in KnowledgeArticleVersion.

## Fields

| Field Name | Details |
| --- | --- |
| Channel | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe channel where the article is viewed:AllChannels for article views across all channels.App for the internal Salesforce Knowledge application.Pkb for article views in the public knowledge base.Csp for Customer Portal.Prm for article view in partner portal. |
| NormalizedScore | TypedoublePropertiesFilter, Nillable, SortDescriptionArticle's weighted views in the selected channel. The article with most views has a score of 100. Other article views are then calculated relative to this highest view score. For example, if the best read article has 2000 views and another has 1000. The first one gets a score of 100 while the second gets 50. |
| ParentId | TypereferencePropertiesFilter, Group, SortDescriptionID of the viewed article. This corresponds to a KnowledgeArticle record. |
| ViewCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of unique views a published or archived article has received in the selected channel. An article with a high number of views may not always have a high normalized score. The normalized score for an article is calculated based on views over time, with more recent views earning a higher score. This field is available in API version 27.0 and later. |

## Usage

Use this object to query or retrieve certain statistics for article views.

Alternatively, client applications can use the article type API Name followed by \_\_ViewStat to query or retrieve most viewed articles from a specific article type.

## SOQL Samples

The following SOQL clause uses KnowledgeArticleViewStat to query all the article views in Salesforce Knowledge and return the related articles:

```

```

Use the following clause to restrict your query to Offer articles for the Offer article type:

```

```

#### See Also

-   [KnowledgeArticle](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticle.htm "Provides read-only access to an article and the ability to delete the primary article. This object is available in API version 19.0 and later.")

-   [KnowledgeArticleVersion](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversion.htm "Provides a global view of standard article fields across all types of articles depending on their version. This object is available in API version 18.0 and later.")

-   [KnowledgeArticleVoteStat](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticlevotestat.htm "Provides the weighted rating for the specified article on a scale of 1 to 5 across all article types. This object is read-only and available in API version 20.0 and later.")

## Code Examples

```
SELECT Id, NormalizedScore, Parent.Id 
        FROM KnowledgeArticleViewStat where Channel = 'App' 
        ORDER BY NormalizedScore
```

```
SELECT Id, NormalizedScore, Parent.Id 
        FROM Offer__ViewStat where Channel = 'App' 
        ORDER BY NormalizedScore
```

## Related Topics

- KnowledgeArticle (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticle.htm)
- KnowledgeArticleVersion (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticleversion.htm)
- KnowledgeArticleVoteStat (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_knowledgearticlevotestat.htm)
