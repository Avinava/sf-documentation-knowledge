---
title: "Provider Relationship Management"
domain: life-sciences-dev-guide
topic: provider-relationship-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:56.355Z
estimatedTokens: 807
keywords: [Provider, Relationship, Management, model, along, standard, Salesforce, manage, relationships]
---

> Use the Provider Relationship Management data model along with standard Salesforce
  objects to manage your provider relationships.

# Provider Relationship Management

Use the Provider Relationship Management data model along with standard Salesforce objects to manage your provider relationships.

The Provider Relationship Management data model represents the practitioners, facilities, physician relationships, specialties, and organizational hierarchy for your network of providers.

-   Physician and organization affiliations, such as hospitals where the physician has attending or admitting privileges
-   Practicing locations and specialties offered by a practitioner at a location
-   Practice administrators for healthcare facilities
-   Operating hours for facilities or practitioner's hours at a particular facility
-   Specialty and taxonomy attributes of a practitioner or facility
-   National Provider Identifier (NPI) and other provider identifiers
-   Insurance payer and plan networks
-   Practitioner license, education, board certifications, awards, and accreditation information

Provider information is also represented using existing standard Salesforce objects in addition to objects only available through Health Cloud and Life Sciences Cloud.

-   Account: Represents a healthcare facility or location. The account hierarchy represents the way the healthcare system is organized. Other companies, like billing companies for physicians or healthcare facilities are represented as accounts and connected to healthcare facilities or physicians using account-account or account-contact relationships.
-   Contact: Represents physicians and other licensed practitioners. Other professionals, such as nurses are represented using a contact record and connected to the physician using the contact-contact relationships.
-   Account Contact Relationship: Represents physician and health system business affiliations, such as attending and admitting privileges.
-   Person Education: Represents the educational details of a physician or licensed practitioner.
-   Identity Document: Represents all identifiers for a practitioner or facility, other than the NPI.
-   Location: Represents more details of a healthcare location, such as a clinic.
-   Associated Location: Represents the junction between an account and a location.
-   Operating Hours: Represents the hours that a facility is open.
-   Time Slot: Represents a range of time on a specified day of the week during which healthcare work can be performed. Operating hours consist of one or more time slots.

## Provider Relationship Management

![Provider entity relationship diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fhealthcloud_providerrelationshipmgmt_erd.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/provider-relationship-management.html "HTML (New Window)").

-   **[Use Composite API Requests to Import Data for Provider Relationship Cards](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_provider_search_import_card_data.htm)**
    If you’re setting up provider relationship cards to show practitioner information, you can use Composite API requests to create and link multiple records.

## Related Topics

- Use Composite API Requests to Import Data for Provider Relationship Cards (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_provider_search_import_card_data.htm)
