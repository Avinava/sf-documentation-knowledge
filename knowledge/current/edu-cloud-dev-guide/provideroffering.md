---
title: "ProviderOffering"
domain: edu-cloud-dev-guide
topic: provideroffering
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.764Z
estimatedTokens: 704
keywords: [ProviderOffering, people, organizations, associated, providing, benefits, program, participants, API, version, 60.0, later, Calls, Objects]
---

# ProviderOffering

> Represents people or organizations associated with providing benefits to
         program participants. This object is available in API version 60.0 and later.

# ProviderOffering

Represents people or organizations associated with providing benefits to program participants. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Benefit associated with the Provider Offering.This field is a relationship field.Relationship NameBenefitRelationship TypeLookupRefers ToBenefit |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Contact associated with the Provider Offering.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated string or number assigned to the Provider Offering. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the Provider Offering.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the provided Benefit.Possible values are:ActivePendingApproval—Pending Approval |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProviderOfferingHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProviderOfferingShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProviderOfferingHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- ProviderOfferingShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
