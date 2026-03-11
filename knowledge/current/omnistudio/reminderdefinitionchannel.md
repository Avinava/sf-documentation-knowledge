---
title: "ReminderDefinitionChannel"
domain: omnistudio
topic: reminderdefinitionchannel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:12.205Z
keywords: [ReminderDefinitionChannel, Important, Supported, Calls, Fields, Associated, Objects]
---

# ReminderDefinitionChannel

# ReminderDefinitionChannel

Represents the channel that's used to send the reminder. This object is available in API version 60.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Content | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe content of the template that's used for the reminder. The template can be a customized or standard template. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate field isn’t null, the user accessed this record or list view indirectly. |
| MessagingChannelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the messaging channel that's used to send the reminder. This field is available in API version 61.0 and later.This field is a relationship field.Relationship NameMessagingChannelRefers ToMessagingChannel |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Reminder Definition Channel. |
| RelatedTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe template that's used for the reminder.This field is a relationship field.Relationship NameRelatedTemplateRelationship TypeLookupRefers ToEmailTemplate |
| ReminderDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe reminder definition that's used to schedule the reminder.This field is a relationship field.Relationship NameReminderDefinitionRelationship TypeMaster-detailRefers ToReminderDefinition (the master object) |
| SentFrom | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the sender of the reminder. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of channel that's used to distribute the reminder.Valid values are:CustomEmailFacebookSms—SMSWhatsapp |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ReminderDefinitionChannelHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.