---
title: "Employee2"
domain: object-reference
topic: employee2
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.545Z
estimatedTokens: 952
keywords: [Employee2, employee, company, organization, API, version, 62.0, later, Calls, Special, Access, Rules]
---

# Employee2

> Represents an employee within a company or an organization. This object
      is available in API version 62.0 and later.

# Employee2

Represents an employee within a company or an organization. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Talent Recruitment Management is enabled in your org. It’s also available to customers who purchase the Unified Employee license.To access the object, you need one of these permission sets.

| User Type | Permission Set |
| --- | --- |
| Internal Users | HR Service Workspace Personnel |
| Salesforce Platform Users | Employee Hub Community UserORUnified Employee Permission SetORWork.com License |
| Unified Employee Users | Unified Employee Permission Set |

## Fields

| Field | Details |
| --- | --- |
| AlternateEmail | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee’s alternate email address. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contact associated with the employee.Relationship NameContactRelationship TypeMaster-detailRefers ToContact (the master object) |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO currency code for the post-authorization request.Valid value is:USD—U.S. DollarThe default value is USD. |
| EmployeeNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe employee's unique ID for their organization. |
| EmployeeStatus | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe employee's current work status.Valid values are:ActiveInactiveLeaveTerminated |
| EmployeeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe employee's full-time or part-time status.Valid values are:AlumnusContractorPermanentInternTemporary |
| EmploymentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee's full-time or part-time status.Valid values are:Full-TimePart-Time |
| InternalOrganizationUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe internal organization unit associated with the employee.Relationship NameInternalOrganizationUnitRefers ToInternalOrganizationUnit |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that the user only accessed the record or a related list view (LastReferencedDate), but not viewed the record itself. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the employee record. |
| StatusEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe planned end date for the employee’s status. |
| StatusStartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe start date of the employee’s current status. |
| User | TypereferencePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe user associated with the employee. After this field is set to a non-null value, you can’t update it.Relationship NameUserDescriptionUser |
