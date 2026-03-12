---
title: "How Does an Uninstall Script Work?"
domain: pkg1-dev
topic: how-does-an-uninstall-script-work
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.670Z
estimatedTokens: 186
keywords: [How, Uninstall, Script, Work, Apex, implements, UninstallHandler, onUninstall, actions, performed]
---

# How Does an Uninstall Script Work?

> An uninstall script is an Apex class that implements the UninstallHandler interface. This interface has a single method called onUninstall that specifies the actions to be performed on
    uninstall.

# How Does an Uninstall Script Work?

An uninstall script is an Apex class that implements the UninstallHandler interface. This interface has a single method called onUninstall that specifies the actions to be performed on uninstall.

```

```

The onUninstall method takes a context object as its argument, which provides the following information.

-   The org ID of the organization in which the uninstall takes place.
-   The user ID of the user who initiated the uninstall.

The context argument is an object whose type is the UninstallContext interface. This interface is automatically implemented by the system. The following definition of the UninstallContext interface shows the methods you can call on the context argument.

```

```

## Code Examples

```apex
global interface UninstallHandler {
  void onUninstall(UninstallContext context)
}
```

```apex
global interface UninstallContext { 
  ID organizationId();
  ID uninstallerId();
}
```
