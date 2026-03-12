---
title: "LoginAsEvent"
domain: sfFieldRef
topic: loginasevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.005Z
estimatedTokens: 498
keywords: [LoginAsEvent, tracks, admin, logs, another, user, org, Real-Time, Event, Monitoring, captures, events, admins, Experience, Cloud]
---

# LoginAsEvent

> LoginAsEvent tracks when an admin logs in as another user in your
			org. In Real-Time Event Monitoring, it captures events for org admins and Experience
			Cloud sites only. LoginAsEvent is a big object that stores the event data of
			LoginAsEventStream. This object is available in API version 46.0 and
		later.

# LoginAsEvent

LoginAsEvent tracks when an admin logs in as another user in your org. In Real-Time Event Monitoring, it captures events for org admins and Experience Cloud sites only. LoginAsEvent is a big object that stores the event data of LoginAsEventStream. This object is available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoginAsEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Application | Application | string |  | 255 |  |  |
| Browser | Browser | string |  | 64 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DelegatedOrganizationId | Delegated Organization Id | string |  | 18 |  |  |
| DelegatedUsername | Delegated Username | string |  | 128 |  |  |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| Id | LoginAs Event ID | id |  | 18 |  |  |
| LoginAccessChangeExpDate | Login Access Change Expiration Date | datetime |  |  |  |  |
| LoginAccessChangeGranteeName | Login Access Change Grantee Name | string |  | 255 |  |  |
| LoginAccessChangeGranteeType | Login Access Change Grantee Type | string |  | 255 |  |  |
| LoginAsCategory | LoginAs Category | picklist |  | 255 |  |  |
| LoginHistoryId | Login History ID | reference |  | 18 |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| LoginType | Login Type | picklist |  | 255 |  |  |
| Platform | Platform | string |  | 255 |  |  |
| SessionKey | Session Key | string |  | 24 |  |  |
| SessionLevel | Session Level | picklist |  | 255 |  |  |
| SourceIp | Source IP | string |  | 255 |  |  |
| TargetUrl | Target URL | string |  | 1000 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| UserType | User Type | picklist |  | 255 |  |  |
| Username | Username | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
