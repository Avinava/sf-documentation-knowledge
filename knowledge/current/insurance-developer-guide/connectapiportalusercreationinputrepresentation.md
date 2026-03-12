---
title: "ConnectApi.PortalUserCreationInputRepresentation"
domain: insurance-developer-guide
topic: connectapiportalusercreationinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.329Z
estimatedTokens: 192
keywords: [Input, representation, containing, creating, portal, user]
---

# ConnectApi.PortalUserCreationInputRepresentation

> Input representation containing the details for creating a portal user.

# ConnectApi.PortalUserCreationInputRepresentation

Input representation containing the details for creating a portal user.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| emailEncodingKey | String | Email encoding for the user, such as UTF-8 or ISO-8859-1. | Required | 65.0 |
| languageLocaleKey | String | Language for the user, such as en_US for U.S. English. | Required | 65.0 |
| localeSidKey | String | Locale for the user, which affects the format of dates, times, and numbers. | Required | 65.0 |
| profileId | String | ID of the profile to assign to the new portal user. | Required | 65.0 |
| timeZoneSidKey | String | Time zone for the user, such as America or Los_Angeles. | Required | 65.0 |
