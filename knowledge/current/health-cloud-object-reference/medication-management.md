---
title: "Medication Management"
domain: health-cloud-object-reference
topic: medication-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.102Z
estimatedTokens: 1079
keywords: [Medication, Management, data, model, objects, enable, providers, care, coordinators, clinicians, perform, reconciliation, therapy, review, their]
---

# Medication Management

> The Medication Management data model provides objects to enable providers, care
  coordinators, and clinicians to perform a medication reconciliation and medication therapy review
  of their patients’ medication regimen. The data model provides objects for managing information on
  medication reconciliations, medication recommendations, and comprehensive and targeted medication
  reviews conducted for patients.

# Medication Management

The Medication Management data model provides objects to enable providers, care coordinators, and clinicians to perform a medication reconciliation and medication therapy review of their patients’ medication regimen. The data model provides objects for managing information on medication reconciliations, medication recommendations, and comprehensive and targeted medication reviews conducted for patients.

![Diagram showing the relationship between objects in the Medication Management data model](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fhealthcloud_medicationmgmt_erd.png&folder=health_cloud_object_reference)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/medication-management.html "HTML (New Window)").

-   **[ActionPlanTemplateAssignment](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_actionplantemplateassignment.htm)**
    Represents the association of an action plan template with its related care plan template, goal, or problem definition. When instantiated, the action plan generates the corresponding intervention tasks and links them to the appropriate record, such as a condition, goal, or care plan.
-   **[CarePlan](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careplan.htm)**
    Stores information about a care plan associated with a medication therapy review. Care plans are used to assign tasks to patients as part of medication therapy reviews. This object is available in API version 56.0 and later.
-   **[CarePlanActivity](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careplanactivity.htm)**
    Represents a planned action that’s part of a care plan. For example, knowledge campaigns, physiotherapy appointments, medication regimens, etc. This object is a child object of CarePlan. This object is available in API version 56.0 and later.
-   **[CarePlanTemplate](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careplantemplate.htm)**
    Stores information about care plan template that’s used to define to-do lists for patients during medication therapy reviews. This object is available in API version 56.0 and later.
-   **[MedicationReconciliation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_medicationreconciliation.htm)**
    Stores information about a medication reconciliation conducted for a patient This object is available in API version 54.0 and later.
-   **[MedicationTherapyReview](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_medicationtherapyreview.htm)**
    Stores information about a medication therapy review conducted for a patient. This object is available in API version 56.0 and later.
-   **[MedicationTherapyStmtReview](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_medicationtherapystmtreview.htm)**
    Represents a junction object between the Medication Therapy Review and Medication Statement objects. This object is available in API version 56.0 and later.
-   **[MedReconRecommendation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_medreconrecommendation.htm)**
    Stores information about a medication recommendation and associates a recommendation to a medication reconciliation. This object is available in API version 54.0 and later.
-   **[MedReconStmtRecommendation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_medreconstmtrecommendation.htm)**
    Associates a medication recommendation to a medication statement and medication reconciliation. This object is available in API version 54.0 and later.
-   **[MedTherapyStmtReviewIssue](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_medtherapystmtreviewissue.htm)**
    Represents a junction object between the Medication Therapy Statement Review and Clinical Detected Issue objects. This object is available in API version 56.0 and later.

## Related Topics

- ActionPlanTemplateAssignment (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_actionplantemplateassignment.htm)
- CarePlan (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careplan.htm)
- CarePlanActivity (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careplanactivity.htm)
- CarePlanTemplate (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careplantemplate.htm)
- MedicationReconciliation (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_medicationreconciliation.htm)
- MedicationTherapyReview (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_medicationtherapyreview.htm)
- MedicationTherapyStmtReview (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_medicationtherapystmtreview.htm)
- MedReconRecommendation (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_medreconrecommendation.htm)
- MedReconStmtRecommendation (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_medreconstmtrecommendation.htm)
- MedTherapyStmtReviewIssue (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_medtherapystmtreviewissue.htm)
