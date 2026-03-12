---
title: "CredentialStuffingEvent"
domain: sfFieldRef
topic: credentialstuffingevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.979Z
estimatedTokens: 405
keywords: [CredentialStuffingEvent, Tracks, user, successfully, logs, Salesforce, identified, credential, stuffing, attack, refers, large-scale, automated, login, requests]
---

# CredentialStuffingEvent

> Tracks when a user successfully logs into Salesforce during an
			identified credential stuffing attack. Credential stuffing refers to large-scale
			automated login requests using stolen user credentials. This object is available in
		API version 49.0 and later.

# CredentialStuffingEvent

Tracks when a user successfully logs into Salesforce during an identified credential stuffing attack. Credential stuffing refers to large-scale automated login requests using stolen user credentials. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CredentialStuffingEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AcceptLanguage | Accept-Language Header | string |  | 255 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EvaluationTime | Evaluation Time | double |  |  | 18 | 0 |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event ID | string |  | 80 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| LoginType | Login Type | picklist |  | 255 |  |  |
| LoginUrl | Login URL | string |  | 255 |  |  |
| PolicyId | Transaction Security Policy ID | reference |  | 18 |  |  |
| PolicyOutcome | Policy Outcome | picklist |  | 255 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| Score | Score | double |  |  | 12 | 6 |
| SessionKey | Session Key | string |  | 24 |  |  |
| SourceIp | Source IP Address | string |  | 255 |  |  |
| Summary | Summary | textarea |  | 1000 |  |  |
| UserAgent | User Agent | textarea |  | 1000 |  |  |
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
