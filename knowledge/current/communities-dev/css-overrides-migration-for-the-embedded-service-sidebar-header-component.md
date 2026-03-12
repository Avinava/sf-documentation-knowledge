---
title: "CSS Overrides Migration for the Embedded Service Sidebar Header Component"
domain: communities-dev
topic: css-overrides-migration-for-the-embedded-service-sidebar-header-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.513Z
estimatedTokens: 205
keywords: [CSS, Overrides, Migration, Embedded, Service, Sidebar, Component, plan, continue, custom, migrate, forward, template, Background, Color]
---

# CSS Overrides Migration for the Embedded Service Sidebar Header Component

> If you plan to continue using custom CSS overrides, migrate them forward
    after you update the template.

# CSS Overrides Migration for the Embedded Service Sidebar Header Component

If you plan to continue using custom CSS overrides, migrate them forward after you update the template.

This topic identifies selector changes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

-   Use custom CSS sparingly since template updates don’t always support customizations.
-   Custom CSS is now shared across all your site pages. If you used custom CSS for Login pages, copy it and close the CSS editor. Then navigate to a non-Login page, reopen the editor, and add the custom CSS.

## Header Background Color

| Previous Selector | New Selector |
| --- | --- |
| .sidebarHeader { background-color: #aaa; } | .embeddedServiceSidebar.sidebarHeader { background-color:#aaa; } |

## Code Examples

```
.embeddedServiceSidebar.sidebarHeader {
background-color:#aaa;
}
```
