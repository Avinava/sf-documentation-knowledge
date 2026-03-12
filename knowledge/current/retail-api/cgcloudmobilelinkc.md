---
title: "cgcloud__Mobile_Link__c"
domain: retail-api
topic: cgcloudmobilelinkc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.992Z
estimatedTokens: 1731
keywords: [cgcloud__Mobile_Link__c, Deep, Link, API, version, 54.0, later, cgcloud, _Mobile, _Link, Calls, Associated, Objects]
---

# cgcloud__Mobile_Link__c

> Deep Link Object. This object is available in API version 54.0
      and later.

# cgcloud\_\_Mobile\_Link\_\_c

Deep Link Object. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the record type of the record.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionOnly Active Records that are to be relevant for display.The default value is false. |
| cgcloud__Asset_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique asset identifier. |
| cgcloud__Asset_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of the asset.Possible values are:applicationdashboardlens |
| cgcloud__Dashboard_State__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionState of the dashboard and all its datasets. The state depends on user selection, start values, global filters, and external or initial filters that are applicable for the dataset. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLanguage dependent description 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLanguage dependent description 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLanguage dependent description 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLanguage dependent description 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", cgcloud__Description_Language_2__c, "Language3", cgcloud__Description_Language_3__c, "Language4", cgcloud__Description_Language_4__c, cgcloud__Description_Language_1__c) |
| cgcloud__Display_In__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionIndicates where the mobile link is shown in the mobile device.Possible values are:Store CockpitYour Day |
| cgcloud__Login_Host__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionURL that shows the login screen when the user is not logged in to the application. |
| cgcloud__Org_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the organization that contains the content. |
| cgcloud__Record_Type_Name__c | TypestringPropertiesFilter, Nillable, SortDescriptionDeveloper name of the record type.This is a calculated field.FormulaRecordType.DeveloperName |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales org to which the Deep Links belong.Possible values are:0000000100020003 |
| cgcloud__Scheme_Name__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionScheme component of the link to which the user will navigate on a mobility device.Possible values are:httpsms-onedrivesalesforce1sfanalyticswhatsapp |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSort Order of displayable deep links record within a call. |
| cgcloud__URL__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores the web address to which the user can navigate by using a quick access cockpit card on a mobility device. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Mobile\_Link\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Mobile\_Link\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Mobile\_Link\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Mobile\_Link\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Mobile\_Link\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Description_Language_1__c,
"Language2", cgcloud__Description_Language_2__c,
"Language3", cgcloud__Description_Language_3__c,
"Language4", cgcloud__Description_Language_4__c,
cgcloud__Description_Language_1__c)
```

## Related Topics

- cgcloud__Mobile_Link__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Mobile_Link__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Mobile_Link__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Mobile_Link__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Mobile_Link__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
