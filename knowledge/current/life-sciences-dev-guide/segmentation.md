---
title: "Segmentation"
domain: life-sciences-dev-guide
topic: segmentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.779Z
estimatedTokens: 519
keywords: [Segmentation, Group, accounts, specific, conditions, Segmentations, reusable, across, different, areas, sample, limits, distribute, assign, elements]
---

# Segmentation

> Group accounts based on specific conditions. Segmentations are reusable across different
  areas (such as sample limits) to distribute or assign elements to segments of accounts with the
  same set of criteria. There are two types of segmentations: static and dynamic. Static
  segmentation maintains the assignment even after the initial assignment. Dynamic segmentation
  changes based on account status or logic changes. Use Segmentation to assign and restrict of
  various elements without the need for individual account management.

# Segmentation

Group accounts based on specific conditions. Segmentations are reusable across different areas (such as sample limits) to distribute or assign elements to segments of accounts with the same set of criteria. There are two types of segmentations: static and dynamic. Static segmentation maintains the assignment even after the initial assignment. Dynamic segmentation changes based on account status or logic changes. Use Segmentation to assign and restrict of various elements without the need for individual account management.

![The data model diagram for Advanced Therapy Management with Health Cloud objects and Salesforce Scheduler objects.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_segmentation_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/segmentation.html "HTML (New Window)").

-   **[ActionableList](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionablelist.htm)**
    Represents an actionable list. This object is available in API version 65.0 and later.
-   **[ActionableListFilterCriteria](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionablelistfiltercriteria.htm)**
    Represents a logical expression containing filter conditions to include or exclude data from the dataset that's associated with the actionable list. This object is available in API version 65.0 and later.
-   **[HealthcareProvider](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareprovider.htm)**
    Represents business-level details about the healthcare organization or the practitioner.
-   **[LifeSciAcctGrpAssignment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciacctgrpassignment.htm)**
    Represents a junction between an account and actionable list. This object is available in API version 65.0 and later.

## Related Topics

- ActionableList (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionablelist.htm)
- ActionableListFilterCriteria (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_actionablelistfiltercriteria.htm)
- HealthcareProvider (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_healthcareprovider.htm)
- LifeSciAcctGrpAssignment (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_lifesciacctgrpassignment.htm)
