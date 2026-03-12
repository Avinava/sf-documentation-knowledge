---
title: "cgcloud__Smart_UI_Lightning_Settings__c"
domain: retail-api
topic: cgcloudsmartuilightningsettingsc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:39.985Z
estimatedTokens: 1012
keywords: [cgcloud__Smart_UI_Lightning_Settings__c, Internal, Smart, configurations, API, version, 54.0, later, cgcloud, _Smart, _UI, _Lightning, _Settings, Calls, Associated]
---

# cgcloud__Smart_UI_Lightning_Settings__c

> Internal Object contains Smart UI configurations. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Smart\_UI\_Lightning\_Settings\_\_c

Internal Object contains Smart UI configurations. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the setup owner.This is a polymorphic relationship field.Relationship NameSetupOwnerRelationship TypeLookupRefers ToOrganization, Profile, User |
| cgcloud__Custom_Remote_Actions_Mapping_Class__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionClass mapping UI actions to Apex classes that execute the action on the platform. |
| cgcloud__JSON_Static_Resource_Name__c | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe date when a user last did something related to the record. |
| cgcloud__Static_Metadata_Static_Resource__c | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStatic resource from which to retrieve the static metadata. |
| cgcloud__Use_Static_Metadata__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionEnables or disables the usage of pre-generated metadata for SmartUI.The default value is false. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Smart\_UI\_Lightning\_Settings\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Smart\_UI\_Lightning\_Settings\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Smart\_UI\_Lightning\_Settings\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Smart\_UI\_Lightning\_Settings\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Smart\_UI\_Lightning\_Settings\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Smart_UI_Lightning_Settings__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Smart_UI_Lightning_Settings__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Smart_UI_Lightning_Settings__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Smart_UI_Lightning_Settings__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Smart_UI_Lightning_Settings__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
