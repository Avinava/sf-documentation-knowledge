---
title: "Auto-Install App Configuration Input"
domain: bi-dev-guide-rest
topic: auto-install-app-configuration-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.632Z
estimatedTokens: 489
keywords: [Auto-Install, App, Configuration, Input]
---

# Auto-Install App Configuration Input

> The configuration for an auto-install app.

# Auto-Install App Configuration Input

The configuration for an auto-install app.

## Request parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| app​Description | String | The description for the Analytics app. | Optional | 54.0 |
| app​Label | String | The label for the Analytics app. | Optional | 54.0 |
| app​Name | String | The developer name for the Analytics app. | Optional | 54.0 |
| auto​Share​With​Licensed​Users | Boolean | Indicates whether the Analytics app is automatically shared with users that are assigned the Analytics View Only Embedded App permission set (true) or not (false). | Required | 50.0 |
| auto​Share​With​Originator | Boolean | Indicates whether the Analytics app is automatically shared with the user that initiated the auto-install request (true) or not (false). | Required | 50.0 |
| data​Refresh​Schedule | Weekly​Scheduled​Item​Input | A weekly schedule to refresh the data for the app. | Optional | 59.0 |
| delete​App​On​Construction​Failure | Boolean | Indicates whether the Analytics app is deleted when a failure occurs on the WaveAppCreate request (true) or not (false). | Required | 50.0 |
| dynamic​Options | Map<Object, Object> | The map of dynamic options used to create or update the Analytics app.production​Type: valid values includeATF_3_0Classicruntime​Log​Entry​Level: valid values includeFineFinerFinestInfoSevereWarning | Required | 55.0 |
| fail​On​Duplicate​Names | Boolean | Indicates whether the Analytics app creation fails when another asset exists with the same developer name (true) or not (false). | Required | 50.0 |
| license​Attributes | License​Attributes​Input | The license type to use when creating the app. Honored only for WaveAppCreate requests. | Optional | 54.0 |
| values | Map<String, Object> | A map of app template variable values used to create or update the Analytics app. | Required | 50.0 |

## Related Topics

- Weekly​Scheduled​Item​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_weekly_scheduled_item_input.htm)
- License​Attributes​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_license_attributes_input.htm)
