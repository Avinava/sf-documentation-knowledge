---
title: "lightning Commands"
domain: cli-commands
topic: lightning-commands
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:38:59.833Z
estimatedTokens: 1933
keywords: [Flags, lightning, Commands, Preview, Experience, app, locally, real-time, deploying, dev, Examples, site]
---

> Preview a Lightning Experience app locally and in real-time, without deploying it.

# lightning Commands

Commands to work with Lightning applications.

-   **[lightning dev app](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_lightning_commands_unified.htm#cli_reference_lightning_dev_app_unified)**
    Preview a Lightning Experience app locally and in real-time, without deploying it.
-   **[lightning dev component](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_lightning_commands_unified.htm#cli_reference_lightning_dev_component_unified)**
    Preview LWC components in isolation.
-   **[lightning dev site](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_lightning_commands_unified.htm#cli_reference_lightning_dev_site_unified)**
    Preview an Experience Builder site locally and in real-time, without deploying it.

## lightning dev app

Preview a Lightning Experience app locally and in real-time, without deploying it.

### Description for lightning dev app

Use Local Dev to see local changes to your app in a real-time preview that you don't have to deploy or manually refresh. To let you quickly iterate on your Lightning web components (LWCs) and pages, your app preview automatically refreshes when Local Dev detects source code changes.

When you edit these local files with Local Dev enabled, your org automatically reflects these changes.

\- Basic HTML and CSS edits to LWCs

\- JavaScript changes to LWCs that don't affect the component's public API

\- Importing new custom LWCs

\- Importing another instance of an existing LWC

To apply any other local changes not listed above, you must deploy them to your org using the \`sf project deploy start\` command.

When you make changes directly in your org (like saving new component properties), they're automatically deployed to your live app. To update your local version of the app with those changes, you must retrieve them from your org using the \`sf project retrieve start\` command.

If you run the command without flags, it displays a list of devices for you to choose from. Then it lists the apps that it found in your local DX project for you to choose. Use the --device or --name flags to bypass the questions. The command also asks if you want to enable Local Dev in your org if it isn't already.

To learn more about Local Dev enablement, considerations, and limitations, see the Lightning Web Components Developer Guide (https://developer.salesforce.com/docs/platform/lwc/guide/get-started-test-components.html).

### Examples for lightning dev app

Preview the default app for the target org "myOrg" in a desktop environment:

```

```

Preview the app "myApp" for the target org "myOrg" in a desktop environment:

```

```

Preview the default app for target org "myOrg" on an iOS device:

```

```

### Flags

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-n | \--name NAME

Optional

Name of the Lightning Experience app to preview.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\-t | \--device-type DEVICE-TYPE

Optional

Type of device to display the app preview.

Type: option

Permissible values are: desktop, ios, android

\-i | \--device-id DEVICE-ID

Optional

ID of the mobile device to display the preview if device type is set to \`ios\` or \`android\`. The default value is the ID of the first available mobile device.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

## lightning dev component

Preview LWC components in isolation.

### Description for lightning dev component

Component preview launches an isolated development environment for Lightning Web Components, enabling rapid iteration without needing to deploy changes. The server provides real-time previews of your components through hot module replacement (HMR), automatically refreshing the view when source files are modified.

When running the development server, these changes are immediately reflected:

\- Component template (HTML) modifications

\- Styling updates in component CSS files

\- JavaScript logic changes that don't modify the component's API

\- Adding or updating internal component dependencies

\- Modifying static resources used by the component

If you run the command without flags, it displays a list of components that it found in your local DX project for you to choose to preview. Use the --name flag to bypass the question. The command also asks if you want to enable Local Dev in your org if it isn't already.

See the LWC Developer Guide for more information about component development best practices and limitations (https://developer.salesforce.com/docs/platform/lwc/guide/get-started-best-practices.html).

### Examples for lightning dev component

Select a component interactively and launch the component preview; use your default org:

```

```

Launch component preview for "myComponent"; use the org with alias "myscratch":

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-n | \--name NAME

Optional

Name of a component to preview.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-c | \--client-select

Optional

Launch component preview without selecting a component.

Type: boolean

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

## lightning dev site

Preview an Experience Builder site locally and in real-time, without deploying it.

### Description for lightning dev site

Enable Local Dev to see local changes to your site in a real-time preview that you don't have to deploy or manually refresh. To let you quickly iterate on your Lightning web components (LWCs) and pages, your site preview automatically refreshes when Local Dev detects source code changes.

When you edit these local files with Local Dev enabled, your org automatically reflects these changes.

\- Basic HTML and CSS edits to LWCs

\- JavaScript changes to LWCs that don't affect the component's public API

\- Importing new custom LWCs

\- Importing another instance of an existing LWC

To apply any other local changes not listed above, you must deploy them to your org using the \`sf project deploy start\` command. Then republish your site and restart the server for the Local Dev experience.

If you run the command without flags, it displays a list of Experience Builder sites that it found in your local DX project for you to choose from. Use the --name flag to bypass the question. The command also asks if you want to enable Local Dev in your org if it isn't already.

For more considerations and limitations, see the Lightning Web Components Developer Guide.

### Examples for lightning dev site

Select a site to preview from the org with alias "myOrg":

```

```

Preview the site "Partner Central" from your default org:

```

```

### Flags

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-n | \--name NAME

Optional

Name of the Experience Builder site to preview. It must match a site name from the current org.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

## Code Examples

```
sf lightning dev app --target-org myOrg
```

```
sf lightning dev app --name MyApp --target-org myOrg --device-type desktop
```

```
sf lightning dev app --target-org myOrg --device-type ios --device-id "iPhone 15 Pro Max"
```

```
sf lightning dev component
```

```
sf lightning dev component --name myComponent --target-org myscratch
```

## Related Topics

- lightning dev app (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_lightning_commands_unified.htm)
- lightning dev component (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_lightning_commands_unified.htm)
- lightning dev site (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_lightning_commands_unified.htm)
