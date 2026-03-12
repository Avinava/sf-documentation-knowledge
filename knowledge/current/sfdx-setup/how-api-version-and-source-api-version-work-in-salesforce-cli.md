---
title: "How API Version and Source API Version Work in Salesforce CLI"
domain: sfdx-setup
topic: how-api-version-and-source-api-version-work-in-salesforce-cli
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.097Z
estimatedTokens: 2433
keywords: [How, API, Version, Source, Work, Salesforce, CLI, uses, deploying, retrieving, metadata, org, they, sound, often]
---

# How API Version and Source API Version Work in Salesforce CLI

> Salesforce CLI uses both the API version and source API version when deploying or
    retrieving metadata to or from an org. While they sound the same, and are often set to the same
    value, the two settings work differently.

# How API Version and Source API Version Work in Salesforce CLI

Salesforce CLI uses both the API version and source API version when deploying or retrieving metadata to or from an org. While they sound the same, and are often set to the same value, the two settings work differently.

For simplicity, let’s use the terms apiVersion and sourceApiVersion in this topic, and first define what each means.

apiVersion

The apiVersion value determines the *shape of the HTTPS request or response*.

Digging a little deeper, apiVersion refers to the core Metadata API version used to service an HTTPS request or response. When deploying metadata source to an org, Salesforce CLI sets the apiVersion value on the [Connection](https://forcedotcom.github.io/sfdx-core/classes/org_connection.Connection-1.html) object and uses the URL of the HTTPS request with either the SOAP or REST API. Because there’s currently no REST API for metadata retrievals, Salesforce CLI uses the apiVersion value set on the [Connection](https://forcedotcom.github.io/sfdx-core/classes/org_connection.Connection-1.html) object to create the URL for a SOAP endpoint.

sourceApiVersion

The sourceApiVersion value determines the *shape of the metadata in the HTTPS request or response*.

Salesforce CLI uses the sourceApiVersion value when setting the <version> element in the manifest file (package.xml). The package.xml file is included in the HTTPS request or response when deploying or retrieving, respectively.

These examples show how the two settings work together:

-   Retrieve: Let’s say that a new field was added to a metadata type in the Summer ‘22 release, which is API version 55.0. If you set sourceApiVersion to 54.0, and then execute the project retrieve start command, the retrieved metadata doesn’t include this new field. However, the same retrieve with sourceApiVersion set to 55.0 does return the metadata with the new field.
-   Deploy: Again assume that a new field was added to a metadata type in API version 55.0. If you set sourceApiVersion to 54.0 and try to deploy a local metadata file that includes this new field, the deploy fails. To successfully deploy metadata with the new field, you must set sourceApiVersion to 55.0 or greater.

## Precedence of Salesforce CLI Settings

There are multiple ways to set apiVersion and sourceApiVersion, and multiple ways Salesforce CLI determines their values if you haven’t explicitly set them. Use the following prioritized lists to determine the value of the two settings in your environment. Settings higher on the list take precedence over lower ones. See the examples after this section to understand how this precedence affects metadata deploys and retrieves.

apiVersion: Order of Precedence

1.  \--api-version command flag.
2.  SF\_ORG\_API\_VERSION environment variable.
3.  org-api-version local configuration variable.
4.  org-api-version global configuration variable.
5.  Highest API version supported by the target org.

sourceApiVersion: Order of Precedence

1.  <version> element in the manifest file ( package.xml).
2.  sourceApiVersion property in the sfdx-project.json file.
3.  \--api-version command flag.
4.  SF\_ORG\_API\_VERSION environment variable.
5.  org-api-version local configuration variable.
6.  org-api-version global configuration variable.
7.  Highest API version supported by the target org.

## Deploy Examples That Show Settings Precedence

These examples set up various use cases, and then show the result after you deploy.

Settings: The apiVersion is set to 55.0 using the local configuration variable (sf config set org-api-version=55.0). The sourceApiVersion is set to 54.0 in the sfdx-project.json file.

**Command**: sf project deploy start --source-dir force-app

**Result**: Salesforce CLI sends the deploy request to an API version 55.0 endpoint. The <version> element in the manifest that’s sent with the request has a value of 54.0, which means the metadata source being deployed is in API version 54.0 shape.

Settings: The apiVersion is set to 55.0 using the local configuration variable (sf config set org-api-version=55.0). The sourceApiVersion is set to 54.0 in the sfdx-project.json file.

**Command**: sf project deploy start --source-dir force-app --api-version=56.0

**Result**: Salesforce CLI sends the deploy request to an API version 56.0 endpoint. The <version> element in the manifest that’s sent with the request has a value of 54.0, which means the metadata source being deployed is in API version 54.0 shape.

Settings: The apiVersion is set to 55.0 using the local configuration variable (sf config set org-api-version=55.0). The SF\_ORG\_API\_VERSION environment variable is set to 56.0. The sourceApiVersion isn’t defined in sfdx-project.json.

**Command**: sf project deploy start --source-dir force-app

**Result**: Salesforce CLI sends the deploy request to an API version 56.0 endpoint. The <version> element in the manifest that’s sent with the request has a value of 56.0, which means the metadata source being deployed is in API version 56.0 shape.

Settings: The apiVersion is set to 55.0 using the local configuration variable (sf config set org-api-version=55.0). The sourceApiVersion is set to 54.0 in the sfdx-project.json file. The <version> element in the manifest file is set to 53.0.

**Command**: sf project deploy start --manifest ./package.xml

**Result**: Salesforce CLI sends the deploy request to an API version 55.0 endpoint. The <version> element in the manifest that’s sent with the request has a value of 53.0, which means the metadata source being deployed is in API version 53.0 shape.

Settings: None. The maximum API version supported by the org is 56.0

**Command**: sf project deploy start --source-dir force-app

**Result**: Salesforce CLI sends the deploy request to an API version 56.0 endpoint. The <version> element in the manifest that’s sent with the request has a value of 56.0, which means the metadata source being deployed is in API version 56.0 shape.

## Retrieve Examples That Show Settings Precedence

These examples set up various use cases, and then show the result after you retrieve.

Settings: The apiVersion is set to 55.0 using the local configuration variable (sf config set org-api-version=55.0). The sourceApiVersion is set to 54.0 in the sfdx-project.json file.

**Command**: sf project retrieve start --source-dir force-app

**Result**: Salesforce CLI sends the retrieve request to an API version 55.0 SOAP endpoint. The <version> element in the manifest that’s sent with the request has a value of 54.0, which means the metadata source being retrieved is in API version 54.0 shape.

Settings: The apiVersion is set to 55.0 using the local configuration variable (sf config set org-api-version=55.0). The sourceApiVersion is set to 54.0 in the sfdx-project.json file.

**Command**: sf project retrieve start --source-dir force-app --api-version 56.0

**Result**: Salesforce CLI sends the retrieve request to an API version 56.0 SOAP endpoint. The <version> element in the manifest that’s sent with the request has a value of 54.0, which means the metadata source being retrieved is in API version 54.0 shape.

Settings: The apiVersion is set to 55.0 using the local configuration variable (sf config set org-api-version=55.0). The SF\_ORG\_API\_VERSION environment variable is set to 56.0. The sourceApiVersion isn’t defined in sfdx-project.json.

**Command**: sf project retrieve start --source-dir force-app

**Result**: Salesforce CLI sends the retrieve request to an API version 56.0 SOAP endpoint. The <version> element in the manifest that’s sent with the request has a value of 56.0, which means the metadata source being retrieved is in API version 56.0 shape.

Settings: The apiVersion is set to 55.0 using the local configuration variable (sf config set org-api-version=55.0). The sourceApiVersion is set to 54.0 in the sfdx-project.json file. The <version> element in the manifest file is set to 53.0.

**Command**: sf project retrieve start --manifest ./package.xml

**Result**: Salesforce CLI sends the retrieve request to an API version 55.0 SOAP endpoint. The <version> element in the manifest that’s sent with the request has a value of 53.0, which means the metadata source being retrieved is in API version 53.0 shape.

Settings: None. The maximum API version supported by the org is 56.0

**Command**: sf project retrieve start --source-dir force-app

**Result**: Salesforce CLI sends the retrieve request to an API version 56.0 SOAP endpoint. The <version> element in the manifest that’s sent with the request has a value of 56.0, which means the metadata source being retrieved is in API version 56.0 shape.

#### See Also

-   [Configuration Variables](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_config_values.htm#sfdx_dev_cli_config_values "You can set configuration (config) variables for your current project or for all projects. You can set two kinds of config variables: global and local. Global config variables apply to all projects on your computer. Local config variables apply to a specific project. Local config variables override global ones when commands are run from within a Salesforce DX project directory.")

-   [Salesforce CLI Environment Variables](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_env_variables.htm#sfdx_dev_cli_env_variables "You can set environment variables to configure certain values that Salesforce CLI uses.")

-   [*Salesforce DX Developer Guide*: Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm "Salesforce DX Developer Guide: Salesforce DX Project
    Configuration - HTML (New Window)")

## Related Topics

- Configuration Variables (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_config_values.htm)
- Salesforce CLI Environment Variables (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_dev_cli_env_variables.htm)
