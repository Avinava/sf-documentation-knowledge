---
title: "Resolve Common Authorization Errors"
domain: sfdx-dev
topic: resolve-common-authorization-errors
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.701Z
estimatedTokens: 5047
keywords: [Resolve, Common, Authorization, Errors, sometimes, occur, run, either, org, login, web, jwt, log, authorize, they]
---

# Resolve Common Authorization Errors

> Errors sometimes occur when you run either org login
      web or org login jwt to log into and authorize
    an org. Here are some of the more common errors, what they mean, and what you can do to try to
    fix them.

# Resolve Common Authorization Errors

Errors sometimes occur when you run either org login web or org login jwt to log into and authorize an org. Here are some of the more common errors, what they mean, and what you can do to try to fix them.

Before you begin, update to the most recent version of Salesforce CLI and check if you still see the issue. Salesforce releases a new CLI version every week.

If you installed Salesforce CLI using the installers, run this command.

```

```

If you installed using npm, run this command.

```

```

For each error, we provide this information:

-   **Error text**: Literal text of the error.
-   **Error name**: The name of the error, which is also displayed in the error message.
-   **What it likely means**: While it’s often difficult to determine precisely what happened in your environment, we make a best guess about what it could be.
-   **Recommended fixes**: One or more things you can try to fix the problem, with the one most likely to work listed first.
-   **NOT RECOMMENDED**: Actions you should never take.

## org login web Errors

These errors can occur when you run org login web to authorize an org by logging into it using a web browser.

### Error: authentication failure

-   **Error text**: Invalid client credentials. Verify the OAuth client secret and ID. Error authenticating with auth code due to: invalid\_grant::authentication failure
-   **Error name**: AuthCodeExchangeError
-   **What it likely means**: You don’t have permission to access the org. The problem can stem from an issue with the connected app, settings, org settings, or with a customization, such as a guest flow that must run before authorization.
-   **Recommended fixes**:
    -   Use the most recent version of Salesforce CLI and its core plugins. To verify, run the doctor command.
    -   Make sure that the org is configured to allow API access, and that you specifically have API access to the org. Both settings are required to run any CLI command that involves an org.
    -   Use the correct instance URL when logging in to the org, and make sure that it’s in the correct enhanced My Domain format. To find your org's instance URL, log into it, go to the Setup > Company Settings > My Domain page, and see **Current My Domain URL**. See [My Domain Login and Application URL Formats with Enhanced Domains](https://help.salesforce.com/s/articleView?id=products.domain_name_url_formats.htm&type=5&language=en_US).
    -   Check that your connected app settings are correct, especially if you created your own rather than use the default Salesforce CLI connected app. See [Create a Connected App in Your Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm).

### Error: unable to get local issuer certificate

-   **Error text**: Invalid client credentials. Verify the OAuth client secret and ID. Error authenticating with auth code due to: request to https://test.salesforce.com//services/oauth2/token failed, reason: unable to get local issuer certificate
-   **Error name**: AuthCodeExchangeError or AuthCodeUsernameRetrievalError
-   **What it likely means**: Node.js can’t find the certificate that it uses for HTTPS traffic in the certificate store on the local computer. The problem can be related to a proxy, firewall, or VPN that’s between the client and server. For example, the proxy could be configured for "deep inspection" in which the proxy swaps the SSL certificate with its own certificate to allow it to inspect traffic, and the proxy certificate is causing the error.
-   **Recommended fixes**:
    -   Set the NODE\_EXTRA\_CA\_CERTS environment variable to include expected certificates.
    -   If using a proxy, make sure that the HTTPS\_PROXY and HTTP\_PROXY environment variables are set properly.
    -   Check the proxy settings for specific certificate behavior.
-   **NOT RECOMMENDED**:
    -   Don’t set NODE\_TLS\_REJECT\_UNAUTHORIZED=0, which disables certificate verification for Salesforce CLI requests and allows man-in-the-middle attacks.
    -   Don’t set the strict-ssl=false npm configuration setting. This setting allows npm to use HTTP rather than HTTPS and allows unencrypted traffic and man-in-the-middle attacks.

### Error: grant type not supported

-   **Error text**: Invalid client credentials. Verify the OAuth client secret and ID. Error authenticating with auth code due to: unsupported\_grant\_type::grant type not supported
-   **Error name**: AuthCodeExchangeError
-   **What it likely means**: The OAuth 2.0 endpoint doesn’t support the grant\_type value passed to it. If you're using the default Salesforce CLI connected app, this error usually means that you're using the wrong instance URL to log in. If you’re using a different connected app, check to see if it’s configured correctly for the grant types used by the CLI.
-   **Recommended fixes**:
    -   Use the correct instance URL when logging in to the org, and make sure that it’s in the correct enhanced My Domain format. To find your org's instance URL, log into it, go to the Setup > Company Settings > My Domain page, and see **Current My Domain URL**. See [My Domain Login and Application URL Formats with Enhanced Domains](https://help.salesforce.com/s/articleView?id=products.domain_name_url_formats.htm&type=5&language=en_US).
    -   Don't use a Lightning URL for your instance URL. For example, use https://MyDomainName.my.salesforce.com and not https://MyDomainName.lightning.force.com.
    -   Make sure you always use https, and not http, for all URLs.
    -   Make sure that the org is configured to allow API access, and that you specifically have API access to the org. Both settings are required to run any CLI command that involves an org.
    -   Check that the clock on your local computer is accurate. If too much time (over 3 minutes) passes between the auth code generation and the request for an access token, an error like this can occur.
    -   If you're using a custom connected app rather than the default Salesforce CLI one, check that the settings are correct. See [Create a Connected App in Your Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm).

### Error: ECONNRESET

-   **Error text**: Invalid client credentials. Verify the OAuth client secret and ID. Error authenticating with auth code due to: request to https://test.salesforce.com//services/oauth2/token failed, reason: read ECONNRESET
-   **Error name**: AuthCodeExchangeError
-   **What it likely means**: Your org reset the connection.
-   **Recommended fixes**:
    -   Rerun the org login web command. This error is sometimes temporary and simply reauthorizing the org fixes it.
    -   Use the most recent version of Salesforce CLI and its core plugins. To verify, run the doctor command.
    -   Use the correct instance URL when logging in to the org, and make sure that it’s in the correct enhanced My Domain format. To find your org's instance URL, log into it, go to the Setup > Company Settings > My Domain page, and see **Current My Domain URL**. See [My Domain Login and Application URL Formats with Enhanced Domains](https://help.salesforce.com/s/articleView?id=products.domain_name_url_formats.htm&type=5&language=en_US).

### Error: ETIMEDOUT

-   **Error text**: Invalid client credentials. Verify the OAuth client secret and ID. Error authenticating with auth code due to: request to https://test.salesforce.com//services/oauth2/token failed, reason: connect ETIMEDOUT
-   **Error name**: AuthCodeExchangeError
-   **What it likely means**: The connection to your org timed out.
-   **Recommended fixes**:
    -   Rerun the org login web command. This error is sometimes temporary and simply reauthorizing the org fixes it.
    -   Use the most recent version of Salesforce CLI and its core plugins. To verify, run the doctor command.
    -   Use the correct instance URL when logging in to the org, and make sure that it’s in the correct enhanced My Domain format. To find your org's instance URL, log into it, go to the Setup > Company Settings > My Domain page, and see **Current My Domain URL**. See [My Domain Login and Application URL Formats with Enhanced Domains](https://help.salesforce.com/s/articleView?id=products.domain_name_url_formats.htm&type=5&language=en_US).

### Error: self-signed certificate in certificate chain

-   **Error text**: Invalid client credentials. Verify the OAuth client secret and ID. Error authenticating with auth code due to: request to https://login.salesforce.com//services/oauth2/token failed, reason: self-signed certificate in certificate chain
-   **Error name**: AuthCodeExchangeError or AuthCodeUsernameRetrievalError
-   **What it likely means**: During certificate verification, Node.js encountered a certificate that can't be chained to a root certificate in the local trust store, or the root certificate is not locally trusted. The problem can be related to a proxy, firewall, or VPN that’s between the client and server. For example, the proxy could be configured for "deep inspection" in which the proxy swaps the SSL certificate with its own certificate to allow it to inspect traffic, and the proxy certificate is causing the error.
-   **Recommended fixes**:
    -   Don't trust any unknown certificates.
    -   Make sure all certificates are properly created.
    -   Make sure that the certificates you're using are trusted within the trust store or added to the NODE\_EXTRA\_CA\_CERTS environment variable.
    -   If using a proxy, make sure that the HTTPS\_PROXY and HTTP\_PROXY environment variables are set properly.
    -   Check the proxy settings for specific certificate behavior.
-   **NOT RECOMMENDED**:
    -   Don’t set NODE\_TLS\_REJECT\_UNAUTHORIZED=0, which disables certificate verification for Salesforce CLI requests and allows man-in-the-middle attacks.
    -   Don’t set the strict-ssl=false npm configuration setting. This setting allows npm to use HTTP rather than HTTPS and allows unencrypted traffic and man-in-the-middle attacks.

### Error: IP restricted

-   **Error text**: Invalid client credentials. Verify the OAuth client secret and ID. Error authenticating with auth code due to: ip restricted
-   **Error name**: AuthCodeExchangeError
-   **What it likely means**: The org has IP restrictions enabled. If Salesforce CLI attempts to log in and authorize an org from an IP address that isn't allowed, then this error is thrown.
-   **Recommended fix**: If the IP address that Salesforce CLI uses is known and allowed, update your org's [Trusted IP Ranges](https://help.salesforce.com/s/articleView?id=xcloud.security_networkaccess.htm&type=5&language=en_US).

### Error: ENOTFOUND

-   **Error text**: Invalid client credentials. Verify the OAuth client secret and ID. Error authenticating with auth code due to: request to https://login.salesforce.com/services/oauth2/token failed, reason: getaddrinfo ENOTFOUND login.salesforce.com
-   **Error name**: AuthCodeExchangeError or AuthCodeUsernameRetrievalError
-   **What it likely means**: The domain name couldn't be resolved within the time limit. The error could be caused by an incorrect instance URL, a DNS issue, or a proxy issue.
-   **Recommended fixes**:
    -   Use the most recent version of Salesforce CLI and its core plugins. To verify, run the doctor command.
    -   Use the correct instance URL when logging in to the org, and make sure that it’s in the correct enhanced My Domain format. To find your org's instance URL, log into it, go to the Setup > Company Settings > My Domain page, and see **Current My Domain URL**. See [My Domain Login and Application URL Formats with Enhanced Domains](https://help.salesforce.com/s/articleView?id=products.domain_name_url_formats.htm&type=5&language=en_US).
    -   Don't use a Lightning URL for your instance URL. For example, use https://MyDomainName.my.salesforce.com and not https://MyDomainName.lightning.force.com.
    -   Make sure you can use a command-line tool, such as nslookup, to resolve the domain manually from the same computer from which you're running the org login web command.
    -   If using a proxy, make sure that the HTTPS\_PROXY and HTTP\_PROXY environment variables are set properly.

## org login jwt Errors

These errors can occur when you run org login jwt to authorize an org by logging into it with the JWT flow.

### Error: user hasn't approved this consumer

-   **Error text**: We encountered a JSON web token error, which is likely not an issue with Salesforce CLI. Here’s the error: Error authenticating with JWT. Errors encountered: user hasn't approved this consumer
-   **Error name**: JwtGrantError
-   **What it likely means**: Your connected app settings aren't configured correctly or a new connected app hasn't finished replicating.
-   **Recommended fixes**:
    -   Use the most recent version of Salesforce CLI and its core plugins. To verify, run the doctor command.
    -   If you recently created the connected app, wait a few minutes for it to finish replicating and then try to authorize again.
    -   Check that your connected app settings are correct, especially if you created your own rather than used the default Salesforce CLI connected app. See [Create a Connected App in Your Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm). In particular, on the main page where you manage the connected app:
        -   Set **Permitted Users** to Admin approved users are pre-authorized.
        -   Add the profile of the user you want to authorize by clicking **Manage Profiles**.
    -   Use the correct instance URL when logging in to the org, and make sure that it’s in the correct enhanced My Domain format. You can specify the instance URL either with the \--instance-url command flag or the SF\_AUDIENCE\_URL environment variable, although SF\_AUDIENCE\_URL isn't usually needed for production environments. To find your org's instance URL, log into it, go to the Setup > Company Settings > My Domain page, and see **Current My Domain URL**. See [My Domain Login and Application URL Formats with Enhanced Domains](https://help.salesforce.com/s/articleView?id=products.domain_name_url_formats.htm&type=5&language=en_US).
    -   Don't use a Lightning URL for your instance URL. For example, use https://MyDomainName.my.salesforce.com and not https://MyDomainName.lightning.force.com.

### Error: client identifier invalid

-   **Error text**: We encountered a JSON web token error, which is likely not an issue with Salesforce CLI. Here’s the error: Error authenticating with JWT. Errors encountered: client identifier invalid
-   **Error name**: JwtGrantError
-   **What it likely means**: The OAuth client ID (also called consumer key) that you passed to the command's \--client-id flag doesn’t match the one specified in the connected app.
-   **Recommended fixes**:
    -   Use the most recent version of Salesforce CLI and its core plugins. To verify, run the doctor command.
    -   Make sure that the client ID and client secret that are configured in your connected app settings match the values you passed to the org login jwt command.
    -   Use the correct instance URL when logging in to the org, and make sure that it’s in the correct enhanced My Domain format. You can specify the instance URL either with the \--instance-url command flag or the SF\_AUDIENCE\_URL environment variable, although SF\_AUDIENCE\_URL isn't usually needed for production environments. To find your org's instance URL, log into it, go to the Setup > Company Settings > My Domain page, and see **Current My Domain URL**. See [My Domain Login and Application URL Formats with Enhanced Domains](https://help.salesforce.com/s/articleView?id=products.domain_name_url_formats.htm&type=5&language=en_US).
    -   Don't use a Lightning URL for your instance URL. For example, use https://MyDomainName.my.salesforce.com and not https://MyDomainName.lightning.force.com.

### Error: ENOENT

-   **Error text**: We encountered a JSON web token error, which is likely not an issue with Salesforce CLI. Here’s the error: ENOENT: no such file or directory, open '/workspace/my-repository/server.key'
-   **Error name**: JwtGrantError
-   **What it likely means**: The private JWT key file that you specified with the \--jwt-key-file flag of the org login jwt either doesn't exist or it's in a different location. This issue typically occurs in CI (continuous integration) environments where the private JWT key file is accessible for only specific actions.
-   **Recommended fix**: Make sure that the private JWT key file exists in the specified location and is accessible by all Salesforce CLI commands that interact with an org, because these commands must authenticate before they can send API requests.

### Error: HTML response

-   **Error text**: Data Not Available webpage. “The data you were trying to access could not be found. It may be due to another user deleting the data or a system error. If you know the data is not deleted but cannot access it, please look at our support page”
-   **Error name**: JwtGrantError
-   **What it likely means**: The org is temporarily down for maintenance or isn't yet ready for API requests.
-   **Recommended fixes**: This error is probably temporary. Wait a few minutes and retry. If this error happens regularly, contact Salesforce Customer Support.

### Error: audience is invalid

-   **Error text**: We encountered a JSON web token error, which is likely not an issue with Salesforce CLI. Here’s the error: Error authenticating with JWT. Errors encountered: audience is invalid \[audience=https://login.salesforce.com login=https://test.salesforce.com/\]
-   **Error name**: JwtGrantError
-   **What it likely means**: This error usually occurs with other errors such as user hasn't approved this consumer. This error can also indicate that you used the incorrect instance URL with the command.
-   **Recommended fixes**:
    -   Use the most recent version of Salesforce CLI and its core plugins. To verify, run the doctor command.
    -   Use the correct instance URL when logging in to the org, and make sure that it’s in the correct enhanced My Domain format. You can specify the instance URL either with the \--instance-url command flag or the SF\_AUDIENCE\_URL environment variable, although SF\_AUDIENCE\_URL isn't usually needed for production environments. To find your org's instance URL, log into it, go to the Setup > Company Settings > My Domain page, and see **Current My Domain URL**. See [My Domain Login and Application URL Formats with Enhanced Domains](https://help.salesforce.com/s/articleView?id=products.domain_name_url_formats.htm&type=5&language=en_US).
    -   Don't use a Lightning URL for your instance URL. For example, use https://MyDomainName.my.salesforce.com and not https://MyDomainName.lightning.force.com.
    -   If using a proxy, make sure that the HTTPS\_PROXY and HTTP\_PROXY environment variables are set properly.
    -   If you see additional errors, check this topic for troubleshooting information about those errors.

#### See Also

-   [Authorize an Org Using a Browser](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm "Authorize an Org Using a Browser - HTML (New Window)")

-   [Authorize an Org Using the JWT Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm "Authorize an Org Using the JWT Flow - HTML (New Window)")

-   [*Salesforce Help*: OAuth 2.0 Web Server Flow for Web App Integration](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_oauth_web_server_flow.htm&type=5&language=en_US "Salesforce Help: OAuth 2.0 Web Server Flow for Web App Integration - HTML (New Window)")

-   [*Salesforce Help*: Set Trusted IP Ranges for Your Organization](https://help.salesforce.com/s/articleView?id=xcloud.security_networkaccess.htm&type=5&language=en_US "Salesforce Help: Set Trusted IP Ranges for Your Organization - HTML (New Window)")

## Code Examples

```apex
npm install --global @salesforce/cli
```
