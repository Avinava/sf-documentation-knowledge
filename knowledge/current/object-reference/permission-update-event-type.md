---
title: "Permission Update Event Type"
domain: object-reference
topic: permission-update-event-type
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.505Z
estimatedTokens: 801
keywords: [Permission, Event, events, represent, changes, user, permissions, setup, entity, access, occur, profiles, tracks, clone, change]
---

# Permission Update Event Type

> Permission update events represent changes to object, field, and user
         permissions and setup entity access that occur in profiles and permission sets. The event
         type also tracks if you clone profiles or change whether session activation is required in
         permission sets or permission set groups.

# Permission Update Event Type

Permission update events represent changes to object, field, and user permissions and setup entity access that occur in profiles and permission sets. The event type also tracks if you clone profiles or change whether session activation is required in permission sets or permission set groups.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This event type tracks if Salesforce updates object or field permissions in standard profiles, in addition to changes you make to your custom profiles, permission sets, and permission set groups.

## Fields

| Field | Details |
| --- | --- |
| CONTEXT | TypeStringDescriptionReserved for future use. |
| DESCRIPTION | TypeStringDescriptionA description of the update that occurred in the profile, permission set, or permission set group.ExampleUserPerm: ConvertLeads disabled |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always PermissionUpdate. |
| FEATURE_ID | TypeIdDescriptionThe ID of the feature, such as a profile, permission set, or permission set group, that was updated. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.ExampleGeJCsym5eyvtEK2I |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.Example00DXXXXXXXXXXXX |
| PERMISSION_TYPE | TypeStringDescriptionThe type of permission, such as user, object, or field, or setup entity access, such as tab settings or Apex class access, that was updated.ExampleEntityObject |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.Example3nWgxWbDKWWDIk0FKfF5DV |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.Exampled7DEq/ANa7nNZZVD |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.Example20130715233322.670 |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).Example2015-07-27T11:32:59.555Z |
| UPDATE_TYPE | TypeStringDescriptionFor object permissions, user permissions, and setup entity access, the type of update that occurred. For example, a permission was updated or deleted.For other changes in profiles, permission sets, or permission set groups, this information is tracked in the DESCRIPTION field.Exampledelete |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who made the permission update.Example005XXXXXXXXXXXX |
