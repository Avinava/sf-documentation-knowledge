---
title: "WebStoreShare"
domain: object-reference
topic: webstoreshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.486Z
estimatedTokens: 620
keywords: [WebStoreShare, sharing, entry, B2B, D2C, store, API, version, 45.0, later, Calls, Special, Access, Rules]
---

# WebStoreShare

> Represents a sharing entry on a B2B or D2C store. This object is
      available in API version 45.0 and later.

# WebStoreShare

Represents a sharing entry on a B2B or D2C store. This object is available in API version 45.0 and later.

## Supported Calls

create(), delete(),, describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Your Salesforce admin can manage this object using standard Salesforce sharing rules and CRUD access for the WebStore.

## Fields

| Field | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA value that represents the type of sharing allowed.Possible values are:All—OwnerEdit—Read/WriteRead—Read Only |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent folder for the record.This field is a relationship field.Relationship NameParentRefers ToWebStore |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited.Possible values are:ALMAssignmentSharing—Actionable List Member Sharing RuleCompliantDataSharing—Compliant Data SharingGuestParentImplicit—Associated guest user sharingGuestPersonImplicit—Associated Guest User SharingGuestRule—Guest User Sharing RuleImplicitChild—Account SharingImplicitParent—Associated record owner or sharingImplicitPerson—Person ContactLearningAssignment—Learning Assignment ShareLearningAssignmentImplicit—Learning Assignment Implicit ShareLearningItemAssignment—Learning Item Assignment ShareManual—Manual SharingMfgTargetShare—Manufacturing Target Sharing RuleObligationAssigneeShare—Obligation Assignee ShareOwnerRule—Sharing RuleSharingRecordCollection—Record CollectionSurveyShare—Survey Sharing RuleTeam—Sales TeamTerritory—Territory Assignment RuleTerritory2AssociationManual—Territory ManualTerritory2Forecast—Territory assignment for forecasting and reportingTerritory2SplitsForecast—Territory Splits ShareTerritoryManual—Territory ManualTerritoryRule—Territory Sharing Rule |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the User or Group that has been given access to the User. This field can’t be updated.This field is a polymorphic relationship field.Relationship NameUserOrGroupRefers ToGroup, User |
