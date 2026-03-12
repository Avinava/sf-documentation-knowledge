---
title: "MaterialityStakeholder"
domain: netzero-cloud-dev-guide
topic: materialitystakeholder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.482Z
estimatedTokens: 1138
keywords: [MaterialityStakeholder, stakeholder, internal, external, party, having, interest, company, either, affect, affected, business, API, version, 59.0]
---

# MaterialityStakeholder

> Represents information about a stakeholder who can be internal or
         external party having interest in a company. A stakeholder can either affect or be affected
         by the business. This object is available in API version 59.0 and later.

# MaterialityStakeholder

Represents information about a stakeholder who can be internal or external party having interest in a company. A stakeholder can either affect or be affected by the business. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessRegion | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe business region in which the stakeholder operates.Possible value is:Global |
| CategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category ID of the stakeholder.This field is a relationship field.Relationship NameCategoryRelationship TypeLookupRefers ToMaterialityStkhldrCatg |
| CompanyNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the stakeholder's company.This field is a relationship field.Relationship NameCompanyNameRelationship TypeLookupRefers ToAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the stakeholder.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the stakeholder. |
| InformationSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe source of the stakeholder information.Possible values are:DocumentInterviewOtherSurvey |
| IsInternal | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the stakeholder is internal or external (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MaterialityAssessmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe materiality assessment associated with the stakeholder.This field is a relationship field.Relationship NameMaterialityAssessmentRelationship TypeLookupRefers ToMaterialityAssessment |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the stakeholder. |
| ProxyUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who submitted the survey responses on behalf of the stakeholder.This field is a relationship field.Relationship NameProxyUserRelationship TypeLookupRefers ToUser |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the stakeholder's response.Possible values are:CompleteIn ProgressNew |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user associated with the stakeholder.This field is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| WeightingPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage weighting given to the relevant responses provided by the stakeholder. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MaterialityStakeholderFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MaterialityStakeholderHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- MaterialityStakeholderFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- MaterialityStakeholderHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
