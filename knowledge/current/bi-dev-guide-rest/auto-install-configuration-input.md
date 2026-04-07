---
title: "Auto-Install Configuration Input"
domain: bi-dev-guide-rest
topic: auto-install-configuration-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:36:54.573Z
estimatedTokens: 125
keywords: [Auto-Install, Configuration, app]
---

> The configuration for a auto-install app.

# Auto-Install Configuration Input

The configuration for a auto-install app.

## Request parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| app​Configuration | Auto​Install​App​Configuration​Input | The configuration used to create or update the Analytics application. | Required | 50.0 |
| parent​Request​Ids | String[] | The collection of the parent auto-install request ids this request depends on. | Optional | 50.0 |

## Related Topics

- Auto​Install​App​Configuration​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_auto_install_app_config_input.htm)
