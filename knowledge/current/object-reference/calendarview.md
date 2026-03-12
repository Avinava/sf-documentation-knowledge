---
title: "CalendarView"
domain: object-reference
topic: calendarview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.942Z
estimatedTokens: 1385
keywords: [CalendarView, calendars, created, assigned, users, creator, include, shared, resource, user, represent, calendar, Salesforce, either, standard]
---

# CalendarView

> These calendars can be created and assigned to users other than the
         creator. Available calendars include object, shared, public, resource, and user list
         calendars. Object calendars represent a calendar based on a Salesforce object, either
         standard or custom. This object is available in API version 51.0 and
      later.

# CalendarView

These calendars can be created and assigned to users other than the creator. Available calendars include object, shared, public, resource, and user list calendars. Object calendars represent a calendar based on a Salesforce object, either standard or custom. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

All fields and entities referenced by field values must be accessible by the CalendarView creator even if the creator isn’t the CalendarView owner.

## Fields

| Field | Details |
| --- | --- |
| Color | TypestringPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionRepresents the color used in the background for records displayed in a user’s calendar view within the user interface. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for organizations with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| DateHandlingType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionDetermined by the data type of the StartField. Valid values include:DateDatetime |
| DisplayField | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRepresents the SobjectType field used as the subject for records displayed in a user’s calendar view within the user interface. |
| EndField | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn optional field that represents the sObjectType field used as the end time for records displayed in a user’s calendar view within the user interface. Must be a date or dateTime field that matches the type in StartField. |
| FillPattern | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the pattern displayed as the background for records displayed in a user’s calendar view within the user interface. Valid values include:verticalStripesascDiagonalStripesdescDiagonalStripes |
| IsDisplayed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether users can see a calendar’s records in their calendar view in the user interface. When true, records are visible in the user’s calendar view. When false, records are hidden from the user’s calendar view. The default is true. IsDisplayed can be true for up to 50 calendars. |
| ListViewFilterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the ListView used to filter records represented by the CalendarView. ListView must have the same sObjectType. If no ListViewFilterId is defined, the calendar displays only records with the same owner as the CalendarView.This is a relationship field.Relationship NameListViewFilterRelationship TypeLookupRefers ToListView |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA user-provided name that identifies the calendar. This isn’t an enumerated field; it can be any string to a maximum length of 80 characters. |
| OwnerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRepresents the owner of the CalendarView.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PublisherId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRepresents the user, user list, public, or resource calendar from where event data is populated.This is a polymorphic relationship field.Relationship NamePublisherRelationship TypeLookupRefers ToCalendar, ListView, User |
| SobjectType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of standard or custom Salesforce object that is used to create records for the CalendarView. Use the API name of the desired SobjectType. |
| StartField | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRepresents the SobjectType field used as the start time for records displayed in a user’s calendar view within the user interface. Must be a date or dateTime field type. |

## Usage

To distribute a CalendarView to multiple users, IDs can be pulled from a group, user list, or profile. For this example, a CalendarView based on opportunity close dates is being distributed to a sales team in a public group, Sales Group:

```

```

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CalendarViewChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Code Examples

```apex
Group userGroup = [SELECT Id FROM Group WHERE Name = 'Sales Group' LIMIT 1];
List<Id> groupId = new List<Id>();
groupId.add(userGroup.id);
List<GroupMember> groupMembers = [SELECT UserOrGroupId FROM GroupMember
   WHERE GroupId IN: groupId];

List<CalendarView> calendarViews = new List<CalendarView>();
for (GroupMember groupMember : groupMembers) {
   CalendarView calendarView = new CalendarView(name = 'Opportunity Close Dates’,
    SobjectType = 'Opportunity', StartField = 'CloseDate', DisplayField =
    'Name', OwnerId = groupMember.UserOrGroupId);
   calendarViews.add(calendarView);
}
insert calendarViews;
```

## Related Topics

- CalendarViewChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
