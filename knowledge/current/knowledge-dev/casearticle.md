---
title: "CaseArticle"
domain: knowledge-dev
topic: casearticle
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:41.821Z
estimatedTokens: 432
keywords: [CaseArticle, association, Case, KnowledgeArticle, API, version, 20.0, later, Calls, Special, Access, Rules, Usage]
---

# CaseArticle

> Represents the association between a Case and
        a KnowledgeArticle.
    This object is available in API version 20.0 and later.

# CaseArticle

Represents the association between a Case and a KnowledgeArticle. This object is available in API version 20.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

Access to this object is controlled by the parent Case and KnowledgeArticle. However, when querying, access is only controlled by the parent Case.

Customer Portal users can't access this object.

## Fields

| Field | Details |
| --- | --- |
| ArticleLanguage | TypepicklistPropertiesFilter, Restricted picklistDescriptionThe language of the article associated with the case. |
| ArticleVersionNumber | TypeintPropertiesCreate, Group, NillableDescriptionThe number assigned to a version of an article. This field is available in API version 24.0 and later. |
| CaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the Case associated with the KnowledgeArticle. |
| IsSharedByEmail | TypeintPropertiesCreate, Group, NillableDescriptionIndicates that the article has been shared with the customer through an email. |
| KnowledgeArticleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the KnowledgeArticle associated with the Case. |

## Usage

This object represents the association of a knowledge article with a Case. An article is associated with a case when it’s relevant to a specific issue, when it helps an agent solve the case, or when the agent sends the article to a customer.

You can use this object to include case-article associations in Apex and Visualforce.

You can't update this object via the API. If you attempt to create a record that matches an existing record, the create request simply returns the existing record.
