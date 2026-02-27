# <PROJECT_NAME> Product Requirements Document

---
- **Status:** <SPECLET / BRIEF / SPEC / FULL / IMPACT_REVIEW>
- **Owner:** <NAME>
- **Last Updated:** <DATE (YYYY-MM-DD)>
- **Version:** <X.Y>
- **Related Docs:** <LINKS TO NOTION, LINEAR, ETC.>
---

## Executive Summary

<BRIEF PARAGRAPH STARTING WITH CORE RECOMMENDATION/THESIS. What are we building, why now, and what's the expected outcome?>

<!-- Hint: This should be 2-3 sentences maximum. Answer first - don't bury the lead. Executive summary alone should tell someone the core idea. -->

---

## Problem Statement

### User Pain
<DESCRIBE THE USER'S PSYCHOLOGICAL PAIN OR OPERATIONAL FRICTION>

### Quantitative Evidence
- <METRIC 1>: <VALUE> (e.g., "40% of users abandon checkout due to...")
- <METRIC 2>: <VALUE>
- <METRIC 3>: <VALUE>

### Affected Segments
- <SEGMENT A>: <IMPACT DESCRIPTION>
- <SEGMENT B>: <IMPACT DESCRIPTION>

> ⚠️ **Pitfall:** Don't define problem as "lack of feature X" — focus on the underlying pain. The solution should not be baked into the problem statement.

---

## Value Proposition

**We help <SPECIFIC TARGET USER> to <ACCOMPLISH SPECIFIC GOAL> by <OUR UNIQUE APPROACH/TECHNOLOGY>.**

### Differentiation
- How is this 10x better than status quo? <ANSWER>
- Why will entrenched users switch? <ANSWER>

> ⚠️ **Pitfall:** Don't just list capabilities—connect each to user benefit. Every feature must tie back to the value prop.

---

## Opportunity Assessment

### Market Size
- TAM: $<TOTAL ADDRESSABLE MARKET>
- SAM: $<SERVICEABLE ADDRESSABLE MARKET>
- SOM: $<SERVICEABLE OBTAINABLE MARKET>

### Qualitative Evidence
- <USER RESEARCH QUOTES/FINDINGS>
- <COMPETITOR ANALYSIS GAPS>
- <MARKET TREND DATA>

---

## Hypothesis & Strategy

### Hypothesis
If we <SOLUTION>, then <EXPECTED OUTCOME>, because <RATIONALE>.

### Strategic Approach
- <KEY STRATEGIC PILLAR 1>
- <KEY STRATEGIC PILLAR 2>
- <KEY STRATEGIC PILLAR 3>

---

## Non-Goals (Out of Scope)

The following are explicitly **NOT** part of this release:

- <FEATURE X>: <WILL BE ADDRESSED IN PHASE 2 / NOT RELEVANT / OUT OF TECHNICAL SCOPE>
- <FEATURE Y>: <WILL BE ADDRESSED IN PHASE 2 / NOT RELEVANT / OUT OF TECHNICAL SCOPE>
- <FEATURE Z>: <WILL BE ADDRESSED IN PHASE 2 / NOT RELEVANT / OUT OF TECHNICAL SCOPE>

### Rabbit Holes (Shape Up)
- <DETAILED AREA TO AVOID>: <WHY>
- <DETAILED AREA TO AVOID>: <WHY>

> ⚠️ **Pitfall:** Ambiguity leads to scope creep. Be explicit about what you're NOT doing.

---

## Success Metrics

### Primary Metrics
| Metric | Target | Measurement Method | Timeframe |
|--------|--------|-------------------|-----------|
| <METRIC 1> | <SPECIFIC VALUE/THRESHOLD> | <HOW MEASURED> | <X DAYS/WEEKS> |
| <METRIC 2> | <SPECIFIC VALUE/THRESHOLD> | <HOW MEASURED> | <X DAYS/WEEKS> |

### Non-Failure Metrics (Guardrails)
| Metric | Minimum Threshold |
|--------|-------------------|
| <METRIC 1> | <VALUE> |
| <METRIC 2> | <VALUE> |

### Telemetry Requirements
- <INSTRUMENTATION NEEDED FOR METRIC 1>
- <INSTRUMENTATION NEEDED FOR METRIC 2>

> ⚠️ **Pitfall:** Texas Sharpshooter Fallacy—vague goals allow painting bullseye after the fact. Set specific thresholds upfront.

---

## Organizational KPI Impact

This project aims to move the following organizational needles:

- <KPI 1>: Current <X> → Target <Y>
- <KPI 2>: Current <X> → Target <Y>
- <KPI 3>: Current <X> → Target <Y>

---

## Functional Requirements

<!-- Group by user journey: Onboarding → Core Usage → Edge Cases → Offboarding -->

### Onboarding
- **FR-1:** The system must <BEHAVIORAL REQUIREMENT> (e.g., "authenticate via SSO within 500ms")
- **FR-2:** The system must <BEHAVIORAL REQUIREMENT>
  - Acceptance: <HOW WE VERIFY>

### Core User Journey
- **FR-3:** The system must <BEHAVIORAL REQUIREMENT>
- **FR-4:** The system must <BEHAVIORAL REQUIREMENT>
  - Acceptance: <HOW WE VERIFY>
  - Priority: <REQUIRED / NICE-TO-HAVE>

### Edge Cases & Errors
- **FR-5:** The system must handle <EDGE CASE> by <BEHAVIOR>
- **FR-6:** When <ERROR CONDITION>, system must <BEHAVIOR>

### Offboarding / Cleanup
- **FR-7:** The system must <BEHAVIOR FOR ACCOUNT DELETION/DATA RETENTION>

> ⚠️ **Pitfall:** Don't specify aesthetics ("blue button top right")—focus on behavioral outcomes. What must the system do, not how it should look.

---

## Technical Approach

### Architecture Implications
- <DATABASE CHANGES REQUIRED>
- <API ENDPOINTS NEEDED>
- <THIRD-PARTY INTEGRATIONS>
- <INFRASTRUCTURE CHANGES>

### Constraints
- **Performance:** <E.G., "<100MS LATENCY FOR 95TH PERCENTILE">
- **Compatibility:** <BROWSER/DEVICE/PLATFORM REQUIREMENTS>
- **Security:** <COMPLIENCY/ENCRYPTION REQUIREMENTS>

### Technical Risks
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| <RISK> | <HIGH/MED/LOW> | <HIGH/MED/LOW> | <PLAN> |

---

## Risks & Assumptions

### Key Assumptions
- <ASSUMPTION 1>: <VALIDATION METHOD>
- <ASSUMPTION 2>: <VALIDATION METHOD>

### Systemic Risks
| Risk | Likelihood | Impact | Mitigation Strategy |
|------|-----------|--------|---------------------|
| <RISK> | <HIGH/MED/LOW> | <HIGH/MED/LOW> | <CONTINGENCY PLAN> |
| <RISK> | <HIGH/MED/LOW> | <HIGH/MED/LOW> | <CONTINGENCY PLAN> |

### False Assumption Pressure-Test Plan

How we will validate/disprove assumptions before full build:
- <EXPERIMENT 1>
- <EXPERIMENT 2>

---

## Operational Readiness Checklist

### Launch Activities
- [ ] Legal compliance review
- [ ] Marketing assets created (landing page, email, social)
- [ ] Customer support documentation written
- [ ] Sales enablement materials prepared
- [ ] Customer communication drafted

### Support Readiness
- [ ] Support team trained
- [ ] FAQ/KB articles published
- [ ] Escalation paths defined

### Internal Enablement
- [ ] Internal announcement scheduled
- [ ] Training sessions scheduled
- [ ] Success stories/case studies planned

> ⚠️ **Pitfall:** Software deployment ≠ product launch. Don't forget GTM and internal enablement.

---

## Decision Journal

| Date | Decision | Rationale | Decision Maker | Alternatives Considered |
|------|----------|-----------|----------------|------------------------|
| <DATE> | <WHAT WE DECIDED> | <WHY WE CHOSE THIS> | <WHO> | <OPTIONS REJECTED AND WHY> |
| <DATE> | <WHAT WE DECIDED> | <WHY WE CHOSE THIS> | <WHO> | <OPTIONS REJECTED AND WHY> |

### Strategic Direction Log
- <DATE>: Explored <APPROACH A> → rejected because <REASON>
- <DATE>: Explored <APPROACH B> → chosen because <REASON>

> ⚠️ **Pitfall:** Relying on oral tradition causes circular arguments with new stakeholders. Document the "why" as you go.

---

## Launch Strategy

### Phased Rollout
- **Alpha:** <WHO, WHAT, HOW LONG>
- **Beta:** <WHO, WHAT, HOW LONG>
- **GA:** <WHO, WHAT, TIMING>

### Rollback Plan
- <CONDITION THAT TRIGGERS ROLLBACK>
- <STEPS TO ROLLBACK>
- <POST-MORTEM PROCESS>

### Rollout Metrics
- <METRIC TO MONITOR DURING ROLLOUT>
- <ALERT THRESHOLDS>

---

## Appendix

### Related Documents
- <LINK TO MASTER NOTION PRD>
- <LINK TO LINEAR PROJECT>
- <LINK TO DESIGN FILES>
- <LINK TO USER RESEARCH>

### Telemetry Dashboards
- <LIVE DASHBOARD LINK>

### User Personas
- <PERSONA A>: <KEY TRAITS>
- <PERSONA B>: <KEY TRAITS>

### Competitive Analysis
- <COMPETITOR>: <WHAT THEY DO, OUR DIFFERENTIATION>

---

## Impact Review

<!-- Fill this section after GA to close the build-test-learn loop -->

### Results vs. Hypothesis
| Metric | Hypothesis | Actual | Delta | Pass/Fail |
|--------|-----------|--------|-------|-----------|
| <METRIC 1> | <TARGET> | <ACTUAL> | <+/- > | <✅ / ❌> |
| <METRIC 2> | <TARGET> | <ACTUAL> | <+/- > | <✅ / ❌> |

### Key Learnings
- <WHAT WORKED WELL>
- <WHAT DIDN'T WORK>
- <UNEXPECTED OUTCOMES>

### Retrospective Lessons
- <WHAT WOULD WE DO DIFFERENTLY>
- <WHAT SHOULD APPLY TO FUTURE PROJECTS>
