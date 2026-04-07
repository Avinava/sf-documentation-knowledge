---
title: "Access Control in Group and Professional Editions"
domain: packagingGuide
topic: access-control-in-group-and-professional-editions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:46.636Z
estimatedTokens: 161
keywords: [Control, Group, Professional, Editions, Edition, doesn’t, support, field-level, security, profiles, manage, layout, instead, customers, install, app, they, can’t, define, Ensure, design, works]
---

> Group Edition doesn’t support field-level security or custom profiles. You can manage field-level
         security by using the page layout for each object instead. When customers install your app,
         they can’t define which profiles have access to what. Ensure that your design works for the


# Access Control in Group and Professional Editions

Group Edition doesn’t support field-level security or custom profiles. You can manage field-level security by using the page layout for each object instead. When customers install your app, they can’t define which profiles have access to what. Ensure that your design works for the Standard User Profile. Permission sets can be installed but not updated in Group and Professional Edition orgs.

Because the page layout handles field level security, add any fields you want to be visible to the page layout. For fields to be accessible via the API or Visualforce, add them to the page layout.
