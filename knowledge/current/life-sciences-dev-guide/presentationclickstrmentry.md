---
title: "PresentationClickStrmEntry"
domain: life-sciences-dev-guide
topic: presentationclickstrmentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.690Z
estimatedTokens: 2304
keywords: [PresentationClickStrmEntry, collection, clickstream, data, captured, presentation, shown, across, different, forums, API, version, 65.0, later, Calls]
---

# PresentationClickStrmEntry

> Represents the collection of clickstream data captured while the presentation
         is being used or shown across different forums. This object is available in API
      version 65.0 and later.

# PresentationClickStrmEntry

Represents the collection of clickstream data captured while the presentation is being used or shown across different forums. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the account, identifying the account on which the call was made. This field links the call data to a specific account for tracking purposes.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| AccountLoginName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the guest attendee used to log in remotely, if applicable. Tracks guest users accessing the remote session. |
| ActualUsageDuration | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRecords the total time, in seconds, that the user (during a face-to-face interaction) or the attendee (in a remote session) spent on a slide. |
| AttendeeBrowser | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the web browser used by the attendee during a remote session. |
| AttendeeDeviceOs | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the operating system used by the attendee's device during a remote session. |
| AttendeeDeviceType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the type of device (smartphone, tablet, computer) used by the attendee during a remote session. |
| ContentName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the public content that was opened during a remote interaction and that is tied to the presentation. This content is typically linked to important public documents, such as product information or legal disclaimers, which the health care professional can view through their browser. |
| ContentPageIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the specific slide within a presentation page container (sequence). |
| ContentReaction | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCaptures the reaction to the presentation page—positive (1), negative (-1), or neutral (0). |
| ContentUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe public disclaimer URL of the presentation that was opened. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MetricType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the type of metric being collected from the clickstream, such as Tracking or Content Rating.This field is a calculated field. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. An automatically generated unique identifier for the record, following the format, CSM-{00000000}. |
| PresentationFileContentName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the slide that the user viewed in the presentation page file. |
| PresentationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. A reference to the presentation, linking to the presentation on which clickstream data was captured.This field is a relationship field.Relationship NamePresentationRelationship TypeMaster-detailRefers ToPresentation (the master object) |
| PresentationName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the presentation from which the clickstream data was captured. |
| PresentationPageContentVerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the specific version of the presentation file that was viewed by the user.This field is a relationship field.Relationship NamePresentationPageContentVerRefers ToContentVersion |
| PresentationPageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the presentation page, identifying the specific page where the clickstream data was recorded.This field is a relationship field.Relationship NamePresentationPageRefers ToPresentationPage |
| PresentationVersion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version of the presentation that was displayed during the session. |
| ProductGuidanceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the Product Guidance object, linking a specific product message to a presentation page presented and the clickstream metric record.This field is a relationship field.Relationship NameProductGuidanceRefers ToProductGuidance |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to both the Product2 and LSMarketableProduct objects, associating a product with the presentation page presented and the clickstream metric record.This field is a polymorphic relationship field.Relationship NameProductRefers ToLifeSciMarketableProduct, Product2 |
| ProviderVisitDtlProductMsgId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the detailing product message associated with the presentation page.This field is a relationship field.Relationship NameProviderVisitDtlProductMsgRefers ToProviderVisitDtlProductMsg |
| ProviderVisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the Provider Visit object, linking to the overall record of the visit (Call).This field is a relationship field.Relationship NameProviderVisitRefers ToProviderVisit |
| ProviderVisitPrdDetailingId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the Provider Visit Product Detailing object, linking to specific product information discussed during the visit.This field is a relationship field.Relationship NameProviderVisitPrdDetailingRefers ToProviderVisitProdDetailing |
| ProviderVisitType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of remote call.Possible values are:AdHocSessionRemoteCallRemoteMeeting |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| UsageEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe exact date and time when the user left the slide. For remote sessions, captured at the attendee level, not at the user level. |
| UsageStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe exact date and time when the user opened the slide. For remote sessions, captured at the attendee level, not at the user level. |
| VisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the associated visit where clickstream data was captured.This field is a relationship field.Relationship NameVisitRefers ToVisit |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PresentationClickStrmEntryFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PresentationClickStrmEntryHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PresentationClickStrmEntryFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PresentationClickStrmEntryHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
