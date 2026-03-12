---
title: "Individual"
domain: object-reference
topic: individual
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.211Z
estimatedTokens: 1834
keywords: [Individual, customer’s, data, privacy, protection, preferences, records, store, customers’, associated, leads, contacts, person, accounts, users]
---

# Individual

> Represents a customer’s data privacy and protection preferences. Data
			privacy records based on the Individual object store your customers’ preferences. Data
			privacy records are associated with related leads, contacts, person accounts, and
			users. This object is available in API version 42.0 and later.

# Individual

Represents a customer’s data privacy and protection preferences. Data privacy records based on the Individual object store your customers’ preferences. Data privacy records are associated with related leads, contacts, person accounts, and users. This object is available in API version 42.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), merge(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   This object is available if Data Protection and Privacy is enabled.

## Fields

| Field Name | Details |
| --- | --- |
| BirthDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe customer’s birthdate. |
| CanStorePiiElsewhere | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndication that you can store the customer’s personally identifiable information (PII) outside of their legislation area. For example, you could store an EU citizen’s PII data in the US. |
| ChildrenCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of children the customer has. |
| ConsumerCreditScore | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person's credit score (for example, 740). |
| ConsumerCreditScoreProviderName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the company that provided the credit score. |
| ConvictionsCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of convictions for the customer. |
| DeathDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe customer’s death date. |
| FirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe customer’s first name. Maximum size is 40 characters. |
| HasOptedOutGeoTracking | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionPreference to not track geolocation on mobile devices. |
| HasOptedOutProcessing | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionPreference to not process personal data, which can include collecting, storing, and sharing personal data. |
| HasOptedOutProfiling | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionPreference to not process data for predicting personal attributes, such as interests, behavior, and location. |
| HasOptedOutSolicit | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionPreference to not solicit products and services. |
| HasOptedOutTracking | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionPreference to not track customer web activity and whether the customer opens email sent through Salesforce. |
| HasPrivacyHold | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the Privacy Hold status. |
| IndividualsAge | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the customer is considered to be a minor. |
| InfluencerRating | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA measure of the person's influence, irrespective of how we do business with them. |
| IsHomeOwner | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the customer owns a home. |
| LastName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The customer’s last name. Maximum size is 80 characters. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| MasterRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf this object was deleted as the result of a merge, this field contains the ID of the record that was kept. If this object was deleted for any other reason, or hasn’t been deleted, the value is null.This is a relationship field.Relationship NameMasterRecordRelationship TypeLookupRefers ToIndividual |
| MilitaryService | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the customer has served in the military. |
| Name | TypestringPropertiesFilter, Group, SortDescriptionConcatenation of FirstName and LastName. Maximum size is 203 characters, including whitespaces. |
| Occupation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe customer’s occupation. Maximum size is 150 characters. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the account associated with this customer.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| Salutation | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe title for addressing the customer, such as Dr. or Mrs. |
| SendIndividualData | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionPreference to export personal data for delivery to the customer. |
| ShouldForget | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionPreference to delete records and personal data related to this customer. |
| Website | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL for the customer’s website. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IndividualChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 47.0)

Change events are available for the object.

[IndividualHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[IndividualShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_individualshare.htm "Represents a list of access levels to a data privacy record along with an explanation of the access level. For example, if you have access to a record because you own it, the IndividualAccessLevel is All and RowCause is Owner. This object is available in API version 42.0 and later.")

Sharing is available for the object.

## Related Topics

- IndividualChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- IndividualHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- IndividualShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_individualshare.htm)
