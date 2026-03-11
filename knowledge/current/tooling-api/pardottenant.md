---
title: "PardotTenant"
domain: tooling-api
topic: pardottenant
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.438Z
keywords: [PardotTenant, Note, Important, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields, Usage]
---

# PardotTenant

# PardotTenant

Represents an Account Engagement business unit. This object is available in API version 56.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

Pardot is now known as Marketing Cloud Account Engagement. We wish we could snap our fingers to update the name everywhere, but you can expect to see the previous name in a few places, including API names and developer resources.

Use available SOAP calls to create new business units, and query and update information in existing business units.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

GET, HEAD, PATCH, POST, Query

## Special Access Rules

PardotTenant is available to customers with any Account Engagement edition.

## Fields

| Field | Details |
| --- | --- |
| CreationStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe operational status of the business unit managed by Account Engagement.Possible values are:BackfilledCreatedCreatingDeletedDeletingDeprovisionedDeprovisioningErrorUpdatedUpdatingThe default value is Creating. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUniversally unique identifier for this object. If an object does not provide a value for this field on INSERT, a value will be auto-generated for it. |
| InitialPardotAdminId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe Salesforce user who set up the business unit.This field is a relationship field.Relationship NameInitialPardotAdminRelationship TypeLookupRefers ToUser |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the business unit. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the Account Engagement business unit. This field syncs with the PardotTenantName field. |
| PardotTenantId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe numerical identifier for the business unit. |
| PardotTenantName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the Account Engagement business unit. This field syncs with the MasterLabel field. |
| PardotTenantStatusCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe operational status of the business unit.Possible values are:InsufficientLicenseLimitsInvalidRequestPardotAccountNotFoundUnknownErrorUsernameCollision |

## Usage

To create an Account Engagement business unit, set a valid user ID for the InitialPardotAdminID field and a value for PardotTenantName. If you have multiple business units, the PardotTenantName value must be unique.

To verify the status of a business unit, query the PardotTenantID. A return value of CREATING means the business unit is being created. A return value of CREATED means the business unit has been created.

Update capabilities are limited to changing the PardotTenantName field and deleting a business unit if an error occurs upon creation. To delete the PardotTenant, one of these scenarios must be true:

-   The CreationStatus has a value of ERROR.
-   The CreationStatus has a value of CREATING, UPDATING, or DELETING, and the system hasn’t updated the tenant in the last hour.