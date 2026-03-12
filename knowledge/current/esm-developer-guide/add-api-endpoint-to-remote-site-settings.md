---
title: "Add API Endpoint to Remote Site Settings"
domain: esm-developer-guide
topic: add-api-endpoint-to-remote-site-settings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:26.847Z
estimatedTokens: 176
keywords: [Add, API, Endpoint, Remote, Site, Settings, ESM_checkServiceQualification, ESM_checkAddressValidation, base, URL, TMF]
---

# Add API Endpoint to Remote Site Settings

> For ESM_checkServiceQualification API and ESM_checkAddressValidation API, you must add the base URL of your TMF API endpoint to remote site settings.

# Add API Endpoint to Remote Site Settings

For ESM\_checkServiceQualification API and ESM\_checkAddressValidation API, you must add the base URL of your TMF API endpoint to remote site settings.

For more information about Remote Site Settings, see [Configure Remote Site Settings](https://help.salesforce.com/s/articleView?id=xcloud.configuring_remoteproxy.htm&type=5&language=en_US).

1.  In your Enterprise Sales Management org, go to Settings and click Setup.
2.  In Quick Find, enter and click Remote Site Settings.
3.  Click New Remote Site.
4.  Enter the Remote Site Name.
5.  Enter the URL in the Remote Site URL. For example:

    ```

    ```

6.  Select the Active checkbox.
7.  Click Save.

## Code Examples

```
http://demo8317683.mockable.io/
```
