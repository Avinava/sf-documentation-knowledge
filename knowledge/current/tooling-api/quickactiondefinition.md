---
title: "QuickActionDefinition"
domain: tooling-api
topic: quickactiondefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.670Z
estimatedTokens: 1682
keywords: [QuickActionDefinition, definition, quick, action, SOAP, Calls, REST, HTTP, Usage]
---

# QuickActionDefinition

> Represents the definition of a quick action.

# QuickActionDefinition

Represents the definition of a quick action.

This object is available in API version 32.0 and later.

## Supported SOAP Calls

create(), delete(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| ActionSubtype | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe subtype of the action. Valid values are:ActionScreenActionThis field is available in API version 50.0 and later.This field is available only for Lightning web component quick actions. |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe description of the action. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the action in the API. This field corresponds to the Name field in the user interface.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the object associated with the quick action.Relationship NameEntityDefinitionRelationship TypeLookupRefers ToEntityDefinition |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Height | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe height of the action, in pixels. This field is set only when the quick action has a custom icon. |
| IconId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the action icon. This field is set only when the quick action has a custom icon.Relationship NameIconRelationship TypeLookupRefers ToStaticResource |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe action label that corresponds to the Label field in the user interface. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the action. Valid values are:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanagedThis field is available in API version 38.0 and later. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe action label. |
| Metadata | TypeQuickActionPropertiesCreate, Nillable, UpdateDescriptionThe metadata for the quick action.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the action. |
| OptionsCreateFeedItem | TypebooleanPropertiesFilter,DescriptionIndicates whether successful completion of the action creates a feed item (true) or not (false). Applies only to Create Record, Update Record, and Log a Call quick action types. Available in API version 36.0 and later. |
| SobjectType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe associated object’s API name. For example, FeedItem. |
| StandardLabel | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe standard label for the action. Valid values are:AddRecordAddMemberChangeDueDateChangePriorityChangeStatusCreateNewCreateNewRecordType (For example, a label with something like “Create New Idea”)DeferEditDescriptionEnrollInProgram (Available in API versions 46.0 and later only if the org has Health Cloud enabled)EscalateEscalateToRecordForward (Available in API version 42.0 and later)LogACallLogANoteModifyAppointment (Available in API version 47.0 and later)New (A new record)NewChild (A new child record)NewChildRecordTypeNewRecordType (For example, a label with something like “New Idea”)OfferFeedbackPatientDetails (Available in API version 57.0 and later if the org has Health Cloud enabled)PerformCount (Available in API version 63.0 and later.)Quick (A quick record)QuickRecordTypeRelocateAsset (Available in API version 63.0 and later)ReplaceAsset (Available in API version 63.0 and later)Reply (Available in API version 42.0 and later)ReplyAll (Available in API version 42.0 and later)RequestFeedbackSendEmail (This value is available in API version 31.0 and later.)Update |
| SuccessMessage | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe message that displays to the user upon successful completion of the action. Available in API version 36.0 and later. |
| TargetField | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe API name of the parent object for the record created by this quick action. For example, CollaborationGroup. |
| TargetRecordTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the target record type.Relationship NameTargetRecordTypeRelationship TypeLookupRefers ToRecordType |
| TargetSobjectType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe API name of the type of object record this action creates. For example, OpportunityLineItem. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of action. Valid values are:CanvasCreateFlow (This value is available as a Beta in API version 41.0 and later.)LightningComponent (This value is available in API version 38.0 and later.)LogACallPostSendEmailSocialPostUpdateVisualforcePage |
| Width | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe width of the action, in pixels. This field is set only when the quick action has a custom icon. |

## Usage

A QuickActionDefinition represents information about a quick action. The following example creates a global quick action that lets users quickly create a task.

```

```

## Code Examples

```
QuickActionDefinition qad = new QuickActionDefinition();
qad.setDeveloperName("MyQuickCreateTaskAction");
qad.setSobjectType("Global");
qad.setTargetSobjectType("Task");
qad.setMasterLabel("Quick create a task");
qad.setType(QuickActionType.Create);
qad.setDescription("Quickly creates a Task");

sforce.create(new SObject[]{qad});
```
