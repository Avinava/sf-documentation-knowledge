---
title: "GradeSlotsService Constructors"
domain: field-service
topic: gradeslotsservice-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.001Z
keywords: [GradeSlotsService, Constructors, Creates, new, instance, class, specified, scheduling, policy, service, appointment, ID., schedulingPolicyId, serviceAppointmentId, Signature, Parameters]
---

# GradeSlotsService Constructors

> Creates a new instance of the GradeSlotsService
    class using the specified scheduling policy ID and service appointment ID.

## GradeSlotsService Constructors

The following are constructors for GradeSlotsService.

-   **[GradeSlotsService(schedulingPolicyId, serviceAppointmentId)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GradeSlotsService.htm#apex_FSL_GradeSlotsService_ctor)**  
    Creates a new instance of the GradeSlotsService class using the specified scheduling policy ID and service appointment ID.

### GradeSlotsService(schedulingPolicyId, serviceAppointmentId)

Creates a new instance of the GradeSlotsService class using the specified scheduling policy ID and service appointment ID.

#### Signature

public GradeSlotsService(Id schedulingPolicyId, Id serviceAppointmentId)

#### Parameters

schedulingPolicyId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the scheduling policy being used to schedule the service appointment.

serviceAppointmentId

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

The record ID of the service appointment being scheduled.