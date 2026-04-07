---
title: "CSS Overrides Migration for the Record Related List Component"
domain: communities-dev
topic: css-overrides-migration-for-the-record-related-list-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:26.828Z
estimatedTokens: 208
keywords: [CSS, Overrides, Migration, Record, plan, continue, migrate, forward, template, Detail, Label]
---

> If you plan to continue using custom CSS overrides, migrate them forward
    after you update the template.

# CSS Overrides Migration for the Record Related List Component

If you plan to continue using custom CSS overrides, migrate them forward after you update the template.

This topic identifies selector changes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

-   Use custom CSS sparingly since template updates don’t always support customizations.
-   Custom CSS is now shared across all your site pages. If you used custom CSS for Login pages, copy it and close the CSS editor. Then navigate to a non-Login page, reopen the editor, and add the custom CSS.

## Detail Field Label

| Previous Selector | New Selector |
| --- | --- |
| .forceCommunityRelatedRecords .slds-card__header-link .slds-text-heading--small | .forceCommunityRelatedRecords .slds-card__header-title |
