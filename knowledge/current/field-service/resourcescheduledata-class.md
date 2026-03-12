---
title: "ResourceScheduleData Class"
domain: field-service
topic: resourcescheduledata-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.601Z
estimatedTokens: 780
namespace: FSL
keywords: [ResourceScheduleData, service, resource’s, slots, appointment, instance, context, results, AdvancedGapMatrix, Usage, currentSlotsIndexInAB, resource, schedulingOptions]
---

# ResourceScheduleData Class

> Contains all the details of a service resource’s available slots for a
      given service appointment. An instance of this class is used only within the context of the
      results returned by the AdvancedGapMatrix
    class.

**Namespace:** `FSL`

# ResourceScheduleData Class

Contains all the details of a service resource’s available slots for a given service appointment. An instance of this class is used only within the context of the results returned by the AdvancedGapMatrix class.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

## Usage

For more information, see [AdvancedGapMatrix](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm#apex_class_FSL_AdvancedGapMatrix "Represents a matrix of service resource IDs and graded time slots. An instance of this class is used only within the context of the results returned by the GradeSlotsService class.").

-   **[ResourceScheduleData Properties](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ResourceScheduleData.htm#apex_FSL_ResourceScheduleData_properties)**


## ResourceScheduleData Properties

ResourceScheduleData contains the following properties.

-   **[currentSlotsIndexInAB](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ResourceScheduleData.htm#apex_FSL_ResourceScheduleData_currentSlotsIndexInAB)**
    Index of the slot.
-   **[resource](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ResourceScheduleData.htm#apex_FSL_ResourceScheduleData_resource)**
    Not currently in use.
-   **[schedulingOptions](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ResourceScheduleData.htm#apex_FSL_ResourceScheduleData_schedulingOptions)**
    A list of all possible scheduling options for the service resource.

### currentSlotsIndexInAB

Index of the slot.

#### Signature

public Integer currentSlotsIndexInAB {get; set;}

#### Property Value

Type: [Integer](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_integer.htm#apex_methods_system_integer "HTML (New Window)")

### resource

Not currently in use.

#### Signature

public FSL.EncapsulatedResource resource {get; set;}

#### Property Value

Type: FSL.EncapsulatedResource

### schedulingOptions

A list of all possible scheduling options for the service resource.

#### Signature

public List<FSL.SchedulingOption> schedulingOptions {get; set;}

#### Property Value

Type: [List](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_list.htm#apex_methods_system_list "HTML (New Window)")<[FSL.SchedulingOption](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_SchedulingOption.htm#apex_class_FSL_SchedulingOption "Provides the details of an individual slot available for scheduling. Represents a run-time object used within the context of the results returned in the AdvancedGapMatrix class.")\>

## Related Topics

- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
- AdvancedGapMatrix (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm)
- ResourceScheduleData Properties (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ResourceScheduleData.htm)
- currentSlotsIndexInAB (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ResourceScheduleData.htm)
- resource (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ResourceScheduleData.htm)
- schedulingOptions (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ResourceScheduleData.htm)
- FSL.SchedulingOption (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_SchedulingOption.htm)
