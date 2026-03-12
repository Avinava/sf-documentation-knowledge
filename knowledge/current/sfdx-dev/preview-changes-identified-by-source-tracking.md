---
title: "Preview Changes Identified by Source Tracking"
domain: sfdx-dev
topic: preview-changes-identified-by-source-tracking
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.664Z
estimatedTokens: 647
keywords: [Preview, Changes, Identified, Source, Tracking, local, project, target, org, navigate, directory, want, run, commands, display]
---

# Preview Changes Identified by Source Tracking

> To see changes between your local project and target org, navigate to the project
  directory for which you want to see changes. Then run one of the preview commands, which display
  either the local changes in your project you can deploy to your org, or the org changes that you
  can retrieve.

# Preview Changes Identified by Source Tracking

To see changes between your local project and target org, navigate to the project directory for which you want to see changes. Then run one of the preview commands, which display either the local changes in your project you can deploy to your org, or the org changes that you can retrieve.

1.  In a terminal or command window, navigate to the project directory. In this example, the directory is named MyProject.

    ```

    ```

2.  To see what’s changed between your project and org, run either the project deploy preview or project retrieve preview command. Include the \--target-org flag to specify the username or alias of the scratch org or sandbox that you want to compare with your local project. In this example, the command displays the local changes that can be deployed to the sandbox with the alias DevSandbox.

    ```

    ```

    Similarly, this example displays the remote changes in the sandbox that can be retrieved back into the local project.

    ```

    ```

    The project deploy preview command accepts the \--metadata, \--source-dir, and \--manifest flags, which you can use to preview more granular deployments. This example previews a deployment of only ApexClass metadata:

    ```

    ```


This project deploy preview sample output shows that there are local changes to the WidgetClass Apex class and WidgetObject\_\_c custom object that can be deployed to the org.

```

```

This project retrieve preview sample output shows that there are remote changes to the GizmoClass Apex class and GizmoObject\_\_c custom object (and its layout) that can be retrieved from the org to the local project. The output also shows that there are no conflicts between the project and org.

```

```

The preview commands use tables of change information with three columns: Type, Fullname, and Path. Each row represents one change.

-   Type is the changed component’s metadata type. It describes what the component is, such as an Apex class or a custom object.
-   Fullname is the API name of the component.
-   Path is the location of the component in your local project. If it’s blank, the component isn’t present in your local project. When blank, it usually means that a component is present in the org but not in your local project.

If source tracking doesn’t detect any changes, then the preview commands return a statement saying No results found.

```

```

After previewing the changes in the source in your local project and the org, you’re ready to deploy or retrieve and resolve potential conflicts.

## Code Examples

```
cd /Users/joe/dx-projects/MyProject
```

```
sf project deploy preview --target-org DevSandbox
```

```
sf project retrieve preview --target-org DevSandbox
```

```
sf project deploy preview --metadata ApexClass --target-org DevSandbox
```

```
sf project deploy preview --target-org DevSandbox

No conflicts found.

No files will be deleted.

Will Deploy [2] files.
 Type         Fullname        Path                                                                           
 ──────────── ─────────────── ────────────────────────────────────────────────────────────────────────────── 
 ApexClass    WidgetClass     force-app/main/default/classes/WidgetClass.cls-meta.xml                        
 CustomObject WidgetObject__c force-app/main/default/objects/WidgetObject__c/WidgetObject__c.object-meta.xml 

No files were ignored. Update your .forceignore file if you want to ignore certain files.
```
