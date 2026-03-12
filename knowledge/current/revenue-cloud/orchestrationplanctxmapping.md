---
title: "OrchestrationPlanCtxMapping"
domain: revenue-cloud
topic: orchestrationplanctxmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:11.869Z
estimatedTokens: 959
keywords: [OrchestrationPlanCtxMapping, Represents, orchestration, plan, context, mapping, entry, org., used, connect, business, data, logic, within, Dynamic, Revenue, Orchestrator, DRO, type., API]
---

# OrchestrationPlanCtxMapping

> Represents an orchestration plan context mapping entry in the org.
         This entry is used to connect the business data in an object to the orchestration logic
         within Dynamic Revenue Orchestrator (DRO) by using the orchestration type. This object
      is available in API version 66.0.0 and later.

# OrchestrationPlanCtxMapping

Represents an orchestration plan context mapping entry in the org. This entry is used to connect the business data in an object to the orchestration logic within Dynamic Revenue Orchestrator (DRO) by using the orchestration type. This object is available in API version 66.0.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| ContextDefinition | TypereferencePropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Name of the context definition to be used for the object. |
| ContextItemNode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. Name of the node that represents an item in the context definition. |
| ContextMapping | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Name of the context definition mapping to apply. This mapping must be related to the specified context definition. |
| ContextRootNode | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Name of the node that represents the root in the context definition. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the OrchestrationPlanCtxMapping tooling API object.Valid values are: |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the orchestration plan context mapping. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| ObjectName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionAPI name of the object for orchestration. |
| OrchestrationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionName of the type of the orchestration plan.Valid value is Generic. |
