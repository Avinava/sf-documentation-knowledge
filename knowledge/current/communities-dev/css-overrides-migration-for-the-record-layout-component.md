---
title: "CSS Overrides Migration for the Record Layout Component"
domain: communities-dev
topic: css-overrides-migration-for-the-record-layout-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.394Z
estimatedTokens: 625
keywords: [CSS, Overrides, Migration, Record, Layout, Component, plan, continue, custom, migrate, forward, template, Full, Title, Row]
---

# CSS Overrides Migration for the Record Layout Component

> If you plan to continue using custom CSS overrides, migrate them forward
    after you update the template.

# CSS Overrides Migration for the Record Layout Component

If you plan to continue using custom CSS overrides, migrate them forward after you update the template.

This topic identifies selector changes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

-   Use custom CSS sparingly since template updates don’t always support customizations.
-   Custom CSS is now shared across all your site pages. If you used custom CSS for Login pages, copy it and close the CSS editor. Then navigate to a non-Login page, reopen the editor, and add the custom CSS.

## Full Record Layout

| Previous Selector | New Selector |
| --- | --- |
| .forceRecordLayout.forceRecordLayout.forcePageBlock | force-record-layout2force-record-layout-block |

## Section

| Previous Selector | New Selector |
| --- | --- |
| .forceRecordLayout .full.forcePageBlockSectionView.forceRecordLayout .full.forcePageBlockSection.forceRecordLayout .full.forcePageBlockSectionView.forcePageBlockSection.forceRecordLayout .forcePageBlockSectionView.forceRecordLayout .forcePageBlockSection.forceRecordLayout .forcePageBlockSectionView.forcePageBlockSection | force-record-layout2 force-record-layout-section |

## Section Title

| Previous Selector | New Selector |
| --- | --- |
| .forceRecordLayout .full.forcePageBlockSection h3 | force-record-layout2 force-record-layout-section h3 |

## Section Row

| Previous Selector | New Selector |
| --- | --- |
| .forceRecordLayout .full.forcePageBlockSectionRow.forceRecordLayout .forcePageBlockSectionRow | force-record-layout2 force-record-layout-row |

## Section Item

| Previous Selector | New Selector |
| --- | --- |
| .forceRecordLayout .full.forcePageBlockItem.forcePageBlockItemView.forceRecordLayout .full.forcePageBlockItem.forceRecordLayout .full.forcePageBlockItemView.forceRecordLayout .forcePageBlockItem.forceRecordLayout .forcePageBlockItemView.forceRecordLayout .forcePageBlockItem.forcePageBlockItemView | force-record-layout2 force-record-layout-item |

## Section Item Label

| Previous Selector | New Selector |
| --- | --- |
| .forceRecordLayout .slds-form-element__label | force-record-layout2 .slds-form-element__label |

## Section Item Value

| Previous Selector | New Selector |
| --- | --- |
| .forceRecordLayout .itemBody | force-record-layout2 .slds-form-element__static |

## Section Item Value Link

| Previous Selector | New Selector |
| --- | --- |
| .forceRecordLayout a | force-record-layout2 a |
