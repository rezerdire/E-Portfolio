# UI Recommendations

## Completed: Social Links Alignment

Updated `src/components/ContactSection.jsx` so the social links align with the contact information column on desktop and mobile.

- Social heading is explicitly left-aligned.
- Social icons use `justify-start` and consistent spacing.
- Each icon uses a consistent `40px × 40px` circular button.
- Theme-aware colors and hover states match the existing portfolio design.
- LinkedIn, Facebook, and Instagram have accessible labels.

Verified at desktop and mobile sizes with no horizontal overflow.

## Recommended Follow-up Fixes

| Priority | Recommendation | Reason |
| --- | --- | --- |
| High | Put the star/meteor background behind the page content or reduce its opacity. | Meteor lines can cross over contact text and form fields in dark mode, reducing readability. |
| High | Move `onSubmit={handleSubmit}` from the wrapper `<div>` to the actual `<form>`. | The contact form currently will not trigger the submit handler correctly. |
| Medium | Change the Projects section spacing from `py-2` to the same vertical spacing used by the other sections. | The Projects section has a tighter vertical rhythm than About, Skills, and Contact. |
| Medium | Show the theme toggle on mobile or place it inside the mobile menu. | `max-sm:hidden` currently removes theme switching from small screens. |
| Medium | Replace project links using `href="#"` with real URLs or remove those action icons. | Placeholder links create a poor user experience. |
| Low | Add `rel="noopener noreferrer"` to project links using `target="_blank"`. | Improves security and keeps external-link behavior consistent with the social links. |
