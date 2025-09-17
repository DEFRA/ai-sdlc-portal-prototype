//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Role selection form handling
router.post('/choose-role', function (req, res) {
  const selectedRole = req.session.data['role']

  if (selectedRole === 'software-engineer') {
    res.redirect('/software-engineer')
  } else {
    // For future roles, redirect back with error or to generic hub
    res.redirect('/choose-role')
  }
})

// Request form handling
router.post('/request-form', function (req, res) {
  // Validate required fields
  const errors = {}

  if (!req.session.data['name'] || req.session.data['name'].trim() === '') {
    errors['name'] = 'Enter your name'
  }

  if (!req.session.data['email'] || req.session.data['email'].trim() === '') {
    errors['email'] = 'Enter your email address'
  }

  if (!req.session.data['request-type']) {
    errors['request-type'] = 'Select what you need help with'
  }

  if (
    !req.session.data['details'] ||
    req.session.data['details'].trim() === ''
  ) {
    errors['details'] = 'Tell us more about your request'
  }

  if (!req.session.data['urgency']) {
    errors['urgency'] = 'Select how urgent this request is'
  }

  // If there are errors, redirect back with errors
  if (Object.keys(errors).length > 0) {
    req.session.data['errors'] = errors
    res.redirect('/request-form')
    return
  }

  // Clear any previous errors and store success state
  delete req.session.data['errors']
  req.session.data['request-submitted'] = true
  res.redirect('/request-success')
})

// Prompt library form handling (for adding new prompts)
router.post('/prompt-library/add', function (req, res) {
  // In a real app, this would save to database
  req.session.data['prompt-submitted'] = true
  res.redirect('/prompt-library?success=true')
})

// Generic hub route for users whose role isn't listed
router.get('/generic-hub', function (req, res) {
  res.render('generic-hub')
})
