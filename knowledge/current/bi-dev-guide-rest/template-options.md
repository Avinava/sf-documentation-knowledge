---
title: "Template Options"
domain: bi-dev-guide-rest
topic: template-options
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.642Z
estimatedTokens: 198
keywords: [Template, Options, action, performed, templated, Analytics, app]
---

# Template Options

> The template options used on the last action performed on a templated Analytics
  app.

# Template Options

The template options used on the last action performed on a templated Analytics app.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| app​Action | Connect​Wave​Template​App​Action​Enum | The last template action performed on the templated application. Valid values are:Auto​UpgradeCreateDecouple​AppOverlayRefresh​DataUpgrade | Medium, 37.0 | 37.0 |
| app​Action​Date | Date | The date and time the last action was performed. | Medium, 37.0 | 37.0 |
| app​Action​User | Wave​User | The user that performed the last action. | Medium, 37.0 | 37.0 |
| dynamic​Options | Map<String, Object> | A map of dynamic template options that can change from release to release. | Medium, 54.0 | 54.0 |

## Related Topics

- Wave​User (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_user.htm)
