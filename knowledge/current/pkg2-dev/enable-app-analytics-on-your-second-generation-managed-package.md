---
title: "Enable App Analytics on Your Second-Generation Managed Package"
domain: pkg2-dev
topic: enable-app-analytics-on-your-second-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.923Z
estimatedTokens: 284
keywords: [Enable, App, Analytics, Second-Generation, Managed, Package, Activate, AppExchange, 2GP, access, usage, logs, subscriber, snapshots, summaries]
---

# Enable App Analytics on Your Second-Generation Managed Package

> Activate AppExchange App Analytics on your second-generation (2GP) managed package to
  access AppExchange App Analytics package usage logs and subscriber snapshots. Package usage
  summaries are available by default.

# Enable App Analytics on Your Second-Generation Managed Package

Activate AppExchange App Analytics on your second-generation (2GP) managed package to access AppExchange App Analytics package usage logs and subscriber snapshots. Package usage summaries are available by default.

| Available in: Enterprise, Performance, Unlimited, and Developer Editions. |
| --- |


| User Permissions Needed |
| --- |
| To access packages and package versions: | Read on Packages, Package Versions |
| To request and retrieve AppExchange App Analytics data: | Create, Read, Edit, Delete, View All, and Modify All on the AppAnalyticsQueryRequest object |

To ensure that you’re running the latest version of Salesforce CLI and its plug-ins, run sf update and sf plugins update.

1.  Activate App Analytics on your managed 2GP package. sf package update --package "Your Package Alias" --enable-app-analytics

    To deactivate App Analytics on your managed 2GP package, run this CLI command. sf package update --package "Your Package Alias" --no-enable-app-analytics

2.  For any additional package that you want App Analytics data for, repeat step 1.
