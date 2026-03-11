---
title: "AdvancedGapMatrix Properties"
domain: field-service
topic: advancedgapmatrix-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:11.948Z
keywords: [AdvancedGapMatrix, Properties, field, only, applies, scheduling, service, appointments, don’t, Enhanced, Scheduling, Optimization, ESO, Populated, chain, two, dependencies, known, complex, work.]
---

# AdvancedGapMatrix Properties

> This field only applies
      to scheduling service appointments that don’t use Enhanced Scheduling and Optimization (ESO).
      Populated
      when
      scheduling a chain of two service appointments with scheduling dependencies, also known as
      complex work. An asynchronous call is made to schedule both service appointments in the chain.
      This property contains the FSL__FSL_Operation__c
      ID.

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