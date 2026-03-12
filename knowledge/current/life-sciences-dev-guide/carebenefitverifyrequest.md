---
title: "CareBenefitVerifyRequest"
domain: life-sciences-dev-guide
topic: carebenefitverifyrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.232Z
estimatedTokens: 3433
keywords: [CareBenefitVerifyRequest, verification, benefits, API, version, 53.0, later, Calls, Associated, Objects]
---

# CareBenefitVerifyRequest

> Request for verification of benefits. This object is available in API
      version 53.0 and later.

# CareBenefitVerifyRequest

Request for verification of benefits. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssignedToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user assigned to the care benefit verify request.This field is a relationship field.This field is available in API version 62.0 and later.Relationship NameAssignedToRefers ToUser |
| AuthorizedPrescriptionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe authorized prescription associated with the care benefit verify request.This field is a relationship field.This field is available in API version 61.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NameAuthorizedPrescriptionRelationship TypeLookupRefers ToMedicationRequest |
| BenefitCategoryCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe benefit category code associated with the care benefit verify request.This field is a relationship field.This field is available in API version 61.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NameBenefitCategoryCodeRelationship TypeLookupRefers ToCodeSet |
| BillablePrdEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when billable period ended.This field is available in API version 61.0 and later with the Manage Pharmacy Benefits Verification permission set. |
| BillablePrdStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when billable period started.This field is available in API version 61.0 and later with the Manage Pharmacy Benefits Verification permission set. |
| CareProgramEnrolleeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care program enrollee associated with the care benefit verify request.This field is a relationship field.This field is available in API version 62.0 and later.Relationship NameCareProgramEnrolleeRefers ToCareProgramEnrollee |
| CareProgramId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe care program associated with the care benefit verify request.This field is a relationship field.This field is available in API version 62.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NameCareProgramRefers ToCareProgram |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the associated case.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| CoverageBenefitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the set of services covered by the insurance plan.This field is a relationship field.Relationship NameCoverageBenefitRelationship TypeLookupRefers ToCoverageBenefit |
| InitialFillDuration | TypedoublePropertiesFilter, Nillable, SortDescriptionThe initial fill duration of the authorized prescription.This field is available in API version 62.0 and later with the Manage Pharmacy Benefits Verification permission set. |
| InitialFillQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe initial fill quantity of the authorized prescription.This field is available in API version 62.0 and later with the Manage Pharmacy Benefits Verification permission set. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MemberPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionIdentifies the member plan that includes the benefit item being verified.This field is a relationship field.Relationship NameMemberPlanRelationship TypeLookupRefers ToMemberPlan |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the care benefit verification request. |
| OriginalPrescriptionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe original prescription associated with the care benefit verify request.This field is a polymorphic relationship field.This field is available in API version 61.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NameOriginalPrescriptionRelationship TypeLookupRefers ToMedicationRequest |
| PayerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payer associated with the care benefit verify request.This field is a relationship field.This field is available in API version 61.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NamePayerRelationship TypeLookupRefers ToAccount |
| PlanId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe purchaser plan from the member plan associated with the care program enrollee.This field is a relationship field.This field is available in API version 62.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NamePlanRefers ToPurchaserPlan |
| PrescriberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe prescriber associated with the care benefit verify request.This field is a relationship field.This field is available in API version 61.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NamePrescriberRelationship TypeLookupRefers ToHealthcareProvider |
| PrescriptionMedicationId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe medication code or medication name of the authorized prescription.This field is a polymorphic relationship field.This field is available in API version 62.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NamePrescriptionMedicationRefers ToCodeSetBundle, Medication |
| PriorityCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority code associated with the care benefit verify request.This field is a relationship field.This field is available in API version 61.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NamePriorityCodeRelationship TypeLookupRefers ToCodeSet |
| ProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe provider of the care benefit verify request.This field is a polymorphic relationship field.This field is available in API version 61.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NameProviderRelationship TypeLookupRefers ToAccount, HealthcareProvider |
| RelatedCareBnftVerifyRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe original care benefit verify request from which the current request is cloned.This field is a relationship field.This field is available in API version 62.0 and later.Relationship NameRelatedCareBnftVerifyRequestRefers ToCareBenefitVerifyRequest |
| Request | TypetextareaPropertiesNillableDescriptionThe JSON request body sent to an external system for care benefit verification. |
| RequestDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate of verification request. |
| RequestedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPerson or organization requesting verification.This field is a relationship field.Relationship NameRequestedByRelationship TypeLookupRefers ToUser |
| RequesterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe requester associated with the care benefit verify request.This field is a polymorphic relationship field.This field is available in API version 61.0 and later with the Manage Pharmacy Benefits Verification permission set.Relationship NameRequesterRelationship TypeLookupRefers ToAccount, HealthcareProvider |
| ResponseBody | Typebase64PropertiesCreate, Nillable, UpdateDescriptionFull JSON response from external system. |
| ResponseContentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe content type of the response from the external system.Possible values are:application/htmlapplication/java-archiveapplication/javascriptapplication/jsonapplication/mswordapplication/octet-streamapplication/octet-stream;type=unknownapplication/opxapplication/pdfapplication/postscriptapplication/rtfapplication/vnd.box.notesapplication/vnd.google-apps.documentapplication/vnd.google-apps.drawingapplication/vnd.google-apps.formapplication/vnd.google-apps.presentationapplication/vnd.google-apps.scriptapplication/vnd.google-apps.spreadsheetapplication/vnd.ms-excelapplication/vnd.ms-excel.sheet.macroEnabled.12application/vnd.ms-infopathapplication/vnd.ms-powerpointapplication/vnd.ms-powerpoint.presentation.macroEnabled.12application/vnd.ms-word.document.macroEnabled.12application/vnd.oasis.opendocument.presentationapplication/vnd.oasis.opendocument.spreadsheetapplication/vnd.oasis.opendocument.textapplication/vnd.openxmlformats-officedocument.presentationml.presentationapplication/vnd.openxmlformats-officedocument.presentationml.slideshowapplication/vnd.openxmlformats-officedocument.presentationml.templateapplication/vnd.openxmlformats-officedocument.spreadsheetml.sheetapplication/vnd.openxmlformats-officedocument.spreadsheetml.templateapplication/vnd.openxmlformats-officedocument.wordprocessingml.documentapplication/vnd.openxmlformats-officedocument.wordprocessingml.templateapplication/vnd.visioapplication/x-gzipapplication/x-java-sourceapplication/x-javascriptapplication/x-shockwave-flashapplication/x-sqlapplication/x-zip-compressedapplication/xhtml+xmlapplication/xmlapplication/zipaudio/mp4audio/mpegaudio/oggaudio/x-aacaudio/x-ms-wmaaudio/x-ms-wmvaudio/x-wavimage/bmpimage/gifimage/jpegimage/jpeg;type=mobileimage/pngimage/svg+xmlimage/tiffimage/vnd.adobe.photoshopimage/vnd.dwgimage/x-photoshopmessage/rfc822model/vnd.usdz+ziptext/csstext/csvtext/htmltext/plaintext/rtftext/snotetext/stypitext/vnd.salesforce.quip-chattext/vnd.salesforce.quip-doctext/vnd.salesforce.quip-sheettext/vnd.salesforce.quip-slidestext/vnd.salesforce.quip-templatetext/vtttext/webviewhtmltext/x-ctext/x-c++text/xmlvideo/mp4video/mpegvideo/oggvideo/quicktimevideo/x-m4vvideo/x-ms-asfvideo/x-msvideo |
| ResponseLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe length of the response from the external system. |
| ResponseName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the response from the external system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of the verification request.Possible values are:AcknowledgedCompletedCopyErrorPartialPendingRejectedTimedOut—Timed OutVerifiedPending ConfirmationReceieved ConfirmationReady for Verification |
| StatusReason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe reason for the specified status of the care benefit verification request. |
| VerificationMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the mode of verification used in the care benefit verify request.This field is available in API version 63.0 and later with the Manage Pharmacy Benefits Verification permission set.Possible values are:ElectronicManual |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareBenefitVerifyRequestChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[CareBenefitVerifyRequestFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareBenefitVerifyRequestHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CareBenefitVerifyRequestChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- CareBenefitVerifyRequestFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- CareBenefitVerifyRequestHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
