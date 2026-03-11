---
title: "Data Access Control"
domain: apex-guide
topic: data-access-control
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:48.198Z
keywords: [Data, Access, Control]
---

# Data Access Control

# Data Access Control

The Lightning Platform makes extensive use of data sharing rules. Each object has permissions and can have sharing settings that users can read, create, edit, and delete. These settings are enforced when using all standard controllers.

When using an Apex class, the built-in user permissions and field-level security restrictions aren’t respected during execution. The default behavior is that an Apex class can read and update all data. Because these rules aren’t enforced, developers who use Apex must avoid inadvertently exposing sensitive data that’s normally hidden behind user permissions, field-level security, or defaults. For example, consider this Apex pseudo-code.

```

```

In this case, all contact records are searched, even if the user currently logged in doesn’t have permission to view these records. The solution is to use the qualifying keywords with sharing when declaring the class:

```

```

The with sharing keyword directs the platform to use the security sharing permissions of the user currently logged in, rather than granting full access to all records.