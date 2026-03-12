---
title: "cgcloud__RTR_Report_Configuration__c"
domain: retail-api
topic: cgcloudrtrreportconfigurationc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.816Z
estimatedTokens: 1130
keywords: [cgcloud__RTR_Report_Configuration__c, Real, Time, Report, RTR, Configurations, record, data, that's, loaded, how, shown, declarative, manner, API]
---

# cgcloud__RTR_Report_Configuration__c

> This object contains Real Time Report (RTR) Configurations. One
         record defines the data that's to be loaded for a report and what or how it gets shown in a
         declarative manner. This object is available in API version 54.0 and
      later.

# cgcloud\_\_RTR\_Report\_Configuration\_\_c

This object contains Real Time Report (RTR) Configurations. One record defines the data that's to be loaded for a report and what or how it gets shown in a declarative manner. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Internal_Name__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique key for the configuration of the report: concatenation of the report name, usage, and sales org. This object ensures that no duplicate reports or configurations exist on the same Sales org. |
| cgcloud__Usage__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of report or type of configuration.Possible values are:intaccountdim—Integration Account Dimensionintegrationmeta—Integration Metadataintproductdim—Integration Product Dimensionintpromotiondim—Integration Promotion Dimensioninttacticdim—Integration Tactic Dimensionpaymentdim—Report Payment Dimensionproductdim—Report Product Dimensionpromotiondim—Report Promotion Dimensionreportmeta—Report Metadatatacticdim—Report Tactic Dimensiontacticprodcondattrmeta—Report Tactic Product Condition Attribute MetadataThe default value is reportmeta. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_RTR\_Report\_Configuration\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_RTR\_Report\_Configuration\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_RTR\_Report\_Configuration\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_RTR\_Report\_Configuration\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_RTR\_Report\_Configuration\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__RTR_Report_Configuration__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__RTR_Report_Configuration__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__RTR_Report_Configuration__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__RTR_Report_Configuration__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__RTR_Report_Configuration__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
