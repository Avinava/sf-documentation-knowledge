---
title: "CleanRule"
domain: tooling-api
topic: cleanrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.862Z
estimatedTokens: 1512
keywords: [CleanRule, Represents, data, integration, rule, controls, how, service, adds, updates, existing, records, org., Supported, SOAP, Calls, REST, HTTP, Fields]
---

# CleanRule

> Represents a data integration rule that
            controls how a data service adds and updates data for existing records in an
        org.

# CleanRule

Represents a data integration rule that controls how a data service adds and updates data for existing records in an org.

This object is available in API version 38.0 and later.

## Supported SOAP Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| CleanDataServiceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA foreign key reference to the CleanDataService that processes this CleanRule. |
| DataAssessmentStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, NillableDescriptionThe status of the data assessment. The following are valid values:Hidden (default)Not StartedIn ProgressPending AggregationAggregation CompleteFailed AggregationAbortedThis field is read only. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser-friendly text that describes the data integration rule. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, , Sort, UpdateDescriptionThis name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This unique name prevents conflicts with rules from other packages that have the same MasterLabel.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| IsBulkEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf this flag is set to true, the system automatically applies the rule to existing records whenever the rule is updated or saved. If the flag is set to false, the system doesn’t automatically apply the rule to existing records. You can always apply the rule manually. |
| IsSilentSaveEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf false, updates don’t modify LastModifiedDate and LastModifiedById when it applies this rule; otherwise, updates insert the current date and the current user. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the data integration rule. The following values are permitted:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| MatchConfidence | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates how closely a Lightning Data record matches a Salesforce record. The higher the minimum value is set, the more precise the matches. This field is used in packages that support match scores for third-party data. Valid values include an integer determined by the data service provider. If the value is null, the default value from the data service provider is used. Available in API version 45.0 and later. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionMaster label for this object. This display value is the internal label that is not translated. |
| MatchRule | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionAn internal label for the matching rule in the data service that’s associated with this CleanRule. |
| ShouldBypassTriggers | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, indicates that the system does not apply triggers when it applies this rule; otherwise, the system applies the triggers. |
| ShouldBypassWorkflow | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the system bypasses workflow rules when it applies the data integration rule; otherwise, the system applies workflow rules. |
| SobjectType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe standard or custom object in your org that’s acted on by this CleanRule. The possible values are:AccountAddressContactCustomEntityDefinitionLeadResourceAbsenceServiceAppointmentServiceTerritoryServiceTerritoryMemberWorkOrderWorkOrderLineItemIn addition, custom objects with data integration rules are possible.NoteThe standard objects are installed with default data integration rules, but only the default rules for account, contact, and lead can be modified. |
| SourceSobjectType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionA data service object associated with this CleanRule. The set of picklist values includes all the object types defined in the data service. However, if you specify a non-existent object, the API call returns an error. If you enable the Salesforce data services, the following values appear.CustomEntityDefinitionInformation retrieved from an external source in the form of an external object to enrich an account, contact, or lead. We map the external object fields to the account, contact, and lead lookup and details.DataCloudAddressGeolocation data service.DatacloudDandBCompanyData.com data service. This service is only available in the Professional, Enterprise, Unlimited, and Performance Editions, and only with a Premium Clean license. Your administrator must enable this data service by enabling the data integration rules for account and lead.If you install Marketplace packages that contain data services, their object names also appear in the set of picklist values. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of the data integration rule. Valid values are Active and Inactive. |
