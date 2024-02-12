import resolve from '@rollup/plugin-node-resolve';

export default {
  // ... other Rollup configuration options
  plugins: [
    // ... other plugins
    resolve(), // Add this line to include the resolve plugin
  ],
};