---
title: "cgcloud__Rate_Based_Funding__c"
domain: retail-api
topic: cgcloudratebasedfundingc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.749Z
estimatedTokens: 2126
keywords: [cgcloud__Rate_Based_Funding__c, stores, general, along, metadata, that's, associated, RBF, Template, created, API, version, 54.0, later, cgcloud]
---

# cgcloud__Rate_Based_Funding__c

> This object stores general information along with metadata that's
         associated with the RBF Template from which it was created. This object is available
      in API version 54.0 and later.

# cgcloud\_\_Rate\_Based\_Funding\_\_c

This object stores general information along with metadata that's associated with the RBF Template from which it was created. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionAnchor Account for which the RBF is defined.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether Rate Based Funds can be used.The default value is true. |
| cgcloud__Currency__c | TypestringPropertiesFilter, Nillable, SortDescriptionCurrency of the rate based funding template.This is a calculated field.Formulacgcloud__Rate_Based_Funding_Template__r.cgcloud__Currency__c |
| cgcloud__Date_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionStart date of the rate based fund. |
| cgcloud__Date_Thru__c | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionEnd date of the rate based fund. |
| cgcloud__Description__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDescription of the rate based fund. |
| cgcloud__External_Id__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identifier for the external system RBF record. |
| cgcloud__Fund_Anchor__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionAnchor of the fund.Possible values are:Planning_LevelRBF_Anchor |
| cgcloud__Fund_Template_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionLabel of a Fund Template. Funds of this type are to be filled by this RBF (if the anchor accounts, products, and time ranges also match).This is a calculated field.Formulacgcloud__Fund_Template__r.cgcloud__Description__c |
| cgcloud__Fund_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the fund template.This is a relationship field.Relationship Namecgcloud__Fund_Template__rRelationship TypeLookupRefers Tocgcloud__Fund_Template__c |
| cgcloud__KPI_Subset__c | TypestringPropertiesFilter, Nillable, SortDescriptionKPI subset allows to filter KPI definitions in the GridHierarchyView component. No subset filter is applied when no KPI subset is chosenThis is a calculated field.FormulaTEXT(cgcloud__Rate_Based_Funding_Template__r.cgcloud__KPI_Subset__c) |
| cgcloud__Manual_Override__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls when a child can be updated by the parent in the RBF Distribution process.The default value is false. |
| cgcloud__Original_Reference__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionReference to the parent RBF record. |
| cgcloud__Parent_RBF__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains the reference of the parent in the RBF Distribution process.This is a relationship field.Relationship Namecgcloud__Parent_RBF__rRelationship TypeLookupRefers Tocgcloud__Rate_Based_Funding__c |
| cgcloud__RBF_Anchor_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionReference to the anchor of the rate based fund.This is a calculated field.FormulaTEXT(cgcloud__Rate_Based_Funding_Template__r.cgcloud__Anchor_Type__c) |
| cgcloud__RBF_KPI_Set__c | TypestringPropertiesFilter, Nillable, SortDescriptionKPI set that's assigned to the rate based fund.This is a calculated field.Formulacgcloud__Rate_Based_Funding_Template__r.cgcloud__KPI_Set__r.Name |
| cgcloud__RBF_Rate_Type__c | TypestringPropertiesFilter, Nillable, SortDescriptionType of rate that's used for the rate based funding record.This is a calculated field.FormulaTEXT( cgcloud__Rate_Based_Funding_Template__r.cgcloud__Rate_Type__c ) |
| cgcloud__RBF_Total_KPI__c | TypestringPropertiesFilter, Nillable, SortDescriptionName of the KPI definition that represents the total calculated value.This is a calculated field.Formulacgcloud__Rate_Based_Funding_Template__r.cgcloud__RBF_Total_KPI__r.Name |
| cgcloud__Rate_Based_Funding_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTemplate that's used for the rate based funding record.This is a relationship field.Relationship Namecgcloud__Rate_Based_Funding_Template__rRelationship TypeLookupRefers Tocgcloud__RBF_Template__c |
| cgcloud__Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of the rate based funding record.Possible values are:ApprovedInitialProcessedProcessingReady to ApproveThe default value is Initial. |
| cgcloud__Stop_Transacting_Unlock__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is used to signal that the record can be safely unlocked as part of the stop transacting process.The default value is false. |
| cgcloud__Total_Amount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal calculated as derived from interaction with the RBF Grid (aggregate of all RBF-Product calculated values). |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Rate\_Based\_Funding\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Rate\_Based\_Funding\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Rate\_Based\_Funding\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Rate\_Based\_Funding\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Rate\_Based\_Funding\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Rate_Based_Funding__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Rate_Based_Funding__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Rate_Based_Funding__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Rate_Based_Funding__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Rate_Based_Funding__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
