// Script to update heading in all HTML files
const fs = require('fs');
const path = require('path');

// Get all HTML files in the current directory
const htmlFiles = fs.readdirSync('./').filter(file => file.endsWith('.html'));
console.log(`Found ${htmlFiles.length} HTML files to check`);

// Count of files updated
let updatedCount = 0;

// Process each HTML file
htmlFiles.forEach(file => {
  console.log(`Processing ${file}...`);
  
  // Read the file content
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace "Why Choose MEME?" with "The MEME Advantage"
  const originalContent = content;
  content = content.replace(/<h2>Why Choose MEME\?<\/h2>/g, '<h2>The MEME Advantage</h2>');
  
  // Only write to the file if changes were made
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`✅ Updated heading in ${file}`);
    updatedCount++;
  } else {
    console.log(`⏭️ No changes needed in ${file}`);
  }
});

console.log(`\nHeading update completed! Updated ${updatedCount} file(s).`); 