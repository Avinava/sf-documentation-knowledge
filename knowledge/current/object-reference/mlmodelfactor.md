---
title: "MLModelFactor"
domain: object-reference
topic: mlmodelfactor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.937Z
estimatedTokens: 527
keywords: [MLModelFactor, positive, negative, effect, model’s, score, API, version, 53.0, later, Calls, Special, Access, Rules]
---

# MLModelFactor

> Represents a field value that has a positive or negative effect on the
         model’s score. This object is available in API version 53.0 and later.

# MLModelFactor

Represents a field value that has a positive or negative effect on the model’s score. This object is available in API version 53.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Available with Einstein Prediction Builder and Einstein Recommendation Builder.

## Fields

| Field | Details |
| --- | --- |
| Correlation | TypedoublePropertiesFilter, Nillable, SortDescriptionShows the strength of association between the variable and the outcome. The higher the correlation, the greater the association. |
| FactorType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of factor.Possible values are:ModelFactlet—The field value strongly influences the outcome because the model determined that this field is always important. For example, the model can decide that the field Industry is always important to the outcome, regardless of its value.ModelFactor—The field value is important to the outcome because the field’s value is significant. For example, the model can decide that the Annual Revenue field value is important to the outcome because the value is above $1,000,000 or below $50,000. |
| Importance | TypedoublePropertiesFilter, Nillable, SortDescriptionShows how much the variable influences the outcome. The higher the value, the greater the impact. |
| ModelId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related model.This field is a relationship field.Relationship NameModelRelationship TypeLookupRefers ToMLModel |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe automatically generated ID that uniquely identifies the model. |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of model factor.Possible values are:AndBasicOr |
| Weight | TypedoublePropertiesFilter, Nillable, SortDescriptionIndicates how significant the field value is to the outcome or score. Model factlets tend to have higher weights than model factors. |
