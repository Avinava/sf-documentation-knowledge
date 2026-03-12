---
title: "Shift Management Data Triggers"
domain: workdotcom-dev-guide
topic: shift-management-data-triggers
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.595Z
estimatedTokens: 1199
keywords: [Shift, Management, Data, Triggers, Work.com, installs, uses, Employee, Location, Service, Appointment, Territory, Member, Adding, modifying]
---

# Shift Management Data Triggers

> Work.com installs and uses data triggers for Shift Management on Employee, Location,
    Service Appointment, and Service Territory Member. Adding or modifying records for these objects
    can trigger changes in related objects. It’s also possible to disable some triggers for data
    loads.

# Shift Management Data Triggers

Work.com installs and uses data triggers for Shift Management on Employee, Location, Service Appointment, and Service Territory Member. Adding or modifying records for these objects can trigger changes in related objects. It’s also possible to disable some triggers for data loads.

## employeeServiceAppointmentUpdate

The employeeServiceAppointmentUpdate trigger executes on an update of Service Appointment. If the following service appointment conditions are met, a ShiftAcceptNotification\_\_c record is created for the user:

-   The old status of the user’s service appointment is not Dispatched.
-   The new status is Dispatched.
-   The scheduled start time is greater than today.

A Scheduled Job looks for ShiftAcceptNotification\_\_c records created in the last hour and sends notifications to the users for their newly dispatched service appointments.

To prevent notifications from being sent, you can disable the scheduled job. To disable the scheduled job:

1.  From the App Launcher, select **Shift Management Setup**.
2.  On **Define App Settings** click **Setup**.
3.  Go to the **Scheduled Jobs** tab.
4.  Uncheck **Hourly job to notify employees to accept/reject shifts assigned to them**.

## Employee\_AfterUpdate

The Employee\_AfterUpdate trigger executes on an update of Employee. If an employee’s wellness status changes from Available to Work to Unavailable or Unknown, the trigger sets all service appointments assigned to that employee to Unscheduled and creates a ResourceAbsence object for one month. The trigger also disables the employee’s access to the mobile and desktop experience of Shift Management. A wellness status of Unavailable or Unknown indicates that the employee is not fit for work.

If the wellness status changes from Unavailable or Unknown to Available to Work, the employee is considered ready to come back to work. The trigger deletes the resource absence and grants the employee access to the mobile and desktop experience of Shift Management.

## LocationInsertBefore and LocationUpdateBefore

The LocationInsertBefore trigger executes on an insert of a new Location and LocationUpdateBefore executes on an update of a Location. The triggers validate that the location Name field is unique. A unique location name is required for creating service territories with the data importer when setting up Shift Management. Each service territory is linked to a location and there must only be one location with that name.

Disable the trigger:

1.  From the App Launcher, select **Shift Management Setup**.
2.  On **Define App Settings** click **Setup**.
3.  Go to the **General Settings** tab.
4.  Uncheck **Enforce unique location names (recommended)**.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=workdotcom_dev_guide)

#### Warning

If you disable this trigger, duplicate location names can exist which could lead to data import failures when creating Service Territories. If you have integration issues because of duplicate location names from an external system, it could be helpful to disable this trigger, but in general it is not recommended to do so.

## ServiceAppointmentBeforeUpdate

The ServiceAppointmentBeforeUpdate trigger executes on an update of Service Appointment. If the new status is Rejected, the trigger creates a ResourceAbsence object for that service resource for the service appointment’s duration. When an employee can’t work during the assigned shift’s date and time, they can reject the shift. When the shift is rejected, the trigger creates a resource absence so that a new shift isn’t rescheduled to the employee at the same time.

## ServiceTerritoryMember\_AfterUpdate

The ServiceTerritoryMember\_AfterUpdate trigger executes when you create a Service Territory Member. The trigger then creates a Sharing record that links the user to the service territory public group.

The data import for setting up Shift Management creates service resources for each employee and service territories for each location. In Shift Management, a service territory member associates a service resource to the service territory that the employee works in. A Sharing record links the employee to the service territory public group which gives the employee access to the facility plan, shifts, and service appointments of the service territory for their shift.

## Enable and Disable Triggers

Not all triggers that come with Shift Management can be manually disabled. The triggers that you can disable are in Shift Management’s General Settings.

Disable a trigger:

1.  From the App Launcher, select **Shift Management Setup**.
2.  On **Define App Settings** click **Setup**.
3.  Go to the **General Settings** tab.
4.  Uncheck the desired trigger.
