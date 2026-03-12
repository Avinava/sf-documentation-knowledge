---
title: "KnowledgeArticleVoteStat"
domain: knowledge-dev
topic: knowledgearticlevotestat
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.927Z
estimatedTokens: 406
keywords: [KnowledgeArticleVoteStat, weighted, rating, article, scale, across, read-only, API, version, 20.0, later, Calls, Special, Access, Rules]
---

# KnowledgeArticleVoteStat

> Provides the weighted rating for the specified article on a scale of 1 to 5
      across all article types. This object is read-only and available in
    API version 20.0 and later.

# KnowledgeArticleVoteStat

Provides the weighted rating for the specified article on a scale of 1 to 5 across all article types. This object is read-only and available in API version 20.0 and later.

Knowledge\_\_VoteStat is derived from this object.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Knowledge must be enabled in your org. Users must have access to the published version of an article to retrieve its votes. For more information on published article version, see the PublishStatus field in KnowledgeArticleVersion

## Fields

| Field Name | Details |
| --- | --- |
| Channel | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe channel where the article is rated:AllChannels for article views across all channels.App for the internal Salesforce Knowledge application.Pkb for article views in public knowledge base.Csp for Customer Portal.Prm for article view in partner portal. |
| NormalizedScore | TypedoublePropertiesFilter, Nillable, SortDescriptionArticle's weighted score on a scale of 1 to 5. A higher score means more votes. Articles without recent votes trend towards an average rating of three stars. |
| ParentId | TypereferencePropertiesFilter, Group, SortDescriptionThe rated article. This corresponds to a KnowledgeArticle record. |

## Usage

Use this object to query or retrieve the rating for an article.

Alternatively, client applications can use the article type API Name followed by \_\_VoteStat to query or retrieve the rating for an article for a specific article type.

## SOQL Samples

See KnowledgeArticleViewStat.
