---
title: "cgcloud__Signature__c"
domain: retail-api
topic: cgcloudsignaturec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.951Z
estimatedTokens: 1143
keywords: [cgcloud__Signature__c, stores, attributes, signatures, API, version, 54.0, later, cgcloud, _Signature, Calls, Associated, Objects]
---

# cgcloud__Signature__c

> This object stores the attributes for signatures. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Signature\_\_c

This object stores the attributes for signatures. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the user whose signature is captured. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the customer.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName in clear text. |
| cgcloud__Order__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the order.This is a relationship field.Relationship Namecgcloud__Order__rRelationship TypeLookupRefers Tocgcloud__Order__c |
| cgcloud__Reference_Object_Phase__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhase in which the signature process started. |
| cgcloud__Signature_Flow_Step__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the signature flow step.This is a relationship field.Relationship Namecgcloud__Signature_Flow_Step__rRelationship TypeLookupRefers Tocgcloud__Signature_Flow_Step__c |
| cgcloud__Tour__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the tour.This is a relationship field.Relationship Namecgcloud__Tour__rRelationship TypeLookupRefers Tocgcloud__Tour__c |
| cgcloud__User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the user.This is a relationship field.Relationship Namecgcloud__User__rRelationship TypeLookupRefers ToUser |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Signature\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Signature\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Signature\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Signature\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Signature\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Signature__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Signature__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Signature__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Signature__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Signature__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
