+++
title = "Contact"
summary = "Get in touch about technical writing, collaboration, or thoughtful discussions around IT and philosophy."
+++

If you would like to reach out, use the form below. The markup is ready for a form service or serverless email workflow, and the integration points are intentionally isolated so they can be configured later.

<form class="contact-form" action="{{< param contactFormAction >}}" method="{{< param contactFormMethod >}}" data-contact-form>
  <div class="form-grid">
    <div class="form-field">
      <label for="contact-name">Name</label>
      <input id="contact-name" name="name" type="text" autocomplete="name" required>
    </div>
    <div class="form-field">
      <label for="contact-email">Email</label>
      <input id="contact-email" name="email" type="email" autocomplete="email" required>
    </div>
    <div class="form-field">
      <label for="contact-message">Message</label>
      <textarea id="contact-message" name="message" required></textarea>
    </div>
    <input name="_subject" type="hidden" value="New website contact message">
    <input name="_replyto" type="hidden" value="{{< param contactEmail >}}">
    <button class="button button-primary" type="submit">Send message</button>
  </div>
</form>

The current `action` value is a placeholder. Replace it with your chosen provider endpoint, for example a Formspree URL, Netlify Forms setup, or a serverless function route.
