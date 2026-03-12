---
title: "cgcloud__Transaction_Log__c"
domain: retail-api
topic: cgcloudtransactionlogc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.258Z
estimatedTokens: 1173
keywords: [cgcloud__Transaction_Log__c, transaction, log, messages, API, version, 54.0, later, cgcloud, _Transaction, _Log, Calls, Associated, Objects]
---

# cgcloud__Transaction_Log__c

> This object contains all transaction log messages that are related to
         CG. This object is available in API version 54.0 and later.

# cgcloud\_\_Transaction\_Log\_\_c

This object contains all transaction log messages that are related to CG. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Details__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores the details of log entries in .json format. |
| cgcloud__Duration__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDuration of the call (it's the duration of the outermost trace). |
| cgcloud__Entry_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTimestamp when the record was added to the log. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales organization to which the transaction log belongs.Possible values are:0000000100020003 |
| cgcloud__Source_Name__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the calling class. |
| cgcloud__Source_Type__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSource from which the class made the call. |
| cgcloud__Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of the transaction.Possible values are:ErrorSuccessWarning |
| cgcloud__Transaction_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTransaction under which the message was logged. |
| cgcloud__User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser under which the transaction log entry was createdThis is a relationship field.Relationship Namecgcloud__User__rRelationship TypeLookupRefers ToUser |

## Associated Objects

This object contains these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Transaction\_Log\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Transaction\_Log\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Transaction\_Log\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Transaction\_Log\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Transaction\_Log\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Transaction_Log__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Transaction_Log__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Transaction_Log__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Transaction_Log__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Transaction_Log__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
