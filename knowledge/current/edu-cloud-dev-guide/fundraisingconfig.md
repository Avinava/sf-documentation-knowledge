---
title: "FundraisingConfig"
domain: edu-cloud-dev-guide
topic: fundraisingconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:25.427Z
estimatedTokens: 1701
keywords: [FundraisingConfig, collection, settings, configure, Fundraising, API, version, 59.0, later, SOAP, Calls, REST, Special, Access, Rules]
---

# FundraisingConfig

> Represents a collection of settings to configure Fundraising.
      This object is available in API version 59.0 and later.

# FundraisingConfig

Represents a collection of settings to configure Fundraising. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=edu_cloud_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

This object is available only if the Fundraising Access license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unqiue name for FundraisingConfig. |
| DonorExternalIdField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field that's used as the external ID for donor lookup during gift entry. Donor name is the default lookup. This field is available from API version 62.0 and later. |
| DonorMatchingMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the donor matching method that's used as the default method for the Business Process API.Possible values are:Duplicate_Management_Rules—Duplicate Management RulesNo_Matching—No MatchingThe default value is Duplicate_Management_Rules. |
| FailedTransactionCount | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of consecutively failed transactions before the gift commitment status is changed to Failing. If set to 0, the status is never auto-changed to Failing. |
| HouseholdSoftCreditRole | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe soft credit role that's assigned to members of the donor's household. |
| InstallmentExtDayCount | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days before or after the scheduled gift transaction due date for the gift to appear in Gift Entry as a match to fulfill an open gift transaction. |
| IsHshldSoftCrAutoCrea | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether soft credits are automatically created for household members (true) or not (false) when the donor donates. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the FundraisingConfigPossible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| LapsedUnpaidTrxnCount | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe count of consecutive unpaid transactions before the gift commitment status is changed to Lapsed. If set to 0, the status is never auto-changed to Lapsed. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the FundraisingConfig. In the UI, this field is Application Record Type Configuration. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| OutreachSourceCodeGenFmla | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe outreach source code generation formula that's composed of the selected formula components.Available in API version 63.0 and later. |
| ShouldClosePaidRcrCmt | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to automatically close a recurring gift commitment when it has no ongoing or future schedule, and no unpaid transaction (true) or not (false). |
| ShouldCreateRcrSchdTrxn | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the next transaction in a recurring schedule is automatically created (true) or not (false). |
| UtmCampaignSrcObj | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe UTM code of the campaign for which the donation was received. This field is available from API version 60.0 and later. |
| UtmCampaignSrcObjField | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe UTM code of the campaign for which the donation was received. This field is available from API version 60.0 and later. |
| UtmMediumSrcObj | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe UTM code of the outreach message channel from which the donation originated. This field is available from API version 60.0 and later. |
| UtmMediumSrcObjField | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe UTM code of the outreach message channel from which the donation originated. This field is available from API version 60.0 and later. |
| UtmSourceSrcObj | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe UTM code of the source from which the donation originated. This field is available from API version 60.0 and later. |
| UtmSourceSrcObjField | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe UTM code of the source from which the donation originated. This field is available from API version 60.0 and later. |
