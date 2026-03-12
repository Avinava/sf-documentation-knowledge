---
title: "EntityDefinition"
domain: tooling-api
topic: entitydefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.386Z
estimatedTokens: 6304
keywords: [EntityDefinition, Provides, row-based, access, metadata, standard, custom, objects., Important, Note, Supported, SOAP, Calls, REST, HTTP, Limitations, Fields, RecordTypesSupported, Metadata, RecordTypeInfo]
---

# EntityDefinition

> Provides row-based access to
            metadata about standard and custom objects.

# EntityDefinition

Provides row-based access to metadata about standard and custom objects.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

This object is available in API version 32.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

EntityDefinition fields are exposed in SOAP API version 45.0 and later. You can use Tooling API to query for EntityDefinition fields in guest user mode in API version 44.0 and earlier. In API version 45.0 and later, use SOAP API to get this data in guest user mode. EntityDefinition is still exposed in Tooling API to User Profiles with the ViewSetup permission.

## Supported SOAP Calls

query(), search()

## Supported REST HTTP Methods

GET

## Limitations

[SOQL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm "Some Tooling API objects have SOQL limitations. These limitations apply to any Metadata Catalog query, which applies to all Custom Metadata Types and Metadata Catalog entities, not only the ones explicitly listed.")

[SOSL Limitations](atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm "Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.")

## Fields

| Field | Details |
| --- | --- |
| ApexTriggers | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the Apex triggers associated with this object. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| AssignmentRules | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents assignment rules that allow you to automatically route cases to the appropriate users or queues. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| AutoResponseRules | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the auto-response rules defined for the object. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| BusinessProcesses | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the business processes defined for the object. Business processes display different picklist values for users based on their profile and associated record type. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| ChildRelationships | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the child relationships defined for the object. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| CompactLayouts | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the compact layouts defined for the object. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| CustomFields | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the custom fields defined for the object. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| DefaultCompactLayout | TypeCompactLayoutInfoPropertiesCreate, Nillable, UpdateDescriptionMetadata about the compact layout defined as the default for this object, if any. |
| DefaultCompactLayoutId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the default compact layout, if any. |
| DefaultImplementation | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| DeploymentStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the deployment status of the object. Controls whether a custom object and its associated custom tab, related lists, and reports are visible to non-admin users. This field is available in Tooling API version 37.0 and later. Valid values are:InDevelopmentDeployed |
| Description | TypestringPropertiesFilter, Nillable, SortDescriptionThe description of the object. A meaningful description makes it easier to distinguish between custom objects when they're viewed in a list. This field is available in Tooling API version 37.0 and later. |
| DetailUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionURL to the read-only detail page for this object. Corresponds to the urlDetail field in DescribeSobjectResult. This field is available in Tooling API version 34.0 and later. |
| DeveloperName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe developer’s internal name for the object. This field isn't unique, so if you query by this field, you can get multiple records with the same DeveloperName value. For example, in an org, you could have these three objects with a DeveloperName of Account: a standard Account object, a custom object, and a packaged custom object. If you want to query by a unique identifier, use QualifiedApiName. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. Simplify queries by using this field instead of making multiple queries. |
| EditDefinitionUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThis field is available in Tooling API version 34.0 and later. |
| EditUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL used when editing the custom object definition. Corresponds to the urlEdit field on DescribeSobjectResult. This field is available in Tooling API version 34.0 and later. |
| ExtendedBy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| ExtendsInterfaces | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| ExternalSharingModel | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe external sharing model. Possible values are:NoneReadEditControlledByLeadOrContactControlledByCampaignThis field is available in Tooling API version 38.0 and later. |
| FieldSets | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the field sets defined for the object. Because this field represents a relationship, use only in subqueries. |
| Fields | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the standard and custom fields defined for this object. Because this field represents a relationship, use only in subqueries. |
| FormulaVariables | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the formulas that are built on this object.This field is available in Tooling API version 48.0 and later. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe name of the object. If a field, the name must specify the parent object, for example Account.FirstName.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| HelpSettingPageName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the custom help setting page. This field is available in Tooling API version 34.0 and later. |
| HelpSettingPageUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL pointing to the custom help setting page for custom objects. This field is available in Tooling API version 34.0 and later. |
| ImplementedBy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| ImplementsInterfaces | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| InternalSharingModel | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe internal sharing model. Possible values are:NoneReadEditControlledByLeadOrContactControlledByCampaignThis field is available in Tooling API version 38.0 and later. |
| IsActivityTrackable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, activities, such as tasks and scheduled calendar events associated with the custom object, can be tracked. Can be enabled only for custom objects. This field is available in Tooling API version 37.0 and later. |
| IsApexTriggerable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, Apex triggers can be defined for the object. |
| IsAutoActivityCaptureEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the object is enabled for Einstein Activity Capture. This field is available in Tooling API version 41.0 and later. |
| IsCompactLayoutable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the object supports compact layouts. That is, compact layouts can be defined, a system compact layout can be synthesized, or both. |
| IsCreatable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, records based on the object (true) can be created.This field is unavailable starting with version 35.0. Use IsCreatable on UserEntityAccess instead. |
| IsCustomSetting | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the object is a custom setting. This field is available in Tooling API version 35.0 and later. |
| IsCustomizable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, custom fields can be defined for the object. |
| IsDeletable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the object can be deleted.This field is unavailable starting with version 35.0. Use IsDeletable on UserEntityAccess instead. |
| IsDeprecatedAndHidden | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, this object is unavailable for the current version. This field is available in Tooling API version 35.0 and later. |
| IsEverCreatable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the object can be created using an API, assuming the current user has the appropriate permissions. If false, the application server manages the object and no user can create it. This field is available in Tooling API version 35.0 and later. |
| IsEverDeletable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the object can be created using an API, assuming the current user has the appropriate permissions. If false, the application server manages the object and no user can delete it. This field is available in Tooling API version 35.0 and later. |
| IsEverUpdatable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the object can be created using an API, assuming the current user has the appropriate permissions. If false, the application server manages the object and no user can modify it. This field is available in Tooling API version 35.0 and later. |
| IsFeedEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the Chatter feed is enabled for this object. This field is available in Tooling API version 34.0 and later. |
| IsFieldHistoryTracked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, your org can track changes to fields on the custom object records. History data is available for reporting, so users can easily create audit trail reports. Can be enabled only for custom objects. This field is available in Tooling API version 37.0 and later. |
| IsFlsEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, you can set field-level security on applicable fields. This field is available in Tooling API version 35.0 and later. |
| IsIdEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, you can include Id in the SELECT clause of a query on this object. This field is available in Tooling API version 35.0 and later.For example, assume that there's an object backed by an OData data source with the High Data Volume option selected. That object’s IsIdEnabled field is false. |
| IsInterface | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionReserved for future use. |
| IsLayoutable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, layouts can be defined for the object. This field is available in Tooling API version 35.0 and later. |
| IsMruEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, Most Recently Used (MRU) list functionality is enabled for this object. This field is available in Tooling API version 37.0 and later. |
| IsQueryable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the object can be queried. |
| IsReplicateable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the object can be replicated. This field is available in Tooling API version 35.0 and later. |
| IsReportingEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the data in the custom object's records is available for reporting. Can be enabled only on custom objects. This field is available in Tooling API version 37.0 and later. |
| IsRetrieveable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the object can be retrieved. This field is available in Tooling API version 35.0 and later. |
| IsSearchable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, records of this object are indexed for search. This field is available in Tooling API version 35.0 and later. |
| IsSearchLayoutable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, you can customize search layouts for this object. This field is available in Tooling API version 35.0 and later. |
| IsTriggerable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, you can use triggers with this object. This field is available in Tooling API version 35.0 and later. |
| IsWorkflowEnabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, workflow rules can be defined for the object. |
| KeyPrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe first three digits of the object’s ID, which identify the object type, such as Account or Opportunity. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label for this object, used in the compact layout and in the user's language locale. |
| Layouts | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the layouts defined for this object. Use only in subqueries. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| Limits | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionThe limits defined for this object. Corresponds to the Limits page for each standard object in Setup, or the Limits related list for each custom object. Use only in subqueries. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| LookupFilters | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the lookup filters defined for this object. Use only in subqueries. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label for this object, which displays in Setup. The master label is in the default language locale for the organization. If there's no default language locale, the label is in en_US. |
| Metadata | Typemns: CustomObjectPropertiesCreate, Nillable, UpdateDescriptionMetadata about the standard or custom object. Details are available in the CustomObject entry in the metadata namespace in the Tooling API WSDL.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of these values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There’s an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that aren't Developer Edition organizations, NamespacePrefix is set only for objects that are part of an installed managed package. There’s no namespace prefix for all other objects. |
| NewUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL used when editing a new standard or custom record. Corresponds to the urlNew field on DescribeSobjectResult. This field is available in Tooling API version 34.0 and later. |
| OwnerChangeOptions | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionUse only in subqueries. This field is available in Tooling API version 35.0 and later. Because this field represents a relationship, use only in subqueries. |
| Particles | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionThe particles defined for this object. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| PluralLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe plural version of the object’s Label. |
| Publisher | TypePublisherPropertiesCreate, Nillable, UpdateDescriptionThe publisher of this object, for example Salesforce, a user, or a package name. This field is available in Tooling API version 34.0 and later. |
| PublisherId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the publisher associated with this object. This field is available in Tooling API version 34.0 and later. |
| QualifiedApiName | TypestringPropertiesFilter, Group, SortDescriptionA unique external ID for the object of the form NamespacePrefix__DeveloperName for standard objects and NamespacePrefix__DeveloperName__c for custom objects. When performing SOQL queries with Custom Metadata Type relationship fields, use this field to obtain fully qualified namespaces. |
| QuickActionDefinitions | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the quick actions defined for this object. Use only in subqueries. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| RecordTypes | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the record types defined for this object. Use only in subqueries. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| RecordTypesSupported | TypeRecordTypesSupportedPropertiesNillableDescriptionRepresents the record types defined for this object. Use only in subqueries. This field is available in Tooling API version 34.0 and later. |
| RelatedListDefinitions | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents related lists defined for this object. Because this field represents a relationship, use only in subqueries. Available in API version 55.0 and later. |
| RelationshipDomains | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionMetadata about the relationships with other objects that this object has. Use only in subqueries. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| RunningUserEntityAccess | TypeUserEntityAccessPropertiesCreate, Nillable, UpdateDescriptionRepresents the running user’s access to this object. This field is available in Tooling API version 34.0 and later. |
| RunningUserEntityAccessId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the UserEntityAccess record associated with this object. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| SearchLayouts | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the search layouts associated with this object. Use only in subqueries. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| StandardActions | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the standard actions defined for this object. Use only in subqueries. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| ValidationRules | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the validation rules defined for this object. Use only in subqueries. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| WebLinks | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the Weblinks associated with this object. Use only in subqueries. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| WorkflowAlerts | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the workflow alerts associated with this object. Use only in subqueries. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| WorkflowFieldUpdates | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the workflow field updates for this object. Use only in subqueries. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| WorkflowOutboundMessages | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the workflow outbound messages associated with this object. Use only in subqueries. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |
| WorkflowTasks | TypeQueryResultPropertiesFilter, Group, Nillable, SortDescriptionRepresents the workflow tasks associated with this object. Use only in subqueries. This field is available in Tooling API version 34.0 and later. Because this field represents a relationship, use only in subqueries. |

## RecordTypesSupported Metadata

RecordTypesSupported is in the tns namespace. Represents the record types associated with this object.

| Field | Details |
| --- | --- |
| recordTypeInfos | TypeRecordTypeInfoDescriptionRepresents the RecordTypeInfo records for the object. Use only in subqueries. This field is available in Tooling API version 35.0 and later. |

## RecordTypeInfo Metadata

RecordTypeInfo is in the tns namespace. Represents a record type associated with the object.

| Field | Details |
| --- | --- |
| available | TypebooleanDescriptionIf true, this record type is available for use. This field is available in Tooling API version 35.0 and later. |
| defaultRecordTypeMapping | TypebooleanDescriptionThis field is available in Tooling API version 35.0 and later. |
| developerName | TypestringDescriptionThe developer name of the record type. This field is available in API version 43.0 and later. |
| master | TypebooleanDescriptionThis field is available in Tooling API version 35.0 and later. |
| name | TypestringDescriptionName of the record type. This field is available in Tooling API version 35.0 and later. |
| recordTypeId | TypeIdDescriptionID of the record type. This field is available in Tooling API version 35.0 and later. |

## Related Topics

- SOQL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_soql_limits.htm)
- SOSL Limitations (atlas.en-us.api_tooling.meta/api_tooling/reference_objects_sosl_limits.htm)
- CompactLayoutInfo (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_compactlayoutinfo.htm)
- Publisher (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_publisher.htm)
- UserEntityAccess (atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_userentityaccess.htm)
