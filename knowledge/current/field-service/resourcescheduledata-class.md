---
title: "ResourceScheduleData Class"
domain: field-service
topic: resourcescheduledata-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.067Z
keywords: [ResourceScheduleData, Class, list, possible, scheduling, options, service, resource., schedulingOptions, Signature, Property, Value]
---

# ResourceScheduleData Class

> A list of all possible scheduling options for the service
      resource.

### schedulingOptions

A list of all possible scheduling options for the service resource.

#### Signature

public List<FSL.SchedulingOption> schedulingOptions {get; set;}

#### Property Value

Type: [List](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_list.htm#apex_methods_system_list "HTML (New Window)")<[FSL.SchedulingOption](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_SchedulingOption.htm#apex_class_FSL_SchedulingOption "Provides the details of an individual slot available for scheduling. Represents a run-time object used within the context of the results returned in the AdvancedGapMatrix class.")\>