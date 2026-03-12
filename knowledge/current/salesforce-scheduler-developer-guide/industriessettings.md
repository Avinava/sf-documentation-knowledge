---
title: "IndustriesSettings"
domain: salesforce-scheduler-developer-guide
topic: industriessettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.487Z
estimatedTokens: 1539
keywords: [IndustriesSettings, settings, Salesforce, Scheduler, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample, Definition]
---

# IndustriesSettings

> Represents settings for Salesforce
    Scheduler.

# IndustriesSettings

Represents settings for Salesforce Scheduler.

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

## File Suffix and Directory Location

IndustriesSettings are stored in a single file named Industries.settings in the settings directory.

## Version

Industries settings for Salesforce Scheduler are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| appointmentDistributionOrgPref | boolean | Indicates whether to schedule appointments for service resources based on appointment distribution (true) or not (false). The default value is false. Available in API version 52.0 and later. |
| captureResourceUtilizationOrgPref | boolean | Indicates whether to use a background process to calculate the usage of service resources from service appointments (true) or not (false). The default value is false. Available in API version 52.0 and later. |
| enableAnyResourceTypeOrgPref | boolean | Indicates whether to enable Salesforce Scheduler to consider service resource records with Agent resource type (true) or not (false). Before enabling this setting, create a service resource record as Main for each user, or update one of the service resource records as Main for each user. The default value is false. Available in API version 57.0 and later. |
| enableAppFrmAnywhereOrgPref | boolean | Indicates whether to use engagement channels for setting up shifts, work types, and booking a service appointment (true) or not (false). The default value is false. Available in API version 56.0 and later. See the prerequisites before you enable this setting. |
| enableBlockResourceAvailabilityOrgPref | boolean | Indicates whether Salesforce Scheduler service appointments are added to users' Salesforce calendars. For example, if set to false, users don’t see their service appointments on their calendars. The default is false. Available in API version 47.0 and later.This setting is used in Financial Services Cloud. |
| enableCapacitySchedulingPref | boolean | Indicates whether users can use capacity-based scheduling (true) or not (false). Use capacity-based scheduling to control the number of appointments that can be scheduled for a given shift and type of work. Available in API version 62.0 and later. See the prerequisite before you enable this setting. |
| enableCreateMultiAttendeeEventOrgPref | boolean | Indicates whether users can group individual events, and view the list of all attendees under a single event true or not false. The default is false. See the prerequisites before you enable this setting. Available in API version 55.0 and later.This setting is used in Financial Services Cloud. |
| enableDropInAppointmentsOrgPref | boolean | Indicates whether users can manage drop-in participants (true) or not (false). The default value is false. Available in API version 58.0 and later. See the prerequisite before you enable this setting. |
| enableDropInSkillMatchingOrgPref | boolean | Indicates whether skill and skill level matching is enabled for service resources that are assigned to waitlists for a service territory (true) or not (false). The default value is false. Available in API version 58.0 and later. |
| enableEventManagementOrgPref | boolean | Indicates whether users can add Salesforce Scheduler service appointments to their Salesforce calendars. The default is false. Available in API version 47.0 and later.This setting is used in Financial Services Cloud. |
| enableEventWriteOrgPref | boolean | Indicates whether to publish high-volume platform events when users create, update, or delete service appointments in Salesforce Scheduler (true) or not (false). If enabled, write these events to an external system to update it with Salesforce Scheduler service appointments. The default value is false. Available in API version 49.0 and later. |
| enableMultipleTopicsForShiftsOrgPref | boolean | Indicates whether the multiple topics for shifts feature is enabled (true) or disabled (false). The default value is false. Available in API version 56.0 and later. See the prerequisite before you enable this setting. |
| enableMultiResourceOrgPref | boolean | Indicates whether users can add multiple service resources to a service appointment. The default is false Available in API version 47.0 and later.This setting is used in Financial Services Cloud. |
| enableOverbookingOrgPref | boolean | Indicates whether users can add multiple service appointments to a single time slot for a service resource. If set to false, concurrent time slots are visible, but can't be modified. The default is false Available in API version 47.0 and later.This setting is used in Financial Services Cloud. |
| enableShareSaWithArOrgPref | boolean | Indicates whether to share service appointments with assigned resources (true) or not (false). The default value is false. Available in API version 55.0 and later. |
| enableTopicOrTemplate | boolean | Indicates whether to use Salesforce Scheduler to manage Health Cloud appointments (true) or not (false). The default value is false. You must enable the enableTopicTimeSlot field before enabling this setting. Available in API version 52.0 and later. |
| enableTopicTimeSlot | boolean | Indicates whether to set operating hours for Service Territory Members for Work Type Groups (true) or not (false). The default value is false. Available in API version 52.0 and later.See the prerequisites before you enable this setting. After you enable this setting, you can't disable it. |

## Declarative Metadata Sample Definition

The following is an example of an Industries.Settings metadata file.

```

```

The following is an example package.xml that references the previous definition.

```

```

#### See Also

-   [Salesforce Help: Multiple Topics for Shifts](https://help.salesforce.com/s/articleView?id=platform.ls_multiple_topics_for_shifts.htm&type=5&language=en_US "Salesforce Help: Multiple Topics for Shifts - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesSettings xmlns="http://soap.sforce.com/2006/04/metadata">
   <appointmentDistributionOrgPref>true</appointmentDistributionOrgPref>
   <captureResourceUtilizationOrgPref>true</captureResourceUtilizationOrgPref>
   <enableBlockResourceAvailabilityOrgPref>true</enableBlockResourceAvailabilityOrgPref>
   <enableCreateMultiAttendeeEventOrgPref>true</enableCreateMultiAttendeeEventOrgPref>
   <enableDropInSkillMatchingOrgPref>true</enableDropInSkillMatchingOrgPref>
   <enableEventManagementOrgPref>true</enableEventManagementOrgPref>
   <enableAppFrmAnywhereOrgPref>true</enableAppFrmAnywhereOrgPref>
   <enableAnyResourceTypeOrgPref>true</enableAnyResourceTypeOrgPref>
   <enableDropInAppointmentsOrgPref>true</enableDropInAppointmentsOrgPref>
   <enableEventWriteOrgPref>true</enableEventWriteOrgPref>
   <enableMultipleTopicsForShiftsOrgPref>true</enableMultipleTopicsForShiftsOrgPref>
   <enableMultiResourceOrgPref>true</enableMultiResourceOrgPref>
   <enableOverbookingOrgPref>true</enableOverbookingOrgPref>
   <enableShareSaWithArOrgPref>true</enableShareSaWithArOrgPref>
   <enableTopicOrTemplate>true</enableTopicOrTemplate>
   <enableTopicTimeSlot>true</enableTopicTimeSlot>
</IndustriesSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
       <members>Industries</members>
       <name>Settings</name>
   </types>
   <version>47.0</version>
</Package>
```
