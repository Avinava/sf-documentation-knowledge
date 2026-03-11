---
title: "EmbeddedServiceResource"
domain: tooling-api
topic: embeddedserviceresource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.744Z
keywords: [EmbeddedServiceResource, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# EmbeddedServiceResource

# EmbeddedServiceResource

Represents a mapping from an EmbeddedServiceCustomization record parent to a set of resources. Each resource is a set of customizations applied via an uploaded static resource for your Embedded Chat. This object is available in API version 50.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the EmbeddedServiceCustomization parent record. This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToEmbeddedServiceCustomization |
| ResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of an uploaded static resource. This is a relationship field.Relationship NameResourceRelationship TypeLookupRefers ToStaticResource |
| ResourceType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe resource type to be customized.Possible values are:ChatInvitationSettingsFile |