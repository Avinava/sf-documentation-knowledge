---
title: "SkillRequirementBuilder Class"
domain: salesforce-scheduler-developer-guide
topic: skillrequirementbuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.210Z
estimatedTokens: 484
namespace: LxScheduler
keywords: [SkillRequirementBuilder, build, instance, lxscheduler.SkillRequirement, setSkillId, skillId, setSkillLevel, skillLevel]
---

# SkillRequirementBuilder Class

> Contains methods to build an instance of the lxscheduler.SkillRequirement class.

**Namespace:** `LxScheduler`

# SkillRequirementBuilder Class

Contains methods to build an instance of the lxscheduler.SkillRequirement class.

A Builder object is obtained by invoking one of the SkillRequirementBuilder methods defined by the SkillRequirement class.

## Namespace

LxScheduler

## SkillRequirementBuilder Methods

The following are methods for SkillRequirementBuilder.

### build()

Returns an instance of the lxscheduler.SkillRequirement object.

#### Signature

public lxscheduler.SkillRequirement build()

#### Return Value

Type: [lxscheduler.SkillRequirement](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_SkillRequirement.htm#apex_class_lxscheduler_SkillRequirement "Contains information about the set of skills that are required to complete a particular task for a work type.")

### setSkillId(skillId)

Sets the skill that is required to complete a particular task for a work type. This is a required field.

#### Signature

public lxscheduler.SkillRequirementBuilder setSkillId(String skillId)

#### Parameters

skillId

Type: String

#### Return Value

Type: [lxscheduler.SkillRequirementBuilder](#apex_class_lxscheduler_SkillRequirementBuilder "Contains methods to build an instance of the lxscheduler.SkillRequirement class.")

### setSkillLevel(skillLevel)

Sets the level of the skill that is required to complete a particular task for a work type

#### Signature

public lxscheduler.SkillRequirementBuilder setSkillLevel(Double skillLevel)

#### Parameters

skillLevel

Type: Double

The skill levels can range from zero to 99.99. Depending on your business needs, you might want the skill level to reflect years of experience, certification levels, or license classes.

#### Return Value

Type: [lxscheduler.SkillRequirementBuilder](#apex_class_lxscheduler_SkillRequirementBuilder "Contains methods to build an instance of the lxscheduler.SkillRequirement class.")

## Related Topics

- lxscheduler.SkillRequirement (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/apex_class_lxscheduler_SkillRequirement.htm)
