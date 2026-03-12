---
title: "PersonExamination"
domain: edu-cloud-dev-guide
topic: personexamination
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.695Z
estimatedTokens: 1402
keywords: [PersonExamination, examinations, taken, person, API, version, 57.0, later, Calls]
---

# PersonExamination

> Represents the examinations taken by a person. This object is available
      in API version 57.0 and later.

# PersonExamination

Represents the examinations taken by a person. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Account associated with the Person Examination.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the contact related to this record.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate from which the examination is effective from. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate till which the examination is effective. |
| ExaminationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the examination was taken. |
| ExaminationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the examination.This field is a relationship field.Relationship NameExaminationRelationship TypeLookupRefers ToExamination |
| InstitutionName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the institution offering the examination.Possible values are:AbiturApolytirionBaccalauréat (BAC)Cambridge Internation Education Pre-University (CIE Pre-U)Caribbean Advanced Proficiency Exam II (CAPE)Center Shiken or Kyotsu TestsChinese National Entrance Examination (Gao Kao) or Joint Entrance Examination (JEE)College Scholastic Ability Test (CSAT)Concurso Nacional de Acesso ao Ensino Superior (CNA)Emerites Standardized Test (EmSAT)Ethiopian School Leaving Certificate Exams (ESLCE) or Ethiopian Higher Education EntranceEuropean BaccalaureateGCE-Advanced Level Examinations (GCE-A Levels)Higher / Level 6Higher Secondary Certificate (HSC)Higher Secondary Education Board Examination (HSEBE) or School Leaving Certificate (SLC)Higher Secondary School Certificate (HSSC)Indian Certificate of Secondary Education - Class X (ICSE)Indian School Certificate - Class XII (ISC)Irish Leaving CertificateKenya Certificate of Secondary Education (KCSE)Matriculation and Secondary Education Certificate (MATSEC)Matura (Maturita)OtherPrueba de Selección Universitaria (PSU)Sijil Tinggi Persekolahan Malaysia (STPM)Te'udat BagrutTertiary Entrance Rank (TER) or Universities Admission Index (UAI)Thanaweya AmmaWestern African Senior School Certificate Examination (WASSCE) |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is locked (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentPersonExaminationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent Person Examination associated with this examination.This field is a relationship field.Relationship NameParentPersonExaminationRelationship TypeLookupRefers ToPersonExamination |
| Result | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionResult of the examination.Possible values are:FailPass |
| Score | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionScore secured in the examination. |
| ScoreType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionSpecifies the type of examination score.Possible values are:ActualPredicted |
| SubjectName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionSpecifies the academic subject associated with the examination.Possible values are:EnglishMathematicsReadingReading and WritingScienceWritingComposite |
| VerificationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time the examination details were verified. |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the examination details verification.Possible values are:AcceptedRejectedVerifiedWaived |

For more information, see [PersonExamination in Public Sector Solutions](https://developer.salesforce.com/docs/atlas.en-us.260.0.psc_api.meta/psc_api/sforce_api_objects_personexamination.htm "HTML (New Window)").
