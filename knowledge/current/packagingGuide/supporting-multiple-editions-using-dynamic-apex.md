---
title: "Supporting Multiple Editions using Dynamic Apex"
domain: packagingGuide
topic: supporting-multiple-editions-using-dynamic-apex
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.772Z
estimatedTokens: 307
keywords: [Supporting, Multiple, Editions, Dynamic, Apex, SOQL, DML, it’s, possible, managed, package, plan, support, having, extension]
---

# Supporting Multiple Editions using Dynamic Apex

> Using dynamic Apex, dynamic SOQL, and dynamic DML, it’s possible to create one managed
   package for all editions you plan to support without having to use extension packages. Your app
   behavior can change dynamically based on the features available in your customer's edition. This
   is useful w

# Supporting Multiple Editions using Dynamic Apex

Using dynamic Apex, dynamic SOQL, and dynamic DML, it’s possible to create one managed package for all editions you plan to support without having to use extension packages. Your app behavior can change dynamically based on the features available in your customer's edition. This is useful when designing an app with the intent to support multiple editions.

Make sure that Apex, workflows, etc. in your package do not contain any strongly-typed reference to a feature that isn't supported by GE/PE. This can include adding a custom field on an unsupported standard object, such as Campaigns, or making an Apex reference to features like multi-currency or territory management. When you reference a feature in your package not supported by GE/PE, this package dependency will cause the installation to fail.

Instead, if you use dynamic Apex to first check if these features are available before referencing them, you can install your managed package in GE/PE. The important piece to consider is you must code your Dynamic Apex in a way that can support both use cases. This ensures that if your customer doesn’t have a specific feature or object, your app will still function.
