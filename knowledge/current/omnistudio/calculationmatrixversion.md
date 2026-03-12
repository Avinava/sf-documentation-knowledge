---
title: "CalculationMatrixVersion"
domain: omnistudio
topic: calculationmatrixversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.669Z
estimatedTokens: 1014
keywords: [CalculationMatrixVersion, Defines, version, Decision, Matrix., label, Matrix, Version., API, 53.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# CalculationMatrixVersion

> Defines a version of a Decision Matrix. The label for this object is
         Decision Matrix Version. This object is available in API version 53.0 and
      later.

# CalculationMatrixVersion

Defines a version of a Decision Matrix. The label for this object is Decision Matrix Version. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Access to Decision Matrices requires Omnistudio licenses.

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the decision matrix version. This field is available in API version 56.0 and later. |
| CalculationMatrixId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Decision Matrix to which this version belongs.This is a relationship field.Relationship NameCalculationMatrixRelationship TypeLookupRefers ToCalculationMatrix |
| DecisionMatrixDefinitionVerId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe decision matrix definition version associated with this calculation matrix version.This field is a relationship field.Relationship NameDecisionMatrixDefinitionVerRelationship TypeLookupRefers ToDecisionMatrixDefinitionVersion |
| DscnModelNoteExportStatus | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIndicates the export status of a decision matrix version in the Decision Model and Notation (DMN) format.Possible values are:InitiatedInProgressCompleteFailed |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date on which this matrix version is active. |
| GroupKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA key for grouping matrix rows in different versions, such as geographic region or product code. Derived from the associated Decision Matrix (CalculationMatrix object). |
| GroupKeyValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the GroupKey for this version. For example, if the GroupKey is Country, the GroupKeyValue can be United States. |
| IsEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether this version is active.The default value is false. |
| LoadProcessStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of a data upload from a .csv file.Possible values are:CompletedCompletedWithErrorsFailedInProgressPending |
| MatrixType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe matrix type, either Standard or Grouped. A Grouped Decision Matrix groups rows in different Decision Matrix Versions by one or two keys such as geographic region or product code. Derived from the associated Decision Matrix (CalculationMatrix object). |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe matrix version name. |
| Rank | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen the invocation time of a matrix call is between the StartDateTime and EndDateTime of more than one enabled matrix version, the version with the highest Rank is chosen. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe first date on which this matrix version is active. |
| SubGroupKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA subkey for grouping matrix rows in different versions, such as geographic region or product code. For example, if the GroupKey is Country, the SubGroupKey can be State or Province. Derived from the associated Decision Matrix (CalculationMatrix object). |
| SubGroupKeyValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of the SubGroupKey for this version. For example, if the SubGroupKey is State or Province, the SubGroupKeyValue can be California. |
| VersionNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version number. |
