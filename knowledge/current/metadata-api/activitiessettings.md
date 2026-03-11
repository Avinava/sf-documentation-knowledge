---
title: "ActivitiesSettings"
domain: metadata-api
topic: activitiessettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:50.340Z
keywords: [ActivitiesSettings, File, Suffix, Directory, Location, Version, Fields, Example, Package, Manifest, Declarative, Metadata, Sample, Definition, Wildcard, Support, See]
---

# ActivitiesSettings

# ActivitiesSettings

Represents an org's activity settings, and its user interface settings for the calendar. This type extends the Metadata metadata type and inherits its fullName field.

Use the ActivitiesSettings component type to control the following activity settings:

-   Configure group and recurring tasks, recurring and multiday events, and email tracking
-   Relate multiple contacts to tasks and events (shared activities)
-   Display custom logos in meeting requests

Also use the ActivitiesSettings component type to control user interface settings for the calendar, including hover links and drag-and-drop editing.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

ActivitiesSettings values are stored in the Activities.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

ActivitiesSettings is available in API versions 28.0 and later.

## Fields

Settings for all types listed below are controlled on the Activity Settings page or the User Interface settings page as noted.

| Field Name | Field Type | Description |
| --- | --- | --- |
| allowUsersToRelateMultipleContactsToTasksAndEvents | boolean | This field indicates whether Shared Activities is enabled. When the value is true, allows users to relate multiple contacts to a task or event.ImportantBeginning with API v36.0, this field is read-only in all versions of the API. You can’t change the value of this field. Even though this field was updateable before Spring '16, changing this field’s value wasn't supported and could have resulted in an incorrect integration. If you have code in older API versions that changes the value of this field, ensure that you update that code to prevent any errors. |
| autoRelateEventAttendees | boolean | When users add attendees to events, events are automatically related to up to 50 contacts or one lead. An attendee is matched by their email address to a contact or lead.Admins control this field on the Activity Settings page.Available in API version 42.0 and later. |
| enableActivityReminders | boolean | Enables popup activity reminders for an organization.Admins control this field on the Activity Settings page. |
| enableCalendarHomeLWC | boolean | Enables Lightning Web Components for Calendar. Increases the default item limit in Calendar Home and applies styling enhancements to improve readability.Admins control this field on the Activity Settings page. |
| enableClickCreateEvents | boolean | Lets users create events in day and weekly calendar views by double-clicking a specific time slot and entering the details of the event in an overlay. Hovering over an event displays an overlay where users can view the event details or delete the event without leaving the page. Admins use a mini page layout to configure the fields shown in the overlays. Doesn’t support recurring events or multi-person events.Admins control this field on the User Interface settings page. |
| enableDragAndDropScheduling | boolean | Lets users create events associated with records by dragging a record from a list view onto a calendar view and entering the details of the event in an overlay. Hovering over an event displays an overlay where users can view the event details or delete the event without leaving the page. Admins use a mini page layout to configure the fields shown in the overlays.Admins control this field on the User Interface settings page. |
| enableEmailTracking | boolean | Enables tracking of outbound HTML emails if an organization uses HTML email templates.Admins control this field on the Activity Settings page. |
| enableFlowTaskNotifsViaApex | boolean | If Apex invokes Process Builder to create a task, determines whether an email is sent (true) or not (false). |
| enableGroupTasks | boolean | Lets users assign independent copies of a new task to multiple users.Admins control this field on the Activity Settings page. |
| enableHideChildEventsPreference | boolean | Enables hiding child events from the calendar or activity views. This setting is useful if you have complex event hierarchies and want to simplify the views by hiding less relevant details. This field is available in API version 50.0 and later.Admins control this field on the Activity Settings page. |
| enableListViewScheduling | boolean | Extends the functionality of enableDragAndDropScheduling and enableClickCreateEvents to list view calendars.Admins control this field on the User Interface settings page. |
| enableLogNote | boolean | Enables the option to create and associate a note on an existing record. |
| enableMLSingleClientProfile | boolean | Enable creating a client profile using machine learning. When this setting is enabled, Salesforce uses machine learning algorithms to analyze and consolidate client data, providing a more comprehensive client profile. This can help sales and service teams to better understand their clients and provide more personalized interactions. This field is available in API version 50.0 and later.Admins control this field on the Activity Settings page. |
| enableMultidayEvents | boolean | Enables creation of events that end more than 24 hours after they start.Admins control this field on the Activity Settings page. |
| enableRecurringEvents | boolean | Enables creation of events that repeat at specified intervals.Admins control this field on the Activity Settings page. |
| enableRecurringTasks | boolean | Enables creation of tasks that repeat at specified intervals.Admins control this field on the Activity Settings page. |
| enableRollUpActivToContactsAcct | boolean | Enables a contact’s activities to be rolled up and displayed on the contact’s primary account. Default value is true.Available in API versions 47.0 and later. |
| enableSidebarCalendarShortcut | boolean | In the sidebar, displays a shortcut link to a user’s last-used calendar view.Admins control this field on the Activity Settings page. |
| enableSimpleTaskCreateUI | boolean | Allows admins to specify whether tapping New Task in Salesforce opens a regular task record edit page or a page that displays key task fields first.Admins control this field on the Activity Settings page. |
| enableTimelineCompDateSort | boolean | Allows admins to sort past activities by completed date (true). If false, activities are sorted by due date.Admins control this field on the Activity Settings page. |
| enableUNSTaskDelegatedToNotifications | boolean | On the Activity Settings page, exposes a setting for Admins to hide or show a user setting that lets individual users enable or disable email notifications when tasks are assigned to them. |
| enableUserListViewCalendars | boolean | Allows users to create and view user list view calendars in Lightning Experience. Available in API versions 47.0 and later |
| meetingRequestsLogo | string | Available when showCustomLogoMeetingRequests is enabled. Uploads a custom logo. An administrator can select only a logo that has been uploaded to certain folders in the Documents tab.Admins control this field on the Activity Settings page. |
| showCustomLogoMeetingRequests | boolean | Displays a custom logo in meeting request emails and on a meeting’s Web page. Invitees see the logo when a user either invites them to an event or requests a meeting.Admins control this field on the Activity Settings page. |
| showEventDetailsMultiUserCalendar | boolean | Displays event details on-screen rather than in hover text.Admins control this field on the Activity Settings page. |
| showHomePageHoverLinksForEvents | boolean | In the calendar section of the Home tab:When a user hovers over the subject of an event, a hover link displays an overlay with selected event details. (Hover links are always available in other calendar views.)When a user clicks the subject of an event, displays the event detail page.Admins use a mini page layout to configure the fields shown in the overlay.Admins control this field on the User Interface settings page. |
| showMyTasksHoverLinks | boolean | In the My Tasks section of the Home tab and on the calendar day view:When a user hovers over the subject of a task, a hover link displays an overlay with selected task details.When a user clicks the subject of a task, displays the task detail page.Admins use a mini page layout to configure the fields shown in the overlay.Admins control this field on the User Interface settings page. |

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the activity settings metadata for an organization:

```

```

## Declarative Metadata Sample Definition

The following is an example of an activity settings file:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Document](atlas.en-us.api_meta.meta/api_meta/meta_document.htm "Represents a Document. All documents must be in a document folder, such as sampleFolder/TestDocument.")