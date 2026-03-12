---
title: "EmploymentOffer"
domain: psc-api
topic: employmentoffer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.575Z
estimatedTokens: 1638
keywords: [EmploymentOffer, employment, offer, selected, candidate, API, version, 62.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# EmploymentOffer

> Represents an employment offer for a selected candidate. This
      object is available in API version 62.0 and later.

# EmploymentOffer

Represents an employment offer for a selected candidate. This object is available in API version 62.0 and later.

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
| AcceptanceDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the recipient accepted the employment offer. |
| ApplicationFormId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the application form associated with the employment offer.This field is a relationship field.Relationship NameApplicationFormRefers ToApplicationForm |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the employment offer. |
| EmployeeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee associated with the employment offer.This field is a polymorphic relationship field.Relationship NameEmployeeRefers ToAccount, Employee2 |
| ExpectedHireDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected hire date of employment. |
| ExpectedStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected start date of employment. |
| ExpirationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the employment offer expires. |
| JobPositionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the job position associated with the employment offer.This field is a relationship field.Relationship NameJobPositionRefers ToJobPosition |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latitude of the location. |
| Location | TypelocationPropertiesNillableDescriptionThe ID of the location associated with the employment offer. |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe longitude of the location. |
| ManagerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manager associated with the employment offer.This field is a polymorphic relationship field.Relationship NameManagerRefers ToAccount, Employee2 |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescription |
| OfferDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the employment offer was created. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PayLevelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe pay level associated with the employment offer.This field is a polymorphic relationship field.Relationship NamePayLevelRefers ToPayGrade, PayGradeStep, PayGradeStepLocation |
| PayOffer | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe currency amount offered to the recipient. |
| RecipientId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe candidate who is being offered employment.This field is a polymorphic relationship field.Relationship NameRecipientRefers ToAccount, Employee2, User |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the employment offer.Possible values are:AcceptedDraftPendingApprovalRejectedRolledOutThe default value is Draft. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the employment offer.Picklist values for this field aren't predefined. Before you create a record, ensure that your Salesforce admin has defined picklist values according to your organization’s requirements. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EmploymentOfferFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[EmploymentOfferHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[EmploymentOfferOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[EmploymentOfferShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- EmploymentOfferFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- EmploymentOfferHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- EmploymentOfferOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- EmploymentOfferShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
