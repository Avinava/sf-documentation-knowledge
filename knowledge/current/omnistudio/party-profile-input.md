---
title: "Party Profile Input"
domain: omnistudio
topic: party-profile-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.604Z
estimatedTokens: 1202
keywords: [Party, Profile, Input, representation]
---

# Party Profile Input

> Input representation of the details of the party profile.

# Party Profile Input

Input representation of the details of the party profile.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | Account ID associated with the party profile. | Optional | 61.0 |
| contactId | String | Contact ID associated with the party profile. | Optional | 61.0 |
| countryOfBirth | String | Country of birth in the party profile. | Optional | 61.0 |
| countryOf​Domicile | String | Country of domicile in the party profile. | Optional | 61.0 |
| creditScore | Double | Credit score of the party. | Optional | 61.0 |
| creditScore​Provider | String | Name of the agency that provides the credit score of the party. | Optional | 61.0 |
| customFields | Custom Fields Input[] | Custom fields related to the party profile. | Optional | 61.0 |
| dateOfBirth | String | Date of birth of the party profile. | Optional | 61.0 |
| employment​Industry | String | Employment industry of the party specified in the profile. | Optional | 61.0 |
| employmentType | String | Type of employment held by the party. | Optional | 61.0 |
| firstName | String | First name of the party in the profile. | Optional | 61.0 |
| fullName | String | Full name of the party profile. | Optional | 61.0 |
| fundSource | String | Source of funds for a party in the profile. | Optional | 61.0 |
| gender | String | Gender of the party in the profile. | Optional | 61.0 |
| household​AccountId | String | Household account that's associated with the party profile. | Optional | 61.0 |
| isNetWorthHigh | Boolean | Indicates whether the customer has a high net worth (true) or not (false). | Optional | 61.0 |
| isOffBoarded | Boolean | Indicates whether the party profile was off-boarded (true) or not (false). | Optional | 61.0 |
| lastName | String | Last name of the party in the profile. | Optional | 61.0 |
| lastProfile​ReviewDate | String | Date when the party profile was last reviewed. | Optional | 61.0 |
| leadId | String | Lead that's associated with the party profile. | Optional | 61.0 |
| middleName | String | Middle name of the party in the profile. | Optional | 61.0 |
| name | String | Name of the party profile record. | Required | 61.0 |
| nationality | String | Nationalities held by the party profile. | Optional | 61.0 |
| nextProfile​ReviewDate | String | Date of the next party profile review. | Optional | 61.0 |
| offBoarding​Comments | String | Date of the next party profile review. | Optional | 61.0 |
| offBoarding​Reason | String | Reason the party profile was off-boarded. | Optional | 61.0 |
| orchestration​ErrorMessage | String | Message that's generated when an error occurs during the orchestration. | Optional | 61.0 |
| orchestration​Id | String | ID of the run-time orchestration. | Optional | 61.0 |
| orchestration​Status | String | Status of the orchestration. | Optional | 61.0 |
| partyIdentity​Verification | Party Identity Verification Input[] | Party identity verification associated with the party profile. | Optional | 61.0 |
| partyProfile​Address | Party Profile Address Input[] | Party profile address associated with the party profile. | Optional | 61.0 |
| partyProfile​Risk | Party Profile Risk Input[] | Party profile risk associated with the party profile. | Optional | 61.0 |
| prefix | String | Prefix used by the party. | Optional | 61.0 |
| primaryEmail | String | Primary email address of the party that's specified in the profile. | Optional | 61.0 |
| primary​IdentificationName | String | Name of the primary identification document specified in the profile. | Optional | 61.0 |
| primary​Identifier | String | Unique identifier for the party. | Optional | 61.0 |
| primary​IdentifierType | String | Type of primary identification document defined in the profile. | Optional | 61.0 |
| primaryPhone | String | Primary phone number of the party that's specified in the profile. | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |
| relatedParty​ProfileId | String | Party profile record associated with this record. | Optional | 61.0 |
| residentType | String | Type of party residency in the profile. | Optional | 61.0 |
| reviewDecision | String | Decision taken after the party profile review is complete. | Optional | 61.0 |
| stage | String | Current stage of the party profile. | Optional | 61.0 |
| suffix | String | Suffix used by the party. | Optional | 61.0 |
| surnameAtBirth | String | Party surname at birth specified in the profile. | Optional | 61.0 |
| taxPayer​Identification​Number | String | Taxpayer identifier that's used for tax purposes. | Optional | 61.0 |
| taxPayer​Identification​Type | String | Type of taxpayer identification used for tax purposes. | Optional | 61.0 |

## Related Topics

- Custom Fields Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_digital_lending_custom_fields_input.htm)
- Party Identity Verification Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_party_identity_verification_input.htm)
- Party Profile Address Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_party_profile_address_input.htm)
- Party Profile Risk Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_party_profile_risk_input.htm)
