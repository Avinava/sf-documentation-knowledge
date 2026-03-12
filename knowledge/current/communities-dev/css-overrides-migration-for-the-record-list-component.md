---
title: "CSS Overrides Migration for the Record List Component"
domain: communities-dev
topic: css-overrides-migration-for-the-record-list-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.321Z
estimatedTokens: 356
keywords: [CSS, Overrides, Migration, Record, Component, plan, continue, custom, migrate, forward, template, View, Button, Bar, Buttons]
---

# CSS Overrides Migration for the Record List Component

> If you plan to continue using custom CSS overrides, migrate them forward
    after you update the template.

# CSS Overrides Migration for the Record List Component

If you plan to continue using custom CSS overrides, migrate them forward after you update the template.

This topic identifies selector changes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

-   Use custom CSS sparingly since template updates don’t always support customizations.
-   Custom CSS is now shared across all your site pages. If you used custom CSS for Login pages, copy it and close the CSS editor. Then navigate to a non-Login page, reopen the editor, and add the custom CSS.

## List View Button Bar

| Previous Selector | New Selector |
| --- | --- |
| .forceListViewManagerHeader .forceListViewManagerButtonBar | .forceListViewManagerHeader force-list-view-manager-button-bar |

## List View Button Bar Buttons

| Previous Selector | New Selector |
| --- | --- |
| .forceListViewManagerHeader .forceListViewManagerButtonBar button | .forceListViewManagerHeader force-list-view-manager-button-bar button |

## List View Status Information

| Previous Selector | New Selector |
| --- | --- |
| .forceListViewManagerHeader .test-listViewStatusInfo | .forceListViewManagerHeader force-list-view-manager-status-info |

## Picker Trigger Link

| Previous Selector | New Selector |
| --- | --- |
| .forceListViewManagerHeader .triggerLink | .forceListViewManagerHeader .triggerLink .slds-button |
