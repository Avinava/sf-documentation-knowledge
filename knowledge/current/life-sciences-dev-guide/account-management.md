---
title: "Account Management"
domain: life-sciences-dev-guide
topic: account-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.599Z
estimatedTokens: 1944
keywords: [Account, Management, Life, Sciences, industry, crucial, organizations, effectively, manage, their, relationships, healthcare, providers, HCPs, HCOs, resources, customer, accounts]
---

# Account Management

> Account Management in the Life Sciences industry is crucial for organizations to
  effectively manage their relationships with healthcare providers (HCPs) and healthcare
  organizations (HCOs). The profile information serves as a foundation for various operational
  activities within the organization, providing a comprehensive view of HCPs and HCOs including
  their contact and social network details, specialties, affiliations, business licenses, ratings to
  segment and categorize HCPs and HCOs, as well as territory and product, and team-specific details.
  Life Sciences Cloud extends the Salesforce Core Account data model allowing organizations to
  create a holistic view of their customers providing up-to-date information in support of their
  business priorities.

# Account Management

Account Management in the Life Sciences industry is crucial for organizations to effectively manage their relationships with healthcare providers (HCPs) and healthcare organizations (HCOs). The profile information serves as a foundation for various operational activities within the organization, providing a comprehensive view of HCPs and HCOs including their contact and social network details, specialties, affiliations, business licenses, ratings to segment and categorize HCPs and HCOs, as well as territory and product, and team-specific details. Life Sciences Cloud extends the Salesforce Core Account data model allowing organizations to create a holistic view of their customers providing up-to-date information in support of their business priorities.

![The data model diagram for Advanced Therapy Management with Health Cloud objects and Salesforce Scheduler objects.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_acctmgmt.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/account-management.html "HTML (New Window)").

-   **[Data Change Requests](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/life_sciences_data_change_requests.htm)**
    With Data Change Requests, organizations can implement configurable data validation processes that are tailored to their specific business needs. Validate data changes by objects and fields and configure data changes by profile and record type. Data Change Requests support controlled data synchronization of externally managed data domains.
-   **[Merge Management](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/life_sciences_merge_management.htm)**
    Maintain the integrity of your healthcare provider and healthcare organization profile information with a configurable process that removes duplicated account data. Users can either manually merge or receive merge requests from external sources to consolidate into a single winning account and remove the losing account. This capability provides organizations with a single, accurate view of the HCPs and HCOs that they work with.
-   **[BusinessLicense](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_businesslicense.htm)**
    Represents the licenses of a party role like healthcare provider or producer.
-   **[BusinessLicenseProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_businesslicenseproduct.htm)**
    Represents the licenses required to be linked to a product for the healthcare provider. This object is available in API version 65.0 and later.
-   **[ContactPointBestContactTime](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_contactpointbestcontacttime.htm)**
    Represents the optimal time to visit associated contact point addresses. This object is available in API version 65.0 and later.
-   **[ContactPointSocial](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_contactpointsocial.htm)**
    Represents social media identifiers or contact points for an individual or account. This object is available in API version 65.0 and later.
-   **[Formulary](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_formulary.htm)**
    Represents the details of the formulary covered by the payer's health insurance plan. This object is available in API version 65.0 and later.
-   **[FormularyItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_formularyitem.htm)**
    Represents details of products within the formulary, including the drug tier, coverage, and copay. This object is available in API version 65.0 and later.
-   **[HealthcareProvider](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareprovider.htm)**
    Represents business-level details about the healthcare organization or the practitioner.
-   **[PartyPublication](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_partypublication.htm)**
    Represents the details of a party's publication.
-   **[ProviderAcctProductInfo](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideracctproductinfo.htm)**
    Represents specific information for healthcare professionals or healthcare organizations at the territory and product levels. This information is used for segmentation and product-level rankings. This object is available in API version 65.0 and later.
-   **[ProviderAcctTerritoryInfo](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideracctterritoryinfo.htm)**
    Represents the engagement data between an account and a user within an assigned territory, which includes next provider visit date, preferred address, and planned activities. This object is available in API version 65.0 and later.
-   **[ProviderAffiliation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideraffiliation.htm)**
    Represents the relationship between two healthcare professionals or healthcare organizations. This object is available in API version 65.0 and later.
-   **[ProviderAffiliationProduct](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideraffiliationproduct.htm)**
    Represents the relationship between two healthcare professionals, where one influences the other regarding a product. This object is available in API version 65.0 and later.
-   **[PrvdAccountUserGroupInfo](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdaccountusergroupinfo.htm)**
    Represents the classification values for the provider account user group. This object is available in API version 65.0 and later.
-   **[PrvdAccountTerritorySummary](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdaccountterritorysummary.htm)**
    Represents the summaries generated for a provider account for the terrories it is aligned to. This object is available in API version 65.0 and later.

#### See Also

-   [*Object Reference for the Salesforce Platform*: Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm)

-   [*Object Reference for the Salesforce Platform*: ContactPointEmail](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contactpointemail.htm)

-   [*Object Reference for the Salesforce Platform*: ContactPointPhone](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contactpointphone.htm)

-   [*Object Reference for the Salesforce Platform*: HealthcareProviderSpecialty](https://developer.salesforce.com/docs/atlas.en-us.260.0.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareproviderspecialty.htm)

-   [*Object Reference for the Salesforce Platform*: CareSpecialty](https://developer.salesforce.com/docs/atlas.en-us.260.0.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_carespecialty.htm)

-   [*Object Reference for the Salesforce Platform*: GroupMember](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_groupmember.htm)

-   [*Object Reference for the Salesforce Platform*: Group](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_group.htm)

## Related Topics

- Data Change Requests (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/life_sciences_data_change_requests.htm)
- Merge Management (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/life_sciences_merge_management.htm)
- BusinessLicense (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_businesslicense.htm)
- BusinessLicenseProduct (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_businesslicenseproduct.htm)
- ContactPointBestContactTime (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_contactpointbestcontacttime.htm)
- ContactPointSocial (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_contactpointsocial.htm)
- Formulary (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_formulary.htm)
- FormularyItem (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_formularyitem.htm)
- HealthcareProvider (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareprovider.htm)
- PartyPublication (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_partypublication.htm)
