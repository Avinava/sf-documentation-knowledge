---
title: "PersonPublicProfile"
domain: edu-cloud-dev-guide
topic: personpublicprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.708Z
estimatedTokens: 727
keywords: [PersonPublicProfile, user, that’s, shown, their, profile, API, version, 59.0, later, Calls]
---

# PersonPublicProfile

> Represents information about a user that’s shown on their public
         profile. This object is available in API version 59.0 and later.

# PersonPublicProfile

Represents information about a user that’s shown on their public profile. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AboutMe | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description provided by the user for their public profile. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Contact associated with the Person Public ProfileThis field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| Email | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person's email address. |
| FirstPublished | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionWhen this profile was first published. |
| Location | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person's display location. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the user. |
| PersonPublicProfilePrefSetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe preferences set by the user, which determine what information to show on their public profile.This field is a relationship field.Relationship NamePersonPublicProfilePrefSetRelationship TypeLookupRefers ToPersonPublicProfilePrefSet |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person's phone number. |
| PrimaryCredentialName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the most recent credential. |
| PrimaryCredentialType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of primary credential, such as the type of associated academic credential.Possible values are:Associate DegreeBachelor's DegreeBadgeCertificateDoctoral DegreeMaster's DegreeSecondary Diploma |
| PrimaryCredentialYear | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe year of the most recent credential based on the created date. |
| Pronouns | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the preferred gender pronoun for the user.Possible values are:He/HimHe/TheyNot ListedShe/HerShe/TheyThey/Them |
| UsageType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of site that the sharing settings are applied to. Possible values include Alumni and Student.Possible values are:AlumniStudent |
| Website | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA website that's associated with the person. |
