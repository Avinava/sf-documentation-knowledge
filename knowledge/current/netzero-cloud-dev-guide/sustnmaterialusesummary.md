---
title: "SustnMaterialUseSummary"
domain: netzero-cloud-dev-guide
topic: sustnmaterialusesummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.260Z
estimatedTokens: 1391
keywords: [SustnMaterialUseSummary, circular, economy, company, discloses, part, ESRS, Resource, API, version, 65.0, later, Calls, Associated, Objects]
---

# SustnMaterialUseSummary

> Represents the circular economy information that a company discloses as part
         of ESRS E5 - Resource use and circular economy. This object is available in API
      version 65.0 and later.

# SustnMaterialUseSummary

Represents the circular economy information that a company discloses as part of ESRS E5 - Resource use and circular economy. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the company's resource use information disclosed as part of ESRS E1 - Climate change. |
| DisclsReportingPeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identifier of the reporting period.This field is a relationship field.Relationship NameDisclsReportingPeriodRefers ToDisclsReportingPeriod |
| E5AntcpFinclEffMaterialRisks | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe anticipated financial effects due to material risks and opportunities arising from resource use and circular economy-related impacts. |
| E5PctBiologicalMaterials | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of biological materials and biofuels used for non-energy purposes used to manufacture the undertaking’s products and services (including packaging ) that is sustainably sourced. |
| E5PctWtScndReusedRecycCmpnt | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of secondary reused or recycled components, secondary intermediary products, and secondary materials used to manufacture the company's products and services. |
| E5RateRecyclableCntntProducts | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate of recyclable content in products. |
| E5RtRecyclableCntntPrdctPkg | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate of recyclable content in product packaging. |
| E5WtPrdctTechBiolMaterials | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total weight of products and technical and biological materials used measured in Kg during the reporting period. |
| E5WtScndReusedRecycComponents | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe absolute weight of secondary reused or recycled components, secondary intermediary products, and secondary materials, measured in Kg. It's used to manufacture the company's products and services, including packaging. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SubsidiaryAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that's identified as a subsidiary company.This field is a relationship field.Relationship NameSubsidiaryAccountRefers ToAccount |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SustnMaterialUseSummaryChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[SustnMaterialUseSummaryFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SustnMaterialUseSummaryHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SustnMaterialUseSummaryShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SustnMaterialUseSummaryChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- SustnMaterialUseSummaryFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- SustnMaterialUseSummaryHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- SustnMaterialUseSummaryShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
