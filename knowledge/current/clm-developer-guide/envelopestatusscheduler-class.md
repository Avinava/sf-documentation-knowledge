---
title: "EnvelopeStatusScheduler Class"
domain: clm-developer-guide
topic: envelopestatusscheduler-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.996Z
estimatedTokens: 291
keywords: [EnvelopeStatusScheduler, Executes, scheduled, Apex, job, Envelope, Status, Updates, execute, ctx]
---

# EnvelopeStatusScheduler Class

> Executes the scheduled Apex job for Envelope Status
    Updates.

# EnvelopeStatusScheduler Class

The ind\_docgen\_api.EnvelopeStatusScheduler class schedules Envelope Status updates.

## Namespace

[ind\_docgen\_api](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_namespace_ind_docgen_api.htm "The ind_docgen_api namespace provides class for scheduling Envelope Status updates.")

## Example

```

```

-   **[EnvelopeStatusScheduler Methods](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_ind_docgen_api_EnvelopeStatusScheduler.htm#apex_ind_docgen_api_EnvelopeStatusScheduler_methods)**


## EnvelopeStatusScheduler Methods

The following are methods for EnvelopeStatusScheduler.

-   **[execute(ctx)](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_ind_docgen_api_EnvelopeStatusScheduler.htm#apex_ind_docgen_api_EnvelopeStatusScheduler_execute)**
    Executes the scheduled Apex job for Envelope Status Updates.

### execute(ctx)

Executes the scheduled Apex job for Envelope Status Updates.

#### Signature

public void execute(System.SchedulableContext ctx)

#### Parameters

ctx

Type: System.SchedulableContext

Contains the job ID.

#### Return Value

Type: void

## Code Examples

```apex
ind_docgen_api.EnvelopeStatusScheduler envelopeScheduler = new ind_docgen_api.EnvelopeStatusScheduler();
System.schedule('Update Docusign Envelope Job 1', '0 0 * * * ?', envelopeScheduler);
System.schedule('Update Docusign Envelope Job 2', '0 15 * * * ?', envelopeScheduler);
System.schedule('Update Docusign Envelope Job 3', '0 30 * * * ?', envelopeScheduler);
System.schedule('Update Docusign Envelope Job 4', '0 45 * * * ?', envelopeScheduler);
```

## Related Topics

- ind_docgen_api (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_namespace_ind_docgen_api.htm)
- EnvelopeStatusScheduler Methods (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_ind_docgen_api_EnvelopeStatusScheduler.htm)
- execute(ctx) (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/apex_class_ind_docgen_api_EnvelopeStatusScheduler.htm)
