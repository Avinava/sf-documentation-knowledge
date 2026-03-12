---
title: "BatchProcessJobDefView"
domain: omnistudio
topic: batchprocessjobdefview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.583Z
estimatedTokens: 701
keywords: [BatchProcessJobDefView, Represents, details, Batch, Job, definition., definition, file-based, definitions, Salesforce, org., API, version, 51.0, later., Supported, Calls, Fields]
---

# BatchProcessJobDefView

> Represents the details of a Batch Job definition. The definition can also be
      file-based definitions that are available in your Salesforce org. This object is
    available in API version 51.0 and later.

# BatchProcessJobDefView

Represents the details of a Batch Job definition. The definition can also be file-based definitions that are available in your Salesforce org. This object is available in API version 51.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. Simplify queries by using this field instead of making multiple queries. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the definition is active. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label of the Batch Job definition. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the Batch Job definition. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| ProcessDefinition | TypetextareaPropertiesNillableDescriptionThe name of the process group for the batch process job definition. |
| ProcessGroup | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe team or group for which the definition processes records. |
| SourceObjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the object whose records are processed. |
| Type | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of process for which the Batch Management job processes records.Possible values are:FlowLoyaltyProgramProcessThis field is available in API version 55.0 and later. |
| TypeInstance | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the process that's processed by the Batch Job definition. |
