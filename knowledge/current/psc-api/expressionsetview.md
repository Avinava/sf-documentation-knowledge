---
title: "ExpressionSetView"
domain: psc-api
topic: expressionsetview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.677Z
estimatedTokens: 1003
keywords: [ExpressionSetView, virtual, consolidated, view, file-based, expression, read-only, templates, able, modify, clone, API, version, 55.0, later]
---

# ExpressionSetView

> Represents a virtual object that provides a consolidated view of
         file-based expression set. File-based expression sets are read-only templates. To be able
         to modify file-based expression sets, you must clone them first.  This object is
      available in API version 55.0 and later.

# ExpressionSetView

Represents a virtual object that provides a consolidated view of file-based expression set. File-based expression sets are read-only templates. To be able to modify file-based expression sets, you must clone them first. This object is available in API version 55.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description of an expression set. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the expression set. |
| ExpressionSetDetails | TypetextareaPropertiesNillableDescriptionThe details of the expression set in JSON format, which includes information such as name, version, created date, and elements contained in the expression set. |
| HasContextDefinitionRef | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the executable expression set template references an executable context definition (true) or not (false). The default value is False.Available in API version 60.0 and later.The default value is false. |
| IsExecutable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the expression set template is executable (true) or not (false).Available in API version 60.0 and later.The default value is false. |
| IsTemplate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the expression set is a template (true) or not (false). When installed from managed packages, expression sets can’t be viewed or cloned by subscribers because of intellectual property (IP) protection. But when those expression sets are templates, subscribers can open them in a builder, clone them, and customize the clones.The default value is false. |
| LastModifiedBy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the user that last updated the expression set view. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the file-based or database expression set. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| UsageType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of industry or the application within the industry that's using the template.Available in API version 60.0 and later.Possible value is:Bre—Business Rules EngineWhen Business Rules Engine is enabled for a Salesforce instance, the default value is Bre. Other usage types may be available to you depending on your industry solution and permission sets. |
| UsageTypeLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the label of the usage type that's associated with an expression set template |

## Usage

Use expression set templates as reference to build your own expression sets. Expression set templates are read-only files that contain rules that can run end-to-end. Save a template as an expression set to use it as-is, or modify the expression set for your business requirement.
