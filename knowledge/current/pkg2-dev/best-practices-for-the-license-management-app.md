---
title: "Best Practices for the License Management App"
domain: pkg2-dev
topic: best-practices-for-the-license-management-app
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:26.163Z
estimatedTokens: 294
keywords: [Best, Practices, License, Management, App, Follow, LMA]
---

# Best Practices for the License Management App

> Follow these best practices when you use the License Management App (LMA).

# Best Practices for the License Management App

Follow these best practices when you use the License Management App (LMA).

-   To take advantage of entitlements that are unique to AppExchange partners, use your partner business org as your License Management Org.
-   Create a list view filter for leads created by installed packages. The filter helps your team separate subscriber-based leads from leads coming from other sources.
-   Use the API to find licensed users. The isCurrentUserLicensed method determines if a user has a license to a managed package. For more information, see the [Apex Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_userinfo.htm "HTML (New Window)").
-   Treat the LMA custom objects as read-only. Use the Modify License page to edit licenses. Don’t attempt to directly or programmatically edit license records.
-   The LMA automatically creates package, package version, and license records. Customizations, such as adding required custom fields or creating workflow rules, triggers, or validation rules that require custom fields, can prevent the LMA from working properly.
