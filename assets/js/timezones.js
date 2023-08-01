document.getElementById('timezones').onchange = timezoneChangeListener;
const program = {
  days: [
    {
      sessions: [
//	{
//	  title: "Opening and welcome",
//	  events: [
//	    {
//	      type: "opening",
//	      start : "19 Jul 2021 06:20:00",
//	      end: "19 Jul 2021 06:30:00",
//	      authors: "Alejandro Díaz-Caro and Naoki Kobayashi",
//	      title: "Welcome message"
//	    }
//	  ]
//	},
	{
	  title: "Invited talk",
	  chair: "Naoki Kobayashi",
	  events: [
	    {
	      type: "talk",
	      start : "19 Jul 2021 06:30:00",
	      end: "19 Jul 2021 07:30:00",
	      authors: "Nao Hirokawa",
	      title: "Completion and Reduction Orders"
	    },
	    {
	      type: "break",
	      start: "19 Jul 2021 07:30:00",
	      end: "19 Jul 2021 08:00:00"
	    }
	  ]
	},
	{
	  title: "Session: Concurrency and formal languages",
	  chair: "Alejandro Díaz-Caro",
	  events: [
	    {
	      type: "talk",
	      start : "19 Jul 2021 08:00:00",
	      end: "19 Jul 2021 08:30:00",
	      authors: "Ken Sakayori and Takeshi Tsukada",
	      title: "Output without Delay: A Pi-calculus Compatible with Categorical Semantics"
	    },
	    {
	      type: "talk",
	      start : "19 Jul 2021 08:30:00",
	      end: "19 Jul 2021 09:00:00",
	      authors: "Hans-Peter Deifel, Stefan Milius, and Thorsten Wißmann",
	      title: "Coalgebra Encoding for Efficient Minimization"
	    },
	    {
	      type: "talk",
	      start: "19 Jul 2021 09:00:00",
	      end: "19 Jul 2021 09:30:00",
	      authors: "Jakob Grue Simonsen",
	      title: "The Expressive Power of One Variable Used Once: The Chomsky Hierarchy and First-Order Monadic Constructor Rewriting"
	    },
	    {
	      type: "talk",
	      start: "19 Jul 2021 09:30:00",
	      end: "19 Jul 2021 10:00:00",
	      authors: "Joseph Paulus, Daniele Nantes-Sobrinho, and Jorge A. Pérez",
	      title: "Non-Deterministic Functions as Non-Deterministic Processes"
	    },
	    {
	      type: "break",
	      start: "19 Jul 2021 10:00:00",
	      end: "19 Jul 2021 10:30:00"
	    }
	  ]
	},
	{
	  title: "Session: Term rewrite systems",
	  chair: "Sarah Winkler",
	  events: [
	    {
	      type: "talk",
	      start: "19 Jul 2021 10:30:00",
	      end: "19 Jul 2021 11:00:00",
	      authors: "Vincent van Oostrom",
	      title: "Z; syntax-free developments"
	    },
	    {
	      type: "talk",
	      start: "19 Jul 2021 11:00:00",
	      end: "19 Jul 2021 11:30:00",
	      authors: "Cynthia Kop and Deivid Vale",
	      title: "Tuple Interpretations for Higher-Order Rewriting"
	    },
	    {
	      type: "talk",
	      start: "19 Jul 2021 11:30:00",
	      end: "19 Jul 2021 12:00:00",
	      authors: "Dohan Kim and Christopher Lynch",
	      title: "An RPO-based ordering modulo permutation equations and its applications to rewrite systems"
	    },
	    {
	      type: "talk",
	      start: "19 Jul 2021 12:00:00",
	      end: "19 Jul 2021 12:30:00",
	      authors: "Deepak Kapur",
	      title: "A Modular Associative Commutative (AC) Congruence Closure Algorithm"
	    }
	  ]
	}
      ]
    },
    { 
      sessions: [
	{
	  title: "Session: Types and control structures",
	  chair: "Herman Geuvers",
	  events: [
	    {
	      type: "talk",
	      start: "20 Jul 2021 06:30:00",
	      end: "20 Jul 2021 07:00:00",
	      authors: "Youyou Cong, Chiaki Ishio, Kaho Honda, and Kenichi Asai",
	      title: "A Functional Abstraction of Typed Invocation Contexts"
	    },
	    {
	      type: "talk",
	      start: "20 Jul 2021 07:00:00",
	      end: "20 Jul 2021 07:30:00",
	      authors: "Maika Fujii and Kenichi Asai",
	      title: "Derivation of a Virtual Machine for Four Variants of Delimited-Control Operators"
	    },
	    {
	      type: "talk",
	      start: "20 Jul 2021 07:30:00",
	      end: "20 Jul 2021 08:00:00",
	      authors: "Paolo Pistone and Luca Tranchini",
	      title: "What's Decidable about (Atomic) Polymorphism?"
	    },
	    {
	      type: "talk",
	      start: "20 Jul 2021 08:00:00",
	      end: "20 Jul 2021 08:30:00",
	      authors: "Ugo Dal Lago and Francesco Gavazzo",
	      title: "Resource Transition Systems and Full Abstraction for Linear Higher-Order Effectful Programs"
	    },
	    {
	      type: "break",
	      start: "20 Jul 2021 08:30:00",
	      end: "20 Jul 2021 09:00:00"
	    }
	  ]
	},
	{
	  title: "Session: Lambda-calculus",
	  chair: "Silvia Ghilezan",
	  events: [
	    {
	      type: "talk",
	      start: "20 Jul 2021 09:00:00",
	      end: "20 Jul 2021 09:30:00",
	      authors: "Axel Kerinec, Giulio Manzonetto, and Simona Ronchi Della Rocca",
	      title: "Call-By-Value, Again!"
	    },
	    {
	      type: "talk",
	      start: "20 Jul 2021 09:30:00",
	      end: "20 Jul 2021 10:00:00",
	      authors: "Thibaut Balabonski, Antoine Lanco, and Guillaume Melquiond",
	      title: "A strong call-by-need calculus"
	    },
	    {
	      type: "talk",
	      start: "20 Jul 2021 10:00:00",
	      end: "20 Jul 2021 10:30:00",
	      authors: "Lison Blondeau-Patissier and Pierre Clairambault",
	      title: "Positional Injectivity for Innocent Strategies"
	    },
	    {
	      type: "talk",
	      start: "20 Jul 2021 10:30:00",
	      end: "20 Jul 2021 11:00:00",
	      authors: "Richard Statman",
	      title: "Church's semigroup is sq-universal"
	    },
	    {
	      type: "break",
	      start: "20 Jul 2021 11:00:00",
	      end: "20 Jul 2021 11:30:00"
	    }
	  ]
	},
	{
	  title: "Invited talk",
	  chair: "Amy Felty",
	  events: [
	    {
	      type: "talk",
	      start: "20 Jul 2021 11:30:00",
	      end: "20 Jul 2021 12:30:00",
	      authors: "Zena M. Ariola",
	      title: "Duality in Action"
	    }
	  ]
	}
      ]
    },
    {
      sessions: [
	{
	  title: "Invited talk",
	  chair: "Claudia Faggian",
	  events: [
	    {
	      type: "talk",
	      start: "21 Jul 2021 06:30:00",
	      end: "21 Jul 2021 07:30:00",
	      authors: "Sam Staton",
	      title: "Some Formal Structures in Probability"
	    },
	    {
	      type: "break",
	      start: "21 Jul 2021 07:30:00",
	      end: "21 Jul 2021 08:00:00"
	    }
	  ]
	},
	{
	  title: "Session: Categorical semantics, algebras and coalgebras",
	  chair: "Ichiro Hasuo",
	  events: [
	    {
	      type: "talk",
	      start: "21 Jul 2021 08:00:00",
	      end: "21 Jul 2021 08:30:00",
	      authors: "Zeinab Galal",
	      title: "A bicategorical semantics for finite non-determinism"
	    },
	    {
	      type: "talk",
	      start: "21 Jul 2021 08:30:00",
	      end: "21 Jul 2021 09:00:00",
	      authors: "Cristina Matache, Sean Moss, and Sam Staton",
	      title: "Recursion and Sequentiality in Categories of Sheaves"
	    },
	    {
	      type: "talk",
	      start: "21 Jul 2021 09:00:00",
	      end: "21 Jul 2021 09:30:00",
	      authors: "Nathanael Arkor and Dylan McDermott",
	      title: "Abstract clones for abstract syntax"
	    },
	    {
	      type: "talk",
	      start: "21 Jul 2021 09:30:00",
	      end: "21 Jul 2021 10:00:00",
	      authors: "Pieter Hofstra, Jason Parker, and Philip Scott",
	      title: "Polymorphic Automorphisms and the Picard Group"
	    },
	    {
	      type: "break",
	      start: "21 Jul 2021 10:00:00",
	      end: "21 Jul 2021 10:30:00"
	    },
	    {
	      type: "GM",
	      start: "21 Jul 2021 10:30:00",
	      end: "21 Jul 2021 12:00:00",
	    }
	  ]
	}
      ]
    },
    {
      sessions: [
	{
	  title: "Session: Logic",
	  chair: "Stefano Berardi",
	  events: [
	    {
	      type: "talk",
	      start: "22 Jul 2021 06:30:00",
	      end: "22 Jul 2021 07:00:00",
	      authors: "Kenji Saotome, Koji Nakazawa, and Daisuke Kimura",
	      title: "Failure of cut-elimination in the cyclic proof system of bunched logic with inductive propositions"
	    },
	    {
	      type: "talk",
	      start: "22 Jul 2021 07:00:00",
	      end: "22 Jul 2021 07:30:00",
	      authors: "Anupam Das and Alex Rice",
	      title: "New minimal linear inferences in Boolean logic independent of switch and medial"
	    },
	    {
	      type: "talk",
	      start: "22 Jul 2021 07:30:00",
	      end: "22 Jul 2021 08:00:00",
	      authors: "Didier Galmiche, Marta Gawek, and Daniel Mery",
	      title: "Beth Semantics and Labelled Deduction for Intuitionistic Sentential Calculus with Identity"
	    },
	    {
	      type: "talk",
	      start: "22 Jul 2021 08:00:00",
	      end: "22 Jul 2021 08:30:00",
	      authors: "Anupam Das",
	      title: "On the logical strength of confluence and normalisation for cyclic proofs"
	    },
	    {
	      type: "break",
	      start: "22 Jul 2021 08:30:00",
	      end: "22 Jul 2021 09:00:00"
	    }
	  ]
	},
	{
	  title: "Invited talk",
	  chair: "Delia Kesner",
	  events: [
	    {
	      type: "talk",
	      start: "22 Jul 2021 09:00:00",
	      end: "22 Jul 2021 10:00:00",
	      authors: "Elaine Pimentel",
	      title: "Process-as-formula interpretation: A substructural multimodal view"
	    },
	    {
	      type: "break",
	      start: "22 Jul 2021 10:00:00",
	      end: "22 Jul 2021 10:30:00"
	    },
	  ]
	},
{
	  title: "Session: Type theory and proof assistants",
	  chair: "Mauricio Ayala-Rincon",
	  events: [
	    {
	      type: "price",
	      start: "22 Jul 2021 10:30:00",
	      end: "22 Jul 2021 11:05:00",
	      authors: "Tom de Jong and Martin Escardo",
	      title: "Predicative Aspects of Order Theory in Univalent Foundations"
	    },
	    {
	      type: "talk",
	      start: "22 Jul 2021 11:05:00",
	      end: "22 Jul 2021 11:35:00",
	      authors: "Frédéric Blanqui, Gilles Dowek, Emilie Grienenberger, Gabriel Hondet, and François Thiré",
	      title: "Some axioms for mathematics"
	    },
	    {
	      type: "talk",
	      start: "22 Jul 2021 11:35:00",
	      end: "22 Jul 2021 12:05:00",
	      authors: "Niccolò Veltri",
	      title: "Type Theoretic Constructions of the Final Coalgebra of the Finite Powerset Functor"
	    },
	    {
	      type: "talk",
	      start: "22 Jul 2021 12:05:00",
	      end: "22 Jul 2021 12:35:00",
	      authors: "Dominique Larchey-Wendling",
	      title: "Synthetic Undecidability of MSELL via FRACTRAN mechanised in Coq"
	    }
	  ]
	}
      ]
    }
  ]
};
const defaultTimezone = -3;
drawProgram(defaultTimezone);

function timezoneChangeListener(){
  drawProgram(this.value);
}

function newDate(dateString, timezone){
  date = new Date(dateString);
  date.setTime(date.getTime() + (timezone - defaultTimezone)*60*60*1000);
  return date;
}

function getDayOrdinal(num) {
  switch(num) {
    case 17:
      return '17th';
    case 18:
      return '18th';
    case 19:
      return '19th';
    case 20:
      return '20th';
    case 21:
      return '21st';
    case 22:
      return '22nd';
    case 23:
      return '23rd';
    case 24:
      return '24th';
      default:
      return num.toString() + 'th';
  }
}

function printableTime(date){
  return date.getHours().toString().padStart(2,'0') + ':' + date.getMinutes().toString().padStart(2, '0');
}

function drawProgram(timezone){
  var table = document.createElement('table');
  table.setAttribute('cellspacing', '0');
  table.setAttribute('cellpadding', '0');

  var thead = document.createElement('thead');
  var row = document.createElement('tr');
  var header = document.createElement('th');
  header.innerText = 'Start';
  row.appendChild(header);
  var header = document.createElement('th');
  header.innerText = 'End';
  row.appendChild(header);
  var header = document.createElement('th');
  header.innerText = 'Authors';
  row.appendChild(header);
  var header = document.createElement('th');
  header.innerText = 'Title';
  row.appendChild(header);
  thead.appendChild(row);

  var tbody = document.createElement('tbody');
  for (const day of program.days) {
    var firstDate = newDate(day.sessions[0].events[0].start, timezone);
    var lastDate = newDate(day.sessions[day.sessions.length-1].events[day.sessions[day.sessions.length-1].events.length-1].end, timezone);
    row = document.createElement('tr');
    var data = document.createElement('td');
    data.setAttribute('colspan', '4');
    data.setAttribute('style', 'background: #893161; color: #ffffff; text-align: center; font-weight: bold;'); //ffadad
    if (firstDate.getDate() == lastDate.getDate()) {
      data.innerText = 'July ' + getDayOrdinal(firstDate.getDate());
    } else {
      data.innerText = 'July ' + getDayOrdinal(firstDate.getDate()) + ' - July ' + getDayOrdinal(lastDate.getDate());
    }
    row.appendChild(data);
    tbody.appendChild(row);
    for (const session of day.sessions) {
      row = document.createElement('tr');
      row.setAttribute('style', 'border-bottom: 0');
      data = document.createElement('td');
      data.setAttribute('colspan', '4');
      data.setAttribute('style', 'background: #9df6ff; text-align: center; font-weight: bold; line-height: 4px;');
      data.innerText = session.title;
      row.appendChild(data);
      tbody.appendChild(row);
      //
	row = document.createElement('tr');
	row.setAttribute('style', 'background: #9df6ff; text-align: center; line-height: 4px; border-top: 0'); // e6fbff
	data = document.createElement('td');
	data.setAttribute('colspan', '4');
        data.innerText = 'Chair: '.concat(session.chair);
	row.appendChild(data);
      tbody.appendChild(row);
      //
      for (const event of session.events) {
	row = document.createElement('tr');
	data = document.createElement('td');
	var startDate = newDate(event.start, timezone);
	data.innerText = printableTime(startDate);
	row.appendChild(data);
	data = document.createElement('td');
	var endDate = newDate(event.end, timezone);
	data.innerText = printableTime(endDate);
	row.appendChild(data);
	if (event.type == 'break') {
	  row.setAttribute('style', 'background: #dddddd;');
	  data = document.createElement('td');
	  data.setAttribute('colspan', '2');
	  data.innerText = 'Break';
	  row.appendChild(data);
	} else if (event.type == 'shortbreak') {
	  row.setAttribute('style', 'line-height: 1.6; background: #dddddd;');
	  data = document.createElement('td');
	  data.setAttribute('colspan', '2');
	  data.innerText = 'Break';
	  row.appendChild(data);
	} else if (event.type == 'talk') {
	  data = document.createElement('td');
	  data.innerText = event.authors;
	  row.appendChild(data);
	  data = document.createElement('td');
	  data.innerText = event.title;
	  row.appendChild(data);
	} else if (event.type == 'GM') {
	  row.setAttribute('style', 'font-variant: small-caps; background: #b1a5ba; color: #ffffff;'); //fdffb6
	  data = document.createElement('td');
	  data.setAttribute('colspan', '2');
	  data.innerText = 'FSCD General Meeting';
	  row.appendChild(data);
	} else if (event.type == 'price') {
//	  row.setAttribute('style', 'background: #b1a5ba; color: #ffffff; line-height: 1;');
//	  data = document.createElement('td');
//	  data.setAttribute('colspan', '2');
//	  data.innerText = 'Winner announcement of the best paper award by junior researchers';
//	  row.appendChild(data);
	  row.setAttribute('style', 'background: #f4e2ff; color: #fffffaf;');
	  data = document.createElement('td');
	  data.innerText = event.authors;
	  row.appendChild(data);
	  data = document.createElement('td');
	  data.innerText = 'Best paper by junior researcher: \n'.concat(event.title);
	  row.appendChild(data);
	}
//	else if (event.type == 'opening') {
//	  data = document.createElement('td');
//	  row.setAttribute('style', 'background: #fdffb6; line-height: 0;');
//	  data.innerText = event.authors;
//	  row.appendChild(data);
//	  data = document.createElement('td');
//	  data.innerText = event.title;
//	  row.appendChild(data);
//	}
	tbody.appendChild(row);
      }
    }
    row = document.createElement('tr');
    tbody.appendChild(row);
  }
  table.appendChild(thead);
  table.appendChild(tbody);
  var programTable = document.getElementById('programTable');
  programTable.innerHTML = '';
  programTable.appendChild(table);
}
