---
title: "cgcloud__Account_Product_Profile__c"
domain: retail-api
topic: cgcloudaccountproductprofilec
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:38.005Z
estimatedTokens: 1730
keywords: [cgcloud__Account_Product_Profile__c, stores, statistical, profiles, indicate, distribution, weekly, data, customer, category, API, version, 54.0, later, cgcloud]
---

# cgcloud__Account_Product_Profile__c

> This object stores statistical profiles that indicate the
         distribution of weekly data between a customer and category. This object is available
      in API version 54.0 and later.

# cgcloud\_\_Account\_Product\_Profile\_\_c

This object stores statistical profiles that indicate the distribution of weekly data between a customer and category. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to a customer.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeMaster-detailRefers ToAccount (the master object) |
| cgcloud__Check_is_Product_Unique__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHelper field (not in the UI): used to check that there's a maximum of one account product profile for an Account-Product2 combination. |
| cgcloud__Friday_Percentage__c | TypepercentPropertiesFilter, Nillable, SortDescriptionUtilized share value for Fridays.This is a calculated field.Formulacgcloud__Friday__c / cgcloud__Total__c |
| cgcloud__Friday__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput value for the share that's valid for Fridays. |
| cgcloud__Monday_Percentage__c | TypepercentPropertiesFilter, Nillable, SortDescriptionUtilized share value for Mondays.This is a calculated field.Formulacgcloud__Monday__c / cgcloud__Total__c |
| cgcloud__Monday__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput value for the share that's valid for Mondays. |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the product.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the Week Day Distribution Profile.This is a calculated field.Formula(HYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top")) |
| cgcloud__Sales_Org__c | TypestringPropertiesFilter, Nillable, SortDescriptionSales organization to which the weekday distribution profile belongs.This is a calculated field.Formulacgcloud__Account__r.cgcloud__Sales_Org__c |
| cgcloud__Saturday_Percentage__c | TypepercentPropertiesFilter, Nillable, SortDescriptionUtilized share value for Saturdays.This is a calculated field.Formulacgcloud__Saturday__c / cgcloud__Total__c |
| cgcloud__Saturday__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput value for the share that's valid for Saturdays. |
| cgcloud__Sunday_Percentage__c | TypepercentPropertiesFilter, Nillable, SortDescriptionUtilized share value for Sundays.This is a calculated field.Formulacgcloud__Sunday__c / cgcloud__Total__c |
| cgcloud__Sunday__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput value for the share that's valid for Sundays. |
| cgcloud__Thursday_Percentage__c | TypepercentPropertiesFilter, Nillable, SortDescriptionUtilized share value for Thursdays.This is a calculated field.Formulacgcloud__Thursday__c / cgcloud__Total__c |
| cgcloud__Thursday__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput value for the share that's valid for Thursdays. |
| cgcloud__Total__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of all the input weekday values in the current profile.This is a calculated field.Formulacgcloud__Monday__c + cgcloud__Tuesday__c + cgcloud__Wednesday__c + cgcloud__Thursday__c + cgcloud__Friday__c + cgcloud__Saturday__c + cgcloud__Sunday__c |
| cgcloud__Tuesday_Percentage__c | TypepercentPropertiesFilter, Nillable, SortDescriptionUtilized share value for Tuesdays.This is a calculated field.Formulacgcloud__Tuesday__c / cgcloud__Total__c |
| cgcloud__Tuesday__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput value for the share that's valid for Tuesdays. |
| cgcloud__Wednesday_Percentage__c | TypepercentPropertiesFilter, Nillable, SortDescriptionUtilized share value for Wednesdays.This is a calculated field.Formulacgcloud__Wednesday__c / cgcloud__Total__c |
| cgcloud__Wednesday__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput value for the share that's valid for Wednesdays. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Account\_Product\_Profile\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Account\_Product\_Profile\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Account\_Product\_Profile\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Account\_Product\_Profile\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Account\_Product\_Profile\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Account_Product_Profile__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Account_Product_Profile__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Account_Product_Profile__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Account_Product_Profile__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Account_Product_Profile__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
