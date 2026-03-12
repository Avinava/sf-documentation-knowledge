---
title: "Authorize an Org Using Its SFDX Authorization URL"
domain: sfdx-dev
topic: authorize-an-org-using-its-sfdx-authorization-url
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.071Z
estimatedTokens: 265
keywords: [Authorize, Org, SFDX, Authorization, URL, org's, Salesforce, continuous, integration, environments, fully, automated, don’t, support, human]
---

# Authorize an Org Using Its SFDX Authorization URL

> Use an org's Salesforce DX (SFDX) authorization URL to authorize an org in continuous
    integration (CI) environments, which are fully automated and don’t support the human
    interactivity of logging into a browser.

# Authorize an Org Using Its SFDX Authorization URL

Use an org's Salesforce DX (SFDX) authorization URL to authorize an org in continuous integration (CI) environments, which are fully automated and don’t support the human interactivity of logging into a browser.

1.  Open a terminal (macOS and Linux) or command prompt (Windows) on the computer where you’ve already authorized the org using a Web browser.
2.  Get your org’s SFDX authorization URL and store it in a file by running this command.

    ```

    ```

    The JSON output includes a key called sfdxAuthUrl, whose value is the org’s SFDX authorization URL.

3.  In your CI environment, authorize the org by referencing the authFile.json file with this command.

    ```

    ```


For more information and examples, see the reference about the org login sfdx-url command in the [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm#cli_reference_org_login_sfdx-url_unified).

## Code Examples

```
sf org display --target-org my-org --verbose --json > authFile.json
```

```
sf org login sfdx-url --sfdx-url-file authFile.json
```
