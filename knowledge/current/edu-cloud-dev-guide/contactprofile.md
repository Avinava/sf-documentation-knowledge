---
title: "ContactProfile"
domain: edu-cloud-dev-guide
topic: contactprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.366Z
estimatedTokens: 619
keywords: [ContactProfile, individual, their, ethnicity, citizenship, birth, place, race, Fundraising, API, version, 59.0, later, Calls, 57.0]
---

# ContactProfile

> Represents information about an individual, such as their ethnicity,
         citizenship, birth place, race, and so on. This object is available in API version
      57.0 and later.

# ContactProfile

Represents information about an individual, such as their ethnicity, citizenship, birth place, race, and so on. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdvancementGraduationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of the person's first graduation from your institution. |
| AdvancementType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe classification that matches the role or relationship of the person with the institution.Possible values are:AlumniFaculty/StaffOther IndividualParentPublic Institution Foundation Board MemberStudentTrustee/Board of Directors |
| BirthCountryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual's country of birth.This field is a relationship field.Relationship NameBirthCountryRelationship TypeLookupRefers ToGeoCountry |
| BirthPlace | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe individual's place of birth. |
| ContactId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contact associated with the contact profile record.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| Ethnicity | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the ethnicity of the individual.Possible values are:Hispanic or LatinoNot Hispanic or LatinoNot Selected |
| GenerationalCohort | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe person's age group, or generational cohort, based on their birth date.Possible values are:Baby Boomers (1946-1964)Generation Alpha (2013-2025)Generation X (1965-1980)Generation Z (1997-2012)Millennials (1981-1996)Silent Generation (1928-1945) |
| GraduationAchievement | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the person's highest achievement on graduation.Possible values are:Associate DegreeCertificate or AwardMultiple DegreesNon-GraduateOtherPostgraduate DegreeSecondary DiplomaUndergraduate Degree |
| GraduationCohort | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe group of graduates the person belongs to based on their graduation date.Possible values are:0-5 Years Since Graduation11-20 Years Since Graduation21-30 Years Since Graduation31-40 Years Since Graduation41-50 Years Since Graduation50+ Years Since Graduation6-10 Years Since Graduation |
| HasFerpaParentalDisclosure | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates permission to make FERPA Parental Disclosure (true) or not (false).The default value is false. |
| HasFerpaThrdPtyDisclosure | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates permission to make FERPA Third-Party Disclosure (true) or not (false).The default value is false. |
| HighestEducationLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the highest educational qualification of the individualPossible values are:GraduateHigh SchoolMastersOtherPhD |
| IsFirstGenerationStudent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the individual is the first generation to enroll in education beyond high school.The default value is false. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Location | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the contact currently resides. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| MilitaryBranch | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the military branch if the individual has ever enlisted in the military.Possible values are:Air ForceArmyCoast GuardMarine CorpsNavyOtherSpace Force |
| MilitaryService | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the current status of military service.Possible values are:Active DutyActive ReserveFull timeOtherPart timeRetiredUnknownVeteran |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for this record. |
| PrimaryCitizenshipId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary citizenship held by the individual.This field is a relationship field.Relationship NamePrimaryCitizenshipRelationship TypeLookupRefers ToGeoCountry |
| PrimaryCitizenshipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of primary citizenship held by the individual.Possible values are:AsylumNationalOtherRefugee |
| Race | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the race of the individual.Possible values are:Alaska NativeAmerican IndianAsianBlack or African AmericanNative Hawaiian or Other Pacific IslanderWhite |
| SecondaryCitizenshipId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe secondary citizenship of the individual if they hold dual citizenship.This field is a relationship field.Relationship NameSecondaryCitizenshipRelationship TypeLookupRefers ToGeoCountry |
| SecondaryCitizenshipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of secondary citizenship held by the individual.Possible values are:AsylumNationalOtherRefugee |
| Website | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA website that’s associated with the contact. |
