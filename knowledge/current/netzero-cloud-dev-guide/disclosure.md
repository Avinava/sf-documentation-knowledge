---
title: "Disclosure"
domain: netzero-cloud-dev-guide
topic: disclosure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.761Z
estimatedTokens: 1733
keywords: [Disclosure, company, shares, included, user, their, document, API, version, 57.0, later, Calls, Associated, Objects]
---

# Disclosure

> Represents the disclosure details that a company shares, which can be
         included by a user in their response document. This object is available in API version
      57.0 and later.

# Disclosure

Represents the disclosure details that a company shares, which can be included by a user in their response document. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assesment record that stores the responses submitted for the disclosure.This field is a relationship field.Relationship NameAssessmentRelationship TypeLookupRefers ToAssessment |
| AuthoringMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the authoring mode used to launch the disclosure authoring experience.Possible values depending on the Use Disclosure and Compliance Hub Plugin setting are:Microsoft365Word—Microsoft 365 WordOmniScriptAndMcrsft365Wrd—OmniScript and Microsoft 365 WordOmniScriptForm—OmniScript FormGoogleDocs—Google DocsOmniscriptAndGoogleDocs—OmniScript and Google DocsSee Enable the Disclosure and Compliance Hub. |
| DisclosureDefVerDesc | TypetextareaPropertiesNillableDescriptionThe description of the disclosure definition version associated with the disclosure. |
| DisclosureDefVerNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe version number of the disclosure definition associated with the disclosure. |
| DisclosureDefinition | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe disclosure definition associated with the disclosure. |
| DisclosureDefinitionVerId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe version of the disclosure definition associated with the disclosure.This field is a relationship field.Relationship NameDisclosureDefinitionVerRefers ToDisclosureDefinitionVersion |
| DisclosureDocumentUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of the final disclosure document that's used in the disclosure. |
| DisclosureType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of disclosure. |
| DisclosureTypeBodyLogo | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe logo of the standard body related to a disclosure type to which an individual or a company is making a disclosure. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the disclosure. |
| ExternalDocumentErrorMessage | TypestringPropertiesNillableDescriptionThe error associated with the launch of the external document. |
| ExternalDocumentLaunchStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the external document launch.Possible values are:DocumentGenerationFailed—Document Generation FailedProcessingReadyToLaunch—Ready to Launch |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PredefinedDisclosureDefVersion | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionSpecifies the predefined disclosure definition version associated with the disclosure.Possible values depending on the Use Disclosure and Compliance Hub Plugin setting are:CsrdVersion3ForHybridMS365—CSRD V3 Microsoft 365 Word Hybrid ModeCsrdVersion4ForGoogleDocs—CSRD V4 Google DocsCsrdVersion4ForHybridMS365—CSRD V4 Microsoft 365 Word Hybrid Mode |
| ReplicateResponsesFromId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe disclosure from where the responses are taken. The disclosure information is dependent on the disclosure type, definition, and a valid assessment context on the disclosure.Available in API version 59.0 and later.This field is a relationship field.Relationship NameReplicateResponsesFromRelationship TypeLookupRefers ToDisclosure |
| ShouldGenDrftRespDocFrEinstein | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates wether to generate the draft response document using Einstein Search for the disclosure.The default value is false. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the disclosure. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the disclosure.Possible values are:COMPLETED—CompletedIN_PROGRESS—In ProgressREADY_FOR_REVIEW—Ready for ReviewThe default value is IN_PROGRESS. |
| Year | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe year for which the disclosure is done.Possible values are:20002001200220032004200520062007200820092010201120122013201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037203820392040 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DisclosureFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DisclosureHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DisclosureShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DisclosureFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- DisclosureHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- DisclosureShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
