---
title: "Auto-Install Request Insert Input"
domain: bi-dev-guide-rest
topic: auto-install-request-insert-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.639Z
estimatedTokens: 381
keywords: [Auto-Install, Insert, Input]
---

# Auto-Install Request Insert Input

> The insert for an auto-install request.

# Auto-Install Request Insert Input

The insert for an auto-install request.

Properties

AutoInstallRequestInsertInput inherits properties from the abstract [BaseAutoInstallRequestInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_auto_install_request_input.htm "The base auto-install request input."). These base properties appear in AutoInstallRequestInsertInput alongside the properties defined explicitly in the following table.

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| configuration | Auto​Install​Configuration​Input | The auto-install request configuration. | Required | 50.0 |
| folder​Id | String | The Analytics application folder ID. | Required | 50.0 |
| request​Name | String | The name of the auto-install request. | Required | 50.0 |
| request​Type | Auto​Install​Request​Type​Enum | The auto-install request type. Valid values are:Org​Compatibility​CheckStart​DataflowWave​App​Auto​UpdateWave​App​CreateWave​App​DeleteWave​App​UpdateWave​Enable | Required | 50.0 |
| template​Api​Id | String | The Analytics template API name or ID. | Required | 50.0 |

#### See Also

-   [Auto-Install Requests List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests.htm "Returns a collection of auto-install requests for Analytics embedded apps, creates an auto-install request, or deletes groups of auto-install requests by an Analytics folder ID or a template API name.")

## Related Topics

- BaseAutoInstallRequestInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_base_auto_install_request_input.htm)
- Auto​Install​Configuration​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_auto_install_config_input.htm)
- Auto-Install Requests List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_autoinstallrequests.htm)
