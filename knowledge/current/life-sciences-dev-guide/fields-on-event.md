---
title: "Fields on Event"
domain: life-sciences-dev-guide
topic: fields-on-event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.061Z
estimatedTokens: 1005
keywords: [Event, Life, Sciences, Cloud, extend, standard, represent, calendar, user, task, records, collectively, referred, activities, Calls]
---

# Fields on Event

> Life Sciences Cloud fields extend the standard Event object to
         represent an event in the calendar. In the user interface, event and task records are
         collectively referred to as activities.

# Fields on Event

Life Sciences Cloud fields extend the standard Event object to represent an event in the calendar. In the user interface, event and task records are collectively referred to as activities.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionContains a text description of the event. Limit: 32,000 characters. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAvailable in API versions 13.0 and later. The time portion of this field is always transferred in the Coordinated Universal Time (UTC) time zone. Translate the time portion to or from a local time zone for the user or the application, as appropriate.This field is optional, depending on the following:If IsAllDayEvent is true, you can supply a value for either DurationInMinutes or EndDateTime. Supplying values in both fields is allowed if the values add up to the same amount of time. If both fields are null, the duration defaults to one day.If IsAllDayEvent is false, a value must be supplied for either DurationInMinutes or EndDateTime. Supplying values in both fields is allowed if the values add up to the same amount of time.Depending on your API version, errors with the DurationInMinutes and EndDateTime fields may appear in different places.Versions 38.0 and before—Errors always appear in the DurationInMinutes field.Versions 39.0 and later—If there’s no value for the DurationInMinutes field, errors appear in the EndDateTime field. Otherwise, they appear in the DurationInMinutes field. |
| IsAllDayEvent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the ActivityDate field (true) or the ActivityDateTime field (false) is used to define the date or time of the event. Label is All-Day Event. See also DurationInMinutes and EndDateTime.The default value is false. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionContains the ID of the user or public calendar who owns the event. Label is Assigned to ID.This is a polymorphic relationship field.By default, the event is assigned to the user who created it. If the event is created by the Automated Process user, add a different value for OwnerId. The Automated Process user isn’t a valid value for the OwnerId field.Relationship NameOwnerRefers ToCalendar, User |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the start date and time of the event. Available in versions 13.0 and later.If the Event IsAllDayEvent flag is set to true (indicating that it’s an all-day Event), then the event start date information is contained in the StartDateTime field. The time portion of this field is always transferred in the Coordinated Universal Time (UTC) time zone. Translate the time portion to or from a local time zone for the user or the application, as appropriate.If the Event IsAllDayEvent flag is set to false (indicating that it isn’t an all-day event), then the event start date information is contained in the StartDateTime field. The time portion is always transferred in the Coordinated Universal Time (UTC) time zone. You need to translate the time portion to or from a local time zone for the user or the application, as appropriate.If this field has a value, then ActivityDate and ActivityDateTime must either be null or match the value of this field. |
| Subject | TypecomboboxPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe subject line of the event, such as Call, Email, or Meeting. Limit: 255 characters. |

#### See Also

-   [*Object Reference for the Salesforce Platform*: Event](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_event.htm)
