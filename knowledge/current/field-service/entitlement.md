---
title: "Entitlement"
domain: field-service
topic: entitlement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.046Z
estimatedTokens: 1217
keywords: [Entitlement, Represents, customer, support, account, contact, eligible, receive., API, version, 18.0, later., Entitlements, may, based, asset, product, service, contract., Supported]
---

# Entitlement

> Represents the customer support an account
				or contact is eligible to receive. This object is available in API version 18.0
			and later. Entitlements may be based on an asset, product, or service
		contract.

# Entitlement

Represents the customer support an account or contact is eligible to receive. This object is available in API version 18.0 and later. Entitlements may be based on an asset, product, or service contract.

## Supported Calls

create(), delete(), describeLayout(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the Account associated with the entitlement. |
| AssetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. ID of the Asset associated with the entitlement. Must be a valid asset ID. |
| AssetWarrantyID | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the asset warranty record. Must be a valid asset warranty ID. AssetWarranty is available only with Field Service. |
| BusinessHoursId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. ID of the BusinessHours associated with the entitlement. Must be a valid business hours ID. |
| CasesPerEntitlement | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of cases the entitlement supports.This field is only available if IsPerIncident is true. |
| ContractLineItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. ID of the ContractLineItem associated with the entitlement. Must be a valid ID. |
| EndDate | TypedatePropertiesCreate, Filter, Nillable, UpdateDescriptionThe last day the entitlement is in effect. |
| IsPerIncident | TypebooleanPropertiesDefaulted on create, Filter, UpdateDescriptionIndicates whether the entitlement is limited to supporting a specific number of cases (true) or not (false). |
| LastReferencedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedatePropertiesFilter, Nillable, Sort, UpdateDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LocationID | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the Location associated with the entitlement. Must be a valid location ID. |
| Name | TypestringPropertiesCreate, Filter, UpdateDescriptionRequired. Name of the entitlement. |
| SvcApptBookingWindowsId | TypereferencePropertiesCreate, Filter, Group, Sort, Nillable, UpdateDescriptionThe operating hours that the entitlement’s work orders should respect. The label in the user interface is Operating Hours. Available only if Field Service is enabled. |
| RemainingCases | TypeintPropertiesCreate, Filter, Nillable, UpdateDescriptionThe number of cases the entitlement can support. This field decreases in value by one each time a case is created with the entitlement.This field is only available if IsPerIncident is selected. |
| RemainingWorkOrders | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of agreed work orders remaining to be created. |
| ServiceContractId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionRequired. ID of the ServiceContract associated with the entitlement. Must be a valid ID. |
| SlaProcessId | TypereferencePropertiesCreate, Filter, Nillable, UpdateDescriptionID of the SlaProcess associated with the entitlement. This field is available in version 19.0 and later. |
| StartDate | TypedatePropertiesCreate, Filter, Nillable, UpdateDescriptionThe first date the entitlement is in effect. |
| Status | TypepicklistPropertiesFilter, NillableDescriptionStatus of the entitlement, such as Expired. |
| SvcApptBookingWindows | TypereferencePropertiesCreate, Filter, Group, Sort, Nillable, UpdateDescriptionThe operating hours of the entitlement. This field is visible only if Field Service is enabled. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Nillable, UpdateDescriptionThe type of entitlement, such as Web or phone support. |
|  |  |
| WorkOrdersPerEntitlement | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTotal number of work orders available for this entitlement. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

EntitlementChangeEvent (API version 44.0)

Change events are available for the object.

EntitlementFeed (API version 23.0)

Feed tracking is available for the object.

EntitlementHistory

History is available for tracked fields of the object.
