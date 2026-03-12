---
title: "Unified Health Scoring"
domain: health-cloud-object-reference
topic: unified-health-scoring
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:35.019Z
estimatedTokens: 287
keywords: [Unified, Health, Scoring, Synchronize, calculated, score, Customer, Data, Platform, category, Resources, data, model, three, objects, tooling, APIs, metadata, two, subtypes]
---

# Unified Health Scoring

> The Unified Health Scoring data model provides three objects, three tooling APIs, and a
  metadata type with two subtypes. Use these objects to implement the feature in your Health Cloud
  org.

# Unified Health Scoring

The Unified Health Scoring data model provides three objects, three tooling APIs, and a metadata type with two subtypes. Use these objects to implement the feature in your Health Cloud org.

| Available in: Enterprise and Unlimited Editions with Health Cloud |
| --- |


The Unified Health Scoring data model can be further divided into two sub-data models—The Score data model and the Actions data model.

**Score Data Model**

The Score data model stores and processes information used for the Score List for Unified Health Scoring and Score Details for Unified Health Scoring components.

![An ERD for the Score data model in Unified Health Scoring.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fhc_uhs_dm_score.png&folder=health_cloud_object_reference)

Records are pulled into Data Cloud from Health Cloud using data streams, and these records are stored in Custom Data Model Objects in Data Cloud. This information is then processed into scores using Calculated Insights, and the Score Synchronization pulls those scores from Data Cloud and inserts them into the HealthScore object in Health Cloud.

**Actions Data Model**

The Actions data model supports displaying contextual prompts for users to act on in the Dynamic Actions for Unified Health Scoring component. Add a custom lookup on Account, Contact, or Lead that references ActionVisibility, and then add custom fields on ActionVisibility as required. Use a data processing solution of your choice to populate data in ActionVisibility and link those records to accounts, contacts, or leads using custom triggers. Once that’s set up, you can configure the Dynamic Action for Unified Health Scoring component to display actions based on the information you have access to via ActionVisibility. Actions triggered from this object are logged in HealthScoreActionLog.

![An ERD for the ACtions data model in Unified Health Scoring.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fhc_uhs_dm_actions.png&folder=health_cloud_object_reference)

-   **[ActionVisibility](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_actionvisibility.htm)**
    This object serves as a junction to connect Account or Contact to other objects so that information in those other object can be used to define visibility rules for actions in the Dynamic Actions for Unified Health Scoring component. This object is available in API version 55.0 and later.
-   **[HealthScore](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_healthscore.htm)**
    Represents a subject’s score for a specific score category. This object is available in API version 55.0 and later.
-   **[HealthScoreActionLog](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_healthscoreactionlog.htm)**
    Represents the log of actions triggered from the Dynamic Actions for Unified Health Scoring component in the Unified Health Scoring feature. This object is available in API version 55.0 and later.

## Related Topics

- /connect/health/scores/synchronization (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_trigger_scores_sync.htm)
- /connect/health/scores/synchronization/status/${scoreCategory} (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_get_sync_status.htm)
- Synchronization (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_trigger_scores_sync.htm)
- Synchronization Status (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_resources_get_sync_status.htm)
- ActionVisibility (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_actionvisibility.htm)
- HealthScore (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_healthscore.htm)
- HealthScoreActionLog (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_healthscoreactionlog.htm)
