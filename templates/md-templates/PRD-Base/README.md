# PRD Template

A comprehensive Product Requirements Document (PRD) template based on industry best practices from top-tier organizations like Amazon, Stripe, Figma, and Airbnb.

## Quick Start

1. **Copy the template** to your project directory
2. **Replace all `<PLACEHOLDER>` variables** with your specific project information
3. **Fill in sections progressively** based on your PRD lifecycle stage (see below)

The template uses angle brackets `<LIKE_THIS>` to indicate where you need to provide information. HTML comments `<!-- Hint: ... -->` provide guidance, and ⚠️ blocks highlight common pitfalls.

---

## PRD Lifecycle Stages

PRDs evolve through distinct phases. Not all sections are required at every stage:

| Stage | Purpose | Sections to Complete | Document Format |
|-------|---------|---------------------|-----------------|
| **Speclet** | Team kickoff, establish baseline confidence | Header, Executive Summary, Problem Statement | Brief paragraph |
| **Brief** | Secure executive investment | All above + Opportunity, Value Prop, Non-Goals, Success Metrics, KPIs | 1-pager |
| **Spec** | Cross-functional alignment | All above + Hypothesis, Functional Requirements (high-level), Technical Approach, Risks | 2-3 pages |
| **Full** | Execution planning | All sections (complete Functional Requirements, Operational Checklist, Launch Plan) | 5-6 pages |
| **Impact Review** | Close build-test-learn loop | Impact Review section only | Historical record |

---

## Section-by-Section Guide

### 1. Header Metadata

**Purpose:** Track status, ownership, and provide context linking to related work.

**When to fill out:** Every stage (keep updated throughout lifecycle).

**Tips:**
- Set **Status** accurately to manage expectations about document fidelity
- **Owner** should be the person responsible for keeping the PRD current
- **Related Docs** creates traceability across tools (Notion, Linear, Figma, etc.)

---

### 2. Executive Summary

**Purpose:** Answer-first thesis that tells someone the core idea in seconds.

**When to fill out:** Every stage (refine as understanding deepens).

**Tips:**
- Start with the answer, not the journey
- Maximum 2-3 sentences
- Should stand alone—someone reading just this section should understand what we're building and why

**Example:**
> We help e-commerce merchants reduce abandoned carts by 40% by embedding a persistent checkout drawer that follows users across product pages, eliminating friction during multi-item purchases.

---

### 3. Problem Statement

**Purpose:** Define the user pain with quantitative evidence to justify investment.

**When to fill out:** Speclet stage and refine as data comes in.

**Tips:**
- Focus on **user pain**, not "lack of feature X"
- Include actual metrics where possible (even estimates)
- Be specific about who's affected

**Example User Pain:**
> Merchants lose 30-50% of potential revenue at checkout because users get distracted when switching between product pages and cart.

**Example Quantitative Evidence:**
- Average cart abandonment rate: 69.8% (Baymard Institute)
- Multi-item carts have 23% higher abandonment rates
- 40% of abandoned carts contain 3+ items

**⚠️ Pitfall:** Don't define the problem circularly as "we need a sticky cart feature." Focus on the underlying pain (revenue loss from distraction).

---

### 4. Value Proposition

**Purpose:** Clear articulation of who we help, what goal we enable, and how we're uniquely positioned.

**When to fill out:** Brief stage onwards.

**Tips:**
- Use the "We help [user] to [goal] by [approach]" framework
- Differentiation must explain 10x improvement, not incremental
- Tie every capability back to user benefit

**Example:**
> **We help** high-volume e-commerce merchants **to** recover lost checkout revenue **by** providing a persistent, frictionless checkout drawer that follows users across navigation without requiring page loads.

**Example Differentiation:**
- **10x better:** Unlike traditional modals that interrupt browsing, our drawer stays accessible but non-intrusive, reducing cognitive load
- **Why switch:** Merchants lose millions annually to abandoned carts; this directly recovers measurable revenue with zero development effort

---

### 5. Opportunity Assessment

**Purpose:** Quantify market opportunity and validate with qualitative evidence.

**When to fill out:** Brief stage onwards.

**Tips:**
- Be realistic with TAM/SAM/SOM calculations
- Qualitative evidence should come from actual user interviews, surveys, or competitive analysis
- This justifies why we're investing now versus later

**Example:**
- **TAM:** $1.2B (all e-commerce merchants globally)
- **SAM:** $120M (Shopify + BigCommerce merchants with >$10K monthly revenue)
- **SOM:** $24M (realistic first-year capture given go-to-market constraints)

**Example Qualitative Evidence:**
- "We lose about $50K/month from abandoned carts that we know were legitimate buyers" — Shopify Plus merchant interview
- Competitor A's solution requires $10K/month and 4 weeks integration
- Mobile commerce growing 15% YoY, where distraction is even higher

---

### 6. Hypothesis & Strategy

**Purpose:** Articulate the testable hypothesis and strategic approach.

**When to fill out:** Brief/Spec stage.

**Tips:**
- Hypothesis should follow "If [solution], then [outcome], because [rationale]" format
- Strategic pillars should be 3-5 high-level approaches, not implementation details

**Example Hypothesis:**
> If we provide a persistent checkout drawer that follows users across product pages, then we will reduce abandoned carts by 25%, because users won't lose context or have to re-navigate when adding multiple items.

**Example Strategic Approach:**
- Minimal UI footprint: Small, collapsible drawer that doesn't obstruct shopping
- Performance-first: Sub-100ms render time to not impact page load
- Progressive enhancement: Works without JavaScript, better with it

---

### 7. Non-Goals (Out of Scope)

**Purpose:** Explicitly define what you're NOT doing to prevent scope creep.

**When to fill out:** Spec stage onwards (refine as scope clarifies).

**Tips:**
- Be as explicit about what you're not doing as what you are
- Include "Rabbit Holes" from Shape Up methodology—detailed areas to avoid
- Explain WHY something is out of scope (Phase 2, not relevant, technical constraints)

**Example:**
- **Persistent cart cross-session:** Will be addressed in Phase 2 after initial launch validates value
- **Guest checkout persistence:** Out of scope—only authenticated users supported initially
- **Mobile app version:** Not relevant—web-only for MVP

**Example Rabbit Holes:**
- **Smart cart suggestions:** Detailed AI-based upsell recommendations are a rabbit hole that could consume months—start with manual merchant-configured suggestions
- **Complex drag-and-drop reordering:** Nice-to-have but not critical for value—avoid until core metrics validated

---

### 8. Success Metrics

**Purpose:** Define specific, measurable outcomes that indicate success.

**When to fill out:** Brief stage onwards (refine with more detail in Spec/Full).

**Tips:**
- 2-3 primary metrics maximum
- Include guardrails (non-failure metrics) to prevent negative outcomes
- Telemetry requirements must be actionable for engineering

**Example Primary Metrics:**
| Metric | Target | Measurement Method | Timeframe |
|--------|--------|-------------------|-----------|
| Cart abandonment rate | Reduce from 70% to 52.5% (25% improvement) | Analytics: (completed checkouts / initiated checkouts) | 30 days post-launch |
| Average cart value | Increase 15% | Analytics: total revenue / completed checkouts | 30 days post-launch |

**Example Guardrails:**
| Metric | Minimum Threshold |
|--------|-------------------|
| Page load impact | <5% increase in average page load time |
| Checkout conversion | No more than 2% decrease in checkout-to-purchase conversion |

**Example Telemetry Requirements:**
- Track drawer open/close events with timestamps
- Log when items added from drawer vs product page
- Capture user sessions with multi-item cart interactions

**⚠️ Pitfall (Texas Sharpshooter):** Don't set vague goals like "improve user engagement." Define specific thresholds with measurement methods upfront. Otherwise you'll claim success no matter what happens.

---

### 9. Organizational KPI Impact

**Purpose:** Connect project success to broader organizational objectives.

**When to fill out:** Brief stage onwards.

**Tips:**
- Link to specific company or department-level KPIs
- Show current state and target state
- This helps executive buy-in

**Example:**
- **Merchant Retention:** Current 85% → Target 88% (recovering lost revenue increases satisfaction)
- **Enterprise Deal Velocity:** Current 45 days → Target 40 days (feature becomes sales differentiator)
- **Platform Gross Merchandise Value (GMV):** Current $50M → Target $52M (2% lift from recovered revenue)

---

### 10. Functional Requirements

**Purpose:** Behavioral requirements grouped by user journey.

**When to fill out:** Spec stage onwards (complete in Full stage).

**Tips:**
- Focus on BEHAVIOR, not appearance ("what must the system do," not "how it should look")
- Group by user journey: Onboarding → Core Usage → Edge Cases → Offboarding
- Each requirement should be testable
- Include acceptance criteria for critical requirements

**Example Onboarding:**
- **FR-1:** The system must display the checkout drawer for authenticated users with at least one item in cart
- **FR-2:** The system must position the drawer in the bottom-right corner, collapsed by default
  - Acceptance: Visual regression test confirms collapsed state
  - Priority: Required

**Example Core User Journey:**
- **FR-3:** The system must expand the drawer when user clicks the collapsed header
- **FR-4:** The system must display all cart items with images, names, quantities, and prices
  - Acceptance: Manually verify with carts of 1, 5, and 10 items
  - Priority: Required
- **FR-5:** The system must update quantities in real-time when user modifies items from product page
  - Acceptance: Automated test confirms sync within 500ms
  - Priority: Nice-to-Have

**Example Edge Cases & Errors:**
- **FR-6:** The system must handle network failures by displaying cached cart data with "Last updated [time]" indicator
- **FR-7:** When cart exceeds 20 items, system must show scrollable list within drawer with visual affordance

**Example Offboarding:**
- **FR-8:** When user signs out, system must collapse drawer and persist empty cart state across sessions

**⚠️ Pitfall:** Don't specify UI details like "use blue button in top right." That's a design concern. Define what the system must DO, not how it should look.

---

### 11. Technical Approach

**Purpose:** Outline architecture implications, constraints, and technical risks.

**When to fill out:** Spec stage onwards.

**Tips:**
- Be specific about database changes, API endpoints, infrastructure changes
- Include performance, compatibility, and security constraints
- Identify technical risks upfront with mitigation plans

**Example Architecture Implications:**
- Add `persistent_cart_enabled` boolean to `merchant_settings` table
- Create `GET /api/cart/drawer` endpoint returning cart state with user preferences
- Integrate with existing WebSocket infrastructure for real-time cart updates
- Deploy as edge function for sub-100ms global latency

**Example Constraints:**
- **Performance:** Drawer render must complete within 100ms for 95th percentile of requests
- **Compatibility:** Support Chrome 90+, Firefox 88+, Safari 14+ (last 2 major versions)
- **Security:** Cart data encrypted at rest, in-transit via TLS 1.3

**Example Technical Risks:**
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| WebSocket connection loss causing stale data | Medium | High | Implement exponential backoff retry with fallback to polling |
| Cart state conflicts when multiple tabs open | Low | Medium | Use database optimistic locking with last-write-wins strategy |
| Performance degradation on high-traffic merchant sites | Medium | Medium | Implement caching layer with 5-second TTL, CDN distribution |

---

### 12. Risks & Assumptions

**Purpose:** Identify business risks, key assumptions, and validation plans.

**When to fill out:** Spec stage onwards.

**Tips:**
- Distinguish between technical risks (in Technical Approach) and business/systemic risks here
- Every assumption should have a validation method
- Plan experiments to validate assumptions before full build

**Example Key Assumptions:**
- Merchants want persistent cart across navigation: Validate via 5 merchant interviews
- Users won't find drawer intrusive: Validate via user testing with prototype
- Performance impact is acceptable: Validate via load testing on production-like traffic

**Example Systemic Risks:**
| Risk | Likelihood | Impact | Mitigation Strategy |
|------|-----------|--------|---------------------|
| Users perceive drawer as tracking/privacy concern | Medium | High | Clear opt-out messaging, transparent data usage documentation |
| Merchants require heavy customization | High | Medium | Build initial version with minimal configurability, gather feedback |
| Competitor launches similar feature during dev | Low | Low | Accelerate timeline, leverage first-mover advantage in merchant relationships |

**Example False Assumption Pressure-Test Plan:**
- **Experiment 1:** Deploy non-persistent drawer prototype to 10 beta merchants, measure opt-in/out rates and user feedback
- **Experiment 2:** A/B test collapsed vs expanded default state to see which drives higher completion rate
- **Experiment 3:** Survey 100 active shoppers about perceived intrusiveness vs convenience

---

### 13. Operational Readiness Checklist

**Purpose:** Ensure all non-product activities are ready for launch.

**When to fill out:** Full stage (during execution planning).

**Tips:**
- Software deployment ≠ product launch
- Don't forget GTM, support, and internal enablement
- Assign DRIs (Directly Responsible Individuals) for each item

**Example Launch Activities:**
- [ ] Legal compliance review completed (privacy policy updated)
- [ ] Marketing landing page drafted and approved
- [ ] Email announcement template created for merchant communication
- [ ] Social media posts scheduled for launch day
- [ ] Sales enablement one-pager created with demo video

**Example Support Readiness:**
- [ ] Support team trained on new feature via 1-hour session
- [ ] FAQ/Knowledge Base articles published (5 articles covering common questions)
- [ ] Escalation path defined for merchant-reported bugs
- [ ] Troubleshooting guide created for common issues

**Example Internal Enablement:**
- [ ] Company-wide all-hands announcement scheduled for launch week
- [ ] Engineering demo session planned for broader team
- [ ] Success story templates created for case studies post-launch

**⚠️ Pitfall:** Assuming that deploying the code equals launching the product. GTM, support readiness, and internal enablement are critical for success.

---

### 14. Decision Journal

**Purpose:** Chronological log of decisions made and why.

**When to fill out:** Ongoing throughout development.

**Tips:**
- Capture decisions as they happen, not retroactively
- Include alternatives rejected and why
- This prevents circular arguments when new stakeholders join

**Example:**
| Date | Decision | Rationale | Decision Maker | Alternatives Considered |
|------|----------|-----------|----------------|------------------------|
| 2025-03-01 | Default drawer to collapsed state | Expanded state may be perceived as intrusive, users can easily expand | Sarah (PM) | Expanded default, remembered user preference (rejected due to complexity) |
| 2025-03-05 | Use WebSocket for real-time updates | Required for <500ms sync requirement, polling would add latency | Alex (Tech Lead) | Server-sent events (rejected due to browser support), polling (rejected due to performance impact) |

**Example Strategic Direction Log:**
- 2025-02-28: Explored building as browser extension → rejected because would require merchants to install, creating adoption friction
- 2025-03-02: Explored building as merchant JavaScript snippet → chosen because integrates seamlessly with existing merchant sites, no installation required

**⚠️ Pitfall:** Relying on oral tradition causes circular arguments when new team members join. Document the "why" as decisions are made.

---

### 15. Launch Strategy

**Purpose:** Define phased rollout, rollback procedures, and monitoring.

**When to fill out:** Full stage.

**Tips:**
- Phased rollout reduces blast radius of bugs
- Rollback plan must be specific and testable
- Define clear alert thresholds

**Example Phased Rollout:**
- **Alpha:** 5 internal team merchants, 2 weeks, gather qualitative feedback
- **Beta:** 20 high-trust merchant customers, 2 weeks, monitor key metrics closely
- **GA:** All merchants, feature enabled by default with opt-out available

**Example Rollback Plan:**
- **Trigger condition:** Cart abandonment rate increases >10% OR checkout conversion drops >5% for 24 hours
- **Steps:**
  1. Set feature flag `persistent_cart_enabled=false` in admin panel (instant, no deploy required)
  2. Notify merchant support team of rollback
  3. Issue public communication if any merchants were impacted
  4. Schedule post-mortem within 48 hours
- **Post-mortem:** Root cause analysis, corrective actions, timeline for relaunch

**Example Rollout Metrics:**
- **Cart abandonment rate:** Alert if increases >5% week-over-week
- **Checkout conversion:** Alert if decreases >3% week-over-week
- **Page load time:** Alert if increases >10% week-over-week
- **Drawer engagement:** Monitor as leading indicator (should be >40% of eligible users)

---

### 16. Appendix

**Purpose:** Supplementary information, references, and context.

**When to fill out:** Ongoing—add as needed.

**Tips:**
- Links should be live and up-to-date
- Dashboards should be shared with appropriate permissions
- Personas and competitive analysis can be separate docs, linked here

**Example Related Documents:**
- [Master Notion PRD](https://notion.so/workspace/prd/persistent-checkout)
- [Linear Project](https://linear.app/team/PERS-1)
- [Figma Design Files](https://figma.com/file/persistent-checkout-design)
- [User Research Interviews](https://drive.google.com/drive/user-research-interviews)

**Example Telemetry Dashboards:**
- [Live Metrics Dashboard](https://mixpanel.com/project/persistent-checkout-metrics)
- [Error Monitoring](https://sentry.io/organizations/team/projects/persistent-checkout)

**Example User Personas:**
- **Maria (Merchant):** E-commerce site owner, 5 years experience, tech-savvy but non-technical, values simplicity and revenue impact
- **Alex (Shopper):** Frequent online shopper, mobile-first, abandons carts when distracted, expects seamless experience

**Example Competitive Analysis:**
- **Competitor A:** Offers similar persistent cart, but requires $10K/month and 4-week integration
- **Competitor B:** Offers cart persistence across devices, but stores data locally causing sync issues
- **Competitor C:** Free solution but lacks real-time updates and mobile optimization

---

### 17. Impact Review

**Purpose:** Close the build-test-learn loop with actual results vs. hypothesis.

**When to fill out:** After GA launch (30-60 days post-launch).

**Tips:**
- Be honest about what worked and what didn't
- Include quantitative deltas (hypothesis vs actual)
- Document lessons that should apply to future projects

**Example Results vs. Hypothesis:**
| Metric | Hypothesis | Actual | Delta | Pass/Fail |
|--------|-----------|--------|-------|-----------|
| Cart abandonment rate | 25% reduction (70% → 52.5%) | 18% reduction (70% → 57.4%) | -7% | ❌ |
| Average cart value | 15% increase | 12% increase | -3% | ❌ |
| Page load impact | <5% increase | 2% increase | -3% | ✅ |

**Example Key Learnings:**
- **What worked well:** Merchant adoption exceeded expectations (40% enabled within first week), minimal support tickets
- **What didn't work:** 25% reduction in abandonment was too aggressive; 15% would have been realistic baseline
- **Unexpected outcomes:** Users engaged with drawer more than expected (60% vs projected 40%), suggesting higher value than anticipated

**Example Retrospective Lessons:**
- **What we'd do differently:** Start with conservative hypothesis (15% vs 25%) and set stretch goal, not baseline
- **What applies to future projects:** Real-time validation with beta merchants revealed engagement patterns we didn't anticipate—continue this practice

---

## Best Practices

### General Guidance

1. **Iterative over Perfect:** A good PRD evolves. Don't wait until you have perfect information—start with what you know and refine as you learn.

2. **Answer First:** Use the Minto Pyramid Principle. Start with the answer, then provide supporting evidence. Let readers stop at any depth and still understand the core idea.

3. **Be Specific:** Vague requirements lead to vague outcomes. Every requirement should be testable.

4. **Document the "Why":** Use the Decision Journal continuously. Capture decisions as they happen, including alternatives rejected.

5. **Link Everything:** Use Related Docs in the Appendix to create traceability across tools (Notion, Linear, Figma, dashboards).

### Writing Style

- **Concise:** Aim for clarity over verbosity. Short paragraphs, bullet points, and tables improve readability.
- **Active Voice:** "The system must authenticate users" is clearer than "Users should be authenticated by the system."
- **Behavioral, Not Aesthetic:** Focus on what the system must do, not how it should look (that's design's domain).

### Collaboration

- **Cross-Functional Review:** Get input from engineering, design, support, and marketing before major milestones.
- **Executive Alignment:** Secure buy-in at the Brief stage using the 1-pager before investing in detailed specs.
- **Live Document:** Keep the PRD updated throughout development. It's not "finished" until post-launch review.

---

## Common Pitfalls

### Texas Sharpshooter Fallacy

**Problem:** Setting vague goals like "improve engagement" then claiming success by pointing to whatever metric happened to improve.

**Solution:** Define specific targets upfront with measurement methods and timeframes.

> ❌ **Bad:** "We want to improve user engagement"
> ✅ **Good:** "Increase session duration from 3.2 minutes to 4.0 minutes (25% lift) within 30 days post-launch, measured via Mixpanel average session duration event."

### Problem as "Lack of Feature"

**Problem:** Defining the problem as "we need X feature" which bakes in the solution.

**Solution:** Focus on underlying user pain or business friction.

> ❌ **Bad:** "Problem: We need a sticky cart feature"
> ✅ **Good:** "Problem: Merchants lose 30-50% of revenue at checkout because users get distracted when switching between product pages and cart"

### Feature Factory Mode

**Problem:** Listing capabilities without connecting them to user benefit or business value.

**Solution:** Tie every feature back to the value proposition. Answer "why does this matter?"

> ❌ **Bad:** "Feature: Persistent checkout drawer"
> ✅ **Good:** "Feature: Persistent checkout drawer. Value: Reduces cart abandonment by maintaining user context during multi-item shopping, recovering measurable revenue for merchants."

### Deployment ≠ Launch

**Problem:** Assuming that deploying code equals launching the product.

**Solution:** Use the Operational Readiness Checklist to ensure GTM, support, and internal enablement are complete.

### Aesthetics Over Behavior

**Problem:** Specifying UI details like "blue button in top right" in functional requirements.

**Solution:** Focus on behavioral requirements. Let design handle aesthetics.

> ❌ **Bad:** "The system must display a blue button in the top right corner to expand the drawer"
> ✅ **Good:** "The system must provide a visible affordance to expand the collapsed drawer; user must be able to access cart contents within one click"

---

## Related Resources

- [PRD Field Guide: Best Practices](./plan.md) — Source material for this template
- [Amazon Working Backwards](https://www.hustlebadger.com/what-do-product-teams-do/amazon-working-backwards-process/) — Press Release/FAQ methodology
- [Basecamp Shape Up](https://basecamp.com/shapeup) — Pitch-based development methodology
- [Minto Pyramid Principle](https://www.mindtools.com/pages/article/minto-pyramid.htm) — Answer-first communication
- [Reforge: Evolving PRDs](https://www.reforge.com/blog/evolving-product-requirement-documents) — PRD lifecycle guidance

---

## License

This template is provided as-is for educational and commercial use.
