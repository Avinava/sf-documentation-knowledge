---
title: "Access or Permission Issues"
domain: pages
topic: access-or-permission-issues
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.526Z
estimatedTokens: 286
keywords: [Access, Permission, Issues, affect, pages, records, users, Salesforce, app]
---

# Access or Permission Issues

> Access and permission issues affect which pages and records your users see in the
  Salesforce app.

# Access or Permission Issues

Access and permission issues affect which pages and records your users see in the Salesforce app.

| Issue | Solution |
| --- | --- |
| If High Assurance session settings (multi-factor authentication) are enabled at the user profile level, users can’t access Visualforce content. Instead of Visualforce content, users see the error message "You can't view this page, either because you don't have permission or because the page isn't supported on mobile devices." This issue is exclusive to Salesforce for iOS and Salesforce for Android. | Disable High Assurance on the user profile and log in again. Enable High Assurance at the Salesforce connected app level instead of the user profile level to continue to enforce multi-factor authentication. |
| Experience Cloud site users can’t access Visualforce overrides on the convert action for leads in the app. Instead, they see the error message "You can't view this page, either because you don't have permission or because the page isn't supported on mobile devices." | Create a separate Visualforce action for converting leads using the same Visualforce page. |
