---
title: "Ant Migration Tool"
domain: daas
topic: ant-migration-tool
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:24.143Z
estimatedTokens: 1013
keywords: [Ant, Migration, Tool, retired, Spring, ’24, continues, function, future, API, versions, isn’t, updated, new, functionality]
---

# Ant Migration Tool

> The Ant Migration Tool is retired with Spring ’24. The tool continues to
    function for future API versions but isn’t updated with new functionality and isn’t supported.
    To manage metadata changes, switch to Salesforce CLI for a modern, supported developer
    experience.

# Ant Migration Tool

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=daas)

#### Note

The Ant Migration Tool is retired with Spring ’24. The tool continues to function for future API versions but isn’t updated with new functionality and isn’t supported. To manage metadata changes, switch to Salesforce CLI for a modern, supported developer experience.

The Ant Migration Tool is a Java/Ant-based command-line utility for moving metadata between a local directory and a Salesforce org. The Ant Migration Tool is especially useful in the following scenarios.

-   Development projects for which you need to populate a test environment with a lot of setup changes—Making these changes using a web interface can take a long time.
-   Multistage release processes—A typical development process requires iterative building, testing, and staging before releasing to a production environment. Scripted retrieval and deployment of components can make this process much more efficient.
-   Repetitive deployment using the same parameters—You can retrieve all the metadata in your organization, make changes, and deploy a subset of components. If you need to repeat this process, it’s as simple as calling the same deployment target again.
-   When migrating from stage to production is done by IT—Anyone that prefers deploying in a scripting environment will find the Ant Migration Tool a familiar process.
-   Scheduling batch deployments—You can schedule a deployment for midnight to not disrupt users. Or you can pull down changes to your Developer Edition org every day.

## Understanding Metadata API

Metadata API contains a set of objects that manage setup and customization information (metadata) for your organizations, and the SOAP calls that manipulate those objects. With Metadata API you can:

-   Work with setup configuration as XML metadata files
-   Migrate configuration changes between organizations
-   Create your own tools for managing organization and application metadata

Although you can write your own client applications for using Metadata API SOAP calls, Salesforce provides the Ant Migration Tool to retrieve and deploy Apex and metadata.

## Understanding Package and Directory Structure

Metadata API functions in a package-centric manner. Components can be in one or more packages, or in no package. Packages can be local (created in your Salesforce org) or installed from Salesforce AppExchange. Whenever the Ant Migration Tool retrieves a set of components, that set is limited to what’s in a single package or what’s in no package at all. There are three kinds of packages.

-   Unpackaged—Components that live natively in your organization, such as standard objects, go in the unpackaged package.
-   Unmanaged package—Unmanaged packages are typically used to distribute open-source projects or application templates to provide developers with the basic building blocks for an application. After the components are installed from an unmanaged package, the components can be edited in the organization they’re installed in. The developer who created and uploaded the unmanaged package has no control over the installed components, and can't change or upgrade them. Don’t use unmanaged packages to migrate components from a sandbox to production org. Instead, use Change Sets.
-   Managed package—A collection of application components that is posted as a unit on the AppExchange and associated with a namespace and possibly a License Management Organization. To support upgrades, a package must be managed. An organization can create a single managed package that can be downloaded and installed by many different organizations. Managed packages differ from unmanaged packages by having some locked components, allowing the managed package to be upgraded later. Unmanaged packages do not include locked components and cannot be upgraded. In addition, managed packages obfuscate certain components (like Apex) on subscribing organizations to protect the intellectual property of the developer.
