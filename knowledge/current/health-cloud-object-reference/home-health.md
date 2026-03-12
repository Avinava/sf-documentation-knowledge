---
title: "Home Health"
domain: health-cloud-object-reference
topic: home-health
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:33.854Z
estimatedTokens: 1732
keywords: [Home, Health, data, model, helps, store, organization’s, healthcare, services, preferences, patients, their, skills, resources, possess]
---

# Home Health

> The Home Health data model helps you store data for your organization’s home healthcare
  services. You can store the preferences patients have for their services, the skills your
  resources possess, the details of each home visit, and so on. The Home Health data model is
  primarily built over the Salesforce Field Service data model and uses many of its
  objects.

# Home Health

The Home Health data model helps you store data for your organization’s home healthcare services. You can store the preferences patients have for their services, the skills your resources possess, the details of each home visit, and so on. The Home Health data model is primarily built over the Salesforce Field Service data model and uses many of its objects.

| Available in: Enterprise and Unlimited editions of Health Cloud with the Home Health Add-On |
| --- |


![An entity relationship diagram for Home Health.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fhc_home_health_erd.png&folder=health_cloud_object_reference)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/home-health.html "HTML (New Window)").

To learn more about the Field Service objects used in Home Health, see [Field Service Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/fsl_dev_soap_objects.htm).

-   **[AccountServicePreference](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_accountservicepreference.htm)**
    Represents the preferences an account has for the services they receive. In Home Health, this object represents the preferences that a patient has for the health workers assigned to their visits. This object is available in API version 58.0 and later.
-   **[CareServiceVisit](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careservicevisit.htm)**
    Associates a service request or a referral request (ClinicalServiceRequest) with a visit (ServiceAppointment) that’s part of that service or referral. This object is available in API version 58.0 and later.
-   **[CareServiceVisitPlan](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careservicevisitplan.htm)**
    Associates a service request with the series of visits that are planned as part of that visit. The series of visits is represented using MaintenancePlan. This object is available in API version 58.0 and later.
-   **[ClinicalServiceRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_api_home_health_clinicalservicerequest.htm)**
    Represents requests for a procedure or diagnostic service that needs to be planned, proposed, or performed as part of the patient’s healthcare. This object is available in API version 51.0 and later.
-   **[ClinicalServiceRequestDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_api_home_health_clinicalservicerequestdetail.htm)**
    Associates records from different objects to a clinical service request record to add more information to it. This is a multi-object junction object. This object is available in API version 51.0 and later.
-   **[CoverageBenefit](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_api_home_health_coveragebenefit.htm)**
    Represents the benefits provided to a covered member by a purchaser’s plan.
-   **[CoverageBenefitItem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefititem.htm)**
    Specific service covered by the insurance plan. This object is available in API version 53.0 and later.
-   **[MedicationStatement](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_api_home_health_medicationstatement.htm)**
    Represents a record of medication that the patient is currently taking or has taken in the past. This object is available in API version 51.0 and later.
-   **[PartyAppointmentRequest](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_partyappointmentrequest.htm)**
    Represents an appointment request raised by a patient for their home healthcare services. This object is available in API version 61.0 and later.
-   **[PartySchedulePreference](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_partyschedulepreference.htm)**
    Represents the schedule preference that a patient has for their home healthcare visit. This object is available in API version 61.0 and later.
-   **[PlanBenefit](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_planbenefit.htm)**
    Represents the standard benefits available under a plan that the purchaser offers to their members.
-   **[PlanBenefitItem](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_planbenefititem.htm)**
    Represents the details of a benefit available under a purchaser’s plan that is offered to their members.
-   **[ScheduleBroadcast](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_schedulebroadcast.htm)**
    Represents a broadcast of appointments that's sent to resources of specific service territories. This object is available in API version 60.0 and later.
-   **[ScheduleBroadcastAppointment](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_schedulebroadcastappointment.htm)**
    Represents appointments that schedulers broadcast to resources using a schedule broadcast. This object is available in API version 60.0 and later.
-   **[ScheduleBroadcastTerritory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_schedulebroadcastterritory.htm)**
    Represent service territories to which a schedule broadcast is sent. This object is available in API version 60.0 and later.
-   **[ScheduleBrdcstApptResource](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_schedulebrdcstapptresource.htm)**
    Represents a junction between a Schedule Broadcast Appointment and a Service Resource. This object represents the resources to whom a schedule broadcast is sent. This object is available in API version 60.0 and later.
-   **[SkillType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_skilltype.htm)**
    Represents the broader type or category that a skill belongs to. This object is available in API version 58.0 and later.

#### See Also

-   [Health Cloud Administrators Guide: Home Health Data Model and Permissions](https://help.salesforce.com/s/articleView?id=ind.hc_admin_home_health_data_model_and_permissions.htm&type=5&language=en_US)

-   [Health Cloud Administrators Guide: Set up Home Health](https://help.salesforce.com/s/articleView?id=ind.hc_admin_home_health.htm&type=5&language=en_US)

-   [Salesforce Help: Use Home Health](https://help.salesforce.com/s/articleView?id=ind.hc_home_health.htm&type=5&language=en_US)

## Related Topics

- AccountServicePreference (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_accountservicepreference.htm)
- CareServiceVisit (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careservicevisit.htm)
- CareServiceVisitPlan (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careservicevisitplan.htm)
- ClinicalServiceRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_api_home_health_clinicalservicerequest.htm)
- ClinicalServiceRequestDetail (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_api_home_health_clinicalservicerequestdetail.htm)
- CoverageBenefit (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_api_home_health_coveragebenefit.htm)
- CoverageBenefitItem (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_coveragebenefititem.htm)
- MedicationStatement (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_api_home_health_medicationstatement.htm)
- PartyAppointmentRequest (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_partyappointmentrequest.htm)
- PartySchedulePreference (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_partyschedulepreference.htm)
