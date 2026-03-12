---
title: "Resources Input"
domain: health-cloud-object-reference
topic: resources-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.075Z
estimatedTokens: 224
keywords: [Resources, Input, representation, getting, appointment, slot]
---

# Resources Input

> Input representation for getting appointment slot resources.

# Resources Input

Input representation for getting appointment slot resources.

JSON Example

{ "resources": \[ { "resourceId": "string", "serviceTerritoryId": "003xx000000Y4xxYCD", "serviceResourceId": "c51xx000000B1xxBCI", "assetCategory": "string", "serviceTypes": "Provider" } \] }

Properties

| Property Name | Type | Description | Required or Optional | available version |
| --- | --- | --- | --- | --- |
| resource​Id | String | ID of the Healthcare Practitioner Facility for Provider and Asset ID for the Asset. | Optional | 65.0 |
| service​Territory​Id | String | ID of the Service Territory. | Optional | 65.0 |
| service​Resource​Id | String | ID of the service resource. | Optional | 65.0 |
| assest​Category | String | Asset category of the resource. | Optional | 65.0 |
| resource​Type | String | Type of the resource. Possible values are:provider​device​ | Optional | 65.0 |
