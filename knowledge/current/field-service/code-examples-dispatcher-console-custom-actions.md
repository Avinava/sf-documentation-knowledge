---
title: "Code Examples: Dispatcher Console Custom Actions"
domain: field-service
topic: code-examples-dispatcher-console-custom-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.160Z
keywords: [Code, Examples, Dispatcher, Console, Custom, Actions, Note, Creating, Apex, Classes, Visualforce, Pages, See]
---

# Code Examples: Dispatcher Console Custom Actions

# Code Examples: Dispatcher Console Custom Actions

Learn how to configure Apex classes or Visualforce pages that you want to link to a custom action in the dispatcher console.

Custom actions can either call an Apex class or open a Visualforce page, and can be run on records in several areas of the dispatcher console. To learn how to create custom actions, see [Create Custom Actions for the Dispatcher Console](https://help.salesforce.com/articleView?id=pfs_create_custom_actions.htm&language=en_US).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

All Apex classes implementing the quick action interfaces must be declared as Global to be accessible from the dispatcher console.

## Creating Apex Classes

When you create an Apex class to link to a dispatcher console custom action, implement one of the following three interfaces in your class.

| Interface | Description |
| --- | --- |
| CustomGanttServiceResourceAction | For actions on service resources. The parameters are the service resource record ID, the service territory member record ID reflected on the Gantt, and the start and end dates of the current Gantt view. No additional parameters are included.Use the following format: String action(Id resourceId, Id stmId, Datetime strGanttStartDate, Datetime strGanttEndDate, Map<String, Object> additionalParameters) |
| CustomGanttServiceAppointmentAction | For actions on service appointments. The parameters are the service appointment record IDs—used for bulk actions—and the start and end dates of the current Gantt view. No additional parameters are included. The Map<String, Object> additionalParameters input parameter is reserved for future use but must be included to run the code.Use the following format: String action(List<Id> serviceAppointmentsIds, Datetime strGanttStartDate, Datetime strGanttEndDate, Map<String, Object> additionalParameters)When this action is implemented, multiple service appointments can be returned. In your method, we recommend creating an if statement to check how many IDs are returned. First, validate that at least one ID was returned: serviceAppointmentsIds.size()>1. Then, you can take different actions depending on whether 0, 1, or more appointment IDs were returned. |
| CustomGanttResourceAbsenceAction | For actions on resource absences. The parameters are the resource absence record ID, the absence type (‘na’ or ‘break’), and the start and end dates of the current Gantt view. No additional parameters are included. The Map<String, Object> additionalParameters input parameter is reserved for future use but must be included to run the code.Use the following format: String action(Id absenceId, String absenceType, Datetime strGanttStartDate, Datetime strGanttEndDate, Map<String, Object> additionalParameters) |

These functions must be global and require that a string be returned. If the string isn’t empty, it is used in the Gantt notification shown when a user clicks the related action.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

Use the [Datetime class](https://developer.salesforce.com/docs/atlas.en-us.248.0.apexref.meta/apexref/apex_methods_system_datetime.htm) for all date and time calculations.

**Code Example: Service Resource Custom Action**

This action creates a resource absence of type Non Availability for the selected service resource that spans the days visible on the Gantt.

```

```

**Code Example: Service Appointment Custom Action**

This action toggles the In Jeopardy field between True and False.

```

```

**Code Example: Resource Absence Custom Action**

For resource absences of type NA, this action creates a duplicate absence on the following day.

```

```

## Creating Visualforce Pages

When you create a Visualforce page, use the following GET parameters.

| For actions on... | Description |
| --- | --- |
| Service appointments | Use the following format: services [if multiple], id (comma delimited if multiple), start (current Gantt start date, string), end (current Gantt end date, string)Example for a Visualforce page used to update a single service appointment: ?id=08p4E000000Kj5hQAC&​start=5-7-2018&end=5-8-2018Example for a Visualforce page used to update multiple service appointments: ?services=08p4E000000Kj5hQAC,08p4E000430Kj5hAPP&​start=5-7-2018&end=5-8-2018 |
| Service resources | Use the following format: id, stm (ID of service resource’s current service territory member record), start (current Gantt start date, string), end (current Gantt end date, string)Example: ?id=0Hn4E0000001OMQSA2&​stm=0Hu4E0000005cpPSAQ&start=5-7-2018&​end=5-8-2018 |
| Resource absences | Use the following format: id, type (’break’ or ‘na’), start (current Gantt start date, string), end (current Gantt end date, string)Example: ?id=0Hw4E00000091HSSAY&​type=break&start=5-7-2018&​end=5-8-2018 |

To close the Visualforce lightbox from your code, use: parent.postMessage('closeLightbox','\*');

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

Custom dispatcher console actions can’t open Visualforce pages that are part of a managed package.

#### See Also

-   [Create Custom Actions for the Dispatcher Console](https://help.salesforce.com/articleView?id=pfs_create_custom_actions.htm&language=en_US "Create Custom Actions for the Dispatcher Console - HTML (New Window)")