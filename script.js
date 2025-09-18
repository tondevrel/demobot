// Universal phone number formatting function
function formatPhoneNumber(input) {
    let value = input.value;
    
    // Remove all non-digit characters (only allow digits)
    value = value.replace(/[^\d]/g, '');
    
    // Add + at the beginning if there are digits
    if (value) {
        value = '+' + value;
    }
    
    input.value = value;
}

// Enhanced Demo form with validation and animations
document.addEventListener('DOMContentLoaded', function() {
    // AI Roles Animation
    const aiRoleElement = document.getElementById('aiRole');
    const aiRoleMobileElement = document.getElementById('aiRoleMobile');
    
    if (aiRoleElement || aiRoleMobileElement) {
        const roles = ['Receptionist', 'Sales Manager', 'Support Specialist'];
        let currentRoleIndex = 0;
        
        function animateRole() {
            // Fade out
            if (aiRoleElement) {
                aiRoleElement.style.opacity = '0';
            }
            if (aiRoleMobileElement) {
                aiRoleMobileElement.style.opacity = '0';
            }
            
            setTimeout(() => {
                // Change text
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                if (aiRoleElement) {
                    aiRoleElement.textContent = roles[currentRoleIndex];
                }
                if (aiRoleMobileElement) {
                    aiRoleMobileElement.textContent = roles[currentRoleIndex];
                }
                
                // Fade in
                if (aiRoleElement) {
                    aiRoleElement.style.opacity = '1';
                }
                if (aiRoleMobileElement) {
                    aiRoleMobileElement.style.opacity = '1';
                }
            }, 300);
        }
        
        // Start animation after 2 seconds, then repeat every 3 seconds
        setTimeout(() => {
            setInterval(animateRole, 3000);
        }, 2000);
    }
    
    // Demo Section Title Animation
    const demoTitleElement = document.getElementById('demoTitle');
    const demoSubtitleElement = document.getElementById('demoSubtitle');
    
    if (demoTitleElement && demoSubtitleElement) {
        const titleVariations = ['Calls', 'Clients', 'Leads'];
        const subtitleVariations = ['Reception', 'Support', 'Sales'];
        let currentIndex = 0;
        
        function animateDemoTitles() {
            // Fade out
            demoTitleElement.style.opacity = '0';
            demoSubtitleElement.style.opacity = '0';
            
            setTimeout(() => {
                // Change text
                currentIndex = (currentIndex + 1) % titleVariations.length;
                demoTitleElement.textContent = titleVariations[currentIndex];
                demoSubtitleElement.textContent = subtitleVariations[currentIndex];
                
                // Fade in
                demoTitleElement.style.opacity = '1';
                demoSubtitleElement.style.opacity = '1';
            }, 250);
        }
        
        // Start animation after 3 seconds, then repeat every 4 seconds
        setTimeout(() => {
            setInterval(animateDemoTitles, 4000);
        }, 3000);
    }
    
    // Mobile form elements
    const form = document.getElementById('demoForm');
    const nameInput = document.getElementById('demoName');
    const emailInput = document.getElementById('demoEmail');
    const phoneInput = document.getElementById('demoPhone');
    const scenarioSelect = document.getElementById('demoScenario');
    const submitButton = form ? form.querySelector('button[type="submit"]') : null;
    const successMessage = document.getElementById('demoSuccess');
    
    // PC form elements
    const formPC = document.getElementById('demoFormPC');
    const nameInputPC = document.getElementById('demoNamePC');
    const emailInputPC = document.getElementById('demoEmailPC');
    const phoneInputPC = document.getElementById('demoPhonePC');
    const scenarioSelectPC = document.getElementById('demoScenarioPC');
    const submitButtonPC = formPC ? formPC.querySelector('button[type="submit"]') : null;
    const successMessagePC = document.getElementById('demoSuccessPC');

    // Phone number formatting with automatic + prefix - Mobile
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            formatPhoneNumber(e.target);
        });

        // Prevent non-digit input in phone field
        phoneInput.addEventListener('keypress', function(e) {
            // Allow backspace, delete, tab, escape, enter
            if ([8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
                // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
                (e.keyCode === 65 && e.ctrlKey === true) ||
                (e.keyCode === 67 && e.ctrlKey === true) ||
                (e.keyCode === 86 && e.ctrlKey === true) ||
                (e.keyCode === 88 && e.ctrlKey === true)) {
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    }
    
    // Phone number formatting with automatic + prefix - PC
    if (phoneInputPC) {
        phoneInputPC.addEventListener('input', function(e) {
            formatPhoneNumber(e.target);
        });

        // Prevent non-digit input in phone field
        phoneInputPC.addEventListener('keypress', function(e) {
            // Allow backspace, delete, tab, escape, enter
            if ([8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
                // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
                (e.keyCode === 65 && e.ctrlKey === true) ||
                (e.keyCode === 67 && e.ctrlKey === true) ||
                (e.keyCode === 86 && e.ctrlKey === true) ||
                (e.keyCode === 88 && e.ctrlKey === true)) {
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    }

    // Real-time validation - Mobile
    function validateForm() {
        if (!nameInput || !emailInput || !phoneInput || !scenarioSelect || !submitButton) return;
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value;
        const scenario = scenarioSelect.value;
        
        // Basic email validation
        const emailValid = email.includes('@') && email.includes('.');
        
        // Phone validation: should start with + and have at least 10 digits after +
        const phoneValid = phone.startsWith('+') && phone.length >= 11;
        
        if (name.length >= 1 && emailValid && phoneValid && scenario) {
            submitButton.disabled = false;
            submitButton.classList.remove('opacity-50', 'cursor-not-allowed');
            submitButton.classList.add('hover:scale-105');
        } else {
            submitButton.disabled = true;
            submitButton.classList.add('opacity-50', 'cursor-not-allowed');
            submitButton.classList.remove('hover:scale-105');
        }
    }
    
    // Real-time validation - PC
    function validateFormPC() {
        if (!nameInputPC || !emailInputPC || !phoneInputPC || !scenarioSelectPC || !submitButtonPC) return;
        
        const name = nameInputPC.value.trim();
        const email = emailInputPC.value.trim();
        const phone = phoneInputPC.value;
        const scenario = scenarioSelectPC.value;
        
        // Basic email validation
        const emailValid = email.includes('@') && email.includes('.');
        
        // Phone validation: should start with + and have at least 10 digits after +
        const phoneValid = phone.startsWith('+') && phone.length >= 11;
        
        if (name.length >= 1 && emailValid && phoneValid && scenario) {
            submitButtonPC.disabled = false;
            submitButtonPC.classList.remove('opacity-50', 'cursor-not-allowed');
            submitButtonPC.classList.add('hover:scale-105');
        } else {
            submitButtonPC.disabled = true;
            submitButtonPC.classList.add('opacity-50', 'cursor-not-allowed');
            submitButtonPC.classList.remove('hover:scale-105');
        }
    }

    // Mobile form event listeners
    if (nameInput) nameInput.addEventListener('input', validateForm);
    if (emailInput) emailInput.addEventListener('input', validateForm);
    if (phoneInput) phoneInput.addEventListener('input', validateForm);
    if (scenarioSelect) scenarioSelect.addEventListener('change', validateForm);
    
    // PC form event listeners
    if (nameInputPC) nameInputPC.addEventListener('input', validateFormPC);
    if (emailInputPC) emailInputPC.addEventListener('input', validateFormPC);
    if (phoneInputPC) phoneInputPC.addEventListener('input', validateFormPC);
    if (scenarioSelectPC) scenarioSelectPC.addEventListener('change', validateFormPC);

    // Universal form submission function
    function handleFormSubmission(formData, submitButton, formElement, successMessageElement) {
        // Show loading state
        submitButton.innerHTML = `
            <span class="relative z-10 flex items-center gap-2">
                <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Scheduling your call...
            </span>
        `;
        submitButton.disabled = true;

        // Send to Google Apps Script
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyRiaViPF630YHlax9dLn-LOWh6x9ScAtiE2dSUm-1fBFx9m64jJN0ok-9PvxdHZ3P4Ag/exec';
        
        console.log('Form data:', formData);
        console.log('Script URL:', scriptURL);
        
        // Try multiple methods to ensure form submission works
        const submitForm = async () => {
            try {
                // Method 1: Try with fetch and CORS
                console.log('Trying fetch with CORS...');
                const response = await fetch(scriptURL, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    console.log('Form submitted successfully via fetch');
                    return true;
                }
            } catch (error) {
                console.log('Fetch with CORS failed:', error);
            }
            
            try {
                // Method 2: Try with fetch and no-cors
                console.log('Trying fetch with no-cors...');
                const params = new URLSearchParams(formData);
                const url = `${scriptURL}?${params.toString()}`;
                
                await fetch(url, {
                    method: 'GET',
                    mode: 'no-cors'
                });
                
                console.log('Form submitted via no-cors (assumed success)');
                return true;
            } catch (error) {
                console.log('Fetch with no-cors failed:', error);
            }
            
            try {
                // Method 3: Try with XMLHttpRequest
                console.log('Trying XMLHttpRequest...');
                const xhr = new XMLHttpRequest();
                const params = new URLSearchParams(formData);
                const url = `${scriptURL}?${params.toString()}`;
                
                return new Promise((resolve) => {
                    xhr.open('GET', url, true);
                    xhr.onload = () => {
                        console.log('Form submitted via XMLHttpRequest');
                        resolve(true);
                    };
                    xhr.onerror = () => {
                        console.log('XMLHttpRequest failed');
                        resolve(false);
                    };
                    xhr.send();
                });
            } catch (error) {
                console.log('XMLHttpRequest failed:', error);
            }
            
            try {
                // Method 4: Try with hidden form submission
                console.log('Trying hidden form submission...');
                const hiddenForm = document.createElement('form');
                hiddenForm.method = 'GET';
                hiddenForm.action = scriptURL;
                hiddenForm.target = '_blank';
                hiddenForm.style.display = 'none';
                
                // Add form fields
                Object.keys(formData).forEach(key => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = formData[key];
                    hiddenForm.appendChild(input);
                });
                
                document.body.appendChild(hiddenForm);
                hiddenForm.submit();
                document.body.removeChild(hiddenForm);
                
                console.log('Form submitted via hidden form');
                return true;
            } catch (error) {
                console.log('Hidden form submission failed:', error);
                return false;
            }
        };
        
        // Submit form and handle result
        submitForm().then((success) => {
                if (success) {
                    // Success - hide form and show success message
                    formElement.style.display = 'none';
                    successMessageElement.classList.remove('hidden');
                    
                    // Add animation to success message
                    successMessageElement.style.opacity = '0';
                    successMessageElement.style.transform = 'translateY(20px)';
                    successMessageElement.style.transition = 'all 0.5s ease';
                    
                    setTimeout(() => {
                        successMessageElement.style.opacity = '1';
                        successMessageElement.style.transform = 'translateY(0)';
                    }, 100);
                    
                    // Scroll to success message
                    successMessageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Track conversion
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'demo_form_submit', {
                        'event_category': 'engagement',
                        'event_label': scenarioSelect.value
                    });
                }
            } else {
                // All methods failed - show fallback
                console.error('All form submission methods failed');
                
                // Reset button on error
                submitButton.innerHTML = `
                    <span class="relative z-10 flex items-center gap-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                        </svg>
                        Get Your Demo Call
                    </span>
                `;
                submitButton.disabled = false;
                
                // Show fallback message with manual submission option
                const params = new URLSearchParams(formData);
                const manualURL = `${scriptURL}?${params.toString()}`;
                
                const fallbackMessage = `
Form submission failed, but we can try manually:

Your data:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Business Type: ${formData.role}

Click OK to open the submission URL in a new tab, or Cancel to try again.
                `;
                
                if (confirm(fallbackMessage)) {
                    window.open(manualURL, '_blank');
                    
                    // Still show success message since user can submit manually
                    formElement.style.display = 'none';
                    successMessageElement.classList.remove('hidden');
                    
                    // Add animation to success message
                    successMessageElement.style.opacity = '0';
                    successMessageElement.style.transform = 'translateY(20px)';
                    successMessageElement.style.transition = 'all 0.5s ease';
                    
                    setTimeout(() => {
                        successMessageElement.style.opacity = '1';
                        successMessageElement.style.transform = 'translateY(0)';
                    }, 100);
                    
                    // Scroll to success message
                    successMessageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }
    
    // Mobile form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneInput.value,
                role: scenarioSelect.value
            };
            
            handleFormSubmission(formData, submitButton, form, successMessage);
        });
    }
    
    // PC form submission
    if (formPC) {
        formPC.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: nameInputPC.value,
                email: emailInputPC.value,
                phone: phoneInputPC.value,
                role: scenarioSelectPC.value
            };
            
            handleFormSubmission(formData, submitButtonPC, formPC, successMessagePC);
        });
    }

    // Initialize form state
    validateForm();
    validateFormPC();

// Play demo function with better UX
function playDemo() {
    // Create modal for audio demo
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm';
    modal.innerHTML = `
        <div class="bg-white rounded-3xl p-8 max-w-lg mx-4 shadow-2xl border border-slate-200">
            <div class="text-center">
                <!-- Header with icon -->
                <div class="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                
                <!-- Title and description -->
                <h3 class="text-2xl font-bold text-slate-800 mb-3">Demo Call</h3>
                <p class="text-slate-600 mb-6 leading-relaxed">Demo case: AI receptionist booking a dental appointment</p>
                
                <!-- Audio player -->
                <div class="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 mb-6 border border-slate-200">
                    <div class="flex items-center justify-center gap-4">
                        <button onclick="playAudio()" class="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <div class="text-left">
                            <div class="text-sm font-semibold text-slate-800">Call Recording</div>
                            <div class="text-xs text-slate-500">2:34</div>
                        </div>
                    </div>
                </div>
                
                <!-- Close button -->
                <button onclick="closeModal()" class="w-full bg-slate-100 text-slate-700 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-colors border border-slate-200">
                    Close
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function playAudio() {
    const audio = document.getElementById('demoAudio');
    const playButton = event.target.closest('button');
    
    if (audio.paused) {
        // Play audio
        audio.play().then(() => {
            // Update button to show pause icon
            playButton.innerHTML = `
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
            `;
            playButton.classList.remove('bg-cyan-600', 'hover:bg-cyan-700');
            playButton.classList.add('bg-red-600', 'hover:bg-red-700');
        }).catch(error => {
            console.error('Error playing audio:', error);
            alert('Sorry, there was an error playing the demo. Please try again.');
        });
    } else {
        // Pause audio
        audio.pause();
        // Update button to show play icon
        playButton.innerHTML = `
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
            </svg>
        `;
        playButton.classList.remove('bg-red-600', 'hover:bg-red-700');
        playButton.classList.add('bg-cyan-600', 'hover:bg-cyan-700');
    }
}

function closeModal() {
    const modal = document.querySelector('.fixed.inset-0');
    if (modal) {
        // Stop audio if playing
        const audio = document.getElementById('demoAudio');
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
        modal.remove();
    }
}

// Calculate ROI function with modal
function calculateROI() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-3xl p-8 max-w-lg mx-4">
            <div class="text-center">
                <h3 class="text-2xl font-bold text-slate-800 mb-4">ROI Calculator</h3>
                <p class="text-slate-600 mb-6">Calculate how much you could save with AI receptionist</p>
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-2">Monthly calls missed</label>
                        <input type="number" placeholder="50" class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-2">Average value per call</label>
                        <input type="number" placeholder="$200" class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    </div>
                    <div class="bg-green-50 rounded-xl p-4">
                        <div class="text-2xl font-bold text-green-600">$10,000</div>
                        <div class="text-sm text-green-700">Potential monthly savings</div>
                    </div>
                </div>
                <button onclick="closeModal()" class="w-full bg-cyan-600 text-white py-3 rounded-2xl font-semibold hover:bg-cyan-700 transition-colors mt-6">
                    Get Started
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Book audit function
function bookAudit() {
    window.open('https://calendly.com/ai-worker-demo/30min', '_blank');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Hide loading screen when page is ready
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000); // Show loading for at least 1 second
    }
});

// Additional phone numbers functionality
function addPhoneNumber() {
    const container = document.getElementById('additionalPhones');
    const phoneCount = container.children.length + 1;
    
    const phoneDiv = document.createElement('div');
    phoneDiv.className = 'flex items-center gap-3';
    phoneDiv.innerHTML = `
        <div class="flex-1">
            <input
                type="tel"
                name="additionalPhone${phoneCount}"
                placeholder="+1 (555) 123-4567"
                class="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 focus:bg-white transition-all duration-300"
            >
        </div>
        <button type="button" onclick="removePhoneNumber(this)" class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors" title="Remove phone number">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </button>
    `;
    
    container.appendChild(phoneDiv);
    container.classList.remove('hidden');
    
    // Add phone formatting to the new input
    const newPhoneInput = phoneDiv.querySelector('input[type="tel"]');
    newPhoneInput.addEventListener('input', function(e) {
        formatPhoneNumber(e.target);
    });
    
    // Prevent non-digit input in new phone field
    newPhoneInput.addEventListener('keypress', function(e) {
        // Allow backspace, delete, tab, escape, enter
        if ([8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
            // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
            (e.keyCode === 65 && e.ctrlKey === true) ||
            (e.keyCode === 67 && e.ctrlKey === true) ||
            (e.keyCode === 86 && e.ctrlKey === true) ||
            (e.keyCode === 88 && e.ctrlKey === true)) {
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
}

function removePhoneNumber(button) {
    const phoneDiv = button.closest('.flex');
    phoneDiv.remove();
    
    const container = document.getElementById('additionalPhones');
    if (container.children.length === 0) {
        container.classList.add('hidden');
    }
}

// Close the main DOMContentLoaded function
});
