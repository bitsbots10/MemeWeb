// Script to update social media links in all HTML files
const fs = require('fs');
const path = require('path');

// Get all HTML files in the current directory
const htmlFiles = fs.readdirSync('./').filter(file => file.endsWith('.html'));

// Process each HTML file
htmlFiles.forEach(file => {
  console.log(`Processing ${file}...`);
  
  // Read the file content
  let content = fs.readFileSync(file, 'utf8');
  
  // Update Telegram group link
  content = content.replace(
    /<a href="[^"]*" class="social-btn telegram-group"([^>]*)><i class="fab fa-telegram"><\/i> Telegram Group<\/a>/g, 
    '<a href="https://t.me/MemeToolsXrpl" class="social-btn telegram-group" target="_blank"><i class="fab fa-telegram"></i> Telegram Group</a>'
  );
  
  // Update Twitter to X link and icon
  content = content.replace(
    /<a href="[^"]*" class="social-btn twitter"([^>]*)><i class="fab fa-twitter"><\/i> Twitter<\/a>/g, 
    '<a href="https://x.com/MemeToolsXrp" class="social-btn twitter" target="_blank"><i class="fab fa-x-twitter"></i> X (Twitter)</a>'
  );
  
  // Write the updated content back to the file
  fs.writeFileSync(file, content);
  
  console.log(`Updated ${file}`);
});

console.log('All HTML files updated successfully!'); 