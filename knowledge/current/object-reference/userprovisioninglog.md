---
title: "UserProvisioningLog"
domain: object-reference
topic: userprovisioninglog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.954Z
estimatedTokens: 612
keywords: [UserProvisioningLog, messages, generated, process, provisioning, users, third-party, applications, API, version, 33.0, later, Calls]
---

# UserProvisioningLog

> Represents messages generated during the process of provisioning users
      for third-party applications. This object is available in API
      version 33.0 and later.

# UserProvisioningLog

Represents messages generated during the process of provisioning users for third-party applications. This object is available in API version 33.0 and later.

Some messages for this object are generated automatically by Salesforce, and others are created by the developers of the user provisioning plugin. Developers can use this object to log messages from the flow associated with the user provisioning process or the Apex plugin that calls the target system. Administrators can use this object as a log of all user provisioning activity and as a troubleshooting tool if desired behavior is missing. This object is available as a custom report type.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Details | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe value of this field depends on the log entry. For example, if the target system returns an error, the error message may be recorded in this field. |
| ExternalUserId | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier for the user in the target system. |
| ExternalUsername | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe username set in the target system for the associated user account. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique name for this object. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSalesforce ID of the Group or User who owns this object. |
| Status | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the user provisioning request. Based on the context of the log, it can contain different values, such as an HttpStatusCode. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSalesforce ID of the user making the request.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| UserProvisioningRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier for the user provisioning request.This is a relationship field.Relationship NameUserProvisioningRequestRelationship TypeLookupRefers ToUserProvisioningRequest |
