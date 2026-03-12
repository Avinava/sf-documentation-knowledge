---
title: "PersonPublicProfilePrefSet"
domain: edu-cloud-dev-guide
topic: personpublicprofileprefset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.716Z
estimatedTokens: 731
keywords: [PersonPublicProfilePrefSet, user’s, preferences, data, included, their, directory, entry, well, they, show, API, version, 59.0, later]
---

# PersonPublicProfilePrefSet

> Represents the user’s preferences for which data is included in their
         directory entry, as well as if they show up at all. This object is available in API
      version 59.0 and later.

# PersonPublicProfilePrefSet

Represents the user’s preferences for which data is included in their directory entry, as well as if they show up at all. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CanShareEmail | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the person's email address is shared (true) or not (false).The default value is false. |
| CanShareLocation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the person's location is shared (true) or not (false).The default value is false. |
| CanSharePersonEducation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that person education should be shared (true) or not (false).The default value is false. |
| CanSharePersonEmployment | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that person employment information should be shared (true) or not (false).The default value is false. |
| CanSharePhone | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the person's phone numbers are shared (true) or not (false).The default value is false. |
| CanSharePronouns | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the person's preferred pronouns are shared (true) or not (false).The default value is false. |
| CanShareWebsite | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that website should be shared (true) or not (false).The default value is false. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Contact associated with the Person Public Profile Preference Set.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| IsProfilePublic | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the profile is public (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated string/number assigned to the Person Public Profile Preference Set. |
| ProfileVisibleDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the profile was made public. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionSpecifies the usage type of the sharing settings, such as Alumni or Student.Possible values are:AlumniStudent |
