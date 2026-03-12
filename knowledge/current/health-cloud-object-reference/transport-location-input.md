---
title: "Transport Location Input"
domain: health-cloud-object-reference
topic: transport-location-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.191Z
estimatedTokens: 173
keywords: [Transport, Location, Input, representation]
---

# Transport Location Input

> Input representation for Transport Location

# Transport Location Input

Input representation for Transport Location

Root XML tag

<transportLocation>

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| ambulanceTransportDistance | Double | Distance traveled during ambulance transport. Maps to: CareRequestItem.AmbulanceTransportDistance | No | 46.0 |
| ambulanceTransportReason | String | Reason for ambulance transport. Maps to: CareRequestItem.AmbulanceTransportReason | No | 46.0 |
| ambulanceTransportType | String | Type of ambulance transport. Maps to: CareRequestItem.AmbulanceTransportType | No | 46.0 |
| name | String | Name of the transport location. | Yes | 46.0 |
