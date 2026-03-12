---
title: "Auto-Install App Configuration"
domain: bi-dev-guide-rest
topic: auto-install-app-configuration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:03.985Z
estimatedTokens: 404
keywords: [Auto-Install, App, Configuration]
---

# Auto-Install App Configuration

> The configuration for a auto-install app.

# Auto-Install App Configuration

The configuration for a auto-install app.

## Properties

| Parameter Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| app​Description | String | The description for the app. | Big, 54.0 | 54.0 |
| app​Label | String | The label for the app. | Big, 54.0 | 54.0 |
| app​Name | String | The developer name for the app. | Big, 54.0 | 54.0 |
| auto​Share​With​Licensed​Users | Boolean | Indicates whether the Analytics application is automatically shared with users that are assigned the Analytics View Only Embedded App permission set (true) or not (false). | Small, 50.0 | 50.0 |
| auto​Share​With​Originator | Boolean | Indicates whether the Analytics application is automatically shared with the user that initiated the auto-install request (true) or not (false). | Small, 50.0 | 50.0 |
| delete​App​On​Construction​Failure | Boolean | Indicates whether the Analytics application is deleted when a failure occurs on the WaveAppCreate request (true) or not (false). | Small, 50.0 | 50.0 |
| fail​On​Duplicate​Names | Boolean | Indicates whether the Analytics application creation fails when another asset exists with the same developer name (true) or not (false). | Small, 50.0 | 50.0 |
| license​Attributes | License​Attributes | The license type to use to create the app with auto-install. This property is only used for WaveAppCreate requests. | Small, 58.0 | 58.0 |
| values | Map<String, Object> | A map of application template variable values used to create or update the Analytics application. | Small, 50.0 | 50.0 |

## Related Topics

- License​Attributes (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_license_attributes.htm)
