---
title: "Sample Design Scenarios for Group and Professional Editions"
domain: packagingGuide
topic: sample-design-scenarios-for-group-and-professional-editions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.797Z
estimatedTokens: 707
keywords: [Sample, Design, Scenarios, Group, Professional, Editions, help, understand, how, build]
---

# Sample Design Scenarios for Group and Professional Editions

> Here are some scenarios to help you understand when and how to build for Group and Professional
   Editions.

# Sample Design Scenarios for Group and Professional Editions

Here are some scenarios to help you understand when and how to build for Group and Professional Editions.

Scenario 1: You want to build an app that uses record types

Since record types aren’t available in Group Edition, decide if you want to support this edition. Assuming you do, you can build a base-managed package that doesn’t include record types. After uploading this managed package in a released state, you can install it into another Developer Edition org to start building the extension. Your extension can add record types that your Professional, Enterprise, Unlimited, and Performance Edition customers can install and use.

Scenario 2: You want to build an app with 80 custom objects

Typically this scenario presents a problem for Group and Professional Edition orgs because of their custom objects limit. However, if you make your app available on the AppExchange, it doesn’t count toward custom objects, tabs, and apps limits. So even if your app has 80 custom objects, it installs and works in Group and Professional Edition orgs.

Scenario 3: You want to build an app that makes Apex callouts to a web service

Apex doesn’t normally run in Group and Professional Editions. If you get your managed package authorized during the security review, your Apex executes as expected. For this scenario, you build your Apex callout to invoke your external service and then include this class in your package.

Scenario 4: You want to build an app that uses Campaigns

Campaigns are supported by default in Group Edition. For this scenario, you have two options.

-   Option 1 - Build a based-managed package that doesn’t reference Campaigns. in it’s complete, upload, and install it into another Developer Edition org. Build the Campaign functionality as an extension package. Now your Group Edition customers can install the base, while the rest can also install the extension to get extra features.
-   Option 2 - This option requires only one package if you use Dynamic Apex as the only reference to Campaigns (as described earlier) and do not include a custom field on the Campaign. Your app can then be installed in Group Edition orgs and higher. If Campaigns is in your customer’s edition, then your Dynamic Apex can manipulate Campaigns as expected.

Scenario 5: You want to build a composite app where your receive inbound API calls

You have a separate hosted app that you want to integrate with Salesforce, so you must make API calls to Group and Professional Edition customers. Such calls aren’t possible by default. However, if you’re an eligible partner, request a special API token that allows your SOAP calls to integrate with Group and Professional Edition orgs. Be sure to embed the Client ID in the SOAP header of your external code.
