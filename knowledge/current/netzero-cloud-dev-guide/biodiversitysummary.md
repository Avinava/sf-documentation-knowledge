---
title: "BiodiversitySummary"
domain: netzero-cloud-dev-guide
topic: biodiversitysummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.546Z
estimatedTokens: 1397
keywords: [BiodiversitySummary, biodiversity, company, discloses, part, ESRS, ecosystems, API, version, 65.0, later, Calls, Associated, Objects]
---

# BiodiversitySummary

> Represents the biodiversity information that a company discloses as part of
         ESRS E4 - Biodiversity and ecosystems. This object is available in API version 65.0
      and later.

# BiodiversitySummary

Represents the biodiversity information that a company discloses as part of ESRS E4 - Biodiversity and ecosystems. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the company's biodiversity information disclosed as part of ESRS E1 - Climate change. |
| DisclsReportingPeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameDisclsReportingPeriodRefers ToDisclsReportingPeriod |
| E4AntcpFinclEffMaterialRisks | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe anticipated financial effects due to material risks and opportunities from biodiversity and ecosystem-related impacts and dependencies. |
| E4AreaCvInvasiveAlienSpecies | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe area covered by invasive alien species. |
| E4DirIdirCostsBiodiversityOfst | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe financing effects or direct and indirect costs of biodiversity offsets in monetary terms. |
| E4NatureOrientedAreaOffSite | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total nature-oriented area off site. |
| E4NatureOrientedAreaOnSite | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total nature-oriented area on site. |
| E4NbrSiteOwnLsdMngBiodiversity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe area of sites owned, leased, or managed in or near biodiversity-sensitive areas or key biodiversity areas that the company is negatively affecting. |
| E4NbrSiteOwnLsdMngPrtcAreas | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of sites owned, leased, or managed in or near biodiversity-sensitive areas or key biodiversity areas that the company is negatively affecting. |
| E4NumberInvasiveAlienSpecies | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of invasive alien species. |
| E4TotalSealedArea | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total sealed area. |
| E4TotalUseLand | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total use of land. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SubsidiaryAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that's identified as a subsidiary company.This field is a relationship field.Relationship NameSubsidiaryAccountRefers ToAccount |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BiodiversitySummaryChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[BiodiversitySummaryFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BiodiversitySummaryHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BiodiversitySummaryShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BiodiversitySummaryChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- BiodiversitySummaryFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- BiodiversitySummaryHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- BiodiversitySummaryShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
