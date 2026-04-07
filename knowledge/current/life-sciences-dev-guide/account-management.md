---
title: "Account Management"
domain: life-sciences-dev-guide
topic: account-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:07.575Z
estimatedTokens: 931
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
- Merge Customer Account (POST) (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_resources_merge_customer_accounts.htm)
- Merge Customer Account with Status (POST) (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_resources_merge_customer_accounts_with_status.htm)
