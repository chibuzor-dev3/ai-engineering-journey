# HTML Forms

Forms allow users to enter and submit data on a web page.

Examples include:
- Contact forms
- Login forms
- Registration forms
- Search bars
- Feedback forms

Forms begin with the `<form>` element.

---

# Basic Form Structure

```html
<form>
    <!-- Form elements go here -->
</form>
```

The `<form>` element contains all the inputs and buttons that collect user data.

---

# `<label>`

Labels describe what each input field is for.

Example:

```html
<label for="name">Full Name</label>
```

Using labels makes forms easier to understand and improves accessibility.

---

# `<input>`

The `<input>` element creates an input field where users can type information.

Example:

```html
<input type="text" id="name" name="name">
```

---

# Common Input Types

## Text

```html
<input type="text">
```

Allows users to enter text.

---

## Email

```html
<input type="email">
```

Checks that the entered value looks like an email address.

---

## Password

```html
<input type="password">
```

Hides the characters while typing.

---

## Number

```html
<input type="number">
```

Allows only numeric values.

---

## Date

```html
<input type="date">
```

Lets users select a date.

---

## Checkbox

```html
<input type="checkbox">
```

Allows users to choose multiple options.

---

## Radio Button

```html
<input type="radio">
```

Allows users to choose one option from a group.

---

## File Upload

```html
<input type="file">
```

Allows users to upload files.

---

# Placeholder

The placeholder attribute shows helpful text inside an input.

Example:

```html
<input
    type="text"
    placeholder="Enter your full name">
```

---

# Required Attribute

The `required` attribute prevents users from submitting an empty field.

Example:

```html
<input
    type="email"
    required>
```

---

# `<textarea>`

Creates a multi-line text box.

Example:

```html
<textarea rows="5" cols="30"></textarea>
```

Useful for messages and comments.

---

# `<button>`

Creates a clickable button.

Example:

```html
<button type="submit">Send Message</button>
```

---

# `<select>` and `<option>`

Creates a dropdown menu.

Example:

```html
<select>
    <option>HTML</option>
    <option>CSS</option>
    <option>JavaScript</option>
</select>
```

---

# Complete Example

```html
<form>

    <label for="name">Full Name</label>
    <input
        type="text"
        id="name"
        placeholder="Enter your name"
        required>

    <br><br>

    <label for="email">Email</label>
    <input
        type="email"
        id="email"
        placeholder="Enter your email"
        required>

    <br><br>

    <label for="message">Message</label>

    <textarea
        id="message"
        rows="5"
        cols="30"></textarea>

    <br><br>

    <button type="submit">
        Send
    </button>

</form>
```

---

# Best Practices

- Always use labels.
- Give every input a meaningful name.
- Use the correct input type.
- Use placeholders only as hints.
- Mark important fields as required.
- Keep forms simple and easy to understand.

---

# Key HTML Form Elements

- `<form>`
- `<label>`
- `<input>`
- `<textarea>`
- `<button>`
- `<select>`
- `<option>`

These elements are the foundation of almost every website that collects user information.