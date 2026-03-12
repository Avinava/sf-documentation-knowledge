---
title: "EnblProgramSection"
domain: object-reference
topic: enblprogramsection
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.613Z
estimatedTokens: 635
keywords: [EnblProgramSection, Enablement, program, include, items, milestones, exercises, API, version, 60.0, later, Calls, Special, Access, Rules]
---

# EnblProgramSection

> Represents an optional section in an Enablement program. A section
         can include other program items, such as milestones and exercises. This object is
      available in API version 60.0 and later.

# EnblProgramSection

Represents an optional section in an Enablement program. A section can include other program items, such as milestones and exercises. This object is available in API version 60.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

-   For Enablement admins to create, update, and delete Enablement programs, the Design and Deliver Enablement Programs permission is required. This permission is enabled by default as part of the Manage Enablement Essentials permission set, which comes with the Enablement add-on license.
-   For users who take Enablement programs, the Take Enablement Programs permission is required. This permission is enabled by default as part of the Use Enablement Programs permission set, which comes with the Enablement add-on license.
-   For partner users who take Partner Enablement programs, the Take Partner Enablement Programs permission is required. This permission is enabled by default as part of the Use Partner Enablement Programs permission set, which comes with the Enablement add-on license. Partner Enablement also requires a [supported Partner Relationship Management (PRM) add-on license](https://help.salesforce.com/s/articleView?id=slack.prm_support_license_template.htm&type=5&language=en_US "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. The name:must be 40 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan’t include spacescan’t end with an underscorecan’t contain 2 consecutive underscoresIn managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.Available in API version 61.0 and later. |
| EnablementProgramId | TypereferencePropertiesFilter, Group, SortDescriptionThe Enablement program that contains the section. This field is a relationship field.Relationship NameEnablementProgramRelationship TypeLookupRefers ToEnablementProgram |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe title of the section that’s visible to users when they take the program. |
| SequenceNumber | TypeintPropertiesFilter, Group, SortDescriptionA number that specifies the order of the section, relative to other sections, starting at 0. |
