---
title: "Program"
domain: edu-cloud-dev-guide
topic: program
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.749Z
estimatedTokens: 385
keywords: [Program, enrollment, disbursement, benefits, API, version, 57.0, later, Calls]
---

# Program

> Represents information about the enrollment and disbursement of benefits in a
         program. This object is available in API version 57.0 and later.

# Program

Represents information about the enrollment and disbursement of benefits in a program. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Format | TypemultipicklistPropertiesCreate, Filter, Nillable, Restricted picklist, UpdateDescriptionSpecifies the format in which the program is offered.Possible values are:HybridIn personVirtual |
| OmniProcessId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe omniscript that runs the prerequisite questionnaire for program enrollment.This field is a relationship field.Relationship NameOmniProcessRelationship TypeLookupRefers ToOmniProcess |
| ShouldShowOnLearnerPortal | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the program is shown on the learner portal (true) or not (false).The default value is false. |
| SuccessTeamId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe success team associated with the Program.This field is a relationship field.Relationship NameSuccessTeamRelationship TypeLookupRefers ToSuccessTeam |

For more information, see [Program in Nonprofit Cloud](https://developer.salesforce.com/docs/atlas.en-us.260.0.nonprofit_cloud.meta/nonprofit_cloud/sforce_api_objects_program.htm "HTML (New Window)").
