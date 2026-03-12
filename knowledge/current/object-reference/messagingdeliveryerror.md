---
title: "MessagingDeliveryError"
domain: object-reference
topic: messagingdeliveryerror
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.820Z
estimatedTokens: 721
keywords: [MessagingDeliveryError, log, triggered, outbound, failures, verify, failed, API, version, 44.0, later, Calls]
---

# MessagingDeliveryError

> Represents a log of triggered outbound failures to verify when a
         triggered outbound has failed. This object is available in API version 44.0 and
      later.

# MessagingDeliveryError

Represents a log of triggered outbound failures to verify when a triggered outbound has failed. This object is available in API version 44.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CreatedById | TypereferencePropertiesDefaulted on createFilter, Group, SortDescriptionID of the user who created the error. |
| CreatedDate | TypedateTimePropertiesDefaulted on create, Filter, SortDescriptionDate the error was created. |
| DestinationPhoneNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe recipient of the phone call. |
| FailureReason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe provided reason for why the message failed. |
| FlowEntity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe entity that triggered the flow to send the message. |
| FullMessage | TypetextareaDescriptionPlain error text. |
| Id | TypeidPropertiesDefaulted on create, Filter, Group, idLookup, SortDescriptionIdentifier of the error. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the error has been deleted. |
| LastModifiedById | TypereferencePropertiesDefaulted on create, Filter, Group, SortDescriptionThe ID of the user who last modified the error log. |
| LastModifiedDate | TypedateTimePropertiesDefaulted on create, Filter, SortDescriptionDate when the Messaging error log was last modified. |
| MessagingChannelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the MessagingChannel.This is a relationship field.Relationship NameMessagingChannelRelationship TypeLookupRefers ToMessagingChannel |
| MessagingEndUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier for the Messaging user.This is a relationship field.Relationship NameMessagingEndUserRelationship TypeLookupRefers ToMessagingEndUser |
| MessagingTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Messaging template used.This is a relationship field.Relationship NameMessagingTemplateRelationship TypeLookupRefers ToMessagingTemplate |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, Namefield, SortDescriptionName of the error. Maximum length is 80 characters. |
| SystemModstamp | TypedateTimePropertiesDefaulted on create, Filter, SortDescriptionSystem modification time for the Messaging delivery error log. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe kind of event that occurred. Possible values include:Error (Default)Warning |

## Related Topics

- MessagingChannel (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_messagingchannel.htm)
