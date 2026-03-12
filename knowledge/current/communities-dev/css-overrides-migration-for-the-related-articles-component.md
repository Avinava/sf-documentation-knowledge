---
title: "CSS Overrides Migration for the Related Articles Component"
domain: communities-dev
topic: css-overrides-migration-for-the-related-articles-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.404Z
estimatedTokens: 448
keywords: [CSS, Overrides, Migration, Articles, Component, plan, continue, custom, migrate, forward, template, Full, Title, Article, Items]
---

# CSS Overrides Migration for the Related Articles Component

> If you plan to continue using custom CSS overrides, migrate them forward
    after you update the template.

# CSS Overrides Migration for the Related Articles Component

If you plan to continue using custom CSS overrides, migrate them forward after you update the template.

This topic identifies selector changes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

-   Use custom CSS sparingly since template updates don’t always support customizations.
-   Custom CSS is now shared across all your site pages. If you used custom CSS for Login pages, copy it and close the CSS editor. Then navigate to a non-Login page, reopen the editor, and add the custom CSS.

## Full Related Articles

| Previous Selector | New Selector |
| --- | --- |
| .selfServiceSimilarArticles.base-items.uiAbstractList.selfServiceBaseSimpleItems | .comm-related-articles |

## Component Title

| Previous Selector | New Selector |
| --- | --- |
| .selfServiceSimilarArticles h2.selfServiceSimilarArticles .base-items-header | .comm-related-articles h2 |

## Article List

| Previous Selector | New Selector |
| --- | --- |
| .selfServiceSimilarArticles ul.selfServiceSimilarArticles .base-items | .comm-related-articles ul |

## Article List Items

| Previous Selector | New Selector |
| --- | --- |
| .selfServiceSimilarArticles .base-simple-item | .comm-related-articles li |
| .selfServiceSimilarArticles .base-simple-item.comm-related-articles li | .comm-related-articles .comm-related-articles__item |

## Article Links

| Previous Selector | New Selector |
| --- | --- |
| .selfServiceSimilarArticles .item-title.selfServiceSimilarArticles .item-title-link | .comm-related-articles li a |
| .selfServiceSimilarArticles .item-title.selfServiceSimilarArticles .item-title-link.comm-related-articles li a | .comm-related-articles .comm-related-articles__item a |
