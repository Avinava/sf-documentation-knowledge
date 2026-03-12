---
title: "Fields on ContactPointAddress"
domain: life-sciences-dev-guide
topic: fields-on-contactpointaddress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.038Z
estimatedTokens: 1209
keywords: [ContactPointAddress, Life, Sciences, Cloud, extend, standard, Contact, Point, Address, represent, contact’s, billing, shipping, associated, individual]
---

# Fields on ContactPointAddress

> Life Sciences Cloud fields extend the standard Contact Point Address object
         to represent a contact’s billing or shipping address associated with an individual or
         account. This object is available in API version 65.0 and later.

# Fields on ContactPointAddress

Life Sciences Cloud fields extend the standard Contact Point Address object to represent a contact’s billing or shipping address associated with an individual or account. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BrickName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the geography brick associated with the contact point address record. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the contact point address record. |
| FullAddress | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe concatenated address of the contact point address.This field is a calculated field. |
| GeoGroup1Code | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe first geography group code associated with the contact point address. |
| GeoGroup2Code | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe second geography group code associated with the contact point address. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a contact’s address is active for the account (true) or not (false).The default value is false. |
| IsStateDstrLicenseExempt | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the contact point address is exempt from the requirement for a State Distributor License (SDL).The default value is false. |
| IsTerrAssignmentExcluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a contact’s address is excluded from territory alignment (true) or not (false).The default value is false. |
| IsValidated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a contact’s address is validated (true) or not (false).The default value is false. |
| RelatedContactPointAddressId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe source of this contact point address record.This field is a relationship field.Relationship NameRelatedContactPointAddressRefers ToContactPointAddress |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system that generated the record. |
| WebSiteUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of the website associated with the contact. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContactPointAddressChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ContactPointAddressHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ContactPointAddressShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [*Object Reference for the Salesforce Platform*: ContactPointAddress](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contactpointaddress.htm)

## Related Topics

- ContactPointAddressChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- ContactPointAddressHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ContactPointAddressShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
