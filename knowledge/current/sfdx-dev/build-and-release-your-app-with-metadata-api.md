---
title: "Build and Release Your App with Metadata API"
domain: sfdx-dev
topic: build-and-release-your-app-with-metadata-api
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:18.090Z
estimatedTokens: 1498
keywords: [Build, Release, App, Metadata, API, Develop, test, sandboxes, Salesforce, CLI, Extensions, Code, retrieve, deploy, source]
---

# Build and Release Your App with Metadata API

> Develop and test your app in your sandboxes. Use Salesforce CLI or Salesforce Extensions
  for VS Code to retrieve and deploy your source. This development work flow is called the org
  development model.

# Build and Release Your App with Metadata API

Develop and test your app in your sandboxes. Use Salesforce CLI or Salesforce Extensions for VS Code to retrieve and deploy your source. This development work flow is called the org development model.

## Develop and Test in a Sandbox Using the Org Development Model

Similar to change sets, the release artifact is a set of changed metadata to update in the production org. You can develop, test, and deploy your changes using the project deploy commands. If you want to know more about this development model, see the [Org Development Model](https://trailhead.salesforce.com/content/learn/modules/org-development-model) module in Trailhead.

## Development and Release Environments

1.  **Develop and test:** Each team member has their own Developer sandbox to create their assigned customization. Developer sandboxes contain no production data.
2.  **Build release:** Team members each migrate their customizations from their respective developer sandboxes to a shared Developer Pro sandbox for integration. Developer Pro sandboxes don’t contain production data, but you can seed them with testing data.
3.  **Test release:** For user-acceptance testing, the team uses a Partial sandbox to create a complete replica of production.
4.  **Release:** After the release is in production, the team can use the Full sandbox to train users without the risk of altering production data. A Full sandbox includes a copy of production data.

![The steps in the application development lifecycle: develop and test with Developer sandboxes; integrate with a Developer Pro sandbox; test and validate with a Full sandbox; and release to production. All changes are stored in the source control repository.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fbuild_release%2Fimages%2Forg_dev_model_flow.png&folder=sfdx_dev)

## What Tools Do I Need?

| Tool | Description |
| --- | --- |
| Salesforce DX project | The Salesforce DX project contains the metadata and source files that comprise your changes. A DX project has a specific project structure and source format.In addition to source files, the project contains a configuration file, sfdx-project.json. This file contains project information and enables you to leverage Salesforce DX tools for many of your development tasks. |
| Deployment artifact | After testing the changes, you create the deployment artifact, a .zip file that contains changed files to deploy. Deploy the release artifact to the full (staging) sandbox first, and then finally to production. You can think of the deployment artifact as the inbound change set. The changes don’t take effect until they are deployed. |
| Source control system | All changes are merged and stored in a source control system, which contains the Salesforce DX project. |
| Salesforce CLI | You can use Salesforce CLI for every phase of the org development life cycle. It improves productivity by providing a single interface for all your development, testing, and automation use cases. |
| Salesforce Extensions for VS Code | Salesforce Extensions for VS Code is built on top of Salesforce CLI and Visual Studio Code. Together, they are an integrated development environment for custom development on Lightning Platform. You can run Salesforce CLI commands directly from the command palette or terminal. |
| Change management mechanisms | It’s still important to capture your changes externally using formal change-tracking tools, such as a change list, a deployment run list, and other project management tools. |

## Considerations for Deploying Apex Code

To deploy Apex to production, unit tests of your Apex code must meet coverage requirements. Code coverage indicates how many executable lines of code in your classes and triggers are covered by your test methods. Write test methods to test your triggers and classes, and then run those tests to generate code coverage information.

If you don’t specify a test level when initiating a deployment, the default test execution behavior depends on the contents of your deployment package.

-   If your deployment package contains Apex classes or triggers, when you deploy to production, all tests are executed, except tests that originate from a managed package.
-   If your package doesn’t contain Apex code, no tests are run by default.

You can run tests for a deployment of non-Apex components. You can override the default test execution behavior by setting the test level in your deployment options. Test levels are enforced regardless of the types of components present in your deployment package. We recommend that you run all local tests in your development environment, such as a sandbox, before deploying to production. Running tests in your development environment reduces the number of tests required in a production deployment.

-   **[Develop and Test Changes Locally](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_mdapi_deploy.htm)**
    Develop changes in source format, deploying to and retrieving from your Developer sandbox.
-   **[Build and Test the Release Artifact](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_release_artifact.htm)**
    After your team has finished its development tasks, transition to the build release phase to integrate your changes in a Developer Pro sandbox. Then build the release artifact.
-   **[Test the Release Artifact in a Staging Environment](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_mdapi_staging.htm)**
    Stage the changes and run regression tests in a Full sandbox.
-   **[Release Your App to Production](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_mdapi_production.htm)**
    Now that all your tests have passed in the Full sandbox, you’re ready to deploy to production.
-   **[Cancel a Metadata Deployment](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_mdapi_cancel_deploy.htm)**
    You can cancel a metadata deployment from Salesforce CLI and specify a wait time for the command to complete.

## Related Topics

- Develop and Test Changes Locally (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_mdapi_deploy.htm)
- Build and Test the Release Artifact (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_release_artifact.htm)
- Test the Release Artifact in a Staging Environment (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_mdapi_staging.htm)
- Release Your App to Production (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_mdapi_production.htm)
- Cancel a Metadata Deployment (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_mdapi_cancel_deploy.htm)
