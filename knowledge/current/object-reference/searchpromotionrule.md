---
title: "SearchPromotionRule"
domain: object-reference
topic: searchpromotionrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.714Z
estimatedTokens: 349
keywords: [SearchPromotionRule, promoted, search, term, keywords, associate, Salesforce, Knowledge, article, user’s, query, includes, associated, results, API]
---

# SearchPromotionRule

> Represents a promoted search term, which is one or more keywords that
   you associate with a Salesforce Knowledge article. When a user’s search query includes
   these keywords, the associated article is returned first in search results. This object is
  available in API version 31.0 and later.

# SearchPromotionRule

Represents a promoted search term, which is one or more keywords that you associate with a Salesforce Knowledge article. When a user’s search query includes these keywords, the associated article is returned first in search results. This object is available in API version 31.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

A user must have the “Manage Promoted Search Terms” permission.

## Fields

| Field Name | Details |
| --- | --- |
| PromotedEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the KnowledgeArticleVersion that the promoted search term is associated with. The article must be in published status. |
| Query | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe text of the promoted search term. Maximum length: 100 characters.You can associate the same promoted search term with multiple articles. If the user’s search matches the promoted term, all associated articles are promoted in search results, ordered by relevancy. For best results, create promoted search terms selectively and limit the number of articles that are promoted per term. |

## Usage

Use this object to optimize article search results in Salesforce Knowledge.
