---
title: "Send a Request with Postman"
domain: chatterapi
topic: send-a-request-with-postman
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.953Z
estimatedTokens: 763
keywords: [Send, Postman, explore, test, API, calls, across, multiple, orgs, full, control, content]
---

# Send a Request with Postman

> With Postman, you can explore and test your API calls across multiple orgs with full
          control on headers, parameters, and content type.

# Send a Request with Postman

With Postman, you can explore and test your API calls across multiple orgs with full control on headers, parameters, and content type.

Before you send a request with Postman, make sure that you have a Developer Edition org and complete [Step Two: Set Up Authorization](atlas.en-us.chatterapi.meta/chatterapi/CR_quickstart_oauth.htm "Create an external client app in a Salesforce org, enable OAuth, and configure an OAuth flow. Use the external client app to connect to Salesforce.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Postman supports API requests with different authentication flows, such as the SOAP login flow, OAuth flow, or the JWT bearer token flow. See the [Salesforce Developers’ Blog: Explore the Salesforce APIs with a Postman Collection](https://developer.salesforce.com/blogs/2020/03/explore-the-salesforce-apis-with-a-postman-collection).

This quick start uses the Postman desktop app. [Install the postman app and fork the Salesforce APIs](https://github.com/forcedotcom/postman-salesforce-apis/blob/master/install-with-app.md). You can then [authenticate with Salesforce](https://github.com/forcedotcom/postman-salesforce-apis/blob/master/install-with-app.md#authenticate-with-salesforce) by getting a new access token on the Postman app. Alternatively, you can [connect the Postman web app to Salesforce using the Trailhead quick start](https://trailhead.salesforce.com/content/learn/projects/quick-start-connect-postman-to-salesforce), which requires a CORS configuration in Salesforce.

To make a request to your org with Postman:

1.  Open the Postman desktop app.
2.  Expand the Salesforce APIs collection and select **Connect** | **Chatter** | **User** | **User Photo**.
3.  Check that the POST URL lists {{\_endpoint}}/services/data/v{{version}}/connect/user-profiles/me/photo. Click **Send**.

The Body tab shows the response body.

![Postman receives a response in the Body tab.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Fquickstart_postman_response.png&folder=chatterapi)

If your call isn’t successful, check that your endpoint and version values are correct in the [environment settings](https://learning.postman.com/docs/sending-requests/managing-environments/).

![Check that your environment variables are correct.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Fquickstart_postman_environment.png&folder=chatterapi)

Also, you can edit the request body, including the parameters for your request. In the previous example, the **Body** | **form-data** tab includes the request parameters as a JSON value of {"cropY":"0","cropX":"0","cropSize":"200"}.

![Verify the request parameters you're sending.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Fquickstart_postman_request.png&folder=chatterapi)

-   [← Previous](atlas.en-us.chatterapi.meta/chatterapi/quickstart_communities.htm "Connect to Experience Cloud Sites")

## Related Topics

- Step Two: Set Up
                         Authorization (atlas.en-us.chatterapi.meta/chatterapi/CR_quickstart_oauth.htm)
- ← Previous (atlas.en-us.chatterapi.meta/chatterapi/quickstart_communities.htm)
