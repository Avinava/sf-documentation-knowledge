---
title: "InsPolicyPtcpRelatedObj"
domain: financial-services-cloud-object-reference
topic: inspolicyptcprelatedobj
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.609Z
estimatedTokens: 753
keywords: [InsPolicyPtcpRelatedObj, relationship, Insurance, Policy, Participant, attributes, referenced, relevant, product, API, version, 63.0, later, Calls, Associated]
---

# InsPolicyPtcpRelatedObj

> Represents the relationship between an Insurance Policy Participant and a
         related object. The values of the attributes from the related object are referenced by the
         relevant product attributes on Insurance Policy Participant. This object is available
      in API version 63.0 and later.

# InsPolicyPtcpRelatedObj

Represents the relationship between an Insurance Policy Participant and a related object. The values of the attributes from the related object are referenced by the relevant product attributes on Insurance Policy Participant. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| InsurancePolicyParticipantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe insurance policy participant associated with the related object.This field is a relationship field. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the insurance policy participant related object record. |
| RelatedRecordIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe identifier of the record that's used to get the details of the related insurance policy participant object. |
| RelatedRecordObjectName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe name of the object that's associated with the related record identifier. |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage of the related record object.Possible values are:ExtendedAttribute—Extended AttributeThe default value is ExtendedAttribute. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InsPolicyPtcpRelatedObjFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InsPolicyPtcpRelatedObjHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InsPolicyPtcpRelatedObjFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InsPolicyPtcpRelatedObjHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
