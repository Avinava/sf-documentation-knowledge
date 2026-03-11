---
title: "ConnectApi.CdpSegmentInput"
domain: apex-reference
topic: connectapicdpsegmentinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.951Z
keywords: [ConnectApi.CdpSegmentInput]
---

# ConnectApi.CdpSegmentInput

# ConnectApi.CdpSegmentInput

Segment input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalMetadata | Map<String, String> | Map of additional metadata. | Optional for creating a segmentNot supported for updating a segment | 55.0 |
| dataSpace | String | Segment dataspace. In API version 59.0 and later, this property is not available. Use the dataspace request parameter instead. | Optional | 57.0–58.0 |
| description | String | Segment description. | Optional | 55.0 |
| developerName | String | Segment developer name. | Required for creating a segmentNot supported for updating a segment | 55.0 |
| displayName | String | Segment display name. | Optional | 57.0 |
| includeDbt | ConnectApi.​CdpSegment​DbtInput | Segment data build tool. | Required | 55.0 |
| publishSchedule | ConnectApi.​PublishSchedule | Publish refresh schedule. Values are:One—Refreshes every hour. Used to rapidly publish UI and DBT-based segments.Four—Refreshes every four hours. Used to rapidly publish UI and DBT-based segments.Twelve—Refreshes every twelve hours.TwentyFour—Refreshes every twenty-four hours. | Optional | 55.0 |
| publishSchedule​EndDate | String | Date indicating the end of the publish schedule. | Optional if publishSchedule isn’t specified | 55.0 |
| publishSchedule​StartDateTime | String | Datetime indicating the start of the publish schedule. | Optional if publishSchedule isn’t specified | 55.0 |
| segmentOnApiName | String | API name of the SegmentOn entity. | Optional | 57.0 |
| segmentType | ConnectApi.​SegmentType | Type of segment. Value is:Dbt—Data build toolAfter a segment is created, the segment type can’t be changed. | Required for creating a segmentNot supported for updating a segment | 55.0 |