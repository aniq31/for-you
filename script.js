function nextStep(stepNumber) {
    // Hide all steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.remove('active'));

    // Show current step
    const currentStep = document.getElementById(`step${stepNumber}`);
    if (currentStep) {
        currentStep.classList.add('active');
    }
}

// Make the "No" button dodge the cursor/tap
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Calculate random position within card limits
    const x = Math.random() * 200 - 100; // -100px to 100px
    const y = Math.random() * 100 - 50;   // -50px to 50px
    
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Handle clicking Yes
function celebrate() {
    nextStep(4);
}
