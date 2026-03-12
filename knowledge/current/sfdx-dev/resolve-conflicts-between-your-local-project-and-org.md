---
title: "Resolve Conflicts Between Your Local Project and Org"
domain: sfdx-dev
topic: resolve-conflicts-between-your-local-project-and-org
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.660Z
estimatedTokens: 553
keywords: [Resolve, Conflicts, Local, Project, Org, best, practice, exist, components, moving, forward, conflict, manually, overwrite, version]
---

# Resolve Conflicts Between Your Local Project and Org

> As a best practice, if conflicts exist for components in your local project or in the
    org, resolve them before moving forward. You can resolve the conflict manually, or overwrite one
    version of a component with another. Only overwrite changes if you're certain that the new
    version is the one you want to use.

# Resolve Conflicts Between Your Local Project and Org

As a best practice, if conflicts exist for components in your local project or in the org, resolve them before moving forward. You can resolve the conflict manually, or overwrite one version of a component with another. Only overwrite changes if you're certain that the new version is the one you want to use.

Say you run project deploy preview and see conflicting changes between your local project and in the org. For example, this command output shows that WidgetClass has conflicting changes but GizmoClass is ready to be deployed.

```

```

If you try to actually deploy the source, Salesforce CLI reports the conflict again and stops the operation from completing. You see similar conflict messages when you run project retrieve preview. To successfully deploy or retrieve, first resolve the conflicts, and then overwrite either your local project or the org with the resolved file. Let’s see how this works.

## Overwrite Conflicting Changes

If you decide that the local version is correct, overwrite the conflicting change in the org by including the \--ignore-conflicts flag when you deploy. In our example, because only WidgetClass has conflicting changes, let’s first deploy just that component to get rid of the conflicts and then deploy the non-conflicting source later.

```

```

The DevSandbox org now has the same version of WidgetClass that was in your local project. When you run project deploy preview again you see no conflicting changes messages.

If, however, you decide that the version of WidgetClass in the org is the correct one, overwrite your local copy by retrieving the DevSandbox org version while ignoring conflicts.

```

```

Your local project now has the same version of WidgetClass that was in your org.

Well done, you resolved the conflict! Now run project deploy start without any special flags to finish deploying GizmoClass and any other new local source.

```

```

#### See Also

-   [*VS Code Documentation*: Detect Conflicts on Deploy](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/detect-conflicts.html "VS Code Documentation: Detect Conflicts on Deploy - HTML (New Window)")

## Code Examples

```
sf project deploy preview --target-org DevSandbox

Conflicts [1]. Run the command with the --ignore-conflicts flag to override.
 Type      Fullname    Path                                                    
 ───────── ─────────── ─────────────────────────────────────────────────────── 
 ApexClass WidgetClass force-app/main/default/classes/WidgetClass.cls-meta.xml 

No files will be deleted.

Will Deploy [1] files.
 Type      Fullname   Path                                                   
 ───────── ────────── ────────────────────────────────────────────────────── 
 ApexClass GizmoClass force-app/main/default/classes/GizmoClass.cls-meta.xml 

No files were ignored. Update your .forceignore file if you want to ignore certain files.
```

```
sf project deploy start --metadata ApexClass:WidgetClass --ignore-conflicts --target-org DevSandbox
```

```
sf project retrieve start --metadata ApexClass:WidgetClass --ignore-conflicts --target-org DevSandbox
```

```
sf project deploy start --target-org DevSandbox
Deploying v59.0 metadata to test-ikspctiorkzs@example.com using the v59.0 SOAP API.
Deploy ID: 0Af8D00000pNtEUSA0
Status: Succeeded | ████████████████████████████████████████ | 1/1 Components (Errors:0) | 0/0 Tests (Errors:0)

Deployed Source
=====================================================================================
| State   Name       Type      Path                                                   
| ─────── ────────── ───────── ────────────────────────────────────────────────────── 
| Created GizmoClass ApexClass force-app/main/default/classes/GizmoClass.cls          
| Created GizmoClass ApexClass force-app/main/default/classes/GizmoClass.cls-meta.xml
```
