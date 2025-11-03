# URBREATH Footer Web Component

A reusable footer Web component for URBREATH projects.

## Build Instructions

### Prerequisites
- **Node.js**: v22.21.0 (this is the version this project was developed with)
- **npm**

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Type checking
npm run type-check

# Build for production
npm run build

```


Building the app generates the production files in the `dist/ folder`, including:

`urbreath-footer.umd.js` - this is the main UMD bundle for external consumption

## Usage
Partners can include the footer by:

a) Adding the below script tag to the head section of their HTML document
```bash
<script src="[HOSTED_URL]/urbreath-footer.umd.js"></script>
```

b) Inserting the urbreath-footer tag in the body section, wherever they want the footer to appear in their HTML document

```bash
<urbreath-footer/>
```

For WordPress applications, they need to:

a) Include the below function in the active theme's functions.php file:
```bash
function enqueue_urbreath_react_widget() {
    wp_enqueue_script(
        'urbreath-footer',
        '[HOSTED_URL]/urbreath-footer.umd.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'enqueue_urbreath_react_widget');
```
b) Add the urbreath-footer tag inside a Shortcode or Custom HTML block in the page they want to add the footer to:

```bash
<urbreath-footer/>
```