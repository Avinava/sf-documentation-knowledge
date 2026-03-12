---
title: "Auto-Install Request Resource"
domain: bi-dev-guide-rest
topic: auto-install-request-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.130Z
estimatedTokens: 155
keywords: [Auto-Install, Resource, Analytics, embedded, app, updates, deletes]
---

# Auto-Install Request Resource

> Returns an auto-install request for an Analytics embedded app, updates, and deletes an
  auto-install request.

# Auto-Install Request Resource

Returns an auto-install request for an Analytics embedded app, updates, and deletes an auto-install request.

Resource URL

```

```

Formats

JSON

Available Version

50.0

HTTP Methods

GET PATCH DELETE

Response body for GET and PATCH

[Auto-Install Request](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_auto_install_request.htm "A auto-install request.")

Request body for PATCH

[Auto-Install Request Update Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_auto_install_request_update_input.htm "The update for an auto-install request.")

## Code Examples

```
/wave/auto-install-requests/<autoInstallRequestId>
```

## Related Topics

- Auto-Install Request (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_auto_install_request.htm)
- Auto-Install Request Update Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_auto_install_request_update_input.htm)
