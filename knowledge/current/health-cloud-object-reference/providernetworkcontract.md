---
title: "ProviderNetworkContract"
domain: health-cloud-object-reference
topic: providernetworkcontract
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.883Z
estimatedTokens: 986
keywords: [ProviderNetworkContract, provider, network, bound, together, contract, API, version, 53.0, later, Management, permission, license, Calls, Usage]
---

# ProviderNetworkContract

> Represents a provider and a network bound together by a contract. This
      object is available in API version 53.0 and later with the Provider Network Management
      permission set license.

# ProviderNetworkContract

Represents a provider and a network bound together by a contract. This object is available in API version 53.0 and later with the Provider Network Management permission set license.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContractId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contract that ties the network and provider together.This is a relationship field.Relationship TypeLookupRefers ToContract |
| EndDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe end date of the contract between the provider and the network. |
| HealthcarePayerNetworkId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe healthcare payer network associated with the contract.This is a relationship field.Relationship TypeLookupRefers ToHealthcarePayerNetwork |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe healthcare provider associated with the contract.This is a relationship field.Relationship TypeLookupRefers ToHealthcareProvider |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the ProviderNetworkContract record. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe start date of the contract between the provider and the network. |

## Usage

This object is used to store Network Participation records created by the Network Participation Lightning component. The location of the network participation is derived from the provider associated with the contract.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProviderNetworkContractFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProviderNetworkContractHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProviderNetworkContractChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- ProviderNetworkContractFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ProviderNetworkContractHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ProviderNetworkContractChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
