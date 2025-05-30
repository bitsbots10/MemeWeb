// Script to update all HTML files to remove .html extensions from links
const fs = require('fs');
const path = require('path');

// Get all HTML files in the current directory
const htmlFiles = fs.readdirSync('./').filter(file => file.endsWith('.html'));

// Process each HTML file
htmlFiles.forEach(file => {
  console.log(`Processing ${file}...`);
  
  // Read the file content
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace internal links by removing .html extensions
  // This regex matches href="something.html" but not href="http://something.html"
  content = content.replace(/href="(?!http|https|mailto|tel|#|\/)([^"]+)\.html"/g, 'href="$1"');
  
  // Write the updated content back to the file
  fs.writeFileSync(file, content);
  
  console.log(`Updated ${file}`);
});

console.log('All HTML files updated successfully!'); 