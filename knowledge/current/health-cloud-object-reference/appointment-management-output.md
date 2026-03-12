---
title: "Appointment Management Output"
domain: health-cloud-object-reference
topic: appointment-management-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.391Z
estimatedTokens: 179
keywords: [Appointment, Management, Output, representation]
---

# Appointment Management Output

> Output representation for appointment management.

# Appointment Management Output

Output representation for appointment management.

JSON example

{ "id": "08pxx0000004KhxxAE", "isSuccess": true, "status": "scheduled", "error": {} }

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Array | List of errors returned. This field is populated if isSuccess is false. | Small, 65.0 | 65.0 |
| id | String | ID of the appointment. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the appointment is created successfully (true) or not (false). | Small, 65.0 | 65.0 |
| status | String | Status of the appointment such as scheduled, rejected. | Small, 65.0 | 65.0 |
