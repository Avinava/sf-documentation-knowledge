---
title: "Sharing Visualforce Pages Between Mobile and Desktop"
domain: pages
topic: sharing-visualforce-pages-between-mobile-and-desktop
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.521Z
estimatedTokens: 416
keywords: [Sharing, Visualforce, Pages, Mobile, Desktop, Revise, appear, Salesforce, app, full, site, support, environments, includes, custom]
---

# Sharing Visualforce Pages Between Mobile and Desktop

> Revise Visualforce pages that appear in both the Salesforce mobile app and in the full
    Salesforce site to support both environments. This includes Visualforce pages used as custom
    actions and Visualforce pages added to standard page layouts.

# Sharing Visualforce Pages Between Mobile and Desktop

Revise Visualforce pages that appear in both the Salesforce mobile app and in the full Salesforce site to support both environments. This includes Visualforce pages used as custom actions and Visualforce pages added to standard page layouts.

Visualforce pages that need to work in both environments include:

-   Pages used as custom actions. Custom actions appear in the action bar in the Salesforce mobile app, and in the publisher menu in the full Salesforce site.
-   Pages added to normal page layouts, when Available for Lightning Experience, Experience Builder sites, and the mobile app is enabled for the page.
-   Custom Visualforce buttons or links added to normal page layouts.
-   Standard button overrides with Visualforce pages for the New, Edit, View, Delete, and Clone actions. Overriding standard list and tab controls isn’t supported in the app. Button overrides won’t appear in the app unless Available for Lightning Experience, Experience Builder sites, and the mobile app is enabled for the page.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    Standard buttons that are overridden with a Visualforce page disappear from record detail pages and record lists in the app if Available for Lightning Experience, Experience Builder sites, and the mobile app isn’t selected for the Visualforce page that overrides the corresponding button.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Visualforce pages and custom iframes aren’t supported in Lightning Experience on iPad Safari.
