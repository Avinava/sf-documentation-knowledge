---
title: "SlaProcess"
domain: object-reference
topic: slaprocess
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.290Z
estimatedTokens: 1200
keywords: [SlaProcess, entitlement, process, associated, API, version, 19.0, later, Calls, Special, Access, Rules, Usage]
---

# SlaProcess

> Represents an entitlement process associated
    with an Entitlement.
  This object is available in API version 19.0 and later.

# SlaProcess

Represents an entitlement process associated with an Entitlement. This object is available in API version 19.0 and later.

An entitlement process is a timeline that includes all the steps (MilestoneType records) that your support team must complete to resolve cases. Each process includes the logic necessary to determine how to enforce the correct service level for your customers.

## Supported Calls

describeSObjects(), query(), retrieve(), search(), describeLayout()

## Special Access Rules

As of Summer ’20 and later, only Salesforce admin users, users with access to the Case, Entitlement, or Work Order objects, and users with the View Setup and Configuration permission can access this object.

## Fields

| Field | Details |
| --- | --- |
| BusinessHoursId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. ID of the BusinessHours associated with the entitlement. Must be a valid business hours ID. |
| Description | TypetextareaPropertiesFilter, NillableDescriptionA description of the entitlement process. |
| IsActive | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the entitlement process is active (true) or not (false). |
| IsVersionDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the entitlement process is the default version (true) or not (false).This field is available in API version 28.0 and later in organizations that have entitlement versioning enabled. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the SlaProcess was last viewed. |
| Name | TypestringPropertiesFilter, idLookupDescriptionThe name of the entitlement process. |
| NameNorm | TypestringPropertiesFilter, Group, SortDescriptionThe read-only value for the unique name of the entitlement process or the entitlement process version. If entitlement versioning is enabled, this value is automatically generated for each version of an entitlement process in this form: process name+_v + x, where x is the version number (for example, “gold_support_v2”).If entitlement versioning isn’t enabled, this value is the same as Name.This field is available in API version 28.0 and later. |
| SObjectType | TypepicklistPropertiesRestricted picklist, Filter, Group, SortDescriptionThe type of records that the entitlement process can run on. Its values are:CaseWork OrderAn entitlement process runs only on records that match its type. For example, a Case entitlement process that’s applied to an entitlement runs only on cases associated with the entitlement, not on work orders. As a best practice, therefore, manage customers’ work orders and cases on separate entitlements.The field label in the user interface is Entitlement Process Type. |
| StartDateField | TypepicklistPropertiesFilter, Restricted picklistDescriptionThe criteria for cases to enter the entitlement process. Cases can enter the process based on:The creation date on a caseA custom date/time field on a case |
| VersionMaster | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIdentifies the sequence of versions to which this entitlement process belongs. This field’s contents can be any value as long as it is identical among all versions of the entitlement process.This field is available in API version 28.0 and later in organizations that have entitlement versioning enabled. |
| VersionNotes | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe description of the entitlement process version.This field is available in API version 28.0 and later in organizations that have entitlement versioning enabled. |
| VersionNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe version number of the entitlement process. Must be 1 or greater.This field is available in API version 28.0 and later in organizations that have entitlement versioning enabled. |

## Usage

Use this object to query entitlement processes on entitlements.

#### See Also

-   [Entitlement](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_entitlement.htm "Represents the customer support an account or contact is eligible to receive. This object is available in API version 18.0 and later. Entitlements may be based on an asset, product, or service contract.")

-   [MilestoneType](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_milestonetype.htm "Represents a milestone (required step in a customer support process). This object is available in API version 18.0 and later.")

-   [CaseMilestone](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casemilestone.htm "Represents a milestone (required step in a customer support process) on a Case. This object is available in API version 18.0 and later.")

## Related Topics

- Entitlement (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_entitlement.htm)
- MilestoneType (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_milestonetype.htm)
- CaseMilestone (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casemilestone.htm)
