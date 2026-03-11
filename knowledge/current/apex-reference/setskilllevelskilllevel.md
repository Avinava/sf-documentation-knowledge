---
title: "setSkillLevel(skillLevel)"
domain: apex-reference
topic: setskilllevelskilllevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.591Z
keywords: [setSkillLevel, skillLevel, Sets, level, skill, required, complete, particular, task, work, type, Signature, Parameters, Return, Value]
---

# setSkillLevel(skillLevel)

> Sets the level of the skill that is required to complete a particular
      task for a work type

### setSkillLevel(skillLevel)

Sets the level of the skill that is required to complete a particular task for a work type

#### Signature

public lxscheduler.SkillRequirementBuilder setSkillLevel(Double skillLevel)

#### Parameters

skillLevel

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The skill levels can range from zero to 99.99. Depending on your business needs, you might want the skill level to reflect years of experience, certification levels, or license classes.

#### Return Value

Type: [lxscheduler.SkillRequirementBuilder](#apex_class_lxscheduler_SkillRequirementBuilder "Contains methods to build an instance of the lxscheduler.SkillRequirement class.")