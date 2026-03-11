---
title: "Party Identity Verification Input"
domain: omnistudio
topic: party-identity-verification-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.404Z
keywords: [Party, Identity, Verification, Input]
---

# Party Identity Verification Input

# Party Identity Verification Input

Input representation of the details of the party identity verification.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| customFields | Custom Fields Input[] | Custom fields related to the party identity verification. | Optional | 61.0 |
| isResult​Overridden | Boolean | Indicates whether the party identity verification result was overridden (true) or not (false). | Optional | 61.0 |
| name | String | Name of the party identity verification record. | Required | 61.0 |
| overriddenById | String | Record of the user who’s responsible for overriding the party identity verification result. | Optional | 61.0 |
| overridden​Result | String | Overridden result for a party after the party identity verification is complete. | Optional | 61.0 |
| partyIdentity​Verification​Step | Identity Verification Step Input[] | Party identity verification step associated to the party identify verification. | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |
| reportUrl | String | URL of the report provided by the third-party identity verification agency. | Optional | 61.0 |
| request​CompletionDate | String | Date when the party identity verification request was completed. | Optional | 61.0 |
| result | String | Result of the party identity verification. | Optional | 61.0 |
| resultOverride​Comment | String | Description about the party identity verification. | Optional | 61.0 |
| resultOverride​Reason | String | Reason for overriding the party identity verification request. | Optional | 61.0 |
| status | String | Status of the party identity verification request. | Optional | 61.0 |
| thirdPartyVerf​ProcIdentifier | String | ID of verification run in the third-party verification system. | Optional | 61.0 |
| thirdParty​Verfdentifier | String | ID of the identity verification record in the third-party identity verification system. | Optional | 61.0 |
| thirdParty​Verification​RunUrl | String | Third-party URL to view details of the verification run on the party profile. | Optional | 61.0 |
| verification​RequestDate | String | Date when the party identity verification request was submitted. | Optional | 61.0 |
| verifiedBy | String | Name of the third-party that conducted the identity verification. | Optional | 61.0 |