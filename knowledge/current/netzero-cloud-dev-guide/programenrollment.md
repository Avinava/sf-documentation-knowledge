---
title: "ProgramEnrollment"
domain: netzero-cloud-dev-guide
topic: programenrollment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.271Z
estimatedTokens: 440
keywords: [ProgramEnrollment, enrollment, benefits, program, API, version, 57.0, later, Calls]
---

# ProgramEnrollment

> Represents details of enrollment for benefits in a program. This
      object is available in API version 57.0 and later.

# ProgramEnrollment

Represents details of enrollment for benefits in a program. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Scope3EmssnSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe scope 3 emissions source associated with the environment, social, and governance program.This field is a relationship field.Relationship NameScope3EmssnSrcRelationship TypeLookupRefers ToScope3EmssnSrc |
| StnryAssetEnvrSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe stationary asset associated with the environment, social, and governance program.This field is a relationship field.Relationship NameStnryAssetEnvrSrcRelationship TypeLookupRefers ToStnryAssetEnvrSrc |
| SupplierId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe supplier associated with the environment, social, and governance program.This field is a relationship field.Relationship NameSupplierRelationship TypeLookupRefers ToSupplier |
| VehicleAssetEmssnSrcId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe vehicle asset associated with the environment, social, and governance program.This field is a relationship field.Relationship NameVehicleAssetEmssnSrcRelationship TypeLookupRefers ToVehicleAssetEmssnSrc |

For more information, see [ProgramEnrollment in Nonprofit Cloud](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_programenrollment.htm).
