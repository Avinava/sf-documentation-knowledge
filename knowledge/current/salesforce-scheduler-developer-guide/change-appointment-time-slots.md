---
title: "Change Appointment Time Slots"
domain: salesforce-scheduler-developer-guide
topic: change-appointment-time-slots
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.155Z
estimatedTokens: 574
keywords: [Change, Appointment, Time, Slots, slot, period, day, place, multi-resource, service, modified, show, alternative, tome, assigned]
---

# Change Appointment Time Slots

> A time slot represents a period in a day when an appointment takes place. a
      multi-resource service appointment can be modified. To show the alternative tome slots for the
      assigned resources, use the getAppointmentSlots REST
      API.

# Change Appointment Time Slots

A time slot represents a period in a day when an appointment takes place. a multi-resource service appointment can be modified. To show the alternative tome slots for the assigned resources, use the getAppointmentSlots REST API.

Create a page in your app to show the selected primary resource, other required resources, including assets, and the consolidated time slots for the primary service resource and required resources that users select. Here’s how a page can look.![A representation of the manage multiple service resource screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fscreen_manage_multi_resources.png&folder=salesforce_scheduler_developer_guide)

When the user selects one or more required resources, refresh the available time slots by making a POST request to the [getAppointmentSlots](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/requests_ls_getappointmentslots.htm "Returns a list of available appointment time slots for a resource based on given work type group or work type and service territories.") REST API and passing the selected required resources along with the workTypeGroupId and territoryId parameters.

Resource URI

```

```

Sample Request

```

```

Sample Response

The API returns the time slots where the selected primary resource and required resources are available for the multi-resource service appointment.

```

```

Parse the JSON response, and show the available time slots for the selected resources. Here’s how a Select Service Appointment Time page can look.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

A multi-resource appointment can have a maximum of five required service resources: one primary required service resource plus four required service resources, including asset resources.

![A representation of the selected required resources screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fscreen_selected_requied_resources.png&folder=salesforce_scheduler_developer_guide)

On the next page in your app, you can show the appointment details for the user to review and create the appointment.

## Code Examples

```
https://yourInstance.salesforce.com/services/data/vXX.X/scheduling/getAppointmentSlots
```

```
{
   "startTime" : "2021-10-04T17:00:00.000+0000",
   "endTime" : "2021-10-04T18:00:00.000+0000",
   "workTypeId" : {
       "08qB0000000Tf1FIAS"
   },
   "accountId" : "001B000001McLhMIAV",
   "territoryIds" : ["0HhB0000000TaHOKA0"],
   "primaryResourceId" : "0HnB0000000TavDKAS",
   "requiredResourceIds" : ["0HnB0000000DynTKAS", "0HnB0000000Tav3KAC"]
}
```

```
{
   "timeSlots" : [ {
      "endTime" : "2021-10-04T18:00:00.000+0000",
      "startTime" : "2021-10-04T17:00:00.000+0000",
      "territoryId" : "0HhB0000000TaHOKA0"
   }, {
      "endTime" : "2021-10-04T19:00:00.000+0000",
      "startTime" : "2021-10-04T17:00:00.000+0000",
      "territoryId" : "0HhB0000000TaHOKA0"
   }, {
      "endTime" : "2021-10-04T20:00:00.000+0000",
      "startTime" : "2021-10-04T17:30:00.000+0000",
      "territoryId" : "0HhB0000000TaHOKA0"
   }, {
      "endTime" : "2021-10-04T18:00:00.000+0000",
      "startTime" : "2021-10-04T17:00:00.000+0000",
      "territoryId" : "0HhB0000000TaHOKA0"
   }, {
      "endTime" : "2021-10-04T18:30:00.000+0000",
      "startTime" : "2021-10-04T17:30:00.000+0000",
      "territoryId" : "0HhB0000000TaHOKA0"
   }, {
      "endTime" : "2021-10-04T18:00:00.000+0000",
      "startTime" : "2021-10-04T17:00:00.000+0000",
      "territoryId" : "0HhB0000000TaHOKA0"
   } ]
}
```

## Related Topics

- getAppointmentSlots (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/requests_ls_getappointmentslots.htm)
