---
title: "Bulk Presentation Input"
domain: life-sciences-dev-guide
topic: bulk-presentation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.087Z
estimatedTokens: 389
keywords: [Bulk, Presentation, Input, representation]
---

# Bulk Presentation Input

> Input representation for bulk presentation.

# Bulk Presentation Input

Input representation for bulk presentation.

Properties

| Property Name | Type | Description | Required | Available version |
| --- | --- | --- | --- | --- |
| activation​Date | Datetime | Date when the presentation becomes active. If no value is provided, the default is the current date and time. | Optional | 65.0 |
| custom​Fields | Object | Map of custom field names and their values for the presentation. | Optional | 65.0 |
| deactivation​Date | Datetime | Date when the presentation becomes inactive. | Optional | 65.0 |
| enable​Double​TapZoom | Boolean | Indicates if double-tap zoom is enabled for the presentation (true) or not (false). The default value is false. | Optional | 65.0 |
| enable​Pinch​Zoom | Boolean | Indicates if pinch zoom is enabled for the presentation (true) or not (false). | Optional | 65.0 |
| id | String | ID of the presentation. | Optional | 65.0 |
| name | String | Name of the presentation. | Required | 65.0 |
| player​Gesture | String | Player gesture type. Possible values are:TAPTOPTAPBOTTOMSWIPEUPSWIPEDOWN. | Optional | 65.0 |
| public​Content​Name | String | Public name for the content. | Optional | 65.0 |
| public​Content​Url | String | URL for the public content. | Optional | 65.0 |
| sendBy​Email | Boolean | Indicates if the presentation can be sent by email (true) or not (false). | Optional | 65.0 |
| topics | List<String> | List of topics associated with the presentation. TopicAssignment must be enabled for Presentation before using this field. | Optional | 65.0 |
