---
title: "ServiceResourceScheduleHandler Interface"
domain: apex-reference
topic: serviceresourceschedulehandler-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.126Z
estimatedTokens: 653
namespace: LxScheduler
keywords: [ServiceResourceScheduleHandler, Allows, implementing, check, external, calendar, events, find, already, booked, time, slots, requested, service, resources., part, Salesforce, Scheduler., Usage, getUnavailableTimeslots]
---

# ServiceResourceScheduleHandler Interface

> Allows an implementing class to check external calendar events to find
      already booked time slots for the requested service resources. This interface is part of
      Salesforce Scheduler.

**Namespace:** `LxScheduler`

# ServiceResourceScheduleHandler Interface

Allows an implementing class to check external calendar events to find already booked time slots for the requested service resources. This interface is part of Salesforce Scheduler.

## Namespace

[LxScheduler](atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm "The LxScheduler namespace provides an interface and classes for integrating Salesforce Scheduler with external calendars.")

## Usage

The lxscheduler.ServiceResourceScheduleHandler interface is called by Salesforce Scheduler APIs.

To implement this interface, you must first declare a class with the implements keyword as follows:

```

```

Next, your class must provide an implementation for the following method:

```

```

The implemented method must be declared as global or public.

-   **[ServiceResourceScheduleHandler Methods](atlas.en-us.apexref.meta/apexref/apex_interface_lxscheduler_ServiceResourceScheduleHandler.htm#apex_lxscheduler_ServiceResourceScheduleHandler_methods)**

-   **[ServiceResourceScheduleHandler Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_lxscheduler_ServiceResourceScheduleHandler.htm#apex_interface_lxscheduler_ServiceResourceScheduleHandler_Example)**


## ServiceResourceScheduleHandler Methods

The following are methods for ServiceResourceScheduleHandler.

-   **[getUnavailableTimeslots(var1)](atlas.en-us.apexref.meta/apexref/apex_interface_lxscheduler_ServiceResourceScheduleHandler.htm#apex_lxscheduler_ServiceResourceScheduleHandler_getUnavailableTimeslots)**
    Passes the required information to get unavailable time slots from an external system. The implementation of this method returns the lxscheduler.ServiceResourceSchedule class.

### getUnavailableTimeslots(var1)

Passes the required information to get unavailable time slots from an external system. The implementation of this method returns the lxscheduler.ServiceResourceSchedule class.

#### Signature

public List<lxscheduler.ServiceResourceSchedule> getUnavailableTimeslots(lxscheduler.ServiceAppointmentRequestInfo var1)

#### Parameters

var1

Type: lxscheduler.ServiceAppointmentRequestInfo

Represents the list of parameters that are passed to the ServiceResourceScheduleHandler interface.

#### Return Value

Type: List<lxscheduler.ServiceResourceSchedule>

## ServiceResourceScheduleHandler Example Implementation

This is an example implementation of the lxscheduler.ServiceResourceScheduleHandler interface.

```

```

This example shows how to set a sample test mock using the lxscheduler.ServiceResourceScheduleHandler interface.

```

```

## Code Examples

```apex
public class ServiceResourceScheduleHandlerImpl implements LxScheduler.ServiceResourceScheduleHandler{}
```

```apex
public static List<LxScheduler.ServiceResourceSchedule> getUnavailableTimeslots(LxScheduler.ServiceAppointmentRequestInfo requestInfo){
      //Your code here
}
```

```apex
/**
 * Implement interface lxscheduler.ServiceResourceScheduleHandler
 * This class is called when fetching service resources and time slots through Salesforce Scheduler API.*/
   Public class ServiceResourceScheduleHandlerImpl implements lxscheduler.ServiceResourceScheduleHandler{
    
    // The main interface method.
    public static List<lxscheduler.ServiceResourceSchedule> getUnavailableTimeslots(lxscheduler.ServiceAppointmentRequestInfo requestInfo){
        //Request info values.
        List<lxscheduler.ServiceResourceInfo> serviceResources=requestInfo.getServiceResources();
        DateTime startDate=requestInfo.getStartDate();
        DateTime endDate=requestInfo.getEndDate();
      
       
        List<lxscheduler.ServiceResourceSchedule> resourceUnavailability = new List<lxscheduler.ServiceResourceSchedule>();
        Set<lxscheduler.UnavailableTimeslot> unavailabilityIntervals = new Set<lxscheduler.UnavailableTimeslot>();
        
        //This is a dummy response. Implement your own business logic to connect to your internal or external systems.
        for (Integer i = 0; i < 5; i++) {
             //Set the unavailability intervals of a service resource.
            unavailabilityIntervals.add(new lxscheduler.UnavailableTimeslot(startDate.addMinutes(15*i),startDate.addMinutes(15*(i+1))));
        }
       
       for (lxscheduler.ServiceResourceInfo ServiceResource:serviceResources) {
            //Set the unavailability of Service resource.
        resourceUnavailability.add(new lxscheduler.ServiceResourceSchedule(serviceResource.getServiceResourceId(),unavailabilityIntervals));

       }
        
        return resourceUnavailability;
    }
}
```

```apex
@isTest
private class ServiceResourceScheduleHandlerImplTest {
   static testMethod void getUnavailableTimeslotsTest() {
   
      //Initializing the test execution with mock values. Change it according to the implementation.
      //In case of non-test execution, the lxscheduler.ServiceAppointmentRequestInfo instance will automatically initialize.
      
      //Mock values for lxscheduler.ServiceResourceInfo
      String userId = '005D2000000I1N6IAK';
      String userName = 'someuser@example.com';
      String email = 'someuser@example.com';
      String serviceResourceId = '0HnD20000004C9bKAE';
      List<String> territoryIds = new List<String>();
      String resourceType = 'T';
      lxscheduler.ServiceResourceInfo serviceResInfo = new lxscheduler.ServiceResourceInfo(userId, userName, email, 
                                                       serviceResourceId, territoryIds, resourceType);
      
      //Mock values for lxscheduler.ServiceAppointmentRequestInfo 
      DateTime startDate = System.now();
      DateTime endDate = System.now();
      List<lxscheduler.ServiceResourceInfo> serviceResources = new List<lxscheduler.ServiceResourceInfo>();
      serviceResources.add(serviceResInfo);
      String schedulingPolicyId = '0VrD20000004C9S';
      String workTypeGroupId = '0VSD20000004C93OAE';
      String accountId = '001D2000002pkXwIAI';
      String primaryResourceId = '0HnD20000004C9bKAE';
      String workTypeId = '08qD20000004C9XIAU';
      String correlationId = 'SOME_ID';
      
      lxscheduler.ServiceAppointmentRequestInfo mockRequestInfo = new lxscheduler.ServiceAppointmentRequestInfo(startDate, endDate, serviceResources, 
                                                                  schedulingPolicyId, workTypeGroupId, accountId, 
                                                                  primaryResourceId, workTypeId, correlationId);
      
      ServiceResourceScheduleHandlerImpl.getUnavailableTimeslots(mockRequestInfo);
   }
}
```

## Related Topics

- LxScheduler (atlas.en-us.apexref.meta/apexref/apex_namespace_lxscheduler.htm)
- ServiceResourceScheduleHandler Methods (atlas.en-us.apexref.meta/apexref/apex_interface_lxscheduler_ServiceResourceScheduleHandler.htm)
- ServiceResourceScheduleHandler Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_lxscheduler_ServiceResourceScheduleHandler.htm)
- getUnavailableTimeslots(var1) (atlas.en-us.apexref.meta/apexref/apex_interface_lxscheduler_ServiceResourceScheduleHandler.htm)
