---
title: "Protecting Your Intellectual Property"
domain: pkg1-dev
topic: protecting-your-intellectual-property
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.588Z
estimatedTokens: 394
keywords: [Protecting, Intellectual, custom, objects, links, reports, installed, items, revealed, installers, they, check, malicious, content, However]
---

# Protecting Your Intellectual Property

> The details of your custom objects, custom links, reports, and other installed items are
  revealed to installers so that they can check for malicious content. However, revealing an app’s
  components prevents developers from protecting some intellectual property.

# Protecting Your Intellectual Property

The details of your custom objects, custom links, reports, and other installed items are revealed to installers so that they can check for malicious content. However, revealing an app’s components prevents developers from protecting some intellectual property.

To protect your intellectual property, consider the following:

-   Only publish package components that are your intellectual property and that you have the rights to share.
-   After your components are available on AppExchange, you can’t recall them from anyone who has installed them.
-   The information in the components that you package and publish might be visible to customers. Use caution when adding your code to a formula, Visualforce page, or other component that you can’t hide in your app.
-   The code contained in an Apex class, trigger, Lightning, or Visualforce component that’s part of a managed package is obfuscated and can’t be viewed in an installing org. The only exceptions are methods declared as global. You can view global method signatures in an installing org. In addition, License Management Org users with the View and Debug Managed Apex permission can view their packages’ obfuscated Apex classes when logged in to subscriber orgs via the Subscriber Support Console.
-   If a custom setting is contained in a managed package, and the Visibility is specified as Protected, the custom setting isn’t contained in the list of components for the package on the subscriber’s org. All data for the custom setting is hidden from the subscriber.
