---
title: "Create Service Appointment Lists in the Dispatcher Console"
domain: field-service
topic: create-service-appointment-lists-in-the-dispatcher-console
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:53.718Z
estimatedTokens: 727
keywords: [Service, Appointment, Dispatcher, Console, user-specific, temporary, adding, custom, permission, managed, package, enabled, app, creates, connection]
---

# Create Service Appointment Lists in the Dispatcher Console

> You can create user-specific temporary appointment lists by adding the Create
   Temporary Service Appointment List custom permission in Field Service managed package.
  If the custom permission is enabled, the Field Service app creates a connection to the
    CreateFilterEvent__e platform event channel and subscribes to related
  messages.

# Create Service Appointment Lists in the Dispatcher Console

You can create user-specific temporary appointment lists by adding the Create Temporary Service Appointment List custom permission in Field Service managed package. If the custom permission is enabled, the Field Service app creates a connection to the CreateFilterEvent\_\_e platform event channel and subscribes to related messages.

For information on allocation limits consumed by subscribing to the event channel, see [Change Data Capture Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_allocations.htm).

The custom filters are created and accessible only by users who created the CreateFilterEvent\_\_e platform event, and not for other users. Based on a custom filter, you can create temporary lists with identical names. Each list is created as a new instance and doesn’t override an existing one. Each list can include a maximum of 300 service appointments.

After a temporary appointment list is loaded to the dispatch console, the list remains static. To auto-refresh the list, enable **Enhanced Live Updates** in the Field Service Admin app and make sure you have read access to all fields in the service appointment’s field sets. When the dispatch console is refreshed, the temporary list is no longer available. To delete a temporary list without refreshing, click **Delete Filter**.

To create a custom filter for appointments, define and publish a new CreateFilterEvent\_\_e platform event by adding these custom fields.

-   FSL\_\_ServiceApptIds\_\_c: JSON array of service appointment Ids. For example, \["08pO10000049k7lIAA","08pO10000049k7mIAA"\]
-   FSL\_\_FilterName\_\_c: Name of the temporary list based on the specified service appointment IDs. For example, High Priority Appointments
-   FSL\_\_Description\_\_c (optional): Description. For example, This filter displays high priority appointments.
-   FSL\_\_FilterCategory\_\_c: Value must be set to GENERAL
-   FSL\_\_LoadFilterImmediately\_\_c: When set to true, the dispatcher console switches to the new temporary list.

This code sample creates a FSL\_\_CreateFilterEvent\_\_e platform event and loads a temporary list created from the queried list of service appointment IDs to the dispatcher console.

```

```

#### See Also

-   [Salesforce Field Service: Set Custom Permissions for Field Service](https://help.salesforce.com/s/articleView?id=service.pfs_custom_permissions.htm&language=en_US "Salesforce Field Service: Set Custom Permissions for Field Service - HTML (New Window)")

-   [Salesforce Field Service: Create Custom Actions for the Field Service Dispatcher Console](https://help.salesforce.com/s/articleView?id=service.pfs_create_custom_actions.htm&language=en_US "Salesforce Field Service: Create Custom Actions for the Field Service Dispatcher Console - HTML (New Window)")

## Code Examples

```apex
List<id> ids = new List<id>();
for (ServiceAppointment s :[select id from ServiceAppointment limit 10]) 
                          { ids.add(s.id);
                          }

FSL__CreateFilterEvent__e filterEvent = new FSL__CreateFilterEvent__e();

filterEvent.FSL__ServiceApptIds__c = JSON.serialize(ids);
system.debug(filterEvent.FSL__ServiceApptIds__c);
filterEvent.FSL__FilterName__c = 'My Temporary List';
filterEvent.FSL__Description__c = 'a temporary list that was created to demonstrate this feature';
filterEvent.FSL__FilterCategory__c = 'GENERAL';
filterEvent.FSL__LoadFilterImmediately__c = true;

Database.SaveResult eventRunningResult = EventBus.publish(filterEvent);
```
