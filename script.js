document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    
    const header = document.querySelector('header .container');
    const nav = document.querySelector('nav');
    
    header.insertBefore(menuToggle, nav);
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Tab Switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // Populate GitHub Pages guide steps
    const githubSteps = document.querySelector('#github-tab .guide-steps');
    const githubStepsContent = [
        {
            title: 'Create a GitHub Repository',
            content: 'Sign up for a free GitHub account and create a new repository'
        },
        {
            title: 'Enable GitHub Pages',
            content: 'Go to repository Settings > Pages and select a branch to enable GitHub Pages'
        },
        {
            title: 'Create TOML File Structure',
            content: 'Create a folder named <code>.well-known</code> and add your <code>xrp-ledger.toml</code> file inside it'
        },
        {
            title: 'Configure for Proper Path Access',
            content: 'Create a file named <code>_config.yml</code> in the root of your repository with the content:<br><code>include: [".well-known"]</code>'
        }
    ];
    
    populateSteps(githubSteps, githubStepsContent);

    // Populate Netlify guide steps
    const netlifySteps = document.querySelector('#netlify-tab .guide-steps');
    const netlifyStepsContent = [
        {
            title: 'Sign Up for Netlify',
            content: 'Create a free account at <a href="https://netlify.com" target="_blank">netlify.com</a>'
        },
        {
            title: 'Connect Your Repository',
            content: 'Connect your GitHub, GitLab, or Bitbucket repository to Netlify'
        },
        {
            title: 'Add Your TOML File',
            content: 'Create a file at <code>.well-known/xrp-ledger.toml</code> in your repository'
        },
        {
            title: 'Configure Netlify',
            content: 'Create a file named <code>_redirects</code> or <code>netlify.toml</code> in your repository root with proper configuration to handle the <code>.well-known</code> path'
        }
    ];
    
    populateSteps(netlifySteps, netlifyStepsContent);

    // Populate Cloudflare Pages guide steps
    const cloudflareSteps = document.querySelector('#cloudflare-tab .guide-steps');
    const cloudflareStepsContent = [
        {
            title: 'Sign Up for Cloudflare',
            content: 'Create a free Cloudflare account at <a href="https://cloudflare.com" target="_blank">cloudflare.com</a>'
        },
        {
            title: 'Set Up Cloudflare Pages',
            content: 'Go to Pages in your Cloudflare dashboard and connect your repository'
        },
        {
            title: 'Add Your TOML File',
            content: 'Create a file at <code>.well-known/xrp-ledger.toml</code> in your repository'
        },
        {
            title: 'Configure _headers File',
            content: 'Create a file named <code>_headers</code> in your repository root to ensure proper handling of the <code>.well-known</code> directory'
        }
    ];
    
    populateSteps(cloudflareSteps, cloudflareStepsContent);

    // Function to populate steps
    function populateSteps(container, steps) {
        steps.forEach((step, index) => {
            const stepElement = document.createElement('div');
            stepElement.classList.add('step');
            
            stepElement.innerHTML = `
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                    <h4>${step.title}</h4>
                    <p>${step.content}</p>
                </div>
            `;
            
            container.appendChild(stepElement);
        });
    }

    // Scroll Animation
    const revealElements = document.querySelectorAll('.section-header, .feature-card, .tab-pane, .cta-content');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('reveal');
                element.classList.add('active');
            }
        });
    }
    
    // Initial check
    revealOnScroll();
    
    // On scroll
    window.addEventListener('scroll', revealOnScroll);

    // Add placeholder social links
    document.querySelector('.telegram-group').href = "https://t.me/MemeToolsXrpl";
    document.querySelector('.twitter').href = "https://x.com/MemeToolsXrp";
    document.querySelector('.buy-token').href = "#";
    document.querySelector('.buy-nft').href = "#";

    // Sample TOML content for reference
    const sampleTomlContent = `
[[ISSUERS]]
address = "rCSCManTZ8ME9EoLrSHHYKW8PPwWMgkwr"
name = "CasinoCoin"

[[TOKENS]]
issuer = "rCSCManTZ8ME9EoLrSHHYKW8PPwWMgkwr"
currency = "CSC"
name = "CasinoCoin"
desc = "CasinoCoin (CSC) is a digital currency, developed specifically for the regulated gaming industry."
icon = "https://xumm.app/assets/icons/currencies/ex-csc-3.png"

[[TOKENS.WEBLINKS]]
url = "https://casinocoin.im"
type = "website"
title = "Official Website"

[[TOKENS.WEBLINKS]]
url = "https://casinocoin.info"
type = "website"
title = "Token Info Dashboard"

[[TOKENS.WEBLINKS]]
url = "https://twitter.com/CasinoCoin"
type = "socialmedia"
`;

    // Create a sample TOML file section (optional)
    const guideSection = document.querySelector('.guide');
    const sampleSection = document.createElement('div');
    sampleSection.classList.add('container', 'sample-toml-section', 'mt-2');
    sampleSection.innerHTML = `
        <div class="section-header">
            <h2>Sample TOML File</h2>
            <p>Here's a basic example of an XRP Ledger TOML file:</p>
        </div>
        <div class="code-sample">
            <pre><code>${sampleTomlContent}</code></pre>
            <button class="btn secondary-btn copy-btn">Copy Sample</button>
        </div>
    `;
    
    guideSection.appendChild(sampleSection);
    
    // Copy sample TOML functionality
    const copyBtn = document.querySelector('.copy-btn');
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(sampleTomlContent.trim());
        copyBtn.textContent = 'Copied!';
        
        setTimeout(() => {
            copyBtn.textContent = 'Copy Sample';
        }, 2000);
    });

    // Password-protected download for First Ledger Extension
    const downloadButton = document.getElementById('download-extension');
    
    if (downloadButton) {
        downloadButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show password prompt
            const password = prompt("Please enter your NFT password to download the extension:");
            
            if (password) {
                // Log attempt for security monitoring
                console.log("Password attempt received");
                
                // Sample passwords from the generated list
                // In a real implementation, this would validate against your offline database
                // These are just a few examples from the passwords.txt file you'll store offline
                const validPasswords = [
                    "MEME_01_p8J7KFD5g2Xk", 
                    "MEME_02_Nc7m3VFK5gXk", 
                    "MEME_03_qV8Hw9nZG1rL",
                    "MEME_04_8nJj6dV7uQv3",
                    "MEME_05_k5gXkQfIUHcL",
                    "DEMO_PASSWORD" // Keeping this for testing
                ];
                
                if (validPasswords.includes(password)) {
                    alert("Password accepted! Your download will begin shortly.");
                    
                    // In a production environment, you would mark this password as used
                    // in your offline database
                    console.log("Successful password use recorded");
                    
                    // Simulate download initiation
                    setTimeout(function() {
                        // In production, this would be a secure download link
                        window.location.href = "https://firstledger.com/downloads/extension.zip";
                    }, 1500);
                } else {
                    alert("Invalid password. Please ensure you have purchased a MEME NFT and received your unique password.");
                }
            }
        });
    }
}); 