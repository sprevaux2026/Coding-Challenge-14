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
  