---
title: "MLModelFactorComponent"
domain: object-reference
topic: mlmodelfactorcomponent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.945Z
estimatedTokens: 772
keywords: [MLModelFactorComponent, MLModelFactor, represent, range, “Title, CEO”, “Annual, Revenue, >10000000”, API, version, 53.0, later, Calls, Special]
---

# MLModelFactorComponent

> Represents information about the related MLModelFactor. For example, this
         object can represent a field value or a field range such as “Title = CEO” or “Annual
         Revenue >10000000”. This object is available in API version 53.0 and later.

# MLModelFactorComponent

Represents information about the related MLModelFactor. For example, this object can represent a field value or a field range such as “Title = CEO” or “Annual Revenue >10000000”. This object is available in API version 53.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Available with Einstein Prediction Builder and Einstein Recommendation Builder.

## Fields

| Field | Details |
| --- | --- |
| FactorLabelKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMaps the model factor component to a label that can be displayed to the user. |
| FeatureType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionFeatureType and FeatureValue indicate a feature that doesn’t have a corresponding field. For example, to indicate the feature “Percent = 97%”, the FeatureType is Percent and the FeatureValue is 97.Possible values are:BinaryComboboxCurrencyDateDateTimeEmailIDIntegralMultiPicklistPercentPhonePicklistRealTextTextAreaURL |
| FeatureValue | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe feature’s value. See FeatureType. |
| LeftHandDerivedField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the model factor component is an equation, this field represents the name of the field on the left side of the equation. For example, if the model factor component is Title = CEO, this value is Title. |
| ModelFactorId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related MLModelFactor.This field is a relationship field.Relationship NameModelFactorRelationship TypeLookupRefers ToMLModelFactor |
| ModelId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related MLModel.This field is a relationship field.Relationship NameModelRelationship TypeLookupRefers ToMLModel |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe automatically generated ID that uniquely identifies the model. |
| Operator | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIf the model factor component is an equation, this field represents the operator. For example, if the model factor component is Title = CEO, the operator is Equals.Possible values are:ContainsEndsWithEqualsGreaterThanIsNotNullIsNullLessThanNotEqualsStartsWith |
| RightHandDerivedField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the model factor component is an equation, this field represents the name of the field on the right side of the equation. |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionIf the model factor has multiple model factor components, this field indicates the order in which this model factor component appears. |
| Value | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the model factor component specifies a value, this field represents the value. For example, if the model factor component is Title = CEO, this field is CEO. |
