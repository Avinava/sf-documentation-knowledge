---
title: "FlowTestResult"
domain: object-reference
topic: flowtestresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.507Z
estimatedTokens: 658
keywords: [FlowTestResult, results, flow, test, associated, version, API, 55.0, later, Calls, Special, Access, Rules, Objects]
---

# FlowTestResult

> Represents the results for a flow test associated with a flow version.
      This object is available in API version 55.0 and later.

# FlowTestResult

Represents the results for a flow test associated with a flow version. This object is available in API version 55.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

To view test run details, you must have the View All Data user permission. You can view flow tests and test results without the View All Data permission.

## Fields

| Field | Details |
| --- | --- |
| FlowDefinitionViewId | TypestringPropertiesFilter, Nillable, SortDescriptionThe ID of the flow definition associated with the flow test result.This is a relationship field.Relationship NameFlowDefinitionViewRelationship TypeLookupRefers ToFlowDefinitionView |
| FlowTestViewId | TypestringPropertiesFilter, Nillable, SortDescriptionThe ID of the flow test associated with the flow test result.This is a relationship field.Relationship NameFlowTestViewRelationship TypeLookupRefers ToFlowTestView |
| FlowVersionNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe version number for the flow. |
| FlowVersionViewId | TypestringPropertiesFilter, Nillable, SortDescriptionThe ID of the flow version associated with the flow test result.This is a relationship field.Relationship NameFlowVersionViewRelationship TypeLookupRefers ToFlowVersionView |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the flow test result. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns this test result.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Result | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the flow test result.Possible values are:ErrorFailPass |
| TestEndDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the flow test ended. |
| TestStartDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the flow test started. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FlowTestResultShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FlowTestResultShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
