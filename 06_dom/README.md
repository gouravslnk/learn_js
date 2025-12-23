# JavaScript DOM Manipulation - 06_dom

This folder covers **DOM (Document Object Model)** manipulation - the foundation for creating interactive web pages and dynamic user interfaces.

## Topics Covered

### 1. **DOM Basics Summary** (`01_dom_basics_summary.js` + `01_dom_basics_summary.html`)

**What is DOM?**
- Document Object Model represents HTML as an object structure
- JavaScript interface to interact with web pages
- Tree-like structure of HTML elements

**Document Object:**
- `window.document` - The entire HTML document
- `document.title` - Page title
- `document.body` - Body element
- `document.links` - All links in the document
- `document.images` - All images
- `document.forms` - All forms

**Element Selection Methods:**
- `getElementById()` - Select by ID (returns single element)
- `getElementsByClassName()` - Select by class (returns collection)
- `getElementsByTagName()` - Select by tag name
- `querySelector()` - Select using CSS selector (first match)
- `querySelectorAll()` - Select all matching CSS selectors

**Content Access and Modification:**
- `textContent` - Get/set text content (includes hidden)
- `innerText` - Get/set visible text only
- `innerHTML` - Get/set HTML content (can include tags)
- Understanding differences between these properties

**Style Manipulation:**
- `element.style.property` - Inline style changes
- `element.style.backgroundColor` - Individual style properties
- CSS property names in camelCase

### 2. **DOM Navigation and Traversal** (`02_dom_navigation_traversal.html`)

**Parent-Child Relationships:**
- `parentElement` - Get parent element
- `children` - Get child elements (HTML elements only)
- `childNodes` - Get all child nodes (includes text nodes, comments)
- `firstElementChild` / `lastElementChild` - First/last child elements

**Sibling Navigation:**
- `nextElementSibling` - Next sibling element
- `previousElementSibling` - Previous sibling element
- `nextSibling` / `previousSibling` - Includes text nodes

**Tree Traversal:**
- Moving up and down the DOM tree
- Finding related elements
- Understanding node types (element, text, comment)

**Node vs Element:**
- Nodes include text, comments, elements
- Elements are specifically HTML tags
- When to use node methods vs element methods

### 3. **Creating Elements** (`03_createElement.html`)

**Creating New Elements:**
- `document.createElement()` - Create new HTML elements
- Setting properties on new elements
- Adding content to new elements

**Adding Elements to DOM:**
- `appendChild()` - Add as last child
- `insertBefore()` - Insert at specific position
- `prepend()` - Add as first child
- `append()` - Add multiple elements/text

**Element Properties:**
- Setting `id`, `className`, `textContent`
- Adding attributes with `setAttribute()`
- Creating complex element structures

**Performance Considerations:**
- Document fragments for multiple elements
- Minimizing DOM reflows and repaints
- Batch DOM operations when possible

### 4. **Edit and Remove DOM Elements** (`04_edit_remove_dom_elements.html`)

**Modifying Existing Elements:**
- Changing text content and HTML
- Updating element attributes
- Modifying CSS classes and styles

**Removing Elements:**
- `removeChild()` - Remove child element
- `remove()` - Remove element directly (modern method)
- `replaceChild()` - Replace one element with another

**Class Manipulation:**
- `classList.add()` - Add CSS class
- `classList.remove()` - Remove CSS class
- `classList.toggle()` - Toggle CSS class
- `classList.contains()` - Check if class exists

**Attribute Management:**
- `getAttribute()` - Get attribute value
- `setAttribute()` - Set attribute value
- `removeAttribute()` - Remove attribute
- `hasAttribute()` - Check if attribute exists

**Dynamic Content Updates:**
- Updating content based on user interactions
- Conditional element visibility
- Real-time data display

##  Best Practices

**Element Selection:**
- Use `getElementById()` for unique elements
- Use `querySelector()` for CSS selector flexibility
- Cache frequently accessed elements in variables
- Use `querySelectorAll()` for multiple elements

**Performance Optimization:**
- Minimize DOM queries - store references to elements
- Batch DOM changes to reduce reflows
- Use `DocumentFragment` for multiple element creation
- Avoid unnecessary style recalculations

**Content Updates:**
- Use `textContent` for plain text (safer, faster)
- Use `innerHTML` only when you need HTML parsing
- Sanitize user input before adding to DOM
- Be aware of XSS vulnerabilities with `innerHTML`

**Modern vs Legacy Methods:**
- Prefer `querySelector()` over `getElementById()` for consistency
- Use `remove()` instead of `removeChild()` when possible
- Use `prepend()`/`append()` instead of `appendChild()` for flexibility

##  Real-world Applications

**DOM manipulation is essential for:**
- Form validation and user feedback
- Dynamic content loading (search results, product lists)
- Interactive UI components (modals, dropdowns, tabs)
- Real-time data updates (chat messages, notifications)
- Image galleries and carousels
- Shopping cart functionality
- Single Page Applications (SPAs)

##  Security Considerations

**XSS Prevention:**
- Never insert untrusted content with `innerHTML`
- Sanitize user input before DOM insertion
- Use `textContent` for user-generated text
- Validate and escape HTML content

