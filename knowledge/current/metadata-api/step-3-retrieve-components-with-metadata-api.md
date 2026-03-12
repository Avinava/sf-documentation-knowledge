---
title: "Step 3: Retrieve Components with Metadata API"
domain: metadata-api
topic: step-3-retrieve-components-with-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:41.542Z
estimatedTokens: 670
keywords: [Step, Retrieve, Components, Metadata, API, Salesforce, CLI, file, representation, package.xml, manifest, Two, Options]
---

# Step 3: Retrieve Components with Metadata API

> With Salesforce CLI, retrieve a file representation of the specified components in your
        package.xml manifest.

# Step 3: Retrieve Components with Metadata API

With Salesforce CLI, retrieve a file representation of the specified components in your package.xml manifest.

## Two Options for Metadata API Retrieve

You can use one of two commands to retrieve metadata components.

1.  To retrieve the components specified in your package.xml manifest, issue a retrieve call using a Salesforce CLI command. On the command line, run this call with the appropriate file path:

    sf project retrieve start --manifest path/to/package.xml

    Metadata retrieve() is an asynchronous, file-based command. You can issue multiple retrieve or deploy requests that run on their own when resources are available.

    With this command, you send a request to retrieve all custom objects as specified in your package.xml manifest. Your requests are queued until our systems are ready to process your retrieve call. After your request is dequeued, your retrieve call is run. The client checks the status of the retrieve and notifies you when the call is complete. The call returns a file representation of the chosen components. When you use Salesforce CLI to issue a retrieve call, all these processes are automated.

    The project retrieve start command allows for source tracking. Source tracking includes information about which revision you’re working on and when the last changes were made, which makes source commands more developer-friendly. To use source tracking, ensure that it’s enabled in your org.

2.  Alternatively, run this command in your terminal:

    sf project retrieve start --manifest path/to/package.xml --target-metadata-dir path/to/retrieve/dir

    This command retrieves components in mdapi format rather than source format, and doesn’t allow for source tracking. In practice, admins use mdapi commands more often because the commands don’t include source tracking.


-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_quickstart_retrieve_build_manifest.htm "Step 2: Build a Package.xml Manifest")

#### See Also

-   [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.")

-   [source Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm#cli_reference_force_source)

-   [Source Tracking](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking.htm)

-   [mdapi Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_mdapi.htm#cli_reference_force_mdapi)

## Related Topics

- ← Previous (atlas.en-us.api_meta.meta/api_meta/meta_quickstart_retrieve_build_manifest.htm)
- retrieve() (atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm)
