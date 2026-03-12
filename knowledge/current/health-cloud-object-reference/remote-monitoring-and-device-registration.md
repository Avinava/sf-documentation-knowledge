---
title: "Remote Monitoring and Device Registration"
domain: health-cloud-object-reference
topic: remote-monitoring-and-device-registration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.775Z
estimatedTokens: 383
keywords: [Remote, Monitoring, Device, Registration, data, model, objects, managing, collected, devices, issued, patients, program, members, smart]
---

# Remote Monitoring and Device Registration

> The remote monitoring and device registration data model provides objects for managing
  data collected from devices issued to patients or program members, such as smart watches and heart
  monitors.

# Remote Monitoring and Device Registration

The remote monitoring and device registration data model provides objects for managing data collected from devices issued to patients or program members, such as smart watches and heart monitors.

The remote monitoring and device registration data model includes standard objects and record types. The health insurance standard objects are visible to users with the Health Cloud and Health Cloud Platform permission set licenses.

![Remote monitoring entity relationship diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2Fimages%2Fremote_monitoring_erd.png&folder=health_cloud_object_reference)

-   **[CareMetricTarget](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caremetrictarget.htm)**
    Represents the expected care metrics at an org level and patient level. This object is available in API version 49.0 and later.
-   **[UnitOfMeasure](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_unitofmeasure.htm)**
    Represents the unit of measures for care metrics and care observations. This object is available in API version 49.0 and later.
-   **[CareObservation](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careobservation.htm)**
    Represents the observed values for care metrics originating from external systems that contain biometric data. This object is available in API version 49.0 and later.

## Related Topics

- CareMetricTarget (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_caremetrictarget.htm)
- UnitOfMeasure (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_unitofmeasure.htm)
- CareObservation (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_careobservation.htm)
