---
title: "Party Profile Result"
domain: omnistudio
topic: party-profile-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.218Z
estimatedTokens: 1375
keywords: [Party, Profile, Result, Output, representation]
---

# Party Profile Result

> Output representation of the party profile result.

# Party Profile Result

Output representation of the party profile result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Account ID associated with the party profile. | Small, 61.0 | 61.0 |
| contactId | String | Contact ID associated with the party profile. | Small, 61.0 | 61.0 |
| countryOfBirth | String | Country of birth in the party profile. | Small, 61.0 | 61.0 |
| countryOf​Domicile | String | Country of domicile in the party profile | Small, 61.0 | 61.0 |
| createdById | String | ID of the user who created the record. | Small, 61.0 | 61.0 |
| createdDate | String | Date when the record was created. | Small, 61.0 | 61.0 |
| creditScore | Double | Credit score of the party. | Small, 61.0 | 61.0 |
| creditScore​Provider | String | Name of the agency that provides the credit score of the party. | Small, 61.0 | 61.0 |
| customFields | Custom Fields Result[] | Custom fields related to the party profile. | Small, 61.0 | 61.0 |
| dateOfBirth | String | Date of birth of the party profile. | Small, 61.0 | 61.0 |
| employment​Industry | String | Employment industry of the party profile. | Small, 61.0 | 61.0 |
| employmentType | String | Type of employment held by the party. | Small, 61.0 | 61.0 |
| firstName | String | First name of the party in the profile. | Small, 61.0 | 61.0 |
| fullName | String | Full name of the party profile. | Small, 61.0 | 61.0 |
| fundSource | String | Source of funds for a party in the profile. | Small, 61.0 | 61.0 |
| gender | String | Gender of the party in the profile. | Small, 61.0 | 61.0 |
| household​AccountId | String | Household account that's associated with the party profile. | Small, 61.0 | 61.0 |
| id | String | Unique identifier of the party profile. | Small, 61.0 | 61.0 |
| isNetWorthHigh | Boolean | Indicates whether the customer has a high net worth (true) or not (false). | Small, 61.0 | 61.0 |
| isOffBoarded | Boolean | Indicates whether the party profile was off-boarded (true) or not (false). | Small, 61.0 | 61.0 |
| lastModified​ById | String | ID of the user who last modified this record. | Small, 61.0 | 61.0 |
| lastModified​Date | String | Date and time when a user last modified this record. | Small, 61.0 | 61.0 |
| lastName | String | Last name of the party in the profile. | Small, 61.0 | 61.0 |
| lastProfile​ReviewDate | String | Date when the party profile was last reviewed. | Small, 61.0 | 61.0 |
| leadId | String | ID of the lead that's associated with the party profile. | Small, 61.0 | 61.0 |
| middleName | String | Middle name of the party in the profile. | Small, 61.0 | 61.0 |
| name | String | Name of the party profile record. | Small, 61.0 | 61.0 |
| nationality | String | Nationalities held by the party profile. | Small, 61.0 | 61.0 |
| nextProfile​ReviewDate | String | Date of the next party profile review. | Small, 61.0 | 61.0 |
| offBoarding​Comments | String | Comments related to off boarding for the party profile review, if any. | Small, 61.0 | 61.0 |
| offBoarding​Reason | String | Reason for off boarding. | Small, 61.0 | 61.0 |
| orchestration​ErrorMessage | String | Message that's generated when an error occurs during the orchestration. | Small, 61.0 | 61.0 |
| orchestrationId | String | ID of the run-time orchestration. | Small, 61.0 | 61.0 |
| orchestration​Status | String | Status of the run-time orchestration. | Small, 61.0 | 61.0 |
| ownerId | String | ID of the user who owns this record. | Small, 61.0 | 61.0 |
| partyIdentity​Verification | Party Identity Verification Result[] | Party identity verification associated with the party profile. | Small, 61.0 | 61.0 |
| partyProfile​Address | Party Profile Address Result[] | Address associated with the party profile. | Small, 61.0 | 61.0 |
| partyProfileRisk | Party Profile Risk Result[] | Party profile risk associated with the party profile. | Small, 61.0 | 61.0 |
| prefix | String | Prefix used by the party. | Small, 61.0 | 61.0 |
| primaryEmail | String | Primary email address of the party that's specified in the profile. | Small, 61.0 | 61.0 |
| primary​Identification​Name | String | Primary identification name that's specified in the profile. | Small, 61.0 | 61.0 |
| primaryIdentifier | String | Unique identifier for the party. | Small, 61.0 | 61.0 |
| primary​IdentifierType | String | Type of primary identification document defined in the profile. | Small, 61.0 | 61.0 |
| primaryPhone | String | Primary phone number of the party that's specified in the profile. | Small, 61.0 | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Small, 61.0 | 61.0 |
| relatedParty​ProfileId | String | ID of the related party profile associated with this record. | Small, 61.0 | 61.0 |
| residentType | String | Resident type of the party profile. | Small, 61.0 | 61.0 |
| reviewDecision | String | Decision taken after the party profile review is complete. | Small, 61.0 | 61.0 |
| stage | String | Current stage of the party profile. | Small, 61.0 | 61.0 |
| suffix | String | Suffix of the party profile. | Small, 61.0 | 61.0 |
| surnameAtBirth | String | Party surname at birth specified in the profile. | Small, 61.0 | 61.0 |
| taxPayer​Identification​Number | String | Identification number of the tax payer specified in the profile. | Small, 61.0 | 61.0 |
| taxPayer​Identification​Type | String | Type of taxpayer identification used for tax purposes. | Small, 61.0 | 61.0 |

## Related Topics

- Custom Fields Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_digital_lending_custom_fields_result.htm)
- Party Identity Verification Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_party_identity_verification_result.htm)
- Party
                  Profile Address Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_party_profile_address_result.htm)
- Party
                  Profile Risk Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_party_profile_risk_result.htm)
