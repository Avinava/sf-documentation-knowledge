---
title: "BusinessProfile"
domain: edu-cloud-dev-guide
topic: businessprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.979Z
estimatedTokens: 472
keywords: [BusinessProfile, business, license, permit, application, API, version, 64.0, later, Calls]
---

# BusinessProfile

> Represents details about the business on the license or permit
         application. This object is available in API version 64.0 and later.

# BusinessProfile

Represents details about the business on the license or permit application. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the institution. |
| Format | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the education format offered at the institution.Possible values are:HybridIn personVirtual |
| GradesOffered | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the grades offered at the institution.Possible values are:110111223456789EYKKS1KS2KS3KS4PPK3PK4 |
| GradesOfferedSummary | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe summary of the grades offered at the institution. |
| ImageUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe URL to an image for the institution. |
| InstitutionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the institution's type.Possible values are:CharterPrivatePublic |
| IsPubliclySearchable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the business profile is publicly searchable (true) or not (false).The default value is false. |
| Region | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the region where the institution is located. |
| ShortDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe short description of the institution. |
