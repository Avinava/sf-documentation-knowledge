---
title: "Packaging Considerations for XMD"
domain: bi-dev-guide-xmd
topic: packaging-considerations-for-xmd
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:07.777Z
estimatedTokens: 448
keywords: [Packaging, Considerations, XMD, Standard, User, file, custom, formatting, dataset, CRM, Analytics]
---

# Packaging Considerations for XMD

> The Standard User XMD file defines custom formatting for dataset fields and values in
  CRM Analytics.

# Packaging Considerations for XMD

The Standard User XMD file defines custom formatting for dataset fields and values in CRM Analytics.

You can upload the Standard User XMD file through the UI or [Xmd REST Resource](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_main.htm).

```

```

```

```

```

```

The Standard User XMD file can’t be used in a Salesforce package because it’s tied to a dataset version that isn’t packageable. To support packaging, an alternative Primary XMD file is available. The Primary XMD file can be included in packages because it’s tied to a dataset container instead of a dataset version.

The following properties apply to the Primary User XMD file:

-   You can update the Primary User XMD by deploying the WaveXmd metadata through MDAPI or by setting the userXmd property through the [Dataset REST Resource](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataset_id.htm):

    ```

    ```

-   The Primary User XMD is applied to a dataset only after a dataflow that updates the dataset runs (because the dataflow sets the Standard User XMD for the new dataset version).
-   Changes to the Primary User XMD don’t affect the Standard User XMD.
-   If you update the Standard User XMD, the Primary User XMD is updated automatically.
-   An MDAPI retrieve operation returns the Primary User XMD file only if the file was deployed using MDAPI.
-   If you do either of the following, the MDAPI retrieve operation returns an empty XMD file:
    -   Update the Primary User XMD file using REST API.
    -   Update the Standard User XMD file through the UI or REST API.This result occurs even if the files were originally deployed using MDAPI.

## Code Examples

```
/wave/datasets/<datasetID>/versions/<versionID>/xmds/main
```

```
/wave/datasets/<datasetID>/versions/<versionID>/xmds/system
```

```
/wave/datasets/<datasetID>/versions/<versionID>/xmds/user
```

```
/wave/datasets/<datasetIdOrApiName>
```
