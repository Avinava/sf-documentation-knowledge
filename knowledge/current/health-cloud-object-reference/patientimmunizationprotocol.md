---
title: "PatientImmunizationProtocol"
domain: health-cloud-object-reference
topic: patientimmunizationprotocol
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.699Z
estimatedTokens: 1563
keywords: [PatientImmunizationProtocol, protocol, followed, provider, patient’s, immunization, recommendations, vaccine, administered, child, PatientImmunization, API, version, 56.0, later]
---

# PatientImmunizationProtocol

> Represents the protocol followed by a provider for a patient’s immunization
         and its related details. The protocol defines the set of recommendations that are followed
         while a vaccine is administered. This object is a child of the PatientImmunization object. This object is available in API version 56.0
      and later.

# PatientImmunizationProtocol

Represents the protocol followed by a provider for a patient’s immunization and its related details. The protocol defines the set of recommendations that are followed while a vaccine is administered. This object is a child of the PatientImmunization object. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrentDose | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current dose the patient is on in the total number of doses recommended for immunization. |
| ImmunizationRecommendation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the protocol that was followed for the immunization. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the PatientImmuizationProtocol record. |
| OwnerId | TypePolymorphic lookupPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.Relationship NameOwnerRefers ToGroupUser |
| PatientImmunizationId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe parent PatientImmunization record that the applied protocol is a part of.Relationship NamePatientImmunizationRefers ToPatientImmunization |
| RecommendedDoses | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| RecommendingAuthority | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTotal number of doses recommended to achieve immunity. |
| TargetDisease1CodeId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents a disease that was targeted in the immunizationRelationship NameTargetDisease1CodeRefers ToCodeSetBundle |
| TargetDisease2CodeId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents a disease that was targeted in the immunizationRelationship NameTargetDisease2CodeRefers ToCodeSetBundle |
| TargetDisease3CodeId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents a disease that was targeted in the immunizationThis field is a relationship field.Relationship NameTargetDisease3CodeRefers ToCodeSetBundle |
| TargetDisease4CodeId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents a disease that was targeted in the immunizationThis field is a relationship field.Relationship NameTargetDisease4CodeRefers ToCodeSetBundle |
| TargetDisease5CodeId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents a disease that was targeted in the immunizationThis field is a relationship field.Relationship NameTargetDisease5CodeRefers ToCodeSetBundle |
| TargetDisease6CodeId | TypeLookupPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents a disease that was targeted in the immunizationThis field is a relationship field.Relationship NameTargetDisease6CodeRefers ToCodeSetBundle |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PatientImmunizationProtocolFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PatientImmunizationProtocolHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PatientImmunizationProtocolOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 57.0)

Sharing rules are available for the object.

[PatientImmunizationProtocolShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 57.0)

Sharing is available for the object.

[PatientImmunizationProtocolChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- PatientImmunizationProtocolFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PatientImmunizationProtocolHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PatientImmunizationProtocolOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- PatientImmunizationProtocolShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
- PatientImmunizationProtocolChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
