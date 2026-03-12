---
title: "ExtDataShare"
domain: object-reference
topic: extdatashare
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.869Z
estimatedTokens: 1189
keywords: [ExtDataShare, data, share, collection, Cloud, objects, shared, orgs, third-party, partners, API, version, 56.0, later, Calls]
---

# ExtDataShare

> Represents a data share, which is a collection of Data Cloud objects that can
         be shared with other Data Cloud orgs or third-party partners. This object is available
      in API version 56.0 and later.

# ExtDataShare

Represents a data share, which is a collection of Data Cloud objects that can be shared with other Data Cloud orgs or third-party partners. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DataShareType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of data share, indicating the direction of data flow. If Outbound, the data share was created on this Data Cloud org and is shared to third-party partners or with another Data Cloud org. If Inbound, the data share comes from another Data Cloud org and is shared to this Data Cloud org.Possible values are:InboundOutboundThe default value is Outbound. |
| DataSpaceId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the data space under which the data share was created.This field is a relationship field.Relationship NameDataSpaceRefers ToDataSpace |
| InboundDataShareName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe name of the data share in the source Data Cloud org. |
| InboundDataShareOrgIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the source Data Cloud org that shared a data share with the target org. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the data share. |
| ObjectCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of Data Cloud objects added to this data share. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ExtDataShareChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ExtDataShareFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ExtDataShareHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ExtDataShareOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ExtDataShareShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [*Salesforce Help*: Create a Data Stream](https://help.salesforce.com/s/articleView?id=data.c360_a_create_data_shares.htm&language=en_US "
    Salesforce Help: Create a Data Stream  - HTML (New Window)")

## Related Topics

- ExtDataShareChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ExtDataShareFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ExtDataShareHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ExtDataShareOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ExtDataShareShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
