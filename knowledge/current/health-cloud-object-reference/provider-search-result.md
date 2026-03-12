---
title: "Provider Search Result"
domain: health-cloud-object-reference
topic: provider-search-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.735Z
estimatedTokens: 756
keywords: [Provider, Search, Result, Detailed, healthcare, matching, criteria]
---

# Provider Search Result

> Detailed information about a single healthcare provider matching the search criteria.

# Provider Search Result

Detailed information about a single healthcare provider matching the search criteria.

Properties

| Property Name | Type | Description | Required |
| --- | --- | --- | --- |
| providerId | String | A unique identifier assigned to this healthcare provider. | Optional |
| providerName | String | The full name of the healthcare provider. | Optional |
| facilityName | String | The name of the primary facility or clinic where the provider practices. | Optional |
| specialties | Array of Strings | A list of medical specialties (e.g., Cardiology, Pediatrics) in which the provider is qualified. | Optional |
| subSpecialties | Array of Strings | A list of more specific areas of focus within the provider's specialties (e.g., Interventional Cardiology, Neonatology). | Optional |
| acceptedInsurancePlans | Array of Strings | A list of the types of insurance plans or networks that the provider accepts. | Optional |
| acceptingNewPatients | Boolean | Indicates whether the provider is currently accepting new patients (true/false). | Optional |
| languagesSpoken | Array of Strings | A list of languages the provider is fluent in. | Optional |
| providerGender | String | The gender of the provider (e.g., "Male", "Female"). | Optional |
| licenseName | Array of Strings | A list of professional licenses held by the provider. | Optional |
| licenseStatuses | Array of Strings | The current status of each professional license held by the provider (e.g., "Active", "Inactive"). | Optional |
| licenseStates | Array of Strings | A list of the states or provinces where the provider's licenses are registered. | Optional |
| licenseCountries | Array of Strings | A list of the countries where the provider's licenses are registered. | Optional |
| licenseRegions | Array of Strings | A list of the broader regions where the provider's licenses are registered. | Optional |
| facilityAddress | Object | The primary physical address of the facility where the provider practices. See Address Output. | Optional |
| educationLevel | String | The highest level or type of formal education completed by the provider (e.g., "MD", "PhD", "DO"). | Optional |
| nationalProviderIdentifier | String | The unique National Provider Identifier (NPI) assigned to the provider. | Optional |
| providerType | String | The professional classification or type of the provider (e.g., "Medical Doctor", "Nurse Practitioner"). | Optional |
| facilityPhone | String | The main contact phone number for the provider's primary facility. | Optional |
| photoUrl | String | A direct link (URL) to a professional photograph of the provider. | Optional |
| certifications | Array of Strings | A list of professional certifications held by the provider. | Optional |
| sourceSystem | String | The internal system or database from which this provider's information originated, if applicable. | Optional |
| additionalDetails | Object | A flexible object containing any extra key-value pair details about the provider. | Optional |

## Related Topics

- Address Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_address_output_representation.htm)
