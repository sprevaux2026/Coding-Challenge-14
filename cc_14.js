// Task 2: Create Support Ticket Dynamically
function createTicket(customerName, issueDescription, priority) {
    // Create the ticket element
    const ticket = document.createElement('div');
    ticket.className = 'support-ticket';
    ticket.setAttribute('data-id', Date.now());
  
    // Create a heading for customer name
    const nameHeading = document.createElement('h3');
    nameHeading.textContent = customerName;
  
    // Create a paragraph for the issue description
    const issuePara = document.createElement('p');
    issuePara.textContent = issueDescription;
  
    // Create a label for priority
    const priorityLabel = document.createElement('span');
    priorityLabel.textContent = 'Priority: ' + priority;
    
    // Mark high priority tickets
    if (priority.toLowerCase() === 'high') {
      ticket.classList.add('high-priority');
    }
  
    // Create the Resolve button
    const resolveBtn = document.createElement('button');
    resolveBtn.textContent = 'Resolve';
    resolveBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      ticket.parentElement.removeChild(ticket);
    });
  
    // Append the static content to the ticket
    ticket.appendChild(nameHeading);
    ticket.appendChild(issuePara);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveBtn);

     //Add double-click to enable inline editing (task 5)
  ticket.addEventListener('dblclick', function() {
    inlineEditTicket(ticket, nameHeading, issuePara, priorityLabel);
  });
  
    // Add the ticket to the container
    document.getElementById('ticketContainer').appendChild(ticket);
  }
  // Task 3: Highlight High Priority Tickets
function highlightHighPriorityTickets() {
    const tickets = document.querySelectorAll('.high-priority');
    // Loop through each ticket and add the 'highlight' class
    Array.from(tickets).forEach(ticket => {
      ticket.classList.add('highlight');
    });
  }
  // Task 4: Log clicks on the ticket container (except for Resolve button clicks)
document.getElementById('ticketContainer').addEventListener('click', function(event) {
    console.log('Ticket clicked:', event.target);
  });
  // Task 5: Inline Editing for Support Tickets
function inlineEditTicket(ticket, nameHeading, issuePara, priorityLabel) {
    // Create inputs pre-filled with current values
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = nameHeading.textContent;
  
    const issueInput = document.createElement('input');
    issueInput.type = 'text';
    issueInput.value = issuePara.textContent;
  
    const priorityInput = document.createElement('input');
    priorityInput.type = 'text';
    // Remove "Priority: " to get just the priority text
    priorityInput.value = priorityLabel.textContent.replace('Priority: ', '');
  
    // Create a Save button
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
  
    // Clear the ticket's current static content
    ticket.innerHTML = '';
  
    // Add input fields and the Save button to the ticket
    ticket.appendChild(nameInput);
    ticket.appendChild(issueInput);
    ticket.appendChild(priorityInput);
    ticket.appendChild(saveBtn);
  
    // Re-create the Resolve button so the ticket can still be removed
    const resolveBtn = document.createElement('button');
    resolveBtn.textContent = 'Resolve';
    resolveBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      ticket.parentElement.removeChild(ticket);
    });
    ticket.appendChild(resolveBtn);
  
    // When Save is clicked, update the ticket with new static content
    saveBtn.addEventListener('click', function() {
      const updatedName = nameInput.value;
      const updatedIssue = issueInput.value;
      const updatedPriority = priorityInput.value;
  
      // Clear the ticket to remove input fields
      ticket.innerHTML = '';
  
      // Create new elements with updated values
      const updatedNameHeading = document.createElement('h3');
      updatedNameHeading.textContent = updatedName;
      const updatedIssuePara = document.createElement('p');
      updatedIssuePara.textContent = updatedIssue;
      const updatedPriorityLabel = document.createElement('span');
      updatedPriorityLabel.textContent = 'Priority: ' + updatedPriority;
  
      // If priority is still high, keep it marked
      if (updatedPriority.toLowerCase() === 'high') {
        ticket.classList.add('high-priority');
      } else {
        ticket.classList.remove('high-priority');
      }
  
      // Append updated content and the Resolve button
      ticket.appendChild(updatedNameHeading);
      ticket.appendChild(updatedIssuePara);
      ticket.appendChild(updatedPriorityLabel);
      ticket.appendChild(resolveBtn);
    });
  }
  