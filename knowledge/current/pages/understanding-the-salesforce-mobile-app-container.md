---
title: "Understanding the Salesforce Mobile App Container"
domain: pages
topic: understanding-the-salesforce-mobile-app-container
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:23.839Z
estimatedTokens: 1060
keywords: [Understanding, Salesforce, Mobile, App, Container, Classic, Visualforce, “owns”, environment, application, Lightning, Experience, runs, inside, iframe]
---

# Understanding the Salesforce Mobile App Container

> In Salesforce Classic, Visualforce “owns” the page,
   the request, and the environment. Visualforce is the application container. But in the Salesforce
   mobile app and Lightning Experience, Visualforce runs inside an iframe that’s inside the larger
    /lightning container.

# Understanding the Salesforce Mobile App Container

In Salesforce Classic, Visualforce “owns” the page, the request, and the environment. Visualforce is the application container. But in the Salesforce mobile app and Lightning Experience, Visualforce runs inside an iframe that’s inside the larger /lightning container.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Are the Salesforce mobile app and Lightning Experience containers the same? Yes and no. Both the Salesforce mobile app and Lightning Experience containers are offshoots of the /lightning container and code written for one container works in the other. But the behind-the-scenes workings of the containers are a bit different. the Salesforce mobile app runs on a mobile device in a mobile browser, while the Lightning Experience app runs on a desktop machine in a standard desktop browser. We optimize the version of /lightning that’s sent to each context, and the browser environment in which it runs is also different enough to notice. In short, treat them as different containers with mostly similar capabilities.

## The Outer Container and Inner iframe

The outer Salesforce app container is a single-page application accessed at the /lightning URL. The /lightning page loads, its code starts up, and that application code takes over the environment.

The Visualforce page runs inside an HTML iframe, which essentially creates a separate browser window from the main /lightning browsing content.

Salesforce app is the parent context, and the Visualforce page is the child context. That means that the Visualforce page works under the constraints of the /lightning outer container, while still being isolated to the context of the iframe.

## Visualforce for Salesforce App Code Considerations

When possible, create Visualforce pages that behave correctly no matter the user interface context. Usually, your Visualforce code written for Salesforce Classic “just works” in the Salesforce mobile app. However, for certain situations, there are a few changes to make in your Visualforce pages for mobile because of the container.

## Security Considerations

Possible security elements affected include:

-   Session maintenance and renewal
-   Authentication
-   Cross-domain requests
-   Embedding restrictions

In particular, take note of session maintenance, or managing the tokens your browser uses in place of entering a username and password for every request. You often need to access the current session using the global variable $Api.Session\_ID. $Api.Session\_ID returns different values depending on the domain of the request, and the Salesforce mobile app and Visualforce pages are served from different domains. Because the session ID inside the Visualforce iframe is different than the session ID outside, in the Salesforce mobile app container, this may change how you manage session IDs.

## Scope Considerations

The following scope elements may require adjustments:

-   DOM access and modification
-   JavaScript scope, visibility, and access
-   JavaScript global variables such as window.location

Simply put, the JavaScript code in your Visualforce page can affect only elements in the iframe’s browser context, not the parent context.

## Features to Avoid in the Salesforce Mobile App Container

The Salesforce mobile app container prevents a select number of Visualforce components from functioning as expected in the Salesforce mobile app.

-   Avoid using <apex:iframe\> on a Visualforce page within the Salesforce mobile app container. Only use this tag if you really understand iframes and how they affect the DOM and JavaScript.
-   Avoid using elements like contentWindow or window.parent to access the parent browser context, because Visualforce and the Salesforce mobile app are served from different domains.
-   Avoid setting window.location directly, because the Visualforce iframe doesn’t have direct access to the window.location.
-   Avoid using hard-coded URLs to Salesforce resources built with a static pattern like link = '/' + accountId + '/e'. Instead, in Visualforce markup, use {!URLFOR($Action.Contact.Edit, recordId)} and in JavaScript, use navigateToSObject(recordId).
