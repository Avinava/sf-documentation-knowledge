---
title: "LifeSciDataChangeRequest"
domain: life-sciences-dev-guide
topic: lifescidatachangerequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.281Z
estimatedTokens: 1294
keywords: [LifeSciDataChangeRequest, data, change, requests, objects, API, version, 65.0, later, Calls, Associated]
---

# LifeSciDataChangeRequest

> Represents the data change requests for the all objects. This object is
         available in API version 65.0 and later.

# LifeSciDataChangeRequest

Represents the data change requests for the all objects. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe comments added by the user. The comments are included in the external validation request. |
| DataChangeInformation | TypetextareaPropertiesCreate, UpdateDescriptionThe information related to the old and the new data change in JSON format. |
| DataChangeRecordIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record identifier for the related data change, for example, Account Id and Account Address Id. |
| DataChgExtlRecIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier of the source record for which the data change request was created. |
| ExternalValidationSysName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the system used for external validation, for example, OneKey and LEXI. |
| ExtlValidationReqIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the identifier of the data change validation received from an external system. |
| ExtlValidationSysResponse | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe response received for an external data change request validation. |
| FailureReason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe exception messages for an unsuccessful create or update action. Also, stores the exception message for a failed request to an external system. |
| IsNewRecApprovalRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the data change request for a new restricted record requires an approval (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed the record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| LifeSciDataChgRqstDefId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe data change definition record associated with the data change request.This field is a relationship field.Relationship NameLifeSciDataChgRqstDefRefers ToLifeSciDataChangeDef |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the data change record. |
| OperationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the change request is to update or create data.Possible values are:CreateUpdate |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentDataChangeRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent data change request associated with the object. For example, this field stores the Account data change associated with the Affiliation data change request.This field is a relationship field.Relationship NameParentDataChangeRequestRefers ToLifeSciDataChangeRequest |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into the object. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the status of a data change request.Possible values are:ApprovedFailedNotProcessed—Not ProcessedNotQualified—Not QualifiedProcessedQualifiedRejected |
| ValidationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the validation type is internal or external for the data change request.Possible values are:ExternalInternal |

## Associated Object

This object has the following associated object. If the API version isn’t specified, it's available in the same API versions as this object. Otherwise, it's available in the specified API version and later.

[LifeSciDataChangeRequestShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LifeSciDataChangeRequestShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
