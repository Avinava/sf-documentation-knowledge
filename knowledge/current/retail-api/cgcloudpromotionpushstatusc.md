---
title: "cgcloud__Promotion_Push_Status__c"
domain: retail-api
topic: cgcloudpromotionpushstatusc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.612Z
estimatedTokens: 1458
keywords: [cgcloud__Promotion_Push_Status__c, push, process, entry, status, statistics, API, version, 54.0, later, cgcloud, _Promotion, _Push, _Status, Calls]
---

# cgcloud__Promotion_Push_Status__c

> Contains for each push process an entry that contains the status and
         statistics for the push. This object is available in API version 54.0 and later.

# cgcloud\_\_Promotion\_Push\_Status\_\_c

Contains for each push process an entry that contains the status and statistics for the push. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Calculation_End_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime at which the parent promotion calculation chain ended for this promotion. |
| cgcloud__Children_Calculation_End_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime at which the Children Calculation Job ended for this parent promotion. |
| cgcloud__Distribution_End_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime at which the distribution job ended for this parent promotion. |
| cgcloud__Entry_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime at which the push is scheduled. |
| cgcloud__Error_Ocurred__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionFlag that indicates whether an error occurred within the chain.The default value is false. |
| cgcloud__Metric_Preparation_End_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime at which the prepare metric job ended for this parent promotion. |
| cgcloud__Nr_Of_Child_Promotions__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumber of child promotions that are considered in this push process. |
| cgcloud__Parent_Calculation_End_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime at which the Parent Calculation Job ended for this parent promotion. |
| cgcloud__Parent_Promotion__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to Promotion.This is a relationship field.Relationship Namecgcloud__Parent_Promotion__rRelationship TypeLookupRefers Tocgcloud__Promotion__c |
| cgcloud__Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of the promotion push process.Possible values are:Initial: Scheduled to run.Syncing: Syncing field values from the parent promotion to child promotions.Calculating: Queued for calculation.InProgress: Calculation is in progress.Done: Completed successfully.Error: Completed with errors. |
| cgcloud__Sync_End_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime at which the Synchronisation from parent to child promotions ended. |
| cgcloud__Transaction_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTransaction ID under which the push was run. |
| cgcloud__Upload_Kpis_End_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime at which the Upload KPI Job is ended for this parent promotion. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Promotion\_Push\_Status\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Promotion\_Push\_Status\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Promotion\_Push\_Status\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Promotion\_Push\_Status\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Promotion\_Push\_Status\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Promotion_Push_Status__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Promotion_Push_Status__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Promotion_Push_Status__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Promotion_Push_Status__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Promotion_Push_Status__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
