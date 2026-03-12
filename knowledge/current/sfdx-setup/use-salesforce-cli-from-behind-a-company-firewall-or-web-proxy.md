---
title: "Use Salesforce CLI from Behind a Company Firewall or Web Proxy"
domain: sfdx-setup
topic: use-salesforce-cli-from-behind-a-company-firewall-or-web-proxy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.169Z
estimatedTokens: 561
keywords: [Salesforce, CLI, Behind, Company, Firewall, Web, Proxy, install, computer, that’s, sometimes, receive, error, messages, case]
---

# Use Salesforce CLI from Behind a Company Firewall or Web Proxy

> If you install or update Salesforce CLI on a computer that’s behind a company firewall or
    web proxy, you sometimes receive error messages. In this case, you must further configure your
    system.

# Use Salesforce CLI from Behind a Company Firewall or Web Proxy

If you install or update Salesforce CLI on a computer that’s behind a company firewall or web proxy, you sometimes receive error messages. In this case, you must further configure your system.

You get this type of error when you run a command after installing Salesforce CLI behind a firewall or web proxy. This error is from a Linux computer, but Windows and macOS users sometimes see a similar error.

```

```

To address this issue, run these commands from your terminal or Windows command prompt, replacing username:pwd with your web proxy username and password. If your proxy doesn’t require these values, omit them. Also replace proxy.company.com:8080 with the URL and port of your company proxy.

```

```

Then set the HTTP\_PROXY or HTTPS\_PROXY environment variable to the full URL of the proxy. For example, on UNIX:

```

```

```

```

On a Windows machine:

```

```

```

```

## If You Still See an Error

**Your Proxy Requires an Extra Certificate Authority**

If you set the proxy environment variable, and you still see error messages, it’s possible that your proxy requires an extra certificate authority (CA). Ask your IT department where to find or download the certificates.

Set this environment variable to point to the CA file: [NODE\_EXTRA\_CA\_CERTS](https://nodejs.org/api/cli.html#cli_node_extra_ca_certs_file "HTML (New Window)").

**Your Corporate Network Is Blocking Salesforce Hosts**

It’s possible that your corporate network is blocking the Salesforce hosts for updating or installing Salesforce CLI. Contact your IT department ﻿add these URLs to your allowlist:

-   https://developer.salesforce.com/media/salesforce-cli
-   https://registry.npmjs.org

As written, these URLs aren't meant to actually go anywhere. Rather, they act as prefixes for the bucket of Salesforce CLI artifacts that you can dowload, such as [installation TAR files](atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_linux "Salesforce CLI distributes TAR files that you can install on all supported operating systems."), or install from the [npm registry](https://www.npmjs.com/package/@salesforce/cli?activeTab=versions).

## Code Examples

```
@salesforce/cli: Updating CLI... !
 ▸  'ECONNRESET': tunneling socket could not be established, cause=connect EHOSTUNREACH 0.0.23.221:8080 - Local (10.126.148.39:53107)
```

```
npm config set https-proxy https://username:pwd@proxy.company.com:8080
npm config set proxy https://username:pwd@proxy.company.com:8080
```

```
export HTTP_PROXY=https://username:pwd@proxy.company.com:8080
```

```
export HTTPS_PROXY=https://username:pwd@proxy.company.com:8080
```

```
set HTTP_PROXY=https://username:pwd@proxy.company.com:8080
```

## Related Topics

- installation TAR files (atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)
