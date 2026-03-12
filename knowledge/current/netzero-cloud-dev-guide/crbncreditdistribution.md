---
title: "CrbnCreditDistribution"
domain: netzero-cloud-dev-guide
topic: crbncreditdistribution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.699Z
estimatedTokens: 1006
keywords: [CrbnCreditDistribution, junction, sustainability, credit, carbon, allocation, objects, offset, emissions, items, specify, activity, API, version, 56.0]
---

# CrbnCreditDistribution

> Represents a junction between the sustainability credit and carbon credit
         allocation objects. To offset emissions for carbon credit allocation items, specify the
         emissions activity on this junction object. This object is available in API version
      56.0 and later.

# CrbnCreditDistribution

Represents a junction between the sustainability credit and carbon credit allocation objects. To offset emissions for carbon credit allocation items, specify the emissions activity on this junction object. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CrbnCrAllocDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date when the carbon credit was allocated. |
| CrbnCreditAllocId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe carbon credit allocation record that's associated with the carbon credits distribution.This field is a relationship field.Relationship NameCrbnCreditAllocRelationship TypeLookupRefers ToCrbnCreditAlloc |
| EmissionsActivityId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe emissions activity that's specified to offset emissions at carbon credit allocation items level.This field is a relationship field.Relationship NameEmissionsActivityRelationship TypeLookupRefers ToEmissionsActivity |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the carbon credit allocation. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| SustainabilityCreditId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sustainability credit record that's associated with the carbon credits distribution.This field is a relationship field.Relationship NameSustainabilityCreditRelationship TypeLookupRefers ToSustainabilityCredit |
| TotalCrbnCrAllocCost | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total cost of the carbon credits that were allocated for all the emissions activities. |
| TotalCrbnCrAllocInTco2e | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe total carbon credits that were allocated for all the emissions activities. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CrbnCreditDistributionFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CrbnCreditDistributionHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CrbnCreditDistributionShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CrbnCreditDistributionFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- CrbnCreditDistributionHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- CrbnCreditDistributionShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
