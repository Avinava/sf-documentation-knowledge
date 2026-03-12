---
title: "Using Apex in Group and Professional Editions"
domain: packagingGuide
topic: using-apex-in-group-and-professional-editions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.766Z
estimatedTokens: 330
keywords: [Apex, Group, Professional, Editions, app, contain, business, logic, classes, triggers, email, services, etc, written, general]
---

# Using Apex in Group and Professional Editions

> Your app can contain business logic such as classes, triggers, email services, etc. written in
   Apex. As a general rule, Apex is not supported in GE/PE, so it will not run in these
   editions. However, Apex developed as part of an ISV app and included in a managed package can run
   in GE/PE, eve

# Using Apex in Group and Professional Editions

Your app can contain business logic such as classes, triggers, email services, etc. written in Apex. As a general rule, Apex is not supported in GE/PE, so it will not run in these editions. However, Apex developed as part of an ISV app and included in a managed package can run in GE/PE, even though those editions do not support Apex by default.

You must be an eligible partner with Salesforce and your app has to pass the security review. The appropriate permissions will automatically be enabled after you pass the security review.

Here are some important considerations for using Apex in GE/PE.

-   GE/PE customers can’t create or modify Apex in your app; they can only run the existing Apex.
-   Your Apex code should not depend on features and functionality that exist only in DE, EE, UE, or PXE, or your app will fail to install.
-   Make sure to use REST if you plan to expose an Apex method as a Web service. Apex classes that have been exposed as a SOAP Web service can’t be invoked from an external web app in GE/PE.
-   Using Apex to make Web service callouts is allowed in GE/PE. For instance, if you’re planning to make a Web service callout to an external Web service, as long as the managed package is authorized, these classes will function in GE/PE.
