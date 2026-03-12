---
title: "Party Identity Verification Step Result"
domain: omnistudio
topic: party-identity-verification-step-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.513Z
estimatedTokens: 461
keywords: [Party, Identity, Verification, Step, Result, Output, representation, party, identity, verification, step, result.]
---

# Party Identity Verification Step Result

> Output representation of the party identity verification step result.

# Party Identity Verification Step Result

Output representation of the party identity verification step result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdById | String | Name of the third-party that conducted the party identity verification step. | Small, 61.0 | 61.0 |
| createdDate | String | Date when the record was created. | Small, 61.0 | 61.0 |
| customFields | Custom Fields Result[] | Custom fields related to the application form product. | Small, 61.0 | 61.0 |
| id | String | Unique identifier of the party identify verification step. | Small, 61.0 | 61.0 |
| identity​Verification​ArtifactId | String | Artifact submitted for the party identity verification step. | Small, 61.0 | 61.0 |
| lastModified​ById | String | ID of the user who last modified this record. | Small, 61.0 | 61.0 |
| lastModified​Date | String | Date and time when a user last modified this record. | Small, 61.0 | 61.0 |
| name | String | Name of the party identity verification step. | Small, 61.0 | 61.0 |
| ownerId | String | ID of the user who owns this record. | Small, 61.0 | 61.0 |
| partyIdentity​VerificationId | String | ID of the party identity verification related to the party identity verification step. | Small, 61.0 | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Small, 61.0 | 61.0 |
| reportUrl | String | URL of the report provided by the third-party identity verification agency. | Small, 61.0 | 61.0 |
| status | String | Status of the third-party identity verification. | Small, 61.0 | 61.0 |
| type | String | Type of the third-party identity verification. | Small, 61.0 | 61.0 |
| verification​Decision | String | Decision taken after the third-party identity verification is completed. | Small, 61.0 | 61.0 |

## Related Topics

- Custom Fields Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_digital_lending_custom_fields_result.htm)
