---
title: "Intelligent Appointment Management"
domain: health-cloud-object-reference
topic: intelligent-appointment-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.937Z
estimatedTokens: 1134
keywords: [Intelligent, Appointment, Management, Health, Cloud, integrates, customer’s, system, provide, patient, booking, experience, Salesforce, call, center]
---

# Intelligent Appointment Management

> Health Cloud integrates with a customer’s appointment management system to provide a
  patient appointment booking experience in Salesforce for call center agents and care coordinators.
  The Health Cloud data model for appointments enables you to work with multiple source systems
  operating on different electronic health record platforms.

# Intelligent Appointment Management

Health Cloud integrates with a customer’s appointment management system to provide a patient appointment booking experience in Salesforce for call center agents and care coordinators. The Health Cloud data model for appointments enables you to work with multiple source systems operating on different electronic health record platforms.

![Appointment Management Data Model](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fappointment_management_data_model.png&folder=health_cloud_object_reference)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/intelligent-appointment-management.html "HTML (New Window)").

-   **[Practitioner Availability at Facilities](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/healthcare_appointment_booking_data_model.htm)**
    To book an appointment, we need to know the availability of a given practitioner at a given facility. To get this information, Health Cloud queries the specific source EHR system, using the IDs of the practitioner and the facility as stored in that source system.
-   **[AppointmentReason](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_appointmentreason.htm)**
    Represents a patient’s reason for making an appointment. Used for self-scheduling in Intelligent Appointment Management. This object is available in API version 53.0 and later.
-   **[ApptReasonEngmtChannelType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_apptreasonengmtchanneltype.htm)**
    Represents an available engagement channel for a given AppointmentReason. Possible engagement channels could be video, phone, or in person. Possible appointment reasons could be annual physical, fever, or physical therapy. This object is available in API version 56.0 and later.
-   **[AssetType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_assettype.htm)**
    Represents a type of asset, such as a type of item, physical space, or service offering. This object is available in API version 62.0 and later.
-   **[CarePractnFacilityAppt](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_carepractnfacilityappt.htm)**
    Represents a junction object between a HealthcarePractitionerFacility (practitioner at a facility) and a ServiceAppointment (appointment). This object is available in API version 52.0 and later.
-   **[ClinicalEncounter](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_clinicalencounter.htm)**
    Represents a healthcare related encounter of a patient with a care provider. This is a broad object that covers multiple phases of a patient’s healthcare service experience, all the way from pre-admission to stay to discharge, and everything in between. This object is available in API version 51.0 and later.
-   **[ServiceAppointmentAsset](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceappointmentasset.htm)**
    Represents a junction between Service Appointment and Asset. This junction object enables admins to associate a patient appointment to an asset such as a piece of medical equipment. This object is available in API version 62.0 and later.
-   **[WorkTypeAssetType](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_worktypeassettype.htm)**
    Represents a junction between Work Type and Asset Type. This junction object enables admins to associate a visit type such as PRP Hair Restoration to an asset type such as Room. This object is available in API version 62.0 and later.
-   **[WorkTypeCareSpecialty](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_worktypecarespecialty.htm)**
    Represents a relationship between a care specialty and a visit type (Work Type). This object is available in API version 52.0 and later.
-   **[WorkTypeCodeSetBundle](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_worktypecodesetbundle.htm)**
    Represents a relationship between visit type (Work Type) and code set bundles that represent the service and appointment details for the visit type. This object is available in API version 52.0 and later.

## Related Topics

- Practitioner Availability at Facilities (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/healthcare_appointment_booking_data_model.htm)
- AppointmentReason (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_appointmentreason.htm)
- ApptReasonEngmtChannelType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_apptreasonengmtchanneltype.htm)
- AssetType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_assettype.htm)
- CarePractnFacilityAppt (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_sforce_api_objects_carepractnfacilityappt.htm)
- ClinicalEncounter (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_clinicalencounter.htm)
- ServiceAppointmentAsset (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_serviceappointmentasset.htm)
- WorkTypeAssetType (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_worktypeassettype.htm)
- WorkTypeCareSpecialty (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_worktypecarespecialty.htm)
- WorkTypeCodeSetBundle (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_worktypecodesetbundle.htm)
