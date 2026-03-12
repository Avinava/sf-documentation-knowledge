---
title: "Step 3: Create the Static Resources"
domain: api-streaming
topic: step-3-create-the-static-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.239Z
estimatedTokens: 331
keywords: [Step, Resources]
---

# Step 3: Create the Static Resources

# Step 3: Create the Static Resources

1.  Download this static resource .zip file: [streaming\_api\_interactive\_visualforce\_demo-v40.zip](https://resources.docs.salesforce.com/rel1/doc/en-us/static/misc/streaming_api_interactive_visualforce_demo-v40.zip)
2.  Extract the following files from the .zip fle:

    | File Name | Description |
    | --- | --- |
    | cometd.zip | Files for CometD version 3.1.0 and the Dojo toolkit used by demo.js. When you define a .zip archive file as a static resource, Visualforce can access the files in that archive. The .zip file becomes a virtual file system. |
    | demo.css | The CSS code that formats the Visualforce page. |
    | demo.js | The code used by the page to subscribe to the channel, receive and display the notifications, and unsubscribe from the channel. |
    | json2.js | The JavaScript library that contains the stringify and parse methods. |
    | StreamingApiDemo | The Visualforce page that displays the Streaming API notifications. |

3.  From Setup, enter Static Resources in the Quick Find box, then select **Static Resources** to add the extracted files with the following names:

    | File Name | Static Resource Name |
    | --- | --- |
    | cometd.zip | cometd_zip |
    | demo.css | demo_css |
    | demo.js | demo_js |
    | json2.js | json2_js |
