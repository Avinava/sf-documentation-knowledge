---
title: "CRM Analytics Lightning Web Components"
domain: bi-dev-guide-rest
topic: crm-analytics-lightning-web-components
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:04.940Z
estimatedTokens: 5024
keywords: [CRM, Analytics, Lightning, Web, Components, retrieve, data, metadata, assets, execute, queries, schedule, syncs, recipes, dataflows]
---

# CRM Analytics Lightning Web Components

> Use CRM Analytics Lightning Web Components to retrieve data and metadata for CRM
  Analytics assets, execute queries, and schedule data syncs for recipes and dataflows.

# CRM Analytics Lightning Web Components

Use CRM Analytics Lightning Web Components to retrieve data and metadata for CRM Analytics assets, execute queries, and schedule data syncs for recipes and dataflows.

The lightning/analyticsWaveApi module provides wire adapters and JavaScript functions built on top of the CRM Analytics REST API. Use these wire adapters and functions to work with CRM Analytics data and metadata.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=bi_dev_guide_rest)

#### Important

Not all API endpoints have a corresponding wire adapter or function. Assets such as recipes require the recipe editor UI for creation and aren’t supported in the lightning/analyticsWaveApi module.

## Wire Adapters

getActions

Retrieves a collection of Salesforce actions available for the specified Analytics user. For more information on syntax and usage, see the [getActions](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-actions.html) reference in the Lightning Web Components Developer Guide.

getAnalyticsLimits

Retrieves the Analytics limits for CRM Analytics. For more information on syntax and usage, see the [getAnalyticsLimits](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-analytics-limits.html) reference in the Lightning Web Components Developer Guide.

getDataConnector

Retrieves a specific CRM Analytics data connector by ID or developer name. For more information on syntax and usage, see the [getDataConnector](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-data-connector.html) reference in the Lightning Web Components Developer Guide.

getDataConnectors

Retrieves a collection of CRM Analytics data connectors. For more information on syntax and usage, see the [getDataConnectors](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-data-connectors.html) reference in the Lightning Web Components Developer Guide.

getDataConnectorSourceFields

Retrieves a collection of source fields for a source object used by a CRM Analytics data connector. For more information on syntax and usage, see the [getDataConnectorSourceFields](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-data-connectorsource-fields.html) reference in the Lightning Web Components Developer Guide.

getDataConnectorSourceObject

Retrieves a source object used by a CRM Analytics data connector. For more information on syntax and usage, see the [getDataConnectorSourceObject](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-data-connector-source-object.html) reference in the Lightning Web Components Developer Guide.

getDataConnectorSourceObjectDataPreviewWithFields

Retrieves the fields for a data preview for a source object used by a CRM Analytics data connector. For more information on syntax and usage, see the [getDataConnectorSourceObjectDataPreviewWithFields](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-data-connector-source-object-data-previewwithfields.html) reference in the Lightning Web Components Developer Guide.

getDataConnectorStatus

Retrieves the status for a specific CRM Analytics data connector by ID or developer name. For more information on syntax and usage, see the [getDataConnectorStatus](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-data-connector-status.html) reference in the Lightning Web Components Developer Guide.

getDataConnectorTypes

Retrieves the collection of CRM Analytics data connector types. For more information on syntax and usage, see the [getDataConnectorTypes](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-data-connector-types.html) reference in the Lightning Web Components Developer Guide.

getDataflowJob

Retrieves a specific CRM Analytics dataflow job. For more information on syntax and usage, see the [getDataflowJob](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataflow-job.html) reference in the Lightning Web Components Developer Guide.

getDataflowJobs

Retrieves a collection of CRM Analytics dataflow jobs. For more information on syntax and usage, see the [getDataflowJobs](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataflow-jobs.html) reference in the Lightning Web Components Developer Guide.

getDataflowJobNode

Retrieves a specific CRM Analytics dataflow job node for a recipe or dataflow. For more information on syntax and usage, see the [getDataflowJobNode](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataflow-job-node.html) reference in the Lightning Web Components Developer Guide.

getDataflowJobNodes

Retrieves a collection of CRM Analytics dataflow job nodes for a recipe or dataflow. For more information on syntax and usage, see the [getDataflowJobNodes](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataflow-job-nodes.html) reference in the Lightning Web Components Developer Guide.

getDataflows

Retrieves a collection of CRM Analytics dataflows. For more information on syntax and usage, see the [getDataflows](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataflows.html) reference in the Lightning Web Components Developer Guide.

getDataset

Retrieves a specific CRM Analytics dataset by ID or developer name. For more information on syntax and usage, see the [getDataset](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataset.html) reference in the Lightning Web Components Developer Guide.

getDatasets

Retrieves a collection of CRM Analytics datasets. For more information on syntax and usage, see the [getDatasets](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-datasets.html) reference in the Lightning Web Components Developer Guide.

getDatasetVersion

Retrieves a specific CRM Analytics dataset version by ID or developer name. For more information on syntax and usage, see the [getDatasetVersion](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataset-version.html) reference in the Lightning Web Components Developer Guide.

getDatasetVersions

Retrieves a collection of versions for a CRM Analytics dataset. For more information on syntax and usage, see the [getDatasetVersions](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dataset-versions.html) reference in the Lightning Web Components Developer Guide.

getDependencies

Retrieves a collection of dependencies for a CRM Analytics asset. For more information on syntax and usage, see the [getDependencies](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-dependencies.html) reference in the Lightning Web Components Developer Guide.

getRecipe

Retrieves a specific CRM Analytics recipe by ID. For more information on syntax and usage, see the [getRecipe](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-recipe.html) reference in the Lightning Web Components Developer Guide.

getRecipes

Retrieves a collection of CRM Analytics recipes. For more information on syntax and usage, see the [getRecipes](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-recipes.html) reference in the Lightning Web Components Developer Guide.

getReplicatedDataset

Retrieves a specific CRM Analytics replicated dataset by ID, also known as a connected object. For more information on syntax and usage, see the [getReplicatedDataset](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-replicated-dataset.html) reference in the Lightning Web Components Developer Guide.

getReplicatedDatasets

Retrieves a collection of CRM Analytics replicated datasets, also known as connected objects. For more information on syntax and usage, see the [getReplicatedDatasets](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-replicated-datasets.html) reference in the Lightning Web Components Developer Guide.

getReplicatedFields

Retrieves a collection of fields belonging to a CRM Analytics replicated dataset, also known as connected object. For more information on syntax and usage, see the [getReplicatedFields](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-replicated-fields.html) reference in the Lightning Web Components Developer Guide.

getSchedule

Retrieves a schedule for a CRM Analytics recipe, dataflow, or data sync. For more information on syntax and usage, see the [getSchedule](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-schedule.html) reference in the Lightning Web Components Developer Guide.

getSecurityCoverageDatasetVersion

Retrieves the security coverage for a specific CRM Analytics dataset version by ID or developer name. For more information on syntax and usage, see the [getSecurityCoverageDatasetVersion](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-security-coverage-dataset-version.html) reference in the Lightning Web Components Developer Guide.

getStories

Retrieves a collection of Einstein Discovery stories. For more information on syntax and usage, see the [getStories](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-stories.html) reference in the Lightning Web Components Developer Guide.

getWaveFolder

Retrieves a specific CRM Analytics app or folder. For more information on syntax and usage, see the [getWaveFolder](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-wave-folder.html) reference in the Lightning Web Components Developer Guide.

getWaveFolders

Retrieves a collection of CRM Analytics apps or folders. For more information on syntax and usage, see the [getWaveFolders](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-wave-folders.html) reference in the Lightning Web Components Developer Guide.

getWaveTemplate

Retrieves a CRM Analytics template by ID or API name. For more information on syntax and usage, see the [getWaveTemplate](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-wave-template.html) reference in the Lightning Web Components Developer Guide.

getWaveTemplateConfig

Retrieves the configuration for a CRM Analytics template by ID or API name. For more information on syntax and usage, see the [getWaveTemplateConfig](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-wave-template-config.html) reference in the Lightning Web Components Developer Guide.

getWaveTemplateReleaseNotes

Retrieves the release notes for a CRM Analytics template by ID or API name. For more information on syntax and usage, see the [getWaveTemplateReleaseNotes](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-wave-template-release-notes.html) reference in the Lightning Web Components Developer Guide.

getWaveTemplates

Retrieves a collection of CRM Analytics templates. For more information on syntax and usage, see the [getWaveTemplates](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-wave-templates.html) reference in the Lightning Web Components Developer Guide.

getXmd

Retrieves a specific CRM Analytics extended metadata type (Xmd) for a version of a dataset. For more information on syntax and usage, see the [getXmd](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-xmd.html) reference in the Lightning Web Components Developer Guide.

## Functions

createDataConnector

Creates an instance of a CRM Analytics connector to connect to data in your Salesforce orgs, apps, data warehouses, and database services. For more information on syntax and usage, see the [createDataConnector](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-create-data-connector.html) reference in the Lightning Web Components Developer Guide.

createDataflowJob

Creates a CRM Analytics dataflow job, which is the equivalent of clicking **Run Now** for a data prep recipe, a data sync, or a dataflow in the CRM Analytics Data Manager UI. For more information on syntax and usage, see the [createDataflowJob](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-create-dataflow-job.html) reference in the Lightning Web Components Developer Guide.

createDataset

Creates a dataset. For more information on syntax and usage, see the [createDataset](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-create-dataset.html) reference in the Lightning Web Components Developer Guide.

createDatasetVersion

Creates a version for a specific CRM Analytics dataset by ID or developer name. For more information on syntax and usage, see the [createDatasetVersion](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-create-dataset-version.html) reference in the Lightning Web Components Developer Guide.

createReplicatedDataset

Creates a CRM Analytics replicated dataset, also known as a connected object. For more information on syntax and usage, see the [createReplicatedDataset](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-create-replicated-dataset.html) reference in the Lightning Web Components Developer Guide.

deleteDataConnector

Deletes a specific CRM Analytics connector by ID or developer name. For more information on syntax and usage, see the [deleteDataConnector](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-delete-data-connector.html) reference in the Lightning Web Components Developer Guide.

deleteDataset

Deletes a specific CRM Analytics dataset by ID or developer name. For more information on syntax and usage, see the [deleteDataset](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-delete-dataset.html) reference in the Lightning Web Components Developer Guide.

deleteRecipe

Deletes a specific CRM Analytics recipe by ID. For more information on syntax and usage, see the [deleteRecipe](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-delete-recipe.html) reference in the Lightning Web Components Developer Guide.

deleteReplicatedDataset

Deletes a specific CRM Analytics replicated dataset by ID. For more information on syntax and usage, see the [deleteReplicatedDataset](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-delete-replicated-dataset.html) reference in the Lightning Web Components Developer Guide.

deleteWaveFolder

Deletes a specific CRM Analytics app or folder by ID. For more information on syntax and usage, see the [deleteWaveFolder](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-delete-wave-folder.html) reference in the Lightning Web Components Developer Guide.

executeQuery

Executes a CRM Analytics query written in Salesforce Analytics Query Language (SAQL) or standard SQL. For more information on syntax and usage, see the [executeQuery](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-execute-query.html) reference in the Lightning Web Components Developer Guide.

ingestDataConnector

Triggers the CRM Analytics to run a data sync. For more information on syntax and usage, see the [ingestDataConnector](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-ingest-data-connector.html) reference in the Lightning Web Components Developer Guide.

postWaveFolders

Creates a CRM Analytics app or folder by ID. For more information on syntax and usage, see the [postWaveFolders](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-post-wave-folders.html) reference in the Lightning Web Components Developer Guide.

updateDataConnector

Updates a CRM Analytics data connector. For more information on syntax and usage, see the [updateDataConnector](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-data-connector.html) reference in the Lightning Web Components Developer Guide.

updateDataflowJob

Updates a CRM Analytics dataflow job, which is the equivalent of clicking **Stop** for a data prep recipe, a data sync, or a dataflow in the CRM Analytics Data Manager UI. For more information on syntax and usage, see the [updateDataflowJob](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-dataflow-job.html) reference in the Lightning Web Components Developer Guide.

updateDataset

Updates a specific CRM Analytics dataset by ID or developer name. For more information on syntax and usage, see the [updateDataset](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-dataset.html) reference in the Lightning Web Components Developer Guide.

updateDatasetVersion

Updates a specific CRM Analytics dataset version by ID or developer name. For more information on syntax and usage, see the [updateDatasetVersion](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-dataset-version.html) reference in the Lightning Web Components Developer Guide.

updatePartialWaveFolder

Performs a partial update for a CRM Analytics app or folder by ID. For more information on syntax and usage, see the [updatePartialWaveFolder](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-partial-wave-folder.html) reference in the Lightning Web Components Developer Guide.

updateRecipe

Updates a CRM Analytics recipe. For more information on syntax and usage, see the [updateRecipe](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-recipe.html) reference in the Lightning Web Components Developer Guide.

updateReplicatedDataset

Updates a CRM Analytics replicated dataset by ID. For more information on syntax and usage, see the [updateReplicatedDataset](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-replicated-dataset.html) reference in the Lightning Web Components Developer Guide.

updateReplicatedFields

Updates the collection of fields for a CRM Analytics replicated dataset by ID. For more information on syntax and usage, see the [updateReplicatedFields](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-replicated-dataset-fields.html) reference in the Lightning Web Components Developer Guide.

updateSchedule

Updates the schedule for a CRM Analytics data prep recipe, data sync, or dataflow. For more information on syntax and usage, see the [updateSchedule](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-schedule.html) reference in the Lightning Web Components Developer Guide.

updateXmd

Updates the user Xmd for a CRM Analytics dataset. For more information on syntax and usage, see the [updateXmd](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-xmd.html) reference in the Lightning Web Components Developer Guide.

updateWaveFolder

Updates a CRM Analytics app or folder by ID. For more information on syntax and usage, see the [updateWaveFolder](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-update-wave-folder.html) reference in the Lightning Web Components Developer Guide.

validateWaveTemplate

Validates a CRM Analytics template for org readiness. For more information on syntax and usage, see the [valildateWaveTemplate](https://developer.salesforce.com/docs/platform/lwc/guide/reference-analytics-validate-wave-template.xmd.html) reference in the Lightning Web Components Developer Guide.
