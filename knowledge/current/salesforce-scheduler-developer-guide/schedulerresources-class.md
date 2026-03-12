---
title: "SchedulerResources Class"
domain: salesforce-scheduler-developer-guide
topic: schedulerresources-class
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:43.180Z
estimatedTokens: 2265
namespace: LxScheduler
keywords: [SchedulerResources, holds, business, logic, resources, availability, Implementation, Considerations, getAppointmentCandidates, getAppointmentCandidatesInput, getAppointmentSlots, getAppointmentSlotsInput, setAppointmentCandidatesMock, expectedResponse, setAppointmentSlotsMock]
---

# SchedulerResources Class

> Contains methods that holds the business logic to get resources
      availability.

**Namespace:** `LxScheduler`

# SchedulerResources Class

Contains methods that holds the business logic to get resources availability.

## Namespace

LxScheduler

## Implementation Considerations

Apex implementation of the methods in the SchedulerResources class should adhere to Apex Governor Limits. It includes synchronous heap size limit, synchronous CPU time limit, and synchronous concurrent transactions for long running transactions. To avoid governor limits, you must tune the input by reducing the time frame, limiting number of service resources, or limiting number or territories at a time. This will reduce the overall transaction time and response size of the implementation. For more information on standard Apex Governer Limits, see [Salesforce Developer Limits and Allocations Quick Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_apexgov.htm).

## Example

To get list of available service resources (appointment candidates):

```

```

To get a list of available appointment time slots for a resource:

```

```

## SchedulerResources Methods

The following are methods for SchedulerResources.

### getAppointmentCandidates(getAppointmentCandidatesInput)

Returns a list of service resources based on work type group or work type and service territories.

Set up Salesforce Scheduler before making requests. This setup includes creating or configuring Service Resources, Service Territory Members, Work Type Groups, Work Types, Work Type Group Members, and Service Territory Work Types. See [Set Up Salesforce Scheduler](https://help.salesforce.com/s/articleView?id=platform.ls_set_up.htm&type=5&language=en_US "HTML (New Window)") for more information.

The appointment time slots are determined based on multiple factors, such as field values, scheduled appointments, absences, Scheduler Settings, and Scheduling Policies to determine available time slots. See [How Salesforce Scheduler Determines Available Time Slots](https://help.salesforce.com/s/articleView?id=platform.ls_how_are_time_slots_determined.htm&type=5&language=en_US "HTML (New Window)") for more information.

The following factors are considered for returning start time and end time of resources.

Resource Availability

Determined using service territory member, service territory, work type, and account operating hours fields.

Resource Unavailability

Determined by resource absences, existing appointments that the resource is assigned to. The resource must be marked as a required resource for the appointment with a status that isn’t in closed, canceled, or completed.

Appointment Start Time Interval in the Scheduling Policy

Appointment start time interval field in the Scheduling Policy is used to determine when the appointment can start. This interval can be 5, 10, 15, 20, 30, or 60. By default, it’s set to 15.

Work Type Duration

The end time is calculated as start time + duration of the work type.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

If asset scheduling is enabled, the response also includes asset-based candidates.

#### Signature

public static String getAppointmentCandidates(lxscheduler.GetAppointmentCandidatesInput getAppointmentCandidatesInput)

#### Parameters

getAppointmentCandidatesInput

Type: [lxscheduler.GetAppointmentCandidatesInput](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_GetAppointmentCandidatesInput.htm#apex_class_lxscheduler_GetAppointmentCandidatesInput "Contains information about the available service resources (appointment candidates) based on work type group and service territories.")

This method takes input as an instance of the lxscheduler.GetAppointmentCandidatesInput class. Build the instance of the input class using the lxscheduler.GetAppointmentCandidatesInputBuilder class.

#### Return Value

Type: String

### getAppointmentSlots(getAppointmentSlotsInput)

Returns a list of available appointment time slots for a resource based on given work type group or work type and service territories.

The appointment time slots are determined based on your Salesforce Scheduler data model configurations. Here are some prerequisites that you can consider while setting up data.

-   Set up Salesforce Scheduler before making your requests. The setup includes creating or configuring Service Resources, Service Territory Members, Work Type Groups, Work Types, Work Type Group Members, and Service Territory Work Types. See [Manage Business Information in Salesforce Scheduler](https://help.salesforce.com/s/articleView?id=platform.ls_set_up.htm&language=en_US) for more information.
-   Configure a work type mapped for each territory in the request body via Service Territory Work Type. Map the same work type to the work type group, via work type group member.

The following factors affect how time slots are calculated and returned.

-   Timezones that differ across operating hours are handled and results are always returned in UTC.
-   The resource must be marked as a required resource on the assigned resource object.
-   The resource is considered unavailable If the status categories of the resource assigned to service appointments are other than Canceled, Cannot Complete, and Completed.
-   Resource Absences of all types are considered unavailable from start to end.
-   The following fields of Work Type records, if configured, are used to fine-tune time slot requirements. For more information, see [Create Work Types in Salesforce Scheduler](https://help.salesforce.com/s/articleView?id=platform.ls_create_work_types.htm&language=en_US).

    | Parameter | Description |
    | --- | --- |
    | Timeframe Start | Time slots sooner than current time + Timeframe Start aren’t returned. |
    | Timeframe End | Time slots later than current time + Timeframe End aren’t returned. |
    | Block Time Before Appointment | The time period before the appointment is considered as unavailable. |
    | Block Time After Appointment | The time period after the appointment is considered as unavailable. |
    | Operating Hours | The overlap of all operating hours from the account, work type, service territory, and service territory member are considered while determining time slots. For more information, see Set Up Operating Hours in Salesforce Scheduler. |

-   Only the time slots within the period of 31 days from the start date are returned.
-   Salesforce Scheduler uses multiple factors, such as field values, scheduled appointments, absences, Scheduler Settings, and Scheduling Policies to determine available time slots, including the earliest and latest appointment slots. See [How Does Salesforce Scheduler Determine Available Time Slots](https://help.salesforce.com/s/articleView?id=platform.ls_how_are_time_slots_determined.htm&type=5&language=en_US "HTML (New Window)").

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

    #### Note

    If asset scheduling is enabled, you can provide an asset-based service resource in requiredResourceIds to retrieve available timeslots for the asset resource.


#### Signature

public static String getAppointmentSlots(lxscheduler.GetAppointmentSlotsInput getAppointmentSlotsInput)

#### Parameters

getAppointmentSlotsInput

Type: [lxscheduler.GetAppointmentSlotsInput](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_GetAppointmentSlotsInput.htm#apex_class_lxscheduler_GetAppointmentSlotsInput "Contains information about the available appointment time slots for a resource based on given work type group and territories.")

This method takes input as an instance of the lxscheduler.GetAppointmentSlotsInput class. Build the instance of the input class using the lxscheduler.GetAppointmentSlotsInputBuilder class.

#### Return Value

Type: String

### setAppointmentCandidatesMock(expectedResponse)

Sets a mock object when running tests for the getAppointmentCandidates method.

This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

public static void setAppointmentCandidatesMock(String expectedResponse)

#### Parameters

expectedResponse

Type: String

#### Return Value

Type: void

This example shows a sample implementation of the GetAppointmentCandidates class:

```

```

This example shows how to set a sample mock using the setAppointmentCandidatesMock method:

```

```

### setAppointmentSlotsMock(expectedResponse)

Sets a mock object when running tests for the getAppointmentSlots method.

This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

public static void setAppointmentSlotsMock(String expectedResponse)

#### Parameters

expectedResponse

Type: String

#### Return Value

Type: void

## Code Examples

```
String response = lxscheduler.SchedulerResources.getAppointmentCandidates(input);
```

```
String response = lxscheduler.SchedulerResources.getAppointmentSlots(input);
```

```apex
public class AppointmentCandidateService {
   //Instance members for parsing
   public String startTime;
   public String endTime;
   public List<String> resources; 
   public String territoryId;
   public static List<AppointmentCandidateService> getAppointmentCandidates(){
      //Build input for GetAppointmentCandidates API
      lxscheduler.GetAppointmentCandidatesInput input = new lxscheduler.GetAppointmentCandidatesInputBuilder()
         .setWorkTypeGroupId('0VSRM0000000AGT4A2')
         .setTerritoryIds(new List<String>{'0HhRM0000000G8W0AU'})
         .setStartTime(System.now().format('yyyy-MM-dd\'T\'HH:mm:ssZ','America/Los_Angeles'))
         .setEndTime(System.now().addDays(2).format('yyyy-MM-dd\'T\'HH:mm:ssZ','America/Los_Angeles'))
         .setSchedulingPolicyId('0VrRM00000000D0')
         .setApiVersion(Double.valueOf('50.0'))
         .build();
      List<AppointmentCandidateService> vList = parse(lxscheduler.SchedulerResources.getAppointmentCandidates(input));
      return vList;
   }
   private static List<AppointmentCandidateService> parse(String json) {
      return (List<AppointmentCandidateService>) System.JSON.deserialize(json, List<AppointmentCandidateService>.class);
   }
}
```

```apex
@isTest
private class GetAppointmentCandidatesTest {
   static testMethod void getAppCandidatesTest() {
      String expectedResponse = '[' +
                                    '  {' +
                                    '    "startTime": "2021-03-18T16:00:00.000+0000",' +
                                    '    "endTime": "2021-03-18T17:00:00.000+0000",' +
                                    '    "resources": [' +
                                    '      "0HnRM0000000Fxv0AE"' +
                                    '    ],' +
                                    '    "territoryId": "0HhRM0000000G8W0AU"' +
                                    '  },' +
                                    '  {' +
                                    '    "startTime": "2021-03-18T19:00:00.000+0000",' +
                                    '    "endTime": "2021-03-18T20:00:00.000+0000",' +
                                    '    "resources": [' +
                                    '      "0HnRM0000000Fxv0AE"' +
                                    '    ],' +
                                    '    "territoryId": "0HhRM0000000G8W0AU"' +
                                    '  }' +
                                    ']';
      lxscheduler.SchedulerResources.setAppointmentCandidatesMock(expectedResponse);

      Test.startTest();
         List<AppointmentCandidateService> candidateList = AppointmentCandidateService.getAppointmentCandidates();
         System.assertEquals(2, candidateList.size(), 'Should return only 2 records!');
      Test.stopTest();
   }
}
```

## Related Topics

- lxscheduler.GetAppointmentCandidatesInput (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_GetAppointmentCandidatesInput.htm)
- lxscheduler.GetAppointmentSlotsInput (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_GetAppointmentSlotsInput.htm)
