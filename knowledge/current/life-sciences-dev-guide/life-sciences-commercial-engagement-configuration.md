---
title: "Life Sciences Commercial Engagement Configuration"
domain: life-sciences-dev-guide
topic: life-sciences-commercial-engagement-configuration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.633Z
estimatedTokens: 499
keywords: [Life, Sciences, Commercial, Engagement, Configuration, objects, store, settings, configurations, Customer, features, cases, control, feature’s, behavior]
---

# Life Sciences Commercial Engagement Configuration

> The Life Sciences Commercial Engagement Configuration objects store settings and
  configurations for many Customer Engagement features. In some cases, you can control a feature’s
  behavior by assigning configurations to specific profiles or users. Other configurations apply to
  all the users in an org.

# Life Sciences Commercial Engagement Configuration

The Life Sciences Commercial Engagement Configuration objects store settings and configurations for many Customer Engagement features. In some cases, you can control a feature’s behavior by assigning configurations to specific profiles or users. Other configurations apply to all the users in an org.

![images/lsc_key_account_plan_data_model.png](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_commercial_configuration_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/commercial-configuration.html "HTML (New Window)").

-   **[LifeSciMetadataAssignment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimetadataassignment.htm)**
    Represents the assignments for a Life Sciences configuration record. This object is a child of LifeSciMetadataRecord. This object is available in API version 65.0 and later.
-   **[LifeSciMetadataCategory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimetadatacategory.htm)**
    Represents the category that Life Sciences configuration records are organized into. This object is available in API version 65.0 and later.
-   **[LifeSciMetadataFieldValue](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimetadatafieldvalue.htm)**
    Represents a field value for a Life Sciences configuration record. This object is a child of LifeSciMetadataRecord. This object is available in API version 65.0 and later.
-   **[LifeSciMetadataRecord](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimetadatarecord.htm)**
    Represents a configuration record for Life Sciences. This object is a child of LifeSciMetadataCategory. This object is available in API version 65.0 and later.

## Related Topics

- LifeSciMetadataAssignment (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimetadataassignment.htm)
- LifeSciMetadataCategory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimetadatacategory.htm)
- LifeSciMetadataFieldValue (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimetadatafieldvalue.htm)
- LifeSciMetadataRecord (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifescimetadatarecord.htm)
