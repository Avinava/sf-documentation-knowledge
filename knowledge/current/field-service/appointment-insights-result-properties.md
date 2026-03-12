---
title: "Appointment Insights Result Properties"
domain: field-service
topic: appointment-insights-result-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.146Z
estimatedTokens: 528
keywords: [Appointment, Insights, Result, AppointmentInsightsResult, contains, following, properties.]
---

# Appointment Insights Result Properties

> AppointmentInsightsResult contains the following
        properties.

# Appointment Insights Result Properties

AppointmentInsightsResult contains the following properties.

-   **[blockedSlots](atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_blockedSlots.htm)**
    The total number of potential blocked slots returned by the getAppointmentInsights method.
-   **[blockingRules](atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_blockingRules.htm)**
    Array of blocking rules with the rule name and number of slots
-   **[horizonStartDate](atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_horizonStartDate.htm)**
    The horizon start date as calculated and used by the operation.
-   **[horizonEndDate](atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_horizonEndDate.htm)**
    The horizon end date as calculated and used by the operation.
-   **[operationTimeStamp](atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_operationTimeStamp.htm)**
    The time the operation was executed in Coordinated Universal Time (UTC).
-   **[policyId](atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_policyId.htm)**
    The default policy ID or the policy ID provided in the request.
-   **[resourcesEvaluated](atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_resourcesEvaluated.htm)**
    The total number of service resources loaded by fetch data and evaluated by the getAppointmentInsights method.
-   **[serviceAppointmentId](atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_serviceAppointmentId.htm)**
    The ID of the service appointment used for the request.
-   **[serviceTerritoryId](atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_serviceTerritoryId.htm)**
    The service territory associated with the service appointment. If there is no territory for the service appointment, keep this field empty. This property is optional.

## Related Topics

- blockedSlots (atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_blockedSlots.htm)
- blockingRules (atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_blockingRules.htm)
- horizonStartDate (atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_horizonStartDate.htm)
- horizonEndDate (atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_horizonEndDate.htm)
- operationTimeStamp (atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_operationTimeStamp.htm)
- policyId (atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_policyId.htm)
- resourcesEvaluated (atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_resourcesEvaluated.htm)
- serviceAppointmentId (atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_serviceAppointmentId.htm)
- serviceTerritoryId (atlas.en-us.field_service_dev.meta/field_service_dev/apex_FSL_AppointmentInsightsResult_serviceTerritoryId.htm)
