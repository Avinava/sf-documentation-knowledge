---
title: "Backup and Restore Previous Versions of CRM Analytics Assets with
      History API"
domain: bi-dev-guide-rest
topic: backup-and-restore-previous-versions-of-crm-analytics-assets-with-history-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:02.493Z
estimatedTokens: 1485
keywords: [Backup, Restore, Previous, Versions, CRM, Analytics, Assets, History, API, edit, dashboards, lenses, recipes, dataflows, backs]
---

# Backup and Restore Previous Versions of CRM Analytics Assets with
      History API

> When you edit CRM Analytics dashboards, lenses, recipes, and dataflows, CRM Analytics
    backs them up automatically. When you save a new version of an asset, CRM Analytics creates a
    snapshot of it. You can then preview snapshots and revert to previous versions using the REST
    History API.

# Backup and Restore Previous Versions of CRM Analytics Assets with History API

When you edit CRM Analytics dashboards, lenses, recipes, and dataflows, CRM Analytics backs them up automatically. When you save a new version of an asset, CRM Analytics creates a snapshot of it. You can then preview snapshots and revert to previous versions using the REST History API.

Every time you save a new version of a dashboard, lens, recipe, or dataflow, CRM Analytics saves the older version. It also saves dashboard and lens conditional formatting.

CRM Analytics saves 20 versions of an asset, including 10 tagged and 10 untagged versions. When you save more than 20 new versions of an asset, CRM Analytics saves the new version and purges older versions. When the limit is reached and the save is for a tagged version, the oldest tagged version is purged. An untagged version save purges the oldest untagged version. To increase this limit, contact Salesforce and ask your representative to increase the org value **Maximum analytics asset histories to track in the database**, also known as AnalyticsMaxHistories.

You can add tags that describe asset versions to give you and other team members reminders of what's been changed and why. You can use either manual or automatic tagging.

CRM Analytics gives you two ways to manually tag an asset version.

-   The Save dialog displays a Version History box when you save a dashboard or lens. Enter a short description of your changes there. (Dataflows don't have a user interface for adding tags to previous versions.)![The Version History field in the dashboard Save dialog](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_rest%2Fimages%2Fbi_dashboard_save2.png&folder=bi_dev_guide_rest)
-   You can also tag changes with the public REST API. Use the API to tag history records with a description, which you can do after saving the asset. You can edit existing descriptions.

    ```

    ```


CRM Analytics automatically adds tags to history records in one of two ways.

-   When you create and save the initial version of an asset, CRM Analytics adds the tag Initial Create to the history record.
-   When you create or upgrade an app from a template, CRM Analytics tags history records for the app. The tag includes the template action, template name, and template version. This information helps you restore the correct previous version of an asset after you upgrade an app from a new template version.

## Previewing and Reverting to Previous Asset Versions

To get a list of history records for an asset, either use cURL or Postman and execute an API call. Or enter the appropriate command in the Salesforce Command Line Interface (CLI) with the CRM Analytics plugin.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_rest)

#### Warning

A previous version of a dashboard doesn’t work if assets that the version relies on have been removed from CRM Analytics. Those assets can be other dashboards, datasets, lenses, and images.

-   Dashboard history records.
    -   API call:

        ```

        ```

    -   CLI command:

        ```

        ```

-   Lens history records.
    -   API call:

        ```

        ```

    -   CLI command:

        ```

        ```

-   Recipe history records.
    -   API call:

        ```

        ```

-   Dataflow history records.
    -   API call:

        ```

        ```

    -   CLI command:

        ```

        ```


Optionally, you can navigate to the History API endpoint with the URL in historiesUrl in the Asset Response (HATEOAS) and execute it with cURL or Postman.

Or manually execute the following REST calls from cURL or Postman:

-   Get a list of all dashboards:

    ```

    ```

-   Find a dashboard, use its details URL in the response body:

    ```

    ```

-   Get a list of histories, use the historiesUrl in the dashboard details response:

    ```

    ```


## Preview a Previous Version

After listing asset version histories, preview the JSON for a version. During preview, you see the JSON as it looked when it was saved.

To preview the JSON for previous asset versions, use the URL from previewUrl in the response body and execute it with cURL or Postman.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_rest)

#### Note

Dataflows have two preview URLs: previewUrl and privatePreviewUrl. The private preview URL provides the same JSON format as you see if you downloaded the JSON file declaratively using the CRM Analytics dataflow editor. The preview URL provides the public version of the JSON.

## Restore a Previous Version

After you confirm you’re previewing the correct asset version, restore it using either REST API calls or the CLI.

Using REST API calls, in the version you want to revert to, locate the revertUrl.

Then copy the historyId of the version you want to restore. You use it in the request body.

Now, to restore an asset from the previous version, perform a PUT.

```

```

The CLI commands for restoring assets are as follows:

-   Dashboards. sf analytics dashboard history revert -i <dashboardid> -h <historyid>
-   Lenses. sf analytics lens history revert -i <lensid> -h <historyid>
-   Dataflows. sf analytics dataflow history revert -i <dataflowid> -h <historyid>

historyid is the ID for the version of the asset you want to restore.

## Limitations

When you restore the previous version of an asset, the asset doesn’t run as expected. If the asset depends on other assets (for example, datasets) and those assets have been deleted or modified, you can get errors. However, every time you restore a previous version, you create a history record. You can always restore the last working copy.

When you delete an asset, all history is deleted with it, and you can’t undelete it.

Currently, CRM Analytics doesn’t back up previous versions of dataset XMD files.

## Code Examples

```
*PATCH: /services/data/v46.0/wave/dashboards/0FKxx0000004CAeGAM/histories/0Rmxx0000004Cx2CAE*
*REQUEST BODY: {"label" : "new description"}*
```

```
GET: /services/data/v526.0/wave/dashboards/<dashboardId>/histories
```

```
sf analytics dashboard history list
```

```
GET: /services/data/v52.0/wave/dashboards/<lensId>/histories
```

```
sf analytics lens history list
```
