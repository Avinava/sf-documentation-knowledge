---
title: "ResourceScheduleData Properties"
domain: field-service
topic: resourcescheduledata-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.067Z
keywords: [ResourceScheduleData, Properties, Index, slot., currentSlotsIndexInAB, Signature, Property, Value, resource, schedulingOptions]
---

# ResourceScheduleData Properties

> Index of the slot.

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