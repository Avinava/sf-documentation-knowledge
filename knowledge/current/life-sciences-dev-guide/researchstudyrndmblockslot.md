---
title: "ResearchStudyRndmBlockSlot"
domain: life-sciences-dev-guide
topic: researchstudyrndmblockslot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.355Z
estimatedTokens: 1122
keywords: [ResearchStudyRndmBlockSlot, individual, randomization, block, items, corresponding, Research, Study, API, version, 61.0, later, Calls, Associated, Objects]
---

# ResearchStudyRndmBlockSlot

> Represents the individual randomization block items corresponding to a
         Research Study Randomization Block This object is available in API version 61.0 and
      later.

# ResearchStudyRndmBlockSlot

Represents the individual randomization block items corresponding to a Research Study Randomization Block This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ItemAssignmentStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the research study randomization block item.Possible values are:AbandonedAssignedAvailable |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the research study randomization block slot. |
| ResearchStudyCmprGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe research study comparison group associated with the research study randomization block item.This field is a relationship field.Relationship NameResearchStudyCmprGroupRefers ToResearchStudyCmprGroup |
| RsrchStdyRandomizationBlkId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe research study randomization block associated with the research study randomization block item.This field is a relationship field.Relationship NameRsrchStdyRandomizationBlkRelationship TypeMaster-detailRefers ToRsrchStdyRandomizationBlock (the master object) |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sequence number of the research study randomization block item. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ResearchStudyRndmBlockSlotChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ResearchStudyRndmBlockSlotFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ResearchStudyRndmBlockSlotHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ResearchStudyRndmBlockSlotOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ResearchStudyRndmBlockSlotShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ResearchStudyRndmBlockSlotChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- ResearchStudyRndmBlockSlotFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ResearchStudyRndmBlockSlotHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ResearchStudyRndmBlockSlotOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- ResearchStudyRndmBlockSlotShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
