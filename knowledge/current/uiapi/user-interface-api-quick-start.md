---
title: "User Interface API Quick Start"
domain: uiapi
topic: user-interface-api-quick-start
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.146Z
estimatedTokens: 857
keywords: [User, API, Quick, Start, Postman, desktop, app, web-based, easily, explore, test, Salesforce, APIs, against, orgs]
---

# User Interface API Quick Start

> Use the Postman desktop app or web-based UI to easily explore and test the UI API and
        other Salesforce APIs against your orgs.

# User Interface API Quick Start

Use the Postman desktop app or web-based UI to easily explore and test the UI API and other Salesforce APIs against your orgs.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=uiapi)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

If you don’t already have an org, you can sign up for a [Salesforce Developer Edition](https://developer.salesforce.com/signup), also known as a *DE org*.

This quick start makes a request to the List UI resource, [/ui-api/list-info/${objectApiName}](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lists_object_get.htm "Get list views associated with an object."). This resource returns a collection of list info summaries for an object.

Before you connect Postman to Salesforce, [fork and configure the collection](https://github.com/forcedotcom/postman-salesforce-apis/blob/master/install-with-app.md).

These steps use the Postman desktop app to send a request. Alternatively, you can [connect the Postman web app to Salesforce using the Trailhead quick start](https://trailhead.salesforce.com/content/learn/projects/quick-start-connect-postman-to-salesforce), which requires a CORS configuration in Salesforce.

1.  Open the Postman desktop app.
2.  Expand the collection, and select **UI** | **List Views** | **Get List Views for an Object**.
3.  Update the {{\_endpoint}} and {{version}} values if needed.
4.  Go to the Authorization tab to choose your Auth Type and update required information.
5.  Click **Send**.

The query returns a 200 OK status. If you receive an error, check your configuration and try again.

The [List Info Summary Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_info_summary_collection.htm "List info summary collection.") response body includes an array of list info summaries.

```

```

You just sent a UI API request using Postman! You can do more with UI API using Postman, such as sending a cURL command to [upload a file](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm "Upload documents and images or update the file with a new version.") to your Salesforce org.

To send a cURL command, import the request using raw text.

1.  In Postman, click the **Import** tab on the top left side.
2.  Select the **Raw text** tab.
3.  Paste your cURL command and click **Continue**.
4.  Verify your request name and format, then click **Import**.
5.  Send your request.

Consider the following guidelines.

-   If you’re sending any JSON data as part of your cURL command, the import adds the JSON string as a key on the **Body** | **form-data** tab by default. Move the JSON string from the **Body** | **form-data** tab to the **Body** | **raw** tab, and delete it from the **Body** | **form-data** tab.
-   If you’re sending a file using the \-F option, upload your file under the **Body** | **form-data** tab. For example, you can [upload files](atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm "Upload documents and images or update the file with a new version.") by adding the fileData key and selecting a local file.

![Send a cURL command using Postman](/docs/resources/img/en-us/260.0?doc_id=api_ui%2Fimages%2Fpostman_curl_import.png&folder=uiapi)

## Code Examples

```
{
    "count": 6,
    "currentPageToken": "0",
    "currentPageUrl": "/services/data/v62.0/ui-api/list-info/Account?pageSize=20&pageToken=0",
    "lists": [
        {
            "apiName": "AllAccounts",
            "id": "00B58000002ssinEAA",
            "label": "All Accounts",
            "url": "/services/data/v62.0/ui-api/list-info/Account/AllAccounts"
        },
        {
            "apiName": "MyAccounts",
            "id": "00B58000002ssivEAA",
            "label": "My Accounts",
            "url": "/services/data/v62.0/ui-api/list-info/Account/MyAccounts"
        },
        {
            "apiName": "NewLastWeek",
            "id": "00B58000002ssiHEAQ",
            "label": "New Last Week",
            "url": "/services/data/v62.0/ui-api/list-info/Account/NewLastWeek"
        },
        {
            "apiName": "NewThisWeek",
            "id": "00B58000002ssi6EAA",
            "label": "New This Week",
            "url": "/services/data/v62.0/ui-api/list-info/Account/NewThisWeek"
        },
        {
            "apiName": "PlatinumandGoldSLACustomers",
            "id": "00B58000002ssiXEAQ",
            "label": "Platinum and Gold SLA Customers",
            "url": "/services/data/v62.0/ui-api/list-info/Account/PlatinumandGoldSLACustomers"
        },
        {
            "apiName": "RecentlyViewedAccounts",
            "id": "00B58000002ssimEAA",
            "label": "Recently Viewed Accounts",
            "url": "/services/data/v62.0/ui-api/list-info/Account/RecentlyViewedAccounts"
        }
    ],
    "nextPageToken": null,
    "nextPageUrl": null,
    "objectApiName": "Account",
    "pageSize": 20,
    "previousPageToken": null,
    "previousPageUrl": null,
    "queryString": null,
    "recentListsOnly": false
}
```

## Related Topics

- /ui-api/list-info/${objectApiName} (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_lists_object_get.htm)
- List Info Summary Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_list_info_summary_collection.htm)
- upload a file (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm)
- upload
                        files (atlas.en-us.uiapi.meta/uiapi/ui_api_features_records_content_document.htm)
