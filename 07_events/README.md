# JavaScript Events & Async - 07_events

This folder covers **Events and Asynchronous JavaScript** - essential for creating interactive and responsive web applications.

## Topics Covered

### 1. **Event Basics** (`01_eventsBasics.html`)

**What are Events?**
- User interactions (clicks, mouse movements, keyboard input)
- Browser actions (page load, window resize)
- Custom events for application logic

**Event Handling Methods:**

**1. Inline HTML (Not Recommended):**
```html
<button onclick="alert('Clicked')">Click me</button>
```

**2. Property Assignment (Limited):**
```javascript
element.onclick = function() { /* handler */ };
```

**3. addEventListener (Recommended):**
```javascript
element.addEventListener('click', function() { /* handler */ });
```

**Common Event Types:**
- `click` - Mouse click
- `mouseover` / `mouseout` - Mouse hover
- `keydown` / `keyup` - Keyboard input
- `submit` - Form submission
- `load` - Page/image loading
- `resize` - Window size change

**Event Object:**
- `event.target` - Element that triggered the event
- `event.preventDefault()` - Stop default behavior
- `event.stopPropagation()` - Stop event bubbling
- `event.type` - Type of event
- `event.clientX` / `event.clientY` - Mouse coordinates

**Event Delegation:**
- Attaching single listener to parent element
- Handling events for dynamically created elements
- Efficient memory usage for many similar elements

### 2. **Async Basics** (`02_async_basics.html`)

**JavaScript Execution Model:**
- **Single-threaded** - One execution thread
- **Synchronous** by default - One operation at a time
- **Call Stack** - Where functions are executed
- **Memory Heap** - Where objects are stored

**Blocking vs Non-Blocking:**
- **Blocking** - Code stops until operation completes
- **Non-Blocking** - Code continues while operation runs in background

**Key Concepts:**
- **Call Stack** - Function execution order (LIFO - Last In, First Out)
- **Web APIs** - Browser-provided functions (setTimeout, fetch, DOM events)
- **Callback Queue** - Where async callbacks wait
- **Microtask Queue** - Higher priority queue for Promises
- **Event Loop** - Coordinates between stack and queues

**Event Loop Process:**
1. Execute code in Call Stack
2. If Call Stack is empty, check Microtask Queue
3. If Microtask Queue is empty, check Callback Queue
4. Move tasks from queues to Call Stack
5. Repeat

### 3. **setTimeout and clearTimeout** (`03_setTimeout_clearTimeout.html`)

**setTimeout Syntax:**
```javascript
const timeoutId = setTimeout(function, delay, ...args);
```

**Key Features:**
- Executes function after specified delay (milliseconds)
- Returns a timeout ID for cancellation
- Minimum delay is typically 4ms in browsers
- Does not guarantee exact timing

**clearTimeout:**
```javascript
clearTimeout(timeoutId); // Cancels the timeout
```

**Common Use Cases:**
- Delayed execution
- Creating animations
- Auto-hide notifications
- Implementing debouncing
- User experience enhancements

**Best Practices:**
- Store timeout IDs for cleanup
- Clear timeouts to prevent memory leaks
- Consider using requestAnimationFrame for animations
- Be aware of timer resolution limitations

### 4. **setInterval and clearInterval** (`04_setInterval_clearInterval.html`)

**setInterval Syntax:**
```javascript
const intervalId = setInterval(function, delay, ...args);
```

**Key Features:**
- Repeatedly executes function at specified intervals
- Continues until manually stopped
- Returns interval ID for cancellation

**clearInterval:**
```javascript
clearInterval(intervalId); // Stops the interval
```

**Common Use Cases:**
- Real-time clocks and timers
- Periodic data updates
- Animation loops
- Progress indicators
- Periodic API calls

**Important Considerations:**
- **Interval Drift** - Timing can become inaccurate over time
- **Overlapping Executions** - If function takes longer than interval
- **Memory Leaks** - Always clear intervals when done
- **Battery Impact** - Continuous intervals drain battery on mobile

**Best Practices:**
- Always store interval IDs for cleanup
- Clear intervals in cleanup functions
- Consider using setTimeout recursively for more control
- Use requestAnimationFrame for smooth animations

### 5. **Async Concepts (Visual Notes)**

**Visual Learning Materials:**
- `01_AsyncJS.png` - JavaScript execution flow
- `02_AsyncJS.png` - Event loop visualization  
- `03_AsyncJS.png` - Call stack and queues interaction

**Important Concepts Visualized:**
- How synchronous code executes linearly
- How asynchronous code gets handled by Web APIs
- Event loop coordination between different queues
- Priority differences between callback and microtask queues

## Best Practices

**Event Handling:**
- Use `addEventListener()` for flexibility and multiple listeners
- Always remove event listeners when elements are removed
- Use event delegation for dynamic content
- Prevent default behavior only when necessary

**Async Code:**
- Understand the event loop to debug timing issues
- Clear timeouts and intervals to prevent memory leaks
- Use appropriate delays - not too short for performance
- Consider user experience when implementing delays

**Performance Optimization:**
- Debounce frequent events (scroll, resize, input)
- Throttle expensive operations
- Use passive event listeners for better scroll performance
- Clean up resources in component unmounting

## Real-world Applications

**Events are essential for:**
- Form validation and submission
- Interactive UI components (buttons, menus, modals)
- Image galleries and carousels
- Drag and drop functionality
- Keyboard shortcuts and accessibility

**Async concepts are crucial for:**
- API calls and data fetching
- Smooth animations and transitions
- Real-time features (chat, notifications)
- Performance optimization
- User experience improvements

