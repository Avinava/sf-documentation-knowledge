---
title: "Move Metadata to a Sandbox at Integration Points"
domain: metadata-api
topic: move-metadata-to-a-sandbox-at-integration-points
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:55.033Z
keywords: [Move, Metadata, Sandbox, Integration, Points, See]
---

# Move Metadata to a Sandbox at Integration Points

# Move Metadata to a Sandbox at Integration Points

During development, use Metadata API to move metadata to sandboxes for integrating changes, testing, and collaborating with your team.

After developing on your own in a scratch org or your local file system, combine work from your team at integration points in a sandbox. Sandboxes are development environments that you can use to integrate and test changes from multiple developers. Admins often create and assign sandboxes. To create a sandbox on the Salesforce UI, navigate to Setup. Next, in the Quick Find box, search for sandboxes.

You have several levels of sandboxes to choose from with differing amounts of data. The Developer sandbox and Developer Pro sandbox are development environments where you build customizations and test changes on fictional data. The Partial Copy sandbox and Full sandbox are testing environments loaded with copies of production data. Move metadata to different sandboxes with a Metadata API deploy command depending on your development and testing needs.

Outside of Metadata API, admins typically use change sets to send customizations from one sandbox to another. Unlike Metadata API calls, you must build change sets manually. To add components to a continuous integration system more easily, you can automate Metadata API calls on Salesforce CLI.

#### See Also

-   [Sandbox Types and Templates](https://help.salesforce.com/s/articleView?id=platform.create_test_instance.htm&type=5&language=en_US)
    
-   [Change Sets](https://help.salesforce.com/s/articleView?id=platform.changesets.htm&type=5&language=en_US)
    
-   [Continuous Integration](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_ci.htm)