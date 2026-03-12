---
title: "ExplainabilityMsgTemplate"
domain: omnistudio
topic: explainabilitymsgtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:50.820Z
estimatedTokens: 702
keywords: [ExplainabilityMsgTemplate, template, decision, explanation, message, expression, step, Parent, File, Suffix, Directory, Location, Version, Declarative, Metadata, element, API, version, 56.0, later]
---

# ExplainabilityMsgTemplate

> Represents the template that contains the decision explanation
         message for a specified element type. This object is available in API version 56.0 and
      later.

# ExplainabilityMsgTemplate

Represents the template that contains the decision explanation message for a specified element type. This object is available in API version 56.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for the ExplainabilityMsgTemplate object.The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API. |
| EmtUsageType | TypePicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA explainability message template’s usage type. This field is available from API version 60.0 and later.Possible values are:Bre–DefaultProductCategoryQualificationProductQualificationRecordAlertNoteWhen Business Rules Engine is enabled for a Salesforce instance, the default value is 'Bre’. Other usage types may be available to you depending on your industry solution and permission sets. |
| ExpressionSetStepType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe step type in an expression set that uses the explainability message template. This is a required field.Possible values are:AggregationBranchBusinessElementCalculationConditionDecisionTableLookupListFilter—This value is available from API version 59.0 and later.ListEnabledGroup—This value is available from API version 59.0 and later.MatrixLookupReferenceProcedureThe default value is Calculation. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the explainability message template for a specified step type is default (true) or not (false).The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language in which the message in the explainability message template is created.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for ExplainabilityMsgTemplate. In the UI, this field id Explainability Message Template. |
| Message | TypetextareaPropertiesCreate, Filter, Sort, UpdateDescriptionThe message associated with the template for a specific expression set step type. This is a required field. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| ResultType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of result for which the message template can be used. The step type for which the result is evaluated can be a condition, conditional group, or branch. This is a required field.Possible values are:FailedNoResult—This value is available from API version 59.0 and later.PassedThe default value is Passed. |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ExplainabilityMsgTemplate
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<evaluationResult>Passed</evaluationResult>
	<expressionSetStepType>Condition</expressionSetStepType>
	<expsSetProcessType>ProductQualification</expsSetProcessType>
	<isDefault>false</isDefault>
	<masterLabel>ML EMT testDM</masterLabel>
	<message>EMT Testing</message>
</ExplainabilityMsgTemplate>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>*</members>
		<name>ExplainabilityMsgTemplate</name>
	</types>
	<version>66.0</version>
</Package>
```
