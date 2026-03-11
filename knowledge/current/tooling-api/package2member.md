---
title: "Package2Member"
domain: tooling-api
topic: package2member
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.388Z
keywords: [Package2Member, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# Package2Member

# Package2Member

Represents a component in a second-generation managed package in a subscriber’s org. Created when the subscriber installs the package. Available in API version 41.0 and later.

## Supported SOAP Calls

describeSObjects(), query(), retrieve()

## Supported REST HTTP Methods

Query, GET

## Fields

| Field | Details |
| --- | --- |
| CurrentPackageVersionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the current SubscriberPackageVersion. |
| MaxPackageVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIndicates the last package version that a metadata component was contained in. It's set if the object is left in the subscriber org after upgrade. For example, if the package developer removes an Apex class, that class and its Package2Member are hard deleted. However, to avoid data loss, we don't delete schema objects. |
| MinPackageVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the first SubscriberPackageVersion that contained this Package2Member. Starts with 04t. |
| SubjectId | TypereferencePropertiesFilter, Group, Sort, UniqueDescriptionThe ID of the component that this Package2Member is referencing.This value is case-sensitive and must be unique. |
| SubjectKeyPrefix | TypestringPropertiesFilter, Group, SortDescriptionThe key prefix for the component that this Package2Member is referencing—for example, 01W for an ActionEmail component or 01Q for a WorkflowRule component. |
| SubjectManageableState | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe manageability state of this Package2Member. References ManageableStateEnum.Valid values include:beta—Not applicable. (Used only for first-generation packages.)deleted—Not applicable. (Used only for first-generation packages.)deprecated—Installed as part of a second-generation managed package, and later deprecated from the package.deprecatedEditable—Installed as part of an unlocked package, and later deprecated from the package.installed—Installed as part of a second-generation managed package.installedEditable—Installed as part of an unlocked package. For components in unlocked packages, an admin can make modifications, but all changes are overwritten by the next upgrade.released—Not applicable. (Used only for first-generation packages.)unmanaged—Not applicable. (Used only for first-generation packages.) |
| SubscriberPackageId | TypereferencePropertiesFilter, Group, SortDescriptionID that identifies this package across all Salesforce instances (starts with 033). |