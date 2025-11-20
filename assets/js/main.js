// ================================================
// Anti-Ragging Portal - ANITS
// Main JavaScript File
// ================================================

document.addEventListener('DOMContentLoaded', function () {

    // ========== STUDENT COMPLAINT FORM ==========
    const complaintForm = document.getElementById('complaintForm');
    if (complaintForm) {
        complaintForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Bootstrap validation
            if (!complaintForm.checkValidity()) {
                e.stopPropagation();
                complaintForm.classList.add('was-validated');
                return;
            }

            // Generate random complaint ID
            const complaintId = 'ARW2025-' + Math.floor(100000 + Math.random() * 900000);
            document.getElementById('complaintId').textContent = complaintId;

            // Show success modal
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();

            // Reset form
            complaintForm.reset();
            complaintForm.classList.remove('was-validated');
        });
    }

    // ========== SOS BUTTON ==========
    const sosButton = document.getElementById('sosButton');
    if (sosButton) {
        sosButton.addEventListener('click', function () {
            const sosModal = new bootstrap.Modal(document.getElementById('sosModal'));
            sosModal.show();
        });
    }

    // ========== ADMIN LOGIN FORM ==========
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        // Password toggle
        const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('password');

        if (togglePassword && passwordInput) {
            togglePassword.addEventListener('click', function () {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);

                // Toggle icon
                const icon = this.querySelector('i');
                icon.classList.toggle('fa-eye');
                icon.classList.toggle('fa-eye-slash');
            });
        }

        // Login form submission
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Bootstrap validation
            if (!loginForm.checkValidity()) {
                e.stopPropagation();
                loginForm.classList.add('was-validated');
                return;
            }

            // Demo: Redirect to dashboard (in real app, validate credentials)
            window.location.href = 'admin-dashboard.html';
        });
    }

    // ========== FORGOT PASSWORD FORM ==========
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('resetEmail').value;

            if (email) {
                alert('Password reset link has been sent to ' + email);
                const modal = bootstrap.Modal.getInstance(document.getElementById('forgotPasswordModal'));
                modal.hide();
                forgotPasswordForm.reset();
            }
        });
    }

    // ========== ADMIN DASHBOARD - FILTERS ==========
    const statusFilter = document.getElementById('statusFilter');
    const severityFilter = document.getElementById('severityFilter');
    const searchInput = document.getElementById('searchInput');

    if (statusFilter || severityFilter || searchInput) {
        const filterComplaints = function () {
            const statusValue = statusFilter ? statusFilter.value : 'all';
            const severityValue = severityFilter ? severityFilter.value : 'all';
            const searchValue = searchInput ? searchInput.value.toLowerCase() : '';

            const rows = document.querySelectorAll('.complaint-row');

            rows.forEach(function (row) {
                let showRow = true;

                // Status filter
                if (statusValue !== 'all') {
                    const statusBadge = row.querySelector('.badge-pending, .badge-review, .badge-resolved');
                    if (statusBadge) {
                        const statusText = statusBadge.textContent.toLowerCase();
                        if (statusValue === 'pending' && !statusText.includes('pending')) showRow = false;
                        if (statusValue === 'review' && !statusText.includes('review')) showRow = false;
                        if (statusValue === 'resolved' && !statusText.includes('resolved')) showRow = false;
                    }
                }

                // Severity filter
                if (severityValue !== 'all') {
                    const severityBadge = row.querySelector('.badge-high, .badge-medium, .badge-low');
                    if (severityBadge) {
                        const severityText = severityBadge.textContent.toLowerCase();
                        if (!severityText.includes(severityValue)) showRow = false;
                    }
                }

                // Search filter
                if (searchValue) {
                    const rowText = row.textContent.toLowerCase();
                    if (!rowText.includes(searchValue)) showRow = false;
                }

                // Show/hide row
                row.style.display = showRow ? '' : 'none';
            });
        };

        if (statusFilter) statusFilter.addEventListener('change', filterComplaints);
        if (severityFilter) severityFilter.addEventListener('change', filterComplaints);
        if (searchInput) searchInput.addEventListener('input', filterComplaints);
    }

    // ========== EXPORT BUTTONS ==========
    const exportCSV = document.getElementById('exportCSV');
    const exportExcel = document.getElementById('exportExcel');
    const exportPDF = document.getElementById('exportPDF');

    if (exportCSV) {
        exportCSV.addEventListener('click', function () {
            alert('CSV export functionality - In production, this would download a CSV file with all complaints data.');
        });
    }

    if (exportExcel) {
        exportExcel.addEventListener('click', function () {
            alert('Excel export functionality - In production, this would download an Excel file with all complaints data.');
        });
    }

    if (exportPDF) {
        exportPDF.addEventListener('click', function () {
            alert('PDF export functionality - In production, this would generate and download a PDF report.');
        });
    }

    // ========== SIDEBAR NAVIGATION (DASHBOARD) ==========
    const sidebarLinks = document.querySelectorAll('.admin-sidebar .nav-link[data-section]');

    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links
            sidebarLinks.forEach(function (l) {
                l.classList.remove('active');
            });

            // Add active class to clicked link
            this.classList.add('active');

            // Get section name
            const section = this.getAttribute('data-section');

            // Demo: Show alert (in real app, would load different content)
            if (section === 'dashboard') {
                // Already on dashboard
            } else {
                alert('Navigation to ' + section + ' section - In production, this would load the respective content dynamically.');
            }
        });
    });

    // ========== VIEW DETAILS BUTTONS ==========
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    viewDetailsButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const row = this.closest('.complaint-row');
            const complaintId = row.getAttribute('data-id');

            // In production, would fetch actual data
            // For demo, modal already has sample data
            console.log('Viewing details for complaint: ' + complaintId);
        });
    });

    // ========== FORM VALIDATION - PHONE NUMBER ==========
    const phoneInputs = document.querySelectorAll('input[type="tel"]');

    phoneInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            // Remove non-numeric characters
            this.value = this.value.replace(/[^0-9]/g, '');

            // Limit to 10 digits
            if (this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }
        });
    });

    // ========== FILE UPLOAD VALIDATION ==========
    const fileInput = document.getElementById('evidenceFile');

    if (fileInput) {
        fileInput.addEventListener('change', function () {
            const files = this.files;
            const maxSize = 10 * 1024 * 1024; // 10MB
            const maxFiles = 5;

            if (files.length > maxFiles) {
                alert('You can upload a maximum of ' + maxFiles + ' files.');
                this.value = '';
                return;
            }

            for (let i = 0; i < files.length; i++) {
                if (files[i].size > maxSize) {
                    alert('File "' + files[i].name + '" is too large. Maximum size is 10MB.');
                    this.value = '';
                    return;
                }
            }
        });
    }

    // ========== ANONYMOUS CHECKBOX ==========
    const anonymousCheck = document.getElementById('anonymousCheck');
    const studentNameInput = document.getElementById('studentName');
    const studentRollNoInput = document.getElementById('studentRollNo');

    if (anonymousCheck && studentNameInput) {
        anonymousCheck.addEventListener('change', function () {
            if (this.checked) {
                studentNameInput.value = '';
                studentNameInput.disabled = true;
                studentNameInput.placeholder = 'Anonymous submission';

                if (studentRollNoInput) {
                    studentRollNoInput.value = '';
                    studentRollNoInput.disabled = true;
                    studentRollNoInput.placeholder = 'Hidden';
                }
            } else {
                studentNameInput.disabled = false;
                studentNameInput.placeholder = 'Enter your name';

                if (studentRollNoInput) {
                    studentRollNoInput.disabled = false;
                    studentRollNoInput.placeholder = 'Your roll number';
                }
            }
        });
    }

    // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ========== NAVBAR ACTIVE STATE ==========
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(function (link) {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ========== DROPDOWN MENU ACTIVE STATE ==========
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(function (item) {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
            const dropdownToggle = item.closest('.dropdown').querySelector('.dropdown-toggle');
            if (dropdownToggle) {
                dropdownToggle.classList.add('active');
            }
        }
    });

    // ========== LOADING ANIMATION ==========
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });

    // ========== PREVENT FORM RESUBMISSION ON REFRESH ==========
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    // ========== CONSOLE MESSAGE ==========
    console.log('%c Anti-Ragging Portal - ANITS ', 'background: #1e3a8a; color: #ffffff; font-size: 16px; font-weight: bold; padding: 10px;');
    console.log('%c Frontend Prototype | Version 1.0 ', 'background: #0d9488; color: #ffffff; font-size: 12px; padding: 5px;');
    console.log('This is a UI prototype. No backend functionality is implemented.');

});

// ========== UTILITY FUNCTIONS ==========

// Generate random complaint ID
function generateComplaintId() {
    const prefix = 'ARW2025-';
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return prefix + randomNum;
}

// Format date
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-IN', options);
}

// Show notification (can be used for future enhancements)
function showNotification(message, type = 'info') {
    alert(message); // In production, use a proper notification library
}

// Validate email format
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate phone number
function isValidPhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
}

// ========== END OF FILE ==========
