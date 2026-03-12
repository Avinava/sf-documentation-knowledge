---
title: "RecommendationStrategy"
domain: tooling-api
topic: recommendationstrategy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.698Z
estimatedTokens: 1211
keywords: [RecommendationStrategy, recommendation, strategy, strategies, applications, similar, data, flows, determine, recommendations, delivered, client, retrieval, branching, filtering]
---

# RecommendationStrategy

> Represents a recommendation strategy.
            Recommendation strategies are applications, similar to data flows, that determine a set
            of recommendations to be delivered to the client through data retrieval, branching,
            filtering, and logic operations. Available in API 45.0 and later.

# RecommendationStrategy

Represents a recommendation strategy. Recommendation strategies are applications, similar to data flows, that determine a set of recommendations to be delivered to the client through data retrieval, branching, filtering, and logic operations. Available in API 45.0 and later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

DELETE, GET, HEAD, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| ContextRecordType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe sObject type of the $Record used by the flow. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescription of the recommendation strategy. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the recommendation strategy in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| Fullname | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata type in Metadata API. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsTemplate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the recommendation strategy is a template (true) or not (false). When installed from managed packages, recommendation strategies can’t be viewed or cloned by subscribers because of intellectual property (IP) protection. But when those recommendation strategies are templates, subscribers can open them in a builder, clone them, and customize the clones. The default value is false. Available in API version 47.0 and later. |
| Label | TypestringPropertiesFilter, Group, SortDescriptionRequired. Label for the recommendation strategy. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the recommendation strategy. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionMaster label for the recommendation strategy. This display value is the internal label that is not translated. Limit: 40 characters. |
| Metadata | Typemns: RecommendationStrategyPropertiesCreate, Nillable, UpdateDescriptionThe recommendation strategy’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. If the recommendation strategy is part of a managed package, this field will be Null. Metadata isn’t returned for recommendation strategies in managed packages, unless the recommendation strategies are templates. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| OnBehalfOfExpression | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFormula expression defining the intended target of the recommendations (for example, the Contact associated with a Case). Mainly used for reaction tracking. |
