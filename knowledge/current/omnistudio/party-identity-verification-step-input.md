---
title: "Party Identity Verification Step Input"
domain: omnistudio
topic: party-identity-verification-step-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.407Z
keywords: [Party, Identity, Verification, Step, Input]
---

# Party Identity Verification Step Input

# Party Identity Verification Step Input

Input representation of the details of the party identity verification step.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| customFields | Custom Fields Input[] | Custom fields related to the party identity verification step. | Optional | 61.0 |
| identity​Verification​ArtifactId | String | Artifact submitted for identity verification. | Optional | 61.0 |
| name | String | Name of the party profile verification step record. | Required | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |
| reportUrl | String | URL of the report provided by the third-party identity verification agency. | Optional | 61.0 |
| status | String | Status of the third-party identity verification. | Required | 61.0 |
| type | String | Type of the third-party identity verification. | Required | 61.0 |
| verification​Decision | String | Decision taken after the third-party identity verification is completed. | Optional | 61.0 |