---
title: "CallCtrAgentFavTrfrDestShare"
domain: object-reference
topic: callctragentfavtrfrdestshare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.971Z
estimatedTokens: 812
keywords: [CallCtrAgentFavTrfrDestShare, sharing, entry, favorite, transfer, destination, Omni-Channel, softphone, voice, call, transfers, API, version, 55.0, later]
---

# CallCtrAgentFavTrfrDestShare

> Represents a sharing entry on a favorite transfer destination in the
         Omni-Channel softphone for voice call transfers. This object is available in API version
         55.0 and later.

# CallCtrAgentFavTrfrDestShare

Represents a sharing entry on a favorite transfer destination in the Omni-Channel softphone for voice call transfers. This object is available in API version 55.0 and later.

You can only create, edit, and delete sharing entries for standard objects whose RowCause field is set to Manual. Sharing entries for standard objects with different RowCause values are created as a result of your Salesforce org’s sharing configuration and are read-only. For some sharing mechanisms, such as sharing sets, sharing entries aren’t stored at all.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While Salesforce currently maintains read-only sharing entries for multiple sharing mechanisms, it’s possible that we’ll stop storing certain share records to improve performance. As a best practice, don’t create customizations that rely on the availability of these sharing entries. Any changes to sharing behavior will be communicated before they occur.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe level of access the User or Group has to the transfer destination that’s marked as a favorite. Possible values are:All — OwnerEdit — Read/WriteRead — Read Only |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique ID of the parent object.This field is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToCallCtrAgentFavTrfrDest |
| RowCause | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionReason that this sharing entry exists. If you’re creating a sharing entry, the only permitted value is Manual. If no value is specified, the field defaults to Manual. All other RowCause values are read-only. After the sharing entry is created, this field can’t be edited.Possible values are:CompliantDataSharing — Compliant Data SharingGuestParentImplicit — Associated guest user sharingGuestPersonImplicit — Associated Guest User SharingGuestRule — Guest User Sharing RuleImplicitChild — Account SharingImplicitParent — Associated record owner or sharingImplicitPerson — Person ContactLearningAssignment — Learning Assignment ShareLearningAssignmentImplicit — Learning Assignment Implicit ShareLearningItemAssignment — Learning Item Assignment ShareManual — Manual SharingMfgTargetShare — Manufacturing Target Sharing RuleOwnerRule — Sharing RuleSharingRecordCollection — Record CollectionSurveyShare — Survey Sharing RuleTeam — Sales TeamTerritory — Territory Assignment RuleTerritory2AssociationManual — Territory ManualTerritory2Forecast — Territory assignment for forecasting and reportingTerritoryManual — Territory ManualTerritoryRule — Territory Sharing Rule |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe unique ID of the User or Group that has been given access to the favorite transfer destination.This field is a polymorphic relationship field.Relationship NameUserOrGroupRelationship TypeLookupRefers ToGroup, User |
