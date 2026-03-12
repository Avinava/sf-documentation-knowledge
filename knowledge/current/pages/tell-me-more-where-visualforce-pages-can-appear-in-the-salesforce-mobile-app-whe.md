---
title: "Tell Me More: Where Visualforce Pages Can Appear in the Salesforce Mobile App Where Visualforce Pages Can
                  Appear in the Salesforce Mobile App"
domain: pages
topic: tell-me-more-where-visualforce-pages-can-appear-in-the-salesforce-mobile-app-whe
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.619Z
estimatedTokens: 438
keywords: [Tell, Visualforce, Pages, Appear, Salesforce, Mobile, App, number, places, user]
---

# Tell Me More: Where Visualforce Pages Can Appear in the Salesforce Mobile App Where Visualforce Pages Can
                  Appear in the Salesforce Mobile App

> When you create a Visualforce page, you can make it available from a number of
            places in the user interface.

# Tell Me More: Where Visualforce Pages Can Appear in the Salesforce Mobile App Where Visualforce Pages Can Appear in the Salesforce Mobile App

When you create a Visualforce page, you can make it available from a number of places in the user interface.

-   The default navigation menu, called Mobile Only—available when you tap ![Salesforce mobile app navigation menu icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce1%2Fdeveloper%2Fimages%2Fmobile_navigation_menu_icon.png&folder=pages) in the navigation bar at the bottom of the screen

    ![Salesforce mobile app default navigation menu](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce1%2Fdeveloper%2Fimages%2Fmobile_navigation_menu.png&folder=pages)

-   Action bar and action menu—available from the top of any page that supports actions

    ![Create Quick Order action in the action menu](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce1%2Fdeveloper%2Fimages%2Fmobile_actions_menu.png&folder=pages)


You can also reference, and link to, another Visualforce page in your Visualforce markup using the supported navigation calls listed at [Navigation with the sforce.one Object](https://developer.salesforce.com/docs/atlas.en-us.salesforce1.meta/salesforce1/salesforce1_dev_jsapi_sforce_one.htm). Be sure to select Available for Lightning Experience, Experience Builder sites, and the mobile app for all pages in a multi-page process.

If a referenced page doesn’t have Available for Lightning Experience, Experience Builder sites, and the mobile app selected, it doesn’t prevent the referencing, or parent, page from appearing. However, when a user tries to access the non-mobile enabled page, they receive an “Unsupported Page” error message.
