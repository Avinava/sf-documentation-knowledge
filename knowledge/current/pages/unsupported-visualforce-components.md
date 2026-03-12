---
title: "Unsupported Visualforce Components"
domain: pages
topic: unsupported-visualforce-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.515Z
estimatedTokens: 302
keywords: [Unsupported, Visualforce, Components, Here’s, aren’t, Salesforce, mobile, app, shouldn’t, pages]
---

# Unsupported Visualforce Components

> Here’s a list of Visualforce components that aren’t supported in the Salesforce mobile
    app, and shouldn’t be used in Visualforce pages that will be used with the Salesforce mobile
    app.

# Unsupported Visualforce Components

Here’s a list of Visualforce components that aren’t supported in the Salesforce mobile app, and shouldn’t be used in Visualforce pages that will be used with the Salesforce mobile app.

-   <analytics:reportChart\>
-   <apex:detail\>
-   <apex:emailPublisher\>
-   <apex:enhancedList\>
-   <apex:flash\>
-   <apex:inputField\> for field types that use a widget for input, instead of a basic form field
-   <apex:listViews\>
-   <apex:logCallPublisher\>
-   <apex:relatedList\>
-   <apex:scontrol\>
-   <apex:sectionHeader\>
-   <apex:selectList\> for picklist fields
-   <apex:tabPanel\> (and, as a consequence, <apex:tab\>)
-   <apex:vote\>

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pages)

#### Warning

Embedded Visualforce pages—that is, those added to a page layout—that contain an <apex:enhancedList\> component may cause the Salesforce mobile app to crash on iOS.

Standard components outside the apex namespace, for example, <liveagent:\*\>, <chatter:\*\>, and so on, aren’t supported in the app.

Custom components can be used in Visualforce in the app, as long as they themselves don’t use unsupported components.
