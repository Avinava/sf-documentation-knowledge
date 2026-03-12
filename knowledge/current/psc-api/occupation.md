---
title: "Occupation"
domain: psc-api
topic: occupation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.013Z
estimatedTokens: 1141
keywords: [Occupation, group, positions, engage, specialized, line, work, require, connected, skills, knowledge, qualifications, Registered, Nurses, Healthcare]
---

# Occupation

> Represents a group of positions that engage in a specialized line of
         work and require a connected set of skills, knowledge, or qualifications. For example, the
         occupation of Registered Nurses in the Healthcare occupation group. This object is
      available in API version 62.0 and later.

# Occupation

Represents a group of positions that engage in a specialized line of work and require a connected set of skills, knowledge, or qualifications. For example, the occupation of Registered Nurses in the Healthcare occupation group. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if Talent Recruitment Management is enabled in your org. To access the object, you need one of these permission sets.

| User Type | Permission Set |
| --- | --- |
| Internal Users | Talent Recruitment Management Specialist Access |
| Salesforce Platform Users | Talent Recruitment Management Hiring Manager AccessORTalent Recruitment Management Employee Access |
| Customer and Partner Community Users | Talent Recruitment Management Applicant Access |

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional information about the occupation. |
| Code | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code for the occupation. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the occupation. |
| ExternalReferenceUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe link to an external source of information about the occupation. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the occupation. |
| NatureOfWork | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe occupation's nature of work. |
| OccupationGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the occupation group associated with the occupation.This field is a relationship field.Relationship NameOccupationGroupRefers ToOccupationGroup |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the occupation. |
| TitlingPolicy | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies how the positions associated with the occupation must be titled. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OccupationFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[OccupationHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[OccupationOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[OccupationShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- OccupationFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- OccupationHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- OccupationOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- OccupationShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
