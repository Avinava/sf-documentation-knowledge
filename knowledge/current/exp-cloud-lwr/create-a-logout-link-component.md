---
title: "Create a Logout Link Component"
domain: exp-cloud-lwr
topic: create-a-logout-link-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.510Z
estimatedTokens: 269
keywords: [Logout, Link, Component, log, users, custom]
---

# Create a Logout Link Component

> To log out your users, you can create a custom logout link component.

# Create a Logout Link Component

To log out your users, you can create a custom logout link component.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

See examples for a logout link and profile menu in codeSamples/salesforceScopedModules/force-app/main/default/ in the [code sample files](atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm#code_sample).

To log out your users, redirect them to the \[/sitePrefix\]/secur/logout.jsp path where \[/sitePrefix\] is your site’s base path (without the /s). If your site doesn’t use a prefix, use an empty string.

Here’s an example of a component that only displays the logout link when a user is authenticated.

```

```

```

```

Alternatively, you can make calls to the provided system Apex classes to get the login and logout links.

```

```

By default, users are redirected to the login page after logging out. You can configure the logout page URL in Experience Workspaces under **Administration** | **Login & Registration** | **Logout Page URL**.

## Code Examples

```
<template>
    <template if:false={isGuest}>
        <a href={logoutLink}>Logout</a>
    </template>
</template>
```

```
import { LightningElement, api } from "lwc";
import isGuest from "@salesforce/user/isGuest";
import basePath from "@salesforce/community/basePath";

export default class Logout extends LightningElement {

    get isGuest() {
        return isGuest;
    }

    get logoutLink() {
        const sitePrefix = basePath.replace("/", "");
        return '/${sitePrefix}/secur/logout.jsp';
    }
}
```

```
import getLogoutUrl from '@salesforce/apex/applauncher.IdentityHeaderController.getLogoutUrl';
import getLoginUrl from '@salesforce/apex/system.Network.getLoginUrl';
```

## Related Topics

- code sample files (atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/intro_resources.htm)
