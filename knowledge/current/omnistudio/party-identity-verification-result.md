---
title: "Party Identity Verification Result"
domain: omnistudio
topic: party-identity-verification-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.185Z
estimatedTokens: 781
keywords: [Party, Identity, Verification, Result, Output, representation]
---

# Party Identity Verification Result

> Output representation of the party identity verification result.

# Party Identity Verification Result

Output representation of the party identity verification result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdById | String | ID of the user who created the record. | Small, 61.0 | 61.0 |
| createdDate | String | Date when the record was created. | Small, 61.0 | 61.0 |
| customFields | Custom Fields Result[] | Custom fields related to the application form product. | Small, 61.0 | 61.0 |
| id | String | Unique identifier of the party identity verification. | Small, 61.0 | 61.0 |
| isResult​Overridden | Boolean | Indicates whether the party identity verification result was overridden (true) or not (false). | Small, 61.0 | 61.0 |
| lastModified​ById | String | ID of the user who last modified this record. | Small, 61.0 | 61.0 |
| lastModified​Date | String | Date and time when a user last modified this record. | Small, 61.0 | 61.0 |
| name | String | Name of the application form product record. | Small, 61.0 | 61.0 |
| overriddenById | String | Record of the user who’s responsible for overriding the party identity verification result. | Small, 61.0 | 61.0 |
| overridden​Result | String | Overridden result for a party after the party identity verification is complete. | Small, 61.0 | 61.0 |
| ownerId | String | ID of the user who owns this record. | Small, 61.0 | 61.0 |
| partyIdentity​VerificationStep | Party Identity Verification Step Result[] | Party identity verification step associated to the party identify verification. | Small, 61.0 | 61.0 |
| partyProfileId | String | ID of the party profile related to the party identity verification. | Small, 61.0 | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Small, 61.0 | 61.0 |
| reportUrl | String | URL of the report provided by the third-party identity verification agency. | Small, 61.0 | 61.0 |
| request​CompletionDate | String | Date when the party identity verification request was completed. | Small, 61.0 | 61.0 |
| result | String | Result of the party identity verification. | Small, 61.0 | 61.0 |
| resultOverride​Comment | String | Description of the party identity verification. | Small, 61.0 | 61.0 |
| resultOverride​Reason | String | Reason for overriding the party identity verification request. | Small, 61.0 | 61.0 |
| status | String | Status of the party identity verification request. | Small, 61.0 | 61.0 |
| thirdPartyVerf​ProcIdentifier | String | ID of the verification run in the third-party verification system. | Small, 61.0 | 61.0 |
| thirdParty​Verfdentifier | String | ID of the identity verification record in the third-party identity verification system. | Small, 61.0 | 61.0 |
| thirdParty​Verification​RunUrl | String | Third-party URL to view details of the verification run on the party profile. | Small, 61.0 | 61.0 |
| verification​RequestDate | String | Date when the party identity verification request was submitted. | Small, 61.0 | 61.0 |
| verifiedBy | String | Name of the third-party that conducted the identity verification. | Small, 61.0 | 61.0 |

## Related Topics

- Custom Fields Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_digital_lending_custom_fields_result.htm)
- Party Identity Verification Step Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_party_identity_verification_step_result.htm)
