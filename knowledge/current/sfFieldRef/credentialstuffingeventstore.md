---
title: "CredentialStuffingEventStore"
domain: sfFieldRef
topic: credentialstuffingeventstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.989Z
estimatedTokens: 504
keywords: [CredentialStuffingEventStore, Tracks, user, successfully, logs, Salesforce, identified, credential, stuffing, attack, refers, large-scale, automated, login, requests]
---

# CredentialStuffingEventStore

> Tracks when a user successfully logs into Salesforce during an
			identified credential stuffing attack. Credential stuffing refers to large-scale
			automated login requests using stolen user credentials.
		CredentialStuffingEventStore is an object that stores the event data of
		CredentialStuffingEvent. This object is available in API version 49.0 and later.

# CredentialStuffingEventStore

Tracks when a user successfully logs into Salesforce during an identified credential stuffing attack. Credential stuffing refers to large-scale automated login requests using stolen user credentials. CredentialStuffingEventStore is an object that stores the event data of CredentialStuffingEvent. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CredentialStuffingEventStore in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AcceptLanguage | Accept-Language Header | string |  | 255 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CredentialStuffingEventNumber | Event Name | string |  | 255 |  |  |
| EvaluationTime | Evaluation Time | double |  |  | 18 | 0 |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event ID | string |  | 80 |  |  |
| Id | Credential Stuffing Event Store ID | id |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| LoginType | Login Type | picklist |  | 255 |  |  |
| LoginUrl | Login URL | string |  | 255 |  |  |
| PolicyId | Transaction Security Policy ID | reference |  | 18 |  |  |
| PolicyOutcome | Policy Outcome | picklist |  | 255 |  |  |
| Score | Score | double |  |  | 12 | 6 |
| SessionKey | Session Key | string |  | 24 |  |  |
| SourceIp | Source IP Address | string |  | 255 |  |  |
| Summary | Summary | textarea |  | 1000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
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
