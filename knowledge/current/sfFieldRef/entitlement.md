---
title: "Entitlement"
domain: sfFieldRef
topic: entitlement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.399Z
estimatedTokens: 609
keywords: [Entitlement, customer, support, account, contact, eligible, receive, API, version, 18.0, later, Entitlements, may, asset, product]
---

# Entitlement

> Represents the customer support an account
				or contact is eligible to receive. This object is available in API version 18.0
			and later. Entitlements may be based on an asset, product, or service
		contract.

# Entitlement

Represents the customer support an account or contact is eligible to receive. This object is available in API version 18.0 and later. Entitlements may be based on an asset, product, or service contract.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Entitlement](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_entitlement.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AssetId | Asset ID | reference |  | 18 |  |  |
| AssetWarrantyId | Asset Warranty ID | reference |  | 18 |  |  |
| BusinessHoursId | Business Hours ID | reference |  | 18 |  |  |
| CasesPerEntitlement | Cases Per Entitlement | int | 9 |  |  |  |
| ContractLineItemId | Contract Line Item ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Entitlement ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPerIncident | Per Incident | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocationId | Location ID | reference |  | 18 |  |  |
| Name | Entitlement Name | string |  | 255 |  |  |
| RemainingCases | Remaining Cases | int | 9 |  |  |  |
| RemainingWorkOrders | Remaining Work Orders | int | 9 |  |  |  |
| ServiceContractId | Service Contract ID | reference |  | 18 |  |  |
| SlaProcessId | Entitlement Process ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SvcApptBookingWindowsId | Operating Hour ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |
| WorkOrdersPerEntitlement | Work Orders Per Entitlement | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
