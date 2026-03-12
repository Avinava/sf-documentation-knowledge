---
title: "Get Started with User Interface API"
domain: uiapi
topic: get-started-with-user-interface-api
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:36:20.078Z
estimatedTokens: 817
keywords: [Started, User, API, Build, Salesforce, native, mobile, apps, custom, web, uses, Lightning, Experience, Android, iOS]
---

# Get Started with User Interface API

> Build Salesforce UI for native mobile apps and custom web apps using
      the same API that Salesforce uses to build Lightning Experience and Salesforce for Android,
      iOS, and mobile web. Build user interfaces that let users work with records, list views,
      actions, favorites, and more. Not only do you get data and metadata in a single response, but
      the response matches metadata changes made to the org by Salesforce admins. You don’t have to
      worry about layouts, picklists, field-level security, or sharing—all you have to do is build
      an app that users love.

# Get Started with User Interface API

Build Salesforce UI for native mobile apps and custom web apps using the same API that Salesforce uses to build Lightning Experience and Salesforce for Android, iOS, and mobile web. Build user interfaces that let users work with records, list views, actions, favorites, and more. Not only do you get data and metadata in a single response, but the response matches metadata changes made to the org by Salesforce admins. You don’t have to worry about layouts, picklists, field-level security, or sharing—all you have to do is build an app that users love.

The User Interface API base URL is https://{your\_instance}.salesforce.com/services/data/v{api\_version}/ui-api.

The Record UI resource shows the power of User Interface API. To display a record, your code makes this simple request:

```

```

Behind the scenes, Salesforce does the heavy lifting.

-   Checks field-level security settings, sharing settings, and perms.
-   Makes SOQL queries to get record data.
-   Gets object metadata and theme information.
-   Gets layout information.

You’re one happy developer, because Salesforce transforms the results into an easy-to-consume JSON response with all the metadata and data necessary to display the record.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=uiapi)

#### Note

Most User Interface API resource actions aren’t exposed as static methods in Apex.

In addition to building UI for Salesforce records, you can also use User Interface API to build UI for Salesforce actions, favorites, and list views.

-   **[User Interface API Release Notes](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_release_notes.htm)**
    The API release notes include updates to the request bodies, response bodies, and resources.
-   **[User Interface API Quick Start](atlas.en-us.uiapi.meta/uiapi/ui_api_quick_start_postman.htm)**
    Use the Postman desktop app or web-based UI to easily explore and test the UI API and other Salesforce APIs against your orgs.
-   **[User Interface API Sample Apps](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_sample_apps.htm)**
    We’ve built two sample apps that use User Interface API to create, read, update, and delete records. The apps are open-source and available on GitHub.
-   **[Authentication, Versioning, Limits, ETag, and More](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_intro.htm)**
    Learn the high-level facts about how to use User Interface API. How do you authenticate? How is the API versioned? What are the rate limits? All the information you need, available at a glance.
-   **[Status Codes and Error Responses](atlas.en-us.uiapi.meta/uiapi/ui_api_errors.htm)**
    The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.
-   **[API End-of-Life Policy](atlas.en-us.uiapi.meta/uiapi/api_ui_eol.htm)**
    Salesforce is committed to supporting each API version for a minimum of three years from the date of first release. In order to mature and improve the quality and performance of the API, versions that are more than three years old sometimes are no longer supported.

## Code Examples

```
GET /ui-api/record-ui/001R0000003GeJ1IAK
```

## Related Topics

- User Interface API Release Notes (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_release_notes.htm)
- User Interface API Quick Start (atlas.en-us.uiapi.meta/uiapi/ui_api_quick_start_postman.htm)
- User Interface API Sample Apps (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_sample_apps.htm)
- Authentication, Versioning, Limits, ETag, and More (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_intro.htm)
- Status Codes and Error Responses (atlas.en-us.uiapi.meta/uiapi/ui_api_errors.htm)
- API End-of-Life Policy (atlas.en-us.uiapi.meta/uiapi/api_ui_eol.htm)
