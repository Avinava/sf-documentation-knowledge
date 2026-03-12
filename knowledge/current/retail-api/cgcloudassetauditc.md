---
title: "cgcloud__Asset_Audit__c"
domain: retail-api
topic: cgcloudassetauditc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:38.143Z
estimatedTokens: 1661
keywords: [cgcloud__Asset_Audit__c, asset, survey, API, version, 54.0, later, cgcloud, _Asset, _Audit, Calls, Associated, Objects]
---

# cgcloud__Asset_Audit__c

> Represents the details of an asset survey. This object is available in
      API version 54.0 and later.

# cgcloud\_\_Asset\_Audit\_\_c

Represents the details of an asset survey. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the customer for whom the survey was conducted.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeMaster-detailRefers ToAccount (the master object) |
| cgcloud__Asset_Tag_Number__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSerial number of the asset. |
| cgcloud__Asset__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the asset for which the survey was conducted.This is a relationship field.Relationship Namecgcloud__Asset__rRelationship TypeLookupRefers ToAsset |
| cgcloud__Condition__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the asset at the moment of the survey execution.Possible values are:C—DestroyedD—DamagedT—Techn. DefectW—Working |
| cgcloud__Creation_Date__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate of creation. |
| cgcloud__Distribution_Relevant__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether data correlated with the call needs to be distributed to mobility devices (true) or not (false).The default value is 'true'. |
| cgcloud__Location_Rating__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies a rating for the determined location.Possible values are:B—BadG—GoodI—Could Be Better |
| cgcloud__Location__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the position of the asset with the customer.Possible values are:B—BarF—FoyerM—Main CourseN—See NoteO—Open AirR—Cash Register |
| cgcloud__Method__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies if the audit data record was initiated manually or via barcode scanner.Possible values are:M—ManualS—Scanner |
| cgcloud__Note__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionShort note for the survey. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the asset audit detail page.This is a calculated field.Formula(HYPERLINK('/'&Id, $Label.cgcloud__record_link, '_top')) |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSales Org.Possible values are:0000000100020003 |
| cgcloud__Sighted__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the asset is present (true) or not (false).The default value is 'false'. |
| cgcloud__Usage__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies how the customer uses the asset.Possible values are:AA—Against AgreementMA—MisapplicationRI—Correct |
| cgcloud__User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the user who executed the survey.This is a relationship field.Relationship Namecgcloud__User__rRelationship TypeLookupRefers ToUser |
| cgcloud__Visit__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the call on which the survey was conducted.This is a relationship field.Relationship Namecgcloud__Visit__rRelationship TypeLookupRefers ToVisit |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[cgcloud\_\_Asset\_Audit\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Asset\_Audit\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Asset\_Audit\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[cgcloud\_\_Asset\_Audit\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Asset\_Audit\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Asset_Audit__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Asset_Audit__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Asset_Audit__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Asset_Audit__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Asset_Audit__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
