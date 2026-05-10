---
title: "ServiceManagementPrivilege"
domain: agentforce
topic: servicemanagementprivilege
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:39:15.345Z
estimatedTokens: 569
keywords: [ServiceManagementPrivilege, individual, service, management, privilege, system, including, scope, permitted, level, API, 66.0]
---

> Represents an individual service management privilege available in the
         system, including its type, scope, and permitted level of access. This object is
      available in API version 66.0 and later.

# ServiceManagementPrivilege

Represents an individual service management privilege available in the system, including its type, scope, and permitted level of access. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccessLevel | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe level of service management privilege represented as an integer value with 1 being the lowest. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe user-defined description of a service management privilege. |
| FunctionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the function type for which this record is used, such as HR Service or IT Service.Possible values are:ITService—IT ServiceHRService—IT Service |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe user-defined name of a service management privilege. |
| PrivilegeTag | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the function type for which this record is used, such as HR Service or IT Service. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceManagementPrivilegeShare](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ServiceManagementPrivilegeShare (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/sforce_api_associated_objects_share.htm)
