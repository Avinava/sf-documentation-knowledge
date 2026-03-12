---
title: "Provider Relationship Management"
domain: life-sciences-dev-guide
topic: provider-relationship-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.030Z
estimatedTokens: 2665
keywords: [Provider, Relationship, Management, data, model, along, standard, Salesforce, objects, manage, relationships]
---

# Provider Relationship Management

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
-   **[Accreditation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accreditation.htm)**
    Represents the professional accreditations of a facility. For example, a joint commission accredits a facility as a general acute care hospital.
-   **[Award](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_award_hc.htm)**
    Represents a person's or organization's professional awards.
-   **[BoardCertification](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_boardcertification.htm)**
    Represents the practitioner's board certifications such as being board-certified in cardiology and cardiovascular disease.
-   **[BusinessLicense](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_businesslicense.htm)**
    Represents the licenses of a party role like healthcare provider or producer.
-   **[CareProviderAdverseAction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprovideradverseaction.htm)**
    Captures adverse actions against the provider, such as malpractice lawsuits or revoked licences. This object is available in API version 47.0 and later.
-   **[CareProviderFacilitySpecialty](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careproviderfacilityspecialty.htm)**
    Represents all the specialties that the practitioner provides at a given location. For example, a physician who is board-certified in both spine and neuro may provide spine services at one location and neuro services at another.
-   **[CareProviderSearchableField](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprovidersearchablefield.htm)**
    This object holds denormalized data from certain fields in the Provider Relationship Management data model. Provider search APIs query this object instead of multiple objects, which improves search performance. This object is available in API version 47.0 and later.
-   **[CareProviderSearchConfig](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprovidersearchconfig.htm)**
    Represents fields that can appear in provider search results. Use this object to specify fields in arbitrary objects (source) that are made available in the search object (target). This object is available in API version 48.0 and later.
-   **[CareService](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careservice.htm)**
    Represents a healthcare treatment, service, or procedure offered by a provider, practitioner, or facility. This object is available in API version 59.0 and later.
-   **[CareSpecialty](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carespecialty.htm)**
    Represents a listing of provider specialty codes and descriptions. For example, 02 - Physician/General Surgery.
-   **[CareSpecialtyTaxonomy](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carespecialtytaxonomy.htm)**
    The junction object between CareSpecialty and CareTaxonomy. This object is available in API version 52.0 and later.
-   **[CareTaxonomy](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_caretaxonomy.htm)**
    Represents a static list of taxonomy codes.
-   **[HealthcareFacilityNetwork](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcarefacilitynetwork.htm)**
    Represents a junction object identifying the insurance network that a location or business entity is a part of. Network participation records are also stored in this object.
-   **[HealthcarePayerNetwork](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcarepayernetwork.htm)**
    Represents an insurance network group. For example, an insurance company’s exclusive provider organization (EPO) plans.
-   **[HealthcarePractitionerFacility](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcarepractitionerfacility.htm)**
    Represents the different locations in which a practitioner provides services.
-   **[HealthcareProvider](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareprovider.htm)**
    Represents business-level details about the healthcare organization or the practitioner.
-   **[HealthcareProviderNpi](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareprovidernpi.htm)**
    Represents identifiers from the National Provider Identifier that are assigned to every facility and licensed practitioner in the United States. Also includes NPI assigned date, primary mailing address on file, and so on.
-   **[HealthcareProviderService](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareproviderservice.htm)**
    Represents a junction object between a HealthcareService and a HealthcareProvider or HealthcareFacility or HealthcarePractitionerFacility. This object is available in API version 59.0 and later.
-   **[HealthcareProviderSpecialty](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareproviderspecialty.htm)**
    Represents specialties for a practitioner or a service provider organization. A provider can have multiple specialties such as anesthesiology and cardiovascular.
-   **[HealthcareProviderTaxonomy](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareprovidertaxonomy.htm)**
    Represents taxonomy or subspecialty codes for a practitioner or facility. A provider or facility can have multiple taxonomies.
-   **[HealthcareServiceDetail](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareservicedetail.htm)**
    Represents a junction object between a CareService and a CodeSetBundle. For example, this object links a healthcare service such as physical therapy to a set of related codes. This object is available in API version 59.0 and later.
-   **[HlthCareProvTreatedCondition](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_hlthcareprovtreatedcondition.htm)**
    Represents a junction object between a healthcare provider, facility, or practitioner and a problem definition that's related to a health condition, such as disease or illness. For example, this object links a doctor to the treatment of diabetes, or a facility to the treatment of spinal injuries. This object is available in API version 59.0 and later.
-   **[PersonEducation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_personeducation.htm)**
    Represents information about professional education for a person in a provider role.
-   **[PersonEmployment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_personemployment.htm)**
    Represents information about a person’s employment.
-   **[ProviderSearchSyncLog](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providersearchsynclog.htm)**
    Represents a log with information about the provider search data sync status of a healthcare provider record. This object is available in API version 49.0 and later.

## Related Topics

- Use Composite API Requests to Import Data for Provider Relationship Cards (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_provider_search_import_card_data.htm)
- Accreditation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_accreditation.htm)
- Award (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_award_hc.htm)
- BoardCertification (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_boardcertification.htm)
- BusinessLicense (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_businesslicense.htm)
- CareProviderAdverseAction (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprovideradverseaction.htm)
- CareProviderFacilitySpecialty (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careproviderfacilityspecialty.htm)
- CareProviderSearchableField (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprovidersearchablefield.htm)
- CareProviderSearchConfig (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careprovidersearchconfig.htm)
- CareService (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_careservice.htm)
