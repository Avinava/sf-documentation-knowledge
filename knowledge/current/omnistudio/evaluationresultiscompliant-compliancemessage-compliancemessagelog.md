---
title: "EvaluationResult(isCompliant, complianceMessage, complianceMessageLog)"
domain: omnistudio
topic: evaluationresultiscompliant-compliancemessage-compliancemessagelog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.621Z
keywords: [EvaluationResult, isCompliant, complianceMessage, complianceMessageLog, Initializes, object., Signature, Parameters]
---

# EvaluationResult(isCompliant, complianceMessage, complianceMessageLog)

> Initializes an EvaluationResult object.

### EvaluationResult(isCompliant, complianceMessage, complianceMessageLog)

Initializes an EvaluationResult object.

#### Signature

public EvaluationResult(Boolean isCompliant, String complianceMessage, String complianceMessageLog)

```

```

#### Parameters

isCompliant

Type: Boolean

Indicates whether the compliance evaluated to true or false.

complianceMessage

Type: String

Message associated with the completed evaluation. Maximum length supported for compliance message is 1024 characters.

complianceMessageLog

Type: String

Message stored in compliance logs for the evaluation done. Maximum length supported for compliance message log is 1024 characters.