---
title: "IdentityVerificationProcFld"
domain: psc-api
topic: identityverificationprocfld
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.869Z
estimatedTokens: 1594
keywords: [IdentityVerificationProcFld, configure, questions, criteria, verifying, identity, caller, API, version, 54.0, later, Calls, customer, their, authorized, representative, SOAP]
---

# IdentityVerificationProcFld

> Used to configure the questions or criteria for verifying the
         identity of a customer and their authorized representative. This object is available
      in API version 54.0 and later.

# IdentityVerificationProcFld

Used to configure the questions or criteria for verifying the identity of a customer and their authorized representative. This object is available in API version 54.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DataSourceType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe source type of the data.Possible values are:ExternalSalesforce |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| FieldDataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of data stored in an external data source field.Possible values are:addresscheckboxcurrencydateonlydatetimeemailnumberotherpercentphonepicklistreferencetexttimeonlyurl |
| FieldName | TypestringPropertiesFilter, Group, SortDescriptionThe label of the field that contains the verification data based on the selected field type. |
| FieldType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of field.Possible values are:additionalResultField—Fetches data as part of the search query, but the data isn’t displayed in search results. Suppose you want to fetch the policy number and the age of the policy owner as a result of the search but the agent isn’t supposed to see this data. You can write custom logic to process this additional data.optionalVerifier—Displays additional verifiers on the verification screen.NoteIn API version 56.0 and later, you can display additional verifiers based on fields from the object configured for verification’s parent object. For example, if you set identity verification on the Contact object, you can display fields from the Account object.requiredVerifier—Displays required verifiers on the verification screen.NoteIn API version 56.0 and later, you can display required verifiers based on fields from the object configured for verification’s parent object. For example, if you set identity verification on the Contact object, you can display fields from the Account object.resultField—Displays fields in search results. For example, when an agent searches for a customer or their representative, you’d like the search results to include the account name, phone number, and email ID.NoteIn API version 56.0 and later, you can display fields from the parent object of the object configured for verification in the search results. For example, if you set identity verification on the Contact object, which looks up to the Account object, you can display fields from accounts in the search results.searchField—Performs object-based search.searchFilter—Filters search results. When this is set as the field type, specify the field name to filter search results using the FieldName attribute. Both static and dynamic filtering are supported. For example, to search for Contacts whose related Account ID is always 001xx000003GZ4lAAG, set AccountId as the field name and the value of FieldValueFormula to 001xx000003GZ4lAAG. Or, if an agent verifies a customer (Account) and then performs a secondary search against all policies (Policy) in which the verified customer is the policy holder, set FieldName to PolicyHolder and FieldValueFormula to the dynamic value {!SelectedParentRecordId}. This value is available from API version 56.0 and later.NoteYou can only use record IDs to dynamically filter search results. |
| FieldValueFormula | TypestringPropertiesFilter, Group, Nillable, SortDescriptionStores the formula that's applied to the field value. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated IdentityVerificationProcFld in Metadata API. The full name can include a namespaceprefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IdentityVerificationProcDtlId | TypereferencePropertiesFilter, Group, SortDescriptionThe label of the relevant Identity Verification Process Detail record.This field is a relationship field.Relationship NameIdentityVerificationProcDtlRelationship TypeLookupRefers ToIdentityVerificationProcDtl |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record is active (true) or not (false).The default value is false. |
| IsManualInput | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the user can manually enter the identity verification details (true) or not (false).The default value is false.This field is available in API version 58.0 and later. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe languages in which translation of record labels is supported.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label for IdentityVerificationProcFld. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe IdentityVerificationProcFld’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| SequenceNumber | TypeintPropertiesFilter, Group, SortDescriptionThe sequence number of the field. |
