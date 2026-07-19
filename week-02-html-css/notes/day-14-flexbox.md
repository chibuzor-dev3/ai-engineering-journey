# Day 14 - CSS Flexbox

## What is Flexbox?

Flexbox (Flexible Box Layout) is a CSS layout system used to arrange elements in rows or columns.

It makes it easier to:
- Align items
- Space elements evenly
- Build responsive layouts

---

## Display Flex

```css
.container{
    display:flex;
}
```

---

## Flex Direction

```css
flex-direction: row;
```

(Default)

```css
flex-direction: column;
```

(Stack items vertically)

---

## Justify Content

Controls horizontal spacing.

```css
justify-content: center;
```

Other values:

- flex-start
- flex-end
- space-between
- space-around
- space-evenly

---

## Align Items

Controls vertical alignment.

```css
align-items: center;
```

---

## Gap

Creates space between items.

```css
gap:20px;
```

---

## Example

```html
<div class="container">
    <div>HTML</div>
    <div>CSS</div>
    <div>JavaScript</div>
</div>
```

```css
.container{
    display:flex;
    justify-content:center;
    gap:20px;
}
```

---

## Advantages

- Cleaner layouts
- Easier alignment
- Responsive by default
- Less CSS than older layout methods

---

## Summary

Flexbox is one of the most important CSS layout tools for modern web development.