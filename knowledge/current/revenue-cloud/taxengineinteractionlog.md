---
title: "TaxEngineInteractionLog"
domain: revenue-cloud
topic: taxengineinteractionlog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:11.589Z
estimatedTokens: 1091
keywords: [TaxEngineInteractionLog, Represents, record, communication, external, tax, engine, following, calculation, request., API, version, 62.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# TaxEngineInteractionLog

> Represents a record of a communication with an external tax engine following
         a tax calculation request.  This object is available in API version 62.0 and later.

# TaxEngineInteractionLog

Represents a record of a communication with an external tax engine following a tax calculation request. This object is available in API version 62.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Special Access Rules

You need the Tax Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionAdditional details about the tax engine interaction log. |
| DocumentCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDocument code of the transaction for which the tax engine integration log was captured. |
| EffectiveDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the tax engine request takes effect. This date is available for reference and bookkeeping only and doesn’t have any impact on tax calculation. |
| InteractionHttpStatusCode | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe HHTP result code of the external callout made to a third-party tax engine provider. Refer to your third-party tax engine provider’s documentation for details about the specific codes returned. |
| InteractionType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the type of request made to the tax engine.Valid value is:CalculateTax |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a tax engine interaction log record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a tax engine interaction log record. If this value is null, it’s possible that the user only accessed the tax engine interaction log record or a related list view (LastReferencedDate), but not viewed the tax engine interaction log record itself. |
| ReferenceEntity | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe record on which tax was calculated. |
| RequestBody | Typebase64PropertiesNillableDescriptionThe content of the tax calculation API request. |
| RequestContentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of data passed in the request. For example, application/html or text/csv. |
| RequestLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe character length of text within the request body. |
| RequestName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the request. |
| RequestTaxTransactionType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of tax transaction request sent to the tax engine provider. Available in API version 65.0 and later.Valid values are:CreditDebitVoidOrCreditVoidOrDebit |
| ResponseContentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe method used to deliver the tax calculation API response, such as application/html or text/vnd.salesforce.quip-template. |
| ResponseLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe character length of text within the response body. |
| ResponseName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the response from the tax engine. |
| ResponseTaxTransactionType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of tax transaction response received from the tax engine provider. Available in API version 65.0 and later.Valid values are:CreditDebitVoid |
| ResultCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe code describing the result of the request.Valid values are:AdapterExceptionReferenceDocumentCodeMissingSuccessTaxEngineErrorValidationError |
| TaxEngineId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the tax engine used in the tax calculation process.This field is a relationship field.Relationship NameTaxEngineRefers ToTaxEngine |
| TaxEngineInteractionLogNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionA system-generated number for a log entry. |
