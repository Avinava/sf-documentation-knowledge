---
title: "UserPreference"
domain: object-reference
topic: userpreference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.877Z
estimatedTokens: 794
keywords: [UserPreference, functional, preference, specific, user, organization, Calls, Special, Access, Rules, Usage]
---

# UserPreference

> Represents a functional preference for a specific user in
    your organization.

# UserPreference

Represents a functional preference for a specific user in your organization.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Customer Portal users can't access this object.

Only users with the View All Data or Manage Users permission can access UserPreference records of other users but all users can access their own UserPreference record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This behavior does not affect other types of user access such as Create or Edit.

## Fields

| Field | Details |
| --- | --- |
| Preference | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe name of the user preference. Supported values are:57 (Event Reminder Default Lead Time)58 (Task Reminder Default Time)91 (Prevent Logs on Load)92 (Autocomplete Apex After Key Press)93 (Visualforce Viewstate Inspector)94 (Forecasting Displayed Type)96 (Editor Theme)97 (Editor Font Size)98 (Pinned Folders)99 (Enable Query Plan)100 (Enable New Open Dialog)101 (Email Transport Type)102 (Pinned Wave Folders)108 (Density)109 (Lightning Flow Builder)111 (Format with Tabs)112 (Format Tab Width)113 (Format Print Width)114 (Record Page Activities Display)118 (Lightning Flow Explorer)119 (For internal use only)120 (Simple Auth Option)122 (Sales Alert Notifications Snooze Time)131 (Color Scheme)Event Reminder Default Lead Time and Task Reminder Default Time are related to these fields on the User object:UserPreferencesEventRemindersCheckboxDefaultUserPreferencesTaskRemindersCheckboxDefaultUserPreferencesSuppressEventSFXRemindersUserPreferencesSuppressTaskSFXRemindersEnable New Open Dialog is reserved for future use.When creating SOQL queries, tolabel is required to return accurate results. For example, select Id, tolabel(Preference), Value, UserId from UserPreference.108 (Density) is available in API v44.0 and later. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the user associated with this role. The corresponding field label is User ID.Admin users can create and edit preferences for other users.Standard users can delete their own preferences only. For a standard user, the value of the UserId field must be their own UserId. |
| Value | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the user preference. For Event Reminder Default Lead Time, the values are increasing intervals of time from 0 minutes to 2 days. For Task Reminder Default Time, the values are half-hours from 12:00 AM to 11:30 PM. To view the respective sets of values, access the Reminders in your personal settings in the online application. |

## Usage

Use this object to query the set of currently configured user preferences in your organization. In your client application, you can query the User object to obtain valid User IDs to access the UserPreference object.

All users can invoke the supported calls with this object. Standard users can invoke these calls, but only on their own preferences.
