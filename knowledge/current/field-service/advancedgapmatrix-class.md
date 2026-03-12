---
title: "AdvancedGapMatrix Class"
domain: field-service
topic: advancedgapmatrix-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.167Z
estimatedTokens: 1350
namespace: FSL
keywords: [AdvancedGapMatrix, Represents, matrix, service, resource, IDs, graded, time, slots., instance, used, only, within, context, results, returned, GradeSlotsService, class., Example, FSLOperationId]
---

# AdvancedGapMatrix Class

> Represents a matrix of service resource IDs and graded time slots. An
      instance of this class is used only within the context of the results returned by the GradeSlotsService class.

**Namespace:** `FSL`

# AdvancedGapMatrix Class

Represents a matrix of service resource IDs and graded time slots. An instance of this class is used only within the context of the results returned by the GradeSlotsService class.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

## Example

For an example of how to parse the class results, see [GradeSlotsService Class](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GradeSlotsService.htm#apex_class_FSL_GradeSlotsService "Represents the results shown in the Candidates quick action. Use the GradeSlotsService class to evaluate all possible slots where a given service appointment can be scheduled.").

-   **[AdvancedGapMatrix Properties](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm#apex_FSL_AdvancedGapMatrix_properties)**


## AdvancedGapMatrix Properties

AdvancedGapMatrix contains the following properties.

-   **[FSLOperationId](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm#apex_FSL_AdvancedGapMatrix_operationId)**
    This field only applies to scheduling service appointments that don’t use Enhanced Scheduling and Optimization (ESO). Populated when scheduling a chain of two service appointments with scheduling dependencies, also known as complex work. An asynchronous call is made to schedule both service appointments in the chain. This property contains the FSL\_\_FSL\_Operation\_\_c ID.
-   **[partialResults](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm#apex_FSL_AdvancedGapMatrix_partialResults)**
    Relevant only when Limit Apex Operations is enabled in the Field Service Admin app. If the processing time of the ScheduleService is about to exceed the maximum CPU limits, it returns the results that were already calculated and halts the process. This list contains the details of the partial, processed results. All other parameters are the same.
-   **[resourceIDToScheduleData](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm#apex_FSL_AdvancedGapMatrix_resourceIDToScheduleData)**
    A map that returns service resource IDs and their corresponding available slots stored in the ResourceScheduleData class.
-   **[Service](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm#apex_FSL_AdvancedGapMatrix_serviceAppointment)**
    The service appointment for which the AdvancedGapMatrix was run.

### FSLOperationId

This field only applies to scheduling service appointments that don’t use Enhanced Scheduling and Optimization (ESO). Populated when scheduling a chain of two service appointments with scheduling dependencies, also known as complex work. An asynchronous call is made to schedule both service appointments in the chain. This property contains the FSL\_\_FSL\_Operation\_\_c ID.

#### Signature

public Id FSLOperationId {get; set;}

#### Property Value

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id "HTML (New Window)")

#### Usage

To learn more about the complex work feature, see [Create Scheduling Dependencies Between Service Appointments](https://help.salesforce.com/articleView?id=pfs_complex_work.htm&language=en_US "HTML (New Window)").

### partialResults

Relevant only when Limit Apex Operations is enabled in the Field Service Admin app. If the processing time of the ScheduleService is about to exceed the maximum CPU limits, it returns the results that were already calculated and halts the process. This list contains the details of the partial, processed results. All other parameters are the same.

#### Signature

public List<FSL.PartialResultsInfo> partialResults {get; set;}

#### Property Value

Type: [List](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_list.htm#apex_methods_system_list "HTML (New Window)")<FSL.PartialResultsInfo>

### resourceIDToScheduleData

A map that returns service resource IDs and their corresponding available slots stored in the ResourceScheduleData class.

#### Signature

public Map<Id, FSL.ResourceScheduleData> resourceIDToScheduleData {get; set;}

#### Property Value

Type: [Map](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_map.htm#apex_methods_system_map "HTML (New Window)")<Id, FSL.[ResourceScheduleData](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ResourceScheduleData.htm#apex_class_FSL_ResourceScheduleData "Contains all the details of a service resource’s available slots for a given service appointment. An instance of this class is used only within the context of the results returned by the AdvancedGapMatrix class.")\>

### Service

The service appointment for which the AdvancedGapMatrix was run.

#### Signature

public Service {get; set;}

#### Property Value

Type: ServiceAppointment

## Related Topics

- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
- GradeSlotsService Class (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_GradeSlotsService.htm)
- AdvancedGapMatrix Properties (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm)
- FSLOperationId (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm)
- partialResults (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm)
- resourceIDToScheduleData (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm)
- Service (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_AdvancedGapMatrix.htm)
- ResourceScheduleData (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_ResourceScheduleData.htm)
