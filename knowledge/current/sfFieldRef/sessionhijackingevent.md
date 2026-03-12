---
title: "SessionHijackingEvent"
domain: sfFieldRef
topic: sessionhijackingevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.724Z
estimatedTokens: 550
keywords: [SessionHijackingEvent, Tracks, unauthorized, users, gain, ownership, Salesforce, user’s, session, stolen, identifier, detect, event, evaluates, how]
---

# SessionHijackingEvent

> Tracks when unauthorized users gain ownership of a Salesforce user’s
			session with a stolen session identifier. To detect such an event, Salesforce evaluates
			how significantly a user’s current browser fingerprint diverges from the previously
			known fingerprint using a probabilistically inferred significance of change. This
		object is available in API version 49.0 and later.

# SessionHijackingEvent

Tracks when unauthorized users gain ownership of a Salesforce user’s session with a stolen session identifier. To detect such an event, Salesforce evaluates how significantly a user’s current browser fingerprint diverges from the previously known fingerprint using a probabilistically inferred significance of change. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see SessionHijackingEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrentIp | Current IP Address | string |  | 39 |  |  |
| CurrentPlatform | Current Platform | string |  | 255 |  |  |
| CurrentScreen | Current Screen | string |  | 255 |  |  |
| CurrentUserAgent | Current User Agent | textarea |  | 1000 |  |  |
| CurrentWindow | Current Window | string |  | 255 |  |  |
| EvaluationTime | Evaluation Time | double |  |  | 18 | 0 |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event ID | string |  | 80 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| PolicyId | Transaction Security Policy ID | reference |  | 18 |  |  |
| PolicyOutcome | Policy Outcome | picklist |  | 255 |  |  |
| PreviousIp | Previous IP Address | string |  | 39 |  |  |
| PreviousPlatform | Previous Platform | string |  | 255 |  |  |
| PreviousScreen | Previous Screen | string |  | 255 |  |  |
| PreviousUserAgent | Previous User Agent | textarea |  | 1000 |  |  |
| PreviousWindow | Previous Window | string |  | 255 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| Score | Score | double |  |  | 12 | 6 |
| SecurityEventData | Event Data | textarea |  | 10000 |  |  |
| SessionKey | Session Key | string |  | 24 |  |  |
| SourceIp | Source IP Address | string |  | 255 |  |  |
| Summary | Summary | textarea |  | 1000 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| Username | Username | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
