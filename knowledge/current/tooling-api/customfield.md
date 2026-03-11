---
title: "CustomField"
domain: tooling-api
topic: customfield
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.497Z
keywords: [CustomField, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# CustomField

# CustomField

Represents a custom field on a custom object that stores data unique to your organization. Includes access to the associated CustomField object and related fields in Salesforce Metadata API. Available from API version 28.0 or later.

## Supported SOAP Calls

create(), query(), retrieve(), search(), update(), upsert()

## Supported REST HTTP Methods

Query, GET, POST, PATCH

## Fields

| Field Name | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer’s internal name for the custom field. For example, the internal name for the custom field CF__c is CF. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Metadata | TypeCustomFieldMetadataPropertiesCreate, Nillable, UpdateDescriptionCustomFieldMetadata includes these fields. For more information, see CustomField in the Metadata API Developer Guide.caseSensitivecomplianceGroupdefaultValuedeleteConstraintdeprecated*descriptiondisplayFormatdisplayLocationInDecimalelementType*escapeMarkupexternalDeveloperNameexternalIdformulaformulaTreatBlanksAsinlineHelpTextisAIPredictionFieldisFilteringDisabledisNameFieldisSortingDisabledlabellengthmaskCharmaskTypepicklistpopulateExistingRowsprecisionreadOnlyProxyreferenceTorelationshipLabelrelationshipNamerelationshipOrderreparentableMasterDetairequiredrestrictedAdminFieldscalestartingNumberstripMarkupsummarizedFieldsummaryFilterItemssummaryForeignKeysummaryOperationtrackFeedHistorytrackHistorytypeuniquevisibleLineswriteRequiresMasterRead* Reserved for future use.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the custom field. A custom field can be in an extension namespace different than the object. |
| TableEnumOrId | TypeRestricted picklistPropertiesFilter, Group, SortDescriptionThe enum (for example, Account) or ID of the object this field is on. |