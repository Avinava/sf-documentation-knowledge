---
title: "cgcloud__Fund_Transaction_Header__c"
domain: retail-api
topic: cgcloudfundtransactionheaderc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.692Z
estimatedTokens: 1694
keywords: [cgcloud__Fund_Transaction_Header__c, Fund, Transaction, facilitates, creation, multiple, transactions, either, source, target, business, scenario, dictates, key, template]
---

# cgcloud__Fund_Transaction_Header__c

> Fund Transaction Header object facilitates the creation of multiple
         fund transactions in either a multiple source or target fund business scenario. This object
         dictates key fields such as the fund transaction template. The source or target funds for
         the fund transaction records to be created are based on transaction types such as Transfer,
         drawback, and more. This object is available in API version 54.0 and later.

# cgcloud\_\_Fund\_Transaction\_Header\_\_c

Fund Transaction Header object facilitates the creation of multiple fund transactions in either a multiple source or target fund business scenario. This object dictates key fields such as the fund transaction template. The source or target funds for the fund transaction records to be created are based on transaction types such as Transfer, drawback, and more. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of the multi-fund transaction.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Amount__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionSum of the amount of all related transactions. |
| cgcloud__Currency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStores the Currency set by the selected template based on Sales Org.Possible values are:CAD—Canadian DollarCHF—Swiss FrancEUR—EuroGBP—Pound SterlingJPY—YenNOK—Norwegian KroneRUB—Russian CurrencyUSD—US Dollar |
| cgcloud__Fund_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionStores the description of the selected source or target fund, where applicable,.This is a calculated field.FormulaCASE( cgcloud__Transaction_Type__c , 'Drawback', cgcloud__Target_Fund__r.cgcloud__Description__c ,  cgcloud__Source_Fund__r.cgcloud__Description__c) |
| cgcloud__Fund_Transaction_Template_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription value of the transaction's related Fund Transaction Template.This is a calculated field.Formulacgcloud__Fund_Transaction_Template__r.cgcloud__Description__c |
| cgcloud__Fund_Transaction_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFund Transaction Template that dictates the behavior of related transactions based on the template's Transaction Type.This is a relationship field.Relationship Namecgcloud__Fund_Transaction_Template__rRelationship TypeLookupRefers Tocgcloud__Fund_Transaction_Template__c |
| cgcloud__Source_Fund__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSource Fund to be selected for transactions based on Template Transaction Type.This is a relationship field.Relationship Namecgcloud__Source_Fund__rRelationship TypeLookupRefers Tocgcloud__Fund__c |
| cgcloud__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus field for the fund transaction header.Possible values are:ApprovedCancelledPendingThe default value is Pending. |
| cgcloud__Target_Fund__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSource Fund to be selected for transactions based on Template Transaction Type.This is a relationship field.Relationship Namecgcloud__Target_Fund__rRelationship TypeLookupRefers Tocgcloud__Fund__c |
| cgcloud__Transaction_Date__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate of the transaction. |
| cgcloud__Transaction_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionStores the transaction type of the selected fund transaction template.This is a calculated field.FormulaTEXT(cgcloud__Fund_Transaction_Template__r.cgcloud__Transaction_Type__c) |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Fund\_Transaction\_Header\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Fund\_Transaction\_Header\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Fund\_Transaction\_Header\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Fund\_Transaction\_Header\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Fund\_Transaction\_Header\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Fund_Transaction_Header__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Fund_Transaction_Header__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Fund_Transaction_Header__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Fund_Transaction_Header__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Fund_Transaction_Header__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
