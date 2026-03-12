---
title: "EnblProgramTaskSubCategory"
domain: object-reference
topic: enblprogramtasksubcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.644Z
estimatedTokens: 1027
keywords: [EnblProgramTaskSubCategory, custom, exercise, Enablement, admin, adds, program, Builder, requires, corresponding, EnblProgramTaskDefinition, record, LearningItem, LearningItemType, records]
---

# EnblProgramTaskSubCategory

> Represents a custom exercise type that an Enablement admin adds to an
         Enablement program in Program Builder. A custom exercise type also requires a corresponding
         EnblProgramTaskDefinition record for Program Builder and corresponding LearningItem and
         LearningItemType records for when users take the exercise in the Guidance Center. This
      object is available in API version 62.0 and later.

# EnblProgramTaskSubCategory

Represents a custom exercise type that an Enablement admin adds to an Enablement program in Program Builder. A custom exercise type also requires a corresponding EnblProgramTaskDefinition record for Program Builder and corresponding LearningItem and LearningItemType records for when users take the exercise in the Guidance Center. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

-   For Enablement admins to create, update, and delete Enablement programs, the Design and Deliver Enablement Programs permission is required. This permission is enabled by default as part of the Manage Enablement Essentials permission set, which comes with the Enablement add-on license.
-   For users who take Enablement programs, the Take Enablement Programs permission is required. This permission is enabled by default as part of the Use Enablement Programs permission set, which comes with the Enablement add-on license.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Custom exercises aren’t compatible with Partner Enablement programs.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. The name:must be 40 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan’t include spacescan’t end with an underscorecan’t contain 2 consecutive underscoresIn managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| Icon | TypetextareaPropertiesCreate, UpdateDescriptionThe icon to use for the custom exercise type in Program Builder.Use the format iconType:iconName, where the values correspond to icon categories and names from the Salesforce Lightning Design System.iconType is the type of icon, such as standard or doctype.iconName is the icon name, such as flow or slide.For example, to use the Standard type Flow icon, this value is standard:flow. For details, see Implement Custom Exercise Types for Enablement Programs in the Sales Programs and Partner Tracks with Enablement Developer Guide. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionReserved for future use. Don’t edit this field. |
| LearningItemTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the learning item type record that represents this custom exercise type in the Guidance Center when users take a program.This field is a relationship field.Relationship NameLearningItemTypeRefers ToLearningItemType |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for this EnblProgramTaskSubCategory value. This display value is the internal label that doesn't get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
