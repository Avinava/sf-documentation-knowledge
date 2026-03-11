---
title: "GitHub Custom Adapter for Salesforce Connect"
domain: apex-guide
topic: github-custom-adapter-for-salesforce-connect
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:46.785Z
keywords: [GitHub, Custom, Adapter, Salesforce, Connect, GitHubDataSourceConnection, Class, GitHubDataSourceProvider, See]
---

# GitHub Custom Adapter for Salesforce Connect

# GitHub Custom Adapter for Salesforce Connect

This example illustrates how to support indirect lookup relationships. An indirect lookup relationship links a child external object to a parent standard or custom object.

For this example to work, create a custom field on the Contact standard object. Name the custom field github\_username, make it a text field of length 39, and select the External ID and Unique attributes. Also, add https://api.github.com to your remote site settings.

## GitHubDataSourceConnection Class

```

```

## GitHubDataSourceProvider Class

```

```

#### See Also

-   [Adding Remote Site Settings](atlas.en-us.apexcode.meta/apexcode/apex_callouts_remote_site_settings.htm)