---
title: "ProviderVisit"
domain: life-sciences-dev-guide
topic: providervisit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.031Z
estimatedTokens: 3137
keywords: [ProviderVisit, user's, visit, health, care, provider, sales, representative, visiting, discuss, product, usage, efficacy, enhance, adoption]
---

# ProviderVisit

> Represents the details of a field user's visit to a health care provider. For
         example, a sales representative visiting a health care provider to discuss product usage
         and efficacy to enhance adoption. This object is available in API version 65.0 and
      later.

# ProviderVisit

Represents the details of a field user's visit to a health care provider. For example, a sales representative visiting a health care provider to discuss product usage and efficacy to enhance adoption. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe account associated with the provider visit. Derived from the related visit (Visit object).This field is a relationship field.Relationship NameAccountRefers ToAccount |
| AdditionalInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionInformation captured on signature capture or provider visit submission for auditability including account name. |
| BookingStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe booking status of the provider visit.Possible values are:AcceptedProposedRejectedRetrieved |
| BookingStatusReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the reason for a rejection of the provider visit. |
| Channel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the channel type for the provider visit. Derived from the related visit (Visit object). |
| ComplianceStatements | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionCompliance statements displayed to the field user. |
| GeoLocOnSubmit | TypelocationPropertiesNillableDescriptionThe GPS location captured upon the provider visit submission. |
| GeoLocOnSubmitLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe GPS latitude captured upon the provider visit submission. |
| GeoLocOnSubmitLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe GPS longitude captured upon the provider visit submission. |
| HasAttachments | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionOn submission, indicates if the provider visit has attachments.The default value is false. |
| InvitationEmailAddress | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail address used to send an invitation for a remote visit. |
| InvitationEmailBouncedRsn | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReason for a bounced email invitation for a remote visit. |
| InvitationEmailStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionShows the status of an attendee’s email invitation for a remote visit.Possible values are:AcceptedBouncedDeclinedPendingSentTentative |
| IsAdhocProviderVisit | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the provider visit was initiated spontaneously, without prior scheduling.The default value is false. |
| IsBackdatedSbmtVldSkipped | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the backdated validation is skipped on provider visit submission.The default value is false. |
| IsBackdatedSgnVldSkipped | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the backdated validation is skipped.The default value is false. |
| IsConfirmed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a confirmation is received from the provider for the scheduled date and time of the planned visit.The default value is false. |
| IsOfflineModeSignature | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the provider visit is signed offline and online validation isn't applied to this visit.The default value is false. |
| IsOfflineModeSubmit | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that provider visit is submitted offline and online validation isn't applied to this visit.The default value is false. |
| IsRecordOwner | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the user is the owner of the provider visit record.The default value is false.This field is a calculated field. |
| IsSignedAwayFrmAllowDstn | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the provider visit is signed outside the allowed distance.The default value is false. |
| IsSubmitAwayFrmAllowDstn | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the provider visit is submitted outside the allowed distance.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LifeScienceAccountListId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account list that's associated with the provider visit.This field is a relationship field.Relationship NameLifeScienceAccountListRefers ToLifeScienceAccountList |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the provider visit. |
| NextProviderVisitObjective | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNext visit objective for the provider. |
| NextPrvdVisitObjectiveType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNext visit objective type for the provider. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PhysicalFormIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the physical form signed instead of an electronic signature. |
| PlannedEndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe planned end date and time for the provider visit. Derived from the related visit (Visit object). |
| PlannedStartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe planned start date and time for the provider visit. Derived from the related visit (Visit object). |
| PreProviderVisitNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe notes derived from the next provider visit objectives of the previous provider visit submitted on the account by the user. |
| ProvVisitDlvrSampleCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe record count of delivered samples linked to the provider visit. Derived from the related visit (Visit object). |
| ProvVisitMktItemCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe record count of marketing items linked to the provider visit. Derived from the related visit (Visit object). |
| ProvVisitProdDtlCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe record count of detailing products linked to the provider visit. Derived from the related visit (Visit object). |
| ProvVisitReqSampleCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe record count of requested samples linked to the provider visit. Derived from the related visit (Visit object). |
| RemoteAttendanceStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether an attendee joined the remote call or missed it.Possible values are:AttendedNoShow |
| RemoteChannelServiceProvider | Reserved for future use. |
| RemoteSessionStatus | Reserved for future use. |
| RemoteSessionStatusReason | Reserved for future use. |
| ShippingAddressId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe shipping address of the requested samples for the provider visit.This field is a relationship field.Relationship NameShippingAddressRefers ToContactPointAddress |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the provider visit. Derived from the related visit (Visit object).Possible values are:AbandonedCompletedErrorInProgressNonePlannedUnscheduledThe default value is Planned. |
| SubmitDelayReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for a delay in submitting the provider visit. |
| SubmitDelayReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason type for a delay in submitting the provider visit. |
| SubmitGeolcMissingReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionReason populated when GPS is not captured upon the provider visit submission.Possible values are:BadDataDeviceRestrictedOfflineUserRestricted |
| SubmitGeolocationTimestamp | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time when GPS is captured upon the provider visit submission. |
| TerritoryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe associated territory record. Derived from the related visit (Visit object).This field is a relationship field.Relationship NameTerritoryRefers ToTerritory2 |
| TerritoryName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the territory associated with the provider visit. |
| VisitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The associated visit record. This field is unique within your organization.This field is a relationship field.Relationship NameVisitRelationship TypeMaster-detailRefers ToVisit (the master object) |
| VisitSubmitDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the provider visit is submitted. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProviderVisitChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ProviderVisitFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProviderVisitHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProviderVisitChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- ProviderVisitFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ProviderVisitHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
