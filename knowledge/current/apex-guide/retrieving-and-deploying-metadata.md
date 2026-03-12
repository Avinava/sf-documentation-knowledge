---
title: "Retrieving and Deploying Metadata"
domain: apex-guide
topic: retrieving-and-deploying-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.713Z
estimatedTokens: 542
keywords: [Retrieving, Deploying, Metadata, Retrieve, deploy, metadata, Metadata.Operations, class.]
---

# Retrieving and Deploying Metadata

> Retrieve and deploy metadata by using the Metadata.Operations class.

# Retrieving and Deploying Metadata

Retrieve and deploy metadata by using the Metadata.Operations class.

Use the Metadata.Operations.retrieve() method to synchronously retrieve metadata from the current org. Provide a list of metadata component names that you want to retrieve. Salesforce returns a list of matching component data, represented by component classes that derive from Metadata.Metadata.

Use the Metadata.Operations.enqueueDeployment() method to asynchronously deploy metadata to the current org. Deployment is queued for asynchronous processing. When deploying metadata, you can create and update components but not delete them. There are limitations on which components that apps and packages can deploy and which types of apps and packages can deploy to which types of orgs. There are also service protection limitations on how many deployments that you can enqueue at one time from Apex. For more information, see [Security Considerations](atlas.en-us.apexcode.meta/apexcode/apex_metadata_security.htm#apex_metadata_security "Be aware of security considerations when using Apex to access metadata.").

Use the full name of the metadata component when retrieving and deploying metadata. The full name can include the namespace, metadata type, and component name. If you’re updating components in a namespace, you must qualify the namespace for the component in the full name. For example, the full name for a custom metadata MDType1\_\_mdt component named Component1 that is contained in the myPackage namespace is myPackage\_\_MDType1\_\_mdt.myPackage\_\_Component1. For more information on the metadata component full name syntax, see [Metadata base type](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") in the Metadata API Developer Guide.

You can retrieve and deploy metadata in post install scripts. In uninstall scripts, you can only retrieve, not deploy, metadata from Apex code.

See [Metadata.Operations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Metadata_Operations.htm) for code examples for retrieving and deploying metadata.

## Related Topics

- Security Considerations (atlas.en-us.apexcode.meta/apexcode/apex_metadata_security.htm)
