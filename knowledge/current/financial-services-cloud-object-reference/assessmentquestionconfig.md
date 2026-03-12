---
title: "AssessmentQuestionConfig"
domain: financial-services-cloud-object-reference
topic: assessmentquestionconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.752Z
estimatedTokens: 528
keywords: [AssessmentQuestionConfig, assessment, question, record, metadata, configuration, API, version, 56.0, later, SOAP, Calls, REST, Special, Access]
---

# AssessmentQuestionConfig

> Represents the assessment question record metadata
         configuration. This object is available in API version 56.0 and later.

# AssessmentQuestionConfig

Represents the assessment question record metadata configuration. This object is available in API version 56.0 and later.

## Supported SOAP API Calls

describeSObjects(), query(), retrieve()

## Supported REST API Methods

GET, HEAD, Query

## Special Access Rules

To use this tooling API object, you must enable the Discovery Framework feature in your Salesforce org.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionLanguage of the assessment question. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel of the assessment question. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |
