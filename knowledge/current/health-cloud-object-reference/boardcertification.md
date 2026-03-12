---
title: "BoardCertification"
domain: health-cloud-object-reference
topic: boardcertification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.078Z
estimatedTokens: 1318
keywords: [BoardCertification, practitioner's, board, certifications, board-certified, cardiology, cardiovascular, disease, Calls, Associated, Objects]
---

# BoardCertification

> Represents the practitioner's board certifications such as being
      board-certified in cardiology and cardiovascular disease.

# BoardCertification

Represents the practitioner's board certifications such as being board-certified in cardiology and cardiovascular disease.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount that this healthcare provider is associated with. |
| BoardName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the organization providing the board certification. |
| CertificationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of certification. |
| CurrentCertificationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of most recent board certification. |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which this certification is effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which this certification is no longer effective. |
| ExpirationDate | TypedatePropertiesCreate, Filter, Group, Nillable, UpdateDescriptionExpiration date of the board certification. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the provider. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record. |
| PractitionerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPractitioner that this certification is associated with. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the system from which the record was sourced. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the certification. |
| TerminationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTermination date for this provider. |
| TerminationReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReason for termination. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[BoardCertificationChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[BoardCertificationFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BoardCertificationHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BoardCertificationOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BoardCertificationShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BoardCertificationChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- BoardCertificationFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- BoardCertificationHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- BoardCertificationOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- BoardCertificationShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
