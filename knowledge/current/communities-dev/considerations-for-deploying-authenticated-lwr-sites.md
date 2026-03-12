---
title: "Considerations for Deploying Authenticated LWR Sites"
domain: communities-dev
topic: considerations-for-deploying-authenticated-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:23.327Z
estimatedTokens: 614
keywords: [Considerations, Deploying, Authenticated, LWR, Sites, Beginning, Winter, ’23, new, created, Experience, Builder, Connect, API, don’t]
---

# Considerations for Deploying Authenticated LWR Sites

> Beginning in Winter ’23, new LWR sites created through Experience Builder or Connect API
  don’t include /s at the end of their URLs. URLs for authenticated LWR sites created before Winter
  ’23 still include /s, and this URL structure update impacts deployment if sandbox and production
  URLs don’t match. Learn which deployment scenarios are supported and how to resolve unsupported
  deployment errors related to /s.

# Considerations for Deploying Authenticated LWR Sites

Beginning in Winter ’23, new LWR sites created through Experience Builder or Connect API don’t include /s at the end of their URLs. URLs for authenticated LWR sites created before Winter ’23 still include /s, and this URL structure update impacts deployment if sandbox and production URLs don’t match. Learn which deployment scenarios are supported and how to resolve unsupported deployment errors related to /s.

| Available in: Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Developer, Performance, and Unlimited Editions |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=communities_dev)

#### Note

The described scenarios assume that sandbox and production are on the same version of Salesforce. Deploying a site from a newer version to an older version isn’t supported.

## Metadata API Deployments

-   Creating a site through Metadata API deployment is supported, whether the source site’s URL includes /s. If the source site’s URL includes /s, the new target site’s URL includes /s. If the source site’s URL doesn’t include /s, the new target site’s URL doesn’t include /s.
-   To update a site with Metadata API deployment, the source site’s URL and the target site’s URL must match. Both URLs must include /s, or neither URL can include /s.
-   To resolve a Metadata API deployment error related to /s, update your metadata bundle to add or remove /s from the source site’s URL. Ensure that the source site’s URL matches the target site’s URL. You can’t add /s to or remove /s from the target site’s URL.

## Change Set Deployments

-   Creating a site through change set deployment is supported, whether the source site’s URL includes /s. If the source site’s URL includes /s, the new target site’s URL includes /s. If the source site’s URL doesn’t include /s, the new target site’s URL doesn’t include /s.
-   To update a site with change set deployment, the source site’s URL and the target site’s URL must match. Both URLs must include /s, or neither URL can include /s.
-   To resolve a change set deployment error related to /s, rename either the source site or the target site through the API or Experience Builder. Renaming one of the sites creates a site instead of updating the target site. You can’t add /s to or remove /s from either the source site’s URL or the target site’s URL.
