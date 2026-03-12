---
title: "Field Service Custom Triggers"
domain: field-service
topic: field-service-custom-triggers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.750Z
estimatedTokens: 10733
keywords: [Service, Custom, Triggers, ensure, objects, respective, processed, scheduling, Assigned, Resource, Event, Gantt, Filter, Palette, Map]
---

# Field Service Custom Triggers

> Field Service custom triggers ensure that the objects and respective fields are processed
  before or after scheduling.

# Field Service Custom Triggers

Field Service custom triggers ensure that the objects and respective fields are processed before or after scheduling.

The Field Service package provides triggers on Salesforce objects. Each trigger checks for various conditions and then performs tasks based on what it finds. Some of the triggers run on custom objects and some on standard objects.

| Trigger Name | Host Object | Object Type |
| --- | --- | --- |
| FSL__TR021_AssignedResource.trigger | Assigned Resource | Standard Object |
| FSL__TR004_Event.trigger | Event | Standard Object |
| FSL__TR030_GanttPalette.trigger | Gantt Palette | Custom Object |
| FSL__TR029_GanttFilter.trigger | Gantt Filter | Custom Object |
| FSL__TR034_OperatingHours.trigger | Operating Hours | Standard Object |
| FSL__TR013_OptimizationRequest.trigger | Optimization Request | Custom Object |
| FSL__TR028_Polygon.trigger | Map Polygon | Custom Object |
| FSL__TR007_ResourceAbsence.trigger | Resource Absence | Standard Object |
| FSL__TR010_SchedulingPolicy.trigger | Scheduling Policy | Custom Object |
| FSL__SchedulingPolicyWorkRule.trigger | Scheduling Policy Work Rule | Custom Object |
| FSL__TR001_Service.trigger | Service Appointment | Standard Object |
| FSL__TR008_ServiceResource.trigger | Service Resource | Standard Object |
| FSL__TR012_Capacity.trigger | Service Resource Capacity | Standard Object |
| FSL__TR066_ServiceObjective.trigger | Service Objective | Custom Object |
| FSL__TR025_ServiceResourceSkill.trigger | Service Resource Skill | Standard Object |
| FSL__TR0023_ServiceTerritory.trigger | Service Territory | Standard Object |
| FSL__TR020_ResourceTerritories.trigger | Service Territory Member | Standard Object |
| FSL__TR0024_ServiceTerritory.trigger | Skill Requirement | Standard Object |
| FSL__TR051_TimeDependency.trigger | Time Dependency | Custom Object |
| FSL__TR027_TimeSlot.trigger | Time Slot | Standard Object |
| FSL__TR005_UserTerritory.trigger | User Territory | Custom Object |
| FSL__TR022_WorkOrder.trigger | Work Order | Standard Object |
| FSL__TR026_WorkRule.trigger | Work Rule | Custom Object |
| FSL__TR022_WorkOrderLineItem.trigger | Work Order Line Item | Standard Object |

## Assigned Resource

**Before Insert:**

-   Stops the trigger execution if one of the created resources is crew members. This situation is handled in a different flow.
-   Fails the trigger if the inserted assigned resources don’t have the scheduled start and schedule end time fields populated.
-   Fails the trigger if the created resources don’t have a valid service territory member assigned to them.
-   Populates the created resource’s ServiceCrewId field if the resources are from type Crew.

**After Insert:**

-   If the Enable User Territories sharing setting is enabled, this trigger shares the created service appointment with the service territory public group. This functionality provides sharing to the dispatchers that are part of the service appointment territory. If the service resource is relocated, the appointment is shared with the public group of the new territory, ensuring dispatchers have access to relevant service appointments.
-   If the Enable User Territories sharing setting is enabled and the respective service appointment parent sharing setting is enabled, this trigger shares the created service appointment’s parent with the service territory public group. This action provides sharing to the dispatchers that are part of the service appointment territory. To learn more, see [Limit Access to Field Service Records](https://help.salesforce.com/articleView?id=fs_sharing.htm&type=5&language=en_US).
-   If the status categories change to Dispatched, this trigger shares the created resource’s service appointments with the service resource’s users. If the service territories change, this trigger shares with the service territory public groups.
-   Mentions the assigned resource user if the relevant setting is enabled.
-   Performs this operation in an asynchronous method if possible.
-   Stops the trigger execution if one of the created resources is crew members. This behavior is handled in a different flow.
-   Updates or creates a calendar event based on the created resource.
-   If the assigned resources’ service statuses are either None or Canceled, this trigger changes their statuses to Assigned.
-   If the created resources’ service is a multi-day service appointment, this trigger checks if it’s necessary to recalculate the service duration. If so, the trigger recalculates the length.
-   If the travel trigger is enabled in the org, this trigger recalculates travel for all services scheduled on the same day as the services’ start and end dates.
-   Creates assigned resources for crew members. If the resource in the trigger is for the resource type crew, we create a single resource per crew member as well.
-   Updates the ResourceCapacity object according to the resources’ service appointments. If a service appointment is scheduled to a contractor, this trigger updates their capacity to reflect the actual scheduled working time and working items allocated.

**Before Update:**

-   Fails the trigger if the created Assigned Resources record doesn’t have a valid Service Territory Member assigned to them.
-   Populates the ServiceCrewId field if the service resources are from type crew.

**After Update:**

-   If the Enable User Territories sharing setting is enabled, this trigger shares the created service appointment with the service territory public group. This functionality provides sharing to the dispatchers that are part of the service appointment territory. If the service resource is relocated, the appointment is shared with the public group of the new territory, ensuring dispatchers have access to relevant service appointments.
-   If the service appointment is a multi-day appointment, this trigger checks if there’s a need to recalculate the service duration. If so, this trigger recalculates the length.
-   Updates or creates a calendar event based on the assigned resources updated.
-   Creates and deletes assigned resources based on the resources’ updates. If an assigned resource in the trigger is for the service resource of type crew, we create a single assigned resource per crew member as well.
-   Updates the Resource Capacity object according to the assigned resources’ service appointments. If an assigned resource was scheduled to a contractor, we update their capacity to reflect the actual scheduled working time and working items allocated.
-   If the Service Resource field was changed on the assigned resource update, this trigger removes old sharing and creates sharing according to the service resource’s and the dispatcher’s territories.
-   If the Make assigned resources followers of service appointments that are Dispatched or In Progress setting is enabled in the settings page, and the respective service appointment Status Category field was updated, this trigger makes the updated assigned resources followers of the service appointments and parents.
-   If the travel trigger is enabled in the org, this trigger recalculates travel for all services scheduled in the same day of the services’ start and end dates.
-   Updates the schedule mode according to the actual scheduling operation (that is, Optimization, Automatic, Manual).

**Before Delete:**

-   Removes sharing from the delete assigned resources’ service appointments.
-   If the deleted assigned resource is a resource of the type crew, this trigger deletes the respective crew members appointment resources.

**After Delete:**

-   If the travel trigger is enabled in the org, this trigger recalculates travel for all services scheduled in the same day of the deleted assigned resources’ services’ start and end dates.
-   Updates the Resource Capacity object according to the deleted assigned resources’ service appointments. If a service appointment was unscheduled from a contractor, update their capacity to reflect the actual scheduled working time and working items allocated.
-   If the Make assigned resources followers of service appointments that are Dispatched or In Progress setting is enabled in the settings page, this trigger unfollows the deleted assigned resources’ service appointments and service appointments’ parents.
-   Nullifies the deleted assigned resources’ Service Appointments’ scheduled start and end time, and changes the status to None.
-   If one of two Follow Immediately chains were unscheduled, that is, the assigned resource got deleted, this trigger unschedules the respective service appointment in the chain. To learn more, see [Schedule an Appointment That Immediately Follows Another](https://releasenotes.docs.salesforce.com/en-us/spring20/release-notes/rn_field_service_follow_immed.htm).

## Event

All triggers for this object are part of the Calendar Sync feature, which is described in [Calendar Sync’s Knowledge Article](https://help.salesforce.com/articleView?id=000316720&type=1&language=en_US).

**Before Insert:**

-   Creates Resource Absences, Work Orders, Service Appointments, and Assigned Resources according to the settings described in [Calendar Sync’s Knowledge Article](https://help.salesforce.com/articleView?id=000316720&type=1&language=en_US).
-   Calendar Sync’s settings are located in the Field Service settings page. From the settings page, select **Sharing** | **Calendar Sync**.

**After Update:**

This file is called FSL\_\_TR004\_Event\_BeforeUpdate but fires only after update.

-   If one or more of the following fields has changed, this trigger updates the Salesforce records accordingly: OwnerId, Subject, Location, StartDateTime, EndDateTime.
-   If the FSL\_\_Event\_Type\_\_c field has changed and the new value is valid, this trigger creates the Salesforce records accordingly.

**After Delete:**

This file is called FSL\_\_TR004\_Event\_BeforeDelete but fires only after delete.

-   If the FSL\_\_Event\_Type\_\_c field matches the ‘Calendar Event type’ setting of Service Appointment, and the service hasn’t been updated, then this trigger deletes the Assigned Resource related to that service. This trigger unschedules the Service Appointment.
-   If the FSL\_\_Event\_Type\_\_c field matches the ‘Calendar Event type’ setting of Resource Absence, then this trigger deletes the related absence.

## Gantt Filter

**After Insert:**

-   If the Make this filter available for all users checkbox is checked, this trigger creates a Share record for the FSL\_\_Gantt\_Filter\_\_c and AllInternalUsers group.

**After Update:**

-   If the Make this filter available for all users checkbox is unchecked in the update, then this trigger deletes its share record.
-   If the checkbox is checked in the update, then this trigger adds a sharing record as described in After Insert.

## Gantt Palette

**After Insert:**

-   Add sharing to the AllInternalUsers group.

**After Update:**

-   Add sharing to the AllInternalUsers group if no such sharing exists already.

## Map Polygon

**Before Insert:**

-   Sets the minimum and maximum Latitude and Longitude of the polygon to the designated fields.

**Before Update:**

-   Sets the minimum and maximum Latitude and Longitude of the polygon to the designated fields.

## Operating Hours

**Before Delete:**

-   Validates that the record deleted isn’t the default operating hours in appointment booking settings. From the Field Service settings page, select **Global Actions** | **Appointment Booking**.

**After Update:**

-   If the Appointment Bundling feature is enabled, and the Use Bundle Apex Mode custom setting equals 2, the serviceTerritoryRefresh API http request is triggered.

## Optimization Request

**Before Insert:**

-   Sets the FSL\_\_Text\_Status\_\_c text field with the value of the FSL\_\_Status\_\_c picklist field. The FSL\_\_Text\_Status\_\_c is a text field marked as an External ID and is used to improve query performance.

**Before Update:**

-   Prevents the FSL\_\_Status\_\_c picklist field from changing from In Progress to Queued. This trigger returns the status to In Progress.
-   Validates that a record with the FSL\_\_Status\_\_c value of Aborted doesn’t change to Completed. If it does, this trigger prevents the change and throws an error.
-   If the status is changed to Aborted, this trigger checks the following conditions:
    -   The change wasn’t caused by the optimization user.
    -   The Optimization Request wasn’t aborted by the auto-kill feature. That is, the feature that kills requests that stay in a specific status more than what’s defined in the custom settings.
    -   The user has Abort\_Optimization\_Request custom permission on their profile or one of their permission sets.

If all the previously mentioned criteria are met, the request is aborted.

## Resource Absence

**Before Insert:**

-   Changes the scale of the geolocation values (latitude and longitude) to 6 digits after the decimal point.
-   Removes seconds and milliseconds from the resource absence DateTime fields.
-   Fills the InternalSLRGeolocation fields (latitude and longitude) based on the geolocation values. The InternalSLRGeolocation fields are used in street-level routing and predictive route calculations.

**After Insert:**

-   If the inserted resource absence is the type nonavailability then:
    -   If a multi-day service appointment was affected by the resource absence and there’s just one service appointment, this trigger updates its duration.
    -   If Fix Overlaps is enabled in the org and Travel Trigger is disabled, this trigger calls Fix Overlaps.
    -   If Travel Trigger is enabled in the org and no multi-day appointment was updated in step 1, this trigger recalculates travel for all services scheduled in the same day of the absences’ start and end dates.
    -   If the calendar sync feature is turned on then the trigger creates a calendar event for the resource absence.
-   Otherwise, this trigger does nothing.

**Before Update:** (content is the same as Before Insert)

-   Changes the scale of the geolocation values (latitude and longitude) to 6 digits after the decimal point.
-   Removes seconds and milliseconds from the resource absence’s DateTime fields.
-   Fills the InternalSLRGeolocation fields (latitude and longitude) based on the geolocation values. The InternalSLRGeolocation fields are used in street-level routing and predictive routes’ calculations. We don’t check for a change in the geolocation values—we update them like in the Before Insert trigger.

**After Update:**

-   If the updated resource absence is the type non availability then:
    -   If a multi-day service appointment was affected by the resource absence change and there’s just one service appointment, this trigger updates its duration.
    -   If Fix Overlaps is enabled in the org and Travel Trigger is disabled, this trigger calls Fix Overlaps.
    -   If Travel Trigger is enabled in the org and no multi-day appointment was updated in step 1, this trigger recalculates travel for all services scheduled in the same day of the absences’ start and end dates.
    -   If the calendar sync feature is turned on then the trigger creates a calendar event for the resource absence.
-   Otherwise, this trigger does nothing.

**Before Delete:**

-   Deletes the matching calendar event if it exists. See the [Calendar Sync’s Knowledge Article](https://help.salesforce.com/articleView?id=000316720&type=1&language=en_US) for more information.

**After Delete:**

-   If the deleted resource absence is the type nonavailability then:
    -   If a multi-day service appointment was affected by the resource absence deletion and there’s just one service appointment, this trigger updates its duration.
    -   If Fix Overlaps is enabled in the org and Travel Trigger is disabled, this trigger calls Fix Overlaps.
    -   If Travel Trigger is enabled in the org and no multi-day appointment was updated in step 1, this trigger recalculates travel for all services scheduled in the same day of the absences’ start and end dates.

## Scheduling Policy

**Before Insert:**

-   Validates that the Travel Mode checkbox is checked only when this feature is enabled in the org.
-   Validates that In-Day Optimization is checked only when Enhanced Optimization is enabled in the org.

**After Insert:**

-   Creates Earliest Start Time and Due Date basic time rules if they don’t exist.
-   Create the Scheduling Policy Work Rule junction object to assign these work rules to the inserted policy.

**Before Update:**

-   Validates that the Travel Mode checkbox is checked only when this feature is enabled in the org.
-   Validates that In-Day Optimization is checked only when Enhanced Optimization is enabled in the org.

**Before Delete:**

-   Validate that the deleted record isn’t the default scheduling policy for the appointment booking action.
-   Validates that the Travel Mode checkbox is checked only when this feature is enabled in the org.
-   Validates that In-Day Optimization is checked only when Enhanced Optimization is enabled in the org.
-   Deletes the Earliest Start Time and Due Date’Scheduling Policy Work Rules junction objects.

## Scheduling Policy Work Rule

**Before Insert:**

-   Validates that there are no duplications. That is, validates that there’s just one Scheduling Policy Work Rule record referencing a specific work rule in the same policy.
-   Validates that there aren’t more than two enhanced match rules in the same policy. If there are two, make sure they’re referencing different Linking Objects.
-   Validates that there aren’t more than four Count Rules with Count Type of CustomValue.
-   Validates that all Count Rule fields are valid.

**Before Update:**

Same as Before Insert.

**Before Delete:**

-   Prevents the deletion of a Scheduling Policy Work Rule record related to Due Date and Earliest Start Time basic rules.
-   If you delete the Scheduling Policy, it passes over this validation and deletes all related Scheduling Policy Work Rules.

## Service Appointment

**Before Insert:**

-   Remove seconds from the Service Appointment’s DateTime fields.
-   If there’s a geolocation (latitude and longitude) on the created ServiceAppointment record, limit the decimal places after the decimal point to a maximum of 6 digits.
-   If there’s a geolocation (latitude and longitude) on the created ServiceAppointment record, populate the FSL\_\_InternalSLRGeolocation\_\_Latitude\_\_s, FSL\_\_InternalSLRGeolocation\_\_Longitude\_\_s fields. These fields are used when calculating street-level routing routes.
-   If the Derive the Service Appointment due date from its Work Type setting is enabled, this trigger derives the Duration field from the work order parent record and populates the Due Date field with the value of Earliest Start Permitted plus Due Date offset, which comes from the parent’s work type field.
-   If the Set your default service appointment duration to one hour setting is enabled, this trigger sets the service appointment duration to 1 hour if one of the following occurs:
    -   The duration field is null.
    -   The duration is shorter than 1 minute.

**After Insert:**

-   If the Enable User Territories sharing setting is enabled, share the created service appointment with the service territory public group. This behavior provides sharing to the dispatchers who are part of the service appointment’s territory.
-   If the Enable User Territories sharing setting is enabled and the respective service appointment parent sharing setting is enabled, that is, Share parent Work Order when Service Appointment is shared, this trigger shares the created service appointment’s parent with the service territory public group. This behavior provides sharing to the dispatchers who are part of the service appointment’s territory.
-   If the Derive the Service Appointment due date from its Work Type setting is enabled, this trigger derives the Duration field from the work order parent record and populates the Due Date field with the value of Earliest Start Permitted plus Due Date offset, which comes from the parent’s work type field. This behavior is intentionally in both the Before Insert and the After Insert triggers.
-   Schedules created service appointments in batches if they have the Auto Schedule field value set to true. The default policy, which is set in the Field Service settings page, is used when auto-scheduling service appointments upon creation.
-   After the batch was invoked, the Auto Schedule flag is set to false automatically.
-   If the Use polygons to assign service territories setting is enabled, this trigger auto populates the created service appointment’s service territory field based on the service appointment’s address and its match of a Map Polygon Service Territory field.
-   If there’s no match between the service appointment’s address and the organization map polygons, the service territory field remains unchanged.
-   If the Appointment Bundling feature is enabled; the Use Bundle Apex Mode custom setting equals 2; and the inserted service appointment is a bundle or a bundle member; then the afterServiceAppointmentUpdate API http request is triggered.
-   If the Appointment Bundling feature is enabled; automatic bundling is enabled; the inserted service appointment isn’t a bundle or a bundle member; the modified fields of the service appointment exist within the restrictions of the automatic mode; the service territory of the service appointment is in the defined ApptBundlePolicySvcTerr; the Recordeset Filter Criteria matches; the status of the service appointment exists in the bundle statuses; the service appointment isn’t pinned; and the due date isn’t in the past while considering the timezone of the service appointment’s service territory; then the automatic API request is triggered.

**Before Update:**

-   Remove seconds from the service appointment’s DateTime fields.
-   If there’s a geolocation (latitude and longitude) on the created ServiceAppointment record, this trigger limits the decimal places after the decimal point to a maximum of 6 digits.
-   If Service Appointment Status Transitions are enabled in the Field Service settings page and there was a change in the service appointment status field, this trigger validates the status transition legality.
-   If the updated service appointment’s Status Category was changed to either Canceled or New, this trigger removes the Scheduled Start Time and Scheduled End Time field values.
-   Prevents updating the Scheduled Start Time, Scheduled End Time, Latitude, and Longitude field values if the Is Pinned field value is set to true.
-   If the service appointment is a multi-day service appointment, this trigger checks if there’s a need to recalculate the service duration. If so, it recalculates the length.
-   If the Drip-Feed feature is enabled in the settings page, this trigger dispatches the next service appointment in the day. This action is done in case the current service appointment status categories changed to Completed, Canceled or,Couldn’t Complete. For more information, see [Drip Feed Service Appointments](https://help.salesforce.com/articleView?id=pfs_dispatch_drip_feed.htm&type=5&language=en_US) in Salesforce Help.
-   If the Mention assigned user when the Service Appointment is dispatched setting is enabled, mention the user upon service cancellation.
-   Validates that the updated service appointment duration is longer than 1 minute. if the duration is null or 1 minute, change the duration to 1 hour.
-   If there’s a geolocation (latitude and longitude) on the updated service record and it has changed within the update, this trigger populates the FSL\_\_InternalSLRGeolocation\_\_Latitude\_\_s, FSL\_\_InternalSLRGeolocation\_\_Longitude\_\_s fields. Those fields are used when calculating street-level routing routes.
-   If the FSL\_\_Prevent\_Geocoding\_For\_Chatter\_Actions\_\_c field is checked, this trigger disables Data.com’s geolocation cleanup, which happens on address change, and returns the value of FSL\_\_Prevent\_Geocoding\_For\_Chatter\_Actions\_\_c field to false.
-   If the Auto Schedule field on the updated service appointment record is set to true upon the service appointment’s update process, this trigger prepares a set of service appointments that are called on the After Update trigger operation and sets the field to false.
-   If the Use polygons to assign service territories setting is enabled and their geolocations fall within relevant Map Polygons records, this trigger classifies the updated service appointment territories based on a geographic area. For more information, see [Create and Manage Map Polygons](https://help.salesforce.com/articleView?id=pfs_map_polygons.htm&type=5&language=en_US) and [Enable Map Polygons](https://help.salesforce.com/articleView?id=pfs_map_polygons_enable.htm&type=5&language=en_US) in Salesforce Help.

**After Update:**

-   Shares the updated service appointments with the assigned resources if the status categories were changed to Dispatched. Shares with the service territory public groups if the service territories changed.
-   Mentions the assigned resource user if the relevant setting is enabled.
-   Performs this operation in an asynchronous method if not already in an async context.
-   Creates and deletes Salesforce calendar events based on the service appointment status changes.
    -   If the SA Status category changed from New/Scheduled to Dispatched, this trigger creates a calendar event.
    -   If the service appointment status category changed from Dispatched to Scheduled/New, this trigger deletes the calendar event.
    -   If a service appointment assigned resource was changed and the service appointment remained dispatched, this trigger updates the relevant Salesforce calendar event accordingly.
-   Updates the Resource Capacity object according to the service appointment change. If a service appointment was scheduled to a contractor, this trigger updates their capacity to reflect the actual scheduled working time and working items allocated.
-   Schedules updated service appointments in batches if they have the Auto Schedule field value set to true. The default policy, which is set in the Field Service settings page, is used when auto-scheduling service appointments upon update.
-   After the batch is invoked, the Auto Schedule flag is set to false automatically.
-   If the Make assigned resources followers of service appointments that are Dispatched or In Progress setting is enabled in the settings page, and the Status Category field was updated, this trigger makes the assigned resources followers of the updated service appointments.
-   If an updated service appointment is assigned to a Service Crew, this trigger creates/updates/deletes the service’s assigned resources according to the newly updated service appointment to reflect the actual Service Crew scheduling. To learn more, see [Considerations for Scheduling Service Crews](https://help.salesforce.com/articleView?id=pfs_service_crews_considerations.htm&type=5&language=en_US) in Salesforce Help.
-   If the travel trigger is enabled in the org, this trigger recalculates travel for all services scheduled in the same day of the services’ start and end dates.
-   If the Scheduled Start and End Times of the updated service appointments are null but the service appointments have an assigned resource related to them, this trigger deletes the assigned resources.
-   Updates the schedule mode according to the actual scheduling operation, that is, Optimization, Automatic, or Manual.
-   Evaluates the scheduling recipes according to the actual service appointment update, that is, Canceled, Shortened, Late-end, or Emergency.
-   To learn more, see [Create Scheduling Recipes for Common Events](https://help.salesforce.com/articleView?id=pfs_create_scheduling_recipe.htm&type=5&language=en_US) in Salesforce Help.
-   If the Appointment Bundling feature is enabled; the Use Bundle Apex Mode custom setting equals 2; and the updated service appointment is a bundle or a bundle member; then run the bundle service appointment logic.
-   If the Appointment Bundling feature is enabled; the Use Bundle Apex Mode custom setting equals 2; and the updated service appointment is a bundle or a bundle member; then the afterServiceAppointmentUpdate API http request is triggered.
-   If the Appointment Bundling feature is enabled; the Use Bundle Apex Mode custom setting equals 2; and the updated service appointment is a bundle member; then the trigger doesn’t update the SchedStartTime and the SchedEndTime fields when the RelatedBundleId field hasn’t changed. Only if the RelatedBundleId is updated, the SchedStartTime and the SchedEndTime fields change.
-   If the Appointment Bundling feature is enabled; automatic bundling is enabled; the updated service appointment isn’t a bundle or a bundle member; the modified fields of the service appointment exist within the restrictions of the automatic mode; the service territory of the service appointment is in the defined ApptBundlePolicySvcTerr; the Recordeset Filter Criteria matches; the status of the service appointment exists in the bundle statuses; the service appointment isn’t pinned; and the due date isn’t in the past while considering the timezone of the service appointment’s service territory; then the automatic API request is triggered.

**Before Delete:**

-   Deletes the matching calendar event if it exists. See the [Calendar Sync’s Knowledge Article](https://help.salesforce.com/articleView?id=000316720&type=1&language=en_US) for more information.
-   Deletes assigned resource records from the deleted service appointments.
-   Remove sharing on the parent record, that is, the Work Order, from the territories’ public groups.

## Service Objective

**Before Insert:**

-   Validates that the service objective has a record type.
-   If the service objective is a custom logic objective, validates and decodes the Custom Logic Data (must be filled).

**Before Update:**

Same as Before Insert.

## Service Resource

**Before Insert:**

-   If the Efficiency field isn’t empty, this trigger checks if its value is in the valid range (between 0.1–10). If not, this trigger prevents the insertion and shows an error next to the Efficiency field.
-   If the ServiceCrewId field is empty, this trigger checks if there’s another Service Resource record pointing to the same service crew. If so, the trigger throws an error and prevents the insertion.

**After Insert:**

-   If location-based sharing is turned on in your org, this trigger creates a ServiceResourceShare object for the user specified in the RelatedRecordId field. If location-based sharing is turned off it, this trigger does nothing. If the RelatedRecordId field is empty for a specific record, for example, a Service Resource of type Crew, this trigger doesn’t create a share object for the specific record.

**Before Update:**

-   If the IsCapacityBased checkbox changed from false to true, this trigger validates there’s only one service territory member, excluding secondary service territory members, linked to that resource. Otherwise, this trigger throws an error and prevents the update.
-   If the Efficiency field isn’t empty, this trigger checks if its value is in the valid range (between 0.1–10). If not, this trigger prevents the update and shows an error next to the Efficiency field.
-   If the IsCapacityBased checkbox is checked, this trigger validates that this service resource doesn’t have any Service Crew Member records. Otherwise, this trigger throws an error and prevents the update.
-   If the ServiceCrewId field changed and the new value isn’t empty, this trigger validates that there’s no existing Service Resource record pointing to that Service Crew. Otherwise, this trigger throws an error and prevents the update.

**After Update**

-   If the RelatedRecordId changed in the update and location-based sharing is turned on in your org, this trigger deletes all manual sharing records for the Service Resource, including those records created by the user, and creates a ServiceResourceShare object for the new related user. If it fails to delete one of the manual sharing objects this trigger doesn’t delete any of them.

## Service Resource Capacity

The trigger is named TR012\_CapacityAfterUpdate but it fires only before insert and before update.

**Before Insert:**

-   Validates that monthly capacities are defined in the first day of the month.
-   Validates that capacities of the same duration type don’t overlap each other, that is, they don’t share a resource and date.
-   Validates that the Time Period and End Date fields are valid.
-   Updates the MinutesUsed\_\_c field according to the duration of services scheduled within the capacity.
-   If the CapacityInWorkItems field isn’t empty, then this trigger updates the Work\_Items\_Allocated\_\_c field with the number of services scheduled within the capacity.
-   HoursInUse\_\_c field is a formula field based on MinutesUsed\_\_c. This field updates accordingly.
-   Updates the Last Updated Epoch field with the number of milliseconds since January 1, 1970, 00:00:00 GMT.

**Before Update:**

-   Validates that monthly capacities are defined in the first day of the month.
-   Validates that capacities of the same duration type don’t overlap, that is, they don’t share a resource and date.
-   Validates that the the Time Period and End Date fields are valid.
-   Validates if one or more of the following fields have changed: TimePeriod, StartDate, CapacityInHours, CapacityInWorkItems, ServiceResourceId.
-   If any of these fields have changed, this trigger updates the MinutesUsed\_\_c field according to the duration of services scheduled within the capacity.
-   If the CapacityInWorkItems field isn’t empty, then this trigger updates the Work\_Items\_Allocated\_\_c field with the number of services scheduled within the capacity.
-   HoursInUse\_\_c field is a formula field based on MinutesUsed\_\_c. This field updates accordingly.
-   Updates the Last Updated Epoch field with the number of milliseconds since January 1, 1970, 00:00:00 GMT.

## Service Resource Skill

**Before Insert:**

-   Removes seconds and milliseconds from the Effective Start Date and Effective End Date fields.

**Before Update:**

Same as Before Insert.

## Service Territory

**Before Insert:**

-   If the Enable Territory Name Duplicates custom setting is off (the default value is off), then this trigger makes sure there’s no duplication in the names of the inserted territories.
-   If the territory has a geolocation, then this trigger fills up the internal street-level routing geolocation values.

**After Insert:**

-   If the Enable User Territories sharing setting is enabled, this trigger creates a new public group with the name of the territory, if no such group exists, and creates a sharing record for that group.
-   Adds the public group of the territory as a group member to the public group of the parent territory, if it has one.
-   If the Enable Service Auto Classification custom setting is on (the default is on), this trigger sets the FSL\_\_TerritoryLevel\_\_c field according to the parent territory and top-level territory values of all territories. This field represents the level of the territory in the hierarchy and is used in the polygon’s algorithm.
-   If the Appointment Bundling feature is enabled; and the Use Bundle Apex Mode custom setting equals 2; then the serviceTerritoryRefresh API http request is triggered.

**Before Update:**

-   If the Enable Territory Name Duplicates custom setting is off (the default value is off) and the Name field has changed, then this trigger makes sure there’s no duplication in the names of the updated territories.
-   If the territory has a geolocation, then this trigger fills up the internal street-level routing geolocation values.

**After Update:**

-   If the name or owner fields changed, this trigger updates the public group of the territory accordingly.
-   If the Parent Territory field changed, this trigger updates the Parent Territory’s public group and recalculates the FSL\_\_TerritoryLevel\_\_c field value to all records according to the new hierarchy.
-   If the Appointment Bundling feature is enabled; the Use Bundle Apex Mode custom setting equals 2; and the Operating Hours property was updated; then the serviceTerritoryRefresh API http request is triggered.

**Before Delete:**

-   Deletes the Service Territory’s public group.
-   Updates children territory’s FSL\_\_TerritoryLevel\_\_c field according to the new hierarchy.
-   If the Appointment Bundling feature is enabled; and the Use Bundle Apex Mode custom setting equals 2; then the serviceTerritoryRefresh API http request is triggered.

## Service Territory Member

**Before Insert:**

-   Removes seconds from the service territory member DateTime fields.
-   Checks for date collisions. If a primary or relocation service territory member exists in the same date, the trigger fails.
-   If a secondary service territory member exists in the same date and the created service territory member is in the same service territory, the trigger fails.
-   If there’s a geolocation (latitude and longitude) on the created service territory member record, this trigger populates the FSL\_\_InternalSLRGeolocation\_\_Latitude\_\_s, FSL\_\_InternalSLRGeolocation\_\_Longitude\_\_s fields. Those fields are used when calculating street-level routing routes.
-   Prevents creating service territory members of type Relocation to contractors.
-   Prevents creating more than one service territory member, excluding Secondary service territory members, to contractors.

**Before Update:**

-   Checks for date collisions. If a primary or relocation service territory member exists in the same date, the trigger fails.
-   If a secondary service territory member exists in the same date and the created service territory member is in the same service territory, the trigger fails.
-   If there’s a geolocation (latitude and longitude) on the updated service territory member record, this trigger populates the FSL\_\_InternalSLRGeolocation\_\_Latitude\_\_s, FSL\_\_InternalSLRGeolocation\_\_Longitude\_\_s fields. Those fields are used when calculating street-level routing routes.
-   Prevents creating multiple service territory members of type Relocation or Primary to contractors.
-   Prevents creating more than one service territory member (excluding Secondary service territory members) to contractors.

## Skill Requirement

All triggers are empty.

## Time Dependency

**After Insert:**

-   Prevents creating duplicated dependencies between service appointments.
-   Prevents adding an Immediately Follow dependency type to an already created time dependency chain.
-   Adds service appointments to an existing chain according to the created Time Dependency. If needed, this trigger merges two chains according to the created Time Dependency.

**Before Update:**

-   Prevents updating a Time Dependency if an existing Time Dependency has the same two service appointments.
-   Prevents adding an Immediately Follow dependency type to an already created time dependency chain.

**After Delete:**

-   Splits two dependencies according to the deleted Time Dependency. For example, if chain A contains SerA→ SerB → SerC → SerD → SerE and the deleted Time Dependency is SerC → SerD, this trigger splits the chain into two: SerA → SerB → SerC and SerD → SerE.

## Time Slot

**Before Insert:**

-   Removes seconds from DateTime fields.

**Before Update:**

-   Removes seconds from DateTime fields.

## User Territory

**Before Insert:**

-   If the Enable User Territories sharing setting is enabled, this trigger checks for uniqueness within all user territories. In other words, this trigger ensures that the same user isn’t related to the same territory.

**After Insert:**

-   If the Enable User Territories sharing setting is enabled, this trigger adds users to the respective public groups according to the created User Territory. Make the User Territory.Service Territory name the same as the public group name.

**BeforeUpdate:**

-   If the Enable User Territories sharing setting is enabled, this trigger checks for uniqueness within all user territories. In other words, this trigger ensures that the same user isn’t related to the same territory.

**After Update:**

-   If the Enable User Territories sharing setting is enabled, this trigger adds and removes users to or from the respective public groups according to the updated user territory. For example, if a user territory is updated from User: David, Service Territory: LA to User: David, Service Territory: Washington, this change results in removing David from the LA public group and adding him to the Washington public group.

**After Delete:**

-   If the Enable User Territories sharing setting is enabled, this trigger removes users from the respective public groups according to the deleted user territory.

## Work Order

**Before Insert:**

-   If the AccountId field isn’t empty and the VisitingHoursId field is empty, this trigger populates VisitingHoursId with the related account’s operating hours ID.

**Before Update:**

-   If the AccountId or VisitingHoursId fields changed, the AccountId field isn’t empty, and the VisitingHoursId field is empty, this trigger populates VisitingHoursId with the related account’s operating hours ID.
-   If the FSL\_\_Prevent\_Geocoding\_For\_Chatter\_Actions\_\_c field is checked, this trigger disables Data.com’s geolocation cleanup, which happens on an address change, and returns the value of FSL\_\_Prevent\_Geocoding\_For\_Chatter\_Actions\_\_c field to false.

## Work Order Line Item

All triggers are empty.

## Work Rule

**Before Update:**

-   If the work rule is Availability Rule, this trigger prevents setting a minimum gap if the fixed gap checkbox is disabled.
-   If the work rule is Availability Rule, this trigger prevents setting a break time if the Break And Travel trigger is disabled.
-   If the work rule is Match Boolean Rule, this trigger prevents updating the work rule if the resource property field isn’t populated.
-   If the work rule is a Time Rule, this trigger prevents updating a time rule with Scheduled Start Time Equal To/Before Arrival Window Start/End.
-   If the work rule is an Enhanced Match Rule or a Count Rule, this trigger prevents updating the rules with invalid field values.
-   If basic time work rules don’t exist in the org or are changed, this trigger creates valid basic time rules (Early Start Permitted & Due Date work rules).

**Before Delete:**

-   Prevent deletion of the basic time work rules (Early Start Permitted & Due Date).
