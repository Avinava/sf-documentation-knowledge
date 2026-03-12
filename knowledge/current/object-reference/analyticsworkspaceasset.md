---
title: "AnalyticsWorkspaceAsset"
domain: object-reference
topic: analyticsworkspaceasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.368Z
estimatedTokens: 525
keywords: [AnalyticsWorkspaceAsset, Tableau, asset, workspace, API, version, 54.0, later, Calls, Special, Access, Rules]
---

# AnalyticsWorkspaceAsset

> Represents a Tableau Next asset in a workspace. This object is available in API version 54.0 and later.

# AnalyticsWorkspaceAsset

Represents a Tableau Next asset in a workspace. This object is available in API version 54.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

To access this object, you must have Tableau Next enabled in your org and a Tableau Next permission set.

## Fields

| Field | Details |
| --- | --- |
| ActivePromotionRequestId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the active promotion request for the workspace asset.This field is a relationship field.Relationship NameActivePromotionRequestRefers ToDataAssetPromotionRequest |
| AnalyticsWorkspaceId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the Tableau Next workspace the asset is associated with.This field is a relationship field.Relationship NameAnalyticsWorkspaceRelationship TypeMaster-detailRefers ToAnalyticsWorkspace (the master object) |
| AssetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the asset.This field is a polymorphic relationship field.Relationship NameAssetRefers ToAnalyticsDashboard, AnalyticsVisualization |
| AssetType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of asset.Possible values are:AnalyticsDashboard—Analytics DashboardAnalyticsVisualization—Analytics VisualizationMktCalculatedInsightObject—Calculated Insight ObjectMktDataConnection—Data Cloud ConnectionMktDataLakeObject—Data Lake ObjectMktDataModelObject—Data Model ObjectSemanticModel—Semantic Model |
| AssetUsageType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of usage for the asset.Possible values are:CreatedReferenced |
| HistoricalPromotionStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe historical promotion status for the asset.Possible values are:pendingpromotedunpromoted |
| MetadataSourceType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe source type of the asset metadata.Possible values are:PromotedReused |
