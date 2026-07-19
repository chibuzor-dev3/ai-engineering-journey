# Day 13 - Responsive Web Design

## What is Responsive Design?

Responsive web design allows a website to adapt to different screen sizes so it looks great on phones, tablets, and computers.

---

## Viewport

This tag tells browsers how to scale the page.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## Relative Widths

Instead of fixed widths like:

```css
width: 500px;
```

Use:

```css
width: 100%;
max-width: 500px;
```

This allows elements to shrink on smaller screens.

---

## Flexible Images

```css
img{
    max-width:100%;
    height:auto;
}
```

Images will never overflow the screen.

---

## Media Queries

Media queries apply CSS only when the screen reaches a certain size.

Example:

```css
@media (max-width:768px){
    body{
        background:#f5f5f5;
    }
}
```

---

## Mobile First

Design for mobile first, then add styles for larger screens.

---

## Common Breakpoints

Mobile

```css
@media (max-width:600px)
```

Tablet

```css
@media (max-width:768px)
```

Desktop

```css
@media (min-width:1024px)
```

---

## Best Practices

- Use percentages instead of fixed widths.
- Keep images responsive.
- Test on different screen sizes.
- Avoid horizontal scrolling.

---

## Summary

Responsive design ensures your website works well on every device.