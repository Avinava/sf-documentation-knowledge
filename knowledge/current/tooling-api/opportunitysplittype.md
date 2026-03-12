---
title: "OpportunitySplitType"
domain: tooling-api
topic: opportunitysplittype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.351Z
estimatedTokens: 962
keywords: [OpportunitySplitType, labels, behavior, split, Tooling, API, version, 37.0, later, SOAP, Calls, REST, HTTP]
---

# OpportunitySplitType

> Represents labels and behavior
            for each split type Available in Tooling API version 37.0 and
        later.

# OpportunitySplitType

Represents labels and behavior for each split type Available in Tooling API version 37.0 and later.

This object is read only, and only available if Teamselling and Opportunity Splits are enabled.

There are 2 default split types: revenue splits, which must total 100%, and overlay splits, which can total any percentage.

## Supported SOAP Calls

describeSObjects(), query(), retrieve()

## Supported REST HTTP Methods

GET

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDescribes the purpose of the split type, providing context to future developers. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique name of the object in the API. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionEnables or disables the split type. |
| IsTotalValidated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIf true, the split must total 100%. If false, the split can total any percentage. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates language of split labels in the user interface. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanagedThis field is available in API version 38.0 and later. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe user-interface label for the split type. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.This field can’t be accessed unless the logged-in user has the Customize Application permission. |
| SplitEntity | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe containing record type, such as an opportunity. Available in API version 30 and later. |
| SplitField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionIndicates which currency field of the opportunity object is split. Available in API version 30 and later. |
| SplitDataStatus | TypepicklistPropertiesFilter, Group, Nillable,Restricted picklist, Sort,UpdateDescriptionIndicates the status of the split type. Available in API version 30 and later. |
