---
title: "Move Metadata for Production-Level Changes"
domain: metadata-api
topic: move-metadata-for-production-level-changes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.749Z
estimatedTokens: 193
keywords: [Move, Metadata, Production-Level, Changes, API, large, merging, splitting, Salesforce, orgs]
---

# Move Metadata for Production-Level Changes

> Use Metadata API to move metadata during large changes, such as
                  merging or splitting Salesforce orgs.

# Move Metadata for Production-Level Changes

Use Metadata API to move metadata during large changes, such as merging or splitting Salesforce orgs.

To split an org, first retrieve the metadata to be moved. Then, use a deploy call to push those configurations to the new org. Similarly, to merge two orgs, retrieve existing metadata from one org. Next, use a deploy call to migrate metadata from one org to another.

#### See Also

-   [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.")

-   [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.")

## Related Topics

- retrieve() (atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm)
- deploy() (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
