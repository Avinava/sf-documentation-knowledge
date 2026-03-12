---
title: "CSS Overrides Migration for Trending Articles by Topic Component"
domain: communities-dev
topic: css-overrides-migration-for-trending-articles-by-topic-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.518Z
estimatedTokens: 481
keywords: [CSS, Overrides, Migration, Trending, Articles, Topic, Component, plan, continue, custom, migrate, forward, template, Full, Title]
---

# CSS Overrides Migration for Trending Articles by Topic Component

> If you plan to continue using custom CSS overrides, migrate them forward
    after you update the template.

# CSS Overrides Migration for Trending Articles by Topic Component

If you plan to continue using custom CSS overrides, migrate them forward after you update the template.

This topic identifies selector changes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

-   Use custom CSS sparingly since template updates don’t always support customizations.
-   Custom CSS is now shared across all your site pages. If you used custom CSS for Login pages, copy it and close the CSS editor. Then navigate to a non-Login page, reopen the editor, and add the custom CSS.

## Full Trending Articles

| Previous Selector | New Selector |
| --- | --- |
| .selfServiceTopicTrendingArticles.base-items.uiAbstractList.selfServiceBaseSimpleItems | .comm-topic-trending-articles |

## Component Title

| Previous Selector | New Selector |
| --- | --- |
| .selfServiceTopicTrendingArticles h2.selfServiceTopicTrendingArticles .base-items-header | .comm-topic-trending-articles h2 |

## Article List

| Previous Selector | New Selector |
| --- | --- |
| .selfServiceTopicTrendingArticles ul.selfServiceTopicTrendingArticles .base-items | .comm-topic-trending-articles ul |

## Article List Items

| Previous Selector | New Selector |
| --- | --- |
| .selfServiceTopicTrendingArticles .base-simple-item | .comm-topic-trending-articles li |
| .selfServiceTopicTrendingArticles .base-simple-item.comm-topic-trending-articles li | .comm-topic-trending-articles .comm-topic-trending-articles__item |

## Article Links

| Previous Selector | New Selector |
| --- | --- |
| .selfServiceTopicTrendingArticles .item-title-link.selfServiceTopicTrendingArticles a | .comm-topic-trending-articles li a |
| .selfServiceTopicTrendingArticles .item-title-link.selfServiceTopicTrendingArticles a.comm-topic-trending-articles li a | .comm-topic-trending-articles .comm-topic-trending-articles__item a |
