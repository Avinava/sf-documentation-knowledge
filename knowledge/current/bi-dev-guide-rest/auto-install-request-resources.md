---
title: "Auto-Install Request Resources"
domain: bi-dev-guide-rest
topic: auto-install-request-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.133Z
estimatedTokens: 372
keywords: [Auto-Install, Resources, requests, Analytics, embedded, apps, run-time, implementations, templates, instead, user, interaction, they’re, managed, via]
---

# Auto-Install Request Resources

> Auto-Install requests are used to create, update, and delete Analytics embedded apps.
  Analytics embedded apps are run-time implementations of Analytics templates and instead of
  user interaction, they’re managed via auto-install requests.

# Auto-Install Request Resources

Auto-Install requests are used to create, update, and delete Analytics embedded apps. Analytics embedded apps are run-time implementations of Analytics templates and instead of user interaction, they’re managed via auto-install requests.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Auto-Install Requests List Resource | Returns a collection of auto-install requests for Analytics embedded apps, creates an auto-install request, or deletes groups of auto-install requests by a Analytics folder ID or a template API name. | GET POST DELETE | /wave​/auto-install-requests |
| Auto-Install Request Resource | Returns an auto-install request for an Analytics embedded app, updates, and deletes an auto-install request. | GET PATCH DELETE | /wave​/auto-install-requests​/<autoInstallRequestId> |

-   **[Auto-Install Requests List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests.htm)**
    Returns a collection of auto-install requests for Analytics embedded apps, creates an auto-install request, or deletes groups of auto-install requests by an Analytics folder ID or a template API name.
-   **[Auto-Install Request Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests_id.htm)**
    Returns an auto-install request for an Analytics embedded app, updates, and deletes an auto-install request.

## Related Topics

- Auto-Install Requests List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests.htm)
- Auto-Install Request Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests_id.htm)
