---
title: "CareProviderAfflRoleConfig"
domain: life-sciences-dev-guide
topic: careproviderafflroleconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.703Z
estimatedTokens: 787
keywords: [CareProviderAfflRoleConfig, affiliations, healthcare, provider, affiliation, hospital, API, version, 59.0, later, SOAP, Calls, REST]
---

# CareProviderAfflRoleConfig

> Represents information about the affiliations of the healthcare
         provider. For example, this object represents an affiliation between a healthcare
      provider and a hospital. This object is available in API version 59.0 and later.

# CareProviderAfflRoleConfig

Represents information about the affiliations of the healthcare provider. For example, this object represents an affiliation between a healthcare provider and a hospital. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| AffiliationType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionRequired.Specifies the affiliation of the configuration. This field is unique within your organization.Possible values are:HospitalAffiliation |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionRequired. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated CareProviderAfflRoleConfig type in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the Care Provider Affiliation Role Configuration.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the affiliation. In the UI, this field is Care Provider Affiliation Role Configuration. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe CareProviderAfflRoleConfig’s metadata..Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| ProviderRole | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRequired.The role of the healthcare provider in relation to the affiliate. |
