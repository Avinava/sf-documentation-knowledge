---
title: "Territory Management"
domain: life-sciences-dev-guide
topic: territory-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.798Z
estimatedTokens: 1276
keywords: [Territory, Management, supports, strategically, organizing, territories, aligning, healthcare, providers, HCPs, organizations, HCOs, optimize, resource, allocation]
---

# Territory Management

> Territory Management supports strategically organizing territories and aligning
  healthcare providers (HCPs) and healthcare organizations (HCOs) to territories. Use Territory
  Management to optimize resource allocation and improve engagement with HCPs/HCOs. Life Sciences
  Cloud enables industry-specific territory management features that are integrated with Salesforce
  Enterprise Territory Management.

# Territory Management

Territory Management supports strategically organizing territories and aligning healthcare providers (HCPs) and healthcare organizations (HCOs) to territories. Use Territory Management to optimize resource allocation and improve engagement with HCPs/HCOs. Life Sciences Cloud enables industry-specific territory management features that are integrated with Salesforce Enterprise Territory Management.

Additional territory-related objects capture territory or user downtime as well as assignments of document templates to territories for use in business activities like emails and invitations.

## Territory Alignment

Territory Alignment provides for efficient distribution of Healthcare Providers (HCPs) and Healthcare Organizations (HCOs) among an organization’s territories. Assign users to territories and align accounts to territories. HCPs and HCOs can be aligned to territories through various alignment rules such as explicit customer alignment, geographical alignment, and affiliation alignment. Life Sciences Cloud jobs process the alignment rules to generate territory alignments including the sharing of account-related data with users and creation of provider account territory info records.

![images/lsc_territory_management_territory_alignment.png](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_territory_management_territory_alignment.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/territory-mgmt-alignment.html "HTML (New Window)").

## Territory Content Template Assignment

Territory Content Template Assignments store a link between a territory and a template such as email templates or other documents, enable the assignment of relevant content to specific territories.

![images/lsc_territory_content_template_assignment_data_model.png](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_territory_content_template_assignment_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/territory-mgmt-territory-content-template-assignment.html "HTML (New Window)").

## Territory User Downtime

Enable users to log and manage time away from their assigned territories. Track time spent that's not directly related to customer-facing activities. Sales representatives can block off time during normal business hours for various reasons, such as vacation, sick days, and trainings. Configure overlapping rules for different types of time-off territory events to prevent scheduling conflicts.

![images/lsc_territory_alignment_data_model.png](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_territory_user_downtime_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/territory-mgmt-user-downtime.html "HTML (New Window)").

-   **[TerrProvAffilAssignRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_terrprovaffilassignrule.htm)**
    Represents a rule for aligning the affiliated accounts to the existing set of aligned accounts, based on their role, specialty, and account type. This object is available in API version 65.0 and later.
-   **[TerrGeoAssignmentRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_terrgeoassignmentrule.htm)**
    Represents alignment rules that assign accounts to specific territories based on geocodes. This object is available in API version 65.0 and later.
-   **[TerritoryContentTmplAsgnt](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_territorycontenttmplasgnt.htm)**
    Stores a link between a territory and a template allowing for the assignment of relevant content to specific territories. This object is available in API version 65.0 and later.
-   **[TerritoryUserDowntime](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_territoryuserdowntime.htm)**
    Defines the blocks of time during normal business hours for various types of reasons when sales representatives are out of their territories. This object is available in API version 65.0 and later.

#### See Also

-   [*Object Reference for the Salesforce Platform*: Territory2](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_territory2.htm)

-   [*Object Reference for the Salesforce Platform*: ProviderAcctTerritoryInfo](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideracctterritoryinfo.htm "Represents the engagement data between an account and a user within an assigned territory, which includes next provider visit date, preferred address, and planned activities. This object is available in API version 65.0 and later.")

## Related Topics

- TerrProvAffilAssignRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_terrprovaffilassignrule.htm)
- TerrGeoAssignmentRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_terrgeoassignmentrule.htm)
- TerritoryContentTmplAsgnt (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_territorycontenttmplasgnt.htm)
- TerritoryUserDowntime (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_territoryuserdowntime.htm)
- Object Reference for the Salesforce Platform:
       ProviderAcctTerritoryInfo (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_provideracctterritoryinfo.htm)
