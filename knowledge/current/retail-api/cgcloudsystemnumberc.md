---
title: "cgcloud__System_Number__c"
domain: retail-api
topic: cgcloudsystemnumberc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.009Z
estimatedTokens: 1248
keywords: [cgcloud__System_Number__c, number, definition, that's, generation, CAS, OnPremise, Mobility, API, version, 54.0, later, cgcloud, _System, _Number]
---

# cgcloud__System_Number__c

> This object specifies the number definition that's used for number
         generation on CAS OnPremise Mobility. This object is available in API version 54.0 and
      later.

# cgcloud\_\_System\_Number\_\_c

This object specifies the number definition that's used for number generation on CAS OnPremise Mobility. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhen the number definition is selected as empty, the validation of number definition and segments applies.The default value is true. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the sales org to which the system number belongs.Possible values are:0000000100020003 |
| cgcloud__Segment_Validation__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSegment validation.This is a calculated field. |
| cgcloud__System_Fallback_Number__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the fallback number definition.This is a relationship field.Relationship Namecgcloud__System_Fallback_Number__rRelationship TypeLookupRefers Tocgcloud__System_Number__c |
| cgcloud__Usage_Validate__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOnly used for validation of the Usage field (unique). |
| cgcloud__Usage__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the item for which the number definition is to be used.Possible values are:CashInvoiceCreditInvoiceCreditNoteDeliveryNoteFallbackNumberInvoiceNonValuatedDeliveryNoteOrderConfirmationOrderEntrySvcRequestTourValuatedDeliveryNote |
| cgcloud__Warning_Limit__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies a minimum limit of the number range that shows a warning message. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_System\_Number\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_System\_Number\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_System\_Number\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_System\_Number\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_System\_Number\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__System_Number__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__System_Number__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__System_Number__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__System_Number__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__System_Number__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
