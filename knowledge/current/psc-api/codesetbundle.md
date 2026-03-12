---
title: "CodeSetBundle"
domain: psc-api
topic: codesetbundle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.819Z
estimatedTokens: 1652
keywords: [CodeSetBundle, group, code, across, multiple, systems, versions, refer, conceptual, entity, API, version, 59.0, later, Calls]
---

# CodeSetBundle

> Represents a group of code sets across multiple systems and versions. All of
      these code sets refer to the same conceptual entity. This object is available in API
    version 59.0 and later.

# CodeSetBundle

Represents a group of code sets across multiple systems and versions. All of these code sets refer to the same conceptual entity. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Provider Management or care plans are enabled in your org.

To access the object, you need one of these permission sets or permission set licenses.

-   Care Plans Access permission set or the Care Plans permission set license
-   Provider Management Access permission set or the Provider Management permission set license

Partner users need the Provider Management for Partner permission set or permission set license.

## Fields

| Field | Details |
| --- | --- |
| CodeSet10Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSet11Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSet12Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSet13Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSet14Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSet15Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSet1Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSet2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSet3Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSet4Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSet5Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSet6Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSet7Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSet8Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSet9Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA code set that represents the conceptual entity represented by the code set bundle. |
| CodeSetBundleKey | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique key that represents the concept referenced by the bundled code sets. This value is unique, but not case sensitive. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the record was viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of a conceptual entity referenced by the different code sets grouped together in the bundle. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionReferences the user who owns the code set bundle record. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of the code set bundle. This field can be used to group together code set bundles of similar types. Add values to this picklist as needed for your business functions. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CodeSetBundleChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

[CodeSetBundleFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CodeSetBundleHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CodeSetBundleShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CodeSetBundleChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- CodeSetBundleFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- CodeSetBundleHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- CodeSetBundleShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
