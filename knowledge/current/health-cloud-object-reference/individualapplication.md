---
title: "IndividualApplication"
domain: health-cloud-object-reference
topic: individualapplication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.516Z
estimatedTokens: 1409
keywords: [IndividualApplication, application, form, submitted, individual, Provider, Network, Management, permission, license, Calls, Associated, Objects]
---

# IndividualApplication

> Represents an application form submitted by an individual. Available with
    the Provider Network Management permission set license.

# IndividualApplication

Represents an application form submitted by an individual. Available with the Provider Network Management permission set license.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the applicant’s account. |
| AmountPaid | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount paid by the applicant. |
| ApplicationCaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a case that relates to this application. |
| ApplicationCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCategorizes the ways an application can be processed. Possible values are:BasicSpecial |
| ApplicationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the application. Possible values are:NewRenewal |
| AppliedDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date on which the application was received from the applicant. |
| ApprovedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the application was approved. |
| BusinessTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of individual business activity for this application. |
| Category | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service category of the application.Possible values are:Emergency ServiceLicensePermit |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText description provided by the applicant. |
| IsOwnerEditable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the owner ID of this record can be changed. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LicensePermitNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe emergency service authorization that will be granted if this application is approved. |
| LicenseTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, Update, NillableDescriptionThe type of emergency service that the applicant will provide. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated unique ID for this application. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user that owns this record. |
| PaymentDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time at which payment was received from the applicant. |
| RequirementsCompleteDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the applicant fulfilled all the requirements for approval. |
| SavedApplicationRefId | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionReference Id of the saved application. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe submission and approval status of the application. Possible values are:ClosedIn DistributionIn ReviewSubmitted |
| WasReturned | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether a submitted application was sent back to the applicant due to errors. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[IndividualApplicationHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[IndividualApplicationFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[IndividualOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[IndividualApplicationShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Share is available for the object.

## Related Topics

- IndividualApplicationHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- IndividualApplicationFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- IndividualOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- IndividualApplicationShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
