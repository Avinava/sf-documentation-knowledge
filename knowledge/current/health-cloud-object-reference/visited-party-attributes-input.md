---
title: "Visited Party Attributes Input"
domain: health-cloud-object-reference
topic: visited-party-attributes-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:41.106Z
estimatedTokens: 134
keywords: [Visited, Party, Attributes, visiting, medical, device, visit, surgeon, anesthesiologist]
---

> Input representation of the visiting party. For example, for a medical
      device visit, the visiting party can be the surgeon and the anesthesiologist.

# Visited Party Attributes Input

Input representation of the visiting party. For example, for a medical device visit, the visiting party can be the surgeon and the anesthesiologist.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| primary | Boolean | Indicates whether the contact of the visited party is a primary contact (true) or not (false). | Optional | 55.0 |
| user | String | ID of the person from the customer account being visited. | Optional | 55.0 |
