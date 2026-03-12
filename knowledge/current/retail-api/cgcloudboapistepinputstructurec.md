---
title: "cgcloud__BO_API_Step_Input_Structure__c"
domain: retail-api
topic: cgcloudboapistepinputstructurec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.224Z
estimatedTokens: 1394
keywords: [cgcloud__BO_API_Step_Input_Structure__c, stores, input, structure, configuration, business, API, workflow, step, expects, version, 54.0, later, cgcloud, _BO]
---

# cgcloud__BO_API_Step_Input_Structure__c

> This table stores the input structure configuration that the business
         object API workflow step expects. This object is available in API version 54.0 and
      later.

# cgcloud\_\_BO\_API\_Step\_Input\_Structure\_\_c

This table stores the input structure configuration that the business object API workflow step expects. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRecordType of the Business Object API Step Input Structure.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__BO_API_Workflow_Step__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the business object API workflow step.This is a relationship field.Relationship Namecgcloud__BO_API_Workflow_Step__rRelationship TypeMaster-detailRefers Tocgcloud__BO_API_Workflow_Step__c (Master object) |
| cgcloud__Description__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores the purpose of the mapped data. |
| cgcloud__Maps_To__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionUsed for the mapValues rule. Defines the field in the output in which the value is to be mapped. You can specify a list of fields by separating them with commas. Use the <<NS>> token to replace it with the required namespace. |
| cgcloud__Maximum_Items__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the maximum number of items. Shown for RecordType Array. |
| cgcloud__Maximum_Length__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the maximum length of the String. Shown for RecordType String. |
| cgcloud__Maximum__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the maximum value of the Number. Shown for RecordType Number. |
| cgcloud__Minimum_Items__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the minimum number of items. Shown for RecordType Array. |
| cgcloud__Minimum_Length__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the minimum length of the String. Shown for RecordType String. |
| cgcloud__Minimum__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the minimum value of the Number. Shown for RecordType Number. |
| cgcloud__Path__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDefines the path of the Input .json file in which the attribute is available. |
| cgcloud__Pattern__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDefines the pattern that the String must match. The input must compile to a APEX RegExp. APEX uses the Java RegExp engine. Shown for RecordType String. |
| cgcloud__Required__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the property is required.The default value is true. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_BO\_API\_Step\_Input\_Structure\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_BO\_API\_Step\_Input\_Structure\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_BO\_API\_Step\_Input\_Structure\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_BO\_API\_Step\_Input\_Structure\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_BO\_API\_Step\_Input\_Structure\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__BO_API_Step_Input_Structure__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__BO_API_Step_Input_Structure__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__BO_API_Step_Input_Structure__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__BO_API_Step_Input_Structure__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__BO_API_Step_Input_Structure__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
