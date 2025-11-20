# Anti-Ragging Portal - ANITS (Frontend Prototype)

A fully functional, responsive, clean, and professional frontend-only prototype for the Anti-Ragging Portal of Anil Neerukonda Institute of Technology & Sciences (ANITS).

## 🎯 Project Overview

This is a **UI/UX prototype** demonstrating how the final Anti-Ragging Portal will look and function. It includes all frontend pages with interactive elements, but **no backend functionality** (no database, no authentication, no data storage).

## 🎨 Design Theme

- **Primary Color:** Navy Blue (#1e3a8a)
- **Secondary Color:** Teal (#0d9488)
- **Accent Color:** Light Gray (#f1f5f9)
- **Design Philosophy:** Modern, professional, highly readable, and official college website look
- **No Gradients:** Clean solid colors only

## 📁 Project Structure

```
AARW-prototype/
│
├── index.html                  # Home page with navigation cards
├── student.html                # Student complaint submission form
├── admin-login.html            # Admin login page
├── admin-dashboard.html        # Admin dashboard with complaints table
│
├── guidelines.html             # Anti-ragging guidelines
├── student-rights.html         # Student rights information
├── penalties.html              # Penalties for ragging
├── helplines.html              # Emergency helplines
├── awareness.html              # Awareness posters and campaigns
│
└── assets/
    ├── css/
    │   └── main.css           # Main stylesheet with all styling
    ├── js/
    │   └── main.js            # JavaScript for interactivity
    └── images/
        └── (placeholder for images)
```

## 🚀 Features

### 1. Home Page (index.html)

- Large header with ANITS branding
- Two prominent navigation cards:
  - Admin Portal
  - Student Complaint Submission
- About Anti-Ragging Cell section
- Statistics display
- Professional footer

### 2. Student Complaint Submission (student.html)

- Comprehensive complaint form with:
  - Personal information (optional)
  - Email (mandatory)
  - Phone number (mandatory)
  - Complaint title and description
  - Location dropdown
  - Severity level selector
  - File upload capability
  - Anonymous submission checkbox
- Success modal after submission
- **Floating SOS Button** (bottom-right corner, red color)

### 3. Admin Login Page (admin-login.html)

- Clean, centered login card
- Username and password fields
- Password visibility toggle
- Remember me checkbox
- Forgot password modal
- Responsive design

### 4. Admin Dashboard (admin-dashboard.html)

- Professional sidebar navigation
- Statistics cards (Total, Pending, In Review, Resolved)
- Complaint filters (Status, Severity, Date, Search)
- Interactive complaints table with sample data
- Complaint details modal
- Analytics section with chart placeholders
- Export buttons (CSV, Excel, PDF) - UI only
- Location-wise distribution display

### 5. Awareness & Support Pages

- **Guidelines:** Comprehensive anti-ragging guidelines and UGC regulations
- **Student Rights:** Information about student rights and protections
- **Penalties:** Details of consequences for ragging offenses
- **Helplines:** All emergency contacts and helpline numbers
- **Awareness:** Campaign posters, slogans, and educational content

## 💻 Technologies Used

- **HTML5:** Semantic markup
- **CSS3:** Custom styling with modern features
- **JavaScript:** Vanilla JS for interactivity
- **Bootstrap 5.3.0:** Responsive grid and components
- **FontAwesome 6.4.0:** Professional icons

**No other external packages or libraries used.**

## ✨ Key Features

### Responsive Design

- Fully mobile-responsive
- Works on all screen sizes (mobile, tablet, desktop)
- Bootstrap grid system
- Media queries for fine-tuning

### Interactive Elements

- Form validation (HTML5 + JavaScript)
- Modal dialogs (success, details, SOS)
- Dropdown menus
- Table filtering and search
- Password visibility toggle
- Anonymous submission option
- File upload with validation

### Professional UI/UX

- Consistent color scheme throughout
- Clean typography
- Smooth transitions (no harsh animations)
- Card-based layouts
- Intuitive navigation
- Accessibility considerations

## 🔧 Setup & Usage

### Installation

1. Download or clone the project folder
2. No installation required - it's pure HTML/CSS/JS
3. Open `index.html` in any modern web browser

### Navigation

- **Home:** index.html
- **Student Portal:** Click "Student Complaint Submission" or navigate to student.html
- **Admin Portal:** Click "Admin Portal" → Use any credentials to login → View admin-dashboard.html
- **Awareness Pages:** Use dropdown menu in navbar

### Demo Credentials (Admin Login)

- Username: Any text (demo mode)
- Password: Any text (demo mode)
- Clicking login redirects to dashboard

## 🎭 Prototype Limitations

This is a **frontend-only prototype**. The following are not implemented:

- ❌ No backend server
- ❌ No database connectivity
- ❌ No actual authentication
- ❌ No data storage or retrieval
- ❌ No email notifications
- ❌ No file upload processing
- ❌ No actual export functionality
- ❌ Charts are placeholders only

All forms and buttons show demo behavior (alerts/modals) to simulate functionality.

## 📱 Browser Compatibility

Tested and working on:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Edge (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 Pages Included

1. **index.html** - Home page
2. **student.html** - Complaint submission form
3. **admin-login.html** - Admin login
4. **admin-dashboard.html** - Admin dashboard
5. **guidelines.html** - Anti-ragging guidelines
6. **student-rights.html** - Student rights
7. **penalties.html** - Penalties information
8. **helplines.html** - Emergency contacts
9. **awareness.html** - Awareness materials

## 🎨 Design Highlights

- No linear gradients (solid colors only)
- 3 consistent theme colors used throughout
- Modern card-based layouts
- Professional typography
- Clean, minimal transitions
- Bootstrap spacing utilities
- Proper whitespace management
- Accessible color contrasts

## 📞 Sample Contact Information

The prototype includes sample contact details:

- Helpline: 1800-180-5522 (24/7)
- Email: antiragging@anits.edu.in
- Emergency: Police (100), Ambulance (108)

## 🏆 Production-Ready Features

- Clean, well-commented code
- Semantic HTML5
- Organized CSS with BEM-like naming
- Modular JavaScript
- Mobile-first responsive design
- Cross-browser compatible
- SEO-friendly structure
- Accessibility considerations

## 📝 Notes for Development Team

When converting to production:

1. Integrate with backend API
2. Implement actual authentication
3. Connect to database
4. Add real-time notifications
5. Implement file upload to server
6. Add actual chart libraries
7. Implement export functionality
8. Add email notification system
9. Implement proper session management
10. Add security features (CSRF, XSS protection)

## 👥 Target Audience

- Students (for submitting complaints)
- Admin/Committee Members (for managing complaints)
- Faculty and Staff (for awareness)
- Parents/Guardians (for information)

## 📄 License

This is a prototype for Anil Neerukonda Institute of Technology & Sciences.

---

**© 2025 Anil Neerukonda Institute of Technology & Sciences. All Rights Reserved.**

_Anti-Ragging Cell | Making Campus Life Safe and Dignified_
