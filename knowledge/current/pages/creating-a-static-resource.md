---
title: "Creating a Static Resource"
domain: pages
topic: creating-a-static-resource
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.143Z
estimatedTokens: 788
keywords: [Creating, Resource, resources, upload, content, Visualforce, including, archives, zip, jar, files, images, style, sheets, JavaScript]
---

# Creating a Static Resource

> You can use static resources to upload content that you can
        reference in a Visualforce page, including archives (such as .zip and
        .jar files), images, style sheets, JavaScript, and other files. You can
        use static resources only within your org, so you can’t host content
        here for other apps or websites.

# Creating a Static Resource

You can use static resources to upload content that you can reference in a Visualforce page, including archives (such as .zip and .jar files), images, style sheets, JavaScript, and other files. You can use static resources only within your org, so you can’t host content here for other apps or websites.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Contact Manager, Group, Professional, Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To create static resources: | Customize Application |

1.  From Setup, in the Quick Find box, enter Static Resources, and then select **Static Resources**.
2.  To create a static resource, click **New**.
3.  Enter a name that identifies the resource in Visualforce markup.

    This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    If you reference a static resource in Visualforce markup and then change the name of the resource, the Visualforce markup is updated to reflect that change.

4.  If needed, specify a description for the static resource.
5.  To upload a static resource, click **Browse** and then select a local file.

    A single static resource can be up to 5 MB, and an org can have up to 250 MB of static resources, total.

    ![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pages)

    #### Warning

    If you use WinZip to compress static resource files, you must install the most recent version. Older versions of WinZip can cause a loss of data.

6.  Set the cache control for user sessions, including API and Experience Cloud user sessions.

    If set to private, the static resource is accessible to all authenticated users. The static resource is stored on the Salesforce server in a user’s individual cache for the duration of the session.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

    #### Note

    If a Salesforce Site has guest user profile restrictions based on IP range or login hours, the cache control for static resources is set to private. A Salesforce Site with guest user profile restrictions caches static resources only within the browser. If a previously unrestricted Salesforce Site becomes restricted, it can take up to 45 days for the static resources to expire from the Salesforce cache and any intermediate caches.

    If set to public, the static resource is accessible to all internet traffic, including unauthenticated users, after it’s cached. The resource is stored on the Salesforce server in a shared cache, which results in faster load times.

    For technical information about cache control, see the W3C specifications for [HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html "HTML (New Window)").

7.  Save your changes.
