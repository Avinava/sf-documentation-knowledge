---
title: "TaxEngineInteractionLog"
domain: object-reference
topic: taxengineinteractionlog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:17.769Z
estimatedTokens: 1121
keywords: [TaxEngineInteractionLog, record, communication, external, tax, engine, calculation, API, version, 55.0, later, Calls, Special, Access, Rules]
---

# TaxEngineInteractionLog

> A record of a communication with an external tax engine following a tax
         calculation request. This object is available in API version 55.0 and later.

# TaxEngineInteractionLog

A record of a communication with an external tax engine following a tax calculation request. This object is available in API version 55.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_taxengineinteractionlog.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionOptional user-defined description for providing more information about the tax engine interaction log. |
| DocumentCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDocument code of the transaction for which the tax engine integration log was captured. |
| EffectiveDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the tax engine request takes effect. This date is available for reference and bookkeeping only and doesn’t have any impact on tax calculation. |
| InteractionHttpStatusCode | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe HHTP result code of the external callout made to a third-party tax engine provider. Refer to your third-party tax engine provider’s documentation for details about the specific codes returned. |
| InteractionType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionShows the type of request made to the tax engine. In Subscription Management Summer ‘22, only CalculateTax is supported.Possible values are:CalculateTax |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| ReferenceEntity | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe record on which tax was calculated. |
| RequestBody | Typebase64PropertiesNillableDescriptionContains the content of the tax calculation API request. |
| RequestContentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionShows the type of data passed in the request. For example, application/html or text/csv. |
| RequestLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe character length of text within the request body. |
| RequestName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the request. |
| ResponseBody | Typebase64PropertiesNillableDescriptionContains the content of the tax calculation API response. |
| ResponseContentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionShows the method used to deliver the tax calculation API response, such as application/html or text/vnd.salesforce.quip-template. |
| ResponseLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe character length of text within the response body. |
| ResponseName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the response from the tax engine. |
| ResultCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe code describing the result of the request.Possible values are:AdapterException—The Apex adapter interface for the tax provider threw an exception.Success—The request was successful.TaxEngineError—An error occurred while processing the request. See the log for details.ValidationError—A validation error occurred. Check that the request is complete and valid. |
| TaxEngineId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the tax engine used in the tax calculation process.This field is a relationship field.Relationship NameTaxEngineRelationship TypeLookupRefers ToTaxEngine |
| TaxEngineInteractionLogNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA system-generated number for a log entry. |
