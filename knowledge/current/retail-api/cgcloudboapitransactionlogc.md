---
title: "cgcloud__BO_API_Transaction_Log__c"
domain: retail-api
topic: cgcloudboapitransactionlogc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.235Z
estimatedTokens: 1662
keywords: [cgcloud__BO_API_Transaction_Log__c, stores, Business, API, Transaction, Log, collection, promotions, created, updated, under, via, Promotion, Creation, version]
---

# cgcloud__BO_API_Transaction_Log__c

> This object stores information about Business Object API Transaction
         Log, which is a collection of one or more promotions that should be created or updated
         under the same name via the Promotion BO Creation API. This object is available in API
      version 54.0 and later.

# cgcloud\_\_BO\_API\_Transaction\_Log\_\_c

This object stores information about Business Object API Transaction Log, which is a collection of one or more promotions that should be created or updated under the same name via the Promotion BO Creation API. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Calculation_End_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when off-platform signaled that the calculation was finished (the same timestamp for all promotions of the transaction). |
| cgcloud__Calculation_Schedule_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the promotion calculation was scheduled. |
| cgcloud__Error_Information__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionError information. |
| cgcloud__Error_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionShows the error type or phase when an error occurred.Possible values are:CalculationError—Calculation ErrorEnqueueCalculationError—Enqueue Calculation ErrorTransformationError—Transformation ErrorValidationError—Validation ErrorWriteError—Write Error |
| cgcloud__Input_Json__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionInput .json file that's to be transformed to the promo .json file. |
| cgcloud__Number_of_Retries__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionStores the number of retries that the system took to properly run the writing of a promotion. |
| cgcloud__Output_Json__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionPromo .json file that's to be passed to writeBoPromotion. |
| cgcloud__Promotion__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSFID of the promotion that was either created or updated. The value of this field is set when the promotion is created.This is a relationship field.Relationship Namecgcloud__Promotion__rRelationship TypeLookupRefers Tocgcloud__Promotion__c |
| cgcloud__Sales_Org__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the sales organization. |
| cgcloud__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the status of the process.Possible values are:CalculatedErrorInitialToBeCalculated—To be calculatedWrittenThe default value is Initial. |
| cgcloud__Transaction_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents one transaction. For mass-copy or mass-edit, the integration multiple Business Object API Transaction Logs can be executed under the same transaction. |
| cgcloud__Workflow__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExplains the various workflows that can be run via the process.This is a relationship field.Relationship Namecgcloud__Workflow__rRelationship TypeLookupRefers Tocgcloud__BO_API_Workflow__c |
| cgcloud__Write_End_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the promotion save process was completed. |
| cgcloud__Write_Start_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the promotion save process was started. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_BO\_API\_Transaction\_Log\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_BO\_API\_Transaction\_Log\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_BO\_API\_Transaction\_Log\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_BO\_API\_Transaction\_Log\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_BO\_API\_Transaction\_Log\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__BO_API_Transaction_Log__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__BO_API_Transaction_Log__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__BO_API_Transaction_Log__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__BO_API_Transaction_Log__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__BO_API_Transaction_Log__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
