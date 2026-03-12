---
title: "DocGenerationQueryResult"
domain: edu-cloud-dev-guide
topic: docgenerationqueryresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.372Z
estimatedTokens: 848
keywords: [DocGenerationQueryResult, including, report, template, process, lookup, document, generation, job, API, version, 61.0, later, Calls, Special]
---

# DocGenerationQueryResult

> Represents information, including a report, template, and process
         lookup, for a document generation job. This object is available in API version 61.0
      and later.

# DocGenerationQueryResult

Represents information, including a report, template, and process lookup, for a document generation job. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the FundraisingAccess license is enabled and the DocGen User permission set and the Fundraising User system permission are assigned to users.

## Fields

| Field | Details |
| --- | --- |
| DocumentGenerationProcessId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe process associated with the document creation.This field is a relationship field.Relationship NameDocumentGenerationProcessRelationship TypeLookupRefers ToDocumentGenerationProcess |
| DocumentTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe template associated with the document creation.This field is a relationship field.Relationship NameDocumentTemplateRelationship TypeLookupRefers ToDocumentTemplate |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the batch query job. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReportFolderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe report folder associated with the document generation query result.This is a relationship field and is available from API version 62.0 and later.Relationship NameReportFolderRefers ToFolder |
| RunDateTime | TypedateTimePropertiesCreate, Defaulted on create, Filter, Sort, UpdateDescriptionThe date and time when the query and job was run. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DocGenerationQueryResultChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.

[DocGenerationQueryResultFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[DocGenerationQueryResultHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[DocGenerationQueryResultOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[DocGenerationQueryResultShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.
